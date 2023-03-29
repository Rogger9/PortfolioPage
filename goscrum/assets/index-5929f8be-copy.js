function JP(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r]
    if (typeof n != 'string' && !Array.isArray(n)) {
      for (const o in n)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(n, o)
          i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => n[o] })
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }))
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o)
  new MutationObserver(o => {
    for (const i of o)
      if (i.type === 'childList')
        for (const a of i.addedNodes) a.tagName === 'LINK' && a.rel === 'modulepreload' && n(a)
  }).observe(document, { childList: !0, subtree: !0 })
  function r(o) {
    const i = {}
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    )
  }
  function n(o) {
    if (o.ep) return
    o.ep = !0
    const i = r(o)
    fetch(o.href, i)
  }
})()
var Gs =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {}
function eE(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
var x = {},
  tE = {
    get exports() {
      return x
    },
    set exports(e) {
      x = e
    },
  },
  tc = {},
  y = {},
  rE = {
    get exports() {
      return y
    },
    set exports(e) {
      y = e
    },
  },
  G = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vs = Symbol.for('react.element'),
  nE = Symbol.for('react.portal'),
  oE = Symbol.for('react.fragment'),
  iE = Symbol.for('react.strict_mode'),
  aE = Symbol.for('react.profiler'),
  sE = Symbol.for('react.provider'),
  lE = Symbol.for('react.context'),
  uE = Symbol.for('react.forward_ref'),
  cE = Symbol.for('react.suspense'),
  dE = Symbol.for('react.memo'),
  fE = Symbol.for('react.lazy'),
  lg = Symbol.iterator
function hE(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (lg && e[lg]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var mb = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  vb = Object.assign,
  gb = {}
function $i(e, t, r) {
  ;(this.props = e), (this.context = t), (this.refs = gb), (this.updater = r || mb)
}
$i.prototype.isReactComponent = {}
$i.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
$i.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function yb() {}
yb.prototype = $i.prototype
function $p(e, t, r) {
  ;(this.props = e), (this.context = t), (this.refs = gb), (this.updater = r || mb)
}
var jp = ($p.prototype = new yb())
jp.constructor = $p
vb(jp, $i.prototype)
jp.isPureReactComponent = !0
var ug = Array.isArray,
  bb = Object.prototype.hasOwnProperty,
  Mp = { current: null },
  Sb = { key: !0, ref: !0, __self: !0, __source: !0 }
function xb(e, t, r) {
  var n,
    o = {},
    i = null,
    a = null
  if (t != null)
    for (n in (t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      bb.call(t, n) && !Sb.hasOwnProperty(n) && (o[n] = t[n])
  var s = arguments.length - 2
  if (s === 1) o.children = r
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2]
    o.children = l
  }
  if (e && e.defaultProps) for (n in ((s = e.defaultProps), s)) o[n] === void 0 && (o[n] = s[n])
  return { $$typeof: vs, type: e, key: i, ref: a, props: o, _owner: Mp.current }
}
function pE(e, t) {
  return { $$typeof: vs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
}
function Op(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === vs
}
function mE(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (r) {
      return t[r]
    })
  )
}
var cg = /\/+/g
function vd(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? mE('' + e.key) : t.toString(36)
}
function Pl(e, t, r, n, o) {
  var i = typeof e
  ;(i === 'undefined' || i === 'boolean') && (e = null)
  var a = !1
  if (e === null) a = !0
  else
    switch (i) {
      case 'string':
      case 'number':
        a = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case vs:
          case nE:
            a = !0
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = n === '' ? '.' + vd(a, 0) : n),
      ug(o)
        ? ((r = ''),
          e != null && (r = e.replace(cg, '$&/') + '/'),
          Pl(o, t, r, '', function (u) {
            return u
          }))
        : o != null &&
          (Op(o) &&
            (o = pE(
              o,
              r +
                (!o.key || (a && a.key === o.key) ? '' : ('' + o.key).replace(cg, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    )
  if (((a = 0), (n = n === '' ? '.' : n + ':'), ug(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s]
      var l = n + vd(i, s)
      a += Pl(i, t, r, l, o)
    }
  else if (((l = hE(e)), typeof l == 'function'))
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (l = n + vd(i, s++)), (a += Pl(i, t, r, l, o))
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return a
}
function Ks(e, t, r) {
  if (e == null) return e
  var n = [],
    o = 0
  return (
    Pl(e, n, '', '', function (i) {
      return t.call(r, i, o++)
    }),
    n
  )
}
function vE(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (r) {
          ;(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = r))
        },
        function (r) {
          ;(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = r))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var mt = { current: null },
  El = { transition: null },
  gE = { ReactCurrentDispatcher: mt, ReactCurrentBatchConfig: El, ReactCurrentOwner: Mp }
G.Children = {
  map: Ks,
  forEach: function (e, t, r) {
    Ks(
      e,
      function () {
        t.apply(this, arguments)
      },
      r
    )
  },
  count: function (e) {
    var t = 0
    return (
      Ks(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      Ks(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Op(e)) throw Error('React.Children.only expected to receive a single React element child.')
    return e
  },
}
G.Component = $i
G.Fragment = oE
G.Profiler = aE
G.PureComponent = $p
G.StrictMode = iE
G.Suspense = cE
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gE
G.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.'
    )
  var n = vb({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Mp.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps
    for (l in t)
      bb.call(t, l) &&
        !Sb.hasOwnProperty(l) &&
        (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
  }
  var l = arguments.length - 2
  if (l === 1) n.children = r
  else if (1 < l) {
    s = Array(l)
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2]
    n.children = s
  }
  return { $$typeof: vs, type: e.type, key: o, ref: i, props: n, _owner: a }
}
G.createContext = function (e) {
  return (
    (e = {
      $$typeof: lE,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: sE, _context: e }),
    (e.Consumer = e)
  )
}
G.createElement = xb
G.createFactory = function (e) {
  var t = xb.bind(null, e)
  return (t.type = e), t
}
G.createRef = function () {
  return { current: null }
}
G.forwardRef = function (e) {
  return { $$typeof: uE, render: e }
}
G.isValidElement = Op
G.lazy = function (e) {
  return { $$typeof: fE, _payload: { _status: -1, _result: e }, _init: vE }
}
G.memo = function (e, t) {
  return { $$typeof: dE, type: e, compare: t === void 0 ? null : t }
}
G.startTransition = function (e) {
  var t = El.transition
  El.transition = {}
  try {
    e()
  } finally {
    El.transition = t
  }
}
G.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
G.useCallback = function (e, t) {
  return mt.current.useCallback(e, t)
}
G.useContext = function (e) {
  return mt.current.useContext(e)
}
G.useDebugValue = function () {}
G.useDeferredValue = function (e) {
  return mt.current.useDeferredValue(e)
}
G.useEffect = function (e, t) {
  return mt.current.useEffect(e, t)
}
G.useId = function () {
  return mt.current.useId()
}
G.useImperativeHandle = function (e, t, r) {
  return mt.current.useImperativeHandle(e, t, r)
}
G.useInsertionEffect = function (e, t) {
  return mt.current.useInsertionEffect(e, t)
}
G.useLayoutEffect = function (e, t) {
  return mt.current.useLayoutEffect(e, t)
}
G.useMemo = function (e, t) {
  return mt.current.useMemo(e, t)
}
G.useReducer = function (e, t, r) {
  return mt.current.useReducer(e, t, r)
}
G.useRef = function (e) {
  return mt.current.useRef(e)
}
G.useState = function (e) {
  return mt.current.useState(e)
}
G.useSyncExternalStore = function (e, t, r) {
  return mt.current.useSyncExternalStore(e, t, r)
}
G.useTransition = function () {
  return mt.current.useTransition()
}
G.version = '18.2.0'
;(function (e) {
  e.exports = G
})(rE)
const so = eE(y),
  Ma = JP({ __proto__: null, default: so }, [y])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yE = y,
  bE = Symbol.for('react.element'),
  SE = Symbol.for('react.fragment'),
  xE = Object.prototype.hasOwnProperty,
  wE = yE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  kE = { key: !0, ref: !0, __self: !0, __source: !0 }
function wb(e, t, r) {
  var n,
    o = {},
    i = null,
    a = null
  r !== void 0 && (i = '' + r),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (a = t.ref)
  for (n in t) xE.call(t, n) && !kE.hasOwnProperty(n) && (o[n] = t[n])
  if (e && e.defaultProps) for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n])
  return { $$typeof: bE, type: e, key: i, ref: a, props: o, _owner: wE.current }
}
tc.Fragment = SE
tc.jsx = wb
tc.jsxs = wb
;(function (e) {
  e.exports = tc
})(tE)
var vi = {},
  CE = {
    get exports() {
      return vi
    },
    set exports(e) {
      vi = e
    },
  },
  It = {},
  Df = {},
  _E = {
    get exports() {
      return Df
    },
    set exports(e) {
      Df = e
    },
  },
  kb = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(O, L) {
    var N = O.length
    O.push(L)
    e: for (; 0 < N; ) {
      var V = (N - 1) >>> 1,
        oe = O[V]
      if (0 < o(oe, L)) (O[V] = L), (O[N] = oe), (N = V)
      else break e
    }
  }
  function r(O) {
    return O.length === 0 ? null : O[0]
  }
  function n(O) {
    if (O.length === 0) return null
    var L = O[0],
      N = O.pop()
    if (N !== L) {
      O[0] = N
      e: for (var V = 0, oe = O.length, U = oe >>> 1; V < U; ) {
        var $e = 2 * (V + 1) - 1,
          _t = O[$e],
          Oe = $e + 1,
          je = O[Oe]
        if (0 > o(_t, N))
          Oe < oe && 0 > o(je, _t)
            ? ((O[V] = je), (O[Oe] = N), (V = Oe))
            : ((O[V] = _t), (O[$e] = N), (V = $e))
        else if (Oe < oe && 0 > o(je, N)) (O[V] = je), (O[Oe] = N), (V = Oe)
        else break e
      }
    }
    return L
  }
  function o(O, L) {
    var N = O.sortIndex - L.sortIndex
    return N !== 0 ? N : O.id - L.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance
    e.unstable_now = function () {
      return i.now()
    }
  } else {
    var a = Date,
      s = a.now()
    e.unstable_now = function () {
      return a.now() - s
    }
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    m = !1,
    p = !1,
    S = typeof setTimeout == 'function' ? setTimeout : null,
    g = typeof clearTimeout == 'function' ? clearTimeout : null,
    v = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function b(O) {
    for (var L = r(u); L !== null; ) {
      if (L.callback === null) n(u)
      else if (L.startTime <= O) n(u), (L.sortIndex = L.expirationTime), t(l, L)
      else break
      L = r(u)
    }
  }
  function k(O) {
    if (((p = !1), b(O), !m))
      if (r(l) !== null) (m = !0), Ce(C)
      else {
        var L = r(u)
        L !== null && et(k, L.startTime - O)
      }
  }
  function C(O, L) {
    ;(m = !1), p && ((p = !1), g(T), (T = -1)), (h = !0)
    var N = f
    try {
      for (b(L), d = r(l); d !== null && (!(d.expirationTime > L) || (O && !W())); ) {
        var V = d.callback
        if (typeof V == 'function') {
          ;(d.callback = null), (f = d.priorityLevel)
          var oe = V(d.expirationTime <= L)
          ;(L = e.unstable_now()),
            typeof oe == 'function' ? (d.callback = oe) : d === r(l) && n(l),
            b(L)
        } else n(l)
        d = r(l)
      }
      if (d !== null) var U = !0
      else {
        var $e = r(u)
        $e !== null && et(k, $e.startTime - L), (U = !1)
      }
      return U
    } finally {
      ;(d = null), (f = N), (h = !1)
    }
  }
  var R = !1,
    E = null,
    T = -1,
    M = 5,
    j = -1
  function W() {
    return !(e.unstable_now() - j < M)
  }
  function he() {
    if (E !== null) {
      var O = e.unstable_now()
      j = O
      var L = !0
      try {
        L = E(!0, O)
      } finally {
        L ? ye() : ((R = !1), (E = null))
      }
    } else R = !1
  }
  var ye
  if (typeof v == 'function')
    ye = function () {
      v(he)
    }
  else if (typeof MessageChannel < 'u') {
    var J = new MessageChannel(),
      se = J.port2
    ;(J.port1.onmessage = he),
      (ye = function () {
        se.postMessage(null)
      })
  } else
    ye = function () {
      S(he, 0)
    }
  function Ce(O) {
    ;(E = O), R || ((R = !0), ye())
  }
  function et(O, L) {
    T = S(function () {
      O(e.unstable_now())
    }, L)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null
    }),
    (e.unstable_continueExecution = function () {
      m || h || ((m = !0), Ce(C))
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (M = 0 < O ? Math.floor(1e3 / O) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(l)
    }),
    (e.unstable_next = function (O) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var L = 3
          break
        default:
          L = f
      }
      var N = f
      f = L
      try {
        return O()
      } finally {
        f = N
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, L) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          O = 3
      }
      var N = f
      f = O
      try {
        return L()
      } finally {
        f = N
      }
    }),
    (e.unstable_scheduleCallback = function (O, L, N) {
      var V = e.unstable_now()
      switch (
        (typeof N == 'object' && N !== null
          ? ((N = N.delay), (N = typeof N == 'number' && 0 < N ? V + N : V))
          : (N = V),
        O)
      ) {
        case 1:
          var oe = -1
          break
        case 2:
          oe = 250
          break
        case 5:
          oe = 1073741823
          break
        case 4:
          oe = 1e4
          break
        default:
          oe = 5e3
      }
      return (
        (oe = N + oe),
        (O = {
          id: c++,
          callback: L,
          priorityLevel: O,
          startTime: N,
          expirationTime: oe,
          sortIndex: -1,
        }),
        N > V
          ? ((O.sortIndex = N),
            t(u, O),
            r(l) === null && O === r(u) && (p ? (g(T), (T = -1)) : (p = !0), et(k, N - V)))
          : ((O.sortIndex = oe), t(l, O), m || h || ((m = !0), Ce(C))),
        O
      )
    }),
    (e.unstable_shouldYield = W),
    (e.unstable_wrapCallback = function (O) {
      var L = f
      return function () {
        var N = f
        f = L
        try {
          return O.apply(this, arguments)
        } finally {
          f = N
        }
      }
    })
})(kb)
;(function (e) {
  e.exports = kb
})(_E)
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cb = y,
  jt = Df
function $(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, r = 1;
    r < arguments.length;
    r++
  )
    t += '&args[]=' + encodeURIComponent(arguments[r])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var _b = new Set(),
  Oa = {}
function So(e, t) {
  gi(e, t), gi(e + 'Capture', t)
}
function gi(e, t) {
  for (Oa[e] = t, e = 0; e < t.length; e++) _b.add(t[e])
}
var Br = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Nf = Object.prototype.hasOwnProperty,
  PE =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  dg = {},
  fg = {}
function EE(e) {
  return Nf.call(fg, e) ? !0 : Nf.call(dg, e) ? !1 : PE.test(e) ? (fg[e] = !0) : ((dg[e] = !0), !1)
}
function TE(e, t, r, n) {
  if (r !== null && r.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function AE(e, t, r, n) {
  if (t === null || typeof t > 'u' || TE(e, t, r, n)) return !0
  if (n) return !1
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function vt(e, t, r, n, o, i, a) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a)
}
var Ze = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Ze[e] = new vt(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  Ze[t] = new vt(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Ze[e] = new vt(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  Ze[e] = new vt(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Ze[e] = new vt(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Ze[e] = new vt(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  Ze[e] = new vt(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Ze[e] = new vt(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  Ze[e] = new vt(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Ip = /[\-:]([a-z])/g
function Fp(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ip, Fp)
    Ze[t] = new vt(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ip, Fp)
    Ze[t] = new vt(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Ip, Fp)
  Ze[t] = new vt(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  Ze[e] = new vt(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
Ze.xlinkHref = new vt('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Ze[e] = new vt(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Dp(e, t, r, n) {
  var o = Ze.hasOwnProperty(t) ? Ze[t] : null
  ;(o !== null
    ? o.type !== 0
    : n || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (AE(t, r, o, n) && (r = null),
    n || o === null
      ? EE(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
      : o.mustUseProperty
      ? (e[o.propertyName] = r === null ? (o.type === 3 ? !1 : '') : r)
      : ((t = o.attributeName),
        (n = o.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (r = o === 3 || (o === 4 && r === !0) ? '' : '' + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
}
var qr = Cb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  qs = Symbol.for('react.element'),
  Io = Symbol.for('react.portal'),
  Fo = Symbol.for('react.fragment'),
  Np = Symbol.for('react.strict_mode'),
  zf = Symbol.for('react.profiler'),
  Pb = Symbol.for('react.provider'),
  Eb = Symbol.for('react.context'),
  zp = Symbol.for('react.forward_ref'),
  Lf = Symbol.for('react.suspense'),
  Bf = Symbol.for('react.suspense_list'),
  Lp = Symbol.for('react.memo'),
  en = Symbol.for('react.lazy'),
  Tb = Symbol.for('react.offscreen'),
  hg = Symbol.iterator
function Wi(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (hg && e[hg]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var Ae = Object.assign,
  gd
function ra(e) {
  if (gd === void 0)
    try {
      throw Error()
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/)
      gd = (t && t[1]) || ''
    }
  return (
    `
` +
    gd +
    e
  )
}
var yd = !1
function bd(e, t) {
  if (!e || yd) return ''
  yd = !0
  var r = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var n = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          n = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        n = u
      }
      e()
    }
  } catch (u) {
    if (u && n && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
`),
          i = n.stack.split(`
`),
          a = o.length - 1,
          s = i.length - 1;
        1 <= a && 0 <= s && o[a] !== i[s];

      )
        s--
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || o[a] !== i[s])) {
                var l =
                  `
` + o[a].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                )
              }
            while (1 <= a && 0 <= s)
          break
        }
    }
  } finally {
    ;(yd = !1), (Error.prepareStackTrace = r)
  }
  return (e = e ? e.displayName || e.name : '') ? ra(e) : ''
}
function RE(e) {
  switch (e.tag) {
    case 5:
      return ra(e.type)
    case 16:
      return ra('Lazy')
    case 13:
      return ra('Suspense')
    case 19:
      return ra('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = bd(e.type, !1)), e
    case 11:
      return (e = bd(e.type.render, !1)), e
    case 1:
      return (e = bd(e.type, !0)), e
    default:
      return ''
  }
}
function Vf(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Fo:
      return 'Fragment'
    case Io:
      return 'Portal'
    case zf:
      return 'Profiler'
    case Np:
      return 'StrictMode'
    case Lf:
      return 'Suspense'
    case Bf:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Eb:
        return (e.displayName || 'Context') + '.Consumer'
      case Pb:
        return (e._context.displayName || 'Context') + '.Provider'
      case zp:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Lp:
        return (t = e.displayName || null), t !== null ? t : Vf(e.type) || 'Memo'
      case en:
        ;(t = e._payload), (e = e._init)
        try {
          return Vf(e(t))
        } catch {}
    }
  return null
}
function $E(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return Vf(t)
    case 8:
      return t === Np ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function _n(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function Ab(e) {
  var t = e.type
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
}
function jE(e) {
  var t = Ab(e) ? 'checked' : 'value',
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof r < 'u' &&
    typeof r.get == 'function' &&
    typeof r.set == 'function'
  ) {
    var o = r.get,
      i = r.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this)
        },
        set: function (a) {
          ;(n = '' + a), i.call(this, a)
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n
        },
        setValue: function (a) {
          n = '' + a
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function Ys(e) {
  e._valueTracker || (e._valueTracker = jE(e))
}
function Rb(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var r = t.getValue(),
    n = ''
  return (
    e && (n = Ab(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  )
}
function ru(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Wf(e, t) {
  var r = t.checked
  return Ae({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  })
}
function pg(e, t) {
  var r = t.defaultValue == null ? '' : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked
  ;(r = _n(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    })
}
function $b(e, t) {
  ;(t = t.checked), t != null && Dp(e, 'checked', t, !1)
}
function Uf(e, t) {
  $b(e, t)
  var r = _n(t.value),
    n = t.type
  if (r != null)
    n === 'number'
      ? ((r === 0 && e.value === '') || e.value != r) && (e.value = '' + r)
      : e.value !== '' + r && (e.value = '' + r)
  else if (n === 'submit' || n === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? Hf(e, t.type, r)
    : t.hasOwnProperty('defaultValue') && Hf(e, t.type, _n(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function mg(e, t, r) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var n = t.type
    if (!((n !== 'submit' && n !== 'reset') || (t.value !== void 0 && t.value !== null))) return
    ;(t = '' + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(r = e.name),
    r !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== '' && (e.name = r)
}
function Hf(e, t, r) {
  ;(t !== 'number' || ru(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + r && (e.defaultValue = '' + r))
}
var na = Array.isArray
function Qo(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < r.length; o++) t['$' + r[o]] = !0
    for (r = 0; r < e.length; r++)
      (o = t.hasOwnProperty('$' + e[r].value)),
        e[r].selected !== o && (e[r].selected = o),
        o && n && (e[r].defaultSelected = !0)
  } else {
    for (r = '' + _n(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        ;(e[o].selected = !0), n && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function Gf(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error($(91))
  return Ae({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function vg(e, t) {
  var r = t.value
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error($(92))
      if (na(r)) {
        if (1 < r.length) throw Error($(93))
        r = r[0]
      }
      t = r
    }
    t == null && (t = ''), (r = t)
  }
  e._wrapperState = { initialValue: _n(r) }
}
function jb(e, t) {
  var r = _n(t.value),
    n = _n(t.defaultValue)
  r != null &&
    ((r = '' + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = '' + n)
}
function gg(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function Mb(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function Kf(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Mb(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var Xs,
  Ob = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, o)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t
    else {
      for (
        Xs = Xs || document.createElement('div'),
          Xs.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Xs.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Ia(e, t) {
  if (t) {
    var r = e.firstChild
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var fa = {
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
    strokeWidth: !0,
  },
  ME = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(fa).forEach(function (e) {
  ME.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (fa[t] = fa[e])
  })
})
function Ib(e, t, r) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : r || typeof t != 'number' || t === 0 || (fa.hasOwnProperty(e) && fa[e])
    ? ('' + t).trim()
    : t + 'px'
}
function Fb(e, t) {
  e = e.style
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf('--') === 0,
        o = Ib(r, t[r], n)
      r === 'float' && (r = 'cssFloat'), n ? e.setProperty(r, o) : (e[r] = o)
    }
}
var OE = Ae(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
)
function qf(e, t) {
  if (t) {
    if (OE[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error($(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error($(60))
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML))
        throw Error($(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error($(62))
  }
}
function Yf(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var Xf = null
function Bp(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var Qf = null,
  Zo = null,
  Jo = null
function yg(e) {
  if ((e = bs(e))) {
    if (typeof Qf != 'function') throw Error($(280))
    var t = e.stateNode
    t && ((t = ac(t)), Qf(e.stateNode, e.type, t))
  }
}
function Db(e) {
  Zo ? (Jo ? Jo.push(e) : (Jo = [e])) : (Zo = e)
}
function Nb() {
  if (Zo) {
    var e = Zo,
      t = Jo
    if (((Jo = Zo = null), yg(e), t)) for (e = 0; e < t.length; e++) yg(t[e])
  }
}
function zb(e, t) {
  return e(t)
}
function Lb() {}
var Sd = !1
function Bb(e, t, r) {
  if (Sd) return e(t, r)
  Sd = !0
  try {
    return zb(e, t, r)
  } finally {
    ;(Sd = !1), (Zo !== null || Jo !== null) && (Lb(), Nb())
  }
}
function Fa(e, t) {
  var r = e.stateNode
  if (r === null) return null
  var n = ac(r)
  if (n === null) return null
  r = n[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(n = !n.disabled) ||
        ((e = e.type),
        (n = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !n)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (r && typeof r != 'function') throw Error($(231, t, typeof r))
  return r
}
var Zf = !1
if (Br)
  try {
    var Ui = {}
    Object.defineProperty(Ui, 'passive', {
      get: function () {
        Zf = !0
      },
    }),
      window.addEventListener('test', Ui, Ui),
      window.removeEventListener('test', Ui, Ui)
  } catch {
    Zf = !1
  }
function IE(e, t, r, n, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(r, u)
  } catch (c) {
    this.onError(c)
  }
}
var ha = !1,
  nu = null,
  ou = !1,
  Jf = null,
  FE = {
    onError: function (e) {
      ;(ha = !0), (nu = e)
    },
  }
function DE(e, t, r, n, o, i, a, s, l) {
  ;(ha = !1), (nu = null), IE.apply(FE, arguments)
}
function NE(e, t, r, n, o, i, a, s, l) {
  if ((DE.apply(this, arguments), ha)) {
    if (ha) {
      var u = nu
      ;(ha = !1), (nu = null)
    } else throw Error($(198))
    ou || ((ou = !0), (Jf = u))
  }
}
function xo(e) {
  var t = e,
    r = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? r : null
}
function Vb(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated
  }
  return null
}
function bg(e) {
  if (xo(e) !== e) throw Error($(188))
}
function zE(e) {
  var t = e.alternate
  if (!t) {
    if (((t = xo(e)), t === null)) throw Error($(188))
    return t !== e ? null : e
  }
  for (var r = e, n = t; ; ) {
    var o = r.return
    if (o === null) break
    var i = o.alternate
    if (i === null) {
      if (((n = o.return), n !== null)) {
        r = n
        continue
      }
      break
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === r) return bg(o), e
        if (i === n) return bg(o), t
        i = i.sibling
      }
      throw Error($(188))
    }
    if (r.return !== n.return) (r = o), (n = i)
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === r) {
          ;(a = !0), (r = o), (n = i)
          break
        }
        if (s === n) {
          ;(a = !0), (n = o), (r = i)
          break
        }
        s = s.sibling
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === r) {
            ;(a = !0), (r = i), (n = o)
            break
          }
          if (s === n) {
            ;(a = !0), (n = i), (r = o)
            break
          }
          s = s.sibling
        }
        if (!a) throw Error($(189))
      }
    }
    if (r.alternate !== n) throw Error($(190))
  }
  if (r.tag !== 3) throw Error($(188))
  return r.stateNode.current === r ? e : t
}
function Wb(e) {
  return (e = zE(e)), e !== null ? Ub(e) : null
}
function Ub(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = Ub(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var Hb = jt.unstable_scheduleCallback,
  Sg = jt.unstable_cancelCallback,
  LE = jt.unstable_shouldYield,
  BE = jt.unstable_requestPaint,
  Me = jt.unstable_now,
  VE = jt.unstable_getCurrentPriorityLevel,
  Vp = jt.unstable_ImmediatePriority,
  Gb = jt.unstable_UserBlockingPriority,
  iu = jt.unstable_NormalPriority,
  WE = jt.unstable_LowPriority,
  Kb = jt.unstable_IdlePriority,
  rc = null,
  Sr = null
function UE(e) {
  if (Sr && typeof Sr.onCommitFiberRoot == 'function')
    try {
      Sr.onCommitFiberRoot(rc, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var or = Math.clz32 ? Math.clz32 : KE,
  HE = Math.log,
  GE = Math.LN2
function KE(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((HE(e) / GE) | 0)) | 0
}
var Qs = 64,
  Zs = 4194304
function oa(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
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
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function au(e, t) {
  var r = e.pendingLanes
  if (r === 0) return 0
  var n = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = r & 268435455
  if (a !== 0) {
    var s = a & ~o
    s !== 0 ? (n = oa(s)) : ((i &= a), i !== 0 && (n = oa(i)))
  } else (a = r & ~o), a !== 0 ? (n = oa(a)) : i !== 0 && (n = oa(i))
  if (n === 0) return 0
  if (
    t !== 0 &&
    t !== n &&
    !(t & o) &&
    ((o = n & -n), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - or(t)), (o = 1 << r), (n |= e[r]), (t &= ~o)
  return n
}
function qE(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
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
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function YE(e, t) {
  for (
    var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - or(i),
      s = 1 << a,
      l = o[a]
    l === -1 ? (!(s & r) || s & n) && (o[a] = qE(s, t)) : l <= t && (e.expiredLanes |= s), (i &= ~s)
  }
}
function eh(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function qb() {
  var e = Qs
  return (Qs <<= 1), !(Qs & 4194240) && (Qs = 64), e
}
function xd(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e)
  return t
}
function gs(e, t, r) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - or(t)),
    (e[t] = r)
}
function XE(e, t) {
  var r = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var n = e.eventTimes
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - or(r),
      i = 1 << o
    ;(t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~i)
  }
}
function Wp(e, t) {
  var r = (e.entangledLanes |= t)
  for (e = e.entanglements; r; ) {
    var n = 31 - or(r),
      o = 1 << n
    ;(o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o)
  }
}
var le = 0
function Yb(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var Xb,
  Up,
  Qb,
  Zb,
  Jb,
  th = !1,
  Js = [],
  fn = null,
  hn = null,
  pn = null,
  Da = new Map(),
  Na = new Map(),
  nn = [],
  QE =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function xg(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      fn = null
      break
    case 'dragenter':
    case 'dragleave':
      hn = null
      break
    case 'mouseover':
    case 'mouseout':
      pn = null
      break
    case 'pointerover':
    case 'pointerout':
      Da.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Na.delete(t.pointerId)
  }
}
function Hi(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = bs(t)), t !== null && Up(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function ZE(e, t, r, n, o) {
  switch (t) {
    case 'focusin':
      return (fn = Hi(fn, e, t, r, n, o)), !0
    case 'dragenter':
      return (hn = Hi(hn, e, t, r, n, o)), !0
    case 'mouseover':
      return (pn = Hi(pn, e, t, r, n, o)), !0
    case 'pointerover':
      var i = o.pointerId
      return Da.set(i, Hi(Da.get(i) || null, e, t, r, n, o)), !0
    case 'gotpointercapture':
      return (i = o.pointerId), Na.set(i, Hi(Na.get(i) || null, e, t, r, n, o)), !0
  }
  return !1
}
function eS(e) {
  var t = qn(e.target)
  if (t !== null) {
    var r = xo(t)
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = Vb(r)), t !== null)) {
          ;(e.blockedOn = t),
            Jb(e.priority, function () {
              Qb(r)
            })
          return
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function Tl(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = rh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (r === null) {
      r = e.nativeEvent
      var n = new r.constructor(r.type, r)
      ;(Xf = n), r.target.dispatchEvent(n), (Xf = null)
    } else return (t = bs(r)), t !== null && Up(t), (e.blockedOn = r), !1
    t.shift()
  }
  return !0
}
function wg(e, t, r) {
  Tl(e) && r.delete(t)
}
function JE() {
  ;(th = !1),
    fn !== null && Tl(fn) && (fn = null),
    hn !== null && Tl(hn) && (hn = null),
    pn !== null && Tl(pn) && (pn = null),
    Da.forEach(wg),
    Na.forEach(wg)
}
function Gi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    th || ((th = !0), jt.unstable_scheduleCallback(jt.unstable_NormalPriority, JE)))
}
function za(e) {
  function t(o) {
    return Gi(o, e)
  }
  if (0 < Js.length) {
    Gi(Js[0], e)
    for (var r = 1; r < Js.length; r++) {
      var n = Js[r]
      n.blockedOn === e && (n.blockedOn = null)
    }
  }
  for (
    fn !== null && Gi(fn, e),
      hn !== null && Gi(hn, e),
      pn !== null && Gi(pn, e),
      Da.forEach(t),
      Na.forEach(t),
      r = 0;
    r < nn.length;
    r++
  )
    (n = nn[r]), n.blockedOn === e && (n.blockedOn = null)
  for (; 0 < nn.length && ((r = nn[0]), r.blockedOn === null); )
    eS(r), r.blockedOn === null && nn.shift()
}
var ei = qr.ReactCurrentBatchConfig,
  su = !0
function e2(e, t, r, n) {
  var o = le,
    i = ei.transition
  ei.transition = null
  try {
    ;(le = 1), Hp(e, t, r, n)
  } finally {
    ;(le = o), (ei.transition = i)
  }
}
function t2(e, t, r, n) {
  var o = le,
    i = ei.transition
  ei.transition = null
  try {
    ;(le = 4), Hp(e, t, r, n)
  } finally {
    ;(le = o), (ei.transition = i)
  }
}
function Hp(e, t, r, n) {
  if (su) {
    var o = rh(e, t, r, n)
    if (o === null) $d(e, t, n, lu, r), xg(e, n)
    else if (ZE(o, e, t, r, n)) n.stopPropagation()
    else if ((xg(e, n), t & 4 && -1 < QE.indexOf(e))) {
      for (; o !== null; ) {
        var i = bs(o)
        if ((i !== null && Xb(i), (i = rh(e, t, r, n)), i === null && $d(e, t, n, lu, r), i === o))
          break
        o = i
      }
      o !== null && n.stopPropagation()
    } else $d(e, t, n, null, r)
  }
}
var lu = null
function rh(e, t, r, n) {
  if (((lu = null), (e = Bp(n)), (e = qn(e)), e !== null))
    if (((t = xo(e)), t === null)) e = null
    else if (((r = t.tag), r === 13)) {
      if (((e = Vb(t)), e !== null)) return e
      e = null
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (lu = e), null
}
function tS(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (VE()) {
        case Vp:
          return 1
        case Gb:
          return 4
        case iu:
        case WE:
          return 16
        case Kb:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var ln = null,
  Gp = null,
  Al = null
function rS() {
  if (Al) return Al
  var e,
    t = Gp,
    r = t.length,
    n,
    o = 'value' in ln ? ln.value : ln.textContent,
    i = o.length
  for (e = 0; e < r && t[e] === o[e]; e++);
  var a = r - e
  for (n = 1; n <= a && t[r - n] === o[i - n]; n++);
  return (Al = o.slice(e, 1 < n ? 1 - n : void 0))
}
function Rl(e) {
  var t = e.keyCode
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function el() {
  return !0
}
function kg() {
  return !1
}
function Ft(e) {
  function t(r, n, o, i, a) {
    ;(this._reactName = r),
      (this._targetInst = o),
      (this.type = n),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null)
    for (var s in e) e.hasOwnProperty(s) && ((r = e[s]), (this[s] = r ? r(i) : i[s]))
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? el
        : kg),
      (this.isPropagationStopped = kg),
      this
    )
  }
  return (
    Ae(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var r = this.nativeEvent
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
          (this.isDefaultPrevented = el))
      },
      stopPropagation: function () {
        var r = this.nativeEvent
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
          (this.isPropagationStopped = el))
      },
      persist: function () {},
      isPersistent: el,
    }),
    t
  )
}
var ji = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Kp = Ft(ji),
  ys = Ae({}, ji, { view: 0, detail: 0 }),
  r2 = Ft(ys),
  wd,
  kd,
  Ki,
  nc = Ae({}, ys, {
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
    getModifierState: qp,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Ki &&
            (Ki && e.type === 'mousemove'
              ? ((wd = e.screenX - Ki.screenX), (kd = e.screenY - Ki.screenY))
              : (kd = wd = 0),
            (Ki = e)),
          wd)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : kd
    },
  }),
  Cg = Ft(nc),
  n2 = Ae({}, nc, { dataTransfer: 0 }),
  o2 = Ft(n2),
  i2 = Ae({}, ys, { relatedTarget: 0 }),
  Cd = Ft(i2),
  a2 = Ae({}, ji, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  s2 = Ft(a2),
  l2 = Ae({}, ji, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  u2 = Ft(l2),
  c2 = Ae({}, ji, { data: 0 }),
  _g = Ft(c2),
  d2 = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  f2 = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  h2 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function p2(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = h2[e]) ? !!t[e] : !1
}
function qp() {
  return p2
}
var m2 = Ae({}, ys, {
    key: function (e) {
      if (e.key) {
        var t = d2[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Rl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? f2[e.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: qp,
    charCode: function (e) {
      return e.type === 'keypress' ? Rl(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Rl(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    },
  }),
  v2 = Ft(m2),
  g2 = Ae({}, nc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Pg = Ft(g2),
  y2 = Ae({}, ys, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: qp,
  }),
  b2 = Ft(y2),
  S2 = Ae({}, ji, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  x2 = Ft(S2),
  w2 = Ae({}, nc, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  k2 = Ft(w2),
  C2 = [9, 13, 27, 32],
  Yp = Br && 'CompositionEvent' in window,
  pa = null
Br && 'documentMode' in document && (pa = document.documentMode)
var _2 = Br && 'TextEvent' in window && !pa,
  nS = Br && (!Yp || (pa && 8 < pa && 11 >= pa)),
  Eg = String.fromCharCode(32),
  Tg = !1
function oS(e, t) {
  switch (e) {
    case 'keyup':
      return C2.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function iS(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Do = !1
function P2(e, t) {
  switch (e) {
    case 'compositionend':
      return iS(t)
    case 'keypress':
      return t.which !== 32 ? null : ((Tg = !0), Eg)
    case 'textInput':
      return (e = t.data), e === Eg && Tg ? null : e
    default:
      return null
  }
}
function E2(e, t) {
  if (Do)
    return e === 'compositionend' || (!Yp && oS(e, t))
      ? ((e = rS()), (Al = Gp = ln = null), (Do = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return nS && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var T2 = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
  week: !0,
}
function Ag(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!T2[e.type] : t === 'textarea'
}
function aS(e, t, r, n) {
  Db(n),
    (t = uu(t, 'onChange')),
    0 < t.length &&
      ((r = new Kp('onChange', 'change', null, r, n)), e.push({ event: r, listeners: t }))
}
var ma = null,
  La = null
function A2(e) {
  gS(e, 0)
}
function oc(e) {
  var t = Lo(e)
  if (Rb(t)) return e
}
function R2(e, t) {
  if (e === 'change') return t
}
var sS = !1
if (Br) {
  var _d
  if (Br) {
    var Pd = 'oninput' in document
    if (!Pd) {
      var Rg = document.createElement('div')
      Rg.setAttribute('oninput', 'return;'), (Pd = typeof Rg.oninput == 'function')
    }
    _d = Pd
  } else _d = !1
  sS = _d && (!document.documentMode || 9 < document.documentMode)
}
function $g() {
  ma && (ma.detachEvent('onpropertychange', lS), (La = ma = null))
}
function lS(e) {
  if (e.propertyName === 'value' && oc(La)) {
    var t = []
    aS(t, La, e, Bp(e)), Bb(A2, t)
  }
}
function $2(e, t, r) {
  e === 'focusin'
    ? ($g(), (ma = t), (La = r), ma.attachEvent('onpropertychange', lS))
    : e === 'focusout' && $g()
}
function j2(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return oc(La)
}
function M2(e, t) {
  if (e === 'click') return oc(t)
}
function O2(e, t) {
  if (e === 'input' || e === 'change') return oc(t)
}
function I2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var ar = typeof Object.is == 'function' ? Object.is : I2
function Ba(e, t) {
  if (ar(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
  var r = Object.keys(e),
    n = Object.keys(t)
  if (r.length !== n.length) return !1
  for (n = 0; n < r.length; n++) {
    var o = r[n]
    if (!Nf.call(t, o) || !ar(e[o], t[o])) return !1
  }
  return !0
}
function jg(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Mg(e, t) {
  var r = jg(e)
  e = 0
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e }
      e = n
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling
          break e
        }
        r = r.parentNode
      }
      r = void 0
    }
    r = jg(r)
  }
}
function uS(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? uS(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function cS() {
  for (var e = window, t = ru(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == 'string'
    } catch {
      r = !1
    }
    if (r) e = t.contentWindow
    else break
    t = ru(e.document)
  }
  return t
}
function Xp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function F2(e) {
  var t = cS(),
    r = e.focusedElem,
    n = e.selectionRange
  if (t !== r && r && r.ownerDocument && uS(r.ownerDocument.documentElement, r)) {
    if (n !== null && Xp(r)) {
      if (((t = n.start), (e = n.end), e === void 0 && (e = t), 'selectionStart' in r))
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length))
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window), e.getSelection)
      ) {
        e = e.getSelection()
        var o = r.textContent.length,
          i = Math.min(n.start, o)
        ;(n = n.end === void 0 ? i : Math.min(n.end, o)),
          !e.extend && i > n && ((o = n), (n = i), (i = o)),
          (o = Mg(r, i))
        var a = Mg(r, n)
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > n
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)))
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof r.focus == 'function' && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var D2 = Br && 'documentMode' in document && 11 >= document.documentMode,
  No = null,
  nh = null,
  va = null,
  oh = !1
function Og(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument
  oh ||
    No == null ||
    No !== ru(n) ||
    ((n = No),
    'selectionStart' in n && Xp(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = ((n.ownerDocument && n.ownerDocument.defaultView) || window).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (va && Ba(va, n)) ||
      ((va = n),
      (n = uu(nh, 'onSelect')),
      0 < n.length &&
        ((t = new Kp('onSelect', 'select', null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = No))))
}
function tl(e, t) {
  var r = {}
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r['Webkit' + e] = 'webkit' + t),
    (r['Moz' + e] = 'moz' + t),
    r
  )
}
var zo = {
    animationend: tl('Animation', 'AnimationEnd'),
    animationiteration: tl('Animation', 'AnimationIteration'),
    animationstart: tl('Animation', 'AnimationStart'),
    transitionend: tl('Transition', 'TransitionEnd'),
  },
  Ed = {},
  dS = {}
Br &&
  ((dS = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete zo.animationend.animation,
    delete zo.animationiteration.animation,
    delete zo.animationstart.animation),
  'TransitionEvent' in window || delete zo.transitionend.transition)
function ic(e) {
  if (Ed[e]) return Ed[e]
  if (!zo[e]) return e
  var t = zo[e],
    r
  for (r in t) if (t.hasOwnProperty(r) && r in dS) return (Ed[e] = t[r])
  return e
}
var fS = ic('animationend'),
  hS = ic('animationiteration'),
  pS = ic('animationstart'),
  mS = ic('transitionend'),
  vS = new Map(),
  Ig =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function jn(e, t) {
  vS.set(e, t), So(t, [e])
}
for (var Td = 0; Td < Ig.length; Td++) {
  var Ad = Ig[Td],
    N2 = Ad.toLowerCase(),
    z2 = Ad[0].toUpperCase() + Ad.slice(1)
  jn(N2, 'on' + z2)
}
jn(fS, 'onAnimationEnd')
jn(hS, 'onAnimationIteration')
jn(pS, 'onAnimationStart')
jn('dblclick', 'onDoubleClick')
jn('focusin', 'onFocus')
jn('focusout', 'onBlur')
jn(mS, 'onTransitionEnd')
gi('onMouseEnter', ['mouseout', 'mouseover'])
gi('onMouseLeave', ['mouseout', 'mouseover'])
gi('onPointerEnter', ['pointerout', 'pointerover'])
gi('onPointerLeave', ['pointerout', 'pointerover'])
So('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '))
So(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')
)
So('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
So('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '))
So('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '))
So('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '))
var ia =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  L2 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ia))
function Fg(e, t, r) {
  var n = e.type || 'unknown-event'
  ;(e.currentTarget = r), NE(n, t, void 0, e), (e.currentTarget = null)
}
function gS(e, t) {
  t = (t & 4) !== 0
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      o = n.event
    n = n.listeners
    e: {
      var i = void 0
      if (t)
        for (var a = n.length - 1; 0 <= a; a--) {
          var s = n[a],
            l = s.instance,
            u = s.currentTarget
          if (((s = s.listener), l !== i && o.isPropagationStopped())) break e
          Fg(o, s, u), (i = l)
        }
      else
        for (a = 0; a < n.length; a++) {
          if (
            ((s = n[a]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== i && o.isPropagationStopped())
          )
            break e
          Fg(o, s, u), (i = l)
        }
    }
  }
  if (ou) throw ((e = Jf), (ou = !1), (Jf = null), e)
}
function pe(e, t) {
  var r = t[uh]
  r === void 0 && (r = t[uh] = new Set())
  var n = e + '__bubble'
  r.has(n) || (yS(t, e, 2, !1), r.add(n))
}
function Rd(e, t, r) {
  var n = 0
  t && (n |= 4), yS(r, e, n, t)
}
var rl = '_reactListening' + Math.random().toString(36).slice(2)
function Va(e) {
  if (!e[rl]) {
    ;(e[rl] = !0),
      _b.forEach(function (r) {
        r !== 'selectionchange' && (L2.has(r) || Rd(r, !1, e), Rd(r, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[rl] || ((t[rl] = !0), Rd('selectionchange', !1, t))
  }
}
function yS(e, t, r, n) {
  switch (tS(t)) {
    case 1:
      var o = e2
      break
    case 4:
      o = t2
      break
    default:
      o = Hp
  }
  ;(r = o.bind(null, t, r, e)),
    (o = void 0),
    !Zf || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
    n
      ? o !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: o })
        : e.addEventListener(t, r, !0)
      : o !== void 0
      ? e.addEventListener(t, r, { passive: o })
      : e.addEventListener(t, r, !1)
}
function $d(e, t, r, n, o) {
  var i = n
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return
      var a = n.tag
      if (a === 3 || a === 4) {
        var s = n.stateNode.containerInfo
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break
        if (a === 4)
          for (a = n.return; a !== null; ) {
            var l = a.tag
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo), l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return
            a = a.return
          }
        for (; s !== null; ) {
          if (((a = qn(s)), a === null)) return
          if (((l = a.tag), l === 5 || l === 6)) {
            n = i = a
            continue e
          }
          s = s.parentNode
        }
      }
      n = n.return
    }
  Bb(function () {
    var u = i,
      c = Bp(r),
      d = []
    e: {
      var f = vS.get(e)
      if (f !== void 0) {
        var h = Kp,
          m = e
        switch (e) {
          case 'keypress':
            if (Rl(r) === 0) break e
          case 'keydown':
          case 'keyup':
            h = v2
            break
          case 'focusin':
            ;(m = 'focus'), (h = Cd)
            break
          case 'focusout':
            ;(m = 'blur'), (h = Cd)
            break
          case 'beforeblur':
          case 'afterblur':
            h = Cd
            break
          case 'click':
            if (r.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            h = Cg
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            h = o2
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            h = b2
            break
          case fS:
          case hS:
          case pS:
            h = s2
            break
          case mS:
            h = x2
            break
          case 'scroll':
            h = r2
            break
          case 'wheel':
            h = k2
            break
          case 'copy':
          case 'cut':
          case 'paste':
            h = u2
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            h = Pg
        }
        var p = (t & 4) !== 0,
          S = !p && e === 'scroll',
          g = p ? (f !== null ? f + 'Capture' : null) : f
        p = []
        for (var v = u, b; v !== null; ) {
          b = v
          var k = b.stateNode
          if (
            (b.tag === 5 &&
              k !== null &&
              ((b = k), g !== null && ((k = Fa(v, g)), k != null && p.push(Wa(v, k, b)))),
            S)
          )
            break
          v = v.return
        }
        0 < p.length && ((f = new h(f, m, null, r, c)), d.push({ event: f, listeners: p }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (h = e === 'mouseout' || e === 'pointerout'),
          f && r !== Xf && (m = r.relatedTarget || r.fromElement) && (qn(m) || m[Vr]))
        )
          break e
        if (
          (h || f) &&
          ((f =
            c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window),
          h
            ? ((m = r.relatedTarget || r.toElement),
              (h = u),
              (m = m ? qn(m) : null),
              m !== null && ((S = xo(m)), m !== S || (m.tag !== 5 && m.tag !== 6)) && (m = null))
            : ((h = null), (m = u)),
          h !== m)
        ) {
          if (
            ((p = Cg),
            (k = 'onMouseLeave'),
            (g = 'onMouseEnter'),
            (v = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((p = Pg), (k = 'onPointerLeave'), (g = 'onPointerEnter'), (v = 'pointer')),
            (S = h == null ? f : Lo(h)),
            (b = m == null ? f : Lo(m)),
            (f = new p(k, v + 'leave', h, r, c)),
            (f.target = S),
            (f.relatedTarget = b),
            (k = null),
            qn(c) === u &&
              ((p = new p(g, v + 'enter', m, r, c)),
              (p.target = b),
              (p.relatedTarget = S),
              (k = p)),
            (S = k),
            h && m)
          )
            t: {
              for (p = h, g = m, v = 0, b = p; b; b = Eo(b)) v++
              for (b = 0, k = g; k; k = Eo(k)) b++
              for (; 0 < v - b; ) (p = Eo(p)), v--
              for (; 0 < b - v; ) (g = Eo(g)), b--
              for (; v--; ) {
                if (p === g || (g !== null && p === g.alternate)) break t
                ;(p = Eo(p)), (g = Eo(g))
              }
              p = null
            }
          else p = null
          h !== null && Dg(d, f, h, p, !1), m !== null && S !== null && Dg(d, S, m, p, !0)
        }
      }
      e: {
        if (
          ((f = u ? Lo(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === 'select' || (h === 'input' && f.type === 'file'))
        )
          var C = R2
        else if (Ag(f))
          if (sS) C = O2
          else {
            C = j2
            var R = $2
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (C = M2)
        if (C && (C = C(e, u))) {
          aS(d, C, r, c)
          break e
        }
        R && R(e, f, u),
          e === 'focusout' &&
            (R = f._wrapperState) &&
            R.controlled &&
            f.type === 'number' &&
            Hf(f, 'number', f.value)
      }
      switch (((R = u ? Lo(u) : window), e)) {
        case 'focusin':
          ;(Ag(R) || R.contentEditable === 'true') && ((No = R), (nh = u), (va = null))
          break
        case 'focusout':
          va = nh = No = null
          break
        case 'mousedown':
          oh = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(oh = !1), Og(d, r, c)
          break
        case 'selectionchange':
          if (D2) break
        case 'keydown':
        case 'keyup':
          Og(d, r, c)
      }
      var E
      if (Yp)
        e: {
          switch (e) {
            case 'compositionstart':
              var T = 'onCompositionStart'
              break e
            case 'compositionend':
              T = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              T = 'onCompositionUpdate'
              break e
          }
          T = void 0
        }
      else
        Do
          ? oS(e, r) && (T = 'onCompositionEnd')
          : e === 'keydown' && r.keyCode === 229 && (T = 'onCompositionStart')
      T &&
        (nS &&
          r.locale !== 'ko' &&
          (Do || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && Do && (E = rS())
            : ((ln = c), (Gp = 'value' in ln ? ln.value : ln.textContent), (Do = !0))),
        (R = uu(u, T)),
        0 < R.length &&
          ((T = new _g(T, e, null, r, c)),
          d.push({ event: T, listeners: R }),
          E ? (T.data = E) : ((E = iS(r)), E !== null && (T.data = E)))),
        (E = _2 ? P2(e, r) : E2(e, r)) &&
          ((u = uu(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new _g('onBeforeInput', 'beforeinput', null, r, c)),
            d.push({ event: c, listeners: u }),
            (c.data = E)))
    }
    gS(d, t)
  })
}
function Wa(e, t, r) {
  return { instance: e, listener: t, currentTarget: r }
}
function uu(e, t) {
  for (var r = t + 'Capture', n = []; e !== null; ) {
    var o = e,
      i = o.stateNode
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Fa(e, r)),
      i != null && n.unshift(Wa(e, i, o)),
      (i = Fa(e, t)),
      i != null && n.push(Wa(e, i, o))),
      (e = e.return)
  }
  return n
}
function Eo(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Dg(e, t, r, n, o) {
  for (var i = t._reactName, a = []; r !== null && r !== n; ) {
    var s = r,
      l = s.alternate,
      u = s.stateNode
    if (l !== null && l === n) break
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((l = Fa(r, i)), l != null && a.unshift(Wa(r, l, s)))
        : o || ((l = Fa(r, i)), l != null && a.push(Wa(r, l, s)))),
      (r = r.return)
  }
  a.length !== 0 && e.push({ event: t, listeners: a })
}
var B2 = /\r\n?/g,
  V2 = /\u0000|\uFFFD/g
function Ng(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      B2,
      `
`
    )
    .replace(V2, '')
}
function nl(e, t, r) {
  if (((t = Ng(t)), Ng(e) !== t && r)) throw Error($(425))
}
function cu() {}
var ih = null,
  ah = null
function sh(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var lh = typeof setTimeout == 'function' ? setTimeout : void 0,
  W2 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  zg = typeof Promise == 'function' ? Promise : void 0,
  U2 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof zg < 'u'
      ? function (e) {
          return zg.resolve(null).then(e).catch(H2)
        }
      : lh
function H2(e) {
  setTimeout(function () {
    throw e
  })
}
function jd(e, t) {
  var r = t,
    n = 0
  do {
    var o = r.nextSibling
    if ((e.removeChild(r), o && o.nodeType === 8))
      if (((r = o.data), r === '/$')) {
        if (n === 0) {
          e.removeChild(o), za(t)
          return
        }
        n--
      } else (r !== '$' && r !== '$?' && r !== '$!') || n++
    r = o
  } while (r)
  za(t)
}
function mn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function Lg(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data
      if (r === '$' || r === '$!' || r === '$?') {
        if (t === 0) return e
        t--
      } else r === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var Mi = Math.random().toString(36).slice(2),
  gr = '__reactFiber$' + Mi,
  Ua = '__reactProps$' + Mi,
  Vr = '__reactContainer$' + Mi,
  uh = '__reactEvents$' + Mi,
  G2 = '__reactListeners$' + Mi,
  K2 = '__reactHandles$' + Mi
function qn(e) {
  var t = e[gr]
  if (t) return t
  for (var r = e.parentNode; r; ) {
    if ((t = r[Vr] || r[gr])) {
      if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
        for (e = Lg(e); e !== null; ) {
          if ((r = e[gr])) return r
          e = Lg(e)
        }
      return t
    }
    ;(e = r), (r = e.parentNode)
  }
  return null
}
function bs(e) {
  return (
    (e = e[gr] || e[Vr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function Lo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error($(33))
}
function ac(e) {
  return e[Ua] || null
}
var ch = [],
  Bo = -1
function Mn(e) {
  return { current: e }
}
function ve(e) {
  0 > Bo || ((e.current = ch[Bo]), (ch[Bo] = null), Bo--)
}
function fe(e, t) {
  Bo++, (ch[Bo] = e.current), (e.current = t)
}
var Pn = {},
  lt = Mn(Pn),
  St = Mn(!1),
  lo = Pn
function yi(e, t) {
  var r = e.type.contextTypes
  if (!r) return Pn
  var n = e.stateNode
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext
  var o = {},
    i
  for (i in r) o[i] = t[i]
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  )
}
function xt(e) {
  return (e = e.childContextTypes), e != null
}
function du() {
  ve(St), ve(lt)
}
function Bg(e, t, r) {
  if (lt.current !== Pn) throw Error($(168))
  fe(lt, t), fe(St, r)
}
function bS(e, t, r) {
  var n = e.stateNode
  if (((t = t.childContextTypes), typeof n.getChildContext != 'function')) return r
  n = n.getChildContext()
  for (var o in n) if (!(o in t)) throw Error($(108, $E(e) || 'Unknown', o))
  return Ae({}, r, n)
}
function fu(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Pn),
    (lo = lt.current),
    fe(lt, e),
    fe(St, St.current),
    !0
  )
}
function Vg(e, t, r) {
  var n = e.stateNode
  if (!n) throw Error($(169))
  r
    ? ((e = bS(e, t, lo)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      ve(St),
      ve(lt),
      fe(lt, e))
    : ve(St),
    fe(St, r)
}
var jr = null,
  sc = !1,
  Md = !1
function SS(e) {
  jr === null ? (jr = [e]) : jr.push(e)
}
function q2(e) {
  ;(sc = !0), SS(e)
}
function On() {
  if (!Md && jr !== null) {
    Md = !0
    var e = 0,
      t = le
    try {
      var r = jr
      for (le = 1; e < r.length; e++) {
        var n = r[e]
        do n = n(!0)
        while (n !== null)
      }
      ;(jr = null), (sc = !1)
    } catch (o) {
      throw (jr !== null && (jr = jr.slice(e + 1)), Hb(Vp, On), o)
    } finally {
      ;(le = t), (Md = !1)
    }
  }
  return null
}
var Vo = [],
  Wo = 0,
  hu = null,
  pu = 0,
  Bt = [],
  Vt = 0,
  uo = null,
  Or = 1,
  Ir = ''
function Bn(e, t) {
  ;(Vo[Wo++] = pu), (Vo[Wo++] = hu), (hu = e), (pu = t)
}
function xS(e, t, r) {
  ;(Bt[Vt++] = Or), (Bt[Vt++] = Ir), (Bt[Vt++] = uo), (uo = e)
  var n = Or
  e = Ir
  var o = 32 - or(n) - 1
  ;(n &= ~(1 << o)), (r += 1)
  var i = 32 - or(t) + o
  if (30 < i) {
    var a = o - (o % 5)
    ;(i = (n & ((1 << a) - 1)).toString(32)),
      (n >>= a),
      (o -= a),
      (Or = (1 << (32 - or(t) + o)) | (r << o) | n),
      (Ir = i + e)
  } else (Or = (1 << i) | (r << o) | n), (Ir = e)
}
function Qp(e) {
  e.return !== null && (Bn(e, 1), xS(e, 1, 0))
}
function Zp(e) {
  for (; e === hu; ) (hu = Vo[--Wo]), (Vo[Wo] = null), (pu = Vo[--Wo]), (Vo[Wo] = null)
  for (; e === uo; )
    (uo = Bt[--Vt]),
      (Bt[Vt] = null),
      (Ir = Bt[--Vt]),
      (Bt[Vt] = null),
      (Or = Bt[--Vt]),
      (Bt[Vt] = null)
}
var At = null,
  Tt = null,
  we = !1,
  tr = null
function wS(e, t) {
  var r = Wt(5, null, null, 0)
  ;(r.elementType = 'DELETED'),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r)
}
function Wg(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type
      return (
        (t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (At = e), (Tt = mn(t.firstChild)), !0) : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (At = e), (Tt = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = uo !== null ? { id: Or, overflow: Ir } : null),
            (e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }),
            (r = Wt(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (At = e),
            (Tt = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function dh(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function fh(e) {
  if (we) {
    var t = Tt
    if (t) {
      var r = t
      if (!Wg(e, t)) {
        if (dh(e)) throw Error($(418))
        t = mn(r.nextSibling)
        var n = At
        t && Wg(e, t) ? wS(n, r) : ((e.flags = (e.flags & -4097) | 2), (we = !1), (At = e))
      }
    } else {
      if (dh(e)) throw Error($(418))
      ;(e.flags = (e.flags & -4097) | 2), (we = !1), (At = e)
    }
  }
}
function Ug(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return
  At = e
}
function ol(e) {
  if (e !== At) return !1
  if (!we) return Ug(e), (we = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !sh(e.type, e.memoizedProps))),
    t && (t = Tt))
  ) {
    if (dh(e)) throw (kS(), Error($(418)))
    for (; t; ) wS(e, t), (t = mn(t.nextSibling))
  }
  if ((Ug(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error($(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data
          if (r === '/$') {
            if (t === 0) {
              Tt = mn(e.nextSibling)
              break e
            }
            t--
          } else (r !== '$' && r !== '$!' && r !== '$?') || t++
        }
        e = e.nextSibling
      }
      Tt = null
    }
  } else Tt = At ? mn(e.stateNode.nextSibling) : null
  return !0
}
function kS() {
  for (var e = Tt; e; ) e = mn(e.nextSibling)
}
function bi() {
  ;(Tt = At = null), (we = !1)
}
function Jp(e) {
  tr === null ? (tr = [e]) : tr.push(e)
}
var Y2 = qr.ReactCurrentBatchConfig
function Jt(e, t) {
  if (e && e.defaultProps) {
    ;(t = Ae({}, t)), (e = e.defaultProps)
    for (var r in e) t[r] === void 0 && (t[r] = e[r])
    return t
  }
  return t
}
var mu = Mn(null),
  vu = null,
  Uo = null,
  em = null
function tm() {
  em = Uo = vu = null
}
function rm(e) {
  var t = mu.current
  ve(mu), (e._currentValue = t)
}
function hh(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break
    e = e.return
  }
}
function ti(e, t) {
  ;(vu = e),
    (em = Uo = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (bt = !0), (e.firstContext = null))
}
function Gt(e) {
  var t = e._currentValue
  if (em !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Uo === null)) {
      if (vu === null) throw Error($(308))
      ;(Uo = e), (vu.dependencies = { lanes: 0, firstContext: e })
    } else Uo = Uo.next = e
  return t
}
var Yn = null
function nm(e) {
  Yn === null ? (Yn = [e]) : Yn.push(e)
}
function CS(e, t, r, n) {
  var o = t.interleaved
  return (
    o === null ? ((r.next = r), nm(t)) : ((r.next = o.next), (o.next = r)),
    (t.interleaved = r),
    Wr(e, n)
  )
}
function Wr(e, t) {
  e.lanes |= t
  var r = e.alternate
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return)
  return r.tag === 3 ? r.stateNode : null
}
var tn = !1
function om(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function _S(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function Nr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }
}
function vn(e, t, r) {
  var n = e.updateQueue
  if (n === null) return null
  if (((n = n.shared), Z & 2)) {
    var o = n.pending
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (n.pending = t), Wr(e, r)
  }
  return (
    (o = n.interleaved),
    o === null ? ((t.next = t), nm(n)) : ((t.next = o.next), (o.next = t)),
    (n.interleaved = t),
    Wr(e, r)
  )
}
function $l(e, t, r) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
    var n = t.lanes
    ;(n &= e.pendingLanes), (r |= n), (t.lanes = r), Wp(e, r)
  }
}
function Hg(e, t) {
  var r = e.updateQueue,
    n = e.alternate
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var o = null,
      i = null
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var a = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        }
        i === null ? (o = i = a) : (i = i.next = a), (r = r.next)
      } while (r !== null)
      i === null ? (o = i = t) : (i = i.next = t)
    } else o = i = t
    ;(r = {
      baseState: n.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r)
    return
  }
  ;(e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t)
}
function gu(e, t, r, n) {
  var o = e.updateQueue
  tn = !1
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    s = o.shared.pending
  if (s !== null) {
    o.shared.pending = null
    var l = s,
      u = l.next
    ;(l.next = null), a === null ? (i = u) : (a.next = u), (a = l)
    var c = e.alternate
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== a && (s === null ? (c.firstBaseUpdate = u) : (s.next = u), (c.lastBaseUpdate = l)))
  }
  if (i !== null) {
    var d = o.baseState
    ;(a = 0), (c = u = l = null), (s = i)
    do {
      var f = s.lane,
        h = s.eventTime
      if ((n & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            })
        e: {
          var m = e,
            p = s
          switch (((f = t), (h = r), p.tag)) {
            case 1:
              if (((m = p.payload), typeof m == 'function')) {
                d = m.call(h, d, f)
                break e
              }
              d = m
              break e
            case 3:
              m.flags = (m.flags & -65537) | 128
            case 0:
              if (((m = p.payload), (f = typeof m == 'function' ? m.call(h, d, f) : m), f == null))
                break e
              d = Ae({}, d, f)
              break e
            case 2:
              tn = !0
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64), (f = o.effects), f === null ? (o.effects = [s]) : f.push(s))
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (a |= f)
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break
        ;(f = s), (s = f.next), (f.next = null), (o.lastBaseUpdate = f), (o.shared.pending = null)
      }
    } while (1)
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t
      do (a |= o.lane), (o = o.next)
      while (o !== t)
    } else i === null && (o.shared.lanes = 0)
    ;(fo |= a), (e.lanes = a), (e.memoizedState = d)
  }
}
function Gg(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        o = n.callback
      if (o !== null) {
        if (((n.callback = null), (n = r), typeof o != 'function')) throw Error($(191, o))
        o.call(n)
      }
    }
}
var PS = new Cb.Component().refs
function ph(e, t, r, n) {
  ;(t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : Ae({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r)
}
var lc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? xo(e) === e : !1
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals
    var n = ht(),
      o = yn(e),
      i = Nr(n, o)
    ;(i.payload = t),
      r != null && (i.callback = r),
      (t = vn(e, i, o)),
      t !== null && (ir(t, e, o, n), $l(t, e, o))
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals
    var n = ht(),
      o = yn(e),
      i = Nr(n, o)
    ;(i.tag = 1),
      (i.payload = t),
      r != null && (i.callback = r),
      (t = vn(e, i, o)),
      t !== null && (ir(t, e, o, n), $l(t, e, o))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var r = ht(),
      n = yn(e),
      o = Nr(r, n)
    ;(o.tag = 2),
      t != null && (o.callback = t),
      (t = vn(e, o, n)),
      t !== null && (ir(t, e, n, r), $l(t, e, n))
  },
}
function Kg(e, t, r, n, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(n, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ba(r, n) || !Ba(o, i)
      : !0
  )
}
function ES(e, t, r) {
  var n = !1,
    o = Pn,
    i = t.contextType
  return (
    typeof i == 'object' && i !== null
      ? (i = Gt(i))
      : ((o = xt(t) ? lo : lt.current),
        (n = t.contextTypes),
        (i = (n = n != null) ? yi(e, o) : Pn)),
    (t = new t(r, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = lc),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  )
}
function qg(e, t, r, n) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && lc.enqueueReplaceState(t, t.state, null)
}
function mh(e, t, r, n) {
  var o = e.stateNode
  ;(o.props = r), (o.state = e.memoizedState), (o.refs = PS), om(e)
  var i = t.contextType
  typeof i == 'object' && i !== null
    ? (o.context = Gt(i))
    : ((i = xt(t) ? lo : lt.current), (o.context = yi(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (ph(e, t, i, r), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && lc.enqueueReplaceState(o, o.state, null),
      gu(e, r, o, n),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function qi(e, t, r) {
  if (((e = r.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error($(309))
        var n = r.stateNode
      }
      if (!n) throw Error($(147, e))
      var o = n,
        i = '' + e
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = o.refs
            s === PS && (s = o.refs = {}), a === null ? delete s[i] : (s[i] = a)
          }),
          (t._stringRef = i),
          t)
    }
    if (typeof e != 'string') throw Error($(284))
    if (!r._owner) throw Error($(290, e))
  }
  return e
}
function il(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      $(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
    ))
  )
}
function Yg(e) {
  var t = e._init
  return t(e._payload)
}
function TS(e) {
  function t(g, v) {
    if (e) {
      var b = g.deletions
      b === null ? ((g.deletions = [v]), (g.flags |= 16)) : b.push(v)
    }
  }
  function r(g, v) {
    if (!e) return null
    for (; v !== null; ) t(g, v), (v = v.sibling)
    return null
  }
  function n(g, v) {
    for (g = new Map(); v !== null; )
      v.key !== null ? g.set(v.key, v) : g.set(v.index, v), (v = v.sibling)
    return g
  }
  function o(g, v) {
    return (g = bn(g, v)), (g.index = 0), (g.sibling = null), g
  }
  function i(g, v, b) {
    return (
      (g.index = b),
      e
        ? ((b = g.alternate),
          b !== null ? ((b = b.index), b < v ? ((g.flags |= 2), v) : b) : ((g.flags |= 2), v))
        : ((g.flags |= 1048576), v)
    )
  }
  function a(g) {
    return e && g.alternate === null && (g.flags |= 2), g
  }
  function s(g, v, b, k) {
    return v === null || v.tag !== 6
      ? ((v = Ld(b, g.mode, k)), (v.return = g), v)
      : ((v = o(v, b)), (v.return = g), v)
  }
  function l(g, v, b, k) {
    var C = b.type
    return C === Fo
      ? c(g, v, b.props.children, k, b.key)
      : v !== null &&
        (v.elementType === C ||
          (typeof C == 'object' && C !== null && C.$$typeof === en && Yg(C) === v.type))
      ? ((k = o(v, b.props)), (k.ref = qi(g, v, b)), (k.return = g), k)
      : ((k = Dl(b.type, b.key, b.props, null, g.mode, k)),
        (k.ref = qi(g, v, b)),
        (k.return = g),
        k)
  }
  function u(g, v, b, k) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== b.containerInfo ||
      v.stateNode.implementation !== b.implementation
      ? ((v = Bd(b, g.mode, k)), (v.return = g), v)
      : ((v = o(v, b.children || [])), (v.return = g), v)
  }
  function c(g, v, b, k, C) {
    return v === null || v.tag !== 7
      ? ((v = eo(b, g.mode, k, C)), (v.return = g), v)
      : ((v = o(v, b)), (v.return = g), v)
  }
  function d(g, v, b) {
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return (v = Ld('' + v, g.mode, b)), (v.return = g), v
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case qs:
          return (
            (b = Dl(v.type, v.key, v.props, null, g.mode, b)),
            (b.ref = qi(g, null, v)),
            (b.return = g),
            b
          )
        case Io:
          return (v = Bd(v, g.mode, b)), (v.return = g), v
        case en:
          var k = v._init
          return d(g, k(v._payload), b)
      }
      if (na(v) || Wi(v)) return (v = eo(v, g.mode, b, null)), (v.return = g), v
      il(g, v)
    }
    return null
  }
  function f(g, v, b, k) {
    var C = v !== null ? v.key : null
    if ((typeof b == 'string' && b !== '') || typeof b == 'number')
      return C !== null ? null : s(g, v, '' + b, k)
    if (typeof b == 'object' && b !== null) {
      switch (b.$$typeof) {
        case qs:
          return b.key === C ? l(g, v, b, k) : null
        case Io:
          return b.key === C ? u(g, v, b, k) : null
        case en:
          return (C = b._init), f(g, v, C(b._payload), k)
      }
      if (na(b) || Wi(b)) return C !== null ? null : c(g, v, b, k, null)
      il(g, b)
    }
    return null
  }
  function h(g, v, b, k, C) {
    if ((typeof k == 'string' && k !== '') || typeof k == 'number')
      return (g = g.get(b) || null), s(v, g, '' + k, C)
    if (typeof k == 'object' && k !== null) {
      switch (k.$$typeof) {
        case qs:
          return (g = g.get(k.key === null ? b : k.key) || null), l(v, g, k, C)
        case Io:
          return (g = g.get(k.key === null ? b : k.key) || null), u(v, g, k, C)
        case en:
          var R = k._init
          return h(g, v, b, R(k._payload), C)
      }
      if (na(k) || Wi(k)) return (g = g.get(b) || null), c(v, g, k, C, null)
      il(v, k)
    }
    return null
  }
  function m(g, v, b, k) {
    for (var C = null, R = null, E = v, T = (v = 0), M = null; E !== null && T < b.length; T++) {
      E.index > T ? ((M = E), (E = null)) : (M = E.sibling)
      var j = f(g, E, b[T], k)
      if (j === null) {
        E === null && (E = M)
        break
      }
      e && E && j.alternate === null && t(g, E),
        (v = i(j, v, T)),
        R === null ? (C = j) : (R.sibling = j),
        (R = j),
        (E = M)
    }
    if (T === b.length) return r(g, E), we && Bn(g, T), C
    if (E === null) {
      for (; T < b.length; T++)
        (E = d(g, b[T], k)),
          E !== null && ((v = i(E, v, T)), R === null ? (C = E) : (R.sibling = E), (R = E))
      return we && Bn(g, T), C
    }
    for (E = n(g, E); T < b.length; T++)
      (M = h(E, g, T, b[T], k)),
        M !== null &&
          (e && M.alternate !== null && E.delete(M.key === null ? T : M.key),
          (v = i(M, v, T)),
          R === null ? (C = M) : (R.sibling = M),
          (R = M))
    return (
      e &&
        E.forEach(function (W) {
          return t(g, W)
        }),
      we && Bn(g, T),
      C
    )
  }
  function p(g, v, b, k) {
    var C = Wi(b)
    if (typeof C != 'function') throw Error($(150))
    if (((b = C.call(b)), b == null)) throw Error($(151))
    for (
      var R = (C = null), E = v, T = (v = 0), M = null, j = b.next();
      E !== null && !j.done;
      T++, j = b.next()
    ) {
      E.index > T ? ((M = E), (E = null)) : (M = E.sibling)
      var W = f(g, E, j.value, k)
      if (W === null) {
        E === null && (E = M)
        break
      }
      e && E && W.alternate === null && t(g, E),
        (v = i(W, v, T)),
        R === null ? (C = W) : (R.sibling = W),
        (R = W),
        (E = M)
    }
    if (j.done) return r(g, E), we && Bn(g, T), C
    if (E === null) {
      for (; !j.done; T++, j = b.next())
        (j = d(g, j.value, k)),
          j !== null && ((v = i(j, v, T)), R === null ? (C = j) : (R.sibling = j), (R = j))
      return we && Bn(g, T), C
    }
    for (E = n(g, E); !j.done; T++, j = b.next())
      (j = h(E, g, T, j.value, k)),
        j !== null &&
          (e && j.alternate !== null && E.delete(j.key === null ? T : j.key),
          (v = i(j, v, T)),
          R === null ? (C = j) : (R.sibling = j),
          (R = j))
    return (
      e &&
        E.forEach(function (he) {
          return t(g, he)
        }),
      we && Bn(g, T),
      C
    )
  }
  function S(g, v, b, k) {
    if (
      (typeof b == 'object' &&
        b !== null &&
        b.type === Fo &&
        b.key === null &&
        (b = b.props.children),
      typeof b == 'object' && b !== null)
    ) {
      switch (b.$$typeof) {
        case qs:
          e: {
            for (var C = b.key, R = v; R !== null; ) {
              if (R.key === C) {
                if (((C = b.type), C === Fo)) {
                  if (R.tag === 7) {
                    r(g, R.sibling), (v = o(R, b.props.children)), (v.return = g), (g = v)
                    break e
                  }
                } else if (
                  R.elementType === C ||
                  (typeof C == 'object' && C !== null && C.$$typeof === en && Yg(C) === R.type)
                ) {
                  r(g, R.sibling),
                    (v = o(R, b.props)),
                    (v.ref = qi(g, R, b)),
                    (v.return = g),
                    (g = v)
                  break e
                }
                r(g, R)
                break
              } else t(g, R)
              R = R.sibling
            }
            b.type === Fo
              ? ((v = eo(b.props.children, g.mode, k, b.key)), (v.return = g), (g = v))
              : ((k = Dl(b.type, b.key, b.props, null, g.mode, k)),
                (k.ref = qi(g, v, b)),
                (k.return = g),
                (g = k))
          }
          return a(g)
        case Io:
          e: {
            for (R = b.key; v !== null; ) {
              if (v.key === R)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === b.containerInfo &&
                  v.stateNode.implementation === b.implementation
                ) {
                  r(g, v.sibling), (v = o(v, b.children || [])), (v.return = g), (g = v)
                  break e
                } else {
                  r(g, v)
                  break
                }
              else t(g, v)
              v = v.sibling
            }
            ;(v = Bd(b, g.mode, k)), (v.return = g), (g = v)
          }
          return a(g)
        case en:
          return (R = b._init), S(g, v, R(b._payload), k)
      }
      if (na(b)) return m(g, v, b, k)
      if (Wi(b)) return p(g, v, b, k)
      il(g, b)
    }
    return (typeof b == 'string' && b !== '') || typeof b == 'number'
      ? ((b = '' + b),
        v !== null && v.tag === 6
          ? (r(g, v.sibling), (v = o(v, b)), (v.return = g), (g = v))
          : (r(g, v), (v = Ld(b, g.mode, k)), (v.return = g), (g = v)),
        a(g))
      : r(g, v)
  }
  return S
}
var Si = TS(!0),
  AS = TS(!1),
  Ss = {},
  xr = Mn(Ss),
  Ha = Mn(Ss),
  Ga = Mn(Ss)
function Xn(e) {
  if (e === Ss) throw Error($(174))
  return e
}
function im(e, t) {
  switch ((fe(Ga, t), fe(Ha, e), fe(xr, Ss), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Kf(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Kf(t, e))
  }
  ve(xr), fe(xr, t)
}
function xi() {
  ve(xr), ve(Ha), ve(Ga)
}
function RS(e) {
  Xn(Ga.current)
  var t = Xn(xr.current),
    r = Kf(t, e.type)
  t !== r && (fe(Ha, e), fe(xr, r))
}
function am(e) {
  Ha.current === e && (ve(xr), ve(Ha))
}
var Pe = Mn(0)
function yu(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState
      if (r !== null && ((r = r.dehydrated), r === null || r.data === '$?' || r.data === '$!'))
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var Od = []
function sm() {
  for (var e = 0; e < Od.length; e++) Od[e]._workInProgressVersionPrimary = null
  Od.length = 0
}
var jl = qr.ReactCurrentDispatcher,
  Id = qr.ReactCurrentBatchConfig,
  co = 0,
  Te = null,
  ze = null,
  We = null,
  bu = !1,
  ga = !1,
  Ka = 0,
  X2 = 0
function tt() {
  throw Error($(321))
}
function lm(e, t) {
  if (t === null) return !1
  for (var r = 0; r < t.length && r < e.length; r++) if (!ar(e[r], t[r])) return !1
  return !0
}
function um(e, t, r, n, o, i) {
  if (
    ((co = i),
    (Te = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (jl.current = e === null || e.memoizedState === null ? eT : tT),
    (e = r(n, o)),
    ga)
  ) {
    i = 0
    do {
      if (((ga = !1), (Ka = 0), 25 <= i)) throw Error($(301))
      ;(i += 1), (We = ze = null), (t.updateQueue = null), (jl.current = rT), (e = r(n, o))
    } while (ga)
  }
  if (
    ((jl.current = Su),
    (t = ze !== null && ze.next !== null),
    (co = 0),
    (We = ze = Te = null),
    (bu = !1),
    t)
  )
    throw Error($(300))
  return e
}
function cm() {
  var e = Ka !== 0
  return (Ka = 0), e
}
function fr() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
  return We === null ? (Te.memoizedState = We = e) : (We = We.next = e), We
}
function Kt() {
  if (ze === null) {
    var e = Te.alternate
    e = e !== null ? e.memoizedState : null
  } else e = ze.next
  var t = We === null ? Te.memoizedState : We.next
  if (t !== null) (We = t), (ze = e)
  else {
    if (e === null) throw Error($(310))
    ;(ze = e),
      (e = {
        memoizedState: ze.memoizedState,
        baseState: ze.baseState,
        baseQueue: ze.baseQueue,
        queue: ze.queue,
        next: null,
      }),
      We === null ? (Te.memoizedState = We = e) : (We = We.next = e)
  }
  return We
}
function qa(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Fd(e) {
  var t = Kt(),
    r = t.queue
  if (r === null) throw Error($(311))
  r.lastRenderedReducer = e
  var n = ze,
    o = n.baseQueue,
    i = r.pending
  if (i !== null) {
    if (o !== null) {
      var a = o.next
      ;(o.next = i.next), (i.next = a)
    }
    ;(n.baseQueue = o = i), (r.pending = null)
  }
  if (o !== null) {
    ;(i = o.next), (n = n.baseState)
    var s = (a = null),
      l = null,
      u = i
    do {
      var c = u.lane
      if ((co & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (n = u.hasEagerState ? u.eagerState : e(n, u.action))
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        }
        l === null ? ((s = l = d), (a = n)) : (l = l.next = d), (Te.lanes |= c), (fo |= c)
      }
      u = u.next
    } while (u !== null && u !== i)
    l === null ? (a = n) : (l.next = s),
      ar(n, t.memoizedState) || (bt = !0),
      (t.memoizedState = n),
      (t.baseState = a),
      (t.baseQueue = l),
      (r.lastRenderedState = n)
  }
  if (((e = r.interleaved), e !== null)) {
    o = e
    do (i = o.lane), (Te.lanes |= i), (fo |= i), (o = o.next)
    while (o !== e)
  } else o === null && (r.lanes = 0)
  return [t.memoizedState, r.dispatch]
}
function Dd(e) {
  var t = Kt(),
    r = t.queue
  if (r === null) throw Error($(311))
  r.lastRenderedReducer = e
  var n = r.dispatch,
    o = r.pending,
    i = t.memoizedState
  if (o !== null) {
    r.pending = null
    var a = (o = o.next)
    do (i = e(i, a.action)), (a = a.next)
    while (a !== o)
    ar(i, t.memoizedState) || (bt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (r.lastRenderedState = i)
  }
  return [i, n]
}
function $S() {}
function jS(e, t) {
  var r = Te,
    n = Kt(),
    o = t(),
    i = !ar(n.memoizedState, o)
  if (
    (i && ((n.memoizedState = o), (bt = !0)),
    (n = n.queue),
    dm(IS.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || (We !== null && We.memoizedState.tag & 1))
  ) {
    if (((r.flags |= 2048), Ya(9, OS.bind(null, r, n, o, t), void 0, null), Ue === null))
      throw Error($(349))
    co & 30 || MS(r, t, o)
  }
  return o
}
function MS(e, t, r) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = Te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (Te.updateQueue = t), (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e))
}
function OS(e, t, r, n) {
  ;(t.value = r), (t.getSnapshot = n), FS(t) && DS(e)
}
function IS(e, t, r) {
  return r(function () {
    FS(t) && DS(e)
  })
}
function FS(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var r = t()
    return !ar(e, r)
  } catch {
    return !0
  }
}
function DS(e) {
  var t = Wr(e, 1)
  t !== null && ir(t, e, 1, -1)
}
function Xg(e) {
  var t = fr()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qa,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = J2.bind(null, Te, e)),
    [t.memoizedState, e]
  )
}
function Ya(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = Te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Te.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  )
}
function NS() {
  return Kt().memoizedState
}
function Ml(e, t, r, n) {
  var o = fr()
  ;(Te.flags |= e), (o.memoizedState = Ya(1 | t, r, void 0, n === void 0 ? null : n))
}
function uc(e, t, r, n) {
  var o = Kt()
  n = n === void 0 ? null : n
  var i = void 0
  if (ze !== null) {
    var a = ze.memoizedState
    if (((i = a.destroy), n !== null && lm(n, a.deps))) {
      o.memoizedState = Ya(t, r, i, n)
      return
    }
  }
  ;(Te.flags |= e), (o.memoizedState = Ya(1 | t, r, i, n))
}
function Qg(e, t) {
  return Ml(8390656, 8, e, t)
}
function dm(e, t) {
  return uc(2048, 8, e, t)
}
function zS(e, t) {
  return uc(4, 2, e, t)
}
function LS(e, t) {
  return uc(4, 4, e, t)
}
function BS(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function VS(e, t, r) {
  return (r = r != null ? r.concat([e]) : null), uc(4, 4, BS.bind(null, t, e), r)
}
function fm() {}
function WS(e, t) {
  var r = Kt()
  t = t === void 0 ? null : t
  var n = r.memoizedState
  return n !== null && t !== null && lm(t, n[1]) ? n[0] : ((r.memoizedState = [e, t]), e)
}
function US(e, t) {
  var r = Kt()
  t = t === void 0 ? null : t
  var n = r.memoizedState
  return n !== null && t !== null && lm(t, n[1]) ? n[0] : ((e = e()), (r.memoizedState = [e, t]), e)
}
function HS(e, t, r) {
  return co & 21
    ? (ar(r, t) || ((r = qb()), (Te.lanes |= r), (fo |= r), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (bt = !0)), (e.memoizedState = r))
}
function Q2(e, t) {
  var r = le
  ;(le = r !== 0 && 4 > r ? r : 4), e(!0)
  var n = Id.transition
  Id.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(le = r), (Id.transition = n)
  }
}
function GS() {
  return Kt().memoizedState
}
function Z2(e, t, r) {
  var n = yn(e)
  if (((r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }), KS(e)))
    qS(t, r)
  else if (((r = CS(e, t, r, n)), r !== null)) {
    var o = ht()
    ir(r, e, n, o), YS(r, t, n)
  }
}
function J2(e, t, r) {
  var n = yn(e),
    o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }
  if (KS(e)) qS(t, o)
  else {
    var i = e.alternate
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var a = t.lastRenderedState,
          s = i(a, r)
        if (((o.hasEagerState = !0), (o.eagerState = s), ar(s, a))) {
          var l = t.interleaved
          l === null ? ((o.next = o), nm(t)) : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(r = CS(e, t, o, n)), r !== null && ((o = ht()), ir(r, e, n, o), YS(r, t, n))
  }
}
function KS(e) {
  var t = e.alternate
  return e === Te || (t !== null && t === Te)
}
function qS(e, t) {
  ga = bu = !0
  var r = e.pending
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t)
}
function YS(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes
    ;(n &= e.pendingLanes), (r |= n), (t.lanes = r), Wp(e, r)
  }
}
var Su = {
    readContext: Gt,
    useCallback: tt,
    useContext: tt,
    useEffect: tt,
    useImperativeHandle: tt,
    useInsertionEffect: tt,
    useLayoutEffect: tt,
    useMemo: tt,
    useReducer: tt,
    useRef: tt,
    useState: tt,
    useDebugValue: tt,
    useDeferredValue: tt,
    useTransition: tt,
    useMutableSource: tt,
    useSyncExternalStore: tt,
    useId: tt,
    unstable_isNewReconciler: !1,
  },
  eT = {
    readContext: Gt,
    useCallback: function (e, t) {
      return (fr().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: Gt,
    useEffect: Qg,
    useImperativeHandle: function (e, t, r) {
      return (r = r != null ? r.concat([e]) : null), Ml(4194308, 4, BS.bind(null, t, e), r)
    },
    useLayoutEffect: function (e, t) {
      return Ml(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Ml(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var r = fr()
      return (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
    },
    useReducer: function (e, t, r) {
      var n = fr()
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = Z2.bind(null, Te, e)),
        [n.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = fr()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Xg,
    useDebugValue: fm,
    useDeferredValue: function (e) {
      return (fr().memoizedState = e)
    },
    useTransition: function () {
      var e = Xg(!1),
        t = e[0]
      return (e = Q2.bind(null, e[1])), (fr().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = Te,
        o = fr()
      if (we) {
        if (r === void 0) throw Error($(407))
        r = r()
      } else {
        if (((r = t()), Ue === null)) throw Error($(349))
        co & 30 || MS(n, t, r)
      }
      o.memoizedState = r
      var i = { value: r, getSnapshot: t }
      return (
        (o.queue = i),
        Qg(IS.bind(null, n, i, e), [e]),
        (n.flags |= 2048),
        Ya(9, OS.bind(null, n, i, r, t), void 0, null),
        r
      )
    },
    useId: function () {
      var e = fr(),
        t = Ue.identifierPrefix
      if (we) {
        var r = Ir,
          n = Or
        ;(r = (n & ~(1 << (32 - or(n) - 1))).toString(32) + r),
          (t = ':' + t + 'R' + r),
          (r = Ka++),
          0 < r && (t += 'H' + r.toString(32)),
          (t += ':')
      } else (r = X2++), (t = ':' + t + 'r' + r.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  tT = {
    readContext: Gt,
    useCallback: WS,
    useContext: Gt,
    useEffect: dm,
    useImperativeHandle: VS,
    useInsertionEffect: zS,
    useLayoutEffect: LS,
    useMemo: US,
    useReducer: Fd,
    useRef: NS,
    useState: function () {
      return Fd(qa)
    },
    useDebugValue: fm,
    useDeferredValue: function (e) {
      var t = Kt()
      return HS(t, ze.memoizedState, e)
    },
    useTransition: function () {
      var e = Fd(qa)[0],
        t = Kt().memoizedState
      return [e, t]
    },
    useMutableSource: $S,
    useSyncExternalStore: jS,
    useId: GS,
    unstable_isNewReconciler: !1,
  },
  rT = {
    readContext: Gt,
    useCallback: WS,
    useContext: Gt,
    useEffect: dm,
    useImperativeHandle: VS,
    useInsertionEffect: zS,
    useLayoutEffect: LS,
    useMemo: US,
    useReducer: Dd,
    useRef: NS,
    useState: function () {
      return Dd(qa)
    },
    useDebugValue: fm,
    useDeferredValue: function (e) {
      var t = Kt()
      return ze === null ? (t.memoizedState = e) : HS(t, ze.memoizedState, e)
    },
    useTransition: function () {
      var e = Dd(qa)[0],
        t = Kt().memoizedState
      return [e, t]
    },
    useMutableSource: $S,
    useSyncExternalStore: jS,
    useId: GS,
    unstable_isNewReconciler: !1,
  }
function wi(e, t) {
  try {
    var r = '',
      n = t
    do (r += RE(n)), (n = n.return)
    while (n)
    var o = r
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack
  }
  return { value: e, source: t, stack: o, digest: null }
}
function Nd(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null }
}
function vh(e, t) {
  try {
    console.error(t.value)
  } catch (r) {
    setTimeout(function () {
      throw r
    })
  }
}
var nT = typeof WeakMap == 'function' ? WeakMap : Map
function XS(e, t, r) {
  ;(r = Nr(-1, r)), (r.tag = 3), (r.payload = { element: null })
  var n = t.value
  return (
    (r.callback = function () {
      wu || ((wu = !0), (Ph = n)), vh(e, t)
    }),
    r
  )
}
function QS(e, t, r) {
  ;(r = Nr(-1, r)), (r.tag = 3)
  var n = e.type.getDerivedStateFromError
  if (typeof n == 'function') {
    var o = t.value
    ;(r.payload = function () {
      return n(o)
    }),
      (r.callback = function () {
        vh(e, t)
      })
  }
  var i = e.stateNode
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (r.callback = function () {
        vh(e, t), typeof n != 'function' && (gn === null ? (gn = new Set([this])) : gn.add(this))
        var a = t.stack
        this.componentDidCatch(t.value, { componentStack: a !== null ? a : '' })
      }),
    r
  )
}
function Zg(e, t, r) {
  var n = e.pingCache
  if (n === null) {
    n = e.pingCache = new nT()
    var o = new Set()
    n.set(t, o)
  } else (o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o))
  o.has(r) || (o.add(r), (e = gT.bind(null, e, t, r)), t.then(e, e))
}
function Jg(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function e0(e, t, r, n, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null ? (r.tag = 17) : ((t = Nr(-1, 1)), (t.tag = 2), vn(r, t, 1))),
          (r.lanes |= 1)),
      e)
}
var oT = qr.ReactCurrentOwner,
  bt = !1
function dt(e, t, r, n) {
  t.child = e === null ? AS(t, null, r, n) : Si(t, e.child, r, n)
}
function t0(e, t, r, n, o) {
  r = r.render
  var i = t.ref
  return (
    ti(t, o),
    (n = um(e, t, r, n, i, o)),
    (r = cm()),
    e !== null && !bt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Ur(e, t, o))
      : (we && r && Qp(t), (t.flags |= 1), dt(e, t, n, o), t.child)
  )
}
function r0(e, t, r, n, o) {
  if (e === null) {
    var i = r.type
    return typeof i == 'function' &&
      !Sm(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ZS(e, t, i, n, o))
      : ((e = Dl(r.type, null, n, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e))
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps
    if (((r = r.compare), (r = r !== null ? r : Ba), r(a, n) && e.ref === t.ref)) return Ur(e, t, o)
  }
  return (t.flags |= 1), (e = bn(i, n)), (e.ref = t.ref), (e.return = t), (t.child = e)
}
function ZS(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps
    if (Ba(i, n) && e.ref === t.ref)
      if (((bt = !1), (t.pendingProps = n = i), (e.lanes & o) !== 0)) e.flags & 131072 && (bt = !0)
      else return (t.lanes = e.lanes), Ur(e, t, o)
  }
  return gh(e, t, r, n, o)
}
function JS(e, t, r) {
  var n = t.pendingProps,
    o = n.children,
    i = e !== null ? e.memoizedState : null
  if (n.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        fe(Go, Et),
        (Et |= r)
    else {
      if (!(r & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          fe(Go, Et),
          (Et |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = i !== null ? i.baseLanes : r),
        fe(Go, Et),
        (Et |= n)
    }
  else
    i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r), fe(Go, Et), (Et |= n)
  return dt(e, t, o, r), t.child
}
function ex(e, t) {
  var r = t.ref
  ;((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function gh(e, t, r, n, o) {
  var i = xt(r) ? lo : lt.current
  return (
    (i = yi(t, i)),
    ti(t, o),
    (r = um(e, t, r, n, i, o)),
    (n = cm()),
    e !== null && !bt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Ur(e, t, o))
      : (we && n && Qp(t), (t.flags |= 1), dt(e, t, r, o), t.child)
  )
}
function n0(e, t, r, n, o) {
  if (xt(r)) {
    var i = !0
    fu(t)
  } else i = !1
  if ((ti(t, o), t.stateNode === null)) Ol(e, t), ES(t, r, n), mh(t, r, n, o), (n = !0)
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps
    a.props = s
    var l = a.context,
      u = r.contextType
    typeof u == 'object' && u !== null
      ? (u = Gt(u))
      : ((u = xt(r) ? lo : lt.current), (u = yi(t, u)))
    var c = r.getDerivedStateFromProps,
      d = typeof c == 'function' || typeof a.getSnapshotBeforeUpdate == 'function'
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== n || l !== u) && qg(t, a, n, u)),
      (tn = !1)
    var f = t.memoizedState
    ;(a.state = f),
      gu(t, n, a, o),
      (l = t.memoizedState),
      s !== n || f !== l || St.current || tn
        ? (typeof c == 'function' && (ph(t, r, c, n), (l = t.memoizedState)),
          (s = tn || Kg(t, r, s, n, f, l, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != 'function' &&
                  typeof a.componentWillMount != 'function') ||
                (typeof a.componentWillMount == 'function' && a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == 'function' && a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = l)),
          (a.props = n),
          (a.state = l),
          (a.context = u),
          (n = s))
        : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308), (n = !1))
  } else {
    ;(a = t.stateNode),
      _S(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Jt(t.type, s)),
      (a.props = u),
      (d = t.pendingProps),
      (f = a.context),
      (l = r.contextType),
      typeof l == 'object' && l !== null
        ? (l = Gt(l))
        : ((l = xt(r) ? lo : lt.current), (l = yi(t, l)))
    var h = r.getDerivedStateFromProps
    ;(c = typeof h == 'function' || typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== d || f !== l) && qg(t, a, n, l)),
      (tn = !1),
      (f = t.memoizedState),
      (a.state = f),
      gu(t, n, a, o)
    var m = t.memoizedState
    s !== d || f !== m || St.current || tn
      ? (typeof h == 'function' && (ph(t, r, h, n), (m = t.memoizedState)),
        (u = tn || Kg(t, r, u, n, f, m, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' && a.componentWillUpdate(n, m, l),
              typeof a.UNSAFE_componentWillUpdate == 'function' &&
                a.UNSAFE_componentWillUpdate(n, m, l)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = m)),
        (a.props = n),
        (a.state = m),
        (a.context = l),
        (n = u))
      : (typeof a.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1))
  }
  return yh(e, t, r, n, i, o)
}
function yh(e, t, r, n, o, i) {
  ex(e, t)
  var a = (t.flags & 128) !== 0
  if (!n && !a) return o && Vg(t, r, !1), Ur(e, t, i)
  ;(n = t.stateNode), (oT.current = t)
  var s = a && typeof r.getDerivedStateFromError != 'function' ? null : n.render()
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Si(t, e.child, null, i)), (t.child = Si(t, null, s, i)))
      : dt(e, t, s, i),
    (t.memoizedState = n.state),
    o && Vg(t, r, !0),
    t.child
  )
}
function tx(e) {
  var t = e.stateNode
  t.pendingContext
    ? Bg(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Bg(e, t.context, !1),
    im(e, t.containerInfo)
}
function o0(e, t, r, n, o) {
  return bi(), Jp(o), (t.flags |= 256), dt(e, t, r, n), t.child
}
var bh = { dehydrated: null, treeContext: null, retryLane: 0 }
function Sh(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function rx(e, t, r) {
  var n = t.pendingProps,
    o = Pe.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    s
  if (
    ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
    fe(Pe, o & 1),
    e === null)
  )
    return (
      fh(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1),
          null)
        : ((a = n.children),
          (e = n.fallback),
          i
            ? ((n = t.mode),
              (i = t.child),
              (a = { mode: 'hidden', children: a }),
              !(n & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = fc(a, n, 0, null)),
              (e = eo(e, n, r, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Sh(r)),
              (t.memoizedState = bh),
              e)
            : hm(t, a))
    )
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return iT(e, t, a, n, s, o, r)
  if (i) {
    ;(i = n.fallback), (a = t.mode), (o = e.child), (s = o.sibling)
    var l = { mode: 'hidden', children: n.children }
    return (
      !(a & 1) && t.child !== o
        ? ((n = t.child), (n.childLanes = 0), (n.pendingProps = l), (t.deletions = null))
        : ((n = bn(o, l)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = bn(s, i)) : ((i = eo(i, a, r, null)), (i.flags |= 2)),
      (i.return = t),
      (n.return = t),
      (n.sibling = i),
      (t.child = n),
      (n = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Sh(r)
          : { baseLanes: a.baseLanes | r, cachePool: null, transitions: a.transitions }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~r),
      (t.memoizedState = bh),
      n
    )
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (n = bn(i, { mode: 'visible', children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions), r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  )
}
function hm(e, t) {
  return (t = fc({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
}
function al(e, t, r, n) {
  return (
    n !== null && Jp(n),
    Si(t, e.child, null, r),
    (e = hm(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function iT(e, t, r, n, o, i, a) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = Nd(Error($(422)))), al(e, t, a, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = n.fallback),
        (o = t.mode),
        (n = fc({ mode: 'visible', children: n.children }, o, 0, null)),
        (i = eo(i, o, a, null)),
        (i.flags |= 2),
        (n.return = t),
        (i.return = t),
        (n.sibling = i),
        (t.child = n),
        t.mode & 1 && Si(t, e.child, null, a),
        (t.child.memoizedState = Sh(a)),
        (t.memoizedState = bh),
        i)
  if (!(t.mode & 1)) return al(e, t, a, null)
  if (o.data === '$!') {
    if (((n = o.nextSibling && o.nextSibling.dataset), n)) var s = n.dgst
    return (n = s), (i = Error($(419))), (n = Nd(i, n, void 0)), al(e, t, a, n)
  }
  if (((s = (a & e.childLanes) !== 0), bt || s)) {
    if (((n = Ue), n !== null)) {
      switch (a & -a) {
        case 4:
          o = 2
          break
        case 16:
          o = 8
          break
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
          o = 32
          break
        case 536870912:
          o = 268435456
          break
        default:
          o = 0
      }
      ;(o = o & (n.suspendedLanes | a) ? 0 : o),
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), Wr(e, o), ir(n, e, o, -1))
    }
    return bm(), (n = Nd(Error($(421)))), al(e, t, a, n)
  }
  return o.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = yT.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (Tt = mn(o.nextSibling)),
      (At = t),
      (we = !0),
      (tr = null),
      e !== null &&
        ((Bt[Vt++] = Or),
        (Bt[Vt++] = Ir),
        (Bt[Vt++] = uo),
        (Or = e.id),
        (Ir = e.overflow),
        (uo = t)),
      (t = hm(t, n.children)),
      (t.flags |= 4096),
      t)
}
function i0(e, t, r) {
  e.lanes |= t
  var n = e.alternate
  n !== null && (n.lanes |= t), hh(e.return, t, r)
}
function zd(e, t, r, n, o) {
  var i = e.memoizedState
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = n),
      (i.tail = r),
      (i.tailMode = o))
}
function nx(e, t, r) {
  var n = t.pendingProps,
    o = n.revealOrder,
    i = n.tail
  if ((dt(e, t, n.children, r), (n = Pe.current), n & 2)) (n = (n & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && i0(e, r, t)
        else if (e.tag === 19) i0(e, r, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    n &= 1
  }
  if ((fe(Pe, n), !(t.mode & 1))) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (r = t.child, o = null; r !== null; )
          (e = r.alternate), e !== null && yu(e) === null && (o = r), (r = r.sibling)
        ;(r = o),
          r === null ? ((o = t.child), (t.child = null)) : ((o = r.sibling), (r.sibling = null)),
          zd(t, !1, o, r, i)
        break
      case 'backwards':
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && yu(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = r), (r = o), (o = e)
        }
        zd(t, !0, r, null, i)
        break
      case 'together':
        zd(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Ol(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Ur(e, t, r) {
  if ((e !== null && (t.dependencies = e.dependencies), (fo |= t.lanes), !(r & t.childLanes)))
    return null
  if (e !== null && t.child !== e.child) throw Error($(153))
  if (t.child !== null) {
    for (e = t.child, r = bn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
      (e = e.sibling), (r = r.sibling = bn(e, e.pendingProps)), (r.return = t)
    r.sibling = null
  }
  return t.child
}
function aT(e, t, r) {
  switch (t.tag) {
    case 3:
      tx(t), bi()
      break
    case 5:
      RS(t)
      break
    case 1:
      xt(t.type) && fu(t)
      break
    case 4:
      im(t, t.stateNode.containerInfo)
      break
    case 10:
      var n = t.type._context,
        o = t.memoizedProps.value
      fe(mu, n._currentValue), (n._currentValue = o)
      break
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (fe(Pe, Pe.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? rx(e, t, r)
          : (fe(Pe, Pe.current & 1), (e = Ur(e, t, r)), e !== null ? e.sibling : null)
      fe(Pe, Pe.current & 1)
      break
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return nx(e, t, r)
        t.flags |= 128
      }
      if (
        ((o = t.memoizedState),
        o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        fe(Pe, Pe.current),
        n)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), JS(e, t, r)
  }
  return Ur(e, t, r)
}
var ox, xh, ix, ax
ox = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode)
    else if (r.tag !== 4 && r.child !== null) {
      ;(r.child.return = r), (r = r.child)
      continue
    }
    if (r === t) break
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return
      r = r.return
    }
    ;(r.sibling.return = r.return), (r = r.sibling)
  }
}
xh = function () {}
ix = function (e, t, r, n) {
  var o = e.memoizedProps
  if (o !== n) {
    ;(e = t.stateNode), Xn(xr.current)
    var i = null
    switch (r) {
      case 'input':
        ;(o = Wf(e, o)), (n = Wf(e, n)), (i = [])
        break
      case 'select':
        ;(o = Ae({}, o, { value: void 0 })), (n = Ae({}, n, { value: void 0 })), (i = [])
        break
      case 'textarea':
        ;(o = Gf(e, o)), (n = Gf(e, n)), (i = [])
        break
      default:
        typeof o.onClick != 'function' && typeof n.onClick == 'function' && (e.onclick = cu)
    }
    qf(r, n)
    var a
    r = null
    for (u in o)
      if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var s = o[u]
          for (a in s) s.hasOwnProperty(a) && (r || (r = {}), (r[a] = ''))
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Oa.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null))
    for (u in n) {
      var l = n[u]
      if (
        ((s = o != null ? o[u] : void 0),
        n.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === 'style')
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) || (l && l.hasOwnProperty(a)) || (r || (r = {}), (r[a] = ''))
            for (a in l) l.hasOwnProperty(a) && s[a] !== l[a] && (r || (r = {}), (r[a] = l[a]))
          } else r || (i || (i = []), i.push(u, r)), (r = l)
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (i = i || []).push(u, l))
            : u === 'children'
            ? (typeof l != 'string' && typeof l != 'number') || (i = i || []).push(u, '' + l)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (Oa.hasOwnProperty(u)
                ? (l != null && u === 'onScroll' && pe('scroll', e), i || s === l || (i = []))
                : (i = i || []).push(u, l))
    }
    r && (i = i || []).push('style', r)
    var u = i
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
ax = function (e, t, r, n) {
  r !== n && (t.flags |= 4)
}
function Yi(e, t) {
  if (!we)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), (t = t.sibling)
        r === null ? (e.tail = null) : (r.sibling = null)
        break
      case 'collapsed':
        r = e.tail
        for (var n = null; r !== null; ) r.alternate !== null && (n = r), (r = r.sibling)
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null)
    }
}
function rt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0
  if (t)
    for (var o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags & 14680064),
        (n |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling)
  else
    for (o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags),
        (n |= o.flags),
        (o.return = e),
        (o = o.sibling)
  return (e.subtreeFlags |= n), (e.childLanes = r), t
}
function sT(e, t, r) {
  var n = t.pendingProps
  switch ((Zp(t), t.tag)) {
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
      return rt(t), null
    case 1:
      return xt(t.type) && du(), rt(t), null
    case 3:
      return (
        (n = t.stateNode),
        xi(),
        ve(St),
        ve(lt),
        sm(),
        n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (ol(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), tr !== null && (Ah(tr), (tr = null)))),
        xh(e, t),
        rt(t),
        null
      )
    case 5:
      am(t)
      var o = Xn(Ga.current)
      if (((r = t.type), e !== null && t.stateNode != null))
        ix(e, t, r, n, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!n) {
          if (t.stateNode === null) throw Error($(166))
          return rt(t), null
        }
        if (((e = Xn(xr.current)), ol(t))) {
          ;(n = t.stateNode), (r = t.type)
          var i = t.memoizedProps
          switch (((n[gr] = t), (n[Ua] = i), (e = (t.mode & 1) !== 0), r)) {
            case 'dialog':
              pe('cancel', n), pe('close', n)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              pe('load', n)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < ia.length; o++) pe(ia[o], n)
              break
            case 'source':
              pe('error', n)
              break
            case 'img':
            case 'image':
            case 'link':
              pe('error', n), pe('load', n)
              break
            case 'details':
              pe('toggle', n)
              break
            case 'input':
              pg(n, i), pe('invalid', n)
              break
            case 'select':
              ;(n._wrapperState = { wasMultiple: !!i.multiple }), pe('invalid', n)
              break
            case 'textarea':
              vg(n, i), pe('invalid', n)
          }
          qf(r, i), (o = null)
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a]
              a === 'children'
                ? typeof s == 'string'
                  ? n.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 && nl(n.textContent, s, e),
                    (o = ['children', s]))
                  : typeof s == 'number' &&
                    n.textContent !== '' + s &&
                    (i.suppressHydrationWarning !== !0 && nl(n.textContent, s, e),
                    (o = ['children', '' + s]))
                : Oa.hasOwnProperty(a) && s != null && a === 'onScroll' && pe('scroll', n)
            }
          switch (r) {
            case 'input':
              Ys(n), mg(n, i, !0)
              break
            case 'textarea':
              Ys(n), gg(n)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof i.onClick == 'function' && (n.onclick = cu)
          }
          ;(n = o), (t.updateQueue = n), n !== null && (t.flags |= 4)
        } else {
          ;(a = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Mb(r)),
            e === 'http://www.w3.org/1999/xhtml'
              ? r === 'script'
                ? ((e = a.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == 'string'
                ? (e = a.createElement(r, { is: n.is }))
                : ((e = a.createElement(r)),
                  r === 'select' &&
                    ((a = e), n.multiple ? (a.multiple = !0) : n.size && (a.size = n.size)))
              : (e = a.createElementNS(e, r)),
            (e[gr] = t),
            (e[Ua] = n),
            ox(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((a = Yf(r, n)), r)) {
              case 'dialog':
                pe('cancel', e), pe('close', e), (o = n)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                pe('load', e), (o = n)
                break
              case 'video':
              case 'audio':
                for (o = 0; o < ia.length; o++) pe(ia[o], e)
                o = n
                break
              case 'source':
                pe('error', e), (o = n)
                break
              case 'img':
              case 'image':
              case 'link':
                pe('error', e), pe('load', e), (o = n)
                break
              case 'details':
                pe('toggle', e), (o = n)
                break
              case 'input':
                pg(e, n), (o = Wf(e, n)), pe('invalid', e)
                break
              case 'option':
                o = n
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!n.multiple }),
                  (o = Ae({}, n, { value: void 0 })),
                  pe('invalid', e)
                break
              case 'textarea':
                vg(e, n), (o = Gf(e, n)), pe('invalid', e)
                break
              default:
                o = n
            }
            qf(r, o), (s = o)
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i]
                i === 'style'
                  ? Fb(e, l)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && Ob(e, l))
                  : i === 'children'
                  ? typeof l == 'string'
                    ? (r !== 'textarea' || l !== '') && Ia(e, l)
                    : typeof l == 'number' && Ia(e, '' + l)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Oa.hasOwnProperty(i)
                      ? l != null && i === 'onScroll' && pe('scroll', e)
                      : l != null && Dp(e, i, l, a))
              }
            switch (r) {
              case 'input':
                Ys(e), mg(e, n, !1)
                break
              case 'textarea':
                Ys(e), gg(e)
                break
              case 'option':
                n.value != null && e.setAttribute('value', '' + _n(n.value))
                break
              case 'select':
                ;(e.multiple = !!n.multiple),
                  (i = n.value),
                  i != null
                    ? Qo(e, !!n.multiple, i, !1)
                    : n.defaultValue != null && Qo(e, !!n.multiple, n.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = cu)
            }
            switch (r) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                n = !!n.autoFocus
                break e
              case 'img':
                n = !0
                break e
              default:
                n = !1
            }
          }
          n && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return rt(t), null
    case 6:
      if (e && t.stateNode != null) ax(e, t, e.memoizedProps, n)
      else {
        if (typeof n != 'string' && t.stateNode === null) throw Error($(166))
        if (((r = Xn(Ga.current)), Xn(xr.current), ol(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[gr] = t),
            (i = n.nodeValue !== r) && ((e = At), e !== null))
          )
            switch (e.tag) {
              case 3:
                nl(n.nodeValue, r, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  nl(n.nodeValue, r, (e.mode & 1) !== 0)
            }
          i && (t.flags |= 4)
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[gr] = t),
            (t.stateNode = n)
      }
      return rt(t), null
    case 13:
      if (
        (ve(Pe),
        (n = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (we && Tt !== null && t.mode & 1 && !(t.flags & 128))
          kS(), bi(), (t.flags |= 98560), (i = !1)
        else if (((i = ol(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error($(318))
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
              throw Error($(317))
            i[gr] = t
          } else bi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          rt(t), (i = !1)
        } else tr !== null && (Ah(tr), (tr = null)), (i = !0)
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || Pe.current & 1 ? Le === 0 && (Le = 3) : bm())),
          t.updateQueue !== null && (t.flags |= 4),
          rt(t),
          null)
    case 4:
      return xi(), xh(e, t), e === null && Va(t.stateNode.containerInfo), rt(t), null
    case 10:
      return rm(t.type._context), rt(t), null
    case 17:
      return xt(t.type) && du(), rt(t), null
    case 19:
      if ((ve(Pe), (i = t.memoizedState), i === null)) return rt(t), null
      if (((n = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (n) Yi(i, !1)
        else {
          if (Le !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = yu(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Yi(i, !1),
                    n = a.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (i = r),
                    (e = n),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (r = r.sibling)
                return fe(Pe, (Pe.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          i.tail !== null &&
            Me() > ki &&
            ((t.flags |= 128), (n = !0), Yi(i, !1), (t.lanes = 4194304))
        }
      else {
        if (!n)
          if (((e = yu(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Yi(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !a.alternate && !we)
            )
              return rt(t), null
          } else
            2 * Me() - i.renderingStartTime > ki &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), Yi(i, !1), (t.lanes = 4194304))
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((r = i.last), r !== null ? (r.sibling = a) : (t.child = a), (i.last = a))
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Me()),
          (t.sibling = null),
          (r = Pe.current),
          fe(Pe, n ? (r & 1) | 2 : r & 1),
          t)
        : (rt(t), null)
    case 22:
    case 23:
      return (
        ym(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? Et & 1073741824 && (rt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : rt(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error($(156, t.tag))
}
function lT(e, t) {
  switch ((Zp(t), t.tag)) {
    case 1:
      return (
        xt(t.type) && du(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        xi(),
        ve(St),
        ve(lt),
        sm(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return am(t), null
    case 13:
      if ((ve(Pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error($(340))
        bi()
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
    case 19:
      return ve(Pe), null
    case 4:
      return xi(), null
    case 10:
      return rm(t.type._context), null
    case 22:
    case 23:
      return ym(), null
    case 24:
      return null
    default:
      return null
  }
}
var sl = !1,
  it = !1,
  uT = typeof WeakSet == 'function' ? WeakSet : Set,
  F = null
function Ho(e, t) {
  var r = e.ref
  if (r !== null)
    if (typeof r == 'function')
      try {
        r(null)
      } catch (n) {
        Re(e, t, n)
      }
    else r.current = null
}
function wh(e, t, r) {
  try {
    r()
  } catch (n) {
    Re(e, t, n)
  }
}
var a0 = !1
function cT(e, t) {
  if (((ih = su), (e = cS()), Xp(e))) {
    if ('selectionStart' in e) var r = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window
        var n = r.getSelection && r.getSelection()
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode
          var o = n.anchorOffset,
            i = n.focusNode
          n = n.focusOffset
          try {
            r.nodeType, i.nodeType
          } catch {
            r = null
            break e
          }
          var a = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null
          t: for (;;) {
            for (
              var h;
              d !== r || (o !== 0 && d.nodeType !== 3) || (s = a + o),
                d !== i || (n !== 0 && d.nodeType !== 3) || (l = a + n),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (f = d), (d = h)
            for (;;) {
              if (d === e) break t
              if (
                (f === r && ++u === o && (s = a),
                f === i && ++c === n && (l = a),
                (h = d.nextSibling) !== null)
              )
                break
              ;(d = f), (f = d.parentNode)
            }
            d = h
          }
          r = s === -1 || l === -1 ? null : { start: s, end: l }
        } else r = null
      }
    r = r || { start: 0, end: 0 }
  } else r = null
  for (ah = { focusedElem: e, selectionRange: r }, su = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (F = e)
    else
      for (; F !== null; ) {
        t = F
        try {
          var m = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (m !== null) {
                  var p = m.memoizedProps,
                    S = m.memoizedState,
                    g = t.stateNode,
                    v = g.getSnapshotBeforeUpdate(t.elementType === t.type ? p : Jt(t.type, p), S)
                  g.__reactInternalSnapshotBeforeUpdate = v
                }
                break
              case 3:
                var b = t.stateNode.containerInfo
                b.nodeType === 1
                  ? (b.textContent = '')
                  : b.nodeType === 9 && b.documentElement && b.removeChild(b.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error($(163))
            }
        } catch (k) {
          Re(t, t.return, k)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (F = e)
          break
        }
        F = t.return
      }
  return (m = a0), (a0 = !1), m
}
function ya(e, t, r) {
  var n = t.updateQueue
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var o = (n = n.next)
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy
        ;(o.destroy = void 0), i !== void 0 && wh(t, r, i)
      }
      o = o.next
    } while (o !== n)
  }
}
function cc(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var r = (t = t.next)
    do {
      if ((r.tag & e) === e) {
        var n = r.create
        r.destroy = n()
      }
      r = r.next
    } while (r !== t)
  }
}
function kh(e) {
  var t = e.ref
  if (t !== null) {
    var r = e.stateNode
    switch (e.tag) {
      case 5:
        e = r
        break
      default:
        e = r
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function sx(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), sx(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[gr], delete t[Ua], delete t[uh], delete t[G2], delete t[K2])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function lx(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function s0(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || lx(e.return)) return null
      e = e.return
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function Ch(e, t, r) {
  var n = e.tag
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = cu))
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Ch(e, t, r), e = e.sibling; e !== null; ) Ch(e, t, r), (e = e.sibling)
}
function _h(e, t, r) {
  var n = e.tag
  if (n === 5 || n === 6) (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e)
  else if (n !== 4 && ((e = e.child), e !== null))
    for (_h(e, t, r), e = e.sibling; e !== null; ) _h(e, t, r), (e = e.sibling)
}
var qe = null,
  er = !1
function Yr(e, t, r) {
  for (r = r.child; r !== null; ) ux(e, t, r), (r = r.sibling)
}
function ux(e, t, r) {
  if (Sr && typeof Sr.onCommitFiberUnmount == 'function')
    try {
      Sr.onCommitFiberUnmount(rc, r)
    } catch {}
  switch (r.tag) {
    case 5:
      it || Ho(r, t)
    case 6:
      var n = qe,
        o = er
      ;(qe = null),
        Yr(e, t, r),
        (qe = n),
        (er = o),
        qe !== null &&
          (er
            ? ((e = qe),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : qe.removeChild(r.stateNode))
      break
    case 18:
      qe !== null &&
        (er
          ? ((e = qe),
            (r = r.stateNode),
            e.nodeType === 8 ? jd(e.parentNode, r) : e.nodeType === 1 && jd(e, r),
            za(e))
          : jd(qe, r.stateNode))
      break
    case 4:
      ;(n = qe),
        (o = er),
        (qe = r.stateNode.containerInfo),
        (er = !0),
        Yr(e, t, r),
        (qe = n),
        (er = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (!it && ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))) {
        o = n = n.next
        do {
          var i = o,
            a = i.destroy
          ;(i = i.tag), a !== void 0 && (i & 2 || i & 4) && wh(r, t, a), (o = o.next)
        } while (o !== n)
      }
      Yr(e, t, r)
      break
    case 1:
      if (!it && (Ho(r, t), (n = r.stateNode), typeof n.componentWillUnmount == 'function'))
        try {
          ;(n.props = r.memoizedProps), (n.state = r.memoizedState), n.componentWillUnmount()
        } catch (s) {
          Re(r, t, s)
        }
      Yr(e, t, r)
      break
    case 21:
      Yr(e, t, r)
      break
    case 22:
      r.mode & 1
        ? ((it = (n = it) || r.memoizedState !== null), Yr(e, t, r), (it = n))
        : Yr(e, t, r)
      break
    default:
      Yr(e, t, r)
  }
}
function l0(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var r = e.stateNode
    r === null && (r = e.stateNode = new uT()),
      t.forEach(function (n) {
        var o = bT.bind(null, e, n)
        r.has(n) || (r.add(n), n.then(o, o))
      })
  }
}
function Xt(e, t) {
  var r = t.deletions
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var o = r[n]
      try {
        var i = e,
          a = t,
          s = a
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              ;(qe = s.stateNode), (er = !1)
              break e
            case 3:
              ;(qe = s.stateNode.containerInfo), (er = !0)
              break e
            case 4:
              ;(qe = s.stateNode.containerInfo), (er = !0)
              break e
          }
          s = s.return
        }
        if (qe === null) throw Error($(160))
        ux(i, a, o), (qe = null), (er = !1)
        var l = o.alternate
        l !== null && (l.return = null), (o.return = null)
      } catch (u) {
        Re(o, t, u)
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) cx(t, e), (t = t.sibling)
}
function cx(e, t) {
  var r = e.alternate,
    n = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Xt(t, e), cr(e), n & 4)) {
        try {
          ya(3, e, e.return), cc(3, e)
        } catch (p) {
          Re(e, e.return, p)
        }
        try {
          ya(5, e, e.return)
        } catch (p) {
          Re(e, e.return, p)
        }
      }
      break
    case 1:
      Xt(t, e), cr(e), n & 512 && r !== null && Ho(r, r.return)
      break
    case 5:
      if ((Xt(t, e), cr(e), n & 512 && r !== null && Ho(r, r.return), e.flags & 32)) {
        var o = e.stateNode
        try {
          Ia(o, '')
        } catch (p) {
          Re(e, e.return, p)
        }
      }
      if (n & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = r !== null ? r.memoizedProps : i,
          s = e.type,
          l = e.updateQueue
        if (((e.updateQueue = null), l !== null))
          try {
            s === 'input' && i.type === 'radio' && i.name != null && $b(o, i), Yf(s, a)
            var u = Yf(s, i)
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1]
              c === 'style'
                ? Fb(o, d)
                : c === 'dangerouslySetInnerHTML'
                ? Ob(o, d)
                : c === 'children'
                ? Ia(o, d)
                : Dp(o, c, d, u)
            }
            switch (s) {
              case 'input':
                Uf(o, i)
                break
              case 'textarea':
                jb(o, i)
                break
              case 'select':
                var f = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!i.multiple
                var h = i.value
                h != null
                  ? Qo(o, !!i.multiple, h, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Qo(o, !!i.multiple, i.defaultValue, !0)
                      : Qo(o, !!i.multiple, i.multiple ? [] : '', !1))
            }
            o[Ua] = i
          } catch (p) {
            Re(e, e.return, p)
          }
      }
      break
    case 6:
      if ((Xt(t, e), cr(e), n & 4)) {
        if (e.stateNode === null) throw Error($(162))
        ;(o = e.stateNode), (i = e.memoizedProps)
        try {
          o.nodeValue = i
        } catch (p) {
          Re(e, e.return, p)
        }
      }
      break
    case 3:
      if ((Xt(t, e), cr(e), n & 4 && r !== null && r.memoizedState.isDehydrated))
        try {
          za(t.containerInfo)
        } catch (p) {
          Re(e, e.return, p)
        }
      break
    case 4:
      Xt(t, e), cr(e)
      break
    case 13:
      Xt(t, e),
        cr(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (vm = Me())),
        n & 4 && l0(e)
      break
    case 22:
      if (
        ((c = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((it = (u = it) || c), Xt(t, e), (it = u)) : Xt(t, e),
        cr(e),
        n & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
          for (F = e, c = e.child; c !== null; ) {
            for (d = F = c; F !== null; ) {
              switch (((f = F), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ya(4, f, f.return)
                  break
                case 1:
                  Ho(f, f.return)
                  var m = f.stateNode
                  if (typeof m.componentWillUnmount == 'function') {
                    ;(n = f), (r = f.return)
                    try {
                      ;(t = n),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount()
                    } catch (p) {
                      Re(n, r, p)
                    }
                  }
                  break
                case 5:
                  Ho(f, f.return)
                  break
                case 22:
                  if (f.memoizedState !== null) {
                    c0(d)
                    continue
                  }
              }
              h !== null ? ((h.return = f), (F = h)) : c0(d)
            }
            c = c.sibling
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d
              try {
                ;(o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((s = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a = l != null && l.hasOwnProperty('display') ? l.display : null),
                      (s.style.display = Ib('display', a)))
              } catch (p) {
                Re(e, e.return, p)
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? '' : d.memoizedProps
              } catch (p) {
                Re(e, e.return, p)
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === e) &&
            d.child !== null
          ) {
            ;(d.child.return = d), (d = d.child)
            continue
          }
          if (d === e) break e
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e
            c === d && (c = null), (d = d.return)
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling)
        }
      }
      break
    case 19:
      Xt(t, e), cr(e), n & 4 && l0(e)
      break
    case 21:
      break
    default:
      Xt(t, e), cr(e)
  }
}
function cr(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (lx(r)) {
            var n = r
            break e
          }
          r = r.return
        }
        throw Error($(160))
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode
          n.flags & 32 && (Ia(o, ''), (n.flags &= -33))
          var i = s0(e)
          _h(e, i, o)
          break
        case 3:
        case 4:
          var a = n.stateNode.containerInfo,
            s = s0(e)
          Ch(e, s, a)
          break
        default:
          throw Error($(161))
      }
    } catch (l) {
      Re(e, e.return, l)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function dT(e, t, r) {
  ;(F = e), dx(e)
}
function dx(e, t, r) {
  for (var n = (e.mode & 1) !== 0; F !== null; ) {
    var o = F,
      i = o.child
    if (o.tag === 22 && n) {
      var a = o.memoizedState !== null || sl
      if (!a) {
        var s = o.alternate,
          l = (s !== null && s.memoizedState !== null) || it
        s = sl
        var u = it
        if (((sl = a), (it = l) && !u))
          for (F = o; F !== null; )
            (a = F),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? d0(o)
                : l !== null
                ? ((l.return = a), (F = l))
                : d0(o)
        for (; i !== null; ) (F = i), dx(i), (i = i.sibling)
        ;(F = o), (sl = s), (it = u)
      }
      u0(e)
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (F = i)) : u0(e)
  }
}
function u0(e) {
  for (; F !== null; ) {
    var t = F
    if (t.flags & 8772) {
      var r = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              it || cc(5, t)
              break
            case 1:
              var n = t.stateNode
              if (t.flags & 4 && !it)
                if (r === null) n.componentDidMount()
                else {
                  var o = t.elementType === t.type ? r.memoizedProps : Jt(t.type, r.memoizedProps)
                  n.componentDidUpdate(o, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                }
              var i = t.updateQueue
              i !== null && Gg(t, i, n)
              break
            case 3:
              var a = t.updateQueue
              if (a !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode
                      break
                    case 1:
                      r = t.child.stateNode
                  }
                Gg(t, a, r)
              }
              break
            case 5:
              var s = t.stateNode
              if (r === null && t.flags & 4) {
                r = s
                var l = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && r.focus()
                    break
                  case 'img':
                    l.src && (r.src = l.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate
                if (u !== null) {
                  var c = u.memoizedState
                  if (c !== null) {
                    var d = c.dehydrated
                    d !== null && za(d)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error($(163))
          }
        it || (t.flags & 512 && kh(t))
      } catch (f) {
        Re(t, t.return, f)
      }
    }
    if (t === e) {
      F = null
      break
    }
    if (((r = t.sibling), r !== null)) {
      ;(r.return = t.return), (F = r)
      break
    }
    F = t.return
  }
}
function c0(e) {
  for (; F !== null; ) {
    var t = F
    if (t === e) {
      F = null
      break
    }
    var r = t.sibling
    if (r !== null) {
      ;(r.return = t.return), (F = r)
      break
    }
    F = t.return
  }
}
function d0(e) {
  for (; F !== null; ) {
    var t = F
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return
          try {
            cc(4, t)
          } catch (l) {
            Re(t, r, l)
          }
          break
        case 1:
          var n = t.stateNode
          if (typeof n.componentDidMount == 'function') {
            var o = t.return
            try {
              n.componentDidMount()
            } catch (l) {
              Re(t, o, l)
            }
          }
          var i = t.return
          try {
            kh(t)
          } catch (l) {
            Re(t, i, l)
          }
          break
        case 5:
          var a = t.return
          try {
            kh(t)
          } catch (l) {
            Re(t, a, l)
          }
      }
    } catch (l) {
      Re(t, t.return, l)
    }
    if (t === e) {
      F = null
      break
    }
    var s = t.sibling
    if (s !== null) {
      ;(s.return = t.return), (F = s)
      break
    }
    F = t.return
  }
}
var fT = Math.ceil,
  xu = qr.ReactCurrentDispatcher,
  pm = qr.ReactCurrentOwner,
  Ht = qr.ReactCurrentBatchConfig,
  Z = 0,
  Ue = null,
  De = null,
  Qe = 0,
  Et = 0,
  Go = Mn(0),
  Le = 0,
  Xa = null,
  fo = 0,
  dc = 0,
  mm = 0,
  ba = null,
  gt = null,
  vm = 0,
  ki = 1 / 0,
  $r = null,
  wu = !1,
  Ph = null,
  gn = null,
  ll = !1,
  un = null,
  ku = 0,
  Sa = 0,
  Eh = null,
  Il = -1,
  Fl = 0
function ht() {
  return Z & 6 ? Me() : Il !== -1 ? Il : (Il = Me())
}
function yn(e) {
  return e.mode & 1
    ? Z & 2 && Qe !== 0
      ? Qe & -Qe
      : Y2.transition !== null
      ? (Fl === 0 && (Fl = qb()), Fl)
      : ((e = le), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : tS(e.type))), e)
    : 1
}
function ir(e, t, r, n) {
  if (50 < Sa) throw ((Sa = 0), (Eh = null), Error($(185)))
  gs(e, r, n),
    (!(Z & 2) || e !== Ue) &&
      (e === Ue && (!(Z & 2) && (dc |= r), Le === 4 && on(e, Qe)),
      wt(e, n),
      r === 1 && Z === 0 && !(t.mode & 1) && ((ki = Me() + 500), sc && On()))
}
function wt(e, t) {
  var r = e.callbackNode
  YE(e, t)
  var n = au(e, e === Ue ? Qe : 0)
  if (n === 0) r !== null && Sg(r), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Sg(r), t === 1))
      e.tag === 0 ? q2(f0.bind(null, e)) : SS(f0.bind(null, e)),
        U2(function () {
          !(Z & 6) && On()
        }),
        (r = null)
    else {
      switch (Yb(n)) {
        case 1:
          r = Vp
          break
        case 4:
          r = Gb
          break
        case 16:
          r = iu
          break
        case 536870912:
          r = Kb
          break
        default:
          r = iu
      }
      r = bx(r, fx.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = r)
  }
}
function fx(e, t) {
  if (((Il = -1), (Fl = 0), Z & 6)) throw Error($(327))
  var r = e.callbackNode
  if (ri() && e.callbackNode !== r) return null
  var n = au(e, e === Ue ? Qe : 0)
  if (n === 0) return null
  if (n & 30 || n & e.expiredLanes || t) t = Cu(e, n)
  else {
    t = n
    var o = Z
    Z |= 2
    var i = px()
    ;(Ue !== e || Qe !== t) && (($r = null), (ki = Me() + 500), Jn(e, t))
    do
      try {
        mT()
        break
      } catch (s) {
        hx(e, s)
      }
    while (1)
    tm(), (xu.current = i), (Z = o), De !== null ? (t = 0) : ((Ue = null), (Qe = 0), (t = Le))
  }
  if (t !== 0) {
    if ((t === 2 && ((o = eh(e)), o !== 0 && ((n = o), (t = Th(e, o)))), t === 1))
      throw ((r = Xa), Jn(e, 0), on(e, n), wt(e, Me()), r)
    if (t === 6) on(e, n)
    else {
      if (
        ((o = e.current.alternate),
        !(n & 30) &&
          !hT(o) &&
          ((t = Cu(e, n)), t === 2 && ((i = eh(e)), i !== 0 && ((n = i), (t = Th(e, i)))), t === 1))
      )
        throw ((r = Xa), Jn(e, 0), on(e, n), wt(e, Me()), r)
      switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error($(345))
        case 2:
          Vn(e, gt, $r)
          break
        case 3:
          if ((on(e, n), (n & 130023424) === n && ((t = vm + 500 - Me()), 10 < t))) {
            if (au(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & n) !== n)) {
              ht(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = lh(Vn.bind(null, e, gt, $r), t)
            break
          }
          Vn(e, gt, $r)
          break
        case 4:
          if ((on(e, n), (n & 4194240) === n)) break
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var a = 31 - or(n)
            ;(i = 1 << a), (a = t[a]), a > o && (o = a), (n &= ~i)
          }
          if (
            ((n = o),
            (n = Me() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * fT(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = lh(Vn.bind(null, e, gt, $r), n)
            break
          }
          Vn(e, gt, $r)
          break
        case 5:
          Vn(e, gt, $r)
          break
        default:
          throw Error($(329))
      }
    }
  }
  return wt(e, Me()), e.callbackNode === r ? fx.bind(null, e) : null
}
function Th(e, t) {
  var r = ba
  return (
    e.current.memoizedState.isDehydrated && (Jn(e, t).flags |= 256),
    (e = Cu(e, t)),
    e !== 2 && ((t = gt), (gt = r), t !== null && Ah(t)),
    e
  )
}
function Ah(e) {
  gt === null ? (gt = e) : gt.push.apply(gt, e)
}
function hT(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n],
            i = o.getSnapshot
          o = o.value
          try {
            if (!ar(i(), o)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null)) (r.return = t), (t = r)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function on(e, t) {
  for (
    t &= ~mm, t &= ~dc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - or(t),
      n = 1 << r
    ;(e[r] = -1), (t &= ~n)
  }
}
function f0(e) {
  if (Z & 6) throw Error($(327))
  ri()
  var t = au(e, 0)
  if (!(t & 1)) return wt(e, Me()), null
  var r = Cu(e, t)
  if (e.tag !== 0 && r === 2) {
    var n = eh(e)
    n !== 0 && ((t = n), (r = Th(e, n)))
  }
  if (r === 1) throw ((r = Xa), Jn(e, 0), on(e, t), wt(e, Me()), r)
  if (r === 6) throw Error($(345))
  return (
    (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Vn(e, gt, $r), wt(e, Me()), null
  )
}
function gm(e, t) {
  var r = Z
  Z |= 1
  try {
    return e(t)
  } finally {
    ;(Z = r), Z === 0 && ((ki = Me() + 500), sc && On())
  }
}
function ho(e) {
  un !== null && un.tag === 0 && !(Z & 6) && ri()
  var t = Z
  Z |= 1
  var r = Ht.transition,
    n = le
  try {
    if (((Ht.transition = null), (le = 1), e)) return e()
  } finally {
    ;(le = n), (Ht.transition = r), (Z = t), !(Z & 6) && On()
  }
}
function ym() {
  ;(Et = Go.current), ve(Go)
}
function Jn(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var r = e.timeoutHandle
  if ((r !== -1 && ((e.timeoutHandle = -1), W2(r)), De !== null))
    for (r = De.return; r !== null; ) {
      var n = r
      switch ((Zp(n), n.tag)) {
        case 1:
          ;(n = n.type.childContextTypes), n != null && du()
          break
        case 3:
          xi(), ve(St), ve(lt), sm()
          break
        case 5:
          am(n)
          break
        case 4:
          xi()
          break
        case 13:
          ve(Pe)
          break
        case 19:
          ve(Pe)
          break
        case 10:
          rm(n.type._context)
          break
        case 22:
        case 23:
          ym()
      }
      r = r.return
    }
  if (
    ((Ue = e),
    (De = e = bn(e.current, null)),
    (Qe = Et = t),
    (Le = 0),
    (Xa = null),
    (mm = dc = fo = 0),
    (gt = ba = null),
    Yn !== null)
  ) {
    for (t = 0; t < Yn.length; t++)
      if (((r = Yn[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null
        var o = n.next,
          i = r.pending
        if (i !== null) {
          var a = i.next
          ;(i.next = o), (n.next = a)
        }
        r.pending = n
      }
    Yn = null
  }
  return e
}
function hx(e, t) {
  do {
    var r = De
    try {
      if ((tm(), (jl.current = Su), bu)) {
        for (var n = Te.memoizedState; n !== null; ) {
          var o = n.queue
          o !== null && (o.pending = null), (n = n.next)
        }
        bu = !1
      }
      if (
        ((co = 0),
        (We = ze = Te = null),
        (ga = !1),
        (Ka = 0),
        (pm.current = null),
        r === null || r.return === null)
      ) {
        ;(Le = 1), (Xa = t), (De = null)
        break
      }
      e: {
        var i = e,
          a = r.return,
          s = r,
          l = t
        if (
          ((t = Qe),
          (s.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            c = s,
            d = c.tag
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null))
          }
          var h = Jg(a)
          if (h !== null) {
            ;(h.flags &= -257), e0(h, a, s, i, t), h.mode & 1 && Zg(i, u, t), (t = h), (l = u)
            var m = t.updateQueue
            if (m === null) {
              var p = new Set()
              p.add(l), (t.updateQueue = p)
            } else m.add(l)
            break e
          } else {
            if (!(t & 1)) {
              Zg(i, u, t), bm()
              break e
            }
            l = Error($(426))
          }
        } else if (we && s.mode & 1) {
          var S = Jg(a)
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), e0(S, a, s, i, t), Jp(wi(l, s))
            break e
          }
        }
        ;(i = l = wi(l, s)), Le !== 4 && (Le = 2), ba === null ? (ba = [i]) : ba.push(i), (i = a)
        do {
          switch (i.tag) {
            case 3:
              ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
              var g = XS(i, l, t)
              Hg(i, g)
              break e
            case 1:
              s = l
              var v = i.type,
                b = i.stateNode
              if (
                !(i.flags & 128) &&
                (typeof v.getDerivedStateFromError == 'function' ||
                  (b !== null &&
                    typeof b.componentDidCatch == 'function' &&
                    (gn === null || !gn.has(b))))
              ) {
                ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                var k = QS(i, s, t)
                Hg(i, k)
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      vx(r)
    } catch (C) {
      ;(t = C), De === r && r !== null && (De = r = r.return)
      continue
    }
    break
  } while (1)
}
function px() {
  var e = xu.current
  return (xu.current = Su), e === null ? Su : e
}
function bm() {
  ;(Le === 0 || Le === 3 || Le === 2) && (Le = 4),
    Ue === null || (!(fo & 268435455) && !(dc & 268435455)) || on(Ue, Qe)
}
function Cu(e, t) {
  var r = Z
  Z |= 2
  var n = px()
  ;(Ue !== e || Qe !== t) && (($r = null), Jn(e, t))
  do
    try {
      pT()
      break
    } catch (o) {
      hx(e, o)
    }
  while (1)
  if ((tm(), (Z = r), (xu.current = n), De !== null)) throw Error($(261))
  return (Ue = null), (Qe = 0), Le
}
function pT() {
  for (; De !== null; ) mx(De)
}
function mT() {
  for (; De !== null && !LE(); ) mx(De)
}
function mx(e) {
  var t = yx(e.alternate, e, Et)
  ;(e.memoizedProps = e.pendingProps), t === null ? vx(e) : (De = t), (pm.current = null)
}
function vx(e) {
  var t = e
  do {
    var r = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((r = lT(r, t)), r !== null)) {
        ;(r.flags &= 32767), (De = r)
        return
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(Le = 6), (De = null)
        return
      }
    } else if (((r = sT(r, t, Et)), r !== null)) {
      De = r
      return
    }
    if (((t = t.sibling), t !== null)) {
      De = t
      return
    }
    De = t = e
  } while (t !== null)
  Le === 0 && (Le = 5)
}
function Vn(e, t, r) {
  var n = le,
    o = Ht.transition
  try {
    ;(Ht.transition = null), (le = 1), vT(e, t, r, n)
  } finally {
    ;(Ht.transition = o), (le = n)
  }
  return null
}
function vT(e, t, r, n) {
  do ri()
  while (un !== null)
  if (Z & 6) throw Error($(327))
  r = e.finishedWork
  var o = e.finishedLanes
  if (r === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error($(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var i = r.lanes | r.childLanes
  if (
    (XE(e, i),
    e === Ue && ((De = Ue = null), (Qe = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      ll ||
      ((ll = !0),
      bx(iu, function () {
        return ri(), null
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    ;(i = Ht.transition), (Ht.transition = null)
    var a = le
    le = 1
    var s = Z
    ;(Z |= 4),
      (pm.current = null),
      cT(e, r),
      cx(r, e),
      F2(ah),
      (su = !!ih),
      (ah = ih = null),
      (e.current = r),
      dT(r),
      BE(),
      (Z = s),
      (le = a),
      (Ht.transition = i)
  } else e.current = r
  if (
    (ll && ((ll = !1), (un = e), (ku = o)),
    (i = e.pendingLanes),
    i === 0 && (gn = null),
    UE(r.stateNode),
    wt(e, Me()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest })
  if (wu) throw ((wu = !1), (e = Ph), (Ph = null), e)
  return (
    ku & 1 && e.tag !== 0 && ri(),
    (i = e.pendingLanes),
    i & 1 ? (e === Eh ? Sa++ : ((Sa = 0), (Eh = e))) : (Sa = 0),
    On(),
    null
  )
}
function ri() {
  if (un !== null) {
    var e = Yb(ku),
      t = Ht.transition,
      r = le
    try {
      if (((Ht.transition = null), (le = 16 > e ? 16 : e), un === null)) var n = !1
      else {
        if (((e = un), (un = null), (ku = 0), Z & 6)) throw Error($(331))
        var o = Z
        for (Z |= 4, F = e.current; F !== null; ) {
          var i = F,
            a = i.child
          if (F.flags & 16) {
            var s = i.deletions
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l]
                for (F = u; F !== null; ) {
                  var c = F
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ya(8, c, i)
                  }
                  var d = c.child
                  if (d !== null) (d.return = c), (F = d)
                  else
                    for (; F !== null; ) {
                      c = F
                      var f = c.sibling,
                        h = c.return
                      if ((sx(c), c === u)) {
                        F = null
                        break
                      }
                      if (f !== null) {
                        ;(f.return = h), (F = f)
                        break
                      }
                      F = h
                    }
                }
              }
              var m = i.alternate
              if (m !== null) {
                var p = m.child
                if (p !== null) {
                  m.child = null
                  do {
                    var S = p.sibling
                    ;(p.sibling = null), (p = S)
                  } while (p !== null)
                }
              }
              F = i
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (F = a)
          else
            e: for (; F !== null; ) {
              if (((i = F), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ya(9, i, i.return)
                }
              var g = i.sibling
              if (g !== null) {
                ;(g.return = i.return), (F = g)
                break e
              }
              F = i.return
            }
        }
        var v = e.current
        for (F = v; F !== null; ) {
          a = F
          var b = a.child
          if (a.subtreeFlags & 2064 && b !== null) (b.return = a), (F = b)
          else
            e: for (a = v; F !== null; ) {
              if (((s = F), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      cc(9, s)
                  }
                } catch (C) {
                  Re(s, s.return, C)
                }
              if (s === a) {
                F = null
                break e
              }
              var k = s.sibling
              if (k !== null) {
                ;(k.return = s.return), (F = k)
                break e
              }
              F = s.return
            }
        }
        if (((Z = o), On(), Sr && typeof Sr.onPostCommitFiberRoot == 'function'))
          try {
            Sr.onPostCommitFiberRoot(rc, e)
          } catch {}
        n = !0
      }
      return n
    } finally {
      ;(le = r), (Ht.transition = t)
    }
  }
  return !1
}
function h0(e, t, r) {
  ;(t = wi(r, t)),
    (t = XS(e, t, 1)),
    (e = vn(e, t, 1)),
    (t = ht()),
    e !== null && (gs(e, 1, t), wt(e, t))
}
function Re(e, t, r) {
  if (e.tag === 3) h0(e, e, r)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        h0(t, e, r)
        break
      } else if (t.tag === 1) {
        var n = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof n.componentDidCatch == 'function' && (gn === null || !gn.has(n)))
        ) {
          ;(e = wi(r, e)),
            (e = QS(t, e, 1)),
            (t = vn(t, e, 1)),
            (e = ht()),
            t !== null && (gs(t, 1, e), wt(t, e))
          break
        }
      }
      t = t.return
    }
}
function gT(e, t, r) {
  var n = e.pingCache
  n !== null && n.delete(t),
    (t = ht()),
    (e.pingedLanes |= e.suspendedLanes & r),
    Ue === e &&
      (Qe & r) === r &&
      (Le === 4 || (Le === 3 && (Qe & 130023424) === Qe && 500 > Me() - vm) ? Jn(e, 0) : (mm |= r)),
    wt(e, t)
}
function gx(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Zs), (Zs <<= 1), !(Zs & 130023424) && (Zs = 4194304)) : (t = 1))
  var r = ht()
  ;(e = Wr(e, t)), e !== null && (gs(e, t, r), wt(e, r))
}
function yT(e) {
  var t = e.memoizedState,
    r = 0
  t !== null && (r = t.retryLane), gx(e, r)
}
function bT(e, t) {
  var r = 0
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        o = e.memoizedState
      o !== null && (r = o.retryLane)
      break
    case 19:
      n = e.stateNode
      break
    default:
      throw Error($(314))
  }
  n !== null && n.delete(t), gx(e, r)
}
var yx
yx = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || St.current) bt = !0
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (bt = !1), aT(e, t, r)
      bt = !!(e.flags & 131072)
    }
  else (bt = !1), we && t.flags & 1048576 && xS(t, pu, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type
      Ol(e, t), (e = t.pendingProps)
      var o = yi(t, lt.current)
      ti(t, r), (o = um(null, t, n, e, o, r))
      var i = cm()
      return (
        (t.flags |= 1),
        typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            xt(n) ? ((i = !0), fu(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            om(t),
            (o.updater = lc),
            (t.stateNode = o),
            (o._reactInternals = t),
            mh(t, n, e, r),
            (t = yh(null, t, n, !0, i, r)))
          : ((t.tag = 0), we && i && Qp(t), dt(null, t, o, r), (t = t.child)),
        t
      )
    case 16:
      n = t.elementType
      e: {
        switch (
          (Ol(e, t),
          (e = t.pendingProps),
          (o = n._init),
          (n = o(n._payload)),
          (t.type = n),
          (o = t.tag = xT(n)),
          (e = Jt(n, e)),
          o)
        ) {
          case 0:
            t = gh(null, t, n, e, r)
            break e
          case 1:
            t = n0(null, t, n, e, r)
            break e
          case 11:
            t = t0(null, t, n, e, r)
            break e
          case 14:
            t = r0(null, t, n, Jt(n.type, e), r)
            break e
        }
        throw Error($(306, n, ''))
      }
      return t
    case 0:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Jt(n, o)),
        gh(e, t, n, o, r)
      )
    case 1:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Jt(n, o)),
        n0(e, t, n, o, r)
      )
    case 3:
      e: {
        if ((tx(t), e === null)) throw Error($(387))
        ;(n = t.pendingProps), (i = t.memoizedState), (o = i.element), _S(e, t), gu(t, n, null, r)
        var a = t.memoizedState
        if (((n = a.element), i.isDehydrated))
          if (
            ((i = {
              element: n,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ;(o = wi(Error($(423)), t)), (t = o0(e, t, n, r, o))
            break e
          } else if (n !== o) {
            ;(o = wi(Error($(424)), t)), (t = o0(e, t, n, r, o))
            break e
          } else
            for (
              Tt = mn(t.stateNode.containerInfo.firstChild),
                At = t,
                we = !0,
                tr = null,
                r = AS(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling)
        else {
          if ((bi(), n === o)) {
            t = Ur(e, t, r)
            break e
          }
          dt(e, t, n, r)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        RS(t),
        e === null && fh(t),
        (n = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        sh(n, o) ? (a = null) : i !== null && sh(n, i) && (t.flags |= 32),
        ex(e, t),
        dt(e, t, a, r),
        t.child
      )
    case 6:
      return e === null && fh(t), null
    case 13:
      return rx(e, t, r)
    case 4:
      return (
        im(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = Si(t, null, n, r)) : dt(e, t, n, r),
        t.child
      )
    case 11:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Jt(n, o)),
        t0(e, t, n, o, r)
      )
    case 7:
      return dt(e, t, t.pendingProps, r), t.child
    case 8:
      return dt(e, t, t.pendingProps.children, r), t.child
    case 12:
      return dt(e, t, t.pendingProps.children, r), t.child
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          fe(mu, n._currentValue),
          (n._currentValue = a),
          i !== null)
        )
          if (ar(i.value, a)) {
            if (i.children === o.children && !St.current) {
              t = Ur(e, t, r)
              break e
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies
              if (s !== null) {
                a = i.child
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === n) {
                    if (i.tag === 1) {
                      ;(l = Nr(-1, r & -r)), (l.tag = 2)
                      var u = i.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var c = u.pending
                        c === null ? (l.next = l) : ((l.next = c.next), (c.next = l)),
                          (u.pending = l)
                      }
                    }
                    ;(i.lanes |= r),
                      (l = i.alternate),
                      l !== null && (l.lanes |= r),
                      hh(i.return, r, t),
                      (s.lanes |= r)
                    break
                  }
                  l = l.next
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error($(341))
                ;(a.lanes |= r),
                  (s = a.alternate),
                  s !== null && (s.lanes |= r),
                  hh(a, r, t),
                  (a = i.sibling)
              } else a = i.child
              if (a !== null) a.return = i
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null
                    break
                  }
                  if (((i = a.sibling), i !== null)) {
                    ;(i.return = a.return), (a = i)
                    break
                  }
                  a = a.return
                }
              i = a
            }
        dt(e, t, o.children, r), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (n = t.pendingProps.children),
        ti(t, r),
        (o = Gt(o)),
        (n = n(o)),
        (t.flags |= 1),
        dt(e, t, n, r),
        t.child
      )
    case 14:
      return (n = t.type), (o = Jt(n, t.pendingProps)), (o = Jt(n.type, o)), r0(e, t, n, o, r)
    case 15:
      return ZS(e, t, t.type, t.pendingProps, r)
    case 17:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Jt(n, o)),
        Ol(e, t),
        (t.tag = 1),
        xt(n) ? ((e = !0), fu(t)) : (e = !1),
        ti(t, r),
        ES(t, n, o),
        mh(t, n, o, r),
        yh(null, t, n, !0, e, r)
      )
    case 19:
      return nx(e, t, r)
    case 22:
      return JS(e, t, r)
  }
  throw Error($(156, t.tag))
}
function bx(e, t) {
  return Hb(e, t)
}
function ST(e, t, r, n) {
  ;(this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function Wt(e, t, r, n) {
  return new ST(e, t, r, n)
}
function Sm(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function xT(e) {
  if (typeof e == 'function') return Sm(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === zp)) return 11
    if (e === Lp) return 14
  }
  return 2
}
function bn(e, t) {
  var r = e.alternate
  return (
    r === null
      ? ((r = Wt(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  )
}
function Dl(e, t, r, n, o, i) {
  var a = 2
  if (((n = e), typeof e == 'function')) Sm(e) && (a = 1)
  else if (typeof e == 'string') a = 5
  else
    e: switch (e) {
      case Fo:
        return eo(r.children, o, i, t)
      case Np:
        ;(a = 8), (o |= 8)
        break
      case zf:
        return (e = Wt(12, r, t, o | 2)), (e.elementType = zf), (e.lanes = i), e
      case Lf:
        return (e = Wt(13, r, t, o)), (e.elementType = Lf), (e.lanes = i), e
      case Bf:
        return (e = Wt(19, r, t, o)), (e.elementType = Bf), (e.lanes = i), e
      case Tb:
        return fc(r, o, i, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Pb:
              a = 10
              break e
            case Eb:
              a = 9
              break e
            case zp:
              a = 11
              break e
            case Lp:
              a = 14
              break e
            case en:
              ;(a = 16), (n = null)
              break e
          }
        throw Error($(130, e == null ? e : typeof e, ''))
    }
  return (t = Wt(a, r, t, o)), (t.elementType = e), (t.type = n), (t.lanes = i), t
}
function eo(e, t, r, n) {
  return (e = Wt(7, e, n, t)), (e.lanes = r), e
}
function fc(e, t, r, n) {
  return (
    (e = Wt(22, e, n, t)), (e.elementType = Tb), (e.lanes = r), (e.stateNode = { isHidden: !1 }), e
  )
}
function Ld(e, t, r) {
  return (e = Wt(6, e, null, t)), (e.lanes = r), e
}
function Bd(e, t, r) {
  return (
    (t = Wt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function wT(e, t, r, n, o) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = xd(0)),
    (this.expirationTimes = xd(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = xd(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function xm(e, t, r, n, o, i, a, s, l) {
  return (
    (e = new wT(e, t, r, s, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Wt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    om(i),
    e
  )
}
function kT(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: Io,
    key: n == null ? null : '' + n,
    children: e,
    containerInfo: t,
    implementation: r,
  }
}
function Sx(e) {
  if (!e) return Pn
  e = e._reactInternals
  e: {
    if (xo(e) !== e || e.tag !== 1) throw Error($(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (xt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error($(171))
  }
  if (e.tag === 1) {
    var r = e.type
    if (xt(r)) return bS(e, r, t)
  }
  return t
}
function xx(e, t, r, n, o, i, a, s, l) {
  return (
    (e = xm(r, n, !0, e, o, i, a, s, l)),
    (e.context = Sx(null)),
    (r = e.current),
    (n = ht()),
    (o = yn(r)),
    (i = Nr(n, o)),
    (i.callback = t ?? null),
    vn(r, i, o),
    (e.current.lanes = o),
    gs(e, o, n),
    wt(e, n),
    e
  )
}
function hc(e, t, r, n) {
  var o = t.current,
    i = ht(),
    a = yn(o)
  return (
    (r = Sx(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = Nr(i, a)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = vn(o, t, a)),
    e !== null && (ir(e, o, a, i), $l(e, o, a)),
    a
  )
}
function _u(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function p0(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane
    e.retryLane = r !== 0 && r < t ? r : t
  }
}
function wm(e, t) {
  p0(e, t), (e = e.alternate) && p0(e, t)
}
function CT() {
  return null
}
var wx =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function km(e) {
  this._internalRoot = e
}
pc.prototype.render = km.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error($(409))
  hc(e, t, null, null)
}
pc.prototype.unmount = km.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    ho(function () {
      hc(null, e, null, null)
    }),
      (t[Vr] = null)
  }
}
function pc(e) {
  this._internalRoot = e
}
pc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Zb()
    e = { blockedOn: null, target: e, priority: t }
    for (var r = 0; r < nn.length && t !== 0 && t < nn[r].priority; r++);
    nn.splice(r, 0, e), r === 0 && eS(e)
  }
}
function Cm(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function mc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function m0() {}
function _T(e, t, r, n, o) {
  if (o) {
    if (typeof n == 'function') {
      var i = n
      n = function () {
        var u = _u(a)
        i.call(u)
      }
    }
    var a = xx(t, n, e, 0, null, !1, !1, '', m0)
    return (
      (e._reactRootContainer = a),
      (e[Vr] = a.current),
      Va(e.nodeType === 8 ? e.parentNode : e),
      ho(),
      a
    )
  }
  for (; (o = e.lastChild); ) e.removeChild(o)
  if (typeof n == 'function') {
    var s = n
    n = function () {
      var u = _u(l)
      s.call(u)
    }
  }
  var l = xm(e, 0, !1, null, null, !1, !1, '', m0)
  return (
    (e._reactRootContainer = l),
    (e[Vr] = l.current),
    Va(e.nodeType === 8 ? e.parentNode : e),
    ho(function () {
      hc(t, l, r, n)
    }),
    l
  )
}
function vc(e, t, r, n, o) {
  var i = r._reactRootContainer
  if (i) {
    var a = i
    if (typeof o == 'function') {
      var s = o
      o = function () {
        var l = _u(a)
        s.call(l)
      }
    }
    hc(t, a, e, o)
  } else a = _T(r, t, e, o, n)
  return _u(a)
}
Xb = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var r = oa(t.pendingLanes)
        r !== 0 && (Wp(t, r | 1), wt(t, Me()), !(Z & 6) && ((ki = Me() + 500), On()))
      }
      break
    case 13:
      ho(function () {
        var n = Wr(e, 1)
        if (n !== null) {
          var o = ht()
          ir(n, e, 1, o)
        }
      }),
        wm(e, 1)
  }
}
Up = function (e) {
  if (e.tag === 13) {
    var t = Wr(e, 134217728)
    if (t !== null) {
      var r = ht()
      ir(t, e, 134217728, r)
    }
    wm(e, 134217728)
  }
}
Qb = function (e) {
  if (e.tag === 13) {
    var t = yn(e),
      r = Wr(e, t)
    if (r !== null) {
      var n = ht()
      ir(r, e, t, n)
    }
    wm(e, t)
  }
}
Zb = function () {
  return le
}
Jb = function (e, t) {
  var r = le
  try {
    return (le = e), t()
  } finally {
    le = r
  }
}
Qf = function (e, t, r) {
  switch (t) {
    case 'input':
      if ((Uf(e, r), (t = r.name), r.type === 'radio' && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode
        for (
          r = r.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t]
          if (n !== e && n.form === e.form) {
            var o = ac(n)
            if (!o) throw Error($(90))
            Rb(n), Uf(n, o)
          }
        }
      }
      break
    case 'textarea':
      jb(e, r)
      break
    case 'select':
      ;(t = r.value), t != null && Qo(e, !!r.multiple, t, !1)
  }
}
zb = gm
Lb = ho
var PT = { usingClientEntryPoint: !1, Events: [bs, Lo, ac, Db, Nb, gm] },
  Xi = {
    findFiberByHostInstance: qn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  ET = {
    bundleType: Xi.bundleType,
    version: Xi.version,
    rendererPackageName: Xi.rendererPackageName,
    rendererConfig: Xi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: qr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Wb(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Xi.findFiberByHostInstance || CT,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var ul = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!ul.isDisabled && ul.supportsFiber)
    try {
      ;(rc = ul.inject(ET)), (Sr = ul)
    } catch {}
}
It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = PT
It.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Cm(t)) throw Error($(200))
  return kT(e, t, null, r)
}
It.createRoot = function (e, t) {
  if (!Cm(e)) throw Error($(299))
  var r = !1,
    n = '',
    o = wx
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = xm(e, 1, !1, null, null, r, !1, n, o)),
    (e[Vr] = t.current),
    Va(e.nodeType === 8 ? e.parentNode : e),
    new km(t)
  )
}
It.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error($(188))
      : ((e = Object.keys(e).join(',')), Error($(268, e)))
  return (e = Wb(t)), (e = e === null ? null : e.stateNode), e
}
It.flushSync = function (e) {
  return ho(e)
}
It.hydrate = function (e, t, r) {
  if (!mc(t)) throw Error($(200))
  return vc(null, e, t, !0, r)
}
It.hydrateRoot = function (e, t, r) {
  if (!Cm(e)) throw Error($(405))
  var n = (r != null && r.hydratedSources) || null,
    o = !1,
    i = '',
    a = wx
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (o = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
    (t = xx(t, null, e, 1, r ?? null, o, !1, i, a)),
    (e[Vr] = t.current),
    Va(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (o = r._getVersion),
        (o = o(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, o])
          : t.mutableSourceEagerHydrationData.push(r, o)
  return new pc(t)
}
It.render = function (e, t, r) {
  if (!mc(t)) throw Error($(200))
  return vc(null, e, t, !1, r)
}
It.unmountComponentAtNode = function (e) {
  if (!mc(e)) throw Error($(40))
  return e._reactRootContainer
    ? (ho(function () {
        vc(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Vr] = null)
        })
      }),
      !0)
    : !1
}
It.unstable_batchedUpdates = gm
It.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!mc(r)) throw Error($(200))
  if (e == null || e._reactInternals === void 0) throw Error($(38))
  return vc(e, t, r, !1, n)
}
It.version = '18.2.0-next-9e3b772b8-20220608'
;(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
      } catch (r) {
        console.error(r)
      }
  }
  t(), (e.exports = It)
})(CE)
var kx,
  v0 = vi
;(kx = v0.createRoot), v0.hydrateRoot
function TT(e) {
  if (e.sheet) return e.sheet
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
}
function AT(e) {
  var t = document.createElement('style')
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  )
}
var RT = (function () {
    function e(r) {
      var n = this
      ;(this._insertTag = function (o) {
        var i
        n.tags.length === 0
          ? n.insertionPoint
            ? (i = n.insertionPoint.nextSibling)
            : n.prepend
            ? (i = n.container.firstChild)
            : (i = n.before)
          : (i = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(o, i),
          n.tags.push(o)
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null)
    }
    var t = e.prototype
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag)
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(AT(this))
        var o = this.tags[this.tags.length - 1]
        if (this.isSpeedy) {
          var i = TT(o)
          try {
            i.insertRule(n, i.cssRules.length)
          } catch {}
        } else o.appendChild(document.createTextNode(n))
        this.ctr++
      }),
      (t.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n)
        }),
          (this.tags = []),
          (this.ctr = 0)
      }),
      e
    )
  })(),
  nt = '-ms-',
  Pu = '-moz-',
  re = '-webkit-',
  Cx = 'comm',
  _m = 'rule',
  Pm = 'decl',
  $T = '@import',
  _x = '@keyframes',
  jT = Math.abs,
  gc = String.fromCharCode,
  MT = Object.assign
function OT(e, t) {
  return Ye(e, 0) ^ 45
    ? (((((((t << 2) ^ Ye(e, 0)) << 2) ^ Ye(e, 1)) << 2) ^ Ye(e, 2)) << 2) ^ Ye(e, 3)
    : 0
}
function Px(e) {
  return e.trim()
}
function IT(e, t) {
  return (e = t.exec(e)) ? e[0] : e
}
function ie(e, t, r) {
  return e.replace(t, r)
}
function Rh(e, t) {
  return e.indexOf(t)
}
function Ye(e, t) {
  return e.charCodeAt(t) | 0
}
function Qa(e, t, r) {
  return e.slice(t, r)
}
function mr(e) {
  return e.length
}
function Em(e) {
  return e.length
}
function cl(e, t) {
  return t.push(e), e
}
function FT(e, t) {
  return e.map(t).join('')
}
var yc = 1,
  Ci = 1,
  Ex = 0,
  kt = 0,
  Fe = 0,
  Oi = ''
function bc(e, t, r, n, o, i, a) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: o,
    children: i,
    line: yc,
    column: Ci,
    length: a,
    return: '',
  }
}
function Qi(e, t) {
  return MT(bc('', null, null, '', null, null, 0), e, { length: -e.length }, t)
}
function DT() {
  return Fe
}
function NT() {
  return (Fe = kt > 0 ? Ye(Oi, --kt) : 0), Ci--, Fe === 10 && ((Ci = 1), yc--), Fe
}
function Rt() {
  return (Fe = kt < Ex ? Ye(Oi, kt++) : 0), Ci++, Fe === 10 && ((Ci = 1), yc++), Fe
}
function wr() {
  return Ye(Oi, kt)
}
function Nl() {
  return kt
}
function xs(e, t) {
  return Qa(Oi, e, t)
}
function Za(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4
    case 58:
      return 3
    case 34:
    case 39:
    case 40:
    case 91:
      return 2
    case 41:
    case 93:
      return 1
  }
  return 0
}
function Tx(e) {
  return (yc = Ci = 1), (Ex = mr((Oi = e))), (kt = 0), []
}
function Ax(e) {
  return (Oi = ''), e
}
function zl(e) {
  return Px(xs(kt - 1, $h(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function zT(e) {
  for (; (Fe = wr()) && Fe < 33; ) Rt()
  return Za(e) > 2 || Za(Fe) > 3 ? '' : ' '
}
function LT(e, t) {
  for (; --t && Rt() && !(Fe < 48 || Fe > 102 || (Fe > 57 && Fe < 65) || (Fe > 70 && Fe < 97)); );
  return xs(e, Nl() + (t < 6 && wr() == 32 && Rt() == 32))
}
function $h(e) {
  for (; Rt(); )
    switch (Fe) {
      case e:
        return kt
      case 34:
      case 39:
        e !== 34 && e !== 39 && $h(Fe)
        break
      case 40:
        e === 41 && $h(e)
        break
      case 92:
        Rt()
        break
    }
  return kt
}
function BT(e, t) {
  for (; Rt() && e + Fe !== 47 + 10; ) if (e + Fe === 42 + 42 && wr() === 47) break
  return '/*' + xs(t, kt - 1) + '*' + gc(e === 47 ? e : Rt())
}
function VT(e) {
  for (; !Za(wr()); ) Rt()
  return xs(e, kt)
}
function WT(e) {
  return Ax(Ll('', null, null, null, [''], (e = Tx(e)), 0, [0], e))
}
function Ll(e, t, r, n, o, i, a, s, l) {
  for (
    var u = 0,
      c = 0,
      d = a,
      f = 0,
      h = 0,
      m = 0,
      p = 1,
      S = 1,
      g = 1,
      v = 0,
      b = '',
      k = o,
      C = i,
      R = n,
      E = b;
    S;

  )
    switch (((m = v), (v = Rt()))) {
      case 40:
        if (m != 108 && Ye(E, d - 1) == 58) {
          Rh((E += ie(zl(v), '&', '&\f')), '&\f') != -1 && (g = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        E += zl(v)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        E += zT(m)
        break
      case 92:
        E += LT(Nl() - 1, 7)
        continue
      case 47:
        switch (wr()) {
          case 42:
          case 47:
            cl(UT(BT(Rt(), Nl()), t, r), l)
            break
          default:
            E += '/'
        }
        break
      case 123 * p:
        s[u++] = mr(E) * g
      case 125 * p:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            S = 0
          case 59 + c:
            h > 0 &&
              mr(E) - d &&
              cl(h > 32 ? y0(E + ';', n, r, d - 1) : y0(ie(E, ' ', '') + ';', n, r, d - 2), l)
            break
          case 59:
            E += ';'
          default:
            if ((cl((R = g0(E, t, r, u, c, o, s, b, (k = []), (C = []), d)), i), v === 123))
              if (c === 0) Ll(E, t, R, R, k, i, d, s, C)
              else
                switch (f === 99 && Ye(E, 3) === 110 ? 100 : f) {
                  case 100:
                  case 109:
                  case 115:
                    Ll(
                      e,
                      R,
                      R,
                      n && cl(g0(e, R, R, 0, 0, o, s, b, o, (k = []), d), C),
                      o,
                      C,
                      d,
                      s,
                      n ? k : C
                    )
                    break
                  default:
                    Ll(E, R, R, R, [''], C, 0, s, C)
                }
        }
        ;(u = c = h = 0), (p = g = 1), (b = E = ''), (d = a)
        break
      case 58:
        ;(d = 1 + mr(E)), (h = m)
      default:
        if (p < 1) {
          if (v == 123) --p
          else if (v == 125 && p++ == 0 && NT() == 125) continue
        }
        switch (((E += gc(v)), v * p)) {
          case 38:
            g = c > 0 ? 1 : ((E += '\f'), -1)
            break
          case 44:
            ;(s[u++] = (mr(E) - 1) * g), (g = 1)
            break
          case 64:
            wr() === 45 && (E += zl(Rt())), (f = wr()), (c = d = mr((b = E += VT(Nl())))), v++
            break
          case 45:
            m === 45 && mr(E) == 2 && (p = 0)
        }
    }
  return i
}
function g0(e, t, r, n, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [''], h = Em(f), m = 0, p = 0, S = 0; m < n; ++m)
    for (var g = 0, v = Qa(e, d + 1, (d = jT((p = a[m])))), b = e; g < h; ++g)
      (b = Px(p > 0 ? f[g] + ' ' + v : ie(v, /&\f/g, f[g]))) && (l[S++] = b)
  return bc(e, t, r, o === 0 ? _m : s, l, u, c)
}
function UT(e, t, r) {
  return bc(e, t, r, Cx, gc(DT()), Qa(e, 2, -2), 0)
}
function y0(e, t, r, n) {
  return bc(e, t, r, Pm, Qa(e, 0, n), Qa(e, n + 1, -1), n)
}
function ni(e, t) {
  for (var r = '', n = Em(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || ''
  return r
}
function HT(e, t, r, n) {
  switch (e.type) {
    case $T:
    case Pm:
      return (e.return = e.return || e.value)
    case Cx:
      return ''
    case _x:
      return (e.return = e.value + '{' + ni(e.children, n) + '}')
    case _m:
      e.value = e.props.join(',')
  }
  return mr((r = ni(e.children, n))) ? (e.return = e.value + '{' + r + '}') : ''
}
function GT(e) {
  var t = Em(e)
  return function (r, n, o, i) {
    for (var a = '', s = 0; s < t; s++) a += e[s](r, n, o, i) || ''
    return a
  }
}
function KT(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t))
  }
}
var b0 = function (t) {
  var r = new WeakMap()
  return function (n) {
    if (r.has(n)) return r.get(n)
    var o = t(n)
    return r.set(n, o), o
  }
}
function Rx(e) {
  var t = Object.create(null)
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r]
  }
}
var qT = function (t, r, n) {
    for (var o = 0, i = 0; (o = i), (i = wr()), o === 38 && i === 12 && (r[n] = 1), !Za(i); ) Rt()
    return xs(t, kt)
  },
  YT = function (t, r) {
    var n = -1,
      o = 44
    do
      switch (Za(o)) {
        case 0:
          o === 38 && wr() === 12 && (r[n] = 1), (t[n] += qT(kt - 1, r, n))
          break
        case 2:
          t[n] += zl(o)
          break
        case 4:
          if (o === 44) {
            ;(t[++n] = wr() === 58 ? '&\f' : ''), (r[n] = t[n].length)
            break
          }
        default:
          t[n] += gc(o)
      }
    while ((o = Rt()))
    return t
  },
  XT = function (t, r) {
    return Ax(YT(Tx(t), r))
  },
  S0 = new WeakMap(),
  QT = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line;
        n.type !== 'rule';

      )
        if (((n = n.parent), !n)) return
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !S0.get(n)) && !o) {
        S0.set(t, !0)
        for (var i = [], a = XT(r, i), s = n.props, l = 0, u = 0; l < a.length; l++)
          for (var c = 0; c < s.length; c++, u++)
            t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + ' ' + a[l]
      }
    }
  },
  ZT = function (t) {
    if (t.type === 'decl') {
      var r = t.value
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ''), (t.value = ''))
    }
  }
function $x(e, t) {
  switch (OT(e, t)) {
    case 5103:
      return re + 'print-' + e + e
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return re + e + e
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return re + e + Pu + e + nt + e + e
    case 6828:
    case 4268:
      return re + e + nt + e + e
    case 6165:
      return re + e + nt + 'flex-' + e + e
    case 5187:
      return re + e + ie(e, /(\w+).+(:[^]+)/, re + 'box-$1$2' + nt + 'flex-$1$2') + e
    case 5443:
      return re + e + nt + 'flex-item-' + ie(e, /flex-|-self/, '') + e
    case 4675:
      return re + e + nt + 'flex-line-pack' + ie(e, /align-content|flex-|-self/, '') + e
    case 5548:
      return re + e + nt + ie(e, 'shrink', 'negative') + e
    case 5292:
      return re + e + nt + ie(e, 'basis', 'preferred-size') + e
    case 6060:
      return re + 'box-' + ie(e, '-grow', '') + re + e + nt + ie(e, 'grow', 'positive') + e
    case 4554:
      return re + ie(e, /([^-])(transform)/g, '$1' + re + '$2') + e
    case 6187:
      return ie(ie(ie(e, /(zoom-|grab)/, re + '$1'), /(image-set)/, re + '$1'), e, '') + e
    case 5495:
    case 3959:
      return ie(e, /(image-set\([^]*)/, re + '$1$`$1')
    case 4968:
      return (
        ie(
          ie(e, /(.+:)(flex-)?(.*)/, re + 'box-pack:$3' + nt + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        re +
        e +
        e
      )
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ie(e, /(.+)-inline(.+)/, re + '$1$2') + e
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (mr(e) - 1 - t > 6)
        switch (Ye(e, t + 1)) {
          case 109:
            if (Ye(e, t + 4) !== 45) break
          case 102:
            return (
              ie(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' + re + '$2-$3$1' + Pu + (Ye(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            )
          case 115:
            return ~Rh(e, 'stretch') ? $x(ie(e, 'stretch', 'fill-available'), t) + e : e
        }
      break
    case 4949:
      if (Ye(e, t + 1) !== 115) break
    case 6444:
      switch (Ye(e, mr(e) - 3 - (~Rh(e, '!important') && 10))) {
        case 107:
          return ie(e, ':', ':' + re) + e
        case 101:
          return (
            ie(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                re +
                (Ye(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                re +
                '$2$3$1' +
                nt +
                '$2box$3'
            ) + e
          )
      }
      break
    case 5936:
      switch (Ye(e, t + 11)) {
        case 114:
          return re + e + nt + ie(e, /[svh]\w+-[tblr]{2}/, 'tb') + e
        case 108:
          return re + e + nt + ie(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e
        case 45:
          return re + e + nt + ie(e, /[svh]\w+-[tblr]{2}/, 'lr') + e
      }
      return re + e + nt + e + e
  }
  return e
}
var JT = function (t, r, n, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Pm:
          t.return = $x(t.value, t.length)
          break
        case _x:
          return ni([Qi(t, { value: ie(t.value, '@', '@' + re) })], o)
        case _m:
          if (t.length)
            return FT(t.props, function (i) {
              switch (IT(i, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return ni([Qi(t, { props: [ie(i, /:(read-\w+)/, ':' + Pu + '$1')] })], o)
                case '::placeholder':
                  return ni(
                    [
                      Qi(t, { props: [ie(i, /:(plac\w+)/, ':' + re + 'input-$1')] }),
                      Qi(t, { props: [ie(i, /:(plac\w+)/, ':' + Pu + '$1')] }),
                      Qi(t, { props: [ie(i, /:(plac\w+)/, nt + 'input-$1')] }),
                    ],
                    o
                  )
              }
              return ''
            })
      }
  },
  eA = [JT],
  tA = function (t) {
    var r = t.key
    if (r === 'css') {
      var n = document.querySelectorAll('style[data-emotion]:not([data-s])')
      Array.prototype.forEach.call(n, function (p) {
        var S = p.getAttribute('data-emotion')
        S.indexOf(' ') !== -1 && (document.head.appendChild(p), p.setAttribute('data-s', ''))
      })
    }
    var o = t.stylisPlugins || eA,
      i = {},
      a,
      s = []
    ;(a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (p) {
          for (var S = p.getAttribute('data-emotion').split(' '), g = 1; g < S.length; g++)
            i[S[g]] = !0
          s.push(p)
        }
      )
    var l,
      u = [QT, ZT]
    {
      var c,
        d = [
          HT,
          KT(function (p) {
            c.insert(p)
          }),
        ],
        f = GT(u.concat(o, d)),
        h = function (S) {
          return ni(WT(S), f)
        }
      l = function (S, g, v, b) {
        ;(c = v), h(S ? S + '{' + g.styles + '}' : g.styles), b && (m.inserted[g.name] = !0)
      }
    }
    var m = {
      key: r,
      sheet: new RT({
        key: r,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    }
    return m.sheet.hydrate(s), m
  }
function po() {
  return (
    (po = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    po.apply(this, arguments)
  )
}
var jh = {},
  rA = {
    get exports() {
      return jh
    },
    set exports(e) {
      jh = e
    },
  },
  ue = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var He = typeof Symbol == 'function' && Symbol.for,
  Tm = He ? Symbol.for('react.element') : 60103,
  Am = He ? Symbol.for('react.portal') : 60106,
  Sc = He ? Symbol.for('react.fragment') : 60107,
  xc = He ? Symbol.for('react.strict_mode') : 60108,
  wc = He ? Symbol.for('react.profiler') : 60114,
  kc = He ? Symbol.for('react.provider') : 60109,
  Cc = He ? Symbol.for('react.context') : 60110,
  Rm = He ? Symbol.for('react.async_mode') : 60111,
  _c = He ? Symbol.for('react.concurrent_mode') : 60111,
  Pc = He ? Symbol.for('react.forward_ref') : 60112,
  Ec = He ? Symbol.for('react.suspense') : 60113,
  nA = He ? Symbol.for('react.suspense_list') : 60120,
  Tc = He ? Symbol.for('react.memo') : 60115,
  Ac = He ? Symbol.for('react.lazy') : 60116,
  oA = He ? Symbol.for('react.block') : 60121,
  iA = He ? Symbol.for('react.fundamental') : 60117,
  aA = He ? Symbol.for('react.responder') : 60118,
  sA = He ? Symbol.for('react.scope') : 60119
function Dt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case Tm:
        switch (((e = e.type), e)) {
          case Rm:
          case _c:
          case Sc:
          case wc:
          case xc:
          case Ec:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Cc:
              case Pc:
              case Ac:
              case Tc:
              case kc:
                return e
              default:
                return t
            }
        }
      case Am:
        return t
    }
  }
}
function jx(e) {
  return Dt(e) === _c
}
ue.AsyncMode = Rm
ue.ConcurrentMode = _c
ue.ContextConsumer = Cc
ue.ContextProvider = kc
ue.Element = Tm
ue.ForwardRef = Pc
ue.Fragment = Sc
ue.Lazy = Ac
ue.Memo = Tc
ue.Portal = Am
ue.Profiler = wc
ue.StrictMode = xc
ue.Suspense = Ec
ue.isAsyncMode = function (e) {
  return jx(e) || Dt(e) === Rm
}
ue.isConcurrentMode = jx
ue.isContextConsumer = function (e) {
  return Dt(e) === Cc
}
ue.isContextProvider = function (e) {
  return Dt(e) === kc
}
ue.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Tm
}
ue.isForwardRef = function (e) {
  return Dt(e) === Pc
}
ue.isFragment = function (e) {
  return Dt(e) === Sc
}
ue.isLazy = function (e) {
  return Dt(e) === Ac
}
ue.isMemo = function (e) {
  return Dt(e) === Tc
}
ue.isPortal = function (e) {
  return Dt(e) === Am
}
ue.isProfiler = function (e) {
  return Dt(e) === wc
}
ue.isStrictMode = function (e) {
  return Dt(e) === xc
}
ue.isSuspense = function (e) {
  return Dt(e) === Ec
}
ue.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Sc ||
    e === _c ||
    e === wc ||
    e === xc ||
    e === Ec ||
    e === nA ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Ac ||
        e.$$typeof === Tc ||
        e.$$typeof === kc ||
        e.$$typeof === Cc ||
        e.$$typeof === Pc ||
        e.$$typeof === iA ||
        e.$$typeof === aA ||
        e.$$typeof === sA ||
        e.$$typeof === oA))
  )
}
ue.typeOf = Dt
;(function (e) {
  e.exports = ue
})(rA)
var Mx = jh,
  lA = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  uA = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  Ox = {}
Ox[Mx.ForwardRef] = lA
Ox[Mx.Memo] = uA
var cA = !0
function dA(e, t, r) {
  var n = ''
  return (
    r.split(' ').forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ';') : (n += o + ' ')
    }),
    n
  )
}
var Ix = function (t, r, n) {
    var o = t.key + '-' + r.name
    ;(n === !1 || cA === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles)
  },
  Fx = function (t, r, n) {
    Ix(t, r, n)
    var o = t.key + '-' + r.name
    if (t.inserted[r.name] === void 0) {
      var i = r
      do t.insert(r === i ? '.' + o : '', i, t.sheet, !0), (i = i.next)
      while (i !== void 0)
    }
  }
function fA(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)))
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8
    case 1:
      ;(t ^= e.charCodeAt(n) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16))
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  )
}
var hA = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  pA = /[A-Z]|^ms/g,
  mA = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Dx = function (t) {
    return t.charCodeAt(1) === 45
  },
  x0 = function (t) {
    return t != null && typeof t != 'boolean'
  },
  Vd = Rx(function (e) {
    return Dx(e) ? e : e.replace(pA, '-$&').toLowerCase()
  }),
  w0 = function (t, r) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof r == 'string')
          return r.replace(mA, function (n, o, i) {
            return (vr = { name: o, styles: i, next: vr }), o
          })
    }
    return hA[t] !== 1 && !Dx(t) && typeof r == 'number' && r !== 0 ? r + 'px' : r
  }
function Ja(e, t, r) {
  if (r == null) return ''
  if (r.__emotion_styles !== void 0) return r
  switch (typeof r) {
    case 'boolean':
      return ''
    case 'object': {
      if (r.anim === 1) return (vr = { name: r.name, styles: r.styles, next: vr }), r.name
      if (r.styles !== void 0) {
        var n = r.next
        if (n !== void 0)
          for (; n !== void 0; ) (vr = { name: n.name, styles: n.styles, next: vr }), (n = n.next)
        var o = r.styles + ';'
        return o
      }
      return vA(e, t, r)
    }
    case 'function': {
      if (e !== void 0) {
        var i = vr,
          a = r(e)
        return (vr = i), Ja(e, t, a)
      }
      break
    }
  }
  if (t == null) return r
  var s = t[r]
  return s !== void 0 ? s : r
}
function vA(e, t, r) {
  var n = ''
  if (Array.isArray(r)) for (var o = 0; o < r.length; o++) n += Ja(e, t, r[o]) + ';'
  else
    for (var i in r) {
      var a = r[i]
      if (typeof a != 'object')
        t != null && t[a] !== void 0
          ? (n += i + '{' + t[a] + '}')
          : x0(a) && (n += Vd(i) + ':' + w0(i, a) + ';')
      else if (Array.isArray(a) && typeof a[0] == 'string' && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++) x0(a[s]) && (n += Vd(i) + ':' + w0(i, a[s]) + ';')
      else {
        var l = Ja(e, t, a)
        switch (i) {
          case 'animation':
          case 'animationName': {
            n += Vd(i) + ':' + l + ';'
            break
          }
          default:
            n += i + '{' + l + '}'
        }
      }
    }
  return n
}
var k0 = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  vr,
  $m = function (t, r, n) {
    if (t.length === 1 && typeof t[0] == 'object' && t[0] !== null && t[0].styles !== void 0)
      return t[0]
    var o = !0,
      i = ''
    vr = void 0
    var a = t[0]
    a == null || a.raw === void 0 ? ((o = !1), (i += Ja(n, r, a))) : (i += a[0])
    for (var s = 1; s < t.length; s++) (i += Ja(n, r, t[s])), o && (i += a[s])
    k0.lastIndex = 0
    for (var l = '', u; (u = k0.exec(i)) !== null; ) l += '-' + u[1]
    var c = fA(i) + l
    return { name: c, styles: i, next: vr }
  },
  gA = function (t) {
    return t()
  },
  Nx = Ma['useInsertionEffect'] ? Ma['useInsertionEffect'] : !1,
  yA = Nx || gA,
  C0 = Nx || y.useLayoutEffect,
  zx = y.createContext(typeof HTMLElement < 'u' ? tA({ key: 'css' }) : null)
zx.Provider
var Lx = function (t) {
    return y.forwardRef(function (r, n) {
      var o = y.useContext(zx)
      return t(r, o, n)
    })
  },
  es = y.createContext({}),
  bA = function (t, r) {
    if (typeof r == 'function') {
      var n = r(t)
      return n
    }
    return po({}, t, r)
  },
  SA = b0(function (e) {
    return b0(function (t) {
      return bA(e, t)
    })
  }),
  xA = function (t) {
    var r = y.useContext(es)
    return (
      t.theme !== r && (r = SA(r)(t.theme)), y.createElement(es.Provider, { value: r }, t.children)
    )
  },
  Rc = Lx(function (e, t) {
    var r = e.styles,
      n = $m([r], void 0, y.useContext(es)),
      o = y.useRef()
    return (
      C0(
        function () {
          var i = t.key + '-global',
            a = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            s = !1,
            l = document.querySelector('style[data-emotion="' + i + ' ' + n.name + '"]')
          return (
            t.sheet.tags.length && (a.before = t.sheet.tags[0]),
            l !== null && ((s = !0), l.setAttribute('data-emotion', i), a.hydrate([l])),
            (o.current = [a, s]),
            function () {
              a.flush()
            }
          )
        },
        [t]
      ),
      C0(
        function () {
          var i = o.current,
            a = i[0],
            s = i[1]
          if (s) {
            i[1] = !1
            return
          }
          if ((n.next !== void 0 && Fx(t, n.next, !0), a.tags.length)) {
            var l = a.tags[a.tags.length - 1].nextElementSibling
            ;(a.before = l), a.flush()
          }
          t.insert('', n, a, !1)
        },
        [t, n.name]
      ),
      null
    )
  })
function wA() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]
  return $m(t)
}
var jm = function () {
    var t = wA.apply(void 0, arguments),
      r = 'animation-' + t.name
    return {
      name: r,
      styles: '@keyframes ' + r + '{' + t.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_'
      },
    }
  },
  Bx = `
  :root, :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root, :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root, :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root, :host {
      --chakra-vh: 100dvh;
    }
  }
`,
  kA = () => x.jsx(Rc, { styles: Bx }),
  CA = () =>
    x.jsx(Rc, {
      styles: `
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        font-feature-settings: 'kern';
      }

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
      }

      main {
        display: block;
      }

      hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      pre,
      code,
      kbd,
      samp {
        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bold;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }

      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      body,
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
        margin: 0;
      }

      button {
        background: transparent;
        padding: 0;
      }

      fieldset {
        margin: 0;
        padding: 0;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: vertical;
      }

      button,
      [role="button"] {
        cursor: pointer;
      }

      button::-moz-focus-inner {
        border: 0 !important;
      }

      table {
        border-collapse: collapse;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
        display: block;
      }

      img,
      video {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {
        outline: none;
        box-shadow: none;
      }

      select::-ms-expand {
        display: none;
      }

      ${Bx}
    `,
    })
function _A(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`
}
function qt(e = {}) {
  const {
      name: t,
      strict: r = !0,
      hookName: n = 'useContext',
      providerName: o = 'Provider',
      errorMessage: i,
    } = e,
    a = y.createContext(void 0)
  a.displayName = t
  function s() {
    var l
    const u = y.useContext(a)
    if (!u && r) {
      const c = new Error(i ?? _A(n, o))
      throw (
        ((c.name = 'ContextError'), (l = Error.captureStackTrace) == null || l.call(Error, c, s), c)
      )
    }
    return u
  }
  return [a.Provider, s, a]
}
var [PA, EA] = qt({ strict: !1, name: 'PortalManagerContext' })
function Vx(e) {
  const { children: t, zIndex: r } = e
  return x.jsx(PA, { value: { zIndex: r }, children: t })
}
Vx.displayName = 'PortalManager'
var ts = globalThis != null && globalThis.document ? y.useLayoutEffect : y.useEffect,
  [Wx, TA] = qt({ strict: !1, name: 'PortalContext' }),
  Mm = 'chakra-portal',
  AA = '.chakra-portal',
  RA = e =>
    x.jsx('div', {
      className: 'chakra-portal-zIndex',
      style: { position: 'absolute', zIndex: e.zIndex, top: 0, left: 0, right: 0 },
      children: e.children,
    }),
  $A = e => {
    const { appendToParentPortal: t, children: r } = e,
      [n, o] = y.useState(null),
      i = y.useRef(null),
      [, a] = y.useState({})
    y.useEffect(() => a({}), [])
    const s = TA(),
      l = EA()
    ts(() => {
      if (!n) return
      const c = n.ownerDocument,
        d = t ? s ?? c.body : c.body
      if (!d) return
      ;(i.current = c.createElement('div')),
        (i.current.className = Mm),
        d.appendChild(i.current),
        a({})
      const f = i.current
      return () => {
        d.contains(f) && d.removeChild(f)
      }
    }, [n])
    const u =
      l != null && l.zIndex ? x.jsx(RA, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r
    return i.current
      ? vi.createPortal(x.jsx(Wx, { value: i.current, children: u }), i.current)
      : x.jsx('span', {
          ref: c => {
            c && o(c)
          },
        })
  },
  jA = e => {
    const { children: t, containerRef: r, appendToParentPortal: n } = e,
      o = r.current,
      i = o ?? (typeof window < 'u' ? document.body : void 0),
      a = y.useMemo(() => {
        const l = o == null ? void 0 : o.ownerDocument.createElement('div')
        return l && (l.className = Mm), l
      }, [o]),
      [, s] = y.useState({})
    return (
      ts(() => s({}), []),
      ts(() => {
        if (!(!a || !i))
          return (
            i.appendChild(a),
            () => {
              i.removeChild(a)
            }
          )
      }, [a, i]),
      i && a ? vi.createPortal(x.jsx(Wx, { value: n ? a : null, children: t }), a) : null
    )
  }
function ws(e) {
  const t = { appendToParentPortal: !0, ...e },
    { containerRef: r, ...n } = t
  return r ? x.jsx(jA, { containerRef: r, ...n }) : x.jsx($A, { ...n })
}
ws.className = Mm
ws.selector = AA
ws.displayName = 'Portal'
function Ux() {
  const e = y.useContext(es)
  if (!e)
    throw Error(
      'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`'
    )
  return e
}
var Om = y.createContext({})
Om.displayName = 'ColorModeContext'
function Im() {
  const e = y.useContext(Om)
  if (e === void 0) throw new Error('useColorMode must be used within a ColorModeProvider')
  return e
}
var dl = { light: 'chakra-ui-light', dark: 'chakra-ui-dark' }
function MA(e = {}) {
  const { preventTransition: t = !0 } = e,
    r = {
      setDataset: n => {
        const o = t ? r.preventTransition() : void 0
        ;(document.documentElement.dataset.theme = n),
          (document.documentElement.style.colorScheme = n),
          o == null || o()
      },
      setClassName(n) {
        document.body.classList.add(n ? dl.dark : dl.light),
          document.body.classList.remove(n ? dl.light : dl.dark)
      },
      query() {
        return window.matchMedia('(prefers-color-scheme: dark)')
      },
      getSystemTheme(n) {
        var o
        return ((o = r.query().matches) != null ? o : n === 'dark') ? 'dark' : 'light'
      },
      addListener(n) {
        const o = r.query(),
          i = a => {
            n(a.matches ? 'dark' : 'light')
          }
        return (
          typeof o.addListener == 'function' ? o.addListener(i) : o.addEventListener('change', i),
          () => {
            typeof o.removeListener == 'function'
              ? o.removeListener(i)
              : o.removeEventListener('change', i)
          }
        )
      },
      preventTransition() {
        const n = document.createElement('style')
        return (
          n.appendChild(
            document.createTextNode(
              '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
            )
          ),
          document.head.appendChild(n),
          () => {
            window.getComputedStyle(document.body),
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  document.head.removeChild(n)
                })
              })
          }
        )
      },
    }
  return r
}
var OA = 'chakra-ui-color-mode'
function IA(e) {
  return {
    ssr: !1,
    type: 'localStorage',
    get(t) {
      if (!(globalThis != null && globalThis.document)) return t
      let r
      try {
        r = localStorage.getItem(e) || t
      } catch {}
      return r || t
    },
    set(t) {
      try {
        localStorage.setItem(e, t)
      } catch {}
    },
  }
}
var FA = IA(OA),
  _0 = () => {}
function P0(e, t) {
  return e.type === 'cookie' && e.ssr ? e.get(t) : t
}
function Hx(e) {
  const {
      value: t,
      children: r,
      options: { useSystemColorMode: n, initialColorMode: o, disableTransitionOnChange: i } = {},
      colorModeManager: a = FA,
    } = e,
    s = o === 'dark' ? 'dark' : 'light',
    [l, u] = y.useState(() => P0(a, s)),
    [c, d] = y.useState(() => P0(a)),
    {
      getSystemTheme: f,
      setClassName: h,
      setDataset: m,
      addListener: p,
    } = y.useMemo(() => MA({ preventTransition: i }), [i]),
    S = o === 'system' && !l ? c : l,
    g = y.useCallback(
      k => {
        const C = k === 'system' ? f() : k
        u(C), h(C === 'dark'), m(C), a.set(C)
      },
      [a, f, h, m]
    )
  ts(() => {
    o === 'system' && d(f())
  }, []),
    y.useEffect(() => {
      const k = a.get()
      if (k) {
        g(k)
        return
      }
      if (o === 'system') {
        g('system')
        return
      }
      g(s)
    }, [a, s, o, g])
  const v = y.useCallback(() => {
    g(S === 'dark' ? 'light' : 'dark')
  }, [S, g])
  y.useEffect(() => {
    if (n) return p(g)
  }, [n, p, g])
  const b = y.useMemo(
    () => ({
      colorMode: t ?? S,
      toggleColorMode: t ? _0 : v,
      setColorMode: t ? _0 : g,
      forced: t !== void 0,
    }),
    [S, v, g, t]
  )
  return x.jsx(Om.Provider, { value: b, children: r })
}
Hx.displayName = 'ColorModeProvider'
function DA() {
  const e = Im(),
    t = Ux()
  return { ...e, theme: t }
}
function NA(e, t, r) {
  var n, o
  if (t == null) return t
  const i = a => {
    var s, l
    return (l = (s = e.__breakpoints) == null ? void 0 : s.asArray) == null ? void 0 : l[a]
  }
  return (o = (n = i(t)) != null ? n : i(r)) != null ? o : r
}
function zA(e, t, r) {
  var n, o
  if (t == null) return t
  const i = a => {
    var s, l
    return (l = (s = e.__cssMap) == null ? void 0 : s[a]) == null ? void 0 : l.value
  }
  return (o = (n = i(t)) != null ? n : i(r)) != null ? o : r
}
function LA(e, t, r) {
  const n = Ux()
  return BA(e, t, r)(n)
}
function BA(e, t, r) {
  const n = Array.isArray(t) ? t : [t],
    o = Array.isArray(r) ? r : [r]
  return i => {
    const a = o.filter(Boolean),
      s = n.map((l, u) => {
        var c, d
        if (e === 'breakpoints') return NA(i, l, (c = a[u]) != null ? c : l)
        const f = `${e}.${l}`
        return zA(i, f, (d = a[u]) != null ? d : l)
      })
    return Array.isArray(t) ? s : s[0]
  }
}
var q = (...e) => e.filter(Boolean).join(' ')
function st(e) {
  const t = typeof e
  return e != null && (t === 'object' || t === 'function') && !Array.isArray(e)
}
function cn(e, ...t) {
  return VA(e) ? e(...t) : e
}
var VA = e => typeof e == 'function',
  _e = e => (e ? '' : void 0),
  oi = e => (e ? !0 : void 0)
function Ne(...e) {
  return function (r) {
    e.some(n => (n == null || n(r), r == null ? void 0 : r.defaultPrevented))
  }
}
function WA(...e) {
  return function (r) {
    e.forEach(n => {
      n == null || n(r)
    })
  }
}
var Eu = {},
  UA = {
    get exports() {
      return Eu
    },
    set exports(e) {
      Eu = e
    },
  }
;(function (e, t) {
  var r = 200,
    n = '__lodash_hash_undefined__',
    o = 800,
    i = 16,
    a = 9007199254740991,
    s = '[object Arguments]',
    l = '[object Array]',
    u = '[object AsyncFunction]',
    c = '[object Boolean]',
    d = '[object Date]',
    f = '[object Error]',
    h = '[object Function]',
    m = '[object GeneratorFunction]',
    p = '[object Map]',
    S = '[object Number]',
    g = '[object Null]',
    v = '[object Object]',
    b = '[object Proxy]',
    k = '[object RegExp]',
    C = '[object Set]',
    R = '[object String]',
    E = '[object Undefined]',
    T = '[object WeakMap]',
    M = '[object ArrayBuffer]',
    j = '[object DataView]',
    W = '[object Float32Array]',
    he = '[object Float64Array]',
    ye = '[object Int8Array]',
    J = '[object Int16Array]',
    se = '[object Int32Array]',
    Ce = '[object Uint8Array]',
    et = '[object Uint8ClampedArray]',
    O = '[object Uint16Array]',
    L = '[object Uint32Array]',
    N = /[\\^$.*+?()[\]{}|]/g,
    V = /^\[object .+?Constructor\]$/,
    oe = /^(?:0|[1-9]\d*)$/,
    U = {}
  ;(U[W] = U[he] = U[ye] = U[J] = U[se] = U[Ce] = U[et] = U[O] = U[L] = !0),
    (U[s] =
      U[l] =
      U[M] =
      U[c] =
      U[j] =
      U[d] =
      U[f] =
      U[h] =
      U[p] =
      U[S] =
      U[v] =
      U[k] =
      U[C] =
      U[R] =
      U[T] =
        !1)
  var $e = typeof Gs == 'object' && Gs && Gs.Object === Object && Gs,
    _t = typeof self == 'object' && self && self.Object === Object && self,
    Oe = $e || _t || Function('return this')(),
    je = t && !t.nodeType && t,
    Ge = je && !0 && e && !e.nodeType && e,
    ut = Ge && Ge.exports === je,
    lr = ut && $e.process,
    ee = (function () {
      try {
        var w = Ge && Ge.require && Ge.require('util').types
        return w || (lr && lr.binding && lr.binding('util'))
      } catch {}
    })(),
    ur = ee && ee.isTypedArray
  function Ds(w, _, A) {
    switch (A.length) {
      case 0:
        return w.call(_)
      case 1:
        return w.call(_, A[0])
      case 2:
        return w.call(_, A[0], A[1])
      case 3:
        return w.call(_, A[0], A[1], A[2])
    }
    return w.apply(_, A)
  }
  function B_(w, _) {
    for (var A = -1, I = Array(w); ++A < w; ) I[A] = _(A)
    return I
  }
  function V_(w) {
    return function (_) {
      return w(_)
    }
  }
  function W_(w, _) {
    return w == null ? void 0 : w[_]
  }
  function U_(w, _) {
    return function (A) {
      return w(_(A))
    }
  }
  var H_ = Array.prototype,
    G_ = Function.prototype,
    Ns = Object.prototype,
    id = Oe['__core-js_shared__'],
    zs = G_.toString,
    Tr = Ns.hasOwnProperty,
    Wv = (function () {
      var w = /[^.]+$/.exec((id && id.keys && id.keys.IE_PROTO) || '')
      return w ? 'Symbol(src)_1.' + w : ''
    })(),
    Uv = Ns.toString,
    K_ = zs.call(Object),
    q_ = RegExp(
      '^' +
        zs
          .call(Tr)
          .replace(N, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
    ),
    Ls = ut ? Oe.Buffer : void 0,
    Hv = Oe.Symbol,
    Gv = Oe.Uint8Array,
    Kv = Ls ? Ls.allocUnsafe : void 0,
    qv = U_(Object.getPrototypeOf, Object),
    Yv = Object.create,
    Y_ = Ns.propertyIsEnumerable,
    X_ = H_.splice,
    Dn = Hv ? Hv.toStringTag : void 0,
    Bs = (function () {
      try {
        var w = ld(Object, 'defineProperty')
        return w({}, '', {}), w
      } catch {}
    })(),
    Q_ = Ls ? Ls.isBuffer : void 0,
    Xv = Math.max,
    Z_ = Date.now,
    Qv = ld(Oe, 'Map'),
    Li = ld(Object, 'create'),
    J_ = (function () {
      function w() {}
      return function (_) {
        if (!zn(_)) return {}
        if (Yv) return Yv(_)
        w.prototype = _
        var A = new w()
        return (w.prototype = void 0), A
      }
    })()
  function Nn(w) {
    var _ = -1,
      A = w == null ? 0 : w.length
    for (this.clear(); ++_ < A; ) {
      var I = w[_]
      this.set(I[0], I[1])
    }
  }
  function eP() {
    ;(this.__data__ = Li ? Li(null) : {}), (this.size = 0)
  }
  function tP(w) {
    var _ = this.has(w) && delete this.__data__[w]
    return (this.size -= _ ? 1 : 0), _
  }
  function rP(w) {
    var _ = this.__data__
    if (Li) {
      var A = _[w]
      return A === n ? void 0 : A
    }
    return Tr.call(_, w) ? _[w] : void 0
  }
  function nP(w) {
    var _ = this.__data__
    return Li ? _[w] !== void 0 : Tr.call(_, w)
  }
  function oP(w, _) {
    var A = this.__data__
    return (this.size += this.has(w) ? 0 : 1), (A[w] = Li && _ === void 0 ? n : _), this
  }
  ;(Nn.prototype.clear = eP),
    (Nn.prototype.delete = tP),
    (Nn.prototype.get = rP),
    (Nn.prototype.has = nP),
    (Nn.prototype.set = oP)
  function Ar(w) {
    var _ = -1,
      A = w == null ? 0 : w.length
    for (this.clear(); ++_ < A; ) {
      var I = w[_]
      this.set(I[0], I[1])
    }
  }
  function iP() {
    ;(this.__data__ = []), (this.size = 0)
  }
  function aP(w) {
    var _ = this.__data__,
      A = Vs(_, w)
    if (A < 0) return !1
    var I = _.length - 1
    return A == I ? _.pop() : X_.call(_, A, 1), --this.size, !0
  }
  function sP(w) {
    var _ = this.__data__,
      A = Vs(_, w)
    return A < 0 ? void 0 : _[A][1]
  }
  function lP(w) {
    return Vs(this.__data__, w) > -1
  }
  function uP(w, _) {
    var A = this.__data__,
      I = Vs(A, w)
    return I < 0 ? (++this.size, A.push([w, _])) : (A[I][1] = _), this
  }
  ;(Ar.prototype.clear = iP),
    (Ar.prototype.delete = aP),
    (Ar.prototype.get = sP),
    (Ar.prototype.has = lP),
    (Ar.prototype.set = uP)
  function _o(w) {
    var _ = -1,
      A = w == null ? 0 : w.length
    for (this.clear(); ++_ < A; ) {
      var I = w[_]
      this.set(I[0], I[1])
    }
  }
  function cP() {
    ;(this.size = 0), (this.__data__ = { hash: new Nn(), map: new (Qv || Ar)(), string: new Nn() })
  }
  function dP(w) {
    var _ = Us(this, w).delete(w)
    return (this.size -= _ ? 1 : 0), _
  }
  function fP(w) {
    return Us(this, w).get(w)
  }
  function hP(w) {
    return Us(this, w).has(w)
  }
  function pP(w, _) {
    var A = Us(this, w),
      I = A.size
    return A.set(w, _), (this.size += A.size == I ? 0 : 1), this
  }
  ;(_o.prototype.clear = cP),
    (_o.prototype.delete = dP),
    (_o.prototype.get = fP),
    (_o.prototype.has = hP),
    (_o.prototype.set = pP)
  function Po(w) {
    var _ = (this.__data__ = new Ar(w))
    this.size = _.size
  }
  function mP() {
    ;(this.__data__ = new Ar()), (this.size = 0)
  }
  function vP(w) {
    var _ = this.__data__,
      A = _.delete(w)
    return (this.size = _.size), A
  }
  function gP(w) {
    return this.__data__.get(w)
  }
  function yP(w) {
    return this.__data__.has(w)
  }
  function bP(w, _) {
    var A = this.__data__
    if (A instanceof Ar) {
      var I = A.__data__
      if (!Qv || I.length < r - 1) return I.push([w, _]), (this.size = ++A.size), this
      A = this.__data__ = new _o(I)
    }
    return A.set(w, _), (this.size = A.size), this
  }
  ;(Po.prototype.clear = mP),
    (Po.prototype.delete = vP),
    (Po.prototype.get = gP),
    (Po.prototype.has = yP),
    (Po.prototype.set = bP)
  function SP(w, _) {
    var A = dd(w),
      I = !A && cd(w),
      Y = !A && !I && rg(w),
      de = !A && !I && !Y && og(w),
      be = A || I || Y || de,
      K = be ? B_(w.length, String) : [],
      Se = K.length
    for (var Nt in w)
      (_ || Tr.call(w, Nt)) &&
        !(
          be &&
          (Nt == 'length' ||
            (Y && (Nt == 'offset' || Nt == 'parent')) ||
            (de && (Nt == 'buffer' || Nt == 'byteLength' || Nt == 'byteOffset')) ||
            eg(Nt, Se))
        ) &&
        K.push(Nt)
    return K
  }
  function ad(w, _, A) {
    ;((A !== void 0 && !Hs(w[_], A)) || (A === void 0 && !(_ in w))) && sd(w, _, A)
  }
  function xP(w, _, A) {
    var I = w[_]
    ;(!(Tr.call(w, _) && Hs(I, A)) || (A === void 0 && !(_ in w))) && sd(w, _, A)
  }
  function Vs(w, _) {
    for (var A = w.length; A--; ) if (Hs(w[A][0], _)) return A
    return -1
  }
  function sd(w, _, A) {
    _ == '__proto__' && Bs
      ? Bs(w, _, { configurable: !0, enumerable: !0, value: A, writable: !0 })
      : (w[_] = A)
  }
  var wP = IP()
  function Ws(w) {
    return w == null ? (w === void 0 ? E : g) : Dn && Dn in Object(w) ? FP(w) : VP(w)
  }
  function Zv(w) {
    return Bi(w) && Ws(w) == s
  }
  function kP(w) {
    if (!zn(w) || LP(w)) return !1
    var _ = hd(w) ? q_ : V
    return _.test(GP(w))
  }
  function CP(w) {
    return Bi(w) && ng(w.length) && !!U[Ws(w)]
  }
  function _P(w) {
    if (!zn(w)) return BP(w)
    var _ = tg(w),
      A = []
    for (var I in w) (I == 'constructor' && (_ || !Tr.call(w, I))) || A.push(I)
    return A
  }
  function Jv(w, _, A, I, Y) {
    w !== _ &&
      wP(
        _,
        function (de, be) {
          if ((Y || (Y = new Po()), zn(de))) PP(w, _, be, A, Jv, I, Y)
          else {
            var K = I ? I(ud(w, be), de, be + '', w, _, Y) : void 0
            K === void 0 && (K = de), ad(w, be, K)
          }
        },
        ig
      )
  }
  function PP(w, _, A, I, Y, de, be) {
    var K = ud(w, A),
      Se = ud(_, A),
      Nt = be.get(Se)
    if (Nt) {
      ad(w, A, Nt)
      return
    }
    var Pt = de ? de(K, Se, A + '', w, _, be) : void 0,
      Vi = Pt === void 0
    if (Vi) {
      var pd = dd(Se),
        md = !pd && rg(Se),
        sg = !pd && !md && og(Se)
      ;(Pt = Se),
        pd || md || sg
          ? dd(K)
            ? (Pt = K)
            : KP(K)
            ? (Pt = jP(K))
            : md
            ? ((Vi = !1), (Pt = AP(Se, !0)))
            : sg
            ? ((Vi = !1), (Pt = $P(Se, !0)))
            : (Pt = [])
          : qP(Se) || cd(Se)
          ? ((Pt = K), cd(K) ? (Pt = YP(K)) : (!zn(K) || hd(K)) && (Pt = DP(Se)))
          : (Vi = !1)
    }
    Vi && (be.set(Se, Pt), Y(Pt, Se, I, de, be), be.delete(Se)), ad(w, A, Pt)
  }
  function EP(w, _) {
    return UP(WP(w, _, ag), w + '')
  }
  var TP = Bs
    ? function (w, _) {
        return Bs(w, 'toString', { configurable: !0, enumerable: !1, value: QP(_), writable: !0 })
      }
    : ag
  function AP(w, _) {
    if (_) return w.slice()
    var A = w.length,
      I = Kv ? Kv(A) : new w.constructor(A)
    return w.copy(I), I
  }
  function RP(w) {
    var _ = new w.constructor(w.byteLength)
    return new Gv(_).set(new Gv(w)), _
  }
  function $P(w, _) {
    var A = _ ? RP(w.buffer) : w.buffer
    return new w.constructor(A, w.byteOffset, w.length)
  }
  function jP(w, _) {
    var A = -1,
      I = w.length
    for (_ || (_ = Array(I)); ++A < I; ) _[A] = w[A]
    return _
  }
  function MP(w, _, A, I) {
    var Y = !A
    A || (A = {})
    for (var de = -1, be = _.length; ++de < be; ) {
      var K = _[de],
        Se = I ? I(A[K], w[K], K, A, w) : void 0
      Se === void 0 && (Se = w[K]), Y ? sd(A, K, Se) : xP(A, K, Se)
    }
    return A
  }
  function OP(w) {
    return EP(function (_, A) {
      var I = -1,
        Y = A.length,
        de = Y > 1 ? A[Y - 1] : void 0,
        be = Y > 2 ? A[2] : void 0
      for (
        de = w.length > 3 && typeof de == 'function' ? (Y--, de) : void 0,
          be && NP(A[0], A[1], be) && ((de = Y < 3 ? void 0 : de), (Y = 1)),
          _ = Object(_);
        ++I < Y;

      ) {
        var K = A[I]
        K && w(_, K, I, de)
      }
      return _
    })
  }
  function IP(w) {
    return function (_, A, I) {
      for (var Y = -1, de = Object(_), be = I(_), K = be.length; K--; ) {
        var Se = be[w ? K : ++Y]
        if (A(de[Se], Se, de) === !1) break
      }
      return _
    }
  }
  function Us(w, _) {
    var A = w.__data__
    return zP(_) ? A[typeof _ == 'string' ? 'string' : 'hash'] : A.map
  }
  function ld(w, _) {
    var A = W_(w, _)
    return kP(A) ? A : void 0
  }
  function FP(w) {
    var _ = Tr.call(w, Dn),
      A = w[Dn]
    try {
      w[Dn] = void 0
      var I = !0
    } catch {}
    var Y = Uv.call(w)
    return I && (_ ? (w[Dn] = A) : delete w[Dn]), Y
  }
  function DP(w) {
    return typeof w.constructor == 'function' && !tg(w) ? J_(qv(w)) : {}
  }
  function eg(w, _) {
    var A = typeof w
    return (
      (_ = _ ?? a),
      !!_ && (A == 'number' || (A != 'symbol' && oe.test(w))) && w > -1 && w % 1 == 0 && w < _
    )
  }
  function NP(w, _, A) {
    if (!zn(A)) return !1
    var I = typeof _
    return (I == 'number' ? fd(A) && eg(_, A.length) : I == 'string' && _ in A) ? Hs(A[_], w) : !1
  }
  function zP(w) {
    var _ = typeof w
    return _ == 'string' || _ == 'number' || _ == 'symbol' || _ == 'boolean'
      ? w !== '__proto__'
      : w === null
  }
  function LP(w) {
    return !!Wv && Wv in w
  }
  function tg(w) {
    var _ = w && w.constructor,
      A = (typeof _ == 'function' && _.prototype) || Ns
    return w === A
  }
  function BP(w) {
    var _ = []
    if (w != null) for (var A in Object(w)) _.push(A)
    return _
  }
  function VP(w) {
    return Uv.call(w)
  }
  function WP(w, _, A) {
    return (
      (_ = Xv(_ === void 0 ? w.length - 1 : _, 0)),
      function () {
        for (var I = arguments, Y = -1, de = Xv(I.length - _, 0), be = Array(de); ++Y < de; )
          be[Y] = I[_ + Y]
        Y = -1
        for (var K = Array(_ + 1); ++Y < _; ) K[Y] = I[Y]
        return (K[_] = A(be)), Ds(w, this, K)
      }
    )
  }
  function ud(w, _) {
    if (!(_ === 'constructor' && typeof w[_] == 'function') && _ != '__proto__') return w[_]
  }
  var UP = HP(TP)
  function HP(w) {
    var _ = 0,
      A = 0
    return function () {
      var I = Z_(),
        Y = i - (I - A)
      if (((A = I), Y > 0)) {
        if (++_ >= o) return arguments[0]
      } else _ = 0
      return w.apply(void 0, arguments)
    }
  }
  function GP(w) {
    if (w != null) {
      try {
        return zs.call(w)
      } catch {}
      try {
        return w + ''
      } catch {}
    }
    return ''
  }
  function Hs(w, _) {
    return w === _ || (w !== w && _ !== _)
  }
  var cd = Zv(
      (function () {
        return arguments
      })()
    )
      ? Zv
      : function (w) {
          return Bi(w) && Tr.call(w, 'callee') && !Y_.call(w, 'callee')
        },
    dd = Array.isArray
  function fd(w) {
    return w != null && ng(w.length) && !hd(w)
  }
  function KP(w) {
    return Bi(w) && fd(w)
  }
  var rg = Q_ || ZP
  function hd(w) {
    if (!zn(w)) return !1
    var _ = Ws(w)
    return _ == h || _ == m || _ == u || _ == b
  }
  function ng(w) {
    return typeof w == 'number' && w > -1 && w % 1 == 0 && w <= a
  }
  function zn(w) {
    var _ = typeof w
    return w != null && (_ == 'object' || _ == 'function')
  }
  function Bi(w) {
    return w != null && typeof w == 'object'
  }
  function qP(w) {
    if (!Bi(w) || Ws(w) != v) return !1
    var _ = qv(w)
    if (_ === null) return !0
    var A = Tr.call(_, 'constructor') && _.constructor
    return typeof A == 'function' && A instanceof A && zs.call(A) == K_
  }
  var og = ur ? V_(ur) : CP
  function YP(w) {
    return MP(w, ig(w))
  }
  function ig(w) {
    return fd(w) ? SP(w, !0) : _P(w)
  }
  var XP = OP(function (w, _, A, I) {
    Jv(w, _, A, I)
  })
  function QP(w) {
    return function () {
      return w
    }
  }
  function ag(w) {
    return w
  }
  function ZP() {
    return !1
  }
  e.exports = XP
})(UA, Eu)
const Ut = Eu
var HA = e => /!(important)?$/.test(e),
  E0 = e => (typeof e == 'string' ? e.replace(/!(important)?$/, '').trim() : e),
  GA = (e, t) => r => {
    const n = String(t),
      o = HA(n),
      i = E0(n),
      a = e ? `${e}.${i}` : i
    let s = st(r.__cssMap) && a in r.__cssMap ? r.__cssMap[a].varRef : t
    return (s = E0(s)), o ? `${s} !important` : s
  }
function Fm(e) {
  const { scale: t, transform: r, compose: n } = e
  return (i, a) => {
    var s
    const l = GA(t, i)(a)
    let u = (s = r == null ? void 0 : r(l, a)) != null ? s : l
    return n && (u = n(u, a)), u
  }
}
var fl =
  (...e) =>
  t =>
    e.reduce((r, n) => n(r), t)
function Qt(e, t) {
  return r => {
    const n = { property: r, scale: e }
    return (n.transform = Fm({ scale: e, transform: t })), n
  }
}
var KA =
  ({ rtl: e, ltr: t }) =>
  r =>
    r.direction === 'rtl' ? e : t
function qA(e) {
  const { property: t, scale: r, transform: n } = e
  return { scale: r, property: KA(t), transform: r ? Fm({ scale: r, compose: n }) : n }
}
var Gx = [
  'rotate(var(--chakra-rotate, 0))',
  'scaleX(var(--chakra-scale-x, 1))',
  'scaleY(var(--chakra-scale-y, 1))',
  'skewX(var(--chakra-skew-x, 0))',
  'skewY(var(--chakra-skew-y, 0))',
]
function YA() {
  return [
    'translateX(var(--chakra-translate-x, 0))',
    'translateY(var(--chakra-translate-y, 0))',
    ...Gx,
  ].join(' ')
}
function XA() {
  return ['translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)', ...Gx].join(
    ' '
  )
}
var QA = {
    '--chakra-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-drop-shadow': 'var(--chakra-empty,/*!*/ /*!*/)',
    filter: [
      'var(--chakra-blur)',
      'var(--chakra-brightness)',
      'var(--chakra-contrast)',
      'var(--chakra-grayscale)',
      'var(--chakra-hue-rotate)',
      'var(--chakra-invert)',
      'var(--chakra-saturate)',
      'var(--chakra-sepia)',
      'var(--chakra-drop-shadow)',
    ].join(' '),
  },
  ZA = {
    backdropFilter: [
      'var(--chakra-backdrop-blur)',
      'var(--chakra-backdrop-brightness)',
      'var(--chakra-backdrop-contrast)',
      'var(--chakra-backdrop-grayscale)',
      'var(--chakra-backdrop-hue-rotate)',
      'var(--chakra-backdrop-invert)',
      'var(--chakra-backdrop-opacity)',
      'var(--chakra-backdrop-saturate)',
      'var(--chakra-backdrop-sepia)',
    ].join(' '),
    '--chakra-backdrop-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-opacity': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
  }
function JA(e) {
  return {
    '--chakra-ring-offset-shadow':
      'var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)',
    '--chakra-ring-shadow':
      'var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)',
    '--chakra-ring-width': e,
    boxShadow: [
      'var(--chakra-ring-offset-shadow)',
      'var(--chakra-ring-shadow)',
      'var(--chakra-shadow, 0 0 #0000)',
    ].join(', '),
  }
}
var eR = {
    'row-reverse': { space: '--chakra-space-x-reverse', divide: '--chakra-divide-x-reverse' },
    'column-reverse': { space: '--chakra-space-y-reverse', divide: '--chakra-divide-y-reverse' },
  },
  Mh = {
    'to-t': 'to top',
    'to-tr': 'to top right',
    'to-r': 'to right',
    'to-br': 'to bottom right',
    'to-b': 'to bottom',
    'to-bl': 'to bottom left',
    'to-l': 'to left',
    'to-tl': 'to top left',
  },
  tR = new Set(Object.values(Mh)),
  Kx = new Set(['none', '-moz-initial', 'inherit', 'initial', 'revert', 'unset']),
  rR = e => e.trim()
function nR(e, t) {
  if (e == null || Kx.has(e)) return e
  const n = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
    o = n == null ? void 0 : n[1],
    i = n == null ? void 0 : n[2]
  if (!o || !i) return e
  const a = o.includes('-gradient') ? o : `${o}-gradient`,
    [s, ...l] = i.split(',').map(rR).filter(Boolean)
  if ((l == null ? void 0 : l.length) === 0) return e
  const u = s in Mh ? Mh[s] : s
  l.unshift(u)
  const c = l.map(d => {
    if (tR.has(d)) return d
    const f = d.indexOf(' '),
      [h, m] = f !== -1 ? [d.substr(0, f), d.substr(f + 1)] : [d],
      p = qx(m) ? m : m && m.split(' '),
      S = `colors.${h}`,
      g = S in t.__cssMap ? t.__cssMap[S].varRef : h
    return p ? [g, ...(Array.isArray(p) ? p : [p])].join(' ') : g
  })
  return `${a}(${c.join(', ')})`
}
var qx = e => typeof e == 'string' && e.includes('(') && e.includes(')'),
  oR = (e, t) => nR(e, t ?? {})
function iR(e) {
  return /^var\(--.+\)$/.test(e)
}
var aR = e => {
    const t = parseFloat(e.toString()),
      r = e.toString().replace(String(t), '')
    return { unitless: !r, value: t, unit: r }
  },
  dr = e => t => `${e}(${t})`,
  Q = {
    filter(e) {
      return e !== 'auto' ? e : QA
    },
    backdropFilter(e) {
      return e !== 'auto' ? e : ZA
    },
    ring(e) {
      return JA(Q.px(e))
    },
    bgClip(e) {
      return e === 'text' ? { color: 'transparent', backgroundClip: 'text' } : { backgroundClip: e }
    },
    transform(e) {
      return e === 'auto' ? YA() : e === 'auto-gpu' ? XA() : e
    },
    vh(e) {
      return e === '$100vh' ? 'var(--chakra-vh)' : e
    },
    px(e) {
      if (e == null) return e
      const { unitless: t } = aR(e)
      return t || typeof e == 'number' ? `${e}px` : e
    },
    fraction(e) {
      return typeof e != 'number' || e > 1 ? e : `${e * 100}%`
    },
    float(e, t) {
      const r = { left: 'right', right: 'left' }
      return t.direction === 'rtl' ? r[e] : e
    },
    degree(e) {
      if (iR(e) || e == null) return e
      const t = typeof e == 'string' && !e.endsWith('deg')
      return typeof e == 'number' || t ? `${e}deg` : e
    },
    gradient: oR,
    blur: dr('blur'),
    opacity: dr('opacity'),
    brightness: dr('brightness'),
    contrast: dr('contrast'),
    dropShadow: dr('drop-shadow'),
    grayscale: dr('grayscale'),
    hueRotate: dr('hue-rotate'),
    invert: dr('invert'),
    saturate: dr('saturate'),
    sepia: dr('sepia'),
    bgImage(e) {
      return e == null || qx(e) || Kx.has(e) ? e : `url(${e})`
    },
    outline(e) {
      const t = String(e) === '0' || String(e) === 'none'
      return e !== null && t
        ? { outline: '2px solid transparent', outlineOffset: '2px' }
        : { outline: e }
    },
    flexDirection(e) {
      var t
      const { space: r, divide: n } = (t = eR[e]) != null ? t : {},
        o = { flexDirection: e }
      return r && (o[r] = 1), n && (o[n] = 1), o
    },
  },
  P = {
    borderWidths: Qt('borderWidths'),
    borderStyles: Qt('borderStyles'),
    colors: Qt('colors'),
    borders: Qt('borders'),
    radii: Qt('radii', Q.px),
    space: Qt('space', fl(Q.vh, Q.px)),
    spaceT: Qt('space', fl(Q.vh, Q.px)),
    degreeT(e) {
      return { property: e, transform: Q.degree }
    },
    prop(e, t, r) {
      return { property: e, scale: t, ...(t && { transform: Fm({ scale: t, transform: r }) }) }
    },
    propT(e, t) {
      return { property: e, transform: t }
    },
    sizes: Qt('sizes', fl(Q.vh, Q.px)),
    sizesT: Qt('sizes', fl(Q.vh, Q.fraction)),
    shadows: Qt('shadows'),
    logical: qA,
    blur: Qt('blur', Q.blur),
  },
  Bl = {
    background: P.colors('background'),
    backgroundColor: P.colors('backgroundColor'),
    backgroundImage: P.propT('backgroundImage', Q.bgImage),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: Q.bgClip },
    bgSize: P.prop('backgroundSize'),
    bgPosition: P.prop('backgroundPosition'),
    bg: P.colors('background'),
    bgColor: P.colors('backgroundColor'),
    bgPos: P.prop('backgroundPosition'),
    bgRepeat: P.prop('backgroundRepeat'),
    bgAttachment: P.prop('backgroundAttachment'),
    bgGradient: P.propT('backgroundImage', Q.gradient),
    bgClip: { transform: Q.bgClip },
  }
Object.assign(Bl, { bgImage: Bl.backgroundImage, bgImg: Bl.backgroundImage })
var te = {
  border: P.borders('border'),
  borderWidth: P.borderWidths('borderWidth'),
  borderStyle: P.borderStyles('borderStyle'),
  borderColor: P.colors('borderColor'),
  borderRadius: P.radii('borderRadius'),
  borderTop: P.borders('borderTop'),
  borderBlockStart: P.borders('borderBlockStart'),
  borderTopLeftRadius: P.radii('borderTopLeftRadius'),
  borderStartStartRadius: P.logical({
    scale: 'radii',
    property: { ltr: 'borderTopLeftRadius', rtl: 'borderTopRightRadius' },
  }),
  borderEndStartRadius: P.logical({
    scale: 'radii',
    property: { ltr: 'borderBottomLeftRadius', rtl: 'borderBottomRightRadius' },
  }),
  borderTopRightRadius: P.radii('borderTopRightRadius'),
  borderStartEndRadius: P.logical({
    scale: 'radii',
    property: { ltr: 'borderTopRightRadius', rtl: 'borderTopLeftRadius' },
  }),
  borderEndEndRadius: P.logical({
    scale: 'radii',
    property: { ltr: 'borderBottomRightRadius', rtl: 'borderBottomLeftRadius' },
  }),
  borderRight: P.borders('borderRight'),
  borderInlineEnd: P.borders('borderInlineEnd'),
  borderBottom: P.borders('borderBottom'),
  borderBlockEnd: P.borders('borderBlockEnd'),
  borderBottomLeftRadius: P.radii('borderBottomLeftRadius'),
  borderBottomRightRadius: P.radii('borderBottomRightRadius'),
  borderLeft: P.borders('borderLeft'),
  borderInlineStart: { property: 'borderInlineStart', scale: 'borders' },
  borderInlineStartRadius: P.logical({
    scale: 'radii',
    property: {
      ltr: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
      rtl: ['borderTopRightRadius', 'borderBottomRightRadius'],
    },
  }),
  borderInlineEndRadius: P.logical({
    scale: 'radii',
    property: {
      ltr: ['borderTopRightRadius', 'borderBottomRightRadius'],
      rtl: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    },
  }),
  borderX: P.borders(['borderLeft', 'borderRight']),
  borderInline: P.borders('borderInline'),
  borderY: P.borders(['borderTop', 'borderBottom']),
  borderBlock: P.borders('borderBlock'),
  borderTopWidth: P.borderWidths('borderTopWidth'),
  borderBlockStartWidth: P.borderWidths('borderBlockStartWidth'),
  borderTopColor: P.colors('borderTopColor'),
  borderBlockStartColor: P.colors('borderBlockStartColor'),
  borderTopStyle: P.borderStyles('borderTopStyle'),
  borderBlockStartStyle: P.borderStyles('borderBlockStartStyle'),
  borderBottomWidth: P.borderWidths('borderBottomWidth'),
  borderBlockEndWidth: P.borderWidths('borderBlockEndWidth'),
  borderBottomColor: P.colors('borderBottomColor'),
  borderBlockEndColor: P.colors('borderBlockEndColor'),
  borderBottomStyle: P.borderStyles('borderBottomStyle'),
  borderBlockEndStyle: P.borderStyles('borderBlockEndStyle'),
  borderLeftWidth: P.borderWidths('borderLeftWidth'),
  borderInlineStartWidth: P.borderWidths('borderInlineStartWidth'),
  borderLeftColor: P.colors('borderLeftColor'),
  borderInlineStartColor: P.colors('borderInlineStartColor'),
  borderLeftStyle: P.borderStyles('borderLeftStyle'),
  borderInlineStartStyle: P.borderStyles('borderInlineStartStyle'),
  borderRightWidth: P.borderWidths('borderRightWidth'),
  borderInlineEndWidth: P.borderWidths('borderInlineEndWidth'),
  borderRightColor: P.colors('borderRightColor'),
  borderInlineEndColor: P.colors('borderInlineEndColor'),
  borderRightStyle: P.borderStyles('borderRightStyle'),
  borderInlineEndStyle: P.borderStyles('borderInlineEndStyle'),
  borderTopRadius: P.radii(['borderTopLeftRadius', 'borderTopRightRadius']),
  borderBottomRadius: P.radii(['borderBottomLeftRadius', 'borderBottomRightRadius']),
  borderLeftRadius: P.radii(['borderTopLeftRadius', 'borderBottomLeftRadius']),
  borderRightRadius: P.radii(['borderTopRightRadius', 'borderBottomRightRadius']),
}
Object.assign(te, {
  rounded: te.borderRadius,
  roundedTop: te.borderTopRadius,
  roundedTopLeft: te.borderTopLeftRadius,
  roundedTopRight: te.borderTopRightRadius,
  roundedTopStart: te.borderStartStartRadius,
  roundedTopEnd: te.borderStartEndRadius,
  roundedBottom: te.borderBottomRadius,
  roundedBottomLeft: te.borderBottomLeftRadius,
  roundedBottomRight: te.borderBottomRightRadius,
  roundedBottomStart: te.borderEndStartRadius,
  roundedBottomEnd: te.borderEndEndRadius,
  roundedLeft: te.borderLeftRadius,
  roundedRight: te.borderRightRadius,
  roundedStart: te.borderInlineStartRadius,
  roundedEnd: te.borderInlineEndRadius,
  borderStart: te.borderInlineStart,
  borderEnd: te.borderInlineEnd,
  borderTopStartRadius: te.borderStartStartRadius,
  borderTopEndRadius: te.borderStartEndRadius,
  borderBottomStartRadius: te.borderEndStartRadius,
  borderBottomEndRadius: te.borderEndEndRadius,
  borderStartRadius: te.borderInlineStartRadius,
  borderEndRadius: te.borderInlineEndRadius,
  borderStartWidth: te.borderInlineStartWidth,
  borderEndWidth: te.borderInlineEndWidth,
  borderStartColor: te.borderInlineStartColor,
  borderEndColor: te.borderInlineEndColor,
  borderStartStyle: te.borderInlineStartStyle,
  borderEndStyle: te.borderInlineEndStyle,
})
var sR = {
    color: P.colors('color'),
    textColor: P.colors('color'),
    fill: P.colors('fill'),
    stroke: P.colors('stroke'),
  },
  Oh = {
    boxShadow: P.shadows('boxShadow'),
    mixBlendMode: !0,
    blendMode: P.prop('mixBlendMode'),
    backgroundBlendMode: !0,
    bgBlendMode: P.prop('backgroundBlendMode'),
    opacity: !0,
  }
Object.assign(Oh, { shadow: Oh.boxShadow })
var lR = {
    filter: { transform: Q.filter },
    blur: P.blur('--chakra-blur'),
    brightness: P.propT('--chakra-brightness', Q.brightness),
    contrast: P.propT('--chakra-contrast', Q.contrast),
    hueRotate: P.degreeT('--chakra-hue-rotate'),
    invert: P.propT('--chakra-invert', Q.invert),
    saturate: P.propT('--chakra-saturate', Q.saturate),
    dropShadow: P.propT('--chakra-drop-shadow', Q.dropShadow),
    backdropFilter: { transform: Q.backdropFilter },
    backdropBlur: P.blur('--chakra-backdrop-blur'),
    backdropBrightness: P.propT('--chakra-backdrop-brightness', Q.brightness),
    backdropContrast: P.propT('--chakra-backdrop-contrast', Q.contrast),
    backdropHueRotate: P.degreeT('--chakra-backdrop-hue-rotate'),
    backdropInvert: P.propT('--chakra-backdrop-invert', Q.invert),
    backdropSaturate: P.propT('--chakra-backdrop-saturate', Q.saturate),
  },
  Tu = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: Q.flexDirection },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: P.sizes('flexBasis'),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
    gap: P.space('gap'),
    rowGap: P.space('rowGap'),
    columnGap: P.space('columnGap'),
  }
Object.assign(Tu, { flexDir: Tu.flexDirection })
var Yx = {
    gridGap: P.space('gridGap'),
    gridColumnGap: P.space('gridColumnGap'),
    gridRowGap: P.space('gridRowGap'),
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridColumnStart: !0,
    gridColumnEnd: !0,
    gridRowStart: !0,
    gridRowEnd: !0,
    gridAutoRows: !0,
    gridTemplate: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  },
  uR = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: Q.outline },
    outlineOffset: !0,
    outlineColor: P.colors('outlineColor'),
  },
  Lt = {
    width: P.sizesT('width'),
    inlineSize: P.sizesT('inlineSize'),
    height: P.sizes('height'),
    blockSize: P.sizes('blockSize'),
    boxSize: P.sizes(['width', 'height']),
    minWidth: P.sizes('minWidth'),
    minInlineSize: P.sizes('minInlineSize'),
    minHeight: P.sizes('minHeight'),
    minBlockSize: P.sizes('minBlockSize'),
    maxWidth: P.sizes('maxWidth'),
    maxInlineSize: P.sizes('maxInlineSize'),
    maxHeight: P.sizes('maxHeight'),
    maxBlockSize: P.sizes('maxBlockSize'),
    overflow: !0,
    overflowX: !0,
    overflowY: !0,
    overscrollBehavior: !0,
    overscrollBehaviorX: !0,
    overscrollBehaviorY: !0,
    display: !0,
    hideFrom: {
      scale: 'breakpoints',
      transform: (e, t) => {
        var r, n, o
        return {
          [(o =
            (n = (r = t.__breakpoints) == null ? void 0 : r.get(e)) == null
              ? void 0
              : n.minWQuery) != null
            ? o
            : `@media screen and (min-width: ${e})`]: { display: 'none' },
        }
      },
    },
    hideBelow: {
      scale: 'breakpoints',
      transform: (e, t) => {
        var r, n, o
        return {
          [(o =
            (n = (r = t.__breakpoints) == null ? void 0 : r.get(e)) == null
              ? void 0
              : n.maxWQuery) != null
            ? o
            : `@media screen and (max-width: ${e})`]: { display: 'none' },
        }
      },
    },
    verticalAlign: !0,
    boxSizing: !0,
    boxDecorationBreak: !0,
    float: P.propT('float', Q.float),
    objectFit: !0,
    objectPosition: !0,
    visibility: !0,
    isolation: !0,
  }
Object.assign(Lt, {
  w: Lt.width,
  h: Lt.height,
  minW: Lt.minWidth,
  maxW: Lt.maxWidth,
  minH: Lt.minHeight,
  maxH: Lt.maxHeight,
  overscroll: Lt.overscrollBehavior,
  overscrollX: Lt.overscrollBehaviorX,
  overscrollY: Lt.overscrollBehaviorY,
})
var cR = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: P.prop('listStylePosition'),
  listStyleImage: !0,
  listStyleImg: P.prop('listStyleImage'),
}
function dR(e, t, r, n) {
  const o = typeof t == 'string' ? t.split('.') : [t]
  for (n = 0; n < o.length && e; n += 1) e = e[o[n]]
  return e === void 0 ? r : e
}
var fR = e => {
    const t = new WeakMap()
    return (n, o, i, a) => {
      if (typeof n > 'u') return e(n, o, i)
      t.has(n) || t.set(n, new Map())
      const s = t.get(n)
      if (s.has(o)) return s.get(o)
      const l = e(n, o, i, a)
      return s.set(o, l), l
    }
  },
  hR = fR(dR),
  pR = {
    border: '0px',
    clip: 'rect(0, 0, 0, 0)',
    width: '1px',
    height: '1px',
    margin: '-1px',
    padding: '0px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    position: 'absolute',
  },
  mR = {
    position: 'static',
    width: 'auto',
    height: 'auto',
    clip: 'auto',
    padding: '0',
    margin: '0',
    overflow: 'visible',
    whiteSpace: 'normal',
  },
  Wd = (e, t, r) => {
    const n = {},
      o = hR(e, t, {})
    for (const i in o) (i in r && r[i] != null) || (n[i] = o[i])
    return n
  },
  vR = {
    srOnly: {
      transform(e) {
        return e === !0 ? pR : e === 'focusable' ? mR : {}
      },
    },
    layerStyle: { processResult: !0, transform: (e, t, r) => Wd(t, `layerStyles.${e}`, r) },
    textStyle: { processResult: !0, transform: (e, t, r) => Wd(t, `textStyles.${e}`, r) },
    apply: { processResult: !0, transform: (e, t, r) => Wd(t, e, r) },
  },
  xa = {
    position: !0,
    pos: P.prop('position'),
    zIndex: P.prop('zIndex', 'zIndices'),
    inset: P.spaceT('inset'),
    insetX: P.spaceT(['left', 'right']),
    insetInline: P.spaceT('insetInline'),
    insetY: P.spaceT(['top', 'bottom']),
    insetBlock: P.spaceT('insetBlock'),
    top: P.spaceT('top'),
    insetBlockStart: P.spaceT('insetBlockStart'),
    bottom: P.spaceT('bottom'),
    insetBlockEnd: P.spaceT('insetBlockEnd'),
    left: P.spaceT('left'),
    insetInlineStart: P.logical({ scale: 'space', property: { ltr: 'left', rtl: 'right' } }),
    right: P.spaceT('right'),
    insetInlineEnd: P.logical({ scale: 'space', property: { ltr: 'right', rtl: 'left' } }),
  }
Object.assign(xa, { insetStart: xa.insetInlineStart, insetEnd: xa.insetInlineEnd })
var gR = {
    ring: { transform: Q.ring },
    ringColor: P.colors('--chakra-ring-color'),
    ringOffset: P.prop('--chakra-ring-offset-width'),
    ringOffsetColor: P.colors('--chakra-ring-offset-color'),
    ringInset: P.prop('--chakra-ring-inset'),
  },
  me = {
    margin: P.spaceT('margin'),
    marginTop: P.spaceT('marginTop'),
    marginBlockStart: P.spaceT('marginBlockStart'),
    marginRight: P.spaceT('marginRight'),
    marginInlineEnd: P.spaceT('marginInlineEnd'),
    marginBottom: P.spaceT('marginBottom'),
    marginBlockEnd: P.spaceT('marginBlockEnd'),
    marginLeft: P.spaceT('marginLeft'),
    marginInlineStart: P.spaceT('marginInlineStart'),
    marginX: P.spaceT(['marginInlineStart', 'marginInlineEnd']),
    marginInline: P.spaceT('marginInline'),
    marginY: P.spaceT(['marginTop', 'marginBottom']),
    marginBlock: P.spaceT('marginBlock'),
    padding: P.space('padding'),
    paddingTop: P.space('paddingTop'),
    paddingBlockStart: P.space('paddingBlockStart'),
    paddingRight: P.space('paddingRight'),
    paddingBottom: P.space('paddingBottom'),
    paddingBlockEnd: P.space('paddingBlockEnd'),
    paddingLeft: P.space('paddingLeft'),
    paddingInlineStart: P.space('paddingInlineStart'),
    paddingInlineEnd: P.space('paddingInlineEnd'),
    paddingX: P.space(['paddingInlineStart', 'paddingInlineEnd']),
    paddingInline: P.space('paddingInline'),
    paddingY: P.space(['paddingTop', 'paddingBottom']),
    paddingBlock: P.space('paddingBlock'),
  }
Object.assign(me, {
  m: me.margin,
  mt: me.marginTop,
  mr: me.marginRight,
  me: me.marginInlineEnd,
  marginEnd: me.marginInlineEnd,
  mb: me.marginBottom,
  ml: me.marginLeft,
  ms: me.marginInlineStart,
  marginStart: me.marginInlineStart,
  mx: me.marginX,
  my: me.marginY,
  p: me.padding,
  pt: me.paddingTop,
  py: me.paddingY,
  px: me.paddingX,
  pb: me.paddingBottom,
  pl: me.paddingLeft,
  ps: me.paddingInlineStart,
  paddingStart: me.paddingInlineStart,
  pr: me.paddingRight,
  pe: me.paddingInlineEnd,
  paddingEnd: me.paddingInlineEnd,
})
var yR = {
    textDecorationColor: P.colors('textDecorationColor'),
    textDecoration: !0,
    textDecor: { property: 'textDecoration' },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: P.shadows('textShadow'),
  },
  bR = {
    clipPath: !0,
    transform: P.propT('transform', Q.transform),
    transformOrigin: !0,
    translateX: P.spaceT('--chakra-translate-x'),
    translateY: P.spaceT('--chakra-translate-y'),
    skewX: P.degreeT('--chakra-skew-x'),
    skewY: P.degreeT('--chakra-skew-y'),
    scaleX: P.prop('--chakra-scale-x'),
    scaleY: P.prop('--chakra-scale-y'),
    scale: P.prop(['--chakra-scale-x', '--chakra-scale-y']),
    rotate: P.degreeT('--chakra-rotate'),
  },
  SR = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: P.prop('transitionDuration', 'transition.duration'),
    transitionProperty: P.prop('transitionProperty', 'transition.property'),
    transitionTimingFunction: P.prop('transitionTimingFunction', 'transition.easing'),
  },
  xR = {
    fontFamily: P.prop('fontFamily', 'fonts'),
    fontSize: P.prop('fontSize', 'fontSizes', Q.px),
    fontWeight: P.prop('fontWeight', 'fontWeights'),
    lineHeight: P.prop('lineHeight', 'lineHeights'),
    letterSpacing: P.prop('letterSpacing', 'letterSpacings'),
    textAlign: !0,
    fontStyle: !0,
    textIndent: !0,
    wordBreak: !0,
    overflowWrap: !0,
    textOverflow: !0,
    textTransform: !0,
    whiteSpace: !0,
    isTruncated: {
      transform(e) {
        if (e === !0) return { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }
      },
    },
    noOfLines: {
      static: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 'var(--chakra-line-clamp)',
      },
      property: '--chakra-line-clamp',
    },
  },
  wR = {
    scrollBehavior: !0,
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollMargin: P.spaceT('scrollMargin'),
    scrollMarginTop: P.spaceT('scrollMarginTop'),
    scrollMarginBottom: P.spaceT('scrollMarginBottom'),
    scrollMarginLeft: P.spaceT('scrollMarginLeft'),
    scrollMarginRight: P.spaceT('scrollMarginRight'),
    scrollMarginX: P.spaceT(['scrollMarginLeft', 'scrollMarginRight']),
    scrollMarginY: P.spaceT(['scrollMarginTop', 'scrollMarginBottom']),
    scrollPadding: P.spaceT('scrollPadding'),
    scrollPaddingTop: P.spaceT('scrollPaddingTop'),
    scrollPaddingBottom: P.spaceT('scrollPaddingBottom'),
    scrollPaddingLeft: P.spaceT('scrollPaddingLeft'),
    scrollPaddingRight: P.spaceT('scrollPaddingRight'),
    scrollPaddingX: P.spaceT(['scrollPaddingLeft', 'scrollPaddingRight']),
    scrollPaddingY: P.spaceT(['scrollPaddingTop', 'scrollPaddingBottom']),
  }
function Xx(e) {
  return st(e) && e.reference ? e.reference : String(e)
}
var $c = (e, ...t) => t.map(Xx).join(` ${e} `).replace(/calc/g, ''),
  T0 = (...e) => `calc(${$c('+', ...e)})`,
  A0 = (...e) => `calc(${$c('-', ...e)})`,
  Ih = (...e) => `calc(${$c('*', ...e)})`,
  R0 = (...e) => `calc(${$c('/', ...e)})`,
  $0 = e => {
    const t = Xx(e)
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith('-')
        ? String(t).slice(1)
        : `-${t}`
      : Ih(t, -1)
  },
  Gn = Object.assign(
    e => ({
      add: (...t) => Gn(T0(e, ...t)),
      subtract: (...t) => Gn(A0(e, ...t)),
      multiply: (...t) => Gn(Ih(e, ...t)),
      divide: (...t) => Gn(R0(e, ...t)),
      negate: () => Gn($0(e)),
      toString: () => e.toString(),
    }),
    { add: T0, subtract: A0, multiply: Ih, divide: R0, negate: $0 }
  )
function kR(e, t = '-') {
  return e.replace(/\s+/g, t)
}
function CR(e) {
  const t = kR(e.toString())
  return PR(_R(t))
}
function _R(e) {
  return e.includes('\\.')
    ? e
    : !Number.isInteger(parseFloat(e.toString()))
    ? e.replace('.', '\\.')
    : e
}
function PR(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, '\\$&')
}
function ER(e, t = '') {
  return [t, e].filter(Boolean).join('-')
}
function TR(e, t) {
  return `var(${e}${t ? `, ${t}` : ''})`
}
function AR(e, t = '') {
  return CR(`--${ER(e, t)}`)
}
function X(e, t, r) {
  const n = AR(e, r)
  return { variable: n, reference: TR(n, t) }
}
function RR(e) {
  const t = e == null ? 0 : e.length
  return t ? e[t - 1] : void 0
}
function $R(e) {
  const t = parseFloat(e.toString()),
    r = e.toString().replace(String(t), '')
  return { unitless: !r, value: t, unit: r }
}
function Fh(e) {
  if (e == null) return e
  const { unitless: t } = $R(e)
  return t || typeof e == 'number' ? `${e}px` : e
}
var Qx = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
  Dm = e => Object.fromEntries(Object.entries(e).sort(Qx))
function j0(e) {
  const t = Dm(e)
  return Object.assign(Object.values(t), t)
}
function jR(e) {
  const t = Object.keys(Dm(e))
  return new Set(t)
}
function M0(e) {
  var t
  if (!e) return e
  e = (t = Fh(e)) != null ? t : e
  const r = -0.02
  return typeof e == 'number' ? `${e + r}` : e.replace(/(\d+\.?\d*)/u, n => `${parseFloat(n) + r}`)
}
function aa(e, t) {
  const r = ['@media screen']
  return (
    e && r.push('and', `(min-width: ${Fh(e)})`),
    t && r.push('and', `(max-width: ${Fh(t)})`),
    r.join(' ')
  )
}
function MR(e) {
  var t
  if (!e) return null
  e.base = (t = e.base) != null ? t : '0px'
  const r = j0(e),
    n = Object.entries(e)
      .sort(Qx)
      .map(([a, s], l, u) => {
        var c
        let [, d] = (c = u[l + 1]) != null ? c : []
        return (
          (d = parseFloat(d) > 0 ? M0(d) : void 0),
          {
            _minW: M0(s),
            breakpoint: a,
            minW: s,
            maxW: d,
            maxWQuery: aa(null, d),
            minWQuery: aa(s),
            minMaxQuery: aa(s, d),
          }
        )
      }),
    o = jR(e),
    i = Array.from(o.values())
  return {
    keys: o,
    normalized: r,
    isResponsive(a) {
      const s = Object.keys(a)
      return s.length > 0 && s.every(l => o.has(l))
    },
    asObject: Dm(e),
    asArray: j0(e),
    details: n,
    get(a) {
      return n.find(s => s.breakpoint === a)
    },
    media: [null, ...r.map(a => aa(a)).slice(1)],
    toArrayValue(a) {
      if (!st(a)) throw new Error('toArrayValue: value must be an object')
      const s = i.map(l => {
        var u
        return (u = a[l]) != null ? u : null
      })
      for (; RR(s) === null; ) s.pop()
      return s
    },
    toObjectValue(a) {
      if (!Array.isArray(a)) throw new Error('toObjectValue: value must be an array')
      return a.reduce((s, l, u) => {
        const c = i[u]
        return c != null && l != null && (s[c] = l), s
      }, {})
    },
  }
}
var Ke = {
    hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
    focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
    focusVisible: (e, t) => `${e}:focus-visible ${t}`,
    focusWithin: (e, t) => `${e}:focus-within ${t}`,
    active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
    disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
    invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
    checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
    indeterminate: (e, t) =>
      `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
    readOnly: (e, t) => `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
    expanded: (e, t) =>
      `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
    placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`,
  },
  Xr = e => Zx(t => e(t, '&'), '[role=group]', '[data-group]', '.group'),
  Rr = e => Zx(t => e(t, '~ &'), '[data-peer]', '.peer'),
  Zx = (e, ...t) => t.map(e).join(', '),
  jc = {
    _hover: '&:hover, &[data-hover]',
    _active: '&:active, &[data-active]',
    _focus: '&:focus, &[data-focus]',
    _highlighted: '&[data-highlighted]',
    _focusWithin: '&:focus-within',
    _focusVisible: '&:focus-visible, &[data-focus-visible]',
    _disabled: '&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]',
    _readOnly: '&[aria-readonly=true], &[readonly], &[data-readonly]',
    _before: '&::before',
    _after: '&::after',
    _empty: '&:empty',
    _expanded: '&[aria-expanded=true], &[data-expanded]',
    _checked: '&[aria-checked=true], &[data-checked]',
    _grabbed: '&[aria-grabbed=true], &[data-grabbed]',
    _pressed: '&[aria-pressed=true], &[data-pressed]',
    _invalid: '&[aria-invalid=true], &[data-invalid]',
    _valid: '&[data-valid], &[data-state=valid]',
    _loading: '&[data-loading], &[aria-busy=true]',
    _selected: '&[aria-selected=true], &[data-selected]',
    _hidden: '&[hidden], &[data-hidden]',
    _autofill: '&:-webkit-autofill',
    _even: '&:nth-of-type(even)',
    _odd: '&:nth-of-type(odd)',
    _first: '&:first-of-type',
    _firstLetter: '&::first-letter',
    _last: '&:last-of-type',
    _notFirst: '&:not(:first-of-type)',
    _notLast: '&:not(:last-of-type)',
    _visited: '&:visited',
    _activeLink: '&[aria-current=page]',
    _activeStep: '&[aria-current=step]',
    _indeterminate: '&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]',
    _groupHover: Xr(Ke.hover),
    _peerHover: Rr(Ke.hover),
    _groupFocus: Xr(Ke.focus),
    _peerFocus: Rr(Ke.focus),
    _groupFocusVisible: Xr(Ke.focusVisible),
    _peerFocusVisible: Rr(Ke.focusVisible),
    _groupActive: Xr(Ke.active),
    _peerActive: Rr(Ke.active),
    _groupDisabled: Xr(Ke.disabled),
    _peerDisabled: Rr(Ke.disabled),
    _groupInvalid: Xr(Ke.invalid),
    _peerInvalid: Rr(Ke.invalid),
    _groupChecked: Xr(Ke.checked),
    _peerChecked: Rr(Ke.checked),
    _groupFocusWithin: Xr(Ke.focusWithin),
    _peerFocusWithin: Rr(Ke.focusWithin),
    _peerPlaceholderShown: Rr(Ke.placeholderShown),
    _placeholder: '&::placeholder',
    _placeholderShown: '&:placeholder-shown',
    _fullScreen: '&:fullscreen',
    _selection: '&::selection',
    _rtl: '[dir=rtl] &, &[dir=rtl]',
    _ltr: '[dir=ltr] &, &[dir=ltr]',
    _mediaDark: '@media (prefers-color-scheme: dark)',
    _mediaReduceMotion: '@media (prefers-reduced-motion: reduce)',
    _dark:
      '.chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]',
    _light:
      '.chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]',
  },
  OR = Object.keys(jc)
function O0(e, t) {
  return X(String(e).replace(/\./g, '-'), void 0, t)
}
function IR(e, t) {
  let r = {}
  const n = {}
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i,
      { variable: l, reference: u } = O0(o, t == null ? void 0 : t.cssVarPrefix)
    if (!a) {
      if (o.startsWith('space')) {
        const f = o.split('.'),
          [h, ...m] = f,
          p = `${h}.-${m.join('.')}`,
          S = Gn.negate(s),
          g = Gn.negate(u)
        n[p] = { value: S, var: l, varRef: g }
      }
      ;(r[l] = s), (n[o] = { value: s, var: l, varRef: u })
      continue
    }
    const c = f => {
        const m = [String(o).split('.')[0], f].join('.')
        if (!e[m]) return f
        const { reference: S } = O0(m, t == null ? void 0 : t.cssVarPrefix)
        return S
      },
      d = st(s) ? s : { default: s }
    ;(r = Ut(
      r,
      Object.entries(d).reduce((f, [h, m]) => {
        var p, S
        const g = c(m)
        if (h === 'default') return (f[l] = g), f
        const v = (S = (p = jc) == null ? void 0 : p[h]) != null ? S : h
        return (f[v] = { [l]: g }), f
      }, {})
    )),
      (n[o] = { value: u, var: l, varRef: u })
  }
  return { cssVars: r, cssMap: n }
}
function FR(e, t = []) {
  const r = Object.assign({}, e)
  for (const n of t) n in r && delete r[n]
  return r
}
function DR(e, t) {
  const r = {}
  for (const n of t) n in e && (r[n] = e[n])
  return r
}
var NR = [
  'colors',
  'borders',
  'borderWidths',
  'borderStyles',
  'fonts',
  'fontSizes',
  'fontWeights',
  'letterSpacings',
  'lineHeights',
  'radii',
  'space',
  'shadows',
  'sizes',
  'zIndices',
  'transition',
  'blur',
  'breakpoints',
]
function zR(e) {
  return DR(e, NR)
}
function LR(e) {
  return e.semanticTokens
}
function BR(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e
  return o
}
function VR({ tokens: e, semanticTokens: t }) {
  var r, n
  const o = Object.entries((r = Dh(e)) != null ? r : {}).map(([a, s]) => [
      a,
      { isSemantic: !1, value: s },
    ]),
    i = Object.entries((n = Dh(t, 1)) != null ? n : {}).map(([a, s]) => [
      a,
      { isSemantic: !0, value: s },
    ])
  return Object.fromEntries([...o, ...i])
}
function Dh(e, t = 1 / 0) {
  return (!st(e) && !Array.isArray(e)) || !t
    ? e
    : Object.entries(e).reduce(
        (r, [n, o]) => (
          st(o) || Array.isArray(o)
            ? Object.entries(Dh(o, t - 1)).forEach(([i, a]) => {
                r[`${n}.${i}`] = a
              })
            : (r[n] = o),
          r
        ),
        {}
      )
}
function WR(e) {
  var t
  const r = BR(e),
    n = zR(r),
    o = LR(r),
    i = VR({ tokens: n, semanticTokens: o }),
    a = (t = r.config) == null ? void 0 : t.cssVarPrefix,
    { cssMap: s, cssVars: l } = IR(i, { cssVarPrefix: a })
  return (
    Object.assign(r, {
      __cssVars: {
        ...{
          '--chakra-ring-inset': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-ring-offset-width': '0px',
          '--chakra-ring-offset-color': '#fff',
          '--chakra-ring-color': 'rgba(66, 153, 225, 0.6)',
          '--chakra-ring-offset-shadow': '0 0 #0000',
          '--chakra-ring-shadow': '0 0 #0000',
          '--chakra-space-x-reverse': '0',
          '--chakra-space-y-reverse': '0',
        },
        ...l,
      },
      __cssMap: s,
      __breakpoints: MR(r.breakpoints),
    }),
    r
  )
}
var Nm = Ut({}, Bl, te, sR, Tu, Lt, lR, gR, uR, Yx, vR, xa, Oh, me, wR, xR, yR, bR, cR, SR),
  UR = Object.assign({}, me, Lt, Tu, Yx, xa),
  Jx = Object.keys(UR),
  HR = [...Object.keys(Nm), ...OR],
  GR = { ...Nm, ...jc },
  KR = e => e in GR,
  qR = e => t => {
    if (!t.__breakpoints) return e
    const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints,
      i = {}
    for (const a in e) {
      let s = cn(e[a], t)
      if (s == null) continue
      if (((s = st(s) && r(s) ? n(s) : s), !Array.isArray(s))) {
        i[a] = s
        continue
      }
      const l = s.slice(0, o.length).length
      for (let u = 0; u < l; u += 1) {
        const c = o == null ? void 0 : o[u]
        if (!c) {
          i[a] = s[u]
          continue
        }
        ;(i[c] = i[c] || {}), s[u] != null && (i[c][a] = s[u])
      }
    }
    return i
  }
function YR(e) {
  const t = []
  let r = '',
    n = !1
  for (let o = 0; o < e.length; o++) {
    const i = e[o]
    i === '('
      ? ((n = !0), (r += i))
      : i === ')'
      ? ((n = !1), (r += i))
      : i === ',' && !n
      ? (t.push(r), (r = ''))
      : (r += i)
  }
  return (r = r.trim()), r && t.push(r), t
}
function XR(e) {
  return /^var\(--.+\)$/.test(e)
}
var QR = (e, t) => e.startsWith('--') && typeof t == 'string' && !XR(t),
  ZR = (e, t) => {
    var r, n
    if (t == null) return t
    const o = l => {
        var u, c
        return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : c.varRef
      },
      i = l => {
        var u
        return (u = o(l)) != null ? u : l
      },
      [a, s] = YR(t)
    return (t = (n = (r = o(a)) != null ? r : i(s)) != null ? n : i(t)), t
  }
function JR(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e,
    o = (i, a = !1) => {
      var s, l, u
      const c = cn(i, n),
        d = qR(c)(n)
      let f = {}
      for (let h in d) {
        const m = d[h]
        let p = cn(m, n)
        h in r && (h = r[h]), QR(h, p) && (p = ZR(n, p))
        let S = t[h]
        if ((S === !0 && (S = { property: h }), st(p))) {
          ;(f[h] = (s = f[h]) != null ? s : {}), (f[h] = Ut({}, f[h], o(p, !0)))
          continue
        }
        let g =
          (u = (l = S == null ? void 0 : S.transform) == null ? void 0 : l.call(S, p, n, c)) != null
            ? u
            : p
        g = S != null && S.processResult ? o(g, !0) : g
        const v = cn(S == null ? void 0 : S.property, n)
        if (!a && S != null && S.static) {
          const b = cn(S.static, n)
          f = Ut({}, f, b)
        }
        if (v && Array.isArray(v)) {
          for (const b of v) f[b] = g
          continue
        }
        if (v) {
          v === '&' && st(g) ? (f = Ut({}, f, g)) : (f[v] = g)
          continue
        }
        if (st(g)) {
          f = Ut({}, f, g)
          continue
        }
        f[h] = g
      }
      return f
    }
  return o
}
var ew = e => t => JR({ theme: t, pseudos: jc, configs: Nm })(e)
function ge(e) {
  return {
    definePartsStyle(t) {
      return t
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t }
    },
  }
}
function e$(e, t) {
  if (Array.isArray(e)) return e
  if (st(e)) return t(e)
  if (e != null) return [e]
}
function t$(e, t) {
  for (let r = t + 1; r < e.length; r++) if (e[r] != null) return r
  return -1
}
function r$(e) {
  const t = e.__breakpoints
  return function (n, o, i, a) {
    var s, l
    if (!t) return
    const u = {},
      c = e$(i, t.toArrayValue)
    if (!c) return u
    const d = c.length,
      f = d === 1,
      h = !!n.parts
    for (let m = 0; m < d; m++) {
      const p = t.details[m],
        S = t.details[t$(c, m)],
        g = aa(p.minW, S == null ? void 0 : S._minW),
        v = cn((s = n[o]) == null ? void 0 : s[c[m]], a)
      if (v) {
        if (h) {
          ;(l = n.parts) == null ||
            l.forEach(b => {
              Ut(u, { [b]: f ? v[b] : { [g]: v[b] } })
            })
          continue
        }
        if (!h) {
          f ? Ut(u, v) : (u[g] = v)
          continue
        }
        u[g] = v
      }
    }
    return u
  }
}
function n$(e) {
  return t => {
    var r
    const { variant: n, size: o, theme: i } = t,
      a = r$(i)
    return Ut(
      {},
      cn((r = e.baseStyle) != null ? r : {}, t),
      a(e, 'sizes', o, t),
      a(e, 'variants', n, t)
    )
  }
}
function Je(e) {
  return FR(e, ['styleConfig', 'size', 'variant', 'colorScheme'])
}
var o$ = [
  'borders',
  'breakpoints',
  'colors',
  'components',
  'config',
  'direction',
  'fonts',
  'fontSizes',
  'fontWeights',
  'letterSpacings',
  'lineHeights',
  'radii',
  'shadows',
  'sizes',
  'space',
  'styles',
  'transition',
  'zIndices',
]
function i$(e) {
  return st(e) ? o$.every(t => Object.prototype.hasOwnProperty.call(e, t)) : !1
}
var a$ = {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1e3,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  s$ = a$,
  l$ = { base: '0em', sm: '30em', md: '48em', lg: '62em', xl: '80em', '2xl': '96em' },
  u$ = l$,
  c$ = {
    transparent: 'transparent',
    current: 'currentColor',
    black: '#000000',
    white: '#FFFFFF',
    whiteAlpha: {
      50: 'rgba(255, 255, 255, 0.04)',
      100: 'rgba(255, 255, 255, 0.06)',
      200: 'rgba(255, 255, 255, 0.08)',
      300: 'rgba(255, 255, 255, 0.16)',
      400: 'rgba(255, 255, 255, 0.24)',
      500: 'rgba(255, 255, 255, 0.36)',
      600: 'rgba(255, 255, 255, 0.48)',
      700: 'rgba(255, 255, 255, 0.64)',
      800: 'rgba(255, 255, 255, 0.80)',
      900: 'rgba(255, 255, 255, 0.92)',
    },
    blackAlpha: {
      50: 'rgba(0, 0, 0, 0.04)',
      100: 'rgba(0, 0, 0, 0.06)',
      200: 'rgba(0, 0, 0, 0.08)',
      300: 'rgba(0, 0, 0, 0.16)',
      400: 'rgba(0, 0, 0, 0.24)',
      500: 'rgba(0, 0, 0, 0.36)',
      600: 'rgba(0, 0, 0, 0.48)',
      700: 'rgba(0, 0, 0, 0.64)',
      800: 'rgba(0, 0, 0, 0.80)',
      900: 'rgba(0, 0, 0, 0.92)',
    },
    gray: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923',
    },
    red: {
      50: '#FFF5F5',
      100: '#FED7D7',
      200: '#FEB2B2',
      300: '#FC8181',
      400: '#F56565',
      500: '#E53E3E',
      600: '#C53030',
      700: '#9B2C2C',
      800: '#822727',
      900: '#63171B',
    },
    orange: {
      50: '#FFFAF0',
      100: '#FEEBC8',
      200: '#FBD38D',
      300: '#F6AD55',
      400: '#ED8936',
      500: '#DD6B20',
      600: '#C05621',
      700: '#9C4221',
      800: '#7B341E',
      900: '#652B19',
    },
    yellow: {
      50: '#FFFFF0',
      100: '#FEFCBF',
      200: '#FAF089',
      300: '#F6E05E',
      400: '#ECC94B',
      500: '#D69E2E',
      600: '#B7791F',
      700: '#975A16',
      800: '#744210',
      900: '#5F370E',
    },
    green: {
      50: '#F0FFF4',
      100: '#C6F6D5',
      200: '#9AE6B4',
      300: '#68D391',
      400: '#48BB78',
      500: '#38A169',
      600: '#2F855A',
      700: '#276749',
      800: '#22543D',
      900: '#1C4532',
    },
    teal: {
      50: '#E6FFFA',
      100: '#B2F5EA',
      200: '#81E6D9',
      300: '#4FD1C5',
      400: '#38B2AC',
      500: '#319795',
      600: '#2C7A7B',
      700: '#285E61',
      800: '#234E52',
      900: '#1D4044',
    },
    blue: {
      50: '#ebf8ff',
      100: '#bee3f8',
      200: '#90cdf4',
      300: '#63b3ed',
      400: '#4299e1',
      500: '#3182ce',
      600: '#2b6cb0',
      700: '#2c5282',
      800: '#2a4365',
      900: '#1A365D',
    },
    cyan: {
      50: '#EDFDFD',
      100: '#C4F1F9',
      200: '#9DECF9',
      300: '#76E4F7',
      400: '#0BC5EA',
      500: '#00B5D8',
      600: '#00A3C4',
      700: '#0987A0',
      800: '#086F83',
      900: '#065666',
    },
    purple: {
      50: '#FAF5FF',
      100: '#E9D8FD',
      200: '#D6BCFA',
      300: '#B794F4',
      400: '#9F7AEA',
      500: '#805AD5',
      600: '#6B46C1',
      700: '#553C9A',
      800: '#44337A',
      900: '#322659',
    },
    pink: {
      50: '#FFF5F7',
      100: '#FED7E2',
      200: '#FBB6CE',
      300: '#F687B3',
      400: '#ED64A6',
      500: '#D53F8C',
      600: '#B83280',
      700: '#97266D',
      800: '#702459',
      900: '#521B41',
    },
    linkedin: {
      50: '#E8F4F9',
      100: '#CFEDFB',
      200: '#9BDAF3',
      300: '#68C7EC',
      400: '#34B3E4',
      500: '#00A0DC',
      600: '#008CC9',
      700: '#0077B5',
      800: '#005E93',
      900: '#004471',
    },
    facebook: {
      50: '#E8F4F9',
      100: '#D9DEE9',
      200: '#B7C2DA',
      300: '#6482C0',
      400: '#4267B2',
      500: '#385898',
      600: '#314E89',
      700: '#29487D',
      800: '#223B67',
      900: '#1E355B',
    },
    messenger: {
      50: '#D0E6FF',
      100: '#B9DAFF',
      200: '#A2CDFF',
      300: '#7AB8FF',
      400: '#2E90FF',
      500: '#0078FF',
      600: '#0063D1',
      700: '#0052AC',
      800: '#003C7E',
      900: '#002C5C',
    },
    whatsapp: {
      50: '#dffeec',
      100: '#b9f5d0',
      200: '#90edb3',
      300: '#65e495',
      400: '#3cdd78',
      500: '#22c35e',
      600: '#179848',
      700: '#0c6c33',
      800: '#01421c',
      900: '#001803',
    },
    twitter: {
      50: '#E5F4FD',
      100: '#C8E9FB',
      200: '#A8DCFA',
      300: '#83CDF7',
      400: '#57BBF5',
      500: '#1DA1F2',
      600: '#1A94DA',
      700: '#1681BF',
      800: '#136B9E',
      900: '#0D4D71',
    },
    telegram: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
  },
  d$ = c$,
  f$ = {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  h$ = f$,
  p$ = {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    none: 'none',
    'dark-lg':
      'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px',
  },
  m$ = p$,
  v$ = {
    common: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    colors: 'background-color, border-color, color, fill, stroke',
    dimensions: 'width, height',
    position: 'left, right, top, bottom',
    background: 'background-color, background-image, background-position',
  },
  g$ = {
    'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
    'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
    'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  y$ = {
    'ultra-fast': '50ms',
    faster: '100ms',
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '400ms',
    'ultra-slow': '500ms',
  },
  b$ = { property: v$, easing: g$, duration: y$ },
  S$ = b$,
  x$ = {
    none: 0,
    sm: '4px',
    base: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '40px',
    '3xl': '64px',
  },
  w$ = x$,
  k$ = { none: 0, '1px': '1px solid', '2px': '2px solid', '4px': '4px solid', '8px': '8px solid' },
  C$ = k$,
  _$ = {
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeights: {
      normal: 'normal',
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fonts: {
      heading:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    },
    fontSizes: {
      '3xs': '0.45rem',
      '2xs': '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
  },
  tw = _$,
  rw = {
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },
  P$ = {
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '8xl': '90rem',
    prose: '60ch',
  },
  E$ = { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
  T$ = { ...rw, ...P$, container: E$ },
  nw = T$,
  A$ = {
    breakpoints: u$,
    zIndices: s$,
    radii: h$,
    blur: w$,
    colors: d$,
    ...tw,
    sizes: nw,
    shadows: m$,
    space: rw,
    borders: C$,
    transition: S$,
  }
function ae(e, t = {}) {
  let r = !1
  function n() {
    if (!r) {
      r = !0
      return
    }
    throw new Error(
      '[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?'
    )
  }
  function o(...c) {
    n()
    for (const d of c) t[d] = l(d)
    return ae(e, t)
  }
  function i(...c) {
    for (const d of c) d in t || (t[d] = l(d))
    return ae(e, t)
  }
  function a() {
    return Object.fromEntries(Object.entries(t).map(([d, f]) => [d, f.selector]))
  }
  function s() {
    return Object.fromEntries(Object.entries(t).map(([d, f]) => [d, f.className]))
  }
  function l(c) {
    const h = `chakra-${(['container', 'root'].includes(c ?? '') ? [e] : [e, c])
      .filter(Boolean)
      .join('__')}`
    return { className: h, selector: `.${h}`, toString: () => c }
  }
  return {
    parts: o,
    toPart: l,
    extend: i,
    selectors: a,
    classnames: s,
    get keys() {
      return Object.keys(t)
    },
    __type: {},
  }
}
var R$ = ae('accordion').parts('root', 'container', 'button', 'panel').extend('icon'),
  $$ = ae('alert').parts('title', 'description', 'container').extend('icon', 'spinner'),
  j$ = ae('avatar').parts('label', 'badge', 'container').extend('excessLabel', 'group'),
  M$ = ae('breadcrumb').parts('link', 'item', 'container').extend('separator')
ae('button').parts()
var O$ = ae('checkbox').parts('control', 'icon', 'container').extend('label')
ae('progress').parts('track', 'filledTrack').extend('label')
var I$ = ae('drawer')
    .parts('overlay', 'dialogContainer', 'dialog')
    .extend('header', 'closeButton', 'body', 'footer'),
  F$ = ae('editable').parts('preview', 'input', 'textarea'),
  D$ = ae('form').parts('container', 'requiredIndicator', 'helperText'),
  N$ = ae('formError').parts('text', 'icon'),
  z$ = ae('input').parts('addon', 'field', 'element'),
  L$ = ae('list').parts('container', 'item', 'icon'),
  B$ = ae('menu').parts('button', 'list', 'item').extend('groupTitle', 'command', 'divider'),
  V$ = ae('modal')
    .parts('overlay', 'dialogContainer', 'dialog')
    .extend('header', 'closeButton', 'body', 'footer'),
  W$ = ae('numberinput').parts('root', 'field', 'stepperGroup', 'stepper')
ae('pininput').parts('field')
var U$ = ae('popover')
    .parts('content', 'header', 'body', 'footer')
    .extend('popper', 'arrow', 'closeButton'),
  H$ = ae('progress').parts('label', 'filledTrack', 'track'),
  G$ = ae('radio').parts('container', 'control', 'label'),
  K$ = ae('select').parts('field', 'icon'),
  q$ = ae('slider').parts('container', 'track', 'thumb', 'filledTrack', 'mark'),
  Y$ = ae('stat').parts('container', 'label', 'helpText', 'number', 'icon'),
  X$ = ae('switch').parts('container', 'track', 'thumb'),
  Q$ = ae('table').parts('table', 'thead', 'tbody', 'tr', 'th', 'td', 'tfoot', 'caption'),
  Z$ = ae('tabs').parts('root', 'tab', 'tablist', 'tabpanel', 'tabpanels', 'indicator'),
  J$ = ae('tag').parts('container', 'label', 'closeButton'),
  e5 = ae('card').parts('container', 'header', 'body', 'footer')
function Qn(e, t, r) {
  return Math.min(Math.max(e, r), t)
}
class t5 extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`)
  }
}
var sa = t5
function zm(e) {
  if (typeof e != 'string') throw new sa(e)
  if (e.trim().toLowerCase() === 'transparent') return [0, 0, 0, 0]
  let t = e.trim()
  t = u5.test(e) ? o5(e) : e
  const r = i5.exec(t)
  if (r) {
    const a = Array.from(r).slice(1)
    return [
      ...a.slice(0, 3).map(s => parseInt(rs(s, 2), 16)),
      parseInt(rs(a[3] || 'f', 2), 16) / 255,
    ]
  }
  const n = a5.exec(t)
  if (n) {
    const a = Array.from(n).slice(1)
    return [...a.slice(0, 3).map(s => parseInt(s, 16)), parseInt(a[3] || 'ff', 16) / 255]
  }
  const o = s5.exec(t)
  if (o) {
    const a = Array.from(o).slice(1)
    return [...a.slice(0, 3).map(s => parseInt(s, 10)), parseFloat(a[3] || '1')]
  }
  const i = l5.exec(t)
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat)
    if (Qn(0, 100, s) !== s) throw new sa(e)
    if (Qn(0, 100, l) !== l) throw new sa(e)
    return [...c5(a, s, l), Number.isNaN(u) ? 1 : u]
  }
  throw new sa(e)
}
function r5(e) {
  let t = 5381,
    r = e.length
  for (; r; ) t = (t * 33) ^ e.charCodeAt(--r)
  return (t >>> 0) % 2341
}
const I0 = e => parseInt(e.replace(/_/g, ''), 36),
  n5 =
    '1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm'
      .split(' ')
      .reduce((e, t) => {
        const r = I0(t.substring(0, 3)),
          n = I0(t.substring(3)).toString(16)
        let o = ''
        for (let i = 0; i < 6 - n.length; i++) o += '0'
        return (e[r] = `${o}${n}`), e
      }, {})
function o5(e) {
  const t = e.toLowerCase().trim(),
    r = n5[r5(t)]
  if (!r) throw new sa(e)
  return `#${r}`
}
const rs = (e, t) =>
    Array.from(Array(t))
      .map(() => e)
      .join(''),
  i5 = new RegExp(`^#${rs('([a-f0-9])', 3)}([a-f0-9])?$`, 'i'),
  a5 = new RegExp(`^#${rs('([a-f0-9]{2})', 3)}([a-f0-9]{2})?$`, 'i'),
  s5 = new RegExp(
    `^rgba?\\(\\s*(\\d+)\\s*${rs(',\\s*(\\d+)\\s*', 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,
    'i'
  ),
  l5 = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
  u5 = /^[a-z]+$/i,
  F0 = e => Math.round(e * 255),
  c5 = (e, t, r) => {
    let n = r / 100
    if (t === 0) return [n, n, n].map(F0)
    const o = (((e % 360) + 360) % 360) / 60,
      i = (1 - Math.abs(2 * n - 1)) * (t / 100),
      a = i * (1 - Math.abs((o % 2) - 1))
    let s = 0,
      l = 0,
      u = 0
    o >= 0 && o < 1
      ? ((s = i), (l = a))
      : o >= 1 && o < 2
      ? ((s = a), (l = i))
      : o >= 2 && o < 3
      ? ((l = i), (u = a))
      : o >= 3 && o < 4
      ? ((l = a), (u = i))
      : o >= 4 && o < 5
      ? ((s = a), (u = i))
      : o >= 5 && o < 6 && ((s = i), (u = a))
    const c = n - i / 2,
      d = s + c,
      f = l + c,
      h = u + c
    return [d, f, h].map(F0)
  }
function d5(e, t, r, n) {
  return `rgba(${Qn(0, 255, e).toFixed()}, ${Qn(0, 255, t).toFixed()}, ${Qn(
    0,
    255,
    r
  ).toFixed()}, ${parseFloat(Qn(0, 1, n).toFixed(3))})`
}
function f5(e, t) {
  const [r, n, o, i] = zm(e)
  return d5(r, n, o, i - t)
}
function h5(e) {
  const [t, r, n, o] = zm(e)
  let i = a => {
    const s = Qn(0, 255, a).toString(16)
    return s.length === 1 ? `0${s}` : s
  }
  return `#${i(t)}${i(r)}${i(n)}${o < 1 ? i(Math.round(o * 255)) : ''}`
}
function p5(e, t, r, n, o) {
  for (t = t.split ? t.split('.') : t, n = 0; n < t.length; n++) e = e ? e[t[n]] : o
  return e === o ? r : e
}
var m5 = e => Object.keys(e).length === 0,
  ft = (e, t, r) => {
    const n = p5(e, `colors.${t}`, t)
    try {
      return h5(n), n
    } catch {
      return r ?? '#000000'
    }
  },
  v5 = e => {
    const [t, r, n] = zm(e)
    return (t * 299 + r * 587 + n * 114) / 1e3
  },
  g5 = e => t => {
    const r = ft(t, e)
    return v5(r) < 128 ? 'dark' : 'light'
  },
  y5 = e => t => g5(e)(t) === 'dark',
  _i = (e, t) => r => {
    const n = ft(r, e)
    return f5(n, 1 - t)
  }
function D0(e = '1rem', t = 'rgba(255, 255, 255, 0.15)') {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`,
  }
}
var b5 = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, '0')}`
function S5(e) {
  const t = b5()
  return !e || m5(e)
    ? t
    : e.string && e.colors
    ? w5(e.string, e.colors)
    : e.string && !e.colors
    ? x5(e.string)
    : e.colors && !e.string
    ? k5(e.colors)
    : t
}
function x5(e) {
  let t = 0
  if (e.length === 0) return t.toString()
  for (let n = 0; n < e.length; n += 1) (t = e.charCodeAt(n) + ((t << 5) - t)), (t = t & t)
  let r = '#'
  for (let n = 0; n < 3; n += 1) {
    const o = (t >> (n * 8)) & 255
    r += `00${o.toString(16)}`.substr(-2)
  }
  return r
}
function w5(e, t) {
  let r = 0
  if (e.length === 0) return t[0]
  for (let n = 0; n < e.length; n += 1) (r = e.charCodeAt(n) + ((r << 5) - r)), (r = r & r)
  return (r = ((r % t.length) + t.length) % t.length), t[r]
}
function k5(e) {
  return e[Math.floor(Math.random() * e.length)]
}
function z(e, t) {
  return r => (r.colorMode === 'dark' ? t : e)
}
function Lm(e) {
  const { orientation: t, vertical: r, horizontal: n } = e
  return t ? (t === 'vertical' ? r : n) : {}
}
function ow(e) {
  return st(e) && e.reference ? e.reference : String(e)
}
var Mc = (e, ...t) => t.map(ow).join(` ${e} `).replace(/calc/g, ''),
  N0 = (...e) => `calc(${Mc('+', ...e)})`,
  z0 = (...e) => `calc(${Mc('-', ...e)})`,
  Nh = (...e) => `calc(${Mc('*', ...e)})`,
  L0 = (...e) => `calc(${Mc('/', ...e)})`,
  B0 = e => {
    const t = ow(e)
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith('-')
        ? String(t).slice(1)
        : `-${t}`
      : Nh(t, -1)
  },
  Mr = Object.assign(
    e => ({
      add: (...t) => Mr(N0(e, ...t)),
      subtract: (...t) => Mr(z0(e, ...t)),
      multiply: (...t) => Mr(Nh(e, ...t)),
      divide: (...t) => Mr(L0(e, ...t)),
      negate: () => Mr(B0(e)),
      toString: () => e.toString(),
    }),
    { add: N0, subtract: z0, multiply: Nh, divide: L0, negate: B0 }
  )
function C5(e) {
  return !Number.isInteger(parseFloat(e.toString()))
}
function _5(e, t = '-') {
  return e.replace(/\s+/g, t)
}
function iw(e) {
  const t = _5(e.toString())
  return t.includes('\\.') ? e : C5(e) ? t.replace('.', '\\.') : e
}
function P5(e, t = '') {
  return [t, iw(e)].filter(Boolean).join('-')
}
function E5(e, t) {
  return `var(${iw(e)}${t ? `, ${t}` : ''})`
}
function T5(e, t = '') {
  return `--${P5(e, t)}`
}
function Ve(e, t) {
  const r = T5(e, t == null ? void 0 : t.prefix)
  return { variable: r, reference: E5(r, A5(t == null ? void 0 : t.fallback)) }
}
function A5(e) {
  return typeof e == 'string' ? e : e == null ? void 0 : e.reference
}
var { defineMultiStyleConfig: R5, definePartsStyle: Vl } = ge(X$.keys),
  wa = Ve('switch-track-width'),
  to = Ve('switch-track-height'),
  Ud = Ve('switch-track-diff'),
  $5 = Mr.subtract(wa, to),
  zh = Ve('switch-thumb-x'),
  Zi = Ve('switch-bg'),
  j5 = e => {
    const { colorScheme: t } = e
    return {
      borderRadius: 'full',
      p: '0.5',
      width: [wa.reference],
      height: [to.reference],
      transitionProperty: 'common',
      transitionDuration: 'fast',
      [Zi.variable]: 'colors.gray.300',
      _dark: { [Zi.variable]: 'colors.whiteAlpha.400' },
      _focusVisible: { boxShadow: 'outline' },
      _disabled: { opacity: 0.4, cursor: 'not-allowed' },
      _checked: { [Zi.variable]: `colors.${t}.500`, _dark: { [Zi.variable]: `colors.${t}.200` } },
      bg: Zi.reference,
    }
  },
  M5 = {
    bg: 'white',
    transitionProperty: 'transform',
    transitionDuration: 'normal',
    borderRadius: 'inherit',
    width: [to.reference],
    height: [to.reference],
    _checked: { transform: `translateX(${zh.reference})` },
  },
  O5 = Vl(e => ({
    container: {
      [Ud.variable]: $5,
      [zh.variable]: Ud.reference,
      _rtl: { [zh.variable]: Mr(Ud).negate().toString() },
    },
    track: j5(e),
    thumb: M5,
  })),
  I5 = {
    sm: Vl({ container: { [wa.variable]: '1.375rem', [to.variable]: 'sizes.3' } }),
    md: Vl({ container: { [wa.variable]: '1.875rem', [to.variable]: 'sizes.4' } }),
    lg: Vl({ container: { [wa.variable]: '2.875rem', [to.variable]: 'sizes.6' } }),
  },
  F5 = R5({ baseStyle: O5, sizes: I5, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  { defineMultiStyleConfig: D5, definePartsStyle: ii } = ge(Q$.keys),
  N5 = ii({
    table: {
      fontVariantNumeric: 'lining-nums tabular-nums',
      borderCollapse: 'collapse',
      width: 'full',
    },
    th: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 'wider',
      textAlign: 'start',
    },
    td: { textAlign: 'start' },
    caption: { mt: 4, fontFamily: 'heading', textAlign: 'center', fontWeight: 'medium' },
  }),
  Au = { '&[data-is-numeric=true]': { textAlign: 'end' } },
  z5 = ii(e => {
    const { colorScheme: t } = e
    return {
      th: {
        color: z('gray.600', 'gray.400')(e),
        borderBottom: '1px',
        borderColor: z(`${t}.100`, `${t}.700`)(e),
        ...Au,
      },
      td: { borderBottom: '1px', borderColor: z(`${t}.100`, `${t}.700`)(e), ...Au },
      caption: { color: z('gray.600', 'gray.100')(e) },
      tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } },
    }
  }),
  L5 = ii(e => {
    const { colorScheme: t } = e
    return {
      th: {
        color: z('gray.600', 'gray.400')(e),
        borderBottom: '1px',
        borderColor: z(`${t}.100`, `${t}.700`)(e),
        ...Au,
      },
      td: { borderBottom: '1px', borderColor: z(`${t}.100`, `${t}.700`)(e), ...Au },
      caption: { color: z('gray.600', 'gray.100')(e) },
      tbody: {
        tr: {
          '&:nth-of-type(odd)': {
            'th, td': { borderBottomWidth: '1px', borderColor: z(`${t}.100`, `${t}.700`)(e) },
            td: { background: z(`${t}.100`, `${t}.700`)(e) },
          },
        },
      },
      tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } },
    }
  }),
  B5 = { simple: z5, striped: L5, unstyled: {} },
  V5 = {
    sm: ii({
      th: { px: '4', py: '1', lineHeight: '4', fontSize: 'xs' },
      td: { px: '4', py: '2', fontSize: 'sm', lineHeight: '4' },
      caption: { px: '4', py: '2', fontSize: 'xs' },
    }),
    md: ii({
      th: { px: '6', py: '3', lineHeight: '4', fontSize: 'xs' },
      td: { px: '6', py: '4', lineHeight: '5' },
      caption: { px: '6', py: '2', fontSize: 'sm' },
    }),
    lg: ii({
      th: { px: '8', py: '4', lineHeight: '5', fontSize: 'sm' },
      td: { px: '8', py: '5', lineHeight: '6' },
      caption: { px: '6', py: '2', fontSize: 'md' },
    }),
  },
  W5 = D5({
    baseStyle: N5,
    variants: B5,
    sizes: V5,
    defaultProps: { variant: 'simple', size: 'md', colorScheme: 'gray' },
  }),
  yt = X('tabs-color'),
  rr = X('tabs-bg'),
  hl = X('tabs-border-color'),
  { defineMultiStyleConfig: U5, definePartsStyle: kr } = ge(Z$.keys),
  H5 = e => {
    const { orientation: t } = e
    return { display: t === 'vertical' ? 'flex' : 'block' }
  },
  G5 = e => {
    const { isFitted: t } = e
    return {
      flex: t ? 1 : void 0,
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _focusVisible: { zIndex: 1, boxShadow: 'outline' },
      _disabled: { cursor: 'not-allowed', opacity: 0.4 },
    }
  },
  K5 = e => {
    const { align: t = 'start', orientation: r } = e
    return {
      justifyContent: { end: 'flex-end', center: 'center', start: 'flex-start' }[t],
      flexDirection: r === 'vertical' ? 'column' : 'row',
    }
  },
  q5 = { p: 4 },
  Y5 = kr(e => ({ root: H5(e), tab: G5(e), tablist: K5(e), tabpanel: q5 })),
  X5 = {
    sm: kr({ tab: { py: 1, px: 4, fontSize: 'sm' } }),
    md: kr({ tab: { fontSize: 'md', py: 2, px: 4 } }),
    lg: kr({ tab: { fontSize: 'lg', py: 3, px: 4 } }),
  },
  Q5 = kr(e => {
    const { colorScheme: t, orientation: r } = e,
      n = r === 'vertical',
      o = r === 'vertical' ? 'borderStart' : 'borderBottom',
      i = n ? 'marginStart' : 'marginBottom'
    return {
      tablist: { [o]: '2px solid', borderColor: 'inherit' },
      tab: {
        [o]: '2px solid',
        borderColor: 'transparent',
        [i]: '-2px',
        _selected: {
          [yt.variable]: `colors.${t}.600`,
          _dark: { [yt.variable]: `colors.${t}.300` },
          borderColor: 'currentColor',
        },
        _active: {
          [rr.variable]: 'colors.gray.200',
          _dark: { [rr.variable]: 'colors.whiteAlpha.300' },
        },
        _disabled: { _active: { bg: 'none' } },
        color: yt.reference,
        bg: rr.reference,
      },
    }
  }),
  Z5 = kr(e => {
    const { colorScheme: t } = e
    return {
      tab: {
        borderTopRadius: 'md',
        border: '1px solid',
        borderColor: 'transparent',
        mb: '-1px',
        [hl.variable]: 'transparent',
        _selected: {
          [yt.variable]: `colors.${t}.600`,
          [hl.variable]: 'colors.white',
          _dark: { [yt.variable]: `colors.${t}.300`, [hl.variable]: 'colors.gray.800' },
          borderColor: 'inherit',
          borderBottomColor: hl.reference,
        },
        color: yt.reference,
      },
      tablist: { mb: '-1px', borderBottom: '1px solid', borderColor: 'inherit' },
    }
  }),
  J5 = kr(e => {
    const { colorScheme: t } = e
    return {
      tab: {
        border: '1px solid',
        borderColor: 'inherit',
        [rr.variable]: 'colors.gray.50',
        _dark: { [rr.variable]: 'colors.whiteAlpha.50' },
        mb: '-1px',
        _notLast: { marginEnd: '-1px' },
        _selected: {
          [rr.variable]: 'colors.white',
          [yt.variable]: `colors.${t}.600`,
          _dark: { [rr.variable]: 'colors.gray.800', [yt.variable]: `colors.${t}.300` },
          borderColor: 'inherit',
          borderTopColor: 'currentColor',
          borderBottomColor: 'transparent',
        },
        color: yt.reference,
        bg: rr.reference,
      },
      tablist: { mb: '-1px', borderBottom: '1px solid', borderColor: 'inherit' },
    }
  }),
  ej = kr(e => {
    const { colorScheme: t, theme: r } = e
    return {
      tab: {
        borderRadius: 'full',
        fontWeight: 'semibold',
        color: 'gray.600',
        _selected: { color: ft(r, `${t}.700`), bg: ft(r, `${t}.100`) },
      },
    }
  }),
  tj = kr(e => {
    const { colorScheme: t } = e
    return {
      tab: {
        borderRadius: 'full',
        fontWeight: 'semibold',
        [yt.variable]: 'colors.gray.600',
        _dark: { [yt.variable]: 'inherit' },
        _selected: {
          [yt.variable]: 'colors.white',
          [rr.variable]: `colors.${t}.600`,
          _dark: { [yt.variable]: 'colors.gray.800', [rr.variable]: `colors.${t}.300` },
        },
        color: yt.reference,
        bg: rr.reference,
      },
    }
  }),
  rj = kr({}),
  nj = {
    line: Q5,
    enclosed: Z5,
    'enclosed-colored': J5,
    'soft-rounded': ej,
    'solid-rounded': tj,
    unstyled: rj,
  },
  oj = U5({
    baseStyle: Y5,
    sizes: X5,
    variants: nj,
    defaultProps: { size: 'md', variant: 'line', colorScheme: 'blue' },
  }),
  ij = {
    px: 1,
    textTransform: 'uppercase',
    fontSize: 'xs',
    borderRadius: 'sm',
    fontWeight: 'bold',
  },
  ai = X('badge-bg'),
  br = X('badge-color'),
  aj = e => {
    const { colorScheme: t, theme: r } = e,
      n = _i(`${t}.500`, 0.6)(r)
    return {
      [ai.variable]: `colors.${t}.500`,
      [br.variable]: 'colors.white',
      _dark: { [ai.variable]: n, [br.variable]: 'colors.whiteAlpha.800' },
      bg: ai.reference,
      color: br.reference,
    }
  },
  sj = e => {
    const { colorScheme: t, theme: r } = e,
      n = _i(`${t}.200`, 0.16)(r)
    return {
      [ai.variable]: `colors.${t}.100`,
      [br.variable]: `colors.${t}.800`,
      _dark: { [ai.variable]: n, [br.variable]: `colors.${t}.200` },
      bg: ai.reference,
      color: br.reference,
    }
  },
  lj = e => {
    const { colorScheme: t, theme: r } = e,
      n = _i(`${t}.200`, 0.8)(r)
    return {
      [br.variable]: `colors.${t}.500`,
      _dark: { [br.variable]: n },
      color: br.reference,
      boxShadow: `inset 0 0 0px 1px ${br.reference}`,
    }
  },
  uj = { solid: aj, subtle: sj, outline: lj },
  ka = { baseStyle: ij, variants: uj, defaultProps: { variant: 'subtle', colorScheme: 'gray' } },
  { defineMultiStyleConfig: cj, definePartsStyle: ro } = ge(J$.keys),
  dj = {
    fontWeight: 'medium',
    lineHeight: 1.2,
    outline: 0,
    borderRadius: 'md',
    _focusVisible: { boxShadow: 'outline' },
  },
  fj = { lineHeight: 1.2, overflow: 'visible' },
  hj = {
    fontSize: 'lg',
    w: '5',
    h: '5',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    borderRadius: 'full',
    marginStart: '1.5',
    marginEnd: '-1',
    opacity: 0.5,
    _disabled: { opacity: 0.4 },
    _focusVisible: { boxShadow: 'outline', bg: 'rgba(0, 0, 0, 0.14)' },
    _hover: { opacity: 0.8 },
    _active: { opacity: 1 },
  },
  pj = ro({ container: dj, label: fj, closeButton: hj }),
  mj = {
    sm: ro({
      container: { minH: '5', minW: '5', fontSize: 'xs', px: '2' },
      closeButton: { marginEnd: '-2px', marginStart: '0.35rem' },
    }),
    md: ro({ container: { minH: '6', minW: '6', fontSize: 'sm', px: '2' } }),
    lg: ro({ container: { minH: '8', minW: '8', fontSize: 'md', px: '3' } }),
  },
  vj = {
    subtle: ro(e => {
      var t
      return { container: (t = ka.variants) == null ? void 0 : t.subtle(e) }
    }),
    solid: ro(e => {
      var t
      return { container: (t = ka.variants) == null ? void 0 : t.solid(e) }
    }),
    outline: ro(e => {
      var t
      return { container: (t = ka.variants) == null ? void 0 : t.outline(e) }
    }),
  },
  gj = cj({
    variants: vj,
    baseStyle: pj,
    sizes: mj,
    defaultProps: { size: 'md', variant: 'subtle', colorScheme: 'gray' },
  }),
  { definePartsStyle: Fr, defineMultiStyleConfig: yj } = ge(z$.keys),
  bj = Fr({
    field: {
      width: '100%',
      minWidth: 0,
      outline: 0,
      position: 'relative',
      appearance: 'none',
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    },
  }),
  Qr = {
    lg: { fontSize: 'lg', px: '4', h: '12', borderRadius: 'md' },
    md: { fontSize: 'md', px: '4', h: '10', borderRadius: 'md' },
    sm: { fontSize: 'sm', px: '3', h: '8', borderRadius: 'sm' },
    xs: { fontSize: 'xs', px: '2', h: '6', borderRadius: 'sm' },
  },
  Sj = {
    lg: Fr({ field: Qr.lg, addon: Qr.lg }),
    md: Fr({ field: Qr.md, addon: Qr.md }),
    sm: Fr({ field: Qr.sm, addon: Qr.sm }),
    xs: Fr({ field: Qr.xs, addon: Qr.xs }),
  }
function Bm(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e
  return {
    focusBorderColor: t || z('blue.500', 'blue.300')(e),
    errorBorderColor: r || z('red.500', 'red.300')(e),
  }
}
var xj = Fr(e => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = Bm(e)
    return {
      field: {
        border: '1px solid',
        borderColor: 'inherit',
        bg: 'inherit',
        _hover: { borderColor: z('gray.300', 'whiteAlpha.400')(e) },
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: { borderColor: ft(t, n), boxShadow: `0 0 0 1px ${ft(t, n)}` },
        _focusVisible: { zIndex: 1, borderColor: ft(t, r), boxShadow: `0 0 0 1px ${ft(t, r)}` },
      },
      addon: {
        border: '1px solid',
        borderColor: z('inherit', 'whiteAlpha.50')(e),
        bg: z('gray.100', 'whiteAlpha.300')(e),
      },
    }
  }),
  wj = Fr(e => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = Bm(e)
    return {
      field: {
        border: '2px solid',
        borderColor: 'transparent',
        bg: z('gray.100', 'whiteAlpha.50')(e),
        _hover: { bg: z('gray.200', 'whiteAlpha.100')(e) },
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: { borderColor: ft(t, n) },
        _focusVisible: { bg: 'transparent', borderColor: ft(t, r) },
      },
      addon: {
        border: '2px solid',
        borderColor: 'transparent',
        bg: z('gray.100', 'whiteAlpha.50')(e),
      },
    }
  }),
  kj = Fr(e => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = Bm(e)
    return {
      field: {
        borderBottom: '1px solid',
        borderColor: 'inherit',
        borderRadius: '0',
        px: '0',
        bg: 'transparent',
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: { borderColor: ft(t, n), boxShadow: `0px 1px 0px 0px ${ft(t, n)}` },
        _focusVisible: { borderColor: ft(t, r), boxShadow: `0px 1px 0px 0px ${ft(t, r)}` },
      },
      addon: {
        borderBottom: '2px solid',
        borderColor: 'inherit',
        borderRadius: '0',
        px: '0',
        bg: 'transparent',
      },
    }
  }),
  Cj = Fr({
    field: { bg: 'transparent', px: '0', height: 'auto' },
    addon: { bg: 'transparent', px: '0', height: 'auto' },
  }),
  _j = { outline: xj, filled: wj, flushed: kj, unstyled: Cj },
  ne = yj({
    baseStyle: bj,
    sizes: Sj,
    variants: _j,
    defaultProps: { size: 'md', variant: 'outline' },
  }),
  V0,
  Pj = {
    ...((V0 = ne.baseStyle) == null ? void 0 : V0.field),
    paddingY: '2',
    minHeight: '20',
    lineHeight: 'short',
    verticalAlign: 'top',
  },
  W0,
  U0,
  Ej = {
    outline: e => {
      var t, r
      return (r = (t = ne.variants) == null ? void 0 : t.outline(e).field) != null ? r : {}
    },
    flushed: e => {
      var t, r
      return (r = (t = ne.variants) == null ? void 0 : t.flushed(e).field) != null ? r : {}
    },
    filled: e => {
      var t, r
      return (r = (t = ne.variants) == null ? void 0 : t.filled(e).field) != null ? r : {}
    },
    unstyled: (U0 = (W0 = ne.variants) == null ? void 0 : W0.unstyled.field) != null ? U0 : {},
  },
  H0,
  G0,
  K0,
  q0,
  Y0,
  X0,
  Q0,
  Z0,
  Tj = {
    xs: (G0 = (H0 = ne.sizes) == null ? void 0 : H0.xs.field) != null ? G0 : {},
    sm: (q0 = (K0 = ne.sizes) == null ? void 0 : K0.sm.field) != null ? q0 : {},
    md: (X0 = (Y0 = ne.sizes) == null ? void 0 : Y0.md.field) != null ? X0 : {},
    lg: (Z0 = (Q0 = ne.sizes) == null ? void 0 : Q0.lg.field) != null ? Z0 : {},
  },
  Aj = { baseStyle: Pj, sizes: Tj, variants: Ej, defaultProps: { size: 'md', variant: 'outline' } },
  pl = Ve('tooltip-bg'),
  Hd = Ve('tooltip-fg'),
  Rj = Ve('popper-arrow-bg'),
  $j = {
    bg: pl.reference,
    color: Hd.reference,
    [pl.variable]: 'colors.gray.700',
    [Hd.variable]: 'colors.whiteAlpha.900',
    _dark: { [pl.variable]: 'colors.gray.300', [Hd.variable]: 'colors.gray.900' },
    [Rj.variable]: pl.reference,
    px: '2',
    py: '0.5',
    borderRadius: 'sm',
    fontWeight: 'medium',
    fontSize: 'sm',
    boxShadow: 'md',
    maxW: 'xs',
    zIndex: 'tooltip',
  },
  jj = { baseStyle: $j },
  { defineMultiStyleConfig: Mj, definePartsStyle: la } = ge(H$.keys),
  Oj = e => {
    const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e,
      i = z(D0(), D0('1rem', 'rgba(0,0,0,0.1)'))(e),
      a = z(`${t}.500`, `${t}.200`)(e),
      s = `linear-gradient(
    to right,
    transparent 0%,
    ${ft(r, a)} 50%,
    transparent 100%
  )`
    return { ...(!n && o && i), ...(n ? { bgImage: s } : { bgColor: a }) }
  },
  Ij = { lineHeight: '1', fontSize: '0.25em', fontWeight: 'bold', color: 'white' },
  Fj = e => ({ bg: z('gray.100', 'whiteAlpha.300')(e) }),
  Dj = e => ({ transitionProperty: 'common', transitionDuration: 'slow', ...Oj(e) }),
  Nj = la(e => ({ label: Ij, filledTrack: Dj(e), track: Fj(e) })),
  zj = {
    xs: la({ track: { h: '1' } }),
    sm: la({ track: { h: '2' } }),
    md: la({ track: { h: '3' } }),
    lg: la({ track: { h: '4' } }),
  },
  Lj = Mj({ sizes: zj, baseStyle: Nj, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  Bj = e => typeof e == 'function'
function pt(e, ...t) {
  return Bj(e) ? e(...t) : e
}
var { definePartsStyle: Wl, defineMultiStyleConfig: Vj } = ge(O$.keys),
  Ca = X('checkbox-size'),
  Wj = e => {
    const { colorScheme: t } = e
    return {
      w: Ca.reference,
      h: Ca.reference,
      transitionProperty: 'box-shadow',
      transitionDuration: 'normal',
      border: '2px solid',
      borderRadius: 'sm',
      borderColor: 'inherit',
      color: 'white',
      _checked: {
        bg: z(`${t}.500`, `${t}.200`)(e),
        borderColor: z(`${t}.500`, `${t}.200`)(e),
        color: z('white', 'gray.900')(e),
        _hover: { bg: z(`${t}.600`, `${t}.300`)(e), borderColor: z(`${t}.600`, `${t}.300`)(e) },
        _disabled: {
          borderColor: z('gray.200', 'transparent')(e),
          bg: z('gray.200', 'whiteAlpha.300')(e),
          color: z('gray.500', 'whiteAlpha.500')(e),
        },
      },
      _indeterminate: {
        bg: z(`${t}.500`, `${t}.200`)(e),
        borderColor: z(`${t}.500`, `${t}.200`)(e),
        color: z('white', 'gray.900')(e),
      },
      _disabled: {
        bg: z('gray.100', 'whiteAlpha.100')(e),
        borderColor: z('gray.100', 'transparent')(e),
      },
      _focusVisible: { boxShadow: 'outline' },
      _invalid: { borderColor: z('red.500', 'red.300')(e) },
    }
  },
  Uj = { _disabled: { cursor: 'not-allowed' } },
  Hj = { userSelect: 'none', _disabled: { opacity: 0.4 } },
  Gj = { transitionProperty: 'transform', transitionDuration: 'normal' },
  Kj = Wl(e => ({ icon: Gj, container: Uj, control: pt(Wj, e), label: Hj })),
  qj = {
    sm: Wl({
      control: { [Ca.variable]: 'sizes.3' },
      label: { fontSize: 'sm' },
      icon: { fontSize: '3xs' },
    }),
    md: Wl({
      control: { [Ca.variable]: 'sizes.4' },
      label: { fontSize: 'md' },
      icon: { fontSize: '2xs' },
    }),
    lg: Wl({
      control: { [Ca.variable]: 'sizes.5' },
      label: { fontSize: 'lg' },
      icon: { fontSize: '2xs' },
    }),
  },
  Ru = Vj({ baseStyle: Kj, sizes: qj, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  { defineMultiStyleConfig: Yj, definePartsStyle: Ul } = ge(G$.keys),
  Xj = e => {
    var t
    const r = (t = pt(Ru.baseStyle, e)) == null ? void 0 : t.control
    return {
      ...r,
      borderRadius: 'full',
      _checked: {
        ...(r == null ? void 0 : r._checked),
        _before: {
          content: '""',
          display: 'inline-block',
          pos: 'relative',
          w: '50%',
          h: '50%',
          borderRadius: '50%',
          bg: 'currentColor',
        },
      },
    }
  },
  Qj = Ul(e => {
    var t, r, n, o
    return {
      label: (r = (t = Ru).baseStyle) == null ? void 0 : r.call(t, e).label,
      container: (o = (n = Ru).baseStyle) == null ? void 0 : o.call(n, e).container,
      control: Xj(e),
    }
  }),
  Zj = {
    md: Ul({ control: { w: '4', h: '4' }, label: { fontSize: 'md' } }),
    lg: Ul({ control: { w: '5', h: '5' }, label: { fontSize: 'lg' } }),
    sm: Ul({ control: { width: '3', height: '3' }, label: { fontSize: 'sm' } }),
  },
  Jj = Yj({ baseStyle: Qj, sizes: Zj, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  { defineMultiStyleConfig: eM, definePartsStyle: tM } = ge(K$.keys),
  ml = X('select-bg'),
  J0,
  rM = {
    ...((J0 = ne.baseStyle) == null ? void 0 : J0.field),
    appearance: 'none',
    paddingBottom: '1px',
    lineHeight: 'normal',
    bg: ml.reference,
    [ml.variable]: 'colors.white',
    _dark: { [ml.variable]: 'colors.gray.700' },
    '> option, > optgroup': { bg: ml.reference },
  },
  nM = {
    width: '6',
    height: '100%',
    insetEnd: '2',
    position: 'relative',
    color: 'currentColor',
    fontSize: 'xl',
    _disabled: { opacity: 0.5 },
  },
  oM = tM({ field: rM, icon: nM }),
  vl = { paddingInlineEnd: '8' },
  ey,
  ty,
  ry,
  ny,
  oy,
  iy,
  ay,
  sy,
  iM = {
    lg: {
      ...((ey = ne.sizes) == null ? void 0 : ey.lg),
      field: { ...((ty = ne.sizes) == null ? void 0 : ty.lg.field), ...vl },
    },
    md: {
      ...((ry = ne.sizes) == null ? void 0 : ry.md),
      field: { ...((ny = ne.sizes) == null ? void 0 : ny.md.field), ...vl },
    },
    sm: {
      ...((oy = ne.sizes) == null ? void 0 : oy.sm),
      field: { ...((iy = ne.sizes) == null ? void 0 : iy.sm.field), ...vl },
    },
    xs: {
      ...((ay = ne.sizes) == null ? void 0 : ay.xs),
      field: { ...((sy = ne.sizes) == null ? void 0 : sy.xs.field), ...vl },
      icon: { insetEnd: '1' },
    },
  },
  aM = eM({ baseStyle: oM, sizes: iM, variants: ne.variants, defaultProps: ne.defaultProps }),
  Gd = X('skeleton-start-color'),
  Kd = X('skeleton-end-color'),
  sM = {
    [Gd.variable]: 'colors.gray.100',
    [Kd.variable]: 'colors.gray.400',
    _dark: { [Gd.variable]: 'colors.gray.800', [Kd.variable]: 'colors.gray.600' },
    background: Gd.reference,
    borderColor: Kd.reference,
    opacity: 0.7,
    borderRadius: 'sm',
  },
  lM = { baseStyle: sM },
  qd = X('skip-link-bg'),
  uM = {
    borderRadius: 'md',
    fontWeight: 'semibold',
    _focusVisible: {
      boxShadow: 'outline',
      padding: '4',
      position: 'fixed',
      top: '6',
      insetStart: '6',
      [qd.variable]: 'colors.white',
      _dark: { [qd.variable]: 'colors.gray.700' },
      bg: qd.reference,
    },
  },
  cM = { baseStyle: uM },
  { defineMultiStyleConfig: dM, definePartsStyle: Oc } = ge(q$.keys),
  ns = X('slider-thumb-size'),
  os = X('slider-track-size'),
  an = X('slider-bg'),
  fM = e => {
    const { orientation: t } = e
    return {
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      _disabled: { opacity: 0.6, cursor: 'default', pointerEvents: 'none' },
      ...Lm({ orientation: t, vertical: { h: '100%' }, horizontal: { w: '100%' } }),
    }
  },
  hM = e => ({
    ...Lm({
      orientation: e.orientation,
      horizontal: { h: os.reference },
      vertical: { w: os.reference },
    }),
    overflow: 'hidden',
    borderRadius: 'sm',
    [an.variable]: 'colors.gray.200',
    _dark: { [an.variable]: 'colors.whiteAlpha.200' },
    _disabled: {
      [an.variable]: 'colors.gray.300',
      _dark: { [an.variable]: 'colors.whiteAlpha.300' },
    },
    bg: an.reference,
  }),
  pM = e => {
    const { orientation: t } = e
    return {
      ...Lm({
        orientation: t,
        vertical: {
          left: '50%',
          transform: 'translateX(-50%)',
          _active: { transform: 'translateX(-50%) scale(1.15)' },
        },
        horizontal: {
          top: '50%',
          transform: 'translateY(-50%)',
          _active: { transform: 'translateY(-50%) scale(1.15)' },
        },
      }),
      w: ns.reference,
      h: ns.reference,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      outline: 0,
      zIndex: 1,
      borderRadius: 'full',
      bg: 'white',
      boxShadow: 'base',
      border: '1px solid',
      borderColor: 'transparent',
      transitionProperty: 'transform',
      transitionDuration: 'normal',
      _focusVisible: { boxShadow: 'outline' },
      _disabled: { bg: 'gray.300' },
    }
  },
  mM = e => {
    const { colorScheme: t } = e
    return {
      width: 'inherit',
      height: 'inherit',
      [an.variable]: `colors.${t}.500`,
      _dark: { [an.variable]: `colors.${t}.200` },
      bg: an.reference,
    }
  },
  vM = Oc(e => ({ container: fM(e), track: hM(e), thumb: pM(e), filledTrack: mM(e) })),
  gM = Oc({ container: { [ns.variable]: 'sizes.4', [os.variable]: 'sizes.1' } }),
  yM = Oc({ container: { [ns.variable]: 'sizes.3.5', [os.variable]: 'sizes.1' } }),
  bM = Oc({ container: { [ns.variable]: 'sizes.2.5', [os.variable]: 'sizes.0.5' } }),
  SM = { lg: gM, md: yM, sm: bM },
  xM = dM({ baseStyle: vM, sizes: SM, defaultProps: { size: 'md', colorScheme: 'blue' } }),
  Kn = Ve('spinner-size'),
  wM = { width: [Kn.reference], height: [Kn.reference] },
  kM = {
    xs: { [Kn.variable]: 'sizes.3' },
    sm: { [Kn.variable]: 'sizes.4' },
    md: { [Kn.variable]: 'sizes.6' },
    lg: { [Kn.variable]: 'sizes.8' },
    xl: { [Kn.variable]: 'sizes.12' },
  },
  CM = { baseStyle: wM, sizes: kM, defaultProps: { size: 'md' } },
  { defineMultiStyleConfig: _M, definePartsStyle: aw } = ge(Y$.keys),
  PM = { fontWeight: 'medium' },
  EM = { opacity: 0.8, marginBottom: '2' },
  TM = { verticalAlign: 'baseline', fontWeight: 'semibold' },
  AM = { marginEnd: 1, w: '3.5', h: '3.5', verticalAlign: 'middle' },
  RM = aw({ container: {}, label: PM, helpText: EM, number: TM, icon: AM }),
  $M = {
    md: aw({
      label: { fontSize: 'sm' },
      helpText: { fontSize: 'sm' },
      number: { fontSize: '2xl' },
    }),
  },
  jM = _M({ baseStyle: RM, sizes: $M, defaultProps: { size: 'md' } }),
  Yd = X('kbd-bg'),
  MM = {
    [Yd.variable]: 'colors.gray.100',
    _dark: { [Yd.variable]: 'colors.whiteAlpha.100' },
    bg: Yd.reference,
    borderRadius: 'md',
    borderWidth: '1px',
    borderBottomWidth: '3px',
    fontSize: '0.8em',
    fontWeight: 'bold',
    lineHeight: 'normal',
    px: '0.4em',
    whiteSpace: 'nowrap',
  },
  OM = { baseStyle: MM },
  IM = {
    transitionProperty: 'common',
    transitionDuration: 'fast',
    transitionTimingFunction: 'ease-out',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    color: 'inherit',
    _hover: { textDecoration: 'underline' },
    _focusVisible: { boxShadow: 'outline' },
  },
  FM = { baseStyle: IM },
  { defineMultiStyleConfig: DM, definePartsStyle: NM } = ge(L$.keys),
  zM = { marginEnd: '2', display: 'inline', verticalAlign: 'text-bottom' },
  LM = NM({ icon: zM }),
  BM = DM({ baseStyle: LM }),
  { defineMultiStyleConfig: VM, definePartsStyle: WM } = ge(B$.keys),
  pr = X('menu-bg'),
  Xd = X('menu-shadow'),
  UM = {
    [pr.variable]: '#fff',
    [Xd.variable]: 'shadows.sm',
    _dark: { [pr.variable]: 'colors.gray.700', [Xd.variable]: 'shadows.dark-lg' },
    color: 'inherit',
    minW: '3xs',
    py: '2',
    zIndex: 1,
    borderRadius: 'md',
    borderWidth: '1px',
    bg: pr.reference,
    boxShadow: Xd.reference,
  },
  HM = {
    py: '1.5',
    px: '3',
    transitionProperty: 'background',
    transitionDuration: 'ultra-fast',
    transitionTimingFunction: 'ease-in',
    _focus: { [pr.variable]: 'colors.gray.100', _dark: { [pr.variable]: 'colors.whiteAlpha.100' } },
    _active: {
      [pr.variable]: 'colors.gray.200',
      _dark: { [pr.variable]: 'colors.whiteAlpha.200' },
    },
    _expanded: {
      [pr.variable]: 'colors.gray.100',
      _dark: { [pr.variable]: 'colors.whiteAlpha.100' },
    },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    bg: pr.reference,
  },
  GM = { mx: 4, my: 2, fontWeight: 'semibold', fontSize: 'sm' },
  KM = { opacity: 0.6 },
  qM = { border: 0, borderBottom: '1px solid', borderColor: 'inherit', my: '2', opacity: 0.6 },
  YM = { transitionProperty: 'common', transitionDuration: 'normal' },
  XM = WM({ button: YM, list: UM, item: HM, groupTitle: GM, command: KM, divider: qM }),
  QM = VM({ baseStyle: XM }),
  { defineMultiStyleConfig: ZM, definePartsStyle: Lh } = ge(V$.keys),
  JM = { bg: 'blackAlpha.600', zIndex: 'modal' },
  eO = e => {
    const { isCentered: t, scrollBehavior: r } = e
    return {
      display: 'flex',
      zIndex: 'modal',
      justifyContent: 'center',
      alignItems: t ? 'center' : 'flex-start',
      overflow: r === 'inside' ? 'hidden' : 'auto',
      overscrollBehaviorY: 'none',
    }
  },
  tO = e => {
    const { scrollBehavior: t } = e
    return {
      borderRadius: 'md',
      bg: z('white', 'gray.700')(e),
      color: 'inherit',
      my: '16',
      zIndex: 'modal',
      maxH: t === 'inside' ? 'calc(100% - 7.5rem)' : void 0,
      boxShadow: z('lg', 'dark-lg')(e),
    }
  },
  rO = { px: '6', py: '4', fontSize: 'xl', fontWeight: 'semibold' },
  nO = { position: 'absolute', top: '2', insetEnd: '3' },
  oO = e => {
    const { scrollBehavior: t } = e
    return { px: '6', py: '2', flex: '1', overflow: t === 'inside' ? 'auto' : void 0 }
  },
  iO = { px: '6', py: '4' },
  aO = Lh(e => ({
    overlay: JM,
    dialogContainer: pt(eO, e),
    dialog: pt(tO, e),
    header: rO,
    closeButton: nO,
    body: pt(oO, e),
    footer: iO,
  }))
function Zt(e) {
  return Lh(
    e === 'full'
      ? { dialog: { maxW: '100vw', minH: '$100vh', my: '0', borderRadius: '0' } }
      : { dialog: { maxW: e } }
  )
}
var sO = {
    xs: Zt('xs'),
    sm: Zt('sm'),
    md: Zt('md'),
    lg: Zt('lg'),
    xl: Zt('xl'),
    '2xl': Zt('2xl'),
    '3xl': Zt('3xl'),
    '4xl': Zt('4xl'),
    '5xl': Zt('5xl'),
    '6xl': Zt('6xl'),
    full: Zt('full'),
  },
  lO = ZM({ baseStyle: aO, sizes: sO, defaultProps: { size: 'md' } }),
  { defineMultiStyleConfig: uO, definePartsStyle: sw } = ge(W$.keys),
  Vm = Ve('number-input-stepper-width'),
  lw = Ve('number-input-input-padding'),
  cO = Mr(Vm).add('0.5rem').toString(),
  Qd = Ve('number-input-bg'),
  Zd = Ve('number-input-color'),
  Jd = Ve('number-input-border-color'),
  dO = { [Vm.variable]: 'sizes.6', [lw.variable]: cO },
  fO = e => {
    var t, r
    return (r = (t = pt(ne.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {}
  },
  hO = { width: Vm.reference },
  pO = {
    borderStart: '1px solid',
    borderStartColor: Jd.reference,
    color: Zd.reference,
    bg: Qd.reference,
    [Zd.variable]: 'colors.chakra-body-text',
    [Jd.variable]: 'colors.chakra-border-color',
    _dark: { [Zd.variable]: 'colors.whiteAlpha.800', [Jd.variable]: 'colors.whiteAlpha.300' },
    _active: {
      [Qd.variable]: 'colors.gray.200',
      _dark: { [Qd.variable]: 'colors.whiteAlpha.300' },
    },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
  },
  mO = sw(e => {
    var t
    return { root: dO, field: (t = pt(fO, e)) != null ? t : {}, stepperGroup: hO, stepper: pO }
  })
function gl(e) {
  var t, r, n
  const o = (t = ne.sizes) == null ? void 0 : t[e],
    i = { lg: 'md', md: 'md', sm: 'sm', xs: 'sm' },
    a = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : 'md',
    s = tw.fontSizes[a]
  return sw({
    field: { ...o.field, paddingInlineEnd: lw.reference, verticalAlign: 'top' },
    stepper: {
      fontSize: Mr(s).multiply(0.75).toString(),
      _first: { borderTopEndRadius: i[e] },
      _last: { borderBottomEndRadius: i[e], mt: '-1px', borderTopWidth: 1 },
    },
  })
}
var vO = { xs: gl('xs'), sm: gl('sm'), md: gl('md'), lg: gl('lg') },
  gO = uO({ baseStyle: mO, sizes: vO, variants: ne.variants, defaultProps: ne.defaultProps }),
  ly,
  yO = { ...((ly = ne.baseStyle) == null ? void 0 : ly.field), textAlign: 'center' },
  bO = {
    lg: { fontSize: 'lg', w: 12, h: 12, borderRadius: 'md' },
    md: { fontSize: 'md', w: 10, h: 10, borderRadius: 'md' },
    sm: { fontSize: 'sm', w: 8, h: 8, borderRadius: 'sm' },
    xs: { fontSize: 'xs', w: 6, h: 6, borderRadius: 'sm' },
  },
  uy,
  cy,
  SO = {
    outline: e => {
      var t, r, n
      return (n =
        (r = pt((t = ne.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) !=
        null
        ? n
        : {}
    },
    flushed: e => {
      var t, r, n
      return (n =
        (r = pt((t = ne.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) !=
        null
        ? n
        : {}
    },
    filled: e => {
      var t, r, n
      return (n =
        (r = pt((t = ne.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) !=
        null
        ? n
        : {}
    },
    unstyled: (cy = (uy = ne.variants) == null ? void 0 : uy.unstyled.field) != null ? cy : {},
  },
  xO = { baseStyle: yO, sizes: bO, variants: SO, defaultProps: ne.defaultProps },
  { defineMultiStyleConfig: wO, definePartsStyle: kO } = ge(U$.keys),
  yl = Ve('popper-bg'),
  CO = Ve('popper-arrow-bg'),
  dy = Ve('popper-arrow-shadow-color'),
  _O = { zIndex: 10 },
  PO = {
    [yl.variable]: 'colors.white',
    bg: yl.reference,
    [CO.variable]: yl.reference,
    [dy.variable]: 'colors.gray.200',
    _dark: { [yl.variable]: 'colors.gray.700', [dy.variable]: 'colors.whiteAlpha.300' },
    width: 'xs',
    border: '1px solid',
    borderColor: 'inherit',
    borderRadius: 'md',
    boxShadow: 'sm',
    zIndex: 'inherit',
    _focusVisible: { outline: 0, boxShadow: 'outline' },
  },
  EO = { px: 3, py: 2, borderBottomWidth: '1px' },
  TO = { px: 3, py: 2 },
  AO = { px: 3, py: 2, borderTopWidth: '1px' },
  RO = { position: 'absolute', borderRadius: 'md', top: 1, insetEnd: 2, padding: 2 },
  $O = kO({ popper: _O, content: PO, header: EO, body: TO, footer: AO, closeButton: RO }),
  jO = wO({ baseStyle: $O }),
  { definePartsStyle: Bh, defineMultiStyleConfig: MO } = ge(I$.keys),
  ef = X('drawer-bg'),
  tf = X('drawer-box-shadow')
function To(e) {
  return Bh(e === 'full' ? { dialog: { maxW: '100vw', h: '100vh' } } : { dialog: { maxW: e } })
}
var OO = { bg: 'blackAlpha.600', zIndex: 'overlay' },
  IO = { display: 'flex', zIndex: 'modal', justifyContent: 'center' },
  FO = e => {
    const { isFullHeight: t } = e
    return {
      ...(t && { height: '100vh' }),
      zIndex: 'modal',
      maxH: '100vh',
      color: 'inherit',
      [ef.variable]: 'colors.white',
      [tf.variable]: 'shadows.lg',
      _dark: { [ef.variable]: 'colors.gray.700', [tf.variable]: 'shadows.dark-lg' },
      bg: ef.reference,
      boxShadow: tf.reference,
    }
  },
  DO = { px: '6', py: '4', fontSize: 'xl', fontWeight: 'semibold' },
  NO = { position: 'absolute', top: '2', insetEnd: '3' },
  zO = { px: '6', py: '2', flex: '1', overflow: 'auto' },
  LO = { px: '6', py: '4' },
  BO = Bh(e => ({
    overlay: OO,
    dialogContainer: IO,
    dialog: pt(FO, e),
    header: DO,
    closeButton: NO,
    body: zO,
    footer: LO,
  })),
  VO = { xs: To('xs'), sm: To('md'), md: To('lg'), lg: To('2xl'), xl: To('4xl'), full: To('full') },
  WO = MO({ baseStyle: BO, sizes: VO, defaultProps: { size: 'xs' } }),
  { definePartsStyle: UO, defineMultiStyleConfig: HO } = ge(F$.keys),
  GO = { borderRadius: 'md', py: '1', transitionProperty: 'common', transitionDuration: 'normal' },
  KO = {
    borderRadius: 'md',
    py: '1',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    width: 'full',
    _focusVisible: { boxShadow: 'outline' },
    _placeholder: { opacity: 0.6 },
  },
  qO = {
    borderRadius: 'md',
    py: '1',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    width: 'full',
    _focusVisible: { boxShadow: 'outline' },
    _placeholder: { opacity: 0.6 },
  },
  YO = UO({ preview: GO, input: KO, textarea: qO }),
  XO = HO({ baseStyle: YO }),
  { definePartsStyle: QO, defineMultiStyleConfig: ZO } = ge(D$.keys),
  si = X('form-control-color'),
  JO = {
    marginStart: '1',
    [si.variable]: 'colors.red.500',
    _dark: { [si.variable]: 'colors.red.300' },
    color: si.reference,
  },
  e3 = {
    mt: '2',
    [si.variable]: 'colors.gray.600',
    _dark: { [si.variable]: 'colors.whiteAlpha.600' },
    color: si.reference,
    lineHeight: 'normal',
    fontSize: 'sm',
  },
  t3 = QO({
    container: { width: '100%', position: 'relative' },
    requiredIndicator: JO,
    helperText: e3,
  }),
  r3 = ZO({ baseStyle: t3 }),
  { definePartsStyle: n3, defineMultiStyleConfig: o3 } = ge(N$.keys),
  li = X('form-error-color'),
  i3 = {
    [li.variable]: 'colors.red.500',
    _dark: { [li.variable]: 'colors.red.300' },
    color: li.reference,
    mt: '2',
    fontSize: 'sm',
    lineHeight: 'normal',
  },
  a3 = {
    marginEnd: '0.5em',
    [li.variable]: 'colors.red.500',
    _dark: { [li.variable]: 'colors.red.300' },
    color: li.reference,
  },
  s3 = n3({ text: i3, icon: a3 }),
  l3 = o3({ baseStyle: s3 }),
  u3 = {
    fontSize: 'md',
    marginEnd: '3',
    mb: '2',
    fontWeight: 'medium',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    opacity: 1,
    _disabled: { opacity: 0.4 },
  },
  c3 = { baseStyle: u3 },
  d3 = { fontFamily: 'heading', fontWeight: 'bold' },
  f3 = {
    '4xl': { fontSize: ['6xl', null, '7xl'], lineHeight: 1 },
    '3xl': { fontSize: ['5xl', null, '6xl'], lineHeight: 1 },
    '2xl': { fontSize: ['4xl', null, '5xl'], lineHeight: [1.2, null, 1] },
    xl: { fontSize: ['3xl', null, '4xl'], lineHeight: [1.33, null, 1.2] },
    lg: { fontSize: ['2xl', null, '3xl'], lineHeight: [1.33, null, 1.2] },
    md: { fontSize: 'xl', lineHeight: 1.2 },
    sm: { fontSize: 'md', lineHeight: 1.2 },
    xs: { fontSize: 'sm', lineHeight: 1.2 },
  },
  h3 = { baseStyle: d3, sizes: f3, defaultProps: { size: 'xl' } },
  { defineMultiStyleConfig: p3, definePartsStyle: m3 } = ge(M$.keys),
  v3 = {
    transitionProperty: 'common',
    transitionDuration: 'fast',
    transitionTimingFunction: 'ease-out',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    color: 'inherit',
    _hover: { textDecoration: 'underline' },
    _focusVisible: { boxShadow: 'outline' },
  },
  g3 = m3({ link: v3 }),
  y3 = p3({ baseStyle: g3 }),
  b3 = {
    lineHeight: '1.2',
    borderRadius: 'md',
    fontWeight: 'semibold',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _focusVisible: { boxShadow: 'outline' },
    _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
    _hover: { _disabled: { bg: 'initial' } },
  },
  uw = e => {
    const { colorScheme: t, theme: r } = e
    if (t === 'gray')
      return {
        color: z('inherit', 'whiteAlpha.900')(e),
        _hover: { bg: z('gray.100', 'whiteAlpha.200')(e) },
        _active: { bg: z('gray.200', 'whiteAlpha.300')(e) },
      }
    const n = _i(`${t}.200`, 0.12)(r),
      o = _i(`${t}.200`, 0.24)(r)
    return {
      color: z(`${t}.600`, `${t}.200`)(e),
      bg: 'transparent',
      _hover: { bg: z(`${t}.50`, n)(e) },
      _active: { bg: z(`${t}.100`, o)(e) },
    }
  },
  S3 = e => {
    const { colorScheme: t } = e,
      r = z('gray.200', 'whiteAlpha.300')(e)
    return {
      border: '1px solid',
      borderColor: t === 'gray' ? r : 'currentColor',
      '.chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)': {
        marginEnd: '-1px',
      },
      '.chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)': {
        marginBottom: '-1px',
      },
      ...pt(uw, e),
    }
  },
  x3 = {
    yellow: { bg: 'yellow.400', color: 'black', hoverBg: 'yellow.500', activeBg: 'yellow.600' },
    cyan: { bg: 'cyan.400', color: 'black', hoverBg: 'cyan.500', activeBg: 'cyan.600' },
  },
  w3 = e => {
    var t
    const { colorScheme: r } = e
    if (r === 'gray') {
      const l = z('gray.100', 'whiteAlpha.200')(e)
      return {
        bg: l,
        _hover: { bg: z('gray.200', 'whiteAlpha.300')(e), _disabled: { bg: l } },
        _active: { bg: z('gray.300', 'whiteAlpha.400')(e) },
      }
    }
    const {
        bg: n = `${r}.500`,
        color: o = 'white',
        hoverBg: i = `${r}.600`,
        activeBg: a = `${r}.700`,
      } = (t = x3[r]) != null ? t : {},
      s = z(n, `${r}.200`)(e)
    return {
      bg: s,
      color: z(o, 'gray.800')(e),
      _hover: { bg: z(i, `${r}.300`)(e), _disabled: { bg: s } },
      _active: { bg: z(a, `${r}.400`)(e) },
    }
  },
  k3 = e => {
    const { colorScheme: t } = e
    return {
      padding: 0,
      height: 'auto',
      lineHeight: 'normal',
      verticalAlign: 'baseline',
      color: z(`${t}.500`, `${t}.200`)(e),
      _hover: { textDecoration: 'underline', _disabled: { textDecoration: 'none' } },
      _active: { color: z(`${t}.700`, `${t}.500`)(e) },
    }
  },
  C3 = { bg: 'none', color: 'inherit', display: 'inline', lineHeight: 'inherit', m: '0', p: '0' },
  _3 = { ghost: uw, outline: S3, solid: w3, link: k3, unstyled: C3 },
  P3 = {
    lg: { h: '12', minW: '12', fontSize: 'lg', px: '6' },
    md: { h: '10', minW: '10', fontSize: 'md', px: '4' },
    sm: { h: '8', minW: '8', fontSize: 'sm', px: '3' },
    xs: { h: '6', minW: '6', fontSize: 'xs', px: '2' },
  },
  E3 = {
    baseStyle: b3,
    variants: _3,
    sizes: P3,
    defaultProps: { variant: 'solid', size: 'md', colorScheme: 'gray' },
  },
  { definePartsStyle: no, defineMultiStyleConfig: T3 } = ge(e5.keys),
  $u = X('card-bg'),
  zr = X('card-padding'),
  cw = X('card-shadow'),
  Hl = X('card-radius'),
  dw = X('card-border-width', '0'),
  fw = X('card-border-color'),
  A3 = no({
    container: {
      [$u.variable]: 'colors.chakra-body-bg',
      backgroundColor: $u.reference,
      boxShadow: cw.reference,
      borderRadius: Hl.reference,
      color: 'chakra-body-text',
      borderWidth: dw.reference,
      borderColor: fw.reference,
    },
    body: { padding: zr.reference, flex: '1 1 0%' },
    header: { padding: zr.reference },
    footer: { padding: zr.reference },
  }),
  R3 = {
    sm: no({ container: { [Hl.variable]: 'radii.base', [zr.variable]: 'space.3' } }),
    md: no({ container: { [Hl.variable]: 'radii.md', [zr.variable]: 'space.5' } }),
    lg: no({ container: { [Hl.variable]: 'radii.xl', [zr.variable]: 'space.7' } }),
  },
  $3 = {
    elevated: no({
      container: { [cw.variable]: 'shadows.base', _dark: { [$u.variable]: 'colors.gray.700' } },
    }),
    outline: no({
      container: { [dw.variable]: '1px', [fw.variable]: 'colors.chakra-border-color' },
    }),
    filled: no({ container: { [$u.variable]: 'colors.chakra-subtle-bg' } }),
    unstyled: {
      body: { [zr.variable]: 0 },
      header: { [zr.variable]: 0 },
      footer: { [zr.variable]: 0 },
    },
  },
  j3 = T3({
    baseStyle: A3,
    variants: $3,
    sizes: R3,
    defaultProps: { variant: 'elevated', size: 'md' },
  }),
  _a = Ve('close-button-size'),
  Ji = Ve('close-button-bg'),
  M3 = {
    w: [_a.reference],
    h: [_a.reference],
    borderRadius: 'md',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
    _hover: {
      [Ji.variable]: 'colors.blackAlpha.100',
      _dark: { [Ji.variable]: 'colors.whiteAlpha.100' },
    },
    _active: {
      [Ji.variable]: 'colors.blackAlpha.200',
      _dark: { [Ji.variable]: 'colors.whiteAlpha.200' },
    },
    _focusVisible: { boxShadow: 'outline' },
    bg: Ji.reference,
  },
  O3 = {
    lg: { [_a.variable]: 'sizes.10', fontSize: 'md' },
    md: { [_a.variable]: 'sizes.8', fontSize: 'xs' },
    sm: { [_a.variable]: 'sizes.6', fontSize: '2xs' },
  },
  I3 = { baseStyle: M3, sizes: O3, defaultProps: { size: 'md' } },
  { variants: F3, defaultProps: D3 } = ka,
  N3 = { fontFamily: 'mono', fontSize: 'sm', px: '0.2em', borderRadius: 'sm' },
  z3 = { baseStyle: N3, variants: F3, defaultProps: D3 },
  L3 = { w: '100%', mx: 'auto', maxW: 'prose', px: '4' },
  B3 = { baseStyle: L3 },
  V3 = { opacity: 0.6, borderColor: 'inherit' },
  W3 = { borderStyle: 'solid' },
  U3 = { borderStyle: 'dashed' },
  H3 = { solid: W3, dashed: U3 },
  G3 = { baseStyle: V3, variants: H3, defaultProps: { variant: 'solid' } },
  { definePartsStyle: K3, defineMultiStyleConfig: q3 } = ge(R$.keys),
  Y3 = { borderTopWidth: '1px', borderColor: 'inherit', _last: { borderBottomWidth: '1px' } },
  X3 = {
    transitionProperty: 'common',
    transitionDuration: 'normal',
    fontSize: 'md',
    _focusVisible: { boxShadow: 'outline' },
    _hover: { bg: 'blackAlpha.50' },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    px: '4',
    py: '2',
  },
  Q3 = { pt: '2', px: '4', pb: '5' },
  Z3 = { fontSize: '1.25em' },
  J3 = K3({ container: Y3, button: X3, panel: Q3, icon: Z3 }),
  eI = q3({ baseStyle: J3 }),
  { definePartsStyle: ks, defineMultiStyleConfig: tI } = ge($$.keys),
  $t = X('alert-fg'),
  Hr = X('alert-bg'),
  rI = ks({
    container: { bg: Hr.reference, px: '4', py: '3' },
    title: { fontWeight: 'bold', lineHeight: '6', marginEnd: '2' },
    description: { lineHeight: '6' },
    icon: { color: $t.reference, flexShrink: 0, marginEnd: '3', w: '5', h: '6' },
    spinner: { color: $t.reference, flexShrink: 0, marginEnd: '3', w: '5', h: '5' },
  })
function Wm(e) {
  const { theme: t, colorScheme: r } = e,
    n = _i(`${r}.200`, 0.16)(t)
  return { light: `colors.${r}.100`, dark: n }
}
var nI = ks(e => {
    const { colorScheme: t } = e,
      r = Wm(e)
    return {
      container: {
        [$t.variable]: `colors.${t}.500`,
        [Hr.variable]: r.light,
        _dark: { [$t.variable]: `colors.${t}.200`, [Hr.variable]: r.dark },
      },
    }
  }),
  oI = ks(e => {
    const { colorScheme: t } = e,
      r = Wm(e)
    return {
      container: {
        [$t.variable]: `colors.${t}.500`,
        [Hr.variable]: r.light,
        _dark: { [$t.variable]: `colors.${t}.200`, [Hr.variable]: r.dark },
        paddingStart: '3',
        borderStartWidth: '4px',
        borderStartColor: $t.reference,
      },
    }
  }),
  iI = ks(e => {
    const { colorScheme: t } = e,
      r = Wm(e)
    return {
      container: {
        [$t.variable]: `colors.${t}.500`,
        [Hr.variable]: r.light,
        _dark: { [$t.variable]: `colors.${t}.200`, [Hr.variable]: r.dark },
        pt: '2',
        borderTopWidth: '4px',
        borderTopColor: $t.reference,
      },
    }
  }),
  aI = ks(e => {
    const { colorScheme: t } = e
    return {
      container: {
        [$t.variable]: 'colors.white',
        [Hr.variable]: `colors.${t}.500`,
        _dark: { [$t.variable]: 'colors.gray.900', [Hr.variable]: `colors.${t}.200` },
        color: $t.reference,
      },
    }
  }),
  sI = { subtle: nI, 'left-accent': oI, 'top-accent': iI, solid: aI },
  lI = tI({
    baseStyle: rI,
    variants: sI,
    defaultProps: { variant: 'subtle', colorScheme: 'blue' },
  }),
  { definePartsStyle: hw, defineMultiStyleConfig: uI } = ge(j$.keys),
  ui = X('avatar-border-color'),
  rf = X('avatar-bg'),
  cI = {
    borderRadius: 'full',
    border: '0.2em solid',
    [ui.variable]: 'white',
    _dark: { [ui.variable]: 'colors.gray.800' },
    borderColor: ui.reference,
  },
  dI = {
    [rf.variable]: 'colors.gray.200',
    _dark: { [rf.variable]: 'colors.whiteAlpha.400' },
    bgColor: rf.reference,
  },
  fy = X('avatar-background'),
  fI = e => {
    const { name: t, theme: r } = e,
      n = t ? S5({ string: t }) : 'colors.gray.400',
      o = y5(n)(r)
    let i = 'white'
    return (
      o || (i = 'gray.800'),
      {
        bg: fy.reference,
        '&:not([data-loaded])': { [fy.variable]: n },
        color: i,
        [ui.variable]: 'colors.white',
        _dark: { [ui.variable]: 'colors.gray.800' },
        borderColor: ui.reference,
        verticalAlign: 'top',
      }
    )
  },
  hI = hw(e => ({ badge: pt(cI, e), excessLabel: pt(dI, e), container: pt(fI, e) }))
function Zr(e) {
  const t = e !== '100%' ? nw[e] : void 0
  return hw({
    container: { width: e, height: e, fontSize: `calc(${t ?? e} / 2.5)` },
    excessLabel: { width: e, height: e },
    label: { fontSize: `calc(${t ?? e} / 2.5)`, lineHeight: e !== '100%' ? t ?? e : void 0 },
  })
}
var pI = {
    '2xs': Zr(4),
    xs: Zr(6),
    sm: Zr(8),
    md: Zr(12),
    lg: Zr(16),
    xl: Zr(24),
    '2xl': Zr(32),
    full: Zr('100%'),
  },
  mI = uI({ baseStyle: hI, sizes: pI, defaultProps: { size: 'md' } }),
  vI = {
    Accordion: eI,
    Alert: lI,
    Avatar: mI,
    Badge: ka,
    Breadcrumb: y3,
    Button: E3,
    Checkbox: Ru,
    CloseButton: I3,
    Code: z3,
    Container: B3,
    Divider: G3,
    Drawer: WO,
    Editable: XO,
    Form: r3,
    FormError: l3,
    FormLabel: c3,
    Heading: h3,
    Input: ne,
    Kbd: OM,
    Link: FM,
    List: BM,
    Menu: QM,
    Modal: lO,
    NumberInput: gO,
    PinInput: xO,
    Popover: jO,
    Progress: Lj,
    Radio: Jj,
    Select: aM,
    Skeleton: lM,
    SkipLink: cM,
    Slider: xM,
    Spinner: CM,
    Stat: jM,
    Switch: F5,
    Table: W5,
    Tabs: oj,
    Tag: gj,
    Textarea: Aj,
    Tooltip: jj,
    Card: j3,
  },
  gI = {
    colors: {
      'chakra-body-text': { _light: 'gray.800', _dark: 'whiteAlpha.900' },
      'chakra-body-bg': { _light: 'white', _dark: 'gray.800' },
      'chakra-border-color': { _light: 'gray.200', _dark: 'whiteAlpha.300' },
      'chakra-subtle-bg': { _light: 'gray.100', _dark: 'gray.700' },
      'chakra-placeholder-color': { _light: 'gray.500', _dark: 'whiteAlpha.400' },
    },
  },
  yI = {
    global: {
      body: {
        fontFamily: 'body',
        color: 'chakra-body-text',
        bg: 'chakra-body-bg',
        transitionProperty: 'background-color',
        transitionDuration: 'normal',
        lineHeight: 'base',
      },
      '*::placeholder': { color: 'chakra-placeholder-color' },
      '*, *::before, &::after': { borderColor: 'chakra-border-color', wordWrap: 'break-word' },
    },
  },
  bI = 'ltr',
  SI = { useSystemColorMode: !1, initialColorMode: 'light', cssVarPrefix: 'chakra' },
  pw = { semanticTokens: gI, direction: bI, ...A$, components: vI, styles: yI, config: SI }
function ua(e) {
  return typeof e == 'function'
}
function xI(...e) {
  return t => e.reduce((r, n) => n(r), t)
}
var wI = e =>
    function (...r) {
      let n = [...r],
        o = r[r.length - 1]
      return (
        i$(o) && n.length > 1 ? (n = n.slice(0, n.length - 1)) : (o = e),
        xI(...n.map(i => a => ua(i) ? i(a) : CI(a, i)))(o)
      )
    },
  kI = wI(pw)
function CI(...e) {
  return Ut({}, ...e, mw)
}
function mw(e, t, r, n) {
  if ((ua(e) || ua(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...o) => {
      const i = ua(e) ? e(...o) : e,
        a = ua(t) ? t(...o) : t
      return Ut({}, i, a, mw)
    }
}
function _I() {
  return !!(typeof window < 'u' && window.document && window.document.createElement)
}
var PI = _I()
function EI(e, t) {
  const r = {}
  return (
    Object.keys(e).forEach(n => {
      t.includes(n) || (r[n] = e[n])
    }),
    r
  )
}
function TI(e, t, r, n) {
  const o = typeof t == 'string' ? t.split('.') : [t]
  for (n = 0; n < o.length && e; n += 1) e = e[o[n]]
  return e === void 0 ? r : e
}
var AI = e => {
    const t = new WeakMap()
    return (n, o, i, a) => {
      if (typeof n > 'u') return e(n, o, i)
      t.has(n) || t.set(n, new Map())
      const s = t.get(n)
      if (s.has(o)) return s.get(o)
      const l = e(n, o, i, a)
      return s.set(o, l), l
    }
  },
  vw = AI(TI)
function gw(e, t) {
  const r = {}
  return (
    Object.keys(e).forEach(n => {
      const o = e[n]
      t(o, n, e) && (r[n] = o)
    }),
    r
  )
}
var yw = e => gw(e, t => t != null)
function RI(e) {
  return typeof e == 'function'
}
function bw(e, ...t) {
  return RI(e) ? e(...t) : e
}
function $I(...e) {
  return function (r) {
    e.some(n => (n == null || n(r), r == null ? void 0 : r.defaultPrevented))
  }
}
var jI = typeof Element < 'u',
  MI = typeof Map == 'function',
  OI = typeof Set == 'function',
  II = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView
function Gl(e, t) {
  if (e === t) return !0
  if (e && t && typeof e == 'object' && typeof t == 'object') {
    if (e.constructor !== t.constructor) return !1
    var r, n, o
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1
      for (n = r; n-- !== 0; ) if (!Gl(e[n], t[n])) return !1
      return !0
    }
    var i
    if (MI && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1
      for (i = e.entries(); !(n = i.next()).done; ) if (!t.has(n.value[0])) return !1
      for (i = e.entries(); !(n = i.next()).done; )
        if (!Gl(n.value[1], t.get(n.value[0]))) return !1
      return !0
    }
    if (OI && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1
      for (i = e.entries(); !(n = i.next()).done; ) if (!t.has(n.value[0])) return !1
      return !0
    }
    if (II && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((r = e.length), r != t.length)) return !1
      for (n = r; n-- !== 0; ) if (e[n] !== t[n]) return !1
      return !0
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags
    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf()
    if (e.toString !== Object.prototype.toString) return e.toString() === t.toString()
    if (((o = Object.keys(e)), (r = o.length), r !== Object.keys(t).length)) return !1
    for (n = r; n-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1
    if (jI && e instanceof Element) return !1
    for (n = r; n-- !== 0; )
      if (
        !((o[n] === '_owner' || o[n] === '__v' || o[n] === '__o') && e.$$typeof) &&
        !Gl(e[o[n]], t[o[n]])
      )
        return !1
    return !0
  }
  return e !== e && t !== t
}
var FI = function (t, r) {
  try {
    return Gl(t, r)
  } catch (n) {
    if ((n.message || '').match(/stack|recursion/i))
      return console.warn('react-fast-compare cannot handle circular refs'), !1
    throw n
  }
}
function Sw(e, t = {}) {
  var r
  const { styleConfig: n, ...o } = t,
    { theme: i, colorMode: a } = DA(),
    s = e ? vw(i, `components.${e}`) : void 0,
    l = n || s,
    u = Ut(
      { theme: i, colorMode: a },
      (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
      yw(EI(o, ['children']))
    ),
    c = y.useRef({})
  if (l) {
    const f = n$(l)(u)
    FI(c.current, f) || (c.current = f)
  }
  return c.current
}
function sr(e, t = {}) {
  return Sw(e, t)
}
function In(e, t = {}) {
  return Sw(e, t)
}
var DI = new Set([
    ...HR,
    'textStyle',
    'layerStyle',
    'apply',
    'noOfLines',
    'focusBorderColor',
    'errorBorderColor',
    'as',
    '__css',
    'css',
    'sx',
  ]),
  NI = new Set(['htmlWidth', 'htmlHeight', 'htmlSize', 'htmlTranslate'])
function zI(e) {
  return NI.has(e) || !DI.has(e)
}
function xw(e) {
  const t = Object.assign({}, e)
  for (let r in t) t[r] === void 0 && delete t[r]
  return t
}
function LI(e, ...t) {
  if (e == null) throw new TypeError('Cannot convert undefined or null to object')
  const r = { ...e }
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], (r[o] = n[o]))
  return r
}
var BI =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  VI = Rx(function (e) {
    return (
      BI.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
    )
  }),
  WI = VI,
  UI = function (t) {
    return t !== 'theme'
  },
  hy = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? WI : UI
  },
  py = function (t, r, n) {
    var o
    if (r) {
      var i = r.shouldForwardProp
      o =
        t.__emotion_forwardProp && i
          ? function (a) {
              return t.__emotion_forwardProp(a) && i(a)
            }
          : i
    }
    return typeof o != 'function' && n && (o = t.__emotion_forwardProp), o
  },
  HI = function (t) {
    var r = t.cache,
      n = t.serialized,
      o = t.isStringTag
    return (
      Ix(r, n, o),
      yA(function () {
        return Fx(r, n, o)
      }),
      null
    )
  },
  GI = function e(t, r) {
    var n = t.__emotion_real === t,
      o = (n && t.__emotion_base) || t,
      i,
      a
    r !== void 0 && ((i = r.label), (a = r.target))
    var s = py(t, r, n),
      l = s || hy(o),
      u = !l('as')
    return function () {
      var c = arguments,
        d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : []
      if ((i !== void 0 && d.push('label:' + i + ';'), c[0] == null || c[0].raw === void 0))
        d.push.apply(d, c)
      else {
        d.push(c[0][0])
        for (var f = c.length, h = 1; h < f; h++) d.push(c[h], c[0][h])
      }
      var m = Lx(function (p, S, g) {
        var v = (u && p.as) || o,
          b = '',
          k = [],
          C = p
        if (p.theme == null) {
          C = {}
          for (var R in p) C[R] = p[R]
          C.theme = y.useContext(es)
        }
        typeof p.className == 'string'
          ? (b = dA(S.registered, k, p.className))
          : p.className != null && (b = p.className + ' ')
        var E = $m(d.concat(k), S.registered, C)
        ;(b += S.key + '-' + E.name), a !== void 0 && (b += ' ' + a)
        var T = u && s === void 0 ? hy(v) : l,
          M = {}
        for (var j in p) (u && j === 'as') || (T(j) && (M[j] = p[j]))
        return (
          (M.className = b),
          (M.ref = g),
          y.createElement(
            y.Fragment,
            null,
            y.createElement(HI, { cache: S, serialized: E, isStringTag: typeof v == 'string' }),
            y.createElement(v, M)
          )
        )
      })
      return (
        (m.displayName =
          i !== void 0
            ? i
            : 'Styled(' +
              (typeof o == 'string' ? o : o.displayName || o.name || 'Component') +
              ')'),
        (m.defaultProps = t.defaultProps),
        (m.__emotion_real = m),
        (m.__emotion_base = o),
        (m.__emotion_styles = d),
        (m.__emotion_forwardProp = s),
        Object.defineProperty(m, 'toString', {
          value: function () {
            return '.' + a
          },
        }),
        (m.withComponent = function (p, S) {
          return e(p, po({}, r, S, { shouldForwardProp: py(m, S, !0) })).apply(void 0, d)
        }),
        m
      )
    }
  },
  KI = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  ju = GI.bind()
KI.forEach(function (e) {
  ju[e] = ju(e)
})
var my,
  qI = (my = ju.default) != null ? my : ju,
  YI =
    ({ baseStyle: e }) =>
    t => {
      const { theme: r, css: n, __css: o, sx: i, ...a } = t,
        s = gw(a, (d, f) => KR(f)),
        l = bw(e, t),
        u = LI({}, o, l, yw(s), i),
        c = ew(u)(t.theme)
      return n ? [c, n] : c
    }
function nf(e, t) {
  const { baseStyle: r, ...n } = t ?? {}
  n.shouldForwardProp || (n.shouldForwardProp = zI)
  const o = YI({ baseStyle: r }),
    i = qI(e, n)(o)
  return so.forwardRef(function (l, u) {
    const { colorMode: c, forced: d } = Im()
    return so.createElement(i, { ref: u, 'data-theme': d ? c : void 0, ...l })
  })
}
function XI() {
  const e = new Map()
  return new Proxy(nf, {
    apply(t, r, n) {
      return nf(...n)
    },
    get(t, r) {
      return e.has(r) || e.set(r, nf(r)), e.get(r)
    },
  })
}
var D = XI()
function H(e) {
  return y.forwardRef(e)
}
function ww(e = {}) {
  const {
      strict: t = !0,
      errorMessage:
        r = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
      name: n,
    } = e,
    o = y.createContext(void 0)
  o.displayName = n
  function i() {
    var a
    const s = y.useContext(o)
    if (!s && t) {
      const l = new Error(r)
      throw (
        ((l.name = 'ContextError'), (a = Error.captureStackTrace) == null || a.call(Error, l, i), l)
      )
    }
    return s
  }
  return [o.Provider, i, o]
}
function QI(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e,
    o = y.useMemo(() => WR(r), [r])
  return x.jsxs(xA, { theme: o, children: [x.jsx(ZI, { root: t }), n] })
}
function ZI({ root: e = ':host, :root' }) {
  const t = [e, '[data-theme]'].join(',')
  return x.jsx(Rc, { styles: r => ({ [t]: r.__cssVars }) })
}
ww({
  name: 'StylesContext',
  errorMessage:
    'useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ',
})
function JI(e) {
  return ww({
    name: `${e}StylesContext`,
    errorMessage: `useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${e} />" `,
  })
}
function eF() {
  const { colorMode: e } = Im()
  return x.jsx(Rc, {
    styles: t => {
      const r = vw(t, 'styles.global'),
        n = bw(r, { theme: t, colorMode: e })
      return n ? ew(n)(t) : void 0
    },
  })
}
var kw = y.createContext({
  getDocument() {
    return document
  },
  getWindow() {
    return window
  },
})
kw.displayName = 'EnvironmentContext'
function Cw(e) {
  const { children: t, environment: r, disabled: n } = e,
    o = y.useRef(null),
    i = y.useMemo(
      () =>
        r || {
          getDocument: () => {
            var s, l
            return (l = (s = o.current) == null ? void 0 : s.ownerDocument) != null ? l : document
          },
          getWindow: () => {
            var s, l
            return (l = (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) != null
              ? l
              : window
          },
        },
      [r]
    ),
    a = !n || !r
  return x.jsxs(kw.Provider, {
    value: i,
    children: [t, a && x.jsx('span', { id: '__chakra_env', hidden: !0, ref: o })],
  })
}
Cw.displayName = 'EnvironmentProvider'
var tF = e => {
    const {
        children: t,
        colorModeManager: r,
        portalZIndex: n,
        resetCSS: o = !0,
        theme: i = {},
        environment: a,
        cssVarsRoot: s,
        disableEnvironment: l,
      } = e,
      u = x.jsx(Cw, { environment: a, disabled: l, children: t })
    return x.jsx(QI, {
      theme: i,
      cssVarsRoot: s,
      children: x.jsxs(Hx, {
        colorModeManager: r,
        options: i.config,
        children: [
          o ? x.jsx(CA, {}) : x.jsx(kA, {}),
          x.jsx(eF, {}),
          n ? x.jsx(Vx, { zIndex: n, children: u }) : u,
        ],
      }),
    })
  },
  rF = (e, t) => e.find(r => r.id === t)
function vy(e, t) {
  const r = _w(e, t),
    n = r ? e[r].findIndex(o => o.id === t) : -1
  return { position: r, index: n }
}
function _w(e, t) {
  for (const [r, n] of Object.entries(e)) if (rF(n, t)) return r
}
function nF(e) {
  const t = e.includes('right'),
    r = e.includes('left')
  let n = 'center'
  return (
    t && (n = 'flex-end'),
    r && (n = 'flex-start'),
    { display: 'flex', flexDirection: 'column', alignItems: n }
  )
}
function oF(e) {
  const r = e === 'top' || e === 'bottom' ? '0 auto' : void 0,
    n = e.includes('top') ? 'env(safe-area-inset-top, 0px)' : void 0,
    o = e.includes('bottom') ? 'env(safe-area-inset-bottom, 0px)' : void 0,
    i = e.includes('left') ? void 0 : 'env(safe-area-inset-right, 0px)',
    a = e.includes('right') ? void 0 : 'env(safe-area-inset-left, 0px)'
  return {
    position: 'fixed',
    zIndex: 5500,
    pointerEvents: 'none',
    display: 'flex',
    flexDirection: 'column',
    margin: r,
    top: n,
    bottom: o,
    right: i,
    left: a,
  }
}
function iF(e, t = []) {
  const r = y.useRef(e)
  return (
    y.useEffect(() => {
      r.current = e
    }),
    y.useCallback((...n) => {
      var o
      return (o = r.current) == null ? void 0 : o.call(r, ...n)
    }, t)
  )
}
function aF(e, t) {
  const r = iF(e)
  y.useEffect(() => {
    if (t == null) return
    let n = null
    return (
      (n = window.setTimeout(() => {
        r()
      }, t)),
      () => {
        n && window.clearTimeout(n)
      }
    )
  }, [t, r])
}
function gy(e, t) {
  const r = y.useRef(!1),
    n = y.useRef(!1)
  y.useEffect(() => {
    if (r.current && n.current) return e()
    n.current = !0
  }, t),
    y.useEffect(
      () => (
        (r.current = !0),
        () => {
          r.current = !1
        }
      ),
      []
    )
}
const Pw = y.createContext({ transformPagePoint: e => e, isStatic: !1, reducedMotion: 'never' }),
  Ic = y.createContext({}),
  Cs = y.createContext(null),
  Fc = typeof document < 'u',
  Mu = Fc ? y.useLayoutEffect : y.useEffect,
  Ew = y.createContext({ strict: !1 })
function sF(e, t, r, n) {
  const { visualElement: o } = y.useContext(Ic),
    i = y.useContext(Ew),
    a = y.useContext(Cs),
    s = y.useContext(Pw).reducedMotion,
    l = y.useRef()
  ;(n = n || i.renderer),
    !l.current &&
      n &&
      (l.current = n(e, {
        visualState: t,
        parent: o,
        props: r,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: s,
      }))
  const u = l.current
  return (
    y.useInsertionEffect(() => {
      u && u.update(r, a)
    }),
    Mu(() => {
      u && u.render()
    }),
    y.useEffect(() => {
      u && u.updateFeatures()
    }),
    (window.HandoffAppearAnimations ? Mu : y.useEffect)(() => {
      u && u.animationState && u.animationState.animateChanges()
    }),
    u
  )
}
function Ko(e) {
  return typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current')
}
function lF(e, t, r) {
  return y.useCallback(
    n => {
      n && e.mount && e.mount(n),
        t && (n ? t.mount(n) : t.unmount()),
        r && (typeof r == 'function' ? r(n) : Ko(r) && (r.current = n))
    },
    [t]
  )
}
function is(e) {
  return typeof e == 'string' || Array.isArray(e)
}
function Dc(e) {
  return typeof e == 'object' && typeof e.start == 'function'
}
const Um = ['animate', 'whileInView', 'whileFocus', 'whileHover', 'whileTap', 'whileDrag', 'exit'],
  Hm = ['initial', ...Um]
function Nc(e) {
  return Dc(e.animate) || Hm.some(t => is(e[t]))
}
function Tw(e) {
  return !!(Nc(e) || e.variants)
}
function uF(e, t) {
  if (Nc(e)) {
    const { initial: r, animate: n } = e
    return { initial: r === !1 || is(r) ? r : void 0, animate: is(n) ? n : void 0 }
  }
  return e.inherit !== !1 ? t : {}
}
function cF(e) {
  const { initial: t, animate: r } = uF(e, y.useContext(Ic))
  return y.useMemo(() => ({ initial: t, animate: r }), [yy(t), yy(r)])
}
function yy(e) {
  return Array.isArray(e) ? e.join(' ') : e
}
const by = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag',
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId'],
  },
  as = {}
for (const e in by) as[e] = { isEnabled: t => by[e].some(r => !!t[r]) }
function dF(e) {
  for (const t in e) as[t] = { ...as[t], ...e[t] }
}
function Gm(e) {
  const t = y.useRef(null)
  return t.current === null && (t.current = e()), t.current
}
const Pa = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }
let fF = 1
function hF() {
  return Gm(() => {
    if (Pa.hasEverUpdated) return fF++
  })
}
const Km = y.createContext({}),
  Aw = y.createContext({}),
  pF = Symbol.for('motionComponentSymbol')
function mF({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: r,
  useVisualState: n,
  Component: o,
}) {
  e && dF(e)
  function i(s, l) {
    let u
    const c = { ...y.useContext(Pw), ...s, layoutId: vF(s) },
      { isStatic: d } = c,
      f = cF(s),
      h = d ? void 0 : hF(),
      m = n(s, d)
    if (!d && Fc) {
      f.visualElement = sF(o, m, c, t)
      const p = y.useContext(Aw),
        S = y.useContext(Ew).strict
      f.visualElement && (u = f.visualElement.loadFeatures(c, S, e, h, p))
    }
    return y.createElement(
      Ic.Provider,
      { value: f },
      u && f.visualElement ? y.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      r(o, s, h, lF(m, f.visualElement, l), m, d, f.visualElement)
    )
  }
  const a = y.forwardRef(i)
  return (a[pF] = o), a
}
function vF({ layoutId: e }) {
  const t = y.useContext(Km).id
  return t && e !== void 0 ? t + '-' + e : e
}
function gF(e) {
  function t(n, o = {}) {
    return mF(e(n, o))
  }
  if (typeof Proxy > 'u') return t
  const r = new Map()
  return new Proxy(t, { get: (n, o) => (r.has(o) || r.set(o, t(o)), r.get(o)) })
}
const yF = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view',
]
function qm(e) {
  return typeof e != 'string' || e.includes('-') ? !1 : !!(yF.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const Ou = {}
function bF(e) {
  Object.assign(Ou, e)
}
const zc = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
  ],
  wo = new Set(zc)
function Rw(e, { layout: t, layoutId: r }) {
  return (
    wo.has(e) || e.startsWith('origin') || ((t || r !== void 0) && (!!Ou[e] || e === 'opacity'))
  )
}
const Ct = e => !!(e && e.getVelocity),
  SF = { x: 'translateX', y: 'translateY', z: 'translateZ', transformPerspective: 'perspective' },
  xF = zc.length
function wF(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let i = ''
  for (let a = 0; a < xF; a++) {
    const s = zc[a]
    if (e[s] !== void 0) {
      const l = SF[s] || s
      i += `${l}(${e[s]}) `
    }
  }
  return (
    t && !e.z && (i += 'translateZ(0)'),
    (i = i.trim()),
    o ? (i = o(e, n ? '' : i)) : r && n && (i = 'none'),
    i
  )
}
const $w = e => t => typeof t == 'string' && t.startsWith(e),
  jw = $w('--'),
  Vh = $w('var(--'),
  kF = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
  mo = (e, t, r) => Math.min(Math.max(r, e), t),
  ko = { test: e => typeof e == 'number', parse: parseFloat, transform: e => e },
  Ea = { ...ko, transform: e => mo(0, 1, e) },
  bl = { ...ko, default: 1 },
  Ta = e => Math.round(e * 1e5) / 1e5,
  ss = /(-)?([\d]*\.?[\d])+/g,
  Wh =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  CF =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i
function _s(e) {
  return typeof e == 'string'
}
const Ps = e => ({
    test: t => _s(t) && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`,
  }),
  Jr = Ps('deg'),
  Cr = Ps('%'),
  B = Ps('px'),
  _F = Ps('vh'),
  PF = Ps('vw'),
  Sy = { ...Cr, parse: e => Cr.parse(e) / 100, transform: e => Cr.transform(e * 100) },
  xy = { ...ko, transform: Math.round },
  Mw = {
    borderWidth: B,
    borderTopWidth: B,
    borderRightWidth: B,
    borderBottomWidth: B,
    borderLeftWidth: B,
    borderRadius: B,
    radius: B,
    borderTopLeftRadius: B,
    borderTopRightRadius: B,
    borderBottomRightRadius: B,
    borderBottomLeftRadius: B,
    width: B,
    maxWidth: B,
    height: B,
    maxHeight: B,
    size: B,
    top: B,
    right: B,
    bottom: B,
    left: B,
    padding: B,
    paddingTop: B,
    paddingRight: B,
    paddingBottom: B,
    paddingLeft: B,
    margin: B,
    marginTop: B,
    marginRight: B,
    marginBottom: B,
    marginLeft: B,
    rotate: Jr,
    rotateX: Jr,
    rotateY: Jr,
    rotateZ: Jr,
    scale: bl,
    scaleX: bl,
    scaleY: bl,
    scaleZ: bl,
    skew: Jr,
    skewX: Jr,
    skewY: Jr,
    distance: B,
    translateX: B,
    translateY: B,
    translateZ: B,
    x: B,
    y: B,
    z: B,
    perspective: B,
    transformPerspective: B,
    opacity: Ea,
    originX: Sy,
    originY: Sy,
    originZ: B,
    zIndex: xy,
    fillOpacity: Ea,
    strokeOpacity: Ea,
    numOctaves: xy,
  }
function Ym(e, t, r, n) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e
  let l = !1,
    u = !1,
    c = !0
  for (const d in t) {
    const f = t[d]
    if (jw(d)) {
      i[d] = f
      continue
    }
    const h = Mw[d],
      m = kF(f, h)
    if (wo.has(d)) {
      if (((l = !0), (a[d] = m), !c)) continue
      f !== (h.default || 0) && (c = !1)
    } else d.startsWith('origin') ? ((u = !0), (s[d] = m)) : (o[d] = m)
  }
  if (
    (t.transform ||
      (l || n ? (o.transform = wF(e.transform, r, c, n)) : o.transform && (o.transform = 'none')),
    u)
  ) {
    const { originX: d = '50%', originY: f = '50%', originZ: h = 0 } = s
    o.transformOrigin = `${d} ${f} ${h}`
  }
}
const Xm = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} })
function Ow(e, t, r) {
  for (const n in t) !Ct(t[n]) && !Rw(n, r) && (e[n] = t[n])
}
function EF({ transformTemplate: e }, t, r) {
  return y.useMemo(() => {
    const n = Xm()
    return Ym(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style)
  }, [t])
}
function TF(e, t, r) {
  const n = e.style || {},
    o = {}
  return Ow(o, n, e), Object.assign(o, EF(e, t, r)), e.transformValues ? e.transformValues(o) : o
}
function AF(e, t, r) {
  const n = {},
    o = TF(e, t, r)
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = 'none'),
      (o.touchAction = e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    (n.style = o),
    n
  )
}
const RF = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'transformValues',
  'custom',
  'inherit',
  'onLayoutAnimationStart',
  'onLayoutAnimationComplete',
  'onLayoutMeasure',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'ignoreStrict',
  'viewport',
])
function Iu(e) {
  return (
    e.startsWith('while') ||
    (e.startsWith('drag') && e !== 'draggable') ||
    e.startsWith('layout') ||
    e.startsWith('onTap') ||
    e.startsWith('onPan') ||
    RF.has(e)
  )
}
let Iw = e => !Iu(e)
function $F(e) {
  e && (Iw = t => (t.startsWith('on') ? !Iu(t) : e(t)))
}
try {
  $F(require('@emotion/is-prop-valid').default)
} catch {}
function jF(e, t, r) {
  const n = {}
  for (const o in e)
    (o === 'values' && typeof e.values == 'object') ||
      ((Iw(o) ||
        (r === !0 && Iu(o)) ||
        (!t && !Iu(o)) ||
        (e.draggable && o.startsWith('onDrag'))) &&
        (n[o] = e[o]))
  return n
}
function wy(e, t, r) {
  return typeof e == 'string' ? e : B.transform(t + r * e)
}
function MF(e, t, r) {
  const n = wy(t, e.x, e.width),
    o = wy(r, e.y, e.height)
  return `${n} ${o}`
}
const OF = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  IF = { offset: 'strokeDashoffset', array: 'strokeDasharray' }
function FF(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1
  const i = o ? OF : IF
  e[i.offset] = B.transform(-n)
  const a = B.transform(t),
    s = B.transform(r)
  e[i.array] = `${a} ${s}`
}
function Qm(
  e,
  {
    attrX: t,
    attrY: r,
    originX: n,
    originY: o,
    pathLength: i,
    pathSpacing: a = 1,
    pathOffset: s = 0,
    ...l
  },
  u,
  c,
  d
) {
  if ((Ym(e, l, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox)
    return
  }
  ;(e.attrs = e.style), (e.style = {})
  const { attrs: f, style: h, dimensions: m } = e
  f.transform && (m && (h.transform = f.transform), delete f.transform),
    m &&
      (n !== void 0 || o !== void 0 || h.transform) &&
      (h.transformOrigin = MF(m, n !== void 0 ? n : 0.5, o !== void 0 ? o : 0.5)),
    t !== void 0 && (f.x = t),
    r !== void 0 && (f.y = r),
    i !== void 0 && FF(f, i, a, s, !1)
}
const Fw = () => ({ ...Xm(), attrs: {} }),
  Zm = e => typeof e == 'string' && e.toLowerCase() === 'svg'
function DF(e, t, r, n) {
  const o = y.useMemo(() => {
    const i = Fw()
    return (
      Qm(i, t, { enableHardwareAcceleration: !1 }, Zm(n), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    )
  }, [t])
  if (e.style) {
    const i = {}
    Ow(i, e.style, e), (o.style = { ...i, ...o.style })
  }
  return o
}
function NF(e = !1) {
  return (r, n, o, i, { latestValues: a }, s) => {
    const u = (qm(r) ? DF : AF)(n, a, s, r),
      d = { ...jF(n, typeof r == 'string', e), ...u, ref: i },
      { children: f } = n,
      h = y.useMemo(() => (Ct(f) ? f.get() : f), [f])
    return o && (d['data-projection-id'] = o), y.createElement(r, { ...d, children: h })
  }
}
const Jm = e => e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
function Dw(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n))
  for (const i in r) e.style.setProperty(i, r[i])
}
const Nw = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust',
])
function zw(e, t, r, n) {
  Dw(e, t, void 0, n)
  for (const o in t.attrs) e.setAttribute(Nw.has(o) ? o : Jm(o), t.attrs[o])
}
function ev(e, t) {
  const { style: r } = e,
    n = {}
  for (const o in r) (Ct(r[o]) || (t.style && Ct(t.style[o])) || Rw(o, e)) && (n[o] = r[o])
  return n
}
function Lw(e, t) {
  const r = ev(e, t)
  for (const n in e)
    if (Ct(e[n]) || Ct(t[n])) {
      const o = n === 'x' || n === 'y' ? 'attr' + n.toUpperCase() : n
      r[o] = e[n]
    }
  return r
}
function tv(e, t, r, n = {}, o = {}) {
  return (
    typeof t == 'function' && (t = t(r !== void 0 ? r : e.custom, n, o)),
    typeof t == 'string' && (t = e.variants && e.variants[t]),
    typeof t == 'function' && (t = t(r !== void 0 ? r : e.custom, n, o)),
    t
  )
}
const Fu = e => Array.isArray(e),
  zF = e => !!(e && typeof e == 'object' && e.mix && e.toValue),
  LF = e => (Fu(e) ? e[e.length - 1] || 0 : e)
function Kl(e) {
  const t = Ct(e) ? e.get() : e
  return zF(t) ? t.toValue() : t
}
function BF({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, i) {
  const a = { latestValues: VF(n, o, i, e), renderState: t() }
  return r && (a.mount = s => r(n, s, a)), a
}
const Bw = e => (t, r) => {
  const n = y.useContext(Ic),
    o = y.useContext(Cs),
    i = () => BF(e, t, n, o)
  return r ? i() : Gm(i)
}
function VF(e, t, r, n) {
  const o = {},
    i = n(e, {})
  for (const f in i) o[f] = Kl(i[f])
  let { initial: a, animate: s } = e
  const l = Nc(e),
    u = Tw(e)
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate))
  let c = r ? r.initial === !1 : !1
  c = c || a === !1
  const d = c ? s : a
  return (
    d &&
      typeof d != 'boolean' &&
      !Dc(d) &&
      (Array.isArray(d) ? d : [d]).forEach(h => {
        const m = tv(e, h)
        if (!m) return
        const { transitionEnd: p, transition: S, ...g } = m
        for (const v in g) {
          let b = g[v]
          if (Array.isArray(b)) {
            const k = c ? b.length - 1 : 0
            b = b[k]
          }
          b !== null && (o[v] = b)
        }
        for (const v in p) o[v] = p[v]
      }),
    o
  )
}
const WF = {
    useVisualState: Bw({
      scrapeMotionValuesFromProps: Lw,
      createRenderState: Fw,
      onMount: (e, t, { renderState: r, latestValues: n }) => {
        try {
          r.dimensions = typeof t.getBBox == 'function' ? t.getBBox() : t.getBoundingClientRect()
        } catch {
          r.dimensions = { x: 0, y: 0, width: 0, height: 0 }
        }
        Qm(r, n, { enableHardwareAcceleration: !1 }, Zm(t.tagName), e.transformTemplate), zw(t, r)
      },
    }),
  },
  UF = { useVisualState: Bw({ scrapeMotionValuesFromProps: ev, createRenderState: Xm }) }
function HF(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...(qm(e) ? WF : UF),
    preloadedFeatures: r,
    useRender: NF(t),
    createVisualElement: n,
    Component: e,
  }
}
function Dr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r)
}
const Vw = e =>
  e.pointerType === 'mouse' ? typeof e.button != 'number' || e.button <= 0 : e.isPrimary !== !1
function Lc(e, t = 'page') {
  return { point: { x: e[t + 'X'], y: e[t + 'Y'] } }
}
const GF = e => t => Vw(t) && e(t, Lc(t))
function Lr(e, t, r, n) {
  return Dr(e, t, GF(r), n)
}
const KF = (e, t) => r => t(e(r)),
  Sn = (...e) => e.reduce(KF)
function Ww(e) {
  let t = null
  return () => {
    const r = () => {
      t = null
    }
    return t === null ? ((t = e), r) : !1
  }
}
const ky = Ww('dragHorizontal'),
  Cy = Ww('dragVertical')
function Uw(e) {
  let t = !1
  if (e === 'y') t = Cy()
  else if (e === 'x') t = ky()
  else {
    const r = ky(),
      n = Cy()
    r && n
      ? (t = () => {
          r(), n()
        })
      : (r && r(), n && n())
  }
  return t
}
function Hw() {
  const e = Uw(!0)
  return e ? (e(), !1) : !0
}
class Fn {
  constructor(t) {
    ;(this.isMounted = !1), (this.node = t)
  }
  update() {}
}
function qF(e) {
  let t = [],
    r = [],
    n = 0,
    o = !1,
    i = !1
  const a = new WeakSet(),
    s = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && o,
          f = d ? t : r
        return u && a.add(l), f.indexOf(l) === -1 && (f.push(l), d && o && (n = t.length)), l
      },
      cancel: l => {
        const u = r.indexOf(l)
        u !== -1 && r.splice(u, 1), a.delete(l)
      },
      process: l => {
        if (o) {
          i = !0
          return
        }
        if (((o = !0), ([t, r] = [r, t]), (r.length = 0), (n = t.length), n))
          for (let u = 0; u < n; u++) {
            const c = t[u]
            c(l), a.has(c) && (s.schedule(c), e())
          }
        ;(o = !1), i && ((i = !1), s.process(l))
      },
    }
  return s
}
const at = { delta: 0, timestamp: 0, isProcessing: !1 },
  YF = 40
let Uh = !0,
  ls = !1
const Es = ['read', 'update', 'preRender', 'render', 'postRender'],
  Bc = Es.reduce((e, t) => ((e[t] = qF(() => (ls = !0))), e), {}),
  ke = Es.reduce((e, t) => {
    const r = Bc[t]
    return (e[t] = (n, o = !1, i = !1) => (ls || QF(), r.schedule(n, o, i))), e
  }, {}),
  En = Es.reduce((e, t) => ((e[t] = Bc[t].cancel), e), {}),
  of = Es.reduce((e, t) => ((e[t] = () => Bc[t].process(at)), e), {}),
  XF = e => Bc[e].process(at),
  Gw = e => {
    ;(ls = !1),
      (at.delta = Uh ? 1e3 / 60 : Math.max(Math.min(e - at.timestamp, YF), 1)),
      (at.timestamp = e),
      (at.isProcessing = !0),
      Es.forEach(XF),
      (at.isProcessing = !1),
      ls && ((Uh = !1), requestAnimationFrame(Gw))
  },
  QF = () => {
    ;(ls = !0), (Uh = !0), at.isProcessing || requestAnimationFrame(Gw)
  }
function _y(e, t) {
  const r = 'pointer' + (t ? 'enter' : 'leave'),
    n = 'onHover' + (t ? 'Start' : 'End'),
    o = (i, a) => {
      if (i.type === 'touch' || Hw()) return
      const s = e.getProps()
      e.animationState && s.whileHover && e.animationState.setActive('whileHover', t),
        s[n] && ke.update(() => s[n](i, a))
    }
  return Lr(e.current, r, o, { passive: !e.getProps()[n] })
}
class ZF extends Fn {
  mount() {
    this.unmount = Sn(_y(this.node, !0), _y(this.node, !1))
  }
  unmount() {}
}
class JF extends Fn {
  constructor() {
    super(...arguments), (this.isActive = !1)
  }
  onFocus() {
    let t = !1
    try {
      t = this.node.current.matches(':focus-visible')
    } catch {
      t = !0
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0), (this.isActive = !0))
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1), (this.isActive = !1))
  }
  mount() {
    this.unmount = Sn(
      Dr(this.node.current, 'focus', () => this.onFocus()),
      Dr(this.node.current, 'blur', () => this.onBlur())
    )
  }
  unmount() {}
}
const Kw = (e, t) => (t ? (e === t ? !0 : Kw(e, t.parentElement)) : !1),
  Xe = e => e
function af(e, t) {
  if (!t) return
  const r = new PointerEvent('pointer' + e)
  t(r, Lc(r))
}
class e4 extends Fn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Xe),
      (this.removeEndListeners = Xe),
      (this.removeAccessibleListeners = Xe),
      (this.startPointerPress = (t, r) => {
        if ((this.removeEndListeners(), this.isPressing)) return
        const n = this.node.getProps(),
          i = Lr(
            window,
            'pointerup',
            (s, l) => {
              if (!this.checkPressEnd()) return
              const { onTap: u, onTapCancel: c } = this.node.getProps()
              ke.update(() => {
                Kw(this.node.current, s.target) ? u && u(s, l) : c && c(s, l)
              })
            },
            { passive: !(n.onTap || n.onPointerUp) }
          ),
          a = Lr(window, 'pointercancel', (s, l) => this.cancelPress(s, l), {
            passive: !(n.onTapCancel || n.onPointerCancel),
          })
        ;(this.removeEndListeners = Sn(i, a)), this.startPress(t, r)
      }),
      (this.startAccessiblePress = () => {
        const t = i => {
            if (i.key !== 'Enter' || this.isPressing) return
            const a = s => {
              s.key !== 'Enter' ||
                !this.checkPressEnd() ||
                af('up', (l, u) => {
                  const { onTap: c } = this.node.getProps()
                  c && ke.update(() => c(l, u))
                })
            }
            this.removeEndListeners(),
              (this.removeEndListeners = Dr(this.node.current, 'keyup', a)),
              af('down', (s, l) => {
                this.startPress(s, l)
              })
          },
          r = Dr(this.node.current, 'keydown', t),
          n = () => {
            this.isPressing && af('cancel', (i, a) => this.cancelPress(i, a))
          },
          o = Dr(this.node.current, 'blur', n)
        this.removeAccessibleListeners = Sn(r, o)
      })
  }
  startPress(t, r) {
    this.isPressing = !0
    const { onTapStart: n, whileTap: o } = this.node.getProps()
    o && this.node.animationState && this.node.animationState.setActive('whileTap', !0),
      n && ke.update(() => n(t, r))
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive('whileTap', !1),
      !Hw()
    )
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd()) return
    const { onTapCancel: n } = this.node.getProps()
    n && ke.update(() => n(t, r))
  }
  mount() {
    const t = this.node.getProps(),
      r = Lr(this.node.current, 'pointerdown', this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      n = Dr(this.node.current, 'focus', this.startAccessiblePress)
    this.removeStartListeners = Sn(r, n)
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
  }
}
const Hh = new WeakMap(),
  sf = new WeakMap(),
  t4 = e => {
    const t = Hh.get(e.target)
    t && t(e)
  },
  r4 = e => {
    e.forEach(t4)
  }
function n4({ root: e, ...t }) {
  const r = e || document
  sf.has(r) || sf.set(r, {})
  const n = sf.get(r),
    o = JSON.stringify(t)
  return n[o] || (n[o] = new IntersectionObserver(r4, { root: e, ...t })), n[o]
}
function o4(e, t, r) {
  const n = n4(t)
  return (
    Hh.set(e, r),
    n.observe(e),
    () => {
      Hh.delete(e), n.unobserve(e)
    }
  )
}
const i4 = { some: 0, all: 1 }
class a4 extends Fn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1)
  }
  startObserver() {
    this.unmount()
    const { viewport: t = {} } = this.node.getProps(),
      { root: r, margin: n, amount: o = 'some', once: i } = t,
      a = {
        root: r ? r.current : void 0,
        rootMargin: n,
        threshold: typeof o == 'number' ? o : i4[o],
      },
      s = l => {
        const { isIntersecting: u } = l
        if (this.isInView === u || ((this.isInView = u), i && !u && this.hasEnteredView)) return
        u && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive('whileInView', u)
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d
        f && f(l)
      }
    return o4(this.node.current, a, s)
  }
  mount() {
    this.startObserver()
  }
  update() {
    if (typeof IntersectionObserver > 'u') return
    const { props: t, prevProps: r } = this.node
    ;['amount', 'margin', 'root'].some(s4(t, r)) && this.startObserver()
  }
  unmount() {}
}
function s4({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return r => e[r] !== t[r]
}
const l4 = {
  inView: { Feature: a4 },
  tap: { Feature: e4 },
  focus: { Feature: JF },
  hover: { Feature: ZF },
}
function qw(e, t) {
  if (!Array.isArray(t)) return !1
  const r = t.length
  if (r !== e.length) return !1
  for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1
  return !0
}
function u4(e) {
  const t = {}
  return e.values.forEach((r, n) => (t[n] = r.get())), t
}
function c4(e) {
  const t = {}
  return e.values.forEach((r, n) => (t[n] = r.getVelocity())), t
}
function Vc(e, t, r) {
  const n = e.getProps()
  return tv(n, t, r !== void 0 ? r : n.custom, u4(e), c4(e))
}
const d4 = 'framerAppearId',
  f4 = 'data-' + Jm(d4)
let h4 = Xe,
  Du = Xe
const xn = e => e * 1e3,
  vo = e => e / 1e3,
  p4 = { current: !1 },
  Yw = e => Array.isArray(e) && typeof e[0] == 'number'
function Xw(e) {
  return !!(!e || (typeof e == 'string' && Qw[e]) || Yw(e) || (Array.isArray(e) && e.every(Xw)))
}
const ca = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
  Qw = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: ca([0, 0.65, 0.55, 1]),
    circOut: ca([0.55, 0, 1, 0.45]),
    backIn: ca([0.31, 0.01, 0.66, -0.59]),
    backOut: ca([0.33, 1.53, 0.69, 0.99]),
  }
function Zw(e) {
  if (e) return Yw(e) ? ca(e) : Array.isArray(e) ? e.map(Zw) : Qw[e]
}
function m4(
  e,
  t,
  r,
  { delay: n = 0, duration: o, repeat: i = 0, repeatType: a = 'loop', ease: s, times: l } = {}
) {
  const u = { [t]: r }
  l && (u.offset = l)
  const c = Zw(s)
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: n,
      duration: o,
      easing: Array.isArray(c) ? 'linear' : c,
      fill: 'both',
      iterations: i + 1,
      direction: a === 'reverse' ? 'alternate' : 'normal',
    })
  )
}
const Py = { waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate') },
  lf = {},
  Jw = {}
for (const e in Py) Jw[e] = () => (lf[e] === void 0 && (lf[e] = Py[e]()), lf[e])
function v4(e, { repeat: t, repeatType: r = 'loop' }) {
  const n = t && r !== 'loop' && t % 2 === 1 ? 0 : e.length - 1
  return e[n]
}
const ek = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
  g4 = 1e-7,
  y4 = 12
function b4(e, t, r, n, o) {
  let i,
    a,
    s = 0
  do (a = t + (r - t) / 2), (i = ek(a, n, o) - e), i > 0 ? (r = a) : (t = a)
  while (Math.abs(i) > g4 && ++s < y4)
  return a
}
function Ts(e, t, r, n) {
  if (e === t && r === n) return Xe
  const o = i => b4(i, 0, 1, e, r)
  return i => (i === 0 || i === 1 ? i : ek(o(i), t, n))
}
const S4 = Ts(0.42, 0, 1, 1),
  x4 = Ts(0, 0, 0.58, 1),
  tk = Ts(0.42, 0, 0.58, 1),
  rv = (e, t) => r =>
    !!(
      (_s(r) && CF.test(r) && r.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(r, t))
    ),
  rk = (e, t, r) => n => {
    if (!_s(n)) return n
    const [o, i, a, s] = n.match(ss)
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [r]: parseFloat(a),
      alpha: s !== void 0 ? parseFloat(s) : 1,
    }
  },
  w4 = e => mo(0, 255, e),
  uf = { ...ko, transform: e => Math.round(w4(e)) },
  Zn = {
    test: rv('rgb', 'red'),
    parse: rk('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
      'rgba(' +
      uf.transform(e) +
      ', ' +
      uf.transform(t) +
      ', ' +
      uf.transform(r) +
      ', ' +
      Ta(Ea.transform(n)) +
      ')',
  }
function k4(e) {
  let t = '',
    r = '',
    n = '',
    o = ''
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (r = e.substring(3, 5)),
        (n = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (r = e.substring(2, 3)),
        (n = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (r += r),
        (n += n),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(r, 16),
      blue: parseInt(n, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  )
}
const Gh = { test: rv('#'), parse: k4, transform: Zn.transform },
  qo = {
    test: rv('hsl', 'hue'),
    parse: rk('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      Cr.transform(Ta(t)) +
      ', ' +
      Cr.transform(Ta(r)) +
      ', ' +
      Ta(Ea.transform(n)) +
      ')',
  },
  ct = {
    test: e => Zn.test(e) || Gh.test(e) || qo.test(e),
    parse: e => (Zn.test(e) ? Zn.parse(e) : qo.test(e) ? qo.parse(e) : Gh.parse(e)),
    transform: e => (_s(e) ? e : e.hasOwnProperty('red') ? Zn.transform(e) : qo.transform(e)),
  },
  Ee = (e, t, r) => -r * e + r * t + e
function cf(e, t, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
  )
}
function C4({ hue: e, saturation: t, lightness: r, alpha: n }) {
  ;(e /= 360), (t /= 100), (r /= 100)
  let o = 0,
    i = 0,
    a = 0
  if (!t) o = i = a = r
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t,
      l = 2 * r - s
    ;(o = cf(l, s, e + 1 / 3)), (i = cf(l, s, e)), (a = cf(l, s, e - 1 / 3))
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: n,
  }
}
const df = (e, t, r) => {
    const n = e * e
    return Math.sqrt(Math.max(0, r * (t * t - n) + n))
  },
  _4 = [Gh, Zn, qo],
  P4 = e => _4.find(t => t.test(e))
function Ey(e) {
  const t = P4(e)
  let r = t.parse(e)
  return t === qo && (r = C4(r)), r
}
const nk = (e, t) => {
    const r = Ey(e),
      n = Ey(t),
      o = { ...r }
    return i => (
      (o.red = df(r.red, n.red, i)),
      (o.green = df(r.green, n.green, i)),
      (o.blue = df(r.blue, n.blue, i)),
      (o.alpha = Ee(r.alpha, n.alpha, i)),
      Zn.transform(o)
    )
  },
  ok = '${c}',
  ik = '${n}'
function E4(e) {
  var t, r
  return (
    isNaN(e) &&
    _s(e) &&
    (((t = e.match(ss)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((r = e.match(Wh)) === null || r === void 0 ? void 0 : r.length) || 0) >
      0
  )
}
function Nu(e) {
  typeof e == 'number' && (e = `${e}`)
  const t = []
  let r = 0,
    n = 0
  const o = e.match(Wh)
  o && ((r = o.length), (e = e.replace(Wh, ok)), t.push(...o.map(ct.parse)))
  const i = e.match(ss)
  return (
    i && ((n = i.length), (e = e.replace(ss, ik)), t.push(...i.map(ko.parse))),
    { values: t, numColors: r, numNumbers: n, tokenised: e }
  )
}
function ak(e) {
  return Nu(e).values
}
function sk(e) {
  const { values: t, numColors: r, tokenised: n } = Nu(e),
    o = t.length
  return i => {
    let a = n
    for (let s = 0; s < o; s++)
      a = a.replace(s < r ? ok : ik, s < r ? ct.transform(i[s]) : Ta(i[s]))
    return a
  }
}
const T4 = e => (typeof e == 'number' ? 0 : e)
function A4(e) {
  const t = ak(e)
  return sk(e)(t.map(T4))
}
const Tn = { test: E4, parse: ak, createTransformer: sk, getAnimatableNone: A4 }
function lk(e, t) {
  return typeof e == 'number' ? r => Ee(e, t, r) : ct.test(e) ? nk(e, t) : ck(e, t)
}
const uk = (e, t) => {
    const r = [...e],
      n = r.length,
      o = e.map((i, a) => lk(i, t[a]))
    return i => {
      for (let a = 0; a < n; a++) r[a] = o[a](i)
      return r
    }
  },
  R4 = (e, t) => {
    const r = { ...e, ...t },
      n = {}
    for (const o in r) e[o] !== void 0 && t[o] !== void 0 && (n[o] = lk(e[o], t[o]))
    return o => {
      for (const i in n) r[i] = n[i](o)
      return r
    }
  },
  ck = (e, t) => {
    const r = Tn.createTransformer(t),
      n = Nu(e),
      o = Nu(t)
    return n.numColors === o.numColors && n.numNumbers >= o.numNumbers
      ? Sn(uk(n.values, o.values), r)
      : a => `${a > 0 ? t : e}`
  },
  us = (e, t, r) => {
    const n = t - e
    return n === 0 ? 1 : (r - e) / n
  },
  Ty = (e, t) => r => Ee(e, t, r)
function $4(e) {
  return typeof e == 'number'
    ? Ty
    : typeof e == 'string'
    ? ct.test(e)
      ? nk
      : ck
    : Array.isArray(e)
    ? uk
    : typeof e == 'object'
    ? R4
    : Ty
}
function j4(e, t, r) {
  const n = [],
    o = r || $4(e[0]),
    i = e.length - 1
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1])
    if (t) {
      const l = Array.isArray(t) ? t[a] : t
      s = Sn(l, s)
    }
    n.push(s)
  }
  return n
}
function dk(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length
  if ((Du(i === t.length), Du(!n || !Array.isArray(n) || n.length === i - 1), i === 1))
    return () => t[0]
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()))
  const a = j4(t, n, o),
    s = a.length,
    l = u => {
      let c = 0
      if (s > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = us(e[c], e[c + 1], u)
      return a[c](d)
    }
  return r ? u => l(mo(e[0], e[i - 1], u)) : l
}
function M4(e, t) {
  const r = e[e.length - 1]
  for (let n = 1; n <= t; n++) {
    const o = us(0, t, n)
    e.push(Ee(r, 1, o))
  }
}
function O4(e) {
  const t = [0]
  return M4(t, e.length - 1), t
}
function I4(e, t) {
  return e.map(r => r * t)
}
const fk = e => t => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  hk = e => t => 1 - e(1 - t),
  pk = e => 1 - Math.sin(Math.acos(e)),
  nv = hk(pk),
  F4 = fk(nv),
  mk = Ts(0.33, 1.53, 0.69, 0.99),
  ov = hk(mk),
  D4 = fk(ov),
  N4 = e => ((e *= 2) < 1 ? 0.5 * ov(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
  z4 = {
    linear: Xe,
    easeIn: S4,
    easeInOut: tk,
    easeOut: x4,
    circIn: pk,
    circInOut: F4,
    circOut: nv,
    backIn: ov,
    backInOut: D4,
    backOut: mk,
    anticipate: N4,
  },
  Ay = e => {
    if (Array.isArray(e)) {
      Du(e.length === 4)
      const [t, r, n, o] = e
      return Ts(t, r, n, o)
    } else if (typeof e == 'string') return z4[e]
    return e
  },
  L4 = e => Array.isArray(e) && typeof e[0] != 'number'
function B4(e, t) {
  return e.map(() => t || tk).splice(0, e.length - 1)
}
function zu({ duration: e = 300, keyframes: t, times: r, ease: n = 'easeInOut' }) {
  const o = L4(n) ? n.map(Ay) : Ay(n),
    i = { done: !1, value: t[0] },
    a = I4(r && r.length === t.length ? r : O4(t), e),
    s = dk(a, t, { ease: Array.isArray(o) ? o : B4(t, o) })
  return { calculatedDuration: e, next: l => ((i.value = s(l)), (i.done = l >= e), i) }
}
function vk(e, t) {
  return t ? e * (1e3 / t) : 0
}
const V4 = 5
function gk(e, t, r) {
  const n = Math.max(t - V4, 0)
  return vk(r - e(n), t - n)
}
const ff = 0.001,
  W4 = 0.01,
  Ry = 10,
  U4 = 0.05,
  H4 = 1
function G4({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, i
  h4(e <= xn(Ry))
  let a = 1 - t
  ;(a = mo(U4, H4, a)),
    (e = mo(W4, Ry, vo(e))),
    a < 1
      ? ((o = u => {
          const c = u * a,
            d = c * e,
            f = c - r,
            h = Kh(u, a),
            m = Math.exp(-d)
          return ff - (f / h) * m
        }),
        (i = u => {
          const d = u * a * e,
            f = d * r + r,
            h = Math.pow(a, 2) * Math.pow(u, 2) * e,
            m = Math.exp(-d),
            p = Kh(Math.pow(u, 2), a)
          return ((-o(u) + ff > 0 ? -1 : 1) * ((f - h) * m)) / p
        }))
      : ((o = u => {
          const c = Math.exp(-u * e),
            d = (u - r) * e + 1
          return -ff + c * d
        }),
        (i = u => {
          const c = Math.exp(-u * e),
            d = (r - u) * (e * e)
          return c * d
        }))
  const s = 5 / e,
    l = q4(o, i, s)
  if (((e = xn(e)), isNaN(l))) return { stiffness: 100, damping: 10, duration: e }
  {
    const u = Math.pow(l, 2) * n
    return { stiffness: u, damping: a * 2 * Math.sqrt(n * u), duration: e }
  }
}
const K4 = 12
function q4(e, t, r) {
  let n = r
  for (let o = 1; o < K4; o++) n = n - e(n) / t(n)
  return n
}
function Kh(e, t) {
  return e * Math.sqrt(1 - t * t)
}
const Y4 = ['duration', 'bounce'],
  X4 = ['stiffness', 'damping', 'mass']
function $y(e, t) {
  return t.some(r => e[r] !== void 0)
}
function Q4(e) {
  let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e }
  if (!$y(e, X4) && $y(e, Y4)) {
    const r = G4(e)
    ;(t = { ...t, ...r, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0)
  }
  return t
}
function yk({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0],
    i = e[e.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: s,
      damping: l,
      mass: u,
      velocity: c,
      duration: d,
      isResolvedFromDuration: f,
    } = Q4(n),
    h = c ? -vo(c) : 0,
    m = l / (2 * Math.sqrt(s * u)),
    p = i - o,
    S = vo(Math.sqrt(s / u)),
    g = Math.abs(p) < 5
  r || (r = g ? 0.01 : 2), t || (t = g ? 0.005 : 0.5)
  let v
  if (m < 1) {
    const b = Kh(S, m)
    v = k => {
      const C = Math.exp(-m * S * k)
      return i - C * (((h + m * S * p) / b) * Math.sin(b * k) + p * Math.cos(b * k))
    }
  } else if (m === 1) v = b => i - Math.exp(-S * b) * (p + (h + S * p) * b)
  else {
    const b = S * Math.sqrt(m * m - 1)
    v = k => {
      const C = Math.exp(-m * S * k),
        R = Math.min(b * k, 300)
      return i - (C * ((h + m * S * p) * Math.sinh(R) + b * p * Math.cosh(R))) / b
    }
  }
  return {
    calculatedDuration: (f && d) || null,
    next: b => {
      const k = v(b)
      if (f) a.done = b >= d
      else {
        let C = h
        b !== 0 && (m < 1 ? (C = gk(v, b, k)) : (C = 0))
        const R = Math.abs(C) <= r,
          E = Math.abs(i - k) <= t
        a.done = R && E
      }
      return (a.value = a.done ? i : k), a
    },
  }
}
function jy({
  keyframes: e,
  velocity: t = 0,
  power: r = 0.8,
  timeConstant: n = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: a,
  min: s,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    h = T => (s !== void 0 && T < s) || (l !== void 0 && T > l),
    m = T => (s === void 0 ? l : l === void 0 || Math.abs(s - T) < Math.abs(l - T) ? s : l)
  let p = r * t
  const S = d + p,
    g = a === void 0 ? S : a(S)
  g !== S && (p = g - d)
  const v = T => -p * Math.exp(-T / n),
    b = T => g + v(T),
    k = T => {
      const M = v(T),
        j = b(T)
      ;(f.done = Math.abs(M) <= u), (f.value = f.done ? g : j)
    }
  let C, R
  const E = T => {
    h(f.value) &&
      ((C = T),
      (R = yk({
        keyframes: [f.value, m(f.value)],
        velocity: gk(b, T, f.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })))
  }
  return (
    E(0),
    {
      calculatedDuration: null,
      next: T => {
        let M = !1
        return (
          !R && C === void 0 && ((M = !0), k(T), E(T)),
          C !== void 0 && T > C ? R.next(T - C) : (!M && k(T), f)
        )
      },
    }
  )
}
const Z4 = e => {
    const t = ({ timestamp: r }) => e(r)
    return {
      start: () => ke.update(t, !0),
      stop: () => En.update(t),
      now: () => (at.isProcessing ? at.timestamp : performance.now()),
    }
  },
  J4 = { decay: jy, inertia: jy, tween: zu, keyframes: zu, spring: yk },
  eD = 2e4
function tD(e) {
  let t = 0
  const r = 50
  let n = e.next(t)
  for (; !n.done && t < eD; ) (t += r), (n = e.next(t))
  return t
}
function Lu({
  autoplay: e = !0,
  delay: t = 0,
  driver: r = Z4,
  keyframes: n,
  type: o = 'keyframes',
  repeat: i = 0,
  repeatDelay: a = 0,
  repeatType: s = 'loop',
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: d,
  ...f
}) {
  let h = 1,
    m = !1,
    p,
    S
  const g = () => {
    p && p(),
      (S = new Promise(V => {
        p = V
      }))
  }
  g()
  let v
  const b = J4[o] || zu
  let k
  b !== zu && typeof n[0] != 'number' && ((k = dk([0, 100], n, { clamp: !1 })), (n = [0, 100]))
  const C = b({ ...f, keyframes: n })
  let R
  s === 'mirror' && (R = b({ ...f, keyframes: [...n].reverse(), velocity: -(f.velocity || 0) }))
  let E = 'idle',
    T = null,
    M = null,
    j = null
  C.calculatedDuration === null && i && (C.calculatedDuration = tD(C))
  const { calculatedDuration: W } = C
  let he = 1 / 0,
    ye = 1 / 0
  W !== null && ((he = W + a), (ye = he * (i + 1) - a))
  let J = 0
  const se = V => {
      if (M === null) return
      T !== null ? (J = T) : (J = (V - M) * h),
        (J = Math.max(J - t, 0)),
        E === 'finished' && T === null && (J = ye)
      let oe = J,
        U = C
      if (i) {
        const je = J / he
        let Ge = Math.floor(je),
          ut = je % 1
        !ut && je >= 1 && (ut = 1), ut === 1 && Ge--, (Ge = Math.min(Ge, i + 1))
        const lr = !!(Ge % 2)
        lr && (s === 'reverse' ? ((ut = 1 - ut), a && (ut -= a / he)) : s === 'mirror' && (U = R))
        let ee = mo(0, 1, ut)
        J > ye && (ee = s === 'reverse' && lr ? 1 : 0), (oe = ee * he)
      }
      const $e = U.next(oe)
      k && ($e.value = k($e.value))
      let { done: _t } = $e
      W !== null && (_t = J >= ye)
      const Oe = T === null && (E === 'finished' || (E === 'running' && _t) || (h < 0 && J <= 0))
      return d && d($e.value), Oe && O(), $e
    },
    Ce = () => {
      v && v.stop(), (v = void 0)
    },
    et = () => {
      ;(E = 'idle'), Ce(), g(), (M = j = null)
    },
    O = () => {
      ;(E = 'finished'), c && c(), Ce(), g()
    },
    L = () => {
      if (m) return
      v || (v = r(se))
      const V = v.now()
      l && l(),
        (E = 'running'),
        T !== null ? (M = V - T) : M || (M = V),
        (j = M),
        (T = null),
        v.start()
    }
  e && L()
  const N = {
    then(V, oe) {
      return S.then(V, oe)
    },
    get time() {
      return vo(J)
    },
    set time(V) {
      ;(V = xn(V)), (J = V), T !== null || !v || h === 0 ? (T = V) : (M = v.now() - V / h)
    },
    get speed() {
      return h
    },
    set speed(V) {
      V === h || !v || ((h = V), (N.time = vo(J)))
    },
    get state() {
      return E
    },
    play: L,
    pause: () => {
      ;(E = 'paused'), (T = J)
    },
    stop: () => {
      ;(m = !0), E !== 'idle' && ((E = 'idle'), u && u(), et())
    },
    cancel: () => {
      j !== null && se(j), et()
    },
    complete: () => {
      E = 'finished'
    },
    sample: V => ((M = 0), se(V)),
  }
  return N
}
const rD = new Set(['opacity', 'clipPath', 'filter', 'transform', 'backgroundColor']),
  Sl = 10,
  nD = 2e4,
  oD = (e, t) => t.type === 'spring' || e === 'backgroundColor' || !Xw(t.ease)
function iD(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (
    !(
      Jw.waapi() &&
      rD.has(t) &&
      !o.repeatDelay &&
      o.repeatType !== 'mirror' &&
      o.damping !== 0 &&
      o.type !== 'inertia'
    )
  )
    return !1
  let a = !1,
    s,
    l
  const u = () => {
    l = new Promise(p => {
      s = p
    })
  }
  u()
  let { keyframes: c, duration: d = 300, ease: f } = o
  if (oD(t, o)) {
    const p = Lu({ ...o, repeat: 0, delay: 0 })
    let S = { done: !1, value: c[0] }
    const g = []
    let v = 0
    for (; !S.done && v < nD; ) (S = p.sample(v)), g.push(S.value), (v += Sl)
    ;(c = g), (d = v - Sl), (f = 'linear')
  }
  const h = m4(e.owner.current, t, c, { ...o, duration: d, ease: f }),
    m = () => {
      ke.update(() => h.cancel()), s(), u()
    }
  return (
    (h.onfinish = () => {
      e.set(v4(c, o)), n && n(), m()
    }),
    {
      then(p, S) {
        return l.then(p, S)
      },
      get time() {
        return vo(h.currentTime || 0)
      },
      set time(p) {
        h.currentTime = xn(p)
      },
      get speed() {
        return h.playbackRate
      },
      set speed(p) {
        h.playbackRate = p
      },
      play: () => {
        a || h.play()
      },
      pause: () => h.pause(),
      stop: () => {
        if (((a = !0), h.playState === 'idle')) return
        const { currentTime: p } = h
        if (p) {
          const S = Lu({ ...o, autoplay: !1 })
          e.setWithVelocity(S.sample(p - Sl).value, S.sample(p).value, Sl)
        }
        m()
      },
      complete: () => h.finish(),
      cancel: m,
    }
  )
}
function aD({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
  const o = () => (
    r && r(e[e.length - 1]),
    n && n(),
    {
      time: 0,
      speed: 1,
      play: Xe,
      pause: Xe,
      stop: Xe,
      then: i => (i(), Promise.resolve()),
      cancel: Xe,
      complete: Xe,
    }
  )
  return t ? Lu({ keyframes: [0, 1], duration: t, onComplete: o }) : o()
}
const sD = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  lD = e => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  uD = { type: 'keyframes', duration: 0.8 },
  cD = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  dD = (e, { keyframes: t }) =>
    t.length > 2 ? uD : wo.has(e) ? (e.startsWith('scale') ? lD(t[1]) : sD) : cD,
  qh = (e, t) =>
    e === 'zIndex'
      ? !1
      : !!(
          typeof t == 'number' ||
          Array.isArray(t) ||
          (typeof t == 'string' && Tn.test(t) && !t.startsWith('url('))
        ),
  fD = new Set(['brightness', 'contrast', 'saturate', 'opacity'])
function hD(e) {
  const [t, r] = e.slice(0, -1).split('(')
  if (t === 'drop-shadow') return e
  const [n] = r.match(ss) || []
  if (!n) return e
  const o = r.replace(n, '')
  let i = fD.has(t) ? 1 : 0
  return n !== r && (i *= 100), t + '(' + i + o + ')'
}
const pD = /([a-z-]*)\(.*?\)/g,
  Yh = {
    ...Tn,
    getAnimatableNone: e => {
      const t = e.match(pD)
      return t ? t.map(hD).join(' ') : e
    },
  },
  mD = {
    ...Mw,
    color: ct,
    backgroundColor: ct,
    outlineColor: ct,
    fill: ct,
    stroke: ct,
    borderColor: ct,
    borderTopColor: ct,
    borderRightColor: ct,
    borderBottomColor: ct,
    borderLeftColor: ct,
    filter: Yh,
    WebkitFilter: Yh,
  },
  iv = e => mD[e]
function av(e, t) {
  let r = iv(e)
  return r !== Yh && (r = Tn), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
}
function vD({
  when: e,
  delay: t,
  delayChildren: r,
  staggerChildren: n,
  staggerDirection: o,
  repeat: i,
  repeatType: a,
  repeatDelay: s,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length
}
function My(e) {
  return e === 0 || (typeof e == 'string' && parseFloat(e) === 0 && e.indexOf(' ') === -1)
}
function Oy(e) {
  return typeof e == 'number' ? 0 : av('', e)
}
function bk(e, t) {
  return e[t] || e.default || e
}
function gD(e, t, r, n) {
  const o = qh(t, r)
  let i = n.from !== void 0 ? n.from : e.get()
  return (
    i === 'none' && o && typeof r == 'string'
      ? (i = av(t, r))
      : My(i) && typeof r == 'string'
      ? (i = Oy(r))
      : !Array.isArray(r) && My(r) && typeof i == 'string' && (r = Oy(i)),
    Array.isArray(r) ? (r[0] === null && (r[0] = i), r) : [i, r]
  )
}
const sv =
  (e, t, r, n = {}) =>
  o => {
    const i = bk(n, e) || {},
      a = i.delay || n.delay || 0
    let { elapsed: s = 0 } = n
    s = s - xn(a)
    const l = gD(t, e, r, i),
      u = l[0],
      c = l[l.length - 1],
      d = qh(e, u),
      f = qh(e, c)
    let h = {
      keyframes: l,
      velocity: t.getVelocity(),
      ease: 'easeOut',
      ...i,
      delay: -s,
      onUpdate: m => {
        t.set(m), i.onUpdate && i.onUpdate(m)
      },
      onComplete: () => {
        o(), i.onComplete && i.onComplete()
      },
    }
    if (!d || !f || p4.current || i.type === !1) return aD(h)
    if (
      (vD(i) || (h = { ...h, ...dD(e, h) }),
      h.duration && (h.duration = xn(h.duration)),
      h.repeatDelay && (h.repeatDelay = xn(h.repeatDelay)),
      t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate)
    ) {
      const m = iD(t, e, h)
      if (m) return m
    }
    return Lu(h)
  }
function Bu(e) {
  return !!(Ct(e) && e.add)
}
const yD = e => /^\-?\d*\.?\d+$/.test(e),
  bD = e => /^0[^.\s]+$/.test(e)
function lv(e, t) {
  e.indexOf(t) === -1 && e.push(t)
}
function uv(e, t) {
  const r = e.indexOf(t)
  r > -1 && e.splice(r, 1)
}
class cv {
  constructor() {
    this.subscriptions = []
  }
  add(t) {
    return lv(this.subscriptions, t), () => uv(this.subscriptions, t)
  }
  notify(t, r, n) {
    const o = this.subscriptions.length
    if (o)
      if (o === 1) this.subscriptions[0](t, r, n)
      else
        for (let i = 0; i < o; i++) {
          const a = this.subscriptions[i]
          a && a(t, r, n)
        }
  }
  getSize() {
    return this.subscriptions.length
  }
  clear() {
    this.subscriptions.length = 0
  }
}
const SD = e => !isNaN(parseFloat(e))
class xD {
  constructor(t, r = {}) {
    ;(this.version = '10.8.5'),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (n, o = !0) => {
        ;(this.prev = this.current), (this.current = n)
        const { delta: i, timestamp: a } = at
        this.lastUpdated !== a &&
          ((this.timeDelta = i), (this.lastUpdated = a), ke.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
          o && this.events.renderRequest && this.events.renderRequest.notify(this.current)
      }),
      (this.scheduleVelocityCheck = () => ke.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: n }) => {
        n !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = SD(this.current)),
      (this.owner = r.owner)
  }
  onChange(t) {
    return this.on('change', t)
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new cv())
    const n = this.events[t].add(r)
    return t === 'change'
      ? () => {
          n(),
            ke.read(() => {
              this.events.change.getSize() || this.stop()
            })
        }
      : n
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear()
  }
  attach(t, r) {
    ;(this.passiveEffect = t), (this.stopPassiveEffect = r)
  }
  set(t, r = !0) {
    !r || !this.passiveEffect
      ? this.updateAndNotify(t, r)
      : this.passiveEffect(t, this.updateAndNotify)
  }
  setWithVelocity(t, r, n) {
    this.set(r), (this.prev = t), (this.timeDelta = n)
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect()
  }
  get() {
    return this.current
  }
  getPrevious() {
    return this.prev
  }
  getVelocity() {
    return this.canTrackVelocity
      ? vk(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0
  }
  start(t) {
    return (
      this.stop(),
      new Promise(r => {
        ;(this.hasAnimated = !0),
          (this.animation = t(r)),
          this.events.animationStart && this.events.animationStart.notify()
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation()
      })
    )
  }
  stop() {
    this.animation &&
      (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation()
  }
  isAnimating() {
    return !!this.animation
  }
  clearAnimation() {
    delete this.animation
  }
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
  }
}
function Pi(e, t) {
  return new xD(e, t)
}
const Sk = e => t => t.test(e),
  wD = { test: e => e === 'auto', parse: e => e },
  xk = [ko, B, Cr, Jr, PF, _F, wD],
  ea = e => xk.find(Sk(e)),
  kD = [...xk, ct, Tn],
  CD = e => kD.find(Sk(e))
function _D(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Pi(r))
}
function PD(e, t) {
  const r = Vc(e, t)
  let { transitionEnd: n = {}, transition: o = {}, ...i } = r ? e.makeTargetAnimatable(r, !1) : {}
  i = { ...i, ...n }
  for (const a in i) {
    const s = LF(i[a])
    _D(e, a, s)
  }
}
function ED(e, t, r) {
  var n, o
  const i = Object.keys(t).filter(s => !e.hasValue(s)),
    a = i.length
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s],
        u = t[l]
      let c = null
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && o !== void 0
              ? o
              : t[l]),
        c != null &&
          (typeof c == 'string' && (yD(c) || bD(c))
            ? (c = parseFloat(c))
            : !CD(c) && Tn.test(u) && (c = av(l, u)),
          e.addValue(l, Pi(c, { owner: e })),
          r[l] === void 0 && (r[l] = c),
          c !== null && e.setBaseTarget(l, c))
    }
}
function TD(e, t) {
  return t ? (t[e] || t.default || t).from : void 0
}
function AD(e, t, r) {
  const n = {}
  for (const o in e) {
    const i = TD(o, t)
    if (i !== void 0) n[o] = i
    else {
      const a = r.getValue(o)
      a && (n[o] = a.get())
    }
  }
  return n
}
function RD({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0
  return (t[r] = !1), n
}
function wk(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let {
    transition: i = e.getDefaultTransition(),
    transitionEnd: a,
    ...s
  } = e.makeTargetAnimatable(t)
  const l = e.getValue('willChange')
  n && (i = n)
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o]
  for (const d in s) {
    const f = e.getValue(d),
      h = s[d]
    if (!f || h === void 0 || (c && RD(c, d))) continue
    const m = { delay: r, elapsed: 0, ...i }
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const S = e.getProps()[f4]
      S && (m.elapsed = window.HandoffAppearAnimations(S, d, f, ke))
    }
    f.start(sv(d, f, h, e.shouldReduceMotion && wo.has(d) ? { type: !1 } : m))
    const p = f.animation
    Bu(l) && (l.add(d), p.then(() => l.remove(d))), u.push(p)
  }
  return (
    a &&
      Promise.all(u).then(() => {
        a && PD(e, a)
      }),
    u
  )
}
function Xh(e, t, r = {}) {
  const n = Vc(e, t, r.custom)
  let { transition: o = e.getDefaultTransition() || {} } = n || {}
  r.transitionOverride && (o = r.transitionOverride)
  const i = n ? () => Promise.all(wk(e, n, r)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o
            return $D(e, t, u + l, c, d, r)
          }
        : () => Promise.resolve(),
    { when: s } = o
  if (s) {
    const [l, u] = s === 'beforeChildren' ? [i, a] : [a, i]
    return l().then(() => u())
  } else return Promise.all([i(), a(r.delay)])
}
function $D(e, t, r = 0, n = 0, o = 1, i) {
  const a = [],
    s = (e.variantChildren.size - 1) * n,
    l = o === 1 ? (u = 0) => u * n : (u = 0) => s - u * n
  return (
    Array.from(e.variantChildren)
      .sort(jD)
      .forEach((u, c) => {
        u.notify('AnimationStart', t),
          a.push(Xh(u, t, { ...i, delay: r + l(c) }).then(() => u.notify('AnimationComplete', t)))
      }),
    Promise.all(a)
  )
}
function jD(e, t) {
  return e.sortNodePosition(t)
}
function MD(e, t, r = {}) {
  e.notify('AnimationStart', t)
  let n
  if (Array.isArray(t)) {
    const o = t.map(i => Xh(e, i, r))
    n = Promise.all(o)
  } else if (typeof t == 'string') n = Xh(e, t, r)
  else {
    const o = typeof t == 'function' ? Vc(e, t, r.custom) : t
    n = Promise.all(wk(e, o, r))
  }
  return n.then(() => e.notify('AnimationComplete', t))
}
const OD = [...Um].reverse(),
  ID = Um.length
function FD(e) {
  return t => Promise.all(t.map(({ animation: r, options: n }) => MD(e, r, n)))
}
function DD(e) {
  let t = FD(e)
  const r = zD()
  let n = !0
  const o = (l, u) => {
    const c = Vc(e, u)
    if (c) {
      const { transition: d, transitionEnd: f, ...h } = c
      l = { ...l, ...h, ...f }
    }
    return l
  }
  function i(l) {
    t = l(e)
  }
  function a(l, u) {
    const c = e.getProps(),
      d = e.getVariantContext(!0) || {},
      f = [],
      h = new Set()
    let m = {},
      p = 1 / 0
    for (let g = 0; g < ID; g++) {
      const v = OD[g],
        b = r[v],
        k = c[v] !== void 0 ? c[v] : d[v],
        C = is(k),
        R = v === u ? b.isActive : null
      R === !1 && (p = g)
      let E = k === d[v] && k !== c[v] && C
      if (
        (E && n && e.manuallyAnimateOnMount && (E = !1),
        (b.protectedKeys = { ...m }),
        (!b.isActive && R === null) || (!k && !b.prevProp) || Dc(k) || typeof k == 'boolean')
      )
        continue
      const T = ND(b.prevProp, k)
      let M = T || (v === u && b.isActive && !E && C) || (g > p && C)
      const j = Array.isArray(k) ? k : [k]
      let W = j.reduce(o, {})
      R === !1 && (W = {})
      const { prevResolvedValues: he = {} } = b,
        ye = { ...he, ...W },
        J = se => {
          ;(M = !0), h.delete(se), (b.needsAnimating[se] = !0)
        }
      for (const se in ye) {
        const Ce = W[se],
          et = he[se]
        m.hasOwnProperty(se) ||
          (Ce !== et
            ? Fu(Ce) && Fu(et)
              ? !qw(Ce, et) || T
                ? J(se)
                : (b.protectedKeys[se] = !0)
              : Ce !== void 0
              ? J(se)
              : h.add(se)
            : Ce !== void 0 && h.has(se)
            ? J(se)
            : (b.protectedKeys[se] = !0))
      }
      ;(b.prevProp = k),
        (b.prevResolvedValues = W),
        b.isActive && (m = { ...m, ...W }),
        n && e.blockInitialAnimation && (M = !1),
        M && !E && f.push(...j.map(se => ({ animation: se, options: { type: v, ...l } })))
    }
    if (h.size) {
      const g = {}
      h.forEach(v => {
        const b = e.getBaseTarget(v)
        b !== void 0 && (g[v] = b)
      }),
        f.push({ animation: g })
    }
    let S = !!f.length
    return (
      n && c.initial === !1 && !e.manuallyAnimateOnMount && (S = !1),
      (n = !1),
      S ? t(f) : Promise.resolve()
    )
  }
  function s(l, u, c) {
    var d
    if (r[l].isActive === u) return Promise.resolve()
    ;(d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach(h => {
        var m
        return (m = h.animationState) === null || m === void 0 ? void 0 : m.setActive(l, u)
      }),
      (r[l].isActive = u)
    const f = a(c, l)
    for (const h in r) r[h].protectedKeys = {}
    return f
  }
  return { animateChanges: a, setActive: s, setAnimateFunction: i, getState: () => r }
}
function ND(e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !qw(t, e) : !1
}
function Ln(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} }
}
function zD() {
  return {
    animate: Ln(!0),
    whileInView: Ln(),
    whileHover: Ln(),
    whileTap: Ln(),
    whileDrag: Ln(),
    whileFocus: Ln(),
    exit: Ln(),
  }
}
class LD extends Fn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = DD(t))
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps()
    this.unmount(), Dc(t) && (this.unmount = t.subscribe(this.node))
  }
  mount() {
    this.updateAnimationControlsSubscription()
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: r } = this.node.prevProps || {}
    t !== r && this.updateAnimationControlsSubscription()
  }
  unmount() {}
}
let BD = 0
class VD extends Fn {
  constructor() {
    super(...arguments), (this.id = BD++)
  }
  update() {
    if (!this.node.presenceContext) return
    const { isPresent: t, onExitComplete: r, custom: n } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {}
    if (!this.node.animationState || t === o) return
    const i = this.node.animationState.setActive('exit', !t, {
      custom: n ?? this.node.getProps().custom,
    })
    r && !t && i.then(() => r(this.id))
  }
  mount() {
    const { register: t } = this.node.presenceContext || {}
    t && (this.unmount = t(this.id))
  }
  unmount() {}
}
const WD = { animation: { Feature: LD }, exit: { Feature: VD } },
  Iy = (e, t) => Math.abs(e - t)
function UD(e, t) {
  const r = Iy(e.x, t.x),
    n = Iy(e.y, t.y)
  return Math.sqrt(r ** 2 + n ** 2)
}
class kk {
  constructor(t, r, { transformPagePoint: n } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return
        const u = pf(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          d = UD(u.offset, { x: 0, y: 0 }) >= 3
        if (!c && !d) return
        const { point: f } = u,
          { timestamp: h } = at
        this.history.push({ ...f, timestamp: h })
        const { onStart: m, onMove: p } = this.handlers
        c || (m && m(this.lastMoveEvent, u), (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, u)
      }),
      (this.handlePointerMove = (u, c) => {
        ;(this.lastMoveEvent = u),
          (this.lastMoveEventInfo = hf(c, this.transformPagePoint)),
          ke.update(this.updatePoint, !0)
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return
        const { onEnd: d, onSessionEnd: f } = this.handlers,
          h = pf(
            u.type === 'pointercancel' ? this.lastMoveEventInfo : hf(c, this.transformPagePoint),
            this.history
          )
        this.startEvent && d && d(u, h), f && f(u, h)
      }),
      !Vw(t))
    )
      return
    ;(this.handlers = r), (this.transformPagePoint = n)
    const o = Lc(t),
      i = hf(o, this.transformPagePoint),
      { point: a } = i,
      { timestamp: s } = at
    this.history = [{ ...a, timestamp: s }]
    const { onSessionStart: l } = r
    l && l(t, pf(i, this.history)),
      (this.removeListeners = Sn(
        Lr(window, 'pointermove', this.handlePointerMove),
        Lr(window, 'pointerup', this.handlePointerUp),
        Lr(window, 'pointercancel', this.handlePointerUp)
      ))
  }
  updateHandlers(t) {
    this.handlers = t
  }
  end() {
    this.removeListeners && this.removeListeners(), En.update(this.updatePoint)
  }
}
function hf(e, t) {
  return t ? { point: t(e.point) } : e
}
function Fy(e, t) {
  return { x: e.x - t.x, y: e.y - t.y }
}
function pf({ point: e }, t) {
  return { point: e, delta: Fy(e, Ck(t)), offset: Fy(e, HD(t)), velocity: GD(t, 0.1) }
}
function HD(e) {
  return e[0]
}
function Ck(e) {
  return e[e.length - 1]
}
function GD(e, t) {
  if (e.length < 2) return { x: 0, y: 0 }
  let r = e.length - 1,
    n = null
  const o = Ck(e)
  for (; r >= 0 && ((n = e[r]), !(o.timestamp - n.timestamp > xn(t))); ) r--
  if (!n) return { x: 0, y: 0 }
  const i = vo(o.timestamp - n.timestamp)
  if (i === 0) return { x: 0, y: 0 }
  const a = { x: (o.x - n.x) / i, y: (o.y - n.y) / i }
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
}
function Mt(e) {
  return e.max - e.min
}
function Qh(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r
}
function Dy(e, t, r, n = 0.5) {
  ;(e.origin = n),
    (e.originPoint = Ee(t.min, t.max, e.origin)),
    (e.scale = Mt(r) / Mt(t)),
    (Qh(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = Ee(r.min, r.max, e.origin) - e.originPoint),
    (Qh(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}
function Aa(e, t, r, n) {
  Dy(e.x, t.x, r.x, n ? n.originX : void 0), Dy(e.y, t.y, r.y, n ? n.originY : void 0)
}
function Ny(e, t, r) {
  ;(e.min = r.min + t.min), (e.max = e.min + Mt(t))
}
function KD(e, t, r) {
  Ny(e.x, t.x, r.x), Ny(e.y, t.y, r.y)
}
function zy(e, t, r) {
  ;(e.min = t.min - r.min), (e.max = e.min + Mt(t))
}
function Ra(e, t, r) {
  zy(e.x, t.x, r.x), zy(e.y, t.y, r.y)
}
function qD(e, { min: t, max: r }, n) {
  return (
    t !== void 0 && e < t
      ? (e = n ? Ee(t, e, n.min) : Math.max(e, t))
      : r !== void 0 && e > r && (e = n ? Ee(r, e, n.max) : Math.min(e, r)),
    e
  )
}
function Ly(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0,
  }
}
function YD(e, { top: t, left: r, bottom: n, right: o }) {
  return { x: Ly(e.x, r, o), y: Ly(e.y, t, n) }
}
function By(e, t) {
  let r = t.min - e.min,
    n = t.max - e.max
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n }
}
function XD(e, t) {
  return { x: By(e.x, t.x), y: By(e.y, t.y) }
}
function QD(e, t) {
  let r = 0.5
  const n = Mt(e),
    o = Mt(t)
  return (
    o > n ? (r = us(t.min, t.max - n, e.min)) : n > o && (r = us(e.min, e.max - o, t.min)),
    mo(0, 1, r)
  )
}
function ZD(e, t) {
  const r = {}
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r
}
const Zh = 0.35
function JD(e = Zh) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Zh),
    { x: Vy(e, 'left', 'right'), y: Vy(e, 'top', 'bottom') }
  )
}
function Vy(e, t, r) {
  return { min: Wy(e, t), max: Wy(e, r) }
}
function Wy(e, t) {
  return typeof e == 'number' ? e : e[t] || 0
}
const Uy = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  $a = () => ({ x: Uy(), y: Uy() }),
  Hy = () => ({ min: 0, max: 0 }),
  Ie = () => ({ x: Hy(), y: Hy() })
function hr(e) {
  return [e('x'), e('y')]
}
function _k({ top: e, left: t, right: r, bottom: n }) {
  return { x: { min: t, max: r }, y: { min: e, max: n } }
}
function eN({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min }
}
function tN(e, t) {
  if (!t) return e
  const r = t({ x: e.left, y: e.top }),
    n = t({ x: e.right, y: e.bottom })
  return { top: r.y, left: r.x, bottom: n.y, right: n.x }
}
function mf(e) {
  return e === void 0 || e === 1
}
function Jh({ scale: e, scaleX: t, scaleY: r }) {
  return !mf(e) || !mf(t) || !mf(r)
}
function Wn(e) {
  return Jh(e) || Pk(e) || e.z || e.rotate || e.rotateX || e.rotateY
}
function Pk(e) {
  return Gy(e.x) || Gy(e.y)
}
function Gy(e) {
  return e && e !== '0%'
}
function Vu(e, t, r) {
  const n = e - r,
    o = t * n
  return r + o
}
function Ky(e, t, r, n, o) {
  return o !== void 0 && (e = Vu(e, o, n)), Vu(e, r, n) + t
}
function ep(e, t = 0, r = 1, n, o) {
  ;(e.min = Ky(e.min, t, r, n, o)), (e.max = Ky(e.max, t, r, n, o))
}
function Ek(e, { x: t, y: r }) {
  ep(e.x, t.translate, t.scale, t.originPoint), ep(e.y, r.translate, r.scale, r.originPoint)
}
function rN(e, t, r, n = !1) {
  const o = r.length
  if (!o) return
  t.x = t.y = 1
  let i, a
  for (let s = 0; s < o; s++) {
    ;(i = r[s]), (a = i.projectionDelta)
    const l = i.instance
    ;(l && l.style && l.style.display === 'contents') ||
      (n &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        Yo(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      a && ((t.x *= a.x.scale), (t.y *= a.y.scale), Ek(e, a)),
      n && Wn(i.latestValues) && Yo(e, i.latestValues))
  }
  ;(t.x = qy(t.x)), (t.y = qy(t.y))
}
function qy(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1
}
function rn(e, t) {
  ;(e.min = e.min + t), (e.max = e.max + t)
}
function Yy(e, t, [r, n, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    a = Ee(e.min, e.max, i)
  ep(e, t[r], t[n], a, t.scale)
}
const nN = ['x', 'scaleX', 'originX'],
  oN = ['y', 'scaleY', 'originY']
function Yo(e, t) {
  Yy(e.x, t, nN), Yy(e.y, t, oN)
}
function Tk(e, t) {
  return _k(tN(e.getBoundingClientRect(), t))
}
function iN(e, t, r) {
  const n = Tk(e, r),
    { scroll: o } = t
  return o && (rn(n.x, o.offset.x), rn(n.y, o.offset.y)), n
}
const aN = new WeakMap()
class sN {
  constructor(t) {
    ;(this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ie()),
      (this.visualElement = t)
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement
    if (n && n.isPresent === !1) return
    const o = l => {
        this.stopAnimation(), r && this.snapToCursor(Lc(l, 'page').point)
      },
      i = (l, u) => {
        const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps()
        if (
          c &&
          !d &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Uw(c)),
          !this.openGlobalLock)
        )
          return
        ;(this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          hr(m => {
            let p = this.getAxisMotionValue(m).get() || 0
            if (Cr.test(p)) {
              const { projection: S } = this.visualElement
              if (S && S.layout) {
                const g = S.layout.layoutBox[m]
                g && (p = Mt(g) * (parseFloat(p) / 100))
              }
            }
            this.originPoint[m] = p
          }),
          f && ke.update(() => f(l, u))
        const { animationState: h } = this.visualElement
        h && h.setActive('whileDrag', !0)
      },
      a = (l, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: d,
          onDirectionLock: f,
          onDrag: h,
        } = this.getProps()
        if (!c && !this.openGlobalLock) return
        const { offset: m } = u
        if (d && this.currentDirection === null) {
          ;(this.currentDirection = lN(m)),
            this.currentDirection !== null && f && f(this.currentDirection)
          return
        }
        this.updateAxis('x', u.point, m),
          this.updateAxis('y', u.point, m),
          this.visualElement.render(),
          h && h(l, u)
      },
      s = (l, u) => this.stop(l, u)
    this.panSession = new kk(
      t,
      { onSessionStart: o, onStart: i, onMove: a, onSessionEnd: s },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    )
  }
  stop(t, r) {
    const n = this.isDragging
    if ((this.cancel(), !n)) return
    const { velocity: o } = r
    this.startAnimation(o)
    const { onDragEnd: i } = this.getProps()
    i && ke.update(() => i(t, r))
  }
  cancel() {
    this.isDragging = !1
    const { projection: t, animationState: r } = this.visualElement
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0)
    const { dragPropagation: n } = this.getProps()
    !n && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
      r && r.setActive('whileDrag', !1)
  }
  updateAxis(t, r, n) {
    const { drag: o } = this.getProps()
    if (!n || !xl(t, o, this.currentDirection)) return
    const i = this.getAxisMotionValue(t)
    let a = this.originPoint[t] + n[t]
    this.constraints && this.constraints[t] && (a = qD(a, this.constraints[t], this.elastic[t])),
      i.set(a)
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: r } = this.getProps(),
      { layout: n } = this.visualElement.projection || {},
      o = this.constraints
    t && Ko(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && n
      ? (this.constraints = YD(n.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = JD(r)),
      o !== this.constraints &&
        n &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        hr(i => {
          this.getAxisMotionValue(i) &&
            (this.constraints[i] = ZD(n.layoutBox[i], this.constraints[i]))
        })
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps()
    if (!t || !Ko(t)) return !1
    const n = t.current,
      { projection: o } = this.visualElement
    if (!o || !o.layout) return !1
    const i = iN(n, o.root, this.visualElement.getTransformPagePoint())
    let a = XD(o.layout.layoutBox, i)
    if (r) {
      const s = r(eN(a))
      ;(this.hasMutatedConstraints = !!s), s && (a = _k(s))
    }
    return a
  }
  startAnimation(t) {
    const {
        drag: r,
        dragMomentum: n,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: a,
        onDragTransitionEnd: s,
      } = this.getProps(),
      l = this.constraints || {},
      u = hr(c => {
        if (!xl(c, r, this.currentDirection)) return
        let d = (l && l[c]) || {}
        a && (d = { min: 0, max: 0 })
        const f = o ? 200 : 1e6,
          h = o ? 40 : 1e7,
          m = {
            type: 'inertia',
            velocity: n ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          }
        return this.startAxisValueAnimation(c, m)
      })
    return Promise.all(u).then(s)
  }
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t)
    return n.start(sv(t, n, 0, r))
  }
  stopAnimation() {
    hr(t => this.getAxisMotionValue(t).stop())
  }
  getAxisMotionValue(t) {
    const r = '_drag' + t.toUpperCase(),
      n = this.visualElement.getProps(),
      o = n[r]
    return o || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
  }
  snapToCursor(t) {
    hr(r => {
      const { drag: n } = this.getProps()
      if (!xl(r, n, this.currentDirection)) return
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(r)
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[r]
        i.set(t[r] - Ee(a, s, 0.5))
      }
    })
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return
    const { drag: t, dragConstraints: r } = this.getProps(),
      { projection: n } = this.visualElement
    if (!Ko(r) || !n || !this.constraints) return
    this.stopAnimation()
    const o = { x: 0, y: 0 }
    hr(a => {
      const s = this.getAxisMotionValue(a)
      if (s) {
        const l = s.get()
        o[a] = QD({ min: l, max: l }, this.constraints[a])
      }
    })
    const { transformTemplate: i } = this.visualElement.getProps()
    ;(this.visualElement.current.style.transform = i ? i({}, '') : 'none'),
      n.root && n.root.updateScroll(),
      n.updateLayout(),
      this.resolveConstraints(),
      hr(a => {
        if (!xl(a, t, null)) return
        const s = this.getAxisMotionValue(a),
          { min: l, max: u } = this.constraints[a]
        s.set(Ee(l, u, o[a]))
      })
  }
  addListeners() {
    if (!this.visualElement.current) return
    aN.set(this.visualElement, this)
    const t = this.visualElement.current,
      r = Lr(t, 'pointerdown', l => {
        const { drag: u, dragListener: c = !0 } = this.getProps()
        u && c && this.start(l)
      }),
      n = () => {
        const { dragConstraints: l } = this.getProps()
        Ko(l) && (this.constraints = this.resolveRefConstraints())
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener('measure', n)
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n()
    const a = Dr(window, 'resize', () => this.scalePositionWithinConstraints()),
      s = o.addEventListener('didUpdate', ({ delta: l, hasLayoutChanged: u }) => {
        this.isDragging &&
          u &&
          (hr(c => {
            const d = this.getAxisMotionValue(c)
            d && ((this.originPoint[c] += l[c].translate), d.set(d.get() + l[c].translate))
          }),
          this.visualElement.render())
      })
    return () => {
      a(), r(), i(), s && s()
    }
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: r = !1,
        dragDirectionLock: n = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: a = Zh,
        dragMomentum: s = !0,
      } = t
    return {
      ...t,
      drag: r,
      dragDirectionLock: n,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: s,
    }
  }
}
function xl(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e)
}
function lN(e, t = 10) {
  let r = null
  return Math.abs(e.y) > t ? (r = 'y') : Math.abs(e.x) > t && (r = 'x'), r
}
class uN extends Fn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Xe),
      (this.removeListeners = Xe),
      (this.controls = new sN(t))
  }
  mount() {
    const { dragControls: t } = this.node.getProps()
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Xe)
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners()
  }
}
const Xy = e => (t, r) => {
  e && ke.update(() => e(t, r))
}
class cN extends Fn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Xe)
  }
  onPointerDown(t) {
    this.session = new kk(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    })
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps()
    return {
      onSessionStart: Xy(t),
      onStart: Xy(r),
      onMove: n,
      onEnd: (i, a) => {
        delete this.session, o && ke.update(() => o(i, a))
      },
    }
  }
  mount() {
    this.removePointerDownListener = Lr(this.node.current, 'pointerdown', t =>
      this.onPointerDown(t)
    )
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers())
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end()
  }
}
function Ak() {
  const e = y.useContext(Cs)
  if (e === null) return [!0, null]
  const { isPresent: t, onExitComplete: r, register: n } = e,
    o = y.useId()
  return y.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0]
}
function dN() {
  return fN(y.useContext(Cs))
}
function fN(e) {
  return e === null ? !0 : e.isPresent
}
function Qy(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100
}
const ta = {
    correct: (e, t) => {
      if (!t.target) return e
      if (typeof e == 'string')
        if (B.test(e)) e = parseFloat(e)
        else return e
      const r = Qy(e, t.target.x),
        n = Qy(e, t.target.y)
      return `${r}% ${n}%`
    },
  },
  Rk = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/
function hN(e) {
  const t = Rk.exec(e)
  if (!t) return [,]
  const [, r, n] = t
  return [r, n]
}
function tp(e, t, r = 1) {
  const [n, o] = hN(e)
  if (!n) return
  const i = window.getComputedStyle(t).getPropertyValue(n)
  return i ? i.trim() : Vh(o) ? tp(o, t, r + 1) : o
}
function pN(e, { ...t }, r) {
  const n = e.current
  if (!(n instanceof Element)) return { target: t, transitionEnd: r }
  r && (r = { ...r }),
    e.values.forEach(o => {
      const i = o.get()
      if (!Vh(i)) return
      const a = tp(i, n)
      a && o.set(a)
    })
  for (const o in t) {
    const i = t[o]
    if (!Vh(i)) continue
    const a = tp(i, n)
    a && ((t[o] = a), r || (r = {}), r[o] === void 0 && (r[o] = i))
  }
  return { target: t, transitionEnd: r }
}
const Zy = '_$css',
  mN = {
    correct: (e, { treeScale: t, projectionDelta: r }) => {
      const n = e,
        o = e.includes('var('),
        i = []
      o && (e = e.replace(Rk, h => (i.push(h), Zy)))
      const a = Tn.parse(e)
      if (a.length > 5) return n
      const s = Tn.createTransformer(e),
        l = typeof a[0] != 'number' ? 1 : 0,
        u = r.x.scale * t.x,
        c = r.y.scale * t.y
      ;(a[0 + l] /= u), (a[1 + l] /= c)
      const d = Ee(u, c, 0.5)
      typeof a[2 + l] == 'number' && (a[2 + l] /= d), typeof a[3 + l] == 'number' && (a[3 + l] /= d)
      let f = s(a)
      if (o) {
        let h = 0
        f = f.replace(Zy, () => {
          const m = i[h]
          return h++, m
        })
      }
      return f
    },
  }
class vN extends so.Component {
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props,
      { projection: i } = t
    bF(gN),
      i &&
        (r.group && r.group.add(i),
        n && n.register && o && n.register(i),
        i.root.didUpdate(),
        i.addEventListener('animationComplete', () => {
          this.safeToRemove()
        }),
        i.setOptions({ ...i.options, onExitComplete: () => this.safeToRemove() })),
      (Pa.hasEverUpdated = !0)
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: n, drag: o, isPresent: i } = this.props,
      a = n.projection
    return (
      a &&
        ((a.isPresent = i),
        o || t.layoutDependency !== r || r === void 0 ? a.willUpdate() : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? a.promote()
            : a.relegate() ||
              ke.postRender(() => {
                const s = a.getStack()
                ;(!s || !s.members.length) && this.safeToRemove()
              }))),
      null
    )
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement
    t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n } = this.props,
      { projection: o } = t
    o &&
      (o.scheduleCheckAfterUnmount(),
      r && r.group && r.group.remove(o),
      n && n.deregister && n.deregister(o))
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props
    t && t()
  }
  render() {
    return null
  }
}
function $k(e) {
  const [t, r] = Ak(),
    n = y.useContext(Km)
  return so.createElement(vN, {
    ...e,
    layoutGroup: n,
    switchLayoutGroup: y.useContext(Aw),
    isPresent: t,
    safeToRemove: r,
  })
}
const gN = {
    borderRadius: {
      ...ta,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
      ],
    },
    borderTopLeftRadius: ta,
    borderTopRightRadius: ta,
    borderBottomLeftRadius: ta,
    borderBottomRightRadius: ta,
    boxShadow: mN,
  },
  jk = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  yN = jk.length,
  Jy = e => (typeof e == 'string' ? parseFloat(e) : e),
  e1 = e => typeof e == 'number' || B.test(e)
function bN(e, t, r, n, o, i) {
  o
    ? ((e.opacity = Ee(0, r.opacity !== void 0 ? r.opacity : 1, SN(n))),
      (e.opacityExit = Ee(t.opacity !== void 0 ? t.opacity : 1, 0, xN(n))))
    : i &&
      (e.opacity = Ee(
        t.opacity !== void 0 ? t.opacity : 1,
        r.opacity !== void 0 ? r.opacity : 1,
        n
      ))
  for (let a = 0; a < yN; a++) {
    const s = `border${jk[a]}Radius`
    let l = t1(t, s),
      u = t1(r, s)
    if (l === void 0 && u === void 0) continue
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || e1(l) === e1(u)
        ? ((e[s] = Math.max(Ee(Jy(l), Jy(u), n), 0)), (Cr.test(u) || Cr.test(l)) && (e[s] += '%'))
        : (e[s] = u)
  }
  ;(t.rotate || r.rotate) && (e.rotate = Ee(t.rotate || 0, r.rotate || 0, n))
}
function t1(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius
}
const SN = Mk(0, 0.5, nv),
  xN = Mk(0.5, 0.95, Xe)
function Mk(e, t, r) {
  return n => (n < e ? 0 : n > t ? 1 : r(us(e, t, n)))
}
function r1(e, t) {
  ;(e.min = t.min), (e.max = t.max)
}
function zt(e, t) {
  r1(e.x, t.x), r1(e.y, t.y)
}
function n1(e, t, r, n, o) {
  return (e -= t), (e = Vu(e, 1 / r, n)), o !== void 0 && (e = Vu(e, 1 / o, n)), e
}
function wN(e, t = 0, r = 1, n = 0.5, o, i = e, a = e) {
  if (
    (Cr.test(t) && ((t = parseFloat(t)), (t = Ee(a.min, a.max, t / 100) - a.min)),
    typeof t != 'number')
  )
    return
  let s = Ee(i.min, i.max, n)
  e === i && (s -= t), (e.min = n1(e.min, t, r, s, o)), (e.max = n1(e.max, t, r, s, o))
}
function o1(e, t, [r, n, o], i, a) {
  wN(e, t[r], t[n], t[o], t.scale, i, a)
}
const kN = ['x', 'scaleX', 'originX'],
  CN = ['y', 'scaleY', 'originY']
function i1(e, t, r, n) {
  o1(e.x, t, kN, r ? r.x : void 0, n ? n.x : void 0),
    o1(e.y, t, CN, r ? r.y : void 0, n ? n.y : void 0)
}
function a1(e) {
  return e.translate === 0 && e.scale === 1
}
function Ok(e) {
  return a1(e.x) && a1(e.y)
}
function rp(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}
function s1(e) {
  return Mt(e.x) / Mt(e.y)
}
class _N {
  constructor() {
    this.members = []
  }
  add(t) {
    lv(this.members, t), t.scheduleRender()
  }
  remove(t) {
    if ((uv(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
      const r = this.members[this.members.length - 1]
      r && this.promote(r)
    }
  }
  relegate(t) {
    const r = this.members.findIndex(o => t === o)
    if (r === 0) return !1
    let n
    for (let o = r; o >= 0; o--) {
      const i = this.members[o]
      if (i.isPresent !== !1) {
        n = i
        break
      }
    }
    return n ? (this.promote(n), !0) : !1
  }
  promote(t, r) {
    const n = this.lead
    if (t !== n && ((this.prevLead = n), (this.lead = t), t.show(), n)) {
      n.instance && n.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = n),
        r && (t.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((t.snapshot = n.snapshot),
          (t.snapshot.latestValues = n.animationValues || n.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0)
      const { crossfade: o } = t.options
      o === !1 && n.hide()
    }
  }
  exitAnimationComplete() {
    this.members.forEach(t => {
      const { options: r, resumingFrom: n } = t
      r.onExitComplete && r.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete()
    })
  }
  scheduleRender() {
    this.members.forEach(t => {
      t.instance && t.scheduleRender(!1)
    })
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
  }
}
function l1(e, t, r) {
  let n = ''
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y
  if (
    ((o || i) && (n = `translate3d(${o}px, ${i}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `),
    r)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = r
    l && (n += `rotate(${l}deg) `), u && (n += `rotateX(${u}deg) `), c && (n += `rotateY(${c}deg) `)
  }
  const a = e.x.scale * t.x,
    s = e.y.scale * t.y
  return (a !== 1 || s !== 1) && (n += `scale(${a}, ${s})`), n || 'none'
}
const PN = (e, t) => e.depth - t.depth
class EN {
  constructor() {
    ;(this.children = []), (this.isDirty = !1)
  }
  add(t) {
    lv(this.children, t), (this.isDirty = !0)
  }
  remove(t) {
    uv(this.children, t), (this.isDirty = !0)
  }
  forEach(t) {
    this.isDirty && this.children.sort(PN), (this.isDirty = !1), this.children.forEach(t)
  }
}
function TN(e, t) {
  const r = performance.now(),
    n = ({ timestamp: o }) => {
      const i = o - r
      i >= t && (En.read(n), e(i - t))
    }
  return ke.read(n, !0), () => En.read(n)
}
function AN(e) {
  window.MotionDebug && window.MotionDebug.record(e)
}
function RN(e) {
  return e instanceof SVGElement && e.tagName !== 'svg'
}
function $N(e, t, r) {
  const n = Ct(e) ? e : Pi(e)
  return n.start(sv('', n, t, r)), n.animation
}
const u1 = ['', 'X', 'Y', 'Z'],
  c1 = 1e3
let jN = 0
const Un = {
  type: 'projectionFrame',
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
}
function Ik({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: r,
  checkIsScrollRoot: n,
  resetTransform: o,
}) {
  return class {
    constructor(a, s = {}, l = t == null ? void 0 : t()) {
      ;(this.id = jN++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.potentialNodes = new Map()),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots())
        }),
        (this.updateProjection = () => {
          ;(Un.totalNodes = Un.resolvedTargetDeltas = Un.recalculatedProjection = 0),
            this.nodes.forEach(IN),
            this.nodes.forEach(zN),
            this.nodes.forEach(LN),
            this.nodes.forEach(FN),
            AN(Un)
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.elementId = a),
        (this.latestValues = s),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0),
        a && this.root.registerPotentialNode(a, this)
      for (let u = 0; u < this.path.length; u++) this.path[u].shouldResetTransform = !0
      this.root === this && (this.nodes = new EN())
    }
    addEventListener(a, s) {
      return (
        this.eventHandlers.has(a) || this.eventHandlers.set(a, new cv()),
        this.eventHandlers.get(a).add(s)
      )
    }
    notifyListeners(a, ...s) {
      const l = this.eventHandlers.get(a)
      l && l.notify(...s)
    }
    hasListeners(a) {
      return this.eventHandlers.has(a)
    }
    registerPotentialNode(a, s) {
      this.potentialNodes.set(a, s)
    }
    mount(a, s = !1) {
      if (this.instance) return
      ;(this.isSVG = RN(a)), (this.instance = a)
      const { layoutId: l, layout: u, visualElement: c } = this.options
      if (
        (c && !c.current && c.mount(a),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.elementId && this.root.potentialNodes.delete(this.elementId),
        s && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d
        const f = () => (this.root.updateBlockedByResize = !1)
        e(a, () => {
          ;(this.root.updateBlockedByResize = !0),
            d && d(),
            (d = TN(f, 250)),
            Pa.hasAnimatedSinceResize && ((Pa.hasAnimatedSinceResize = !1), this.nodes.forEach(f1))
        })
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            'didUpdate',
            ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: h, layout: m }) => {
              if (this.isTreeAnimationBlocked()) {
                ;(this.target = void 0), (this.relativeTarget = void 0)
                return
              }
              const p = this.options.transition || c.getDefaultTransition() || HN,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: g } = c.getProps(),
                v = !this.targetLayout || !rp(this.targetLayout, m) || h,
                b = !f && h
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                b ||
                (f && (v || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, b)
                const k = { ...bk(p, 'layout'), onPlay: S, onComplete: g }
                ;(c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((k.delay = 0), (k.type = !1)),
                  this.startAnimation(k)
              } else
                !f && this.animationProgress === 0 && f1(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete()
              this.targetLayout = m
            }
          )
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this)
      const a = this.getStack()
      a && a.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        En.preRender(this.updateProjection)
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(BN), this.animationId++)
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options
      return a && a.getProps().transformTemplate
    }
    willUpdate(a = !0) {
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete()
        return
      }
      if ((!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)) return
      this.isLayoutDirty = !0
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c]
        ;(d.shouldResetTransform = !0),
          d.updateScroll('snapshot'),
          d.options.layoutRoot && d.willUpdate(!1)
      }
      const { layoutId: s, layout: l } = this.options
      if (s === void 0 && !l) return
      const u = this.getTransformTemplate()
      ;(this.prevTransformTemplateValue = u ? u(this.latestValues, '') : void 0),
        this.updateSnapshot(),
        a && this.notifyListeners('willUpdate')
    }
    didUpdate() {
      if (this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(d1)
        return
      }
      this.isUpdating &&
        ((this.isUpdating = !1),
        this.potentialNodes.size && (this.potentialNodes.forEach(GN), this.potentialNodes.clear()),
        this.nodes.forEach(NN),
        this.nodes.forEach(MN),
        this.nodes.forEach(ON),
        this.clearAllSnapshots(),
        of.update(),
        of.preRender(),
        of.render())
    }
    clearAllSnapshots() {
      this.nodes.forEach(DN), this.sharedNodes.forEach(VN)
    }
    scheduleUpdateProjection() {
      ke.preRender(this.updateProjection, !1, !0)
    }
    scheduleCheckAfterUnmount() {
      ke.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
      })
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure())
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll()
      const a = this.layout
      ;(this.layout = this.measure(!1)),
        (this.layoutCorrected = Ie()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox)
      const { visualElement: s } = this.options
      s && s.notify('LayoutMeasure', this.layout.layoutBox, a ? a.layoutBox : void 0)
    }
    updateScroll(a = 'measure') {
      let s = !!(this.options.layoutScroll && this.instance)
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === a &&
        (s = !1),
        s &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: a,
            isRoot: n(this.instance),
            offset: r(this.instance),
          })
    }
    resetTransform() {
      if (!o) return
      const a = this.isLayoutDirty || this.shouldResetTransform,
        s = this.projectionDelta && !Ok(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, '') : void 0,
        c = u !== this.prevTransformTemplateValue
      a &&
        (s || Wn(this.latestValues) || c) &&
        (o(this.instance, u), (this.shouldResetTransform = !1), this.scheduleRender())
    }
    measure(a = !0) {
      const s = this.measurePageBox()
      let l = this.removeElementScroll(s)
      return (
        a && (l = this.removeTransform(l)),
        KN(l),
        {
          animationId: this.root.animationId,
          measuredBox: s,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      )
    }
    measurePageBox() {
      const { visualElement: a } = this.options
      if (!a) return Ie()
      const s = a.measureViewportBox(),
        { scroll: l } = this.root
      return l && (rn(s.x, l.offset.x), rn(s.y, l.offset.y)), s
    }
    removeElementScroll(a) {
      const s = Ie()
      zt(s, a)
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            zt(s, a)
            const { scroll: f } = this.root
            f && (rn(s.x, -f.offset.x), rn(s.y, -f.offset.y))
          }
          rn(s.x, c.offset.x), rn(s.y, c.offset.y)
        }
      }
      return s
    }
    applyTransform(a, s = !1) {
      const l = Ie()
      zt(l, a)
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u]
        !s &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Yo(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Wn(c.latestValues) && Yo(l, c.latestValues)
      }
      return Wn(this.latestValues) && Yo(l, this.latestValues), l
    }
    removeTransform(a) {
      const s = Ie()
      zt(s, a)
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l]
        if (!u.instance || !Wn(u.latestValues)) continue
        Jh(u.latestValues) && u.updateSnapshot()
        const c = Ie(),
          d = u.measurePageBox()
        zt(c, d), i1(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
      }
      return Wn(this.latestValues) && i1(s, this.latestValues), s
    }
    setTargetDelta(a) {
      ;(this.targetDelta = a), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0)
    }
    setOptions(a) {
      this.options = { ...this.options, ...a, crossfade: a.crossfade !== void 0 ? a.crossfade : !0 }
    }
    clearMeasurements() {
      ;(this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1)
    }
    resolveTargetDelta(a = !1) {
      var s
      const l = this.getLead()
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty)
      const u = !!this.resumingFrom || this !== l
      if (
        !(
          a ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) && s.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return
      const { layout: d, layoutId: f } = this.options
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = at.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const h = this.getClosestProjectingParent()
          h && h.layout
            ? ((this.relativeParent = h),
              (this.relativeTarget = Ie()),
              (this.relativeTargetOrigin = Ie()),
              Ra(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox),
              zt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0)
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target || ((this.target = Ie()), (this.targetWithTransforms = Ie())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.relativeParent.resolvedRelativeTargetAt !== at.timestamp &&
                  this.relativeParent.resolveTargetDelta(!0),
                KD(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : zt(this.target, this.layout.layoutBox),
                Ek(this.target, this.targetDelta))
              : zt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1
            const h = this.getClosestProjectingParent()
            h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target
              ? ((this.relativeParent = h),
                (this.relativeTarget = Ie()),
                (this.relativeTargetOrigin = Ie()),
                Ra(this.relativeTargetOrigin, this.target, h.target),
                zt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0)
          }
          Un.resolvedTargetDeltas++
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Jh(this.parent.latestValues) || Pk(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
    }
    calcProjection() {
      var a
      const s = this.getLead(),
        l = !!this.resumingFrom || this !== s
      let u = !0
      if (
        ((this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) && a.isProjectionDirty)) &&
          (u = !1),
        l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
        this.resolvedRelativeTargetAt === at.timestamp && (u = !1),
        u)
      )
        return
      const { layout: c, layoutId: d } = this.options
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return
      zt(this.layoutCorrected, this.layout.layoutBox),
        rN(this.layoutCorrected, this.treeScale, this.path, l)
      const { target: f } = s
      if (!f) return
      this.projectionDelta ||
        ((this.projectionDelta = $a()), (this.projectionDeltaWithTransform = $a()))
      const h = this.treeScale.x,
        m = this.treeScale.y,
        p = this.projectionTransform
      Aa(this.projectionDelta, this.layoutCorrected, f, this.latestValues),
        (this.projectionTransform = l1(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== p || this.treeScale.x !== h || this.treeScale.y !== m) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', f)),
        Un.recalculatedProjection++
    }
    hide() {
      this.isVisible = !1
    }
    show() {
      this.isVisible = !0
    }
    scheduleRender(a = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), a)) {
        const s = this.getStack()
        s && s.scheduleRender()
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
    }
    setAnimationOrigin(a, s = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = $a()
      ;(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !s)
      const f = Ie(),
        h = l ? l.source : void 0,
        m = this.layout ? this.layout.source : void 0,
        p = h !== m,
        S = this.getStack(),
        g = !S || S.members.length <= 1,
        v = !!(p && !g && this.options.crossfade === !0 && !this.path.some(UN))
      this.animationProgress = 0
      let b
      ;(this.mixTargetDelta = k => {
        const C = k / 1e3
        h1(d.x, a.x, C),
          h1(d.y, a.y, C),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ra(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            WN(this.relativeTarget, this.relativeTargetOrigin, f, C),
            b && rp(this.relativeTarget, b) && (this.isProjectionDirty = !1),
            b || (b = Ie()),
            zt(b, this.relativeTarget)),
          p && ((this.animationValues = c), bN(c, u, this.latestValues, C, v, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C)
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
    }
    startAnimation(a) {
      this.notifyListeners('animationStart'),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (En.update(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ke.update(() => {
          ;(Pa.hasAnimatedSinceResize = !0),
            (this.currentAnimation = $N(0, c1, {
              ...a,
              onUpdate: s => {
                this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s)
              },
              onComplete: () => {
                a.onComplete && a.onComplete(), this.completeAnimation()
              },
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0)
        }))
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0))
      const a = this.getStack()
      a && a.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners('animationComplete')
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(c1), this.currentAnimation.stop()),
        this.completeAnimation()
    }
    applyTransformsToTarget() {
      const a = this.getLead()
      let { targetWithTransforms: s, target: l, layout: u, latestValues: c } = a
      if (!(!s || !l || !u)) {
        if (
          this !== a &&
          this.layout &&
          u &&
          Fk(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Ie()
          const d = Mt(this.layout.layoutBox.x)
          ;(l.x.min = a.target.x.min), (l.x.max = l.x.min + d)
          const f = Mt(this.layout.layoutBox.y)
          ;(l.y.min = a.target.y.min), (l.y.max = l.y.min + f)
        }
        zt(s, l), Yo(s, c), Aa(this.projectionDeltaWithTransform, this.layoutCorrected, s, c)
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new _N()), this.sharedNodes.get(a).add(s)
      const u = s.options.initialPromotionConfig
      s.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(s) : void 0,
      })
    }
    isLead() {
      const a = this.getStack()
      return a ? a.lead === this : !0
    }
    getLead() {
      var a
      const { layoutId: s } = this.options
      return s ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) || this : this
    }
    getPrevLead() {
      var a
      const { layoutId: s } = this.options
      return s ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.prevLead) : void 0
    }
    getStack() {
      const { layoutId: a } = this.options
      if (a) return this.root.sharedNodes.get(a)
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      const u = this.getStack()
      u && u.promote(this, l),
        a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        s && this.setOptions({ transition: s })
    }
    relegate() {
      const a = this.getStack()
      return a ? a.relegate(this) : !1
    }
    resetRotation() {
      const { visualElement: a } = this.options
      if (!a) return
      let s = !1
      const { latestValues: l } = a
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s)) return
      const u = {}
      for (let c = 0; c < u1.length; c++) {
        const d = 'rotate' + u1[c]
        l[d] && ((u[d] = l[d]), a.setStaticValue(d, 0))
      }
      a.render()
      for (const c in u) a.setStaticValue(c, u[c])
      a.scheduleRender()
    }
    getProjectionStyles(a = {}) {
      var s, l
      const u = {}
      if (!this.instance || this.isSVG) return u
      if (this.isVisible) u.visibility = ''
      else return { visibility: 'hidden' }
      const c = this.getTransformTemplate()
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ''),
          (u.pointerEvents = Kl(a.pointerEvents) || ''),
          (u.transform = c ? c(this.latestValues, '') : 'none'),
          u
        )
      const d = this.getLead()
      if (!this.projectionDelta || !this.layout || !d.target) {
        const p = {}
        return (
          this.options.layoutId &&
            ((p.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (p.pointerEvents = Kl(a.pointerEvents) || '')),
          this.hasProjected &&
            !Wn(this.latestValues) &&
            ((p.transform = c ? c({}, '') : 'none'), (this.hasProjected = !1)),
          p
        )
      }
      const f = d.animationValues || d.latestValues
      this.applyTransformsToTarget(),
        (u.transform = l1(this.projectionDeltaWithTransform, this.treeScale, f)),
        c && (u.transform = c(f, u.transform))
      const { x: h, y: m } = this.projectionDelta
      ;(u.transformOrigin = `${h.origin * 100}% ${m.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !==
                    null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ''
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0)
      for (const p in Ou) {
        if (f[p] === void 0) continue
        const { correct: S, applyTo: g } = Ou[p],
          v = u.transform === 'none' ? f[p] : S(f[p], d)
        if (g) {
          const b = g.length
          for (let k = 0; k < b; k++) u[g[k]] = v
        } else u[p] = v
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = d === this ? Kl(a.pointerEvents) || '' : 'none'),
        u
      )
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0
    }
    resetTree() {
      this.root.nodes.forEach(a => {
        var s
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop()
      }),
        this.root.nodes.forEach(d1),
        this.root.sharedNodes.clear()
    }
  }
}
function MN(e) {
  e.updateLayout()
}
function ON(e) {
  var t
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot
  if (e.isLead() && e.layout && r && e.hasListeners('didUpdate')) {
    const { layoutBox: n, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      a = r.source !== e.layout.source
    i === 'size'
      ? hr(d => {
          const f = a ? r.measuredBox[d] : r.layoutBox[d],
            h = Mt(f)
          ;(f.min = n[d].min), (f.max = f.min + h)
        })
      : Fk(i, r.layoutBox, n) &&
        hr(d => {
          const f = a ? r.measuredBox[d] : r.layoutBox[d],
            h = Mt(n[d])
          f.max = f.min + h
        })
    const s = $a()
    Aa(s, n, r.layoutBox)
    const l = $a()
    a ? Aa(l, e.applyTransform(o, !0), r.measuredBox) : Aa(l, n, r.layoutBox)
    const u = !Ok(s)
    let c = !1
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent()
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d
        if (f && h) {
          const m = Ie()
          Ra(m, r.layoutBox, f.layoutBox)
          const p = Ie()
          Ra(p, n, h.layoutBox),
            rp(m, p) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = p), (e.relativeTargetOrigin = m), (e.relativeParent = d))
        }
      }
    }
    e.notifyListeners('didUpdate', {
      layout: n,
      snapshot: r,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    })
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options
    n && n()
  }
  e.options.transition = void 0
}
function IN(e) {
  Un.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function FN(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function DN(e) {
  e.clearSnapshot()
}
function d1(e) {
  e.clearMeasurements()
}
function NN(e) {
  const { visualElement: t } = e.options
  t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'), e.resetTransform()
}
function f1(e) {
  e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0)
}
function zN(e) {
  e.resolveTargetDelta()
}
function LN(e) {
  e.calcProjection()
}
function BN(e) {
  e.resetRotation()
}
function VN(e) {
  e.removeLeadSnapshot()
}
function h1(e, t, r) {
  ;(e.translate = Ee(t.translate, 0, r)),
    (e.scale = Ee(t.scale, 1, r)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint)
}
function p1(e, t, r, n) {
  ;(e.min = Ee(t.min, r.min, n)), (e.max = Ee(t.max, r.max, n))
}
function WN(e, t, r, n) {
  p1(e.x, t.x, r.x, n), p1(e.y, t.y, r.y, n)
}
function UN(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0
}
const HN = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }
function GN(e, t) {
  let r = e.root
  for (let i = e.path.length - 1; i >= 0; i--)
    if (e.path[i].instance) {
      r = e.path[i]
      break
    }
  const o = (r && r !== e.root ? r.instance : document).querySelector(`[data-projection-id="${t}"]`)
  o && e.mount(o, !0)
}
function m1(e) {
  ;(e.min = Math.round(e.min)), (e.max = Math.round(e.max))
}
function KN(e) {
  m1(e.x), m1(e.y)
}
function Fk(e, t, r) {
  return e === 'position' || (e === 'preserve-aspect' && !Qh(s1(t), s1(r), 0.2))
}
const qN = Ik({
    attachResizeListener: (e, t) => Dr(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  vf = { current: void 0 },
  Dk = Ik({
    measureScroll: e => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!vf.current) {
        const e = new qN(0, {})
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (vf.current = e)
      }
      return vf.current
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none'
    },
    checkIsScrollRoot: e => window.getComputedStyle(e).position === 'fixed',
  }),
  YN = { pan: { Feature: cN }, drag: { Feature: uN, ProjectionNode: Dk, MeasureLayout: $k } },
  XN = new Set(['width', 'height', 'top', 'left', 'right', 'bottom', 'x', 'y']),
  Nk = e => XN.has(e),
  QN = e => Object.keys(e).some(Nk),
  v1 = e => e === ko || e === B,
  g1 = (e, t) => parseFloat(e.split(', ')[t]),
  y1 =
    (e, t) =>
    (r, { transform: n }) => {
      if (n === 'none' || !n) return 0
      const o = n.match(/^matrix3d\((.+)\)$/)
      if (o) return g1(o[1], t)
      {
        const i = n.match(/^matrix\((.+)\)$/)
        return i ? g1(i[1], e) : 0
      }
    },
  ZN = new Set(['x', 'y', 'z']),
  JN = zc.filter(e => !ZN.has(e))
function ez(e) {
  const t = []
  return (
    JN.forEach(r => {
      const n = e.getValue(r)
      n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith('scale') ? 1 : 0))
    }),
    t.length && e.render(),
    t
  )
}
const b1 = {
    width: ({ x: e }, { paddingLeft: t = '0', paddingRight: r = '0' }) =>
      e.max - e.min - parseFloat(t) - parseFloat(r),
    height: ({ y: e }, { paddingTop: t = '0', paddingBottom: r = '0' }) =>
      e.max - e.min - parseFloat(t) - parseFloat(r),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: y1(4, 13),
    y: y1(5, 14),
  },
  tz = (e, t, r) => {
    const n = t.measureViewportBox(),
      o = t.current,
      i = getComputedStyle(o),
      { display: a } = i,
      s = {}
    a === 'none' && t.setStaticValue('display', e.display || 'block'),
      r.forEach(u => {
        s[u] = b1[u](n, i)
      }),
      t.render()
    const l = t.measureViewportBox()
    return (
      r.forEach(u => {
        const c = t.getValue(u)
        c && c.jump(s[u]), (e[u] = b1[u](l, i))
      }),
      e
    )
  },
  rz = (e, t, r = {}, n = {}) => {
    ;(t = { ...t }), (n = { ...n })
    const o = Object.keys(t).filter(Nk)
    let i = [],
      a = !1
    const s = []
    if (
      (o.forEach(l => {
        const u = e.getValue(l)
        if (!e.hasValue(l)) return
        let c = r[l],
          d = ea(c)
        const f = t[l]
        let h
        if (Fu(f)) {
          const m = f.length,
            p = f[0] === null ? 1 : 0
          ;(c = f[p]), (d = ea(c))
          for (let S = p; S < m; S++) h ? Du(ea(f[S]) === h) : (h = ea(f[S]))
        } else h = ea(f)
        if (d !== h)
          if (v1(d) && v1(h)) {
            const m = u.get()
            typeof m == 'string' && u.set(parseFloat(m)),
              typeof f == 'string'
                ? (t[l] = parseFloat(f))
                : Array.isArray(f) && h === B && (t[l] = f.map(parseFloat))
          } else
            d != null && d.transform && h != null && h.transform && (c === 0 || f === 0)
              ? c === 0
                ? u.set(h.transform(c))
                : (t[l] = d.transform(f))
              : (a || ((i = ez(e)), (a = !0)),
                s.push(l),
                (n[l] = n[l] !== void 0 ? n[l] : t[l]),
                u.jump(f))
      }),
      s.length)
    ) {
      const l = s.indexOf('height') >= 0 ? window.pageYOffset : null,
        u = tz(t, e, s)
      return (
        i.length &&
          i.forEach(([c, d]) => {
            e.getValue(c).set(d)
          }),
        e.render(),
        Fc && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: n }
      )
    } else return { target: t, transitionEnd: n }
  }
function nz(e, t, r, n) {
  return QN(t) ? rz(e, t, r, n) : { target: t, transitionEnd: n }
}
const oz = (e, t, r, n) => {
    const o = pN(e, t, n)
    return (t = o.target), (n = o.transitionEnd), nz(e, t, r, n)
  },
  np = { current: null },
  zk = { current: !1 }
function iz() {
  if (((zk.current = !0), !!Fc))
    if (window.matchMedia) {
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (np.current = e.matches)
      e.addListener(t), t()
    } else np.current = !1
}
function az(e, t, r) {
  const { willChange: n } = t
  for (const o in t) {
    const i = t[o],
      a = r[o]
    if (Ct(i)) e.addValue(o, i), Bu(n) && n.add(o)
    else if (Ct(a)) e.addValue(o, Pi(i, { owner: e })), Bu(n) && n.remove(o)
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o)
        !s.hasAnimated && s.set(i)
      } else {
        const s = e.getStaticValue(o)
        e.addValue(o, Pi(s !== void 0 ? s : i, { owner: e }))
      }
  }
  for (const o in r) t[o] === void 0 && e.removeValue(o)
  return t
}
const S1 = new WeakMap(),
  Lk = Object.keys(as),
  sz = Lk.length,
  x1 = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete',
  ],
  lz = Hm.length
class uz {
  constructor(
    { parent: t, props: r, presenceContext: n, reducedMotionConfig: o, visualState: i },
    a = {}
  ) {
    ;(this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
      }),
      (this.scheduleRender = () => ke.render(this.render, !1, !0))
    const { latestValues: s, renderState: l } = i
    ;(this.latestValues = s),
      (this.baseTarget = { ...s }),
      (this.initialValues = r.initial ? { ...s } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = r),
      (this.presenceContext = n),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = a),
      (this.isControllingVariants = Nc(r)),
      (this.isVariantNode = Tw(r)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current))
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(r, {})
    for (const d in c) {
      const f = c[d]
      s[d] !== void 0 && Ct(f) && (f.set(s[d], !1), Bu(u) && u.add(d))
    }
  }
  scrapeMotionValuesFromProps(t, r) {
    return {}
  }
  mount(t) {
    ;(this.current = t),
      S1.set(t, this),
      this.projection && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, n) => this.bindToMotionValue(n, r)),
      zk.current || iz(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
          ? !0
          : np.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext)
  }
  unmount() {
    S1.delete(this.current),
      this.projection && this.projection.unmount(),
      En.update(this.notifyUpdate),
      En.render(this.render),
      this.valueSubscriptions.forEach(t => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this)
    for (const t in this.events) this.events[t].clear()
    for (const t in this.features) this.features[t].unmount()
    this.current = null
  }
  bindToMotionValue(t, r) {
    const n = wo.has(t),
      o = r.on('change', a => {
        ;(this.latestValues[t] = a),
          this.props.onUpdate && ke.update(this.notifyUpdate, !1, !0),
          n && this.projection && (this.projection.isTransformDirty = !0)
      }),
      i = r.on('renderRequest', this.scheduleRender)
    this.valueSubscriptions.set(t, () => {
      o(), i()
    })
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current)
  }
  loadFeatures({ children: t, ...r }, n, o, i, a) {
    let s, l
    for (let u = 0; u < sz; u++) {
      const c = Lk[u],
        { isEnabled: d, Feature: f, ProjectionNode: h, MeasureLayout: m } = as[c]
      h && (s = h),
        d(r) && (!this.features[c] && f && (this.features[c] = new f(this)), m && (l = m))
    }
    if (!this.projection && s) {
      this.projection = new s(i, this.latestValues, this.parent && this.parent.projection)
      const {
        layoutId: u,
        layout: c,
        drag: d,
        dragConstraints: f,
        layoutScroll: h,
        layoutRoot: m,
      } = r
      this.projection.setOptions({
        layoutId: u,
        layout: c,
        alwaysMeasureLayout: !!d || (f && Ko(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof c == 'string' ? c : 'both',
        initialPromotionConfig: a,
        layoutScroll: h,
        layoutRoot: m,
      })
    }
    return l
  }
  updateFeatures() {
    for (const t in this.features) {
      const r = this.features[t]
      r.isMounted ? r.update(this.props, this.prevProps) : (r.mount(), (r.isMounted = !0))
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props)
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ie()
  }
  getStaticValue(t) {
    return this.latestValues[t]
  }
  setStaticValue(t, r) {
    this.latestValues[t] = r
  }
  makeTargetAnimatable(t, r = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, r)
  }
  update(t, r) {
    ;(t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = r)
    for (let n = 0; n < x1.length; n++) {
      const o = x1[n]
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o])
      const i = t['on' + o]
      i && (this.propEventSubscriptions[o] = this.on(o, i))
    }
    ;(this.prevMotionValues = az(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue()
  }
  getProps() {
    return this.props
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0
  }
  getDefaultTransition() {
    return this.props.transition
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0
    if (!this.isControllingVariants) {
      const n = this.parent ? this.parent.getVariantContext() || {} : {}
      return this.props.initial !== void 0 && (n.initial = this.props.initial), n
    }
    const r = {}
    for (let n = 0; n < lz; n++) {
      const o = Hm[n],
        i = this.props[o]
      ;(is(i) || i === !1) && (r[o] = i)
    }
    return r
  }
  addVariantChild(t) {
    const r = this.getClosestVariantNode()
    if (r) return r.variantChildren && r.variantChildren.add(t), () => r.variantChildren.delete(t)
  }
  addValue(t, r) {
    r !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, r)),
      this.values.set(t, r),
      (this.latestValues[t] = r.get())
  }
  removeValue(t) {
    this.values.delete(t)
    const r = this.valueSubscriptions.get(t)
    r && (r(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState)
  }
  hasValue(t) {
    return this.values.has(t)
  }
  getValue(t, r) {
    if (this.props.values && this.props.values[t]) return this.props.values[t]
    let n = this.values.get(t)
    return n === void 0 && r !== void 0 && ((n = Pi(r, { owner: this })), this.addValue(t, n)), n
  }
  readValue(t) {
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : this.readValueFromInstance(this.current, t, this.options)
  }
  setBaseTarget(t, r) {
    this.baseTarget[t] = r
  }
  getBaseTarget(t) {
    var r
    const { initial: n } = this.props,
      o =
        typeof n == 'string' || typeof n == 'object'
          ? (r = tv(this.props, n)) === null || r === void 0
            ? void 0
            : r[t]
          : void 0
    if (n && o !== void 0) return o
    const i = this.getBaseTargetFromProps(this.props, t)
    return i !== void 0 && !Ct(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t]
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new cv()), this.events[t].add(r)
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r)
  }
}
class Bk extends uz {
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0
  }
  removeValueFromRenderState(t, { vars: r, style: n }) {
    delete r[t], delete n[t]
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: r, ...n },
    { transformValues: o },
    i
  ) {
    let a = AD(n, t || {}, this)
    if ((o && (r && (r = o(r)), n && (n = o(n)), a && (a = o(a))), i)) {
      ED(this, n, a)
      const s = oz(this, n, a, r)
      ;(r = s.transitionEnd), (n = s.target)
    }
    return { transition: t, transitionEnd: r, ...n }
  }
}
function cz(e) {
  return window.getComputedStyle(e)
}
class dz extends Bk {
  readValueFromInstance(t, r) {
    if (wo.has(r)) {
      const n = iv(r)
      return (n && n.default) || 0
    } else {
      const n = cz(t),
        o = (jw(r) ? n.getPropertyValue(r) : n[r]) || 0
      return typeof o == 'string' ? o.trim() : o
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return Tk(t, r)
  }
  build(t, r, n, o) {
    Ym(t, r, n, o.transformTemplate)
  }
  scrapeMotionValuesFromProps(t, r) {
    return ev(t, r)
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription)
    const { children: t } = this.props
    Ct(t) &&
      (this.childSubscription = t.on('change', r => {
        this.current && (this.current.textContent = `${r}`)
      }))
  }
  renderInstance(t, r, n, o) {
    Dw(t, r, n, o)
  }
}
class fz extends Bk {
  constructor() {
    super(...arguments), (this.isSVGTag = !1)
  }
  getBaseTargetFromProps(t, r) {
    return t[r]
  }
  readValueFromInstance(t, r) {
    if (wo.has(r)) {
      const n = iv(r)
      return (n && n.default) || 0
    }
    return (r = Nw.has(r) ? r : Jm(r)), t.getAttribute(r)
  }
  measureInstanceViewportBox() {
    return Ie()
  }
  scrapeMotionValuesFromProps(t, r) {
    return Lw(t, r)
  }
  build(t, r, n, o) {
    Qm(t, r, n, this.isSVGTag, o.transformTemplate)
  }
  renderInstance(t, r, n, o) {
    zw(t, r, n, o)
  }
  mount(t) {
    ;(this.isSVGTag = Zm(t.tagName)), super.mount(t)
  }
}
const hz = (e, t) =>
    qm(e)
      ? new fz(t, { enableHardwareAcceleration: !1 })
      : new dz(t, { enableHardwareAcceleration: !0 }),
  pz = { layout: { ProjectionNode: Dk, MeasureLayout: $k } },
  mz = { ...WD, ...l4, ...YN, ...pz },
  Ii = gF((e, t) => HF(e, t, mz, hz))
function Vk() {
  const e = y.useRef(!1)
  return (
    Mu(
      () => (
        (e.current = !0),
        () => {
          e.current = !1
        }
      ),
      []
    ),
    e
  )
}
function vz() {
  const e = Vk(),
    [t, r] = y.useState(0),
    n = y.useCallback(() => {
      e.current && r(t + 1)
    }, [t])
  return [y.useCallback(() => ke.postRender(n), [n]), t]
}
class gz extends y.Component {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current
    if (r && t.isPresent && !this.props.isPresent) {
      const n = this.props.sizeRef.current
      ;(n.height = r.offsetHeight || 0),
        (n.width = r.offsetWidth || 0),
        (n.top = r.offsetTop),
        (n.left = r.offsetLeft)
    }
    return null
  }
  componentDidUpdate() {}
  render() {
    return this.props.children
  }
}
function yz({ children: e, isPresent: t }) {
  const r = y.useId(),
    n = y.useRef(null),
    o = y.useRef({ width: 0, height: 0, top: 0, left: 0 })
  return (
    y.useInsertionEffect(() => {
      const { width: i, height: a, top: s, left: l } = o.current
      if (t || !n.current || !i || !a) return
      n.current.dataset.motionPopId = r
      const u = document.createElement('style')
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(u)
        }
      )
    }, [t]),
    y.createElement(gz, { isPresent: t, childRef: n, sizeRef: o }, y.cloneElement(e, { ref: n }))
  )
}
const gf = ({
  children: e,
  initial: t,
  isPresent: r,
  onExitComplete: n,
  custom: o,
  presenceAffectsLayout: i,
  mode: a,
}) => {
  const s = Gm(bz),
    l = y.useId(),
    u = y.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: r,
        custom: o,
        onExitComplete: c => {
          s.set(c, !0)
          for (const d of s.values()) if (!d) return
          n && n()
        },
        register: c => (s.set(c, !1), () => s.delete(c)),
      }),
      i ? void 0 : [r]
    )
  return (
    y.useMemo(() => {
      s.forEach((c, d) => s.set(d, !1))
    }, [r]),
    y.useEffect(() => {
      !r && !s.size && n && n()
    }, [r]),
    a === 'popLayout' && (e = y.createElement(yz, { isPresent: r }, e)),
    y.createElement(Cs.Provider, { value: u }, e)
  )
}
function bz() {
  return new Map()
}
function Sz(e) {
  return y.useEffect(() => () => e(), [])
}
const Mo = e => e.key || ''
function xz(e, t) {
  e.forEach(r => {
    const n = Mo(r)
    t.set(n, r)
  })
}
function wz(e) {
  const t = []
  return (
    y.Children.forEach(e, r => {
      y.isValidElement(r) && t.push(r)
    }),
    t
  )
}
const As = ({
  children: e,
  custom: t,
  initial: r = !0,
  onExitComplete: n,
  exitBeforeEnter: o,
  presenceAffectsLayout: i = !0,
  mode: a = 'sync',
}) => {
  let [s] = vz()
  const l = y.useContext(Km).forceRender
  l && (s = l)
  const u = Vk(),
    c = wz(e)
  let d = c
  const f = new Set(),
    h = y.useRef(d),
    m = y.useRef(new Map()).current,
    p = y.useRef(!0)
  if (
    (Mu(() => {
      ;(p.current = !1), xz(c, m), (h.current = d)
    }),
    Sz(() => {
      ;(p.current = !0), m.clear(), f.clear()
    }),
    p.current)
  )
    return y.createElement(
      y.Fragment,
      null,
      d.map(b =>
        y.createElement(
          gf,
          {
            key: Mo(b),
            isPresent: !0,
            initial: r ? void 0 : !1,
            presenceAffectsLayout: i,
            mode: a,
          },
          b
        )
      )
    )
  d = [...d]
  const S = h.current.map(Mo),
    g = c.map(Mo),
    v = S.length
  for (let b = 0; b < v; b++) {
    const k = S[b]
    g.indexOf(k) === -1 && f.add(k)
  }
  return (
    a === 'wait' && f.size && (d = []),
    f.forEach(b => {
      if (g.indexOf(b) !== -1) return
      const k = m.get(b)
      if (!k) return
      const C = S.indexOf(b),
        R = () => {
          m.delete(b), f.delete(b)
          const E = h.current.findIndex(T => T.key === b)
          if ((h.current.splice(E, 1), !f.size)) {
            if (((h.current = c), u.current === !1)) return
            s(), n && n()
          }
        }
      d.splice(
        C,
        0,
        y.createElement(
          gf,
          {
            key: Mo(k),
            isPresent: !1,
            onExitComplete: R,
            custom: t,
            presenceAffectsLayout: i,
            mode: a,
          },
          k
        )
      )
    }),
    (d = d.map(b => {
      const k = b.key
      return f.has(k)
        ? b
        : y.createElement(gf, { key: Mo(b), isPresent: !0, presenceAffectsLayout: i, mode: a }, b)
    })),
    y.createElement(y.Fragment, null, f.size ? d : d.map(b => y.cloneElement(b)))
  )
}
var kz = {
    initial: e => {
      const { position: t } = e,
        r = ['top', 'bottom'].includes(t) ? 'y' : 'x'
      let n = ['top-right', 'bottom-right'].includes(t) ? 1 : -1
      return t === 'bottom' && (n = 1), { opacity: 0, [r]: n * 24 }
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: { opacity: 0, scale: 0.85, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } },
  },
  Wk = y.memo(e => {
    const {
        id: t,
        message: r,
        onCloseComplete: n,
        onRequestRemove: o,
        requestClose: i = !1,
        position: a = 'bottom',
        duration: s = 5e3,
        containerStyle: l,
        motionVariants: u = kz,
        toastSpacing: c = '0.5rem',
      } = e,
      [d, f] = y.useState(s),
      h = dN()
    gy(() => {
      h || n == null || n()
    }, [h]),
      gy(() => {
        f(s)
      }, [s])
    const m = () => f(null),
      p = () => f(s),
      S = () => {
        h && o()
      }
    y.useEffect(() => {
      h && i && o()
    }, [h, i, o]),
      aF(S, d)
    const g = y.useMemo(
        () => ({ pointerEvents: 'auto', maxWidth: 560, minWidth: 300, margin: c, ...l }),
        [l, c]
      ),
      v = y.useMemo(() => nF(a), [a])
    return x.jsx(Ii.li, {
      layout: !0,
      className: 'chakra-toast',
      variants: u,
      initial: 'initial',
      animate: 'animate',
      exit: 'exit',
      onHoverStart: m,
      onHoverEnd: p,
      custom: { position: a },
      style: v,
      children: x.jsx(D.div, {
        role: 'status',
        'aria-atomic': 'true',
        className: 'chakra-toast__inner',
        __css: g,
        children: cn(r, { id: t, onClose: S }),
      }),
    })
  })
Wk.displayName = 'ToastComponent'
var w1 = {
    path: x.jsxs('g', {
      stroke: 'currentColor',
      strokeWidth: '1.5',
      children: [
        x.jsx('path', {
          strokeLinecap: 'round',
          fill: 'none',
          d: 'M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25',
        }),
        x.jsx('path', {
          fill: 'currentColor',
          strokeLinecap: 'round',
          d: 'M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0',
        }),
        x.jsx('circle', { fill: 'none', strokeMiterlimit: '10', cx: '12', cy: '12', r: '11.25' }),
      ],
    }),
    viewBox: '0 0 24 24',
  },
  Rs = H((e, t) => {
    const {
        as: r,
        viewBox: n,
        color: o = 'currentColor',
        focusable: i = !1,
        children: a,
        className: s,
        __css: l,
        ...u
      } = e,
      c = q('chakra-icon', s),
      d = sr('Icon', e),
      f = {
        w: '1em',
        h: '1em',
        display: 'inline-block',
        lineHeight: '1em',
        flexShrink: 0,
        color: o,
        ...l,
        ...d,
      },
      h = { ref: t, focusable: i, className: c, __css: f },
      m = n ?? w1.viewBox
    if (r && typeof r != 'string') return x.jsx(D.svg, { as: r, ...h, ...u })
    const p = a ?? w1.path
    return x.jsx(D.svg, { verticalAlign: 'middle', viewBox: m, ...h, ...u, children: p })
  })
Rs.displayName = 'Icon'
function Cz(e) {
  return x.jsx(Rs, {
    viewBox: '0 0 24 24',
    ...e,
    children: x.jsx('path', {
      fill: 'currentColor',
      d: 'M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z',
    }),
  })
}
function _z(e) {
  return x.jsx(Rs, {
    viewBox: '0 0 24 24',
    ...e,
    children: x.jsx('path', {
      fill: 'currentColor',
      d: 'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z',
    }),
  })
}
function k1(e) {
  return x.jsx(Rs, {
    viewBox: '0 0 24 24',
    ...e,
    children: x.jsx('path', {
      fill: 'currentColor',
      d: 'M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z',
    }),
  })
}
var Pz = jm({ '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } }),
  dv = H((e, t) => {
    const r = sr('Spinner', e),
      {
        label: n = 'Loading...',
        thickness: o = '2px',
        speed: i = '0.45s',
        emptyColor: a = 'transparent',
        className: s,
        ...l
      } = Je(e),
      u = q('chakra-spinner', s),
      c = {
        display: 'inline-block',
        borderColor: 'currentColor',
        borderStyle: 'solid',
        borderRadius: '99999px',
        borderWidth: o,
        borderBottomColor: a,
        borderLeftColor: a,
        animation: `${Pz} ${i} linear infinite`,
        ...r,
      }
    return x.jsx(D.div, {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: n && x.jsx(D.span, { srOnly: !0, children: n }),
    })
  })
dv.displayName = 'Spinner'
var [Ez, Tz] = qt({ name: 'AlertContext', hookName: 'useAlertContext', providerName: '<Alert />' }),
  [Az, fv] = qt({
    name: 'AlertStylesContext',
    hookName: 'useAlertStyles',
    providerName: '<Alert />',
  }),
  Uk = {
    info: { icon: _z, colorScheme: 'blue' },
    warning: { icon: k1, colorScheme: 'orange' },
    success: { icon: Cz, colorScheme: 'green' },
    error: { icon: k1, colorScheme: 'red' },
    loading: { icon: dv, colorScheme: 'blue' },
  }
function Rz(e) {
  return Uk[e].colorScheme
}
function $z(e) {
  return Uk[e].icon
}
var Hk = H(function (t, r) {
  const o = { display: 'inline', ...fv().description }
  return x.jsx(D.div, { ref: r, ...t, className: q('chakra-alert__desc', t.className), __css: o })
})
Hk.displayName = 'AlertDescription'
function Gk(e) {
  const { status: t } = Tz(),
    r = $z(t),
    n = fv(),
    o = t === 'loading' ? n.spinner : n.icon
  return x.jsx(D.span, {
    display: 'inherit',
    ...e,
    className: q('chakra-alert__icon', e.className),
    __css: o,
    children: e.children || x.jsx(r, { h: '100%', w: '100%' }),
  })
}
Gk.displayName = 'AlertIcon'
var Kk = H(function (t, r) {
  const n = fv()
  return x.jsx(D.div, {
    ref: r,
    ...t,
    className: q('chakra-alert__title', t.className),
    __css: n.title,
  })
})
Kk.displayName = 'AlertTitle'
var qk = H(function (t, r) {
  var n
  const { status: o = 'info', addRole: i = !0, ...a } = Je(t),
    s = (n = t.colorScheme) != null ? n : Rz(o),
    l = In('Alert', { ...t, colorScheme: s }),
    u = {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      ...l.container,
    }
  return x.jsx(Ez, {
    value: { status: o },
    children: x.jsx(Az, {
      value: l,
      children: x.jsx(D.div, {
        role: i ? 'alert' : void 0,
        ref: r,
        ...a,
        className: q('chakra-alert', t.className),
        __css: u,
      }),
    }),
  })
})
qk.displayName = 'Alert'
function jz(e) {
  return x.jsx(Rs, {
    focusable: 'false',
    'aria-hidden': !0,
    ...e,
    children: x.jsx('path', {
      fill: 'currentColor',
      d: 'M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z',
    }),
  })
}
var hv = H(function (t, r) {
  const n = sr('CloseButton', t),
    { children: o, isDisabled: i, __css: a, ...s } = Je(t),
    l = {
      outline: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }
  return x.jsx(D.button, {
    type: 'button',
    'aria-label': 'Close',
    ref: r,
    disabled: i,
    __css: { ...l, ...n, ...a },
    ...s,
    children: o || x.jsx(jz, { width: '1em', height: '1em' }),
  })
})
hv.displayName = 'CloseButton'
var Mz = {
    top: [],
    'top-left': [],
    'top-right': [],
    'bottom-left': [],
    bottom: [],
    'bottom-right': [],
  },
  ja = Oz(Mz)
function Oz(e) {
  let t = e
  const r = new Set(),
    n = o => {
      ;(t = o(t)), r.forEach(i => i())
    }
  return {
    getState: () => t,
    subscribe: o => (
      r.add(o),
      () => {
        n(() => e), r.delete(o)
      }
    ),
    removeToast: (o, i) => {
      n(a => ({ ...a, [i]: a[i].filter(s => s.id != o) }))
    },
    notify: (o, i) => {
      const a = Iz(o, i),
        { position: s, id: l } = a
      return (
        n(u => {
          var c, d
          const h = s.includes('top')
            ? [a, ...((c = u[s]) != null ? c : [])]
            : [...((d = u[s]) != null ? d : []), a]
          return { ...u, [s]: h }
        }),
        l
      )
    },
    update: (o, i) => {
      o &&
        n(a => {
          const s = { ...a },
            { position: l, index: u } = vy(s, o)
          return l && u !== -1 && (s[l][u] = { ...s[l][u], ...i, message: Dz(i) }), s
        })
    },
    closeAll: ({ positions: o } = {}) => {
      n(i =>
        (o ?? ['bottom', 'bottom-right', 'bottom-left', 'top', 'top-left', 'top-right']).reduce(
          (l, u) => ((l[u] = i[u].map(c => ({ ...c, requestClose: !0 }))), l),
          { ...i }
        )
      )
    },
    close: o => {
      n(i => {
        const a = _w(i, o)
        return a ? { ...i, [a]: i[a].map(s => (s.id == o ? { ...s, requestClose: !0 } : s)) } : i
      })
    },
    isActive: o => !!vy(ja.getState(), o).position,
  }
}
var C1 = 0
function Iz(e, t = {}) {
  var r, n
  C1 += 1
  const o = (r = t.id) != null ? r : C1,
    i = (n = t.position) != null ? n : 'bottom'
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => ja.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle,
  }
}
var Fz = e => {
  const {
      status: t,
      variant: r = 'solid',
      id: n,
      title: o,
      isClosable: i,
      onClose: a,
      description: s,
      icon: l,
    } = e,
    u = n
      ? { root: `toast-${n}`, title: `toast-${n}-title`, description: `toast-${n}-description` }
      : void 0
  return x.jsxs(qk, {
    addRole: !1,
    status: t,
    variant: r,
    id: u == null ? void 0 : u.root,
    alignItems: 'start',
    borderRadius: 'md',
    boxShadow: 'lg',
    paddingEnd: 8,
    textAlign: 'start',
    width: 'auto',
    children: [
      x.jsx(Gk, { children: l }),
      x.jsxs(D.div, {
        flex: '1',
        maxWidth: '100%',
        children: [
          o && x.jsx(Kk, { id: u == null ? void 0 : u.title, children: o }),
          s && x.jsx(Hk, { id: u == null ? void 0 : u.description, display: 'block', children: s }),
        ],
      }),
      i && x.jsx(hv, { size: 'sm', onClick: a, position: 'absolute', insetEnd: 1, top: 1 }),
    ],
  })
}
function Dz(e = {}) {
  const { render: t, toastComponent: r = Fz } = e
  return o => (typeof t == 'function' ? t({ ...o, ...e }) : x.jsx(r, { ...o, ...e }))
}
var [Nz, hW] = qt({ name: 'ToastOptionsContext', strict: !1 }),
  zz = e => {
    const t = y.useSyncExternalStore(ja.subscribe, ja.getState, ja.getState),
      { motionVariants: r, component: n = Wk, portalProps: o } = e,
      a = Object.keys(t).map(s => {
        const l = t[s]
        return x.jsx(
          'ul',
          {
            role: 'region',
            'aria-live': 'polite',
            id: `chakra-toast-manager-${s}`,
            style: oF(s),
            children: x.jsx(As, {
              initial: !1,
              children: l.map(u => x.jsx(n, { motionVariants: r, ...u }, u.id)),
            }),
          },
          s
        )
      })
    return x.jsx(ws, { ...o, children: a })
  },
  Lz = e =>
    function ({ children: r, theme: n = e, toastOptions: o, ...i }) {
      return x.jsxs(tF, {
        theme: n,
        ...i,
        children: [
          x.jsx(Nz, { value: o == null ? void 0 : o.defaultOptions, children: r }),
          x.jsx(zz, { ...o }),
        ],
      })
    },
  Bz = Lz(pw)
function Vz(e, t) {
  if (e != null) {
    if (typeof e == 'function') {
      e(t)
      return
    }
    try {
      e.current = t
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`)
    }
  }
}
function Ei(...e) {
  return t => {
    e.forEach(r => {
      Vz(r, t)
    })
  }
}
function Wz(...e) {
  return y.useMemo(() => Ei(...e), e)
}
var _1 = {
    ease: [0.25, 0.1, 0.25, 1],
    easeIn: [0.4, 0, 1, 1],
    easeOut: [0, 0, 0.2, 1],
    easeInOut: [0.4, 0, 0.2, 1],
  },
  oo = { enter: { duration: 0.2, ease: _1.easeOut }, exit: { duration: 0.1, ease: _1.easeIn } },
  io = {
    enter: (e, t) => ({ ...e, delay: typeof t == 'number' ? t : t == null ? void 0 : t.enter }),
    exit: (e, t) => ({ ...e, delay: typeof t == 'number' ? t : t == null ? void 0 : t.exit }),
  },
  Uz = {
    enter: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
      var n
      return {
        opacity: 1,
        transition: (n = e == null ? void 0 : e.enter) != null ? n : io.enter(oo.enter, r),
        transitionEnd: t == null ? void 0 : t.enter,
      }
    },
    exit: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
      var n
      return {
        opacity: 0,
        transition: (n = e == null ? void 0 : e.exit) != null ? n : io.exit(oo.exit, r),
        transitionEnd: t == null ? void 0 : t.exit,
      }
    },
  },
  Yk = { initial: 'exit', animate: 'enter', exit: 'exit', variants: Uz },
  Hz = y.forwardRef(function (t, r) {
    const {
        unmountOnExit: n,
        in: o,
        className: i,
        transition: a,
        transitionEnd: s,
        delay: l,
        ...u
      } = t,
      c = o || n ? 'enter' : 'exit',
      d = n ? o && n : !0,
      f = { transition: a, transitionEnd: s, delay: l }
    return x.jsx(As, {
      custom: f,
      children:
        d &&
        x.jsx(Ii.div, {
          ref: r,
          className: q('chakra-fade', i),
          custom: f,
          ...Yk,
          animate: c,
          ...u,
        }),
    })
  })
Hz.displayName = 'Fade'
var Gz = {
    exit: ({ reverse: e, initialScale: t, transition: r, transitionEnd: n, delay: o }) => {
      var i
      return {
        opacity: 0,
        ...(e
          ? { scale: t, transitionEnd: n == null ? void 0 : n.exit }
          : { transitionEnd: { scale: t, ...(n == null ? void 0 : n.exit) } }),
        transition: (i = r == null ? void 0 : r.exit) != null ? i : io.exit(oo.exit, o),
      }
    },
    enter: ({ transitionEnd: e, transition: t, delay: r }) => {
      var n
      return {
        opacity: 1,
        scale: 1,
        transition: (n = t == null ? void 0 : t.enter) != null ? n : io.enter(oo.enter, r),
        transitionEnd: e == null ? void 0 : e.enter,
      }
    },
  },
  Xk = { initial: 'exit', animate: 'enter', exit: 'exit', variants: Gz },
  Kz = y.forwardRef(function (t, r) {
    const {
        unmountOnExit: n,
        in: o,
        reverse: i = !0,
        initialScale: a = 0.95,
        className: s,
        transition: l,
        transitionEnd: u,
        delay: c,
        ...d
      } = t,
      f = n ? o && n : !0,
      h = o || n ? 'enter' : 'exit',
      m = { initialScale: a, reverse: i, transition: l, transitionEnd: u, delay: c }
    return x.jsx(As, {
      custom: m,
      children:
        f &&
        x.jsx(Ii.div, {
          ref: r,
          className: q('chakra-offset-slide', s),
          ...Xk,
          animate: h,
          custom: m,
          ...d,
        }),
    })
  })
Kz.displayName = 'ScaleFade'
var qz = {
    initial: ({ offsetX: e, offsetY: t, transition: r, transitionEnd: n, delay: o }) => {
      var i
      return {
        opacity: 0,
        x: e,
        y: t,
        transition: (i = r == null ? void 0 : r.exit) != null ? i : io.exit(oo.exit, o),
        transitionEnd: n == null ? void 0 : n.exit,
      }
    },
    enter: ({ transition: e, transitionEnd: t, delay: r }) => {
      var n
      return {
        opacity: 1,
        x: 0,
        y: 0,
        transition: (n = e == null ? void 0 : e.enter) != null ? n : io.enter(oo.enter, r),
        transitionEnd: t == null ? void 0 : t.enter,
      }
    },
    exit: ({ offsetY: e, offsetX: t, transition: r, transitionEnd: n, reverse: o, delay: i }) => {
      var a
      const s = { x: t, y: e }
      return {
        opacity: 0,
        transition: (a = r == null ? void 0 : r.exit) != null ? a : io.exit(oo.exit, i),
        ...(o
          ? { ...s, transitionEnd: n == null ? void 0 : n.exit }
          : { transitionEnd: { ...s, ...(n == null ? void 0 : n.exit) } }),
      }
    },
  },
  op = { initial: 'initial', animate: 'enter', exit: 'exit', variants: qz },
  Yz = y.forwardRef(function (t, r) {
    const {
        unmountOnExit: n,
        in: o,
        reverse: i = !0,
        className: a,
        offsetX: s = 0,
        offsetY: l = 8,
        transition: u,
        transitionEnd: c,
        delay: d,
        ...f
      } = t,
      h = n ? o && n : !0,
      m = o || n ? 'enter' : 'exit',
      p = { offsetX: s, offsetY: l, reverse: i, transition: u, transitionEnd: c, delay: d }
    return x.jsx(As, {
      custom: p,
      children:
        h &&
        x.jsx(Ii.div, {
          ref: r,
          className: q('chakra-offset-slide', a),
          custom: p,
          ...op,
          animate: m,
          ...f,
        }),
    })
  })
Yz.displayName = 'SlideFade'
var [Xz, Qz] = qt({
  name: 'AvatarStylesContext',
  hookName: 'useAvatarStyles',
  providerName: '<Avatar/>',
})
function Zz(e) {
  const [t, r] = e.split(' ')
  return t && r ? `${t.charAt(0)}${r.charAt(0)}` : t.charAt(0)
}
function Qk(e) {
  const { name: t, getInitials: r, ...n } = e,
    o = Qz()
  return x.jsx(D.div, {
    role: 'img',
    'aria-label': t,
    ...n,
    __css: o.label,
    children: t ? (r == null ? void 0 : r(t)) : null,
  })
}
Qk.displayName = 'AvatarName'
var Zk = e =>
    x.jsxs(D.svg, {
      viewBox: '0 0 128 128',
      color: '#fff',
      width: '100%',
      height: '100%',
      className: 'chakra-avatar__svg',
      ...e,
      children: [
        x.jsx('path', {
          fill: 'currentColor',
          d: 'M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z',
        }),
        x.jsx('path', {
          fill: 'currentColor',
          d: 'M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24',
        }),
      ],
    }),
  ip = H(function (t, r) {
    const { htmlWidth: n, htmlHeight: o, alt: i, ...a } = t
    return x.jsx('img', { width: n, height: o, ref: r, alt: i, ...a })
  })
ip.displayName = 'NativeImage'
function Jk(e) {
  const {
      loading: t,
      src: r,
      srcSet: n,
      onLoad: o,
      onError: i,
      crossOrigin: a,
      sizes: s,
      ignoreFallback: l,
    } = e,
    [u, c] = y.useState('pending')
  y.useEffect(() => {
    c(r ? 'loading' : 'pending')
  }, [r])
  const d = y.useRef(),
    f = y.useCallback(() => {
      if (!r) return
      h()
      const m = new Image()
      ;(m.src = r),
        a && (m.crossOrigin = a),
        n && (m.srcset = n),
        s && (m.sizes = s),
        t && (m.loading = t),
        (m.onload = p => {
          h(), c('loaded'), o == null || o(p)
        }),
        (m.onerror = p => {
          h(), c('failed'), i == null || i(p)
        }),
        (d.current = m)
    }, [r, a, n, s, o, i, t]),
    h = () => {
      d.current && ((d.current.onload = null), (d.current.onerror = null), (d.current = null))
    }
  return (
    ts(() => {
      if (!l)
        return (
          u === 'loading' && f(),
          () => {
            h()
          }
        )
    }, [u, f, l]),
    l ? 'loaded' : u
  )
}
var Jz = (e, t) =>
  (e !== 'loaded' && t === 'beforeLoadOrError') || (e === 'failed' && t === 'onError')
function eL(e, t = []) {
  const r = Object.assign({}, e)
  for (const n of t) n in r && delete r[n]
  return r
}
var pv = H(function (t, r) {
  const {
      fallbackSrc: n,
      fallback: o,
      src: i,
      srcSet: a,
      align: s,
      fit: l,
      loading: u,
      ignoreFallback: c,
      crossOrigin: d,
      fallbackStrategy: f = 'beforeLoadOrError',
      referrerPolicy: h,
      ...m
    } = t,
    p = n !== void 0 || o !== void 0,
    S = u != null || c || !p,
    g = Jk({ ...t, ignoreFallback: S }),
    v = Jz(g, f),
    b = { ref: r, objectFit: l, objectPosition: s, ...(S ? m : eL(m, ['onError', 'onLoad'])) }
  return v
    ? o || x.jsx(D.img, { as: ip, className: 'chakra-image__placeholder', src: n, ...b })
    : x.jsx(D.img, {
        as: ip,
        src: i,
        srcSet: a,
        crossOrigin: d,
        loading: u,
        referrerPolicy: h,
        className: 'chakra-image',
        ...b,
      })
})
pv.displayName = 'Image'
function eC(e) {
  const {
      src: t,
      srcSet: r,
      onError: n,
      onLoad: o,
      getInitials: i,
      name: a,
      borderRadius: s,
      loading: l,
      iconLabel: u,
      icon: c = x.jsx(Zk, {}),
      ignoreFallback: d,
      referrerPolicy: f,
      crossOrigin: h,
    } = e,
    p = Jk({ src: t, onError: n, ignoreFallback: d }) === 'loaded'
  return !t || !p
    ? a
      ? x.jsx(Qk, { className: 'chakra-avatar__initials', getInitials: i, name: a })
      : y.cloneElement(c, { role: 'img', 'aria-label': u })
    : x.jsx(D.img, {
        src: t,
        srcSet: r,
        alt: a,
        onLoad: o,
        referrerPolicy: f,
        crossOrigin: h ?? void 0,
        className: 'chakra-avatar__img',
        loading: l,
        __css: { width: '100%', height: '100%', objectFit: 'cover', borderRadius: s },
      })
}
eC.displayName = 'AvatarImage'
var tL = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'medium',
    position: 'relative',
    flexShrink: 0,
  },
  tC = H((e, t) => {
    const r = In('Avatar', e),
      [n, o] = y.useState(!1),
      {
        src: i,
        srcSet: a,
        name: s,
        showBorder: l,
        borderRadius: u = 'full',
        onError: c,
        onLoad: d,
        getInitials: f = Zz,
        icon: h = x.jsx(Zk, {}),
        iconLabel: m = ' avatar',
        loading: p,
        children: S,
        borderColor: g,
        ignoreFallback: v,
        crossOrigin: b,
        ...k
      } = Je(e),
      C = { borderRadius: u, borderWidth: l ? '2px' : void 0, ...tL, ...r.container }
    return (
      g && (C.borderColor = g),
      x.jsx(D.span, {
        ref: t,
        ...k,
        className: q('chakra-avatar', e.className),
        'data-loaded': _e(n),
        __css: C,
        children: x.jsxs(Xz, {
          value: r,
          children: [
            x.jsx(eC, {
              src: i,
              srcSet: a,
              loading: p,
              onLoad: Ne(d, () => {
                o(!0)
              }),
              onError: c,
              getInitials: f,
              name: s,
              borderRadius: u,
              icon: h,
              iconLabel: m,
              ignoreFallback: v,
              crossOrigin: b,
            }),
            S,
          ],
        }),
      })
    )
  })
tC.displayName = 'Avatar'
function rL(e) {
  return y.Children.toArray(e).filter(t => y.isValidElement(t))
}
var [pW, nL] = qt({ strict: !1, name: 'ButtonGroupContext' })
function oL(e) {
  const [t, r] = y.useState(!e)
  return {
    ref: y.useCallback(i => {
      i && r(i.tagName === 'BUTTON')
    }, []),
    type: t ? 'button' : void 0,
  }
}
function ap(e) {
  const { children: t, className: r, ...n } = e,
    o = y.isValidElement(t) ? y.cloneElement(t, { 'aria-hidden': !0, focusable: !1 }) : t,
    i = q('chakra-button__icon', r)
  return x.jsx(D.span, {
    display: 'inline-flex',
    alignSelf: 'center',
    flexShrink: 0,
    ...n,
    className: i,
    children: o,
  })
}
ap.displayName = 'ButtonIcon'
function sp(e) {
  const {
      label: t,
      placement: r,
      spacing: n = '0.5rem',
      children: o = x.jsx(dv, { color: 'currentColor', width: '1em', height: '1em' }),
      className: i,
      __css: a,
      ...s
    } = e,
    l = q('chakra-button__spinner', i),
    u = r === 'start' ? 'marginEnd' : 'marginStart',
    c = y.useMemo(
      () => ({
        display: 'flex',
        alignItems: 'center',
        position: t ? 'relative' : 'absolute',
        [u]: t ? n : 0,
        fontSize: '1em',
        lineHeight: 'normal',
        ...a,
      }),
      [a, t, u, n]
    )
  return x.jsx(D.div, { className: l, ...s, __css: c, children: o })
}
sp.displayName = 'ButtonSpinner'
var mv = H((e, t) => {
  const r = nL(),
    n = sr('Button', { ...r, ...e }),
    {
      isDisabled: o = r == null ? void 0 : r.isDisabled,
      isLoading: i,
      isActive: a,
      children: s,
      leftIcon: l,
      rightIcon: u,
      loadingText: c,
      iconSpacing: d = '0.5rem',
      type: f,
      spinner: h,
      spinnerPlacement: m = 'start',
      className: p,
      as: S,
      ...g
    } = Je(e),
    v = y.useMemo(() => {
      const R = { ...(n == null ? void 0 : n._focus), zIndex: 1 }
      return {
        display: 'inline-flex',
        appearance: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        position: 'relative',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        outline: 'none',
        ...n,
        ...(!!r && { _focus: R }),
      }
    }, [n, r]),
    { ref: b, type: k } = oL(S),
    C = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s }
  return x.jsxs(D.button, {
    ref: Wz(t, b),
    as: S,
    type: f ?? k,
    'data-active': _e(a),
    'data-loading': _e(i),
    __css: v,
    className: q('chakra-button', p),
    ...g,
    disabled: o || i,
    children: [
      i &&
        m === 'start' &&
        x.jsx(sp, {
          className: 'chakra-button__spinner--start',
          label: c,
          placement: 'start',
          spacing: d,
          children: h,
        }),
      i ? c || x.jsx(D.span, { opacity: 0, children: x.jsx(P1, { ...C }) }) : x.jsx(P1, { ...C }),
      i &&
        m === 'end' &&
        x.jsx(sp, {
          className: 'chakra-button__spinner--end',
          label: c,
          placement: 'end',
          spacing: d,
          children: h,
        }),
    ],
  })
})
mv.displayName = 'Button'
function P1(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: o } = e
  return x.jsxs(x.Fragment, {
    children: [
      t && x.jsx(ap, { marginEnd: o, children: t }),
      n,
      r && x.jsx(ap, { marginStart: o, children: r }),
    ],
  })
}
var [iL, aL] = JI('Card'),
  sL = H(function (t, r) {
    const { className: n, ...o } = t,
      i = aL()
    return x.jsx(D.div, { ref: r, className: q('chakra-card__body', n), __css: i.body, ...o })
  }),
  lL = H(function (t, r) {
    const {
        className: n,
        children: o,
        direction: i = 'column',
        justify: a,
        align: s,
        ...l
      } = Je(t),
      u = In('Card', t)
    return x.jsx(D.div, {
      ref: r,
      className: q('chakra-card', n),
      __css: {
        display: 'flex',
        flexDirection: i,
        justifyContent: a,
        alignItems: s,
        position: 'relative',
        minWidth: 0,
        wordWrap: 'break-word',
        ...u.container,
      },
      ...l,
      children: x.jsx(iL, { value: u, children: o }),
    })
  }),
  [uL, rC] = qt({
    name: 'FormControlStylesContext',
    errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `,
  }),
  [cL, $s] = qt({ strict: !1, name: 'FormControlContext' })
function dL(e) {
  const { id: t, isRequired: r, isInvalid: n, isDisabled: o, isReadOnly: i, ...a } = e,
    s = y.useId(),
    l = t || `field-${s}`,
    u = `${l}-label`,
    c = `${l}-feedback`,
    d = `${l}-helptext`,
    [f, h] = y.useState(!1),
    [m, p] = y.useState(!1),
    [S, g] = y.useState(!1),
    v = y.useCallback(
      (E = {}, T = null) => ({
        id: d,
        ...E,
        ref: Ei(T, M => {
          M && p(!0)
        }),
      }),
      [d]
    ),
    b = y.useCallback(
      (E = {}, T = null) => {
        var M, j
        return {
          ...E,
          ref: T,
          'data-focus': _e(S),
          'data-disabled': _e(o),
          'data-invalid': _e(n),
          'data-readonly': _e(i),
          id: (M = E.id) != null ? M : u,
          htmlFor: (j = E.htmlFor) != null ? j : l,
        }
      },
      [l, o, S, n, i, u]
    ),
    k = y.useCallback(
      (E = {}, T = null) => ({
        id: c,
        ...E,
        ref: Ei(T, M => {
          M && h(!0)
        }),
        'aria-live': 'polite',
      }),
      [c]
    ),
    C = y.useCallback((E = {}, T = null) => ({ ...E, ...a, ref: T, role: 'group' }), [a]),
    R = y.useCallback(
      (E = {}, T = null) => ({
        ...E,
        ref: T,
        role: 'presentation',
        'aria-hidden': !0,
        children: E.children || '*',
      }),
      []
    )
  return {
    isRequired: !!r,
    isInvalid: !!n,
    isReadOnly: !!i,
    isDisabled: !!o,
    isFocused: !!S,
    onFocus: () => g(!0),
    onBlur: () => g(!1),
    hasFeedbackText: f,
    setHasFeedbackText: h,
    hasHelpText: m,
    setHasHelpText: p,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: a,
    getHelpTextProps: v,
    getErrorMessageProps: k,
    getRootProps: C,
    getLabelProps: b,
    getRequiredIndicatorProps: R,
  }
}
var Ti = H(function (t, r) {
  const n = In('Form', t),
    o = Je(t),
    { getRootProps: i, htmlProps: a, ...s } = dL(o),
    l = q('chakra-form-control', t.className)
  return x.jsx(cL, {
    value: s,
    children: x.jsx(uL, {
      value: n,
      children: x.jsx(D.div, { ...i({}, r), className: l, __css: n.container }),
    }),
  })
})
Ti.displayName = 'FormControl'
var fL = H(function (t, r) {
  const n = $s(),
    o = rC(),
    i = q('chakra-form__helper-text', t.className)
  return x.jsx(D.div, {
    ...(n == null ? void 0 : n.getHelpTextProps(t, r)),
    __css: o.helperText,
    className: i,
  })
})
fL.displayName = 'FormHelperText'
var lp = H(function (t, r) {
  var n
  const o = sr('FormLabel', t),
    i = Je(t),
    {
      className: a,
      children: s,
      requiredIndicator: l = x.jsx(nC, {}),
      optionalIndicator: u = null,
      ...c
    } = i,
    d = $s(),
    f = (n = d == null ? void 0 : d.getLabelProps(c, r)) != null ? n : { ref: r, ...c }
  return x.jsxs(D.label, {
    ...f,
    className: q('chakra-form__label', i.className),
    __css: { display: 'block', textAlign: 'start', ...o },
    children: [s, d != null && d.isRequired ? l : u],
  })
})
lp.displayName = 'FormLabel'
var nC = H(function (t, r) {
  const n = $s(),
    o = rC()
  if (!(n != null && n.isRequired)) return null
  const i = q('chakra-form__required-indicator', t.className)
  return x.jsx(D.span, {
    ...(n == null ? void 0 : n.getRequiredIndicatorProps(t, r)),
    __css: o.requiredIndicator,
    className: i,
  })
})
nC.displayName = 'RequiredIndicator'
function vv(e) {
  const { isDisabled: t, isInvalid: r, isReadOnly: n, isRequired: o, ...i } = hL(e)
  return {
    ...i,
    disabled: t,
    readOnly: n,
    required: o,
    'aria-invalid': oi(r),
    'aria-required': oi(o),
    'aria-readonly': oi(n),
  }
}
function hL(e) {
  var t, r, n
  const o = $s(),
    {
      id: i,
      disabled: a,
      readOnly: s,
      required: l,
      isRequired: u,
      isInvalid: c,
      isReadOnly: d,
      isDisabled: f,
      onFocus: h,
      onBlur: m,
      ...p
    } = e,
    S = e['aria-describedby'] ? [e['aria-describedby']] : []
  return (
    o != null && o.hasFeedbackText && o != null && o.isInvalid && S.push(o.feedbackId),
    o != null && o.hasHelpText && S.push(o.helpTextId),
    {
      ...p,
      'aria-describedby': S.join(' ') || void 0,
      id: i ?? (o == null ? void 0 : o.id),
      isDisabled: (t = a ?? f) != null ? t : o == null ? void 0 : o.isDisabled,
      isReadOnly: (r = s ?? d) != null ? r : o == null ? void 0 : o.isReadOnly,
      isRequired: (n = l ?? u) != null ? n : o == null ? void 0 : o.isRequired,
      isInvalid: c ?? (o == null ? void 0 : o.isInvalid),
      onFocus: Ne(o == null ? void 0 : o.onFocus, h),
      onBlur: Ne(o == null ? void 0 : o.onBlur, m),
    }
  )
}
var E1 = !1,
  js = null,
  go = !1,
  up = !1,
  cp = new Set()
function gv(e, t) {
  cp.forEach(r => r(e, t))
}
var pL =
  typeof window < 'u' && window.navigator != null ? /^Mac/.test(window.navigator.platform) : !1
function mL(e) {
  return !(
    e.metaKey ||
    (!pL && e.altKey) ||
    e.ctrlKey ||
    e.key === 'Control' ||
    e.key === 'Shift' ||
    e.key === 'Meta'
  )
}
function T1(e) {
  ;(go = !0), mL(e) && ((js = 'keyboard'), gv('keyboard', e))
}
function Ao(e) {
  if (((js = 'pointer'), e.type === 'mousedown' || e.type === 'pointerdown')) {
    go = !0
    const t = e.composedPath ? e.composedPath()[0] : e.target
    let r = !1
    try {
      r = t.matches(':focus-visible')
    } catch {}
    if (r) return
    gv('pointer', e)
  }
}
function vL(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : e.detail === 0 && !e.pointerType
}
function gL(e) {
  vL(e) && ((go = !0), (js = 'virtual'))
}
function yL(e) {
  e.target === window ||
    e.target === document ||
    (!go && !up && ((js = 'virtual'), gv('virtual', e)), (go = !1), (up = !1))
}
function bL() {
  ;(go = !1), (up = !0)
}
function A1() {
  return js !== 'pointer'
}
function SL() {
  if (typeof window > 'u' || E1) return
  const { focus: e } = HTMLElement.prototype
  ;(HTMLElement.prototype.focus = function (...r) {
    ;(go = !0), e.apply(this, r)
  }),
    document.addEventListener('keydown', T1, !0),
    document.addEventListener('keyup', T1, !0),
    document.addEventListener('click', gL, !0),
    window.addEventListener('focus', yL, !0),
    window.addEventListener('blur', bL, !1),
    typeof PointerEvent < 'u'
      ? (document.addEventListener('pointerdown', Ao, !0),
        document.addEventListener('pointermove', Ao, !0),
        document.addEventListener('pointerup', Ao, !0))
      : (document.addEventListener('mousedown', Ao, !0),
        document.addEventListener('mousemove', Ao, !0),
        document.addEventListener('mouseup', Ao, !0)),
    (E1 = !0)
}
function xL(e) {
  SL(), e(A1())
  const t = () => e(A1())
  return (
    cp.add(t),
    () => {
      cp.delete(t)
    }
  )
}
function wL(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    o,
    i
  for (i = 0; i < n.length; i++) (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o])
  return r
}
var dp = 'data-focus-lock',
  oC = 'data-focus-lock-disabled',
  kL = 'data-no-focus-lock',
  CL = 'data-autofocus-inside',
  _L = 'data-no-autofocus'
function PL(e, t) {
  return typeof e == 'function' ? e(t) : e && (e.current = t), e
}
function EL(e, t) {
  var r = y.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return r.value
        },
        set current(n) {
          var o = r.value
          o !== n && ((r.value = n), r.callback(n, o))
        },
      },
    }
  })[0]
  return (r.callback = t), r.facade
}
function iC(e, t) {
  return EL(t || null, function (r) {
    return e.forEach(function (n) {
      return PL(n, r)
    })
  })
}
var yf = {
    width: '1px',
    height: '0px',
    padding: 0,
    overflow: 'hidden',
    position: 'fixed',
    top: '1px',
    left: '1px',
  },
  yr = function () {
    return (
      (yr =
        Object.assign ||
        function (t) {
          for (var r, n = 1, o = arguments.length; n < o; n++) {
            r = arguments[n]
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
          }
          return t
        }),
      yr.apply(this, arguments)
    )
  }
function aC(e, t) {
  var r = {}
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]])
  return r
}
function TL(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]))
  return e.concat(i || Array.prototype.slice.call(t))
}
function sC(e) {
  return e
}
function lC(e, t) {
  t === void 0 && (t = sC)
  var r = [],
    n = !1,
    o = {
      read: function () {
        if (n)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
          )
        return r.length ? r[r.length - 1] : e
      },
      useMedium: function (i) {
        var a = t(i, n)
        return (
          r.push(a),
          function () {
            r = r.filter(function (s) {
              return s !== a
            })
          }
        )
      },
      assignSyncMedium: function (i) {
        for (n = !0; r.length; ) {
          var a = r
          ;(r = []), a.forEach(i)
        }
        r = {
          push: function (s) {
            return i(s)
          },
          filter: function () {
            return r
          },
        }
      },
      assignMedium: function (i) {
        n = !0
        var a = []
        if (r.length) {
          var s = r
          ;(r = []), s.forEach(i), (a = r)
        }
        var l = function () {
            var c = a
            ;(a = []), c.forEach(i)
          },
          u = function () {
            return Promise.resolve().then(l)
          }
        u(),
          (r = {
            push: function (c) {
              a.push(c), u()
            },
            filter: function (c) {
              return (a = a.filter(c)), r
            },
          })
      },
    }
  return o
}
function yv(e, t) {
  return t === void 0 && (t = sC), lC(e, t)
}
function uC(e) {
  e === void 0 && (e = {})
  var t = lC(null)
  return (t.options = yr({ async: !0, ssr: !1 }, e)), t
}
var cC = function (e) {
  var t = e.sideCar,
    r = aC(e, ['sideCar'])
  if (!t) throw new Error('Sidecar: please provide `sideCar` property to import the right car')
  var n = t.read()
  if (!n) throw new Error('Sidecar medium not found')
  return y.createElement(n, yr({}, r))
}
cC.isSideCarExport = !0
function AL(e, t) {
  return e.useMedium(t), cC
}
var dC = yv({}, function (e) {
    var t = e.target,
      r = e.currentTarget
    return { target: t, currentTarget: r }
  }),
  fC = yv(),
  RL = yv(),
  $L = uC({ async: !0 }),
  jL = [],
  bv = y.forwardRef(function (t, r) {
    var n,
      o = y.useState(),
      i = o[0],
      a = o[1],
      s = y.useRef(),
      l = y.useRef(!1),
      u = y.useRef(null),
      c = t.children,
      d = t.disabled,
      f = t.noFocusGuards,
      h = t.persistentFocus,
      m = t.crossFrame,
      p = t.autoFocus
    t.allowTextSelection
    var S = t.group,
      g = t.className,
      v = t.whiteList,
      b = t.hasPositiveIndices,
      k = t.shards,
      C = k === void 0 ? jL : k,
      R = t.as,
      E = R === void 0 ? 'div' : R,
      T = t.lockProps,
      M = T === void 0 ? {} : T,
      j = t.sideCar,
      W = t.returnFocus,
      he = t.focusOptions,
      ye = t.onActivation,
      J = t.onDeactivation,
      se = y.useState({}),
      Ce = se[0],
      et = y.useCallback(
        function () {
          ;(u.current = u.current || (document && document.activeElement)),
            s.current && ye && ye(s.current),
            (l.current = !0)
        },
        [ye]
      ),
      O = y.useCallback(
        function () {
          ;(l.current = !1), J && J(s.current)
        },
        [J]
      )
    y.useEffect(function () {
      d || (u.current = null)
    }, [])
    var L = y.useCallback(
        function (je) {
          var Ge = u.current
          if (Ge && Ge.focus) {
            var ut = typeof W == 'function' ? W(Ge) : W
            if (ut) {
              var lr = typeof ut == 'object' ? ut : void 0
              ;(u.current = null),
                je
                  ? Promise.resolve().then(function () {
                      return Ge.focus(lr)
                    })
                  : Ge.focus(lr)
            }
          }
        },
        [W]
      ),
      N = y.useCallback(function (je) {
        l.current && dC.useMedium(je)
      }, []),
      V = fC.useMedium,
      oe = y.useCallback(function (je) {
        s.current !== je && ((s.current = je), a(je))
      }, []),
      U = po(((n = {}), (n[oC] = d && 'disabled'), (n[dp] = S), n), M),
      $e = f !== !0,
      _t = $e && f !== 'tail',
      Oe = iC([r, oe])
    return y.createElement(
      y.Fragment,
      null,
      $e && [
        y.createElement('div', {
          key: 'guard-first',
          'data-focus-guard': !0,
          tabIndex: d ? -1 : 0,
          style: yf,
        }),
        b
          ? y.createElement('div', {
              key: 'guard-nearest',
              'data-focus-guard': !0,
              tabIndex: d ? -1 : 1,
              style: yf,
            })
          : null,
      ],
      !d &&
        y.createElement(j, {
          id: Ce,
          sideCar: $L,
          observed: i,
          disabled: d,
          persistentFocus: h,
          crossFrame: m,
          autoFocus: p,
          whiteList: v,
          shards: C,
          onActivation: et,
          onDeactivation: O,
          returnFocus: L,
          focusOptions: he,
        }),
      y.createElement(E, po({ ref: Oe }, U, { className: g, onBlur: V, onFocus: N }), c),
      _t && y.createElement('div', { 'data-focus-guard': !0, tabIndex: d ? -1 : 0, style: yf })
    )
  })
bv.propTypes = {}
bv.defaultProps = {
  children: void 0,
  disabled: !1,
  returnFocus: !1,
  focusOptions: void 0,
  noFocusGuards: !1,
  autoFocus: !0,
  persistentFocus: !1,
  crossFrame: !0,
  hasPositiveIndices: void 0,
  allowTextSelection: void 0,
  group: void 0,
  className: void 0,
  whiteList: void 0,
  shards: void 0,
  as: 'div',
  lockProps: {},
  onActivation: void 0,
  onDeactivation: void 0,
}
const hC = bv
function fp(e, t) {
  return (
    (fp = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n
        }),
    fp(e, t)
  )
}
function ML(e, t) {
  ;(e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), fp(e, t)
}
function cs(e) {
  return (
    (cs =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    cs(e)
  )
}
function OL(e, t) {
  if (cs(e) !== 'object' || e === null) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (cs(n) !== 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function IL(e) {
  var t = OL(e, 'string')
  return cs(t) === 'symbol' ? t : String(t)
}
function pC(e, t, r) {
  return (
    (t = IL(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  )
}
function FL(e, t) {
  function r(n) {
    return n.displayName || n.name || 'Component'
  }
  return function (o) {
    var i = [],
      a
    function s() {
      ;(a = e(
        i.map(function (u) {
          return u.props
        })
      )),
        t(a)
    }
    var l = (function (u) {
      ML(c, u)
      function c() {
        return u.apply(this, arguments) || this
      }
      c.peek = function () {
        return a
      }
      var d = c.prototype
      return (
        (d.componentDidMount = function () {
          i.push(this), s()
        }),
        (d.componentDidUpdate = function () {
          s()
        }),
        (d.componentWillUnmount = function () {
          var h = i.indexOf(this)
          i.splice(h, 1), s()
        }),
        (d.render = function () {
          return so.createElement(o, this.props)
        }),
        c
      )
    })(y.PureComponent)
    return pC(l, 'displayName', 'SideEffect(' + r(o) + ')'), l
  }
}
var Er = function (e) {
    for (var t = Array(e.length), r = 0; r < e.length; ++r) t[r] = e[r]
    return t
  },
  Wu = function (e) {
    return Array.isArray(e) ? e : [e]
  },
  mC = function (e) {
    return Array.isArray(e) ? e[0] : e
  },
  DL = function (e) {
    if (e.nodeType !== Node.ELEMENT_NODE) return !1
    var t = window.getComputedStyle(e, null)
    return !t || !t.getPropertyValue
      ? !1
      : t.getPropertyValue('display') === 'none' || t.getPropertyValue('visibility') === 'hidden'
  },
  vC = function (e) {
    return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
      ? e.parentNode.host
      : e.parentNode
  },
  gC = function (e) {
    return e === document || (e && e.nodeType === Node.DOCUMENT_NODE)
  },
  NL = function (e, t) {
    return !e || gC(e) || (!DL(e) && t(vC(e)))
  },
  yC = function (e, t) {
    var r = e.get(t)
    if (r !== void 0) return r
    var n = NL(t, yC.bind(void 0, e))
    return e.set(t, n), n
  },
  zL = function (e, t) {
    return e && !gC(e) ? (VL(e) ? t(vC(e)) : !1) : !0
  },
  bC = function (e, t) {
    var r = e.get(t)
    if (r !== void 0) return r
    var n = zL(t, bC.bind(void 0, e))
    return e.set(t, n), n
  },
  SC = function (e) {
    return e.dataset
  },
  LL = function (e) {
    return e.tagName === 'BUTTON'
  },
  xC = function (e) {
    return e.tagName === 'INPUT'
  },
  wC = function (e) {
    return xC(e) && e.type === 'radio'
  },
  BL = function (e) {
    return !((xC(e) || LL(e)) && (e.type === 'hidden' || e.disabled))
  },
  VL = function (e) {
    var t = e.getAttribute(_L)
    return ![!0, 'true', ''].includes(t)
  },
  Sv = function (e) {
    var t
    return !!(e && !((t = SC(e)) === null || t === void 0) && t.focusGuard)
  },
  Uu = function (e) {
    return !Sv(e)
  },
  WL = function (e) {
    return !!e
  },
  UL = function (e, t) {
    var r = e.tabIndex - t.tabIndex,
      n = e.index - t.index
    if (r) {
      if (!e.tabIndex) return 1
      if (!t.tabIndex) return -1
    }
    return r || n
  },
  kC = function (e, t, r) {
    return Er(e)
      .map(function (n, o) {
        return {
          node: n,
          index: o,
          tabIndex: r && n.tabIndex === -1 ? ((n.dataset || {}).focusGuard ? 0 : -1) : n.tabIndex,
        }
      })
      .filter(function (n) {
        return !t || n.tabIndex >= 0
      })
      .sort(UL)
  },
  HL = [
    'button:enabled',
    'select:enabled',
    'textarea:enabled',
    'input:enabled',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[tabindex]',
    '[contenteditable]',
    '[autofocus]',
  ],
  xv = HL.join(','),
  GL = ''.concat(xv, ', [data-focus-guard]'),
  CC = function (e, t) {
    return Er((e.shadowRoot || e).children).reduce(function (r, n) {
      return r.concat(n.matches(t ? GL : xv) ? [n] : [], CC(n))
    }, [])
  },
  KL = function (e, t) {
    var r
    return e instanceof HTMLIFrameElement &&
      !((r = e.contentDocument) === null || r === void 0) &&
      r.body
      ? Wc([e.contentDocument.body], t)
      : [e]
  },
  Wc = function (e, t) {
    return e.reduce(function (r, n) {
      var o,
        i = CC(n, t),
        a = (o = []).concat.apply(
          o,
          i.map(function (s) {
            return KL(s, t)
          })
        )
      return r.concat(
        a,
        n.parentNode
          ? Er(n.parentNode.querySelectorAll(xv)).filter(function (s) {
              return s === n
            })
          : []
      )
    }, [])
  },
  qL = function (e) {
    var t = e.querySelectorAll('['.concat(CL, ']'))
    return Er(t)
      .map(function (r) {
        return Wc([r])
      })
      .reduce(function (r, n) {
        return r.concat(n)
      }, [])
  },
  wv = function (e, t) {
    return Er(e)
      .filter(function (r) {
        return yC(t, r)
      })
      .filter(function (r) {
        return BL(r)
      })
  },
  R1 = function (e, t) {
    return (
      t === void 0 && (t = new Map()),
      Er(e).filter(function (r) {
        return bC(t, r)
      })
    )
  },
  hp = function (e, t, r) {
    return kC(wv(Wc(e, r), t), !0, r)
  },
  $1 = function (e, t) {
    return kC(wv(Wc(e), t), !1)
  },
  YL = function (e, t) {
    return wv(qL(e), t)
  },
  ci = function (e, t) {
    return e.shadowRoot
      ? ci(e.shadowRoot, t)
      : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t)
      ? !0
      : Er(e.children).some(function (r) {
          var n
          if (r instanceof HTMLIFrameElement) {
            var o = (n = r.contentDocument) === null || n === void 0 ? void 0 : n.body
            return o ? ci(o, t) : !1
          }
          return ci(r, t)
        })
  },
  XL = function (e) {
    for (var t = new Set(), r = e.length, n = 0; n < r; n += 1)
      for (var o = n + 1; o < r; o += 1) {
        var i = e[n].compareDocumentPosition(e[o])
        ;(i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o),
          (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(n)
      }
    return e.filter(function (a, s) {
      return !t.has(s)
    })
  },
  _C = function (e) {
    return e.parentNode ? _C(e.parentNode) : e
  },
  kv = function (e) {
    var t = Wu(e)
    return t.filter(Boolean).reduce(function (r, n) {
      var o = n.getAttribute(dp)
      return (
        r.push.apply(
          r,
          o
            ? XL(
                Er(
                  _C(n).querySelectorAll(
                    '['.concat(dp, '="').concat(o, '"]:not([').concat(oC, '="disabled"])')
                  )
                )
              )
            : [n]
        ),
        r
      )
    }, [])
  },
  QL = function (e) {
    try {
      return e()
    } catch {
      return
    }
  },
  ds = function (e) {
    if ((e === void 0 && (e = document), !(!e || !e.activeElement))) {
      var t = e.activeElement
      return t.shadowRoot
        ? ds(t.shadowRoot)
        : t instanceof HTMLIFrameElement &&
          QL(function () {
            return t.contentWindow.document
          })
        ? ds(t.contentWindow.document)
        : t
    }
  },
  ZL = function (e, t) {
    return e === t
  },
  JL = function (e, t) {
    return !!Er(e.querySelectorAll('iframe')).some(function (r) {
      return ZL(r, t)
    })
  },
  PC = function (e, t) {
    return (
      t === void 0 && (t = ds(mC(e).ownerDocument)),
      !t || (t.dataset && t.dataset.focusGuard)
        ? !1
        : kv(e).some(function (r) {
            return ci(r, t) || JL(r, t)
          })
    )
  },
  eB = function (e) {
    e === void 0 && (e = document)
    var t = ds(e)
    return t
      ? Er(e.querySelectorAll('['.concat(kL, ']'))).some(function (r) {
          return ci(r, t)
        })
      : !1
  },
  tB = function (e, t) {
    return (
      t
        .filter(wC)
        .filter(function (r) {
          return r.name === e.name
        })
        .filter(function (r) {
          return r.checked
        })[0] || e
    )
  },
  Cv = function (e, t) {
    return wC(e) && e.name ? tB(e, t) : e
  },
  rB = function (e) {
    var t = new Set()
    return (
      e.forEach(function (r) {
        return t.add(Cv(r, e))
      }),
      e.filter(function (r) {
        return t.has(r)
      })
    )
  },
  j1 = function (e) {
    return e[0] && e.length > 1 ? Cv(e[0], e) : e[0]
  },
  M1 = function (e, t) {
    return e.length > 1 ? e.indexOf(Cv(e[t], e)) : t
  },
  EC = 'NEW_FOCUS',
  nB = function (e, t, r, n) {
    var o = e.length,
      i = e[0],
      a = e[o - 1],
      s = Sv(r)
    if (!(r && e.indexOf(r) >= 0)) {
      var l = r !== void 0 ? t.indexOf(r) : -1,
        u = n ? t.indexOf(n) : l,
        c = n ? e.indexOf(n) : -1,
        d = l - u,
        f = t.indexOf(i),
        h = t.indexOf(a),
        m = rB(t),
        p = r !== void 0 ? m.indexOf(r) : -1,
        S = p - (n ? m.indexOf(n) : l),
        g = M1(e, 0),
        v = M1(e, o - 1)
      if (l === -1 || c === -1) return EC
      if (!d && c >= 0) return c
      if (l <= f && s && Math.abs(d) > 1) return v
      if (l >= h && s && Math.abs(d) > 1) return g
      if (d && Math.abs(S) > 1) return c
      if (l <= f) return v
      if (l > h) return g
      if (d) return Math.abs(d) > 1 ? c : (o + c + d) % o
    }
  },
  oB = function (e) {
    return function (t) {
      var r,
        n = (r = SC(t)) === null || r === void 0 ? void 0 : r.autofocus
      return t.autofocus || (n !== void 0 && n !== 'false') || e.indexOf(t) >= 0
    }
  },
  iB = function (e, t, r) {
    var n = e.map(function (i) {
        var a = i.node
        return a
      }),
      o = R1(n.filter(oB(r)))
    return o && o.length ? j1(o) : j1(R1(t))
  },
  pp = function (e, t) {
    return (
      t === void 0 && (t = []),
      t.push(e),
      e.parentNode && pp(e.parentNode.host || e.parentNode, t),
      t
    )
  },
  bf = function (e, t) {
    for (var r = pp(e), n = pp(t), o = 0; o < r.length; o += 1) {
      var i = r[o]
      if (n.indexOf(i) >= 0) return i
    }
    return !1
  },
  TC = function (e, t, r) {
    var n = Wu(e),
      o = Wu(t),
      i = n[0],
      a = !1
    return (
      o.filter(Boolean).forEach(function (s) {
        ;(a = bf(a || s, s) || a),
          r.filter(Boolean).forEach(function (l) {
            var u = bf(i, l)
            u && (!a || ci(u, a) ? (a = u) : (a = bf(u, a)))
          })
      }),
      a
    )
  },
  aB = function (e, t) {
    return e.reduce(function (r, n) {
      return r.concat(YL(n, t))
    }, [])
  },
  sB = function (e, t) {
    var r = new Map()
    return (
      t.forEach(function (n) {
        return r.set(n.node, n)
      }),
      e
        .map(function (n) {
          return r.get(n)
        })
        .filter(WL)
    )
  },
  lB = function (e, t) {
    var r = ds(Wu(e).length > 0 ? document : mC(e).ownerDocument),
      n = kv(e).filter(Uu),
      o = TC(r || e, e, n),
      i = new Map(),
      a = $1(n, i),
      s = hp(n, i).filter(function (h) {
        var m = h.node
        return Uu(m)
      })
    if (!(!s[0] && ((s = a), !s[0]))) {
      var l = $1([o], i).map(function (h) {
          var m = h.node
          return m
        }),
        u = sB(l, s),
        c = u.map(function (h) {
          var m = h.node
          return m
        }),
        d = nB(c, l, r, t)
      if (d === EC) {
        var f = iB(a, c, aB(n, i))
        if (f) return { node: f }
        console.warn('focus-lock: cannot find any node to move focus into')
        return
      }
      return d === void 0 ? d : u[d]
    }
  },
  uB = function (e) {
    var t = kv(e).filter(Uu),
      r = TC(e, e, t),
      n = new Map(),
      o = hp([r], n, !0),
      i = hp(t, n)
        .filter(function (a) {
          var s = a.node
          return Uu(s)
        })
        .map(function (a) {
          var s = a.node
          return s
        })
    return o.map(function (a) {
      var s = a.node,
        l = a.index
      return { node: s, index: l, lockItem: i.indexOf(s) >= 0, guard: Sv(s) }
    })
  },
  cB = function (e, t) {
    'focus' in e && e.focus(t), 'contentWindow' in e && e.contentWindow && e.contentWindow.focus()
  },
  Sf = 0,
  xf = !1,
  AC = function (e, t, r) {
    r === void 0 && (r = {})
    var n = lB(e, t)
    if (!xf && n) {
      if (Sf > 2) {
        console.error(
          'FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting'
        ),
          (xf = !0),
          setTimeout(function () {
            xf = !1
          }, 1)
        return
      }
      Sf++, cB(n.node, r.focusOptions), Sf--
    }
  }
function RC(e) {
  var t = window,
    r = t.setImmediate
  typeof r < 'u' ? r(e) : setTimeout(e, 1)
}
var dB = function () {
    return document && document.activeElement === document.body
  },
  fB = function () {
    return dB() || eB()
  },
  di = null,
  Xo = null,
  fi = null,
  fs = !1,
  hB = function () {
    return !0
  },
  pB = function (t) {
    return (di.whiteList || hB)(t)
  },
  mB = function (t, r) {
    fi = { observerNode: t, portaledElement: r }
  },
  vB = function (t) {
    return fi && fi.portaledElement === t
  }
function O1(e, t, r, n) {
  var o = null,
    i = e
  do {
    var a = n[i]
    if (a.guard) a.node.dataset.focusAutoGuard && (o = a)
    else if (a.lockItem) {
      if (i !== e) return
      o = null
    } else break
  } while ((i += r) !== t)
  o && (o.node.tabIndex = 0)
}
var gB = function (t) {
    return t && 'current' in t ? t.current : t
  },
  yB = function (t) {
    return t ? !!fs : fs === 'meanwhile'
  },
  bB = function e(t, r, n) {
    return (
      r &&
      ((r.host === t && (!r.activeElement || n.contains(r.activeElement))) ||
        (r.parentNode && e(t, r.parentNode, n)))
    )
  },
  SB = function (t, r) {
    return r.some(function (n) {
      return bB(t, n, n)
    })
  },
  Hu = function () {
    var t = !1
    if (di) {
      var r = di,
        n = r.observed,
        o = r.persistentFocus,
        i = r.autoFocus,
        a = r.shards,
        s = r.crossFrame,
        l = r.focusOptions,
        u = n || (fi && fi.portaledElement),
        c = document && document.activeElement
      if (u) {
        var d = [u].concat(a.map(gB).filter(Boolean))
        if (
          ((!c || pB(c)) &&
            (o || yB(s) || !fB() || (!Xo && i)) &&
            (u &&
              !(PC(d) || (c && SB(c, d)) || vB(c)) &&
              (document && !Xo && c && !i
                ? (c.blur && c.blur(), document.body.focus())
                : ((t = AC(d, Xo, { focusOptions: l })), (fi = {}))),
            (fs = !1),
            (Xo = document && document.activeElement)),
          document)
        ) {
          var f = document && document.activeElement,
            h = uB(d),
            m = h
              .map(function (p) {
                var S = p.node
                return S
              })
              .indexOf(f)
          m > -1 &&
            (h
              .filter(function (p) {
                var S = p.guard,
                  g = p.node
                return S && g.dataset.focusAutoGuard
              })
              .forEach(function (p) {
                var S = p.node
                return S.removeAttribute('tabIndex')
              }),
            O1(m, h.length, 1, h),
            O1(m, -1, -1, h))
        }
      }
    }
    return t
  },
  $C = function (t) {
    Hu() && t && (t.stopPropagation(), t.preventDefault())
  },
  _v = function () {
    return RC(Hu)
  },
  xB = function (t) {
    var r = t.target,
      n = t.currentTarget
    n.contains(r) || mB(n, r)
  },
  wB = function () {
    return null
  },
  jC = function () {
    ;(fs = 'just'),
      setTimeout(function () {
        fs = 'meanwhile'
      }, 0)
  },
  kB = function () {
    document.addEventListener('focusin', $C),
      document.addEventListener('focusout', _v),
      window.addEventListener('blur', jC)
  },
  CB = function () {
    document.removeEventListener('focusin', $C),
      document.removeEventListener('focusout', _v),
      window.removeEventListener('blur', jC)
  }
function _B(e) {
  return e.filter(function (t) {
    var r = t.disabled
    return !r
  })
}
function PB(e) {
  var t = e.slice(-1)[0]
  t && !di && kB()
  var r = di,
    n = r && t && t.id === r.id
  ;(di = t),
    r &&
      !n &&
      (r.onDeactivation(),
      e.filter(function (o) {
        var i = o.id
        return i === r.id
      }).length || r.returnFocus(!t)),
    t
      ? ((Xo = null), (!n || r.observed !== t.observed) && t.onActivation(), Hu(), RC(Hu))
      : (CB(), (Xo = null))
}
dC.assignSyncMedium(xB)
fC.assignMedium(_v)
RL.assignMedium(function (e) {
  return e({ moveFocusInside: AC, focusInside: PC })
})
const EB = FL(_B, PB)(wB)
var MC = y.forwardRef(function (t, r) {
    return y.createElement(hC, po({ sideCar: EB, ref: r }, t))
  }),
  OC = hC.propTypes || {}
OC.sideCar
wL(OC, ['sideCar'])
MC.propTypes = {}
const I1 = MC
function TB(e) {
  return e != null && typeof e == 'object' && 'nodeType' in e && e.nodeType === Node.ELEMENT_NODE
}
function AB(e) {
  var t
  if (!TB(e)) return !1
  const r = (t = e.ownerDocument.defaultView) != null ? t : window
  return e instanceof r.HTMLElement
}
var RB = e => e.hasAttribute('tabindex')
function $B(e) {
  return !!e.getAttribute('disabled') || !!e.getAttribute('aria-disabled')
}
function IC(e) {
  return e.parentElement && IC(e.parentElement) ? !0 : e.hidden
}
function jB(e) {
  const t = e.getAttribute('contenteditable')
  return t !== 'false' && t != null
}
function MB(e) {
  if (!AB(e) || IC(e) || $B(e)) return !1
  const { localName: t } = e
  if (['input', 'select', 'textarea', 'button'].indexOf(t) >= 0) return !0
  const n = {
    a: () => e.hasAttribute('href'),
    audio: () => e.hasAttribute('controls'),
    video: () => e.hasAttribute('controls'),
  }
  return t in n ? n[t]() : jB(e) ? !0 : RB(e)
}
var OB = [
    'input:not(:disabled):not([disabled])',
    'select:not(:disabled):not([disabled])',
    'textarea:not(:disabled):not([disabled])',
    'embed',
    'iframe',
    'object',
    'a[href]',
    'area[href]',
    'button:not(:disabled):not([disabled])',
    '[tabindex]',
    'audio[controls]',
    'video[controls]',
    '*[tabindex]:not([aria-disabled])',
    '*[contenteditable]',
  ],
  IB = OB.join(),
  FB = e => e.offsetWidth > 0 && e.offsetHeight > 0
function DB(e) {
  const t = Array.from(e.querySelectorAll(IB))
  return t.unshift(e), t.filter(r => MB(r) && FB(r))
}
var F1,
  NB = (F1 = I1.default) != null ? F1 : I1,
  FC = e => {
    const {
        initialFocusRef: t,
        finalFocusRef: r,
        contentRef: n,
        restoreFocus: o,
        children: i,
        isDisabled: a,
        autoFocus: s,
        persistentFocus: l,
        lockFocusAcrossFrames: u,
      } = e,
      c = y.useCallback(() => {
        t != null && t.current
          ? t.current.focus()
          : n != null &&
            n.current &&
            DB(n.current).length === 0 &&
            requestAnimationFrame(() => {
              var m
              ;(m = n.current) == null || m.focus()
            })
      }, [t, n]),
      d = y.useCallback(() => {
        var h
        ;(h = r == null ? void 0 : r.current) == null || h.focus()
      }, [r]),
      f = o && !r
    return x.jsx(NB, {
      crossFrame: u,
      persistentFocus: l,
      autoFocus: s,
      disabled: a,
      onActivation: c,
      onDeactivation: d,
      returnFocus: f,
      children: i,
    })
  }
FC.displayName = 'FocusLock'
var zB = PI ? y.useLayoutEffect : y.useEffect
function D1(e, t = []) {
  const r = y.useRef(e)
  return (
    zB(() => {
      r.current = e
    }),
    y.useCallback((...n) => {
      var o
      return (o = r.current) == null ? void 0 : o.call(r, ...n)
    }, t)
  )
}
function LB(e, t) {
  const r = y.useId()
  return y.useMemo(() => e || [t, r].filter(Boolean).join('-'), [e, t, r])
}
function BB(e, t) {
  const r = e !== void 0
  return [r, r && typeof e < 'u' ? e : t]
}
function VB(e = {}) {
  const { onClose: t, onOpen: r, isOpen: n, id: o } = e,
    i = D1(r),
    a = D1(t),
    [s, l] = y.useState(e.defaultIsOpen || !1),
    [u, c] = BB(n, s),
    d = LB(o, 'disclosure'),
    f = y.useCallback(() => {
      u || l(!1), a == null || a()
    }, [u, a]),
    h = y.useCallback(() => {
      u || l(!0), i == null || i()
    }, [u, i]),
    m = y.useCallback(() => {
      ;(c ? f : h)()
    }, [c, h, f])
  return {
    isOpen: !!c,
    onOpen: h,
    onClose: f,
    onToggle: m,
    isControlled: u,
    getButtonProps: (p = {}) => ({
      ...p,
      'aria-expanded': c,
      'aria-controls': d,
      onClick: $I(p.onClick, m),
    }),
    getDisclosureProps: (p = {}) => ({ ...p, hidden: !c, id: d }),
  }
}
var Ai = H(function (t, r) {
  const { htmlSize: n, ...o } = t,
    i = In('Input', o),
    a = Je(o),
    s = vv(a),
    l = q('chakra-input', t.className)
  return x.jsx(D.input, { size: n, ...s, __css: i.field, ref: r, className: l })
})
Ai.displayName = 'Input'
Ai.id = 'Input'
var Co = H(function (t, r) {
  const {
      templateAreas: n,
      gap: o,
      rowGap: i,
      columnGap: a,
      column: s,
      row: l,
      autoFlow: u,
      autoRows: c,
      templateRows: d,
      autoColumns: f,
      templateColumns: h,
      ...m
    } = t,
    p = {
      display: 'grid',
      gridTemplateAreas: n,
      gridGap: o,
      gridRowGap: i,
      gridColumnGap: a,
      gridAutoColumns: f,
      gridColumn: s,
      gridRow: l,
      gridAutoFlow: u,
      gridAutoRows: c,
      gridTemplateRows: d,
      gridTemplateColumns: h,
    }
  return x.jsx(D.div, { ref: r, __css: p, ...m })
})
Co.displayName = 'Grid'
function Pv(e, t) {
  return Array.isArray(e)
    ? e.map(r => (r === null ? null : t(r)))
    : st(e)
    ? Object.keys(e).reduce((r, n) => ((r[n] = t(e[n])), r), {})
    : e != null
    ? t(e)
    : null
}
var _r = H(function (t, r) {
  const n = sr('Text', t),
    { className: o, align: i, decoration: a, casing: s, ...l } = Je(t),
    u = xw({ textAlign: t.align, textDecoration: t.decoration, textTransform: t.casing })
  return x.jsx(D.p, { ref: r, className: q('chakra-text', t.className), ...u, ...l, __css: n })
})
_r.displayName = 'Text'
var DC = e =>
  x.jsx(D.div, {
    className: 'chakra-stack__item',
    ...e,
    __css: { display: 'inline-block', flex: '0 0 auto', minWidth: 0, ...e.__css },
  })
DC.displayName = 'StackItem'
var mp = '& > *:not(style) ~ *:not(style)'
function WB(e) {
  const { spacing: t, direction: r } = e,
    n = {
      column: { marginTop: t, marginEnd: 0, marginBottom: 0, marginStart: 0 },
      row: { marginTop: 0, marginEnd: 0, marginBottom: 0, marginStart: t },
      'column-reverse': { marginTop: 0, marginEnd: 0, marginBottom: t, marginStart: 0 },
      'row-reverse': { marginTop: 0, marginEnd: t, marginBottom: 0, marginStart: 0 },
    }
  return { flexDirection: r, [mp]: Pv(r, o => n[o]) }
}
function UB(e) {
  const { spacing: t, direction: r } = e,
    n = {
      column: { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: '1px' },
      'column-reverse': { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: '1px' },
      row: { mx: t, my: 0, borderLeftWidth: '1px', borderBottomWidth: 0 },
      'row-reverse': { mx: t, my: 0, borderLeftWidth: '1px', borderBottomWidth: 0 },
    }
  return { '&': Pv(r, o => n[o]) }
}
var Gr = H((e, t) => {
  const {
      isInline: r,
      direction: n,
      align: o,
      justify: i,
      spacing: a = '0.5rem',
      wrap: s,
      children: l,
      divider: u,
      className: c,
      shouldWrapChildren: d,
      ...f
    } = e,
    h = r ? 'row' : n ?? 'column',
    m = y.useMemo(() => WB({ direction: h, spacing: a }), [h, a]),
    p = y.useMemo(() => UB({ spacing: a, direction: h }), [a, h]),
    S = !!u,
    g = !d && !S,
    v = y.useMemo(() => {
      const k = rL(l)
      return g
        ? k
        : k.map((C, R) => {
            const E = typeof C.key < 'u' ? C.key : R,
              T = R + 1 === k.length,
              j = d ? x.jsx(DC, { children: C }, E) : C
            if (!S) return j
            const W = y.cloneElement(u, { __css: p }),
              he = T ? null : W
            return x.jsxs(y.Fragment, { children: [j, he] }, E)
          })
    }, [u, p, S, g, d, l]),
    b = q('chakra-stack', c)
  return x.jsx(D.div, {
    ref: t,
    display: 'flex',
    alignItems: o,
    justifyContent: i,
    flexDirection: m.flexDirection,
    flexWrap: s,
    className: b,
    __css: S ? {} : { [mp]: m[mp] },
    ...f,
    children: v,
  })
})
Gr.displayName = 'Stack'
function N1(e) {
  return Pv(e, t => (t === 'auto' ? 'auto' : `span ${t}/span ${t}`))
}
var Ev = H(function (t, r) {
  const {
      area: n,
      colSpan: o,
      colStart: i,
      colEnd: a,
      rowEnd: s,
      rowSpan: l,
      rowStart: u,
      ...c
    } = t,
    d = xw({
      gridArea: n,
      gridColumn: N1(o),
      gridRow: N1(l),
      gridColumnStart: i,
      gridColumnEnd: a,
      gridRowStart: u,
      gridRowEnd: s,
    })
  return x.jsx(D.div, { ref: r, __css: d, ...c })
})
Ev.displayName = 'GridItem'
var Tv = H(function (t, r) {
  const n = sr('Heading', t),
    { className: o, ...i } = Je(t)
  return x.jsx(D.h2, { ref: r, className: q('chakra-heading', t.className), ...i, __css: n })
})
Tv.displayName = 'Heading'
var NC = H(function (t, r) {
  const n = sr('Badge', t),
    { className: o, ...i } = Je(t)
  return x.jsx(D.span, {
    ref: r,
    className: q('chakra-badge', t.className),
    ...i,
    __css: { display: 'inline-block', whiteSpace: 'nowrap', verticalAlign: 'middle', ...n },
  })
})
NC.displayName = 'Badge'
var zC = D('div', {
  baseStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
})
zC.displayName = 'Center'
var HB = {
  horizontal: { insetStart: '50%', transform: 'translateX(-50%)' },
  vertical: { top: '50%', transform: 'translateY(-50%)' },
  both: { insetStart: '50%', top: '50%', transform: 'translate(-50%, -50%)' },
}
H(function (t, r) {
  const { axis: n = 'both', ...o } = t
  return x.jsx(D.div, { ref: r, __css: HB[n], ...o, position: 'absolute' })
})
var LC = H(function (t, r) {
  const { className: n, centerContent: o, ...i } = Je(t),
    a = sr('Container', t)
  return x.jsx(D.div, {
    ref: r,
    className: q('chakra-container', n),
    ...i,
    __css: { ...a, ...(o && { display: 'flex', flexDirection: 'column', alignItems: 'center' }) },
  })
})
LC.displayName = 'Container'
var hi = H(function (t, r) {
  const { direction: n, align: o, justify: i, wrap: a, basis: s, grow: l, shrink: u, ...c } = t,
    d = {
      display: 'flex',
      flexDirection: n,
      alignItems: o,
      justifyContent: i,
      flexWrap: a,
      flexBasis: s,
      flexGrow: l,
      flexShrink: u,
    }
  return x.jsx(D.div, { ref: r, __css: d, ...c })
})
hi.displayName = 'Flex'
var GB = {
    slideInBottom: { ...op, custom: { offsetY: 16, reverse: !0 } },
    slideInRight: { ...op, custom: { offsetX: 16, reverse: !0 } },
    scale: { ...Xk, custom: { initialScale: 0.95, reverse: !0 } },
    none: {},
  },
  KB = D(Ii.section),
  qB = e => GB[e || 'none'],
  BC = y.forwardRef((e, t) => {
    const { preset: r, motionProps: n = qB(r), ...o } = e
    return x.jsx(KB, { ref: t, ...n, ...o })
  })
BC.displayName = 'ModalTransition'
var YB = Object.defineProperty,
  XB = (e, t, r) =>
    t in e ? YB(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r),
  QB = (e, t, r) => (XB(e, typeof t != 'symbol' ? t + '' : t, r), r),
  ZB = class {
    constructor() {
      QB(this, 'modals'), (this.modals = new Map())
    }
    add(e) {
      return this.modals.set(e, this.modals.size + 1), this.modals.size
    }
    remove(e) {
      this.modals.delete(e)
    }
    isTopModal(e) {
      return e ? this.modals.get(e) === this.modals.size : !1
    }
  },
  vp = new ZB()
function VC(e, t) {
  const [r, n] = y.useState(0)
  return (
    y.useEffect(() => {
      const o = e.current
      if (o) {
        if (t) {
          const i = vp.add(o)
          n(i)
        }
        return () => {
          vp.remove(o), n(0)
        }
      }
    }, [t, e]),
    r
  )
}
var JB = function (e) {
    if (typeof document > 'u') return null
    var t = Array.isArray(e) ? e[0] : e
    return t.ownerDocument.body
  },
  Ro = new WeakMap(),
  wl = new WeakMap(),
  kl = {},
  wf = 0,
  WC = function (e) {
    return e && (e.host || WC(e.parentNode))
  },
  e6 = function (e, t) {
    return t
      .map(function (r) {
        if (e.contains(r)) return r
        var n = WC(r)
        return n && e.contains(n)
          ? n
          : (console.error('aria-hidden', r, 'in not contained inside', e, '. Doing nothing'), null)
      })
      .filter(function (r) {
        return !!r
      })
  },
  t6 = function (e, t, r, n) {
    var o = e6(t, Array.isArray(e) ? e : [e])
    kl[r] || (kl[r] = new WeakMap())
    var i = kl[r],
      a = [],
      s = new Set(),
      l = new Set(o),
      u = function (d) {
        !d || s.has(d) || (s.add(d), u(d.parentNode))
      }
    o.forEach(u)
    var c = function (d) {
      !d ||
        l.has(d) ||
        Array.prototype.forEach.call(d.children, function (f) {
          if (s.has(f)) c(f)
          else {
            var h = f.getAttribute(n),
              m = h !== null && h !== 'false',
              p = (Ro.get(f) || 0) + 1,
              S = (i.get(f) || 0) + 1
            Ro.set(f, p),
              i.set(f, S),
              a.push(f),
              p === 1 && m && wl.set(f, !0),
              S === 1 && f.setAttribute(r, 'true'),
              m || f.setAttribute(n, 'true')
          }
        })
    }
    return (
      c(t),
      s.clear(),
      wf++,
      function () {
        a.forEach(function (d) {
          var f = Ro.get(d) - 1,
            h = i.get(d) - 1
          Ro.set(d, f),
            i.set(d, h),
            f || (wl.has(d) || d.removeAttribute(n), wl.delete(d)),
            h || d.removeAttribute(r)
        }),
          wf--,
          wf || ((Ro = new WeakMap()), (Ro = new WeakMap()), (wl = new WeakMap()), (kl = {}))
      }
    )
  },
  r6 = function (e, t, r) {
    r === void 0 && (r = 'data-aria-hidden')
    var n = Array.from(Array.isArray(e) ? e : [e]),
      o = t || JB(e)
    return o
      ? (n.push.apply(n, Array.from(o.querySelectorAll('[aria-live]'))), t6(n, o, r, 'aria-hidden'))
      : function () {
          return null
        }
  }
function n6(e) {
  const {
      isOpen: t,
      onClose: r,
      id: n,
      closeOnOverlayClick: o = !0,
      closeOnEsc: i = !0,
      useInert: a = !0,
      onOverlayClick: s,
      onEsc: l,
    } = e,
    u = y.useRef(null),
    c = y.useRef(null),
    [d, f, h] = i6(n, 'chakra-modal', 'chakra-modal--header', 'chakra-modal--body')
  o6(u, t && a), VC(u, t)
  const m = y.useRef(null),
    p = y.useCallback(T => {
      m.current = T.target
    }, []),
    S = y.useCallback(
      T => {
        T.key === 'Escape' && (T.stopPropagation(), i && (r == null || r()), l == null || l())
      },
      [i, r, l]
    ),
    [g, v] = y.useState(!1),
    [b, k] = y.useState(!1),
    C = y.useCallback(
      (T = {}, M = null) => ({
        role: 'dialog',
        ...T,
        ref: Ei(M, u),
        id: d,
        tabIndex: -1,
        'aria-modal': !0,
        'aria-labelledby': g ? f : void 0,
        'aria-describedby': b ? h : void 0,
        onClick: Ne(T.onClick, j => j.stopPropagation()),
      }),
      [h, b, d, f, g]
    ),
    R = y.useCallback(
      T => {
        T.stopPropagation(),
          m.current === T.target &&
            vp.isTopModal(u.current) &&
            (o && (r == null || r()), s == null || s())
      },
      [r, o, s]
    ),
    E = y.useCallback(
      (T = {}, M = null) => ({
        ...T,
        ref: Ei(M, c),
        onClick: Ne(T.onClick, R),
        onKeyDown: Ne(T.onKeyDown, S),
        onMouseDown: Ne(T.onMouseDown, p),
      }),
      [S, p, R]
    )
  return {
    isOpen: t,
    onClose: r,
    headerId: f,
    bodyId: h,
    setBodyMounted: k,
    setHeaderMounted: v,
    dialogRef: u,
    overlayRef: c,
    getDialogProps: C,
    getDialogContainerProps: E,
  }
}
function o6(e, t) {
  const r = e.current
  y.useEffect(() => {
    if (!(!e.current || !t)) return r6(e.current)
  }, [t, e, r])
}
function i6(e, ...t) {
  const r = y.useId(),
    n = e || r
  return y.useMemo(() => t.map(o => `${o}-${n}`), [n, t])
}
var [a6, Fi] = qt({
    name: 'ModalStylesContext',
    errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `,
  }),
  [s6, yo] = qt({
    strict: !0,
    name: 'ModalContext',
    errorMessage:
      'useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`',
  }),
  UC = e => {
    const t = {
        scrollBehavior: 'outside',
        autoFocus: !0,
        trapFocus: !0,
        returnFocusOnClose: !0,
        blockScrollOnMount: !0,
        allowPinchZoom: !1,
        motionPreset: 'scale',
        lockFocusAcrossFrames: !0,
        ...e,
      },
      {
        portalProps: r,
        children: n,
        autoFocus: o,
        trapFocus: i,
        initialFocusRef: a,
        finalFocusRef: s,
        returnFocusOnClose: l,
        blockScrollOnMount: u,
        allowPinchZoom: c,
        preserveScrollBarGap: d,
        motionPreset: f,
        lockFocusAcrossFrames: h,
        onCloseComplete: m,
      } = t,
      p = In('Modal', t),
      g = {
        ...n6(t),
        autoFocus: o,
        trapFocus: i,
        initialFocusRef: a,
        finalFocusRef: s,
        returnFocusOnClose: l,
        blockScrollOnMount: u,
        allowPinchZoom: c,
        preserveScrollBarGap: d,
        motionPreset: f,
        lockFocusAcrossFrames: h,
      }
    return x.jsx(s6, {
      value: g,
      children: x.jsx(a6, {
        value: p,
        children: x.jsx(As, {
          onExitComplete: m,
          children: g.isOpen && x.jsx(ws, { ...r, children: n }),
        }),
      }),
    })
  }
UC.displayName = 'Modal'
var ql = 'right-scroll-bar-position',
  Yl = 'width-before-scroll-bar',
  l6 = 'with-scroll-bars-hidden',
  u6 = '--removed-body-scroll-bar-size',
  HC = uC(),
  kf = function () {},
  Uc = y.forwardRef(function (e, t) {
    var r = y.useRef(null),
      n = y.useState({ onScrollCapture: kf, onWheelCapture: kf, onTouchMoveCapture: kf }),
      o = n[0],
      i = n[1],
      a = e.forwardProps,
      s = e.children,
      l = e.className,
      u = e.removeScrollBar,
      c = e.enabled,
      d = e.shards,
      f = e.sideCar,
      h = e.noIsolation,
      m = e.inert,
      p = e.allowPinchZoom,
      S = e.as,
      g = S === void 0 ? 'div' : S,
      v = aC(e, [
        'forwardProps',
        'children',
        'className',
        'removeScrollBar',
        'enabled',
        'shards',
        'sideCar',
        'noIsolation',
        'inert',
        'allowPinchZoom',
        'as',
      ]),
      b = f,
      k = iC([r, t]),
      C = yr(yr({}, v), o)
    return y.createElement(
      y.Fragment,
      null,
      c &&
        y.createElement(b, {
          sideCar: HC,
          removeScrollBar: u,
          shards: d,
          noIsolation: h,
          inert: m,
          setCallbacks: i,
          allowPinchZoom: !!p,
          lockRef: r,
        }),
      a
        ? y.cloneElement(y.Children.only(s), yr(yr({}, C), { ref: k }))
        : y.createElement(g, yr({}, C, { className: l, ref: k }), s)
    )
  })
Uc.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }
Uc.classNames = { fullWidth: Yl, zeroRight: ql }
var z1,
  c6 = function () {
    if (z1) return z1
    if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__
  }
function d6() {
  if (!document) return null
  var e = document.createElement('style')
  e.type = 'text/css'
  var t = c6()
  return t && e.setAttribute('nonce', t), e
}
function f6(e, t) {
  e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t))
}
function h6(e) {
  var t = document.head || document.getElementsByTagName('head')[0]
  t.appendChild(e)
}
var p6 = function () {
    var e = 0,
      t = null
    return {
      add: function (r) {
        e == 0 && (t = d6()) && (f6(t, r), h6(t)), e++
      },
      remove: function () {
        e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null))
      },
    }
  },
  m6 = function () {
    var e = p6()
    return function (t, r) {
      y.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove()
            }
          )
        },
        [t && r]
      )
    }
  },
  GC = function () {
    var e = m6(),
      t = function (r) {
        var n = r.styles,
          o = r.dynamic
        return e(n, o), null
      }
    return t
  },
  v6 = { left: 0, top: 0, right: 0, gap: 0 },
  Cf = function (e) {
    return parseInt(e || '', 10) || 0
  },
  g6 = function (e) {
    var t = window.getComputedStyle(document.body),
      r = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
      n = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
      o = t[e === 'padding' ? 'paddingRight' : 'marginRight']
    return [Cf(r), Cf(n), Cf(o)]
  },
  y6 = function (e) {
    if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return v6
    var t = g6(e),
      r = document.documentElement.clientWidth,
      n = window.innerWidth
    return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, n - r + t[2] - t[0]) }
  },
  b6 = GC(),
  S6 = function (e, t, r, n) {
    var o = e.left,
      i = e.top,
      a = e.right,
      s = e.gap
    return (
      r === void 0 && (r = 'margin'),
      `
  .`
        .concat(
          l6,
          ` {
   overflow: hidden `
        )
        .concat(
          n,
          `;
   padding-right: `
        )
        .concat(s, 'px ')
        .concat(
          n,
          `;
  }
  body {
    overflow: hidden `
        )
        .concat(
          n,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && 'position: relative '.concat(n, ';'),
            r === 'margin' &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  a,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(s, 'px ')
                .concat(
                  n,
                  `;
    `
                ),
            r === 'padding' && 'padding-right: '.concat(s, 'px ').concat(n, ';'),
          ]
            .filter(Boolean)
            .join(''),
          `
  }
  
  .`
        )
        .concat(
          ql,
          ` {
    right: `
        )
        .concat(s, 'px ')
        .concat(
          n,
          `;
  }
  
  .`
        )
        .concat(
          Yl,
          ` {
    margin-right: `
        )
        .concat(s, 'px ')
        .concat(
          n,
          `;
  }
  
  .`
        )
        .concat(ql, ' .')
        .concat(
          ql,
          ` {
    right: 0 `
        )
        .concat(
          n,
          `;
  }
  
  .`
        )
        .concat(Yl, ' .')
        .concat(
          Yl,
          ` {
    margin-right: 0 `
        )
        .concat(
          n,
          `;
  }
  
  body {
    `
        )
        .concat(u6, ': ')
        .concat(
          s,
          `px;
  }
`
        )
    )
  },
  x6 = function (e) {
    var t = e.noRelative,
      r = e.noImportant,
      n = e.gapMode,
      o = n === void 0 ? 'margin' : n,
      i = y.useMemo(
        function () {
          return y6(o)
        },
        [o]
      )
    return y.createElement(b6, { styles: S6(i, !t, o, r ? '' : '!important') })
  },
  gp = !1
if (typeof window < 'u')
  try {
    var Cl = Object.defineProperty({}, 'passive', {
      get: function () {
        return (gp = !0), !0
      },
    })
    window.addEventListener('test', Cl, Cl), window.removeEventListener('test', Cl, Cl)
  } catch {
    gp = !1
  }
var $o = gp ? { passive: !1 } : !1,
  w6 = function (e) {
    return e.tagName === 'TEXTAREA'
  },
  KC = function (e, t) {
    var r = window.getComputedStyle(e)
    return r[t] !== 'hidden' && !(r.overflowY === r.overflowX && !w6(e) && r[t] === 'visible')
  },
  k6 = function (e) {
    return KC(e, 'overflowY')
  },
  C6 = function (e) {
    return KC(e, 'overflowX')
  },
  L1 = function (e, t) {
    var r = t
    do {
      typeof ShadowRoot < 'u' && r instanceof ShadowRoot && (r = r.host)
      var n = qC(e, r)
      if (n) {
        var o = YC(e, r),
          i = o[1],
          a = o[2]
        if (i > a) return !0
      }
      r = r.parentNode
    } while (r && r !== document.body)
    return !1
  },
  _6 = function (e) {
    var t = e.scrollTop,
      r = e.scrollHeight,
      n = e.clientHeight
    return [t, r, n]
  },
  P6 = function (e) {
    var t = e.scrollLeft,
      r = e.scrollWidth,
      n = e.clientWidth
    return [t, r, n]
  },
  qC = function (e, t) {
    return e === 'v' ? k6(t) : C6(t)
  },
  YC = function (e, t) {
    return e === 'v' ? _6(t) : P6(t)
  },
  E6 = function (e, t) {
    return e === 'h' && t === 'rtl' ? -1 : 1
  },
  T6 = function (e, t, r, n, o) {
    var i = E6(e, window.getComputedStyle(t).direction),
      a = i * n,
      s = r.target,
      l = t.contains(s),
      u = !1,
      c = a > 0,
      d = 0,
      f = 0
    do {
      var h = YC(e, s),
        m = h[0],
        p = h[1],
        S = h[2],
        g = p - S - i * m
      ;(m || g) && qC(e, s) && ((d += g), (f += m)), (s = s.parentNode)
    } while ((!l && s !== document.body) || (l && (t.contains(s) || t === s)))
    return (
      ((c && ((o && d === 0) || (!o && a > d))) || (!c && ((o && f === 0) || (!o && -a > f)))) &&
        (u = !0),
      u
    )
  },
  _l = function (e) {
    return 'changedTouches' in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0]
  },
  B1 = function (e) {
    return [e.deltaX, e.deltaY]
  },
  V1 = function (e) {
    return e && 'current' in e ? e.current : e
  },
  A6 = function (e, t) {
    return e[0] === t[0] && e[1] === t[1]
  },
  R6 = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      )
  },
  $6 = 0,
  jo = []
function j6(e) {
  var t = y.useRef([]),
    r = y.useRef([0, 0]),
    n = y.useRef(),
    o = y.useState($6++)[0],
    i = y.useState(function () {
      return GC()
    })[0],
    a = y.useRef(e)
  y.useEffect(
    function () {
      a.current = e
    },
    [e]
  ),
    y.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add('block-interactivity-'.concat(o))
          var p = TL([e.lockRef.current], (e.shards || []).map(V1), !0).filter(Boolean)
          return (
            p.forEach(function (S) {
              return S.classList.add('allow-interactivity-'.concat(o))
            }),
            function () {
              document.body.classList.remove('block-interactivity-'.concat(o)),
                p.forEach(function (S) {
                  return S.classList.remove('allow-interactivity-'.concat(o))
                })
            }
          )
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    )
  var s = y.useCallback(function (p, S) {
      if ('touches' in p && p.touches.length === 2) return !a.current.allowPinchZoom
      var g = _l(p),
        v = r.current,
        b = 'deltaX' in p ? p.deltaX : v[0] - g[0],
        k = 'deltaY' in p ? p.deltaY : v[1] - g[1],
        C,
        R = p.target,
        E = Math.abs(b) > Math.abs(k) ? 'h' : 'v'
      if ('touches' in p && E === 'h' && R.type === 'range') return !1
      var T = L1(E, R)
      if (!T) return !0
      if ((T ? (C = E) : ((C = E === 'v' ? 'h' : 'v'), (T = L1(E, R))), !T)) return !1
      if ((!n.current && 'changedTouches' in p && (b || k) && (n.current = C), !C)) return !0
      var M = n.current || C
      return T6(M, S, p, M === 'h' ? b : k, !0)
    }, []),
    l = y.useCallback(function (p) {
      var S = p
      if (!(!jo.length || jo[jo.length - 1] !== i)) {
        var g = 'deltaY' in S ? B1(S) : _l(S),
          v = t.current.filter(function (C) {
            return C.name === S.type && C.target === S.target && A6(C.delta, g)
          })[0]
        if (v && v.should) {
          S.cancelable && S.preventDefault()
          return
        }
        if (!v) {
          var b = (a.current.shards || [])
              .map(V1)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(S.target)
              }),
            k = b.length > 0 ? s(S, b[0]) : !a.current.noIsolation
          k && S.cancelable && S.preventDefault()
        }
      }
    }, []),
    u = y.useCallback(function (p, S, g, v) {
      var b = { name: p, delta: S, target: g, should: v }
      t.current.push(b),
        setTimeout(function () {
          t.current = t.current.filter(function (k) {
            return k !== b
          })
        }, 1)
    }, []),
    c = y.useCallback(function (p) {
      ;(r.current = _l(p)), (n.current = void 0)
    }, []),
    d = y.useCallback(function (p) {
      u(p.type, B1(p), p.target, s(p, e.lockRef.current))
    }, []),
    f = y.useCallback(function (p) {
      u(p.type, _l(p), p.target, s(p, e.lockRef.current))
    }, [])
  y.useEffect(function () {
    return (
      jo.push(i),
      e.setCallbacks({ onScrollCapture: d, onWheelCapture: d, onTouchMoveCapture: f }),
      document.addEventListener('wheel', l, $o),
      document.addEventListener('touchmove', l, $o),
      document.addEventListener('touchstart', c, $o),
      function () {
        ;(jo = jo.filter(function (p) {
          return p !== i
        })),
          document.removeEventListener('wheel', l, $o),
          document.removeEventListener('touchmove', l, $o),
          document.removeEventListener('touchstart', c, $o)
      }
    )
  }, [])
  var h = e.removeScrollBar,
    m = e.inert
  return y.createElement(
    y.Fragment,
    null,
    m ? y.createElement(i, { styles: R6(o) }) : null,
    h ? y.createElement(x6, { gapMode: 'margin' }) : null
  )
}
const M6 = AL(HC, j6)
var XC = y.forwardRef(function (e, t) {
  return y.createElement(Uc, yr({}, e, { ref: t, sideCar: M6 }))
})
XC.classNames = Uc.classNames
const O6 = XC
function I6(e) {
  const {
      autoFocus: t,
      trapFocus: r,
      dialogRef: n,
      initialFocusRef: o,
      blockScrollOnMount: i,
      allowPinchZoom: a,
      finalFocusRef: s,
      returnFocusOnClose: l,
      preserveScrollBarGap: u,
      lockFocusAcrossFrames: c,
      isOpen: d,
    } = yo(),
    [f, h] = Ak()
  y.useEffect(() => {
    !f && h && setTimeout(h)
  }, [f, h])
  const m = VC(n, d)
  return x.jsx(FC, {
    autoFocus: t,
    isDisabled: !r,
    initialFocusRef: o,
    finalFocusRef: s,
    restoreFocus: l,
    contentRef: n,
    lockFocusAcrossFrames: c,
    children: x.jsx(O6, {
      removeScrollBar: !u,
      allowPinchZoom: a,
      enabled: m === 1 && i,
      forwardProps: !0,
      children: e.children,
    }),
  })
}
var QC = H((e, t) => {
  const { className: r, children: n, containerProps: o, motionProps: i, ...a } = e,
    { getDialogProps: s, getDialogContainerProps: l } = yo(),
    u = s(a, t),
    c = l(o),
    d = q('chakra-modal__content', r),
    f = Fi(),
    h = {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      width: '100%',
      outline: 0,
      ...f.dialog,
    },
    m = {
      display: 'flex',
      width: '100vw',
      height: '$100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      ...f.dialogContainer,
    },
    { motionPreset: p } = yo()
  return x.jsx(I6, {
    children: x.jsx(D.div, {
      ...c,
      className: 'chakra-modal__content-container',
      tabIndex: -1,
      __css: m,
      children: x.jsx(BC, { preset: p, motionProps: i, className: d, ...u, __css: h, children: n }),
    }),
  })
})
QC.displayName = 'ModalContent'
var ZC = H((e, t) => {
  const { className: r, ...n } = e,
    o = q('chakra-modal__footer', r),
    a = { display: 'flex', alignItems: 'center', justifyContent: 'flex-end', ...Fi().footer }
  return x.jsx(D.footer, { ref: t, ...n, __css: a, className: o })
})
ZC.displayName = 'ModalFooter'
var JC = H((e, t) => {
  const { className: r, ...n } = e,
    { headerId: o, setHeaderMounted: i } = yo()
  y.useEffect(() => (i(!0), () => i(!1)), [i])
  const a = q('chakra-modal__header', r),
    l = { flex: 0, ...Fi().header }
  return x.jsx(D.header, { ref: t, className: a, id: o, ...n, __css: l })
})
JC.displayName = 'ModalHeader'
var F6 = D(Ii.div),
  e_ = H((e, t) => {
    const { className: r, transition: n, motionProps: o, ...i } = e,
      a = q('chakra-modal__overlay', r),
      l = { pos: 'fixed', left: '0', top: '0', w: '100vw', h: '100vh', ...Fi().overlay },
      { motionPreset: u } = yo(),
      d = o || (u === 'none' ? {} : Yk)
    return x.jsx(F6, { ...d, __css: l, ref: t, className: a, ...i })
  })
e_.displayName = 'ModalOverlay'
var t_ = H((e, t) => {
  const { className: r, ...n } = e,
    { bodyId: o, setBodyMounted: i } = yo()
  y.useEffect(() => (i(!0), () => i(!1)), [i])
  const a = q('chakra-modal__body', r),
    s = Fi()
  return x.jsx(D.div, { ref: t, className: a, id: o, ...n, __css: s.body })
})
t_.displayName = 'ModalBody'
var r_ = H((e, t) => {
  const { onClick: r, className: n, ...o } = e,
    { onClose: i } = yo(),
    a = q('chakra-modal__close-btn', n),
    s = Fi()
  return x.jsx(hv, {
    ref: t,
    __css: s.closeButton,
    className: a,
    onClick: Ne(r, l => {
      l.stopPropagation(), i()
    }),
    ...o,
  })
})
r_.displayName = 'ModalCloseButton'
function D6(e) {
  return e && st(e) && st(e.target)
}
function N6(e = {}) {
  const {
      onChange: t,
      value: r,
      defaultValue: n,
      name: o,
      isDisabled: i,
      isFocusable: a,
      isNative: s,
      ...l
    } = e,
    [u, c] = y.useState(n || ''),
    d = typeof r < 'u',
    f = d ? r : u,
    h = y.useRef(null),
    m = y.useCallback(() => {
      const C = h.current
      if (!C) return
      let R = 'input:not(:disabled):checked'
      const E = C.querySelector(R)
      if (E) {
        E.focus()
        return
      }
      R = 'input:not(:disabled)'
      const T = C.querySelector(R)
      T == null || T.focus()
    }, []),
    S = `radio-${y.useId()}`,
    g = o || S,
    v = y.useCallback(
      C => {
        const R = D6(C) ? C.target.value : C
        d || c(R), t == null || t(String(R))
      },
      [t, d]
    ),
    b = y.useCallback((C = {}, R = null) => ({ ...C, ref: Ei(R, h), role: 'radiogroup' }), []),
    k = y.useCallback(
      (C = {}, R = null) => ({
        ...C,
        ref: R,
        name: g,
        [s ? 'checked' : 'isChecked']: f != null ? C.value === f : void 0,
        onChange(T) {
          v(T)
        },
        'data-radiogroup': !0,
      }),
      [s, g, v, f]
    )
  return {
    getRootProps: b,
    getRadioProps: k,
    name: g,
    ref: h,
    focus: m,
    setValue: c,
    value: f,
    onChange: v,
    isDisabled: i,
    isFocusable: a,
    htmlProps: l,
  }
}
var [z6, n_] = qt({ name: 'RadioGroupContext', strict: !1 }),
  o_ = H((e, t) => {
    const {
        colorScheme: r,
        size: n,
        variant: o,
        children: i,
        className: a,
        isDisabled: s,
        isFocusable: l,
        ...u
      } = e,
      { value: c, onChange: d, getRootProps: f, name: h, htmlProps: m } = N6(u),
      p = y.useMemo(
        () => ({
          name: h,
          size: n,
          onChange: d,
          colorScheme: r,
          value: c,
          variant: o,
          isDisabled: s,
          isFocusable: l,
        }),
        [h, n, d, r, c, o, s, l]
      )
    return x.jsx(z6, {
      value: p,
      children: x.jsx(D.div, { ...f(m, t), className: q('chakra-radio-group', a), children: i }),
    })
  })
o_.displayName = 'RadioGroup'
var L6 = {
  border: '0',
  clip: 'rect(0, 0, 0, 0)',
  height: '1px',
  width: '1px',
  margin: '-1px',
  padding: '0',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  position: 'absolute',
}
function B6(e = {}) {
  const {
      defaultChecked: t,
      isChecked: r,
      isFocusable: n,
      isDisabled: o,
      isReadOnly: i,
      isRequired: a,
      onChange: s,
      isInvalid: l,
      name: u,
      value: c,
      id: d,
      'data-radiogroup': f,
      'aria-describedby': h,
      ...m
    } = e,
    p = `radio-${y.useId()}`,
    S = $s(),
    v = !!n_() || !!f
  let k = !!S && !v ? S.id : p
  k = d ?? k
  const C = o ?? (S == null ? void 0 : S.isDisabled),
    R = i ?? (S == null ? void 0 : S.isReadOnly),
    E = a ?? (S == null ? void 0 : S.isRequired),
    T = l ?? (S == null ? void 0 : S.isInvalid),
    [M, j] = y.useState(!1),
    [W, he] = y.useState(!1),
    [ye, J] = y.useState(!1),
    [se, Ce] = y.useState(!1),
    [et, O] = y.useState(!!t),
    L = typeof r < 'u',
    N = L ? r : et
  y.useEffect(() => xL(j), [])
  const V = y.useCallback(
      ee => {
        if (R || C) {
          ee.preventDefault()
          return
        }
        L || O(ee.target.checked), s == null || s(ee)
      },
      [L, C, R, s]
    ),
    oe = y.useCallback(
      ee => {
        ee.key === ' ' && Ce(!0)
      },
      [Ce]
    ),
    U = y.useCallback(
      ee => {
        ee.key === ' ' && Ce(!1)
      },
      [Ce]
    ),
    $e = y.useCallback(
      (ee = {}, ur = null) => ({
        ...ee,
        ref: ur,
        'data-active': _e(se),
        'data-hover': _e(ye),
        'data-disabled': _e(C),
        'data-invalid': _e(T),
        'data-checked': _e(N),
        'data-focus': _e(W),
        'data-focus-visible': _e(W && M),
        'data-readonly': _e(R),
        'aria-hidden': !0,
        onMouseDown: Ne(ee.onMouseDown, () => Ce(!0)),
        onMouseUp: Ne(ee.onMouseUp, () => Ce(!1)),
        onMouseEnter: Ne(ee.onMouseEnter, () => J(!0)),
        onMouseLeave: Ne(ee.onMouseLeave, () => J(!1)),
      }),
      [se, ye, C, T, N, W, R, M]
    ),
    { onFocus: _t, onBlur: Oe } = S ?? {},
    je = y.useCallback(
      (ee = {}, ur = null) => {
        const Ds = C && !n
        return {
          ...ee,
          id: k,
          ref: ur,
          type: 'radio',
          name: u,
          value: c,
          onChange: Ne(ee.onChange, V),
          onBlur: Ne(Oe, ee.onBlur, () => he(!1)),
          onFocus: Ne(_t, ee.onFocus, () => he(!0)),
          onKeyDown: Ne(ee.onKeyDown, oe),
          onKeyUp: Ne(ee.onKeyUp, U),
          checked: N,
          disabled: Ds,
          readOnly: R,
          required: E,
          'aria-invalid': oi(T),
          'aria-disabled': oi(Ds),
          'aria-required': oi(E),
          'data-readonly': _e(R),
          'aria-describedby': h,
          style: L6,
        }
      },
      [C, n, k, u, c, V, Oe, _t, oe, U, N, R, E, T, h]
    )
  return {
    state: {
      isInvalid: T,
      isFocused: W,
      isChecked: N,
      isActive: se,
      isHovered: ye,
      isDisabled: C,
      isReadOnly: R,
      isRequired: E,
    },
    getCheckboxProps: $e,
    getInputProps: je,
    getLabelProps: (ee = {}, ur = null) => ({
      ...ee,
      ref: ur,
      onMouseDown: Ne(ee.onMouseDown, W1),
      onTouchStart: Ne(ee.onTouchStart, W1),
      'data-disabled': _e(C),
      'data-checked': _e(N),
      'data-invalid': _e(T),
    }),
    getRootProps: (ee, ur = null) => ({
      ...ee,
      ref: ur,
      'data-disabled': _e(C),
      'data-checked': _e(N),
      'data-invalid': _e(T),
    }),
    htmlProps: m,
  }
}
function W1(e) {
  e.preventDefault(), e.stopPropagation()
}
function V6(e, t) {
  const r = {},
    n = {}
  for (const [o, i] of Object.entries(e)) t.includes(o) ? (r[o] = i) : (n[o] = i)
  return [r, n]
}
var yp = H((e, t) => {
  var r
  const n = n_(),
    { onChange: o, value: i } = e,
    a = In('Radio', { ...n, ...e }),
    s = Je(e),
    {
      spacing: l = '0.5rem',
      children: u,
      isDisabled: c = n == null ? void 0 : n.isDisabled,
      isFocusable: d = n == null ? void 0 : n.isFocusable,
      inputProps: f,
      ...h
    } = s
  let m = e.isChecked
  ;(n == null ? void 0 : n.value) != null && i != null && (m = n.value === i)
  let p = o
  n != null && n.onChange && i != null && (p = WA(n.onChange, o))
  const S = (r = e == null ? void 0 : e.name) != null ? r : n == null ? void 0 : n.name,
    {
      getInputProps: g,
      getCheckboxProps: v,
      getLabelProps: b,
      getRootProps: k,
      htmlProps: C,
    } = B6({ ...h, isChecked: m, isFocusable: d, isDisabled: c, onChange: p, name: S }),
    [R, E] = V6(C, Jx),
    T = v(E),
    M = g(f, t),
    j = b(),
    W = Object.assign({}, R, k()),
    he = {
      display: 'inline-flex',
      alignItems: 'center',
      verticalAlign: 'top',
      cursor: 'pointer',
      position: 'relative',
      ...a.container,
    },
    ye = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      ...a.control,
    },
    J = { userSelect: 'none', marginStart: l, ...a.label }
  return x.jsxs(D.label, {
    className: 'chakra-radio',
    ...W,
    __css: he,
    children: [
      x.jsx('input', { className: 'chakra-radio__input', ...M }),
      x.jsx(D.span, { className: 'chakra-radio__control', ...T, __css: ye }),
      u && x.jsx(D.span, { className: 'chakra-radio__label', ...j, __css: J, children: u }),
    ],
  })
})
yp.displayName = 'Radio'
var i_ = H(function (t, r) {
  const { children: n, placeholder: o, className: i, ...a } = t
  return x.jsxs(D.select, {
    ...a,
    ref: r,
    className: q('chakra-select', i),
    children: [o && x.jsx('option', { value: '', children: o }), n],
  })
})
i_.displayName = 'SelectField'
function W6(e, t) {
  const r = {},
    n = {}
  for (const [o, i] of Object.entries(e)) t.includes(o) ? (r[o] = i) : (n[o] = i)
  return [r, n]
}
var Gu = H((e, t) => {
  var r
  const n = In('Select', e),
    {
      rootProps: o,
      placeholder: i,
      icon: a,
      color: s,
      height: l,
      h: u,
      minH: c,
      minHeight: d,
      iconColor: f,
      iconSize: h,
      ...m
    } = Je(e),
    [p, S] = W6(m, Jx),
    g = vv(S),
    v = { width: '100%', height: 'fit-content', position: 'relative', color: s },
    b = {
      paddingEnd: '2rem',
      ...n.field,
      _focus: { zIndex: 'unset', ...((r = n.field) == null ? void 0 : r._focus) },
    }
  return x.jsxs(D.div, {
    className: 'chakra-select__wrapper',
    __css: v,
    ...p,
    ...o,
    children: [
      x.jsx(i_, {
        ref: t,
        height: u ?? l,
        minH: c ?? d,
        placeholder: i,
        ...g,
        __css: b,
        children: e.children,
      }),
      x.jsx(a_, {
        'data-disabled': _e(g.disabled),
        ...((f || s) && { color: f || s }),
        __css: n.icon,
        ...(h && { fontSize: h }),
        children: a,
      }),
    ],
  })
})
Gu.displayName = 'Select'
var U6 = e =>
    x.jsx('svg', {
      viewBox: '0 0 24 24',
      ...e,
      children: x.jsx('path', {
        fill: 'currentColor',
        d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z',
      }),
    }),
  H6 = D('div', {
    baseStyle: {
      position: 'absolute',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      top: '50%',
      transform: 'translateY(-50%)',
    },
  }),
  a_ = e => {
    const { children: t = x.jsx(U6, {}), ...r } = e,
      n = y.cloneElement(t, {
        role: 'presentation',
        className: 'chakra-select__icon',
        focusable: !1,
        'aria-hidden': !0,
        style: { width: '1em', height: '1em', color: 'currentColor' },
      })
    return x.jsx(H6, {
      ...r,
      className: 'chakra-select__icon-wrapper',
      children: y.isValidElement(t) ? n : null,
    })
  }
a_.displayName = 'SelectIcon'
function G6() {
  const e = y.useRef(!0)
  return (
    y.useEffect(() => {
      e.current = !1
    }, []),
    e.current
  )
}
function K6(e) {
  const t = y.useRef()
  return (
    y.useEffect(() => {
      t.current = e
    }, [e]),
    t.current
  )
}
var q6 = D('div', {
    baseStyle: {
      boxShadow: 'none',
      backgroundClip: 'padding-box',
      cursor: 'default',
      color: 'transparent',
      pointerEvents: 'none',
      userSelect: 'none',
      '&::before, &::after, *': { visibility: 'hidden' },
    },
  }),
  bp = X('skeleton-start-color'),
  Sp = X('skeleton-end-color'),
  Y6 = jm({ from: { opacity: 0 }, to: { opacity: 1 } }),
  X6 = jm({
    from: { borderColor: bp.reference, background: bp.reference },
    to: { borderColor: Sp.reference, background: Sp.reference },
  }),
  Xl = H((e, t) => {
    const r = {
        ...e,
        fadeDuration: typeof e.fadeDuration == 'number' ? e.fadeDuration : 0.4,
        speed: typeof e.speed == 'number' ? e.speed : 0.8,
      },
      n = sr('Skeleton', r),
      o = G6(),
      {
        startColor: i = '',
        endColor: a = '',
        isLoaded: s,
        fadeDuration: l,
        speed: u,
        className: c,
        fitContent: d,
        ...f
      } = Je(r),
      [h, m] = LA('colors', [i, a]),
      p = K6(s),
      S = q('chakra-skeleton', c),
      g = { ...(h && { [bp.variable]: h }), ...(m && { [Sp.variable]: m }) }
    if (s) {
      const v = o || p ? 'none' : `${Y6} ${l}s`
      return x.jsx(D.div, { ref: t, className: S, __css: { animation: v }, ...f })
    }
    return x.jsx(q6, {
      ref: t,
      className: S,
      ...f,
      __css: {
        width: d ? 'fit-content' : void 0,
        ...n,
        ...g,
        _dark: { ...n._dark, ...g },
        animation: `${u}s linear infinite alternate ${X6}`,
      },
    })
  })
Xl.displayName = 'Skeleton'
function Q6(e, t = []) {
  const r = Object.assign({}, e)
  for (const n of t) n in r && delete r[n]
  return r
}
var Z6 = ['h', 'minH', 'height', 'minHeight'],
  s_ = H((e, t) => {
    const r = sr('Textarea', e),
      { className: n, rows: o, ...i } = Je(e),
      a = vv(i),
      s = o ? Q6(r, Z6) : r
    return x.jsx(D.textarea, {
      ref: t,
      rows: o,
      ...a,
      className: q('chakra-textarea', n),
      __css: s,
    })
  })
s_.displayName = 'Textarea'
var xp = {},
  J6 = {
    get exports() {
      return xp
    },
    set exports(e) {
      xp = e
    },
  },
  l_ = {}
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ri = y
function eV(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var tV = typeof Object.is == 'function' ? Object.is : eV,
  rV = Ri.useState,
  nV = Ri.useEffect,
  oV = Ri.useLayoutEffect,
  iV = Ri.useDebugValue
function aV(e, t) {
  var r = t(),
    n = rV({ inst: { value: r, getSnapshot: t } }),
    o = n[0].inst,
    i = n[1]
  return (
    oV(
      function () {
        ;(o.value = r), (o.getSnapshot = t), _f(o) && i({ inst: o })
      },
      [e, r, t]
    ),
    nV(
      function () {
        return (
          _f(o) && i({ inst: o }),
          e(function () {
            _f(o) && i({ inst: o })
          })
        )
      },
      [e]
    ),
    iV(r),
    r
  )
}
function _f(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var r = t()
    return !tV(e, r)
  } catch {
    return !0
  }
}
function sV(e, t) {
  return t()
}
var lV =
  typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'
    ? sV
    : aV
l_.useSyncExternalStore = Ri.useSyncExternalStore !== void 0 ? Ri.useSyncExternalStore : lV
;(function (e) {
  e.exports = l_
})(J6)
var wp = {},
  uV = {
    get exports() {
      return wp
    },
    set exports(e) {
      wp = e
    },
  },
  u_ = {}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hc = y,
  cV = xp
function dV(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var fV = typeof Object.is == 'function' ? Object.is : dV,
  hV = cV.useSyncExternalStore,
  pV = Hc.useRef,
  mV = Hc.useEffect,
  vV = Hc.useMemo,
  gV = Hc.useDebugValue
u_.useSyncExternalStoreWithSelector = function (e, t, r, n, o) {
  var i = pV(null)
  if (i.current === null) {
    var a = { hasValue: !1, value: null }
    i.current = a
  } else a = i.current
  i = vV(
    function () {
      function l(h) {
        if (!u) {
          if (((u = !0), (c = h), (h = n(h)), o !== void 0 && a.hasValue)) {
            var m = a.value
            if (o(m, h)) return (d = m)
          }
          return (d = h)
        }
        if (((m = d), fV(c, h))) return m
        var p = n(h)
        return o !== void 0 && o(m, p) ? m : ((c = h), (d = p))
      }
      var u = !1,
        c,
        d,
        f = r === void 0 ? null : r
      return [
        function () {
          return l(t())
        },
        f === null
          ? void 0
          : function () {
              return l(f())
            },
      ]
    },
    [t, r, n, o]
  )
  var s = hV(e, i[0], i[1])
  return (
    mV(
      function () {
        ;(a.hasValue = !0), (a.value = s)
      },
      [s]
    ),
    gV(s),
    s
  )
}
;(function (e) {
  e.exports = u_
})(uV)
function yV(e) {
  e()
}
let c_ = yV
const bV = e => (c_ = e),
  SV = () => c_,
  An = y.createContext(null)
function d_() {
  return y.useContext(An)
}
const xV = () => {
  throw new Error('uSES not initialized!')
}
let f_ = xV
const wV = e => {
    f_ = e
  },
  kV = (e, t) => e === t
function CV(e = An) {
  const t = e === An ? d_ : () => y.useContext(e)
  return function (n, o = kV) {
    const { store: i, subscription: a, getServerState: s } = t(),
      l = f_(a.addNestedSub, i.getState, s || i.getState, n, o)
    return y.useDebugValue(l), l
  }
}
const _V = CV()
var U1 = {},
  PV = {
    get exports() {
      return U1
    },
    set exports(e) {
      U1 = e
    },
  },
  ce = {}
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Av = Symbol.for('react.element'),
  Rv = Symbol.for('react.portal'),
  Gc = Symbol.for('react.fragment'),
  Kc = Symbol.for('react.strict_mode'),
  qc = Symbol.for('react.profiler'),
  Yc = Symbol.for('react.provider'),
  Xc = Symbol.for('react.context'),
  EV = Symbol.for('react.server_context'),
  Qc = Symbol.for('react.forward_ref'),
  Zc = Symbol.for('react.suspense'),
  Jc = Symbol.for('react.suspense_list'),
  ed = Symbol.for('react.memo'),
  td = Symbol.for('react.lazy'),
  TV = Symbol.for('react.offscreen'),
  h_
h_ = Symbol.for('react.module.reference')
function Yt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case Av:
        switch (((e = e.type), e)) {
          case Gc:
          case qc:
          case Kc:
          case Zc:
          case Jc:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case EV:
              case Xc:
              case Qc:
              case td:
              case ed:
              case Yc:
                return e
              default:
                return t
            }
        }
      case Rv:
        return t
    }
  }
}
ce.ContextConsumer = Xc
ce.ContextProvider = Yc
ce.Element = Av
ce.ForwardRef = Qc
ce.Fragment = Gc
ce.Lazy = td
ce.Memo = ed
ce.Portal = Rv
ce.Profiler = qc
ce.StrictMode = Kc
ce.Suspense = Zc
ce.SuspenseList = Jc
ce.isAsyncMode = function () {
  return !1
}
ce.isConcurrentMode = function () {
  return !1
}
ce.isContextConsumer = function (e) {
  return Yt(e) === Xc
}
ce.isContextProvider = function (e) {
  return Yt(e) === Yc
}
ce.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Av
}
ce.isForwardRef = function (e) {
  return Yt(e) === Qc
}
ce.isFragment = function (e) {
  return Yt(e) === Gc
}
ce.isLazy = function (e) {
  return Yt(e) === td
}
ce.isMemo = function (e) {
  return Yt(e) === ed
}
ce.isPortal = function (e) {
  return Yt(e) === Rv
}
ce.isProfiler = function (e) {
  return Yt(e) === qc
}
ce.isStrictMode = function (e) {
  return Yt(e) === Kc
}
ce.isSuspense = function (e) {
  return Yt(e) === Zc
}
ce.isSuspenseList = function (e) {
  return Yt(e) === Jc
}
ce.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Gc ||
    e === qc ||
    e === Kc ||
    e === Zc ||
    e === Jc ||
    e === TV ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === td ||
        e.$$typeof === ed ||
        e.$$typeof === Yc ||
        e.$$typeof === Xc ||
        e.$$typeof === Qc ||
        e.$$typeof === h_ ||
        e.getModuleId !== void 0))
  )
}
ce.typeOf = Yt
;(function (e) {
  e.exports = ce
})(PV)
function AV() {
  const e = SV()
  let t = null,
    r = null
  return {
    clear() {
      ;(t = null), (r = null)
    },
    notify() {
      e(() => {
        let n = t
        for (; n; ) n.callback(), (n = n.next)
      })
    },
    get() {
      let n = [],
        o = t
      for (; o; ) n.push(o), (o = o.next)
      return n
    },
    subscribe(n) {
      let o = !0,
        i = (r = { callback: n, next: null, prev: r })
      return (
        i.prev ? (i.prev.next = i) : (t = i),
        function () {
          !o ||
            t === null ||
            ((o = !1),
            i.next ? (i.next.prev = i.prev) : (r = i.prev),
            i.prev ? (i.prev.next = i.next) : (t = i.next))
        }
      )
    },
  }
}
const H1 = { notify() {}, get: () => [] }
function RV(e, t) {
  let r,
    n = H1
  function o(d) {
    return l(), n.subscribe(d)
  }
  function i() {
    n.notify()
  }
  function a() {
    c.onStateChange && c.onStateChange()
  }
  function s() {
    return !!r
  }
  function l() {
    r || ((r = t ? t.addNestedSub(a) : e.subscribe(a)), (n = AV()))
  }
  function u() {
    r && (r(), (r = void 0), n.clear(), (n = H1))
  }
  const c = {
    addNestedSub: o,
    notifyNestedSubs: i,
    handleChangeWrapper: a,
    isSubscribed: s,
    trySubscribe: l,
    tryUnsubscribe: u,
    getListeners: () => n,
  }
  return c
}
const $V =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  jV = $V ? y.useLayoutEffect : y.useEffect
function MV({ store: e, context: t, children: r, serverState: n }) {
  const o = y.useMemo(() => {
      const s = RV(e)
      return { store: e, subscription: s, getServerState: n ? () => n : void 0 }
    }, [e, n]),
    i = y.useMemo(() => e.getState(), [e])
  jV(() => {
    const { subscription: s } = o
    return (
      (s.onStateChange = s.notifyNestedSubs),
      s.trySubscribe(),
      i !== e.getState() && s.notifyNestedSubs(),
      () => {
        s.tryUnsubscribe(), (s.onStateChange = void 0)
      }
    )
  }, [o, i])
  const a = t || An
  return so.createElement(a.Provider, { value: o }, r)
}
function p_(e = An) {
  const t = e === An ? d_ : () => y.useContext(e)
  return function () {
    const { store: n } = t()
    return n
  }
}
const OV = p_()
function IV(e = An) {
  const t = e === An ? OV : p_(e)
  return function () {
    return t().dispatch
  }
}
const FV = IV()
wV(wp.useSyncExternalStoreWithSelector)
bV(vi.unstable_batchedUpdates)
/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function hs() {
  return (
    (hs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    hs.apply(this, arguments)
  )
}
var dn
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(dn || (dn = {}))
const G1 = 'popstate'
function DV(e) {
  e === void 0 && (e = {})
  function t(n, o) {
    let { pathname: i, search: a, hash: s } = n.location
    return kp(
      '',
      { pathname: i, search: a, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    )
  }
  function r(n, o) {
    return typeof o == 'string' ? o : m_(o)
  }
  return zV(t, r, null, e)
}
function Be(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function $v(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t)
    try {
      throw new Error(t)
    } catch {}
  }
}
function NV() {
  return Math.random().toString(36).substr(2, 8)
}
function K1(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function kp(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    hs(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Di(t) : t,
      { state: r, key: (t && t.key) || n || NV() }
    )
  )
}
function m_(e) {
  let { pathname: t = '/', search: r = '', hash: n = '' } = e
  return (
    r && r !== '?' && (t += r.charAt(0) === '?' ? r : '?' + r),
    n && n !== '#' && (t += n.charAt(0) === '#' ? n : '#' + n),
    t
  )
}
function Di(e) {
  let t = {}
  if (e) {
    let r = e.indexOf('#')
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)))
    let n = e.indexOf('?')
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))), e && (t.pathname = e)
  }
  return t
}
function zV(e, t, r, n) {
  n === void 0 && (n = {})
  let { window: o = document.defaultView, v5Compat: i = !1 } = n,
    a = o.history,
    s = dn.Pop,
    l = null,
    u = c()
  u == null && ((u = 0), a.replaceState(hs({}, a.state, { idx: u }), ''))
  function c() {
    return (a.state || { idx: null }).idx
  }
  function d() {
    s = dn.Pop
    let S = c(),
      g = S == null ? null : S - u
    ;(u = S), l && l({ action: s, location: p.location, delta: g })
  }
  function f(S, g) {
    s = dn.Push
    let v = kp(p.location, S, g)
    r && r(v, S), (u = c() + 1)
    let b = K1(v, u),
      k = p.createHref(v)
    try {
      a.pushState(b, '', k)
    } catch {
      o.location.assign(k)
    }
    i && l && l({ action: s, location: p.location, delta: 1 })
  }
  function h(S, g) {
    s = dn.Replace
    let v = kp(p.location, S, g)
    r && r(v, S), (u = c())
    let b = K1(v, u),
      k = p.createHref(v)
    a.replaceState(b, '', k), i && l && l({ action: s, location: p.location, delta: 0 })
  }
  function m(S) {
    let g = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      v = typeof S == 'string' ? S : m_(S)
    return (
      Be(g, 'No window.location.(origin|href) available to create URL for href: ' + v),
      new URL(v, g)
    )
  }
  let p = {
    get action() {
      return s
    },
    get location() {
      return e(o, a)
    },
    listen(S) {
      if (l) throw new Error('A history only accepts one active listener')
      return (
        o.addEventListener(G1, d),
        (l = S),
        () => {
          o.removeEventListener(G1, d), (l = null)
        }
      )
    },
    createHref(S) {
      return t(o, S)
    },
    createURL: m,
    encodeLocation(S) {
      let g = m(S)
      return { pathname: g.pathname, search: g.search, hash: g.hash }
    },
    push: f,
    replace: h,
    go(S) {
      return a.go(S)
    },
  }
  return p
}
var q1
;(function (e) {
  ;(e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error')
})(q1 || (q1 = {}))
function LV(e, t, r) {
  r === void 0 && (r = '/')
  let n = typeof t == 'string' ? Di(t) : t,
    o = y_(n.pathname || '/', r)
  if (o == null) return null
  let i = v_(e)
  BV(i)
  let a = null
  for (let s = 0; a == null && s < i.length; ++s) a = XV(i[s], JV(o))
  return a
}
function v_(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = '')
  let o = (i, a, s) => {
    let l = {
      relativePath: s === void 0 ? i.path || '' : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    }
    l.relativePath.startsWith('/') &&
      (Be(
        l.relativePath.startsWith(n),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (l.relativePath = l.relativePath.slice(n.length)))
    let u = ao([n, l.relativePath]),
      c = r.concat(l)
    i.children &&
      i.children.length > 0 &&
      (Be(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".')
      ),
      v_(i.children, t, c, u)),
      !(i.path == null && !i.index) && t.push({ path: u, score: qV(u, i.index), routesMeta: c })
  }
  return (
    e.forEach((i, a) => {
      var s
      if (i.path === '' || !((s = i.path) != null && s.includes('?'))) o(i, a)
      else for (let l of g_(i.path)) o(i, a, l)
    }),
    t
  )
}
function g_(e) {
  let t = e.split('/')
  if (t.length === 0) return []
  let [r, ...n] = t,
    o = r.endsWith('?'),
    i = r.replace(/\?$/, '')
  if (n.length === 0) return o ? [i, ''] : [i]
  let a = g_(n.join('/')),
    s = []
  return (
    s.push(...a.map(l => (l === '' ? i : [i, l].join('/')))),
    o && s.push(...a),
    s.map(l => (e.startsWith('/') && l === '' ? '/' : l))
  )
}
function BV(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : YV(
          t.routesMeta.map(n => n.childrenIndex),
          r.routesMeta.map(n => n.childrenIndex)
        )
  )
}
const VV = /^:\w+$/,
  WV = 3,
  UV = 2,
  HV = 1,
  GV = 10,
  KV = -2,
  Y1 = e => e === '*'
function qV(e, t) {
  let r = e.split('/'),
    n = r.length
  return (
    r.some(Y1) && (n += KV),
    t && (n += UV),
    r.filter(o => !Y1(o)).reduce((o, i) => o + (VV.test(i) ? WV : i === '' ? HV : GV), n)
  )
}
function YV(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, o) => n === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0
}
function XV(e, t) {
  let { routesMeta: r } = e,
    n = {},
    o = '/',
    i = []
  for (let a = 0; a < r.length; ++a) {
    let s = r[a],
      l = a === r.length - 1,
      u = o === '/' ? t : t.slice(o.length) || '/',
      c = QV({ path: s.relativePath, caseSensitive: s.caseSensitive, end: l }, u)
    if (!c) return null
    Object.assign(n, c.params)
    let d = s.route
    i.push({
      params: n,
      pathname: ao([o, c.pathname]),
      pathnameBase: i8(ao([o, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== '/' && (o = ao([o, c.pathnameBase]))
  }
  return i
}
function QV(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
  let [r, n] = ZV(e.path, e.caseSensitive, e.end),
    o = t.match(r)
  if (!o) return null
  let i = o[0],
    a = i.replace(/(.)\/+$/, '$1'),
    s = o.slice(1)
  return {
    params: n.reduce((u, c, d) => {
      if (c === '*') {
        let f = s[d] || ''
        a = i.slice(0, i.length - f.length).replace(/(.)\/+$/, '$1')
      }
      return (u[c] = e8(s[d] || '', c)), u
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  }
}
function ZV(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    $v(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    )
  let n = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (a, s) => (n.push(s), '/([^\\/]+)'))
  return (
    e.endsWith('*')
      ? (n.push('*'), (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : r
      ? (o += '\\/*$')
      : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), n]
  )
}
function JV(e) {
  try {
    return decodeURI(e)
  } catch (t) {
    return (
      $v(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    )
  }
}
function e8(e, t) {
  try {
    return decodeURIComponent(e)
  } catch (r) {
    return (
      $v(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' + e + '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + r + ').')
      ),
      e
    )
  }
}
function y_(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let r = t.endsWith('/') ? t.length - 1 : t.length,
    n = e.charAt(r)
  return n && n !== '/' ? null : e.slice(r) || '/'
}
function t8(e, t) {
  t === void 0 && (t = '/')
  let { pathname: r, search: n = '', hash: o = '' } = typeof e == 'string' ? Di(e) : e
  return { pathname: r ? (r.startsWith('/') ? r : r8(r, t)) : t, search: a8(n), hash: s8(o) }
}
function r8(e, t) {
  let r = t.replace(/\/+$/, '').split('/')
  return (
    e.split('/').forEach(o => {
      o === '..' ? r.length > 1 && r.pop() : o !== '.' && r.push(o)
    }),
    r.length > 1 ? r.join('/') : '/'
  )
}
function Pf(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t + '` field [' + JSON.stringify(n) + '].  Please separate it out to the ') +
    ('`to.' + r + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  )
}
function n8(e) {
  return e.filter((t, r) => r === 0 || (t.route.path && t.route.path.length > 0))
}
function o8(e, t, r, n) {
  n === void 0 && (n = !1)
  let o
  typeof e == 'string'
    ? (o = Di(e))
    : ((o = hs({}, e)),
      Be(!o.pathname || !o.pathname.includes('?'), Pf('?', 'pathname', 'search', o)),
      Be(!o.pathname || !o.pathname.includes('#'), Pf('#', 'pathname', 'hash', o)),
      Be(!o.search || !o.search.includes('#'), Pf('#', 'search', 'hash', o)))
  let i = e === '' || o.pathname === '',
    a = i ? '/' : o.pathname,
    s
  if (n || a == null) s = r
  else {
    let d = t.length - 1
    if (a.startsWith('..')) {
      let f = a.split('/')
      for (; f[0] === '..'; ) f.shift(), (d -= 1)
      o.pathname = f.join('/')
    }
    s = d >= 0 ? t[d] : '/'
  }
  let l = t8(o, s),
    u = a && a !== '/' && a.endsWith('/'),
    c = (i || a === '.') && r.endsWith('/')
  return !l.pathname.endsWith('/') && (u || c) && (l.pathname += '/'), l
}
const ao = e => e.join('/').replace(/\/\/+/g, '/'),
  i8 = e => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  a8 = e => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  s8 = e => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
function l8(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  )
}
/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function u8(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
const c8 = typeof Object.is == 'function' ? Object.is : u8,
  { useState: d8, useEffect: f8, useLayoutEffect: h8, useDebugValue: p8 } = Ma
function m8(e, t, r) {
  const n = t(),
    [{ inst: o }, i] = d8({ inst: { value: n, getSnapshot: t } })
  return (
    h8(() => {
      ;(o.value = n), (o.getSnapshot = t), Ef(o) && i({ inst: o })
    }, [e, n, t]),
    f8(
      () => (
        Ef(o) && i({ inst: o }),
        e(() => {
          Ef(o) && i({ inst: o })
        })
      ),
      [e]
    ),
    p8(n),
    n
  )
}
function Ef(e) {
  const t = e.getSnapshot,
    r = e.value
  try {
    const n = t()
    return !c8(r, n)
  } catch {
    return !0
  }
}
function v8(e, t, r) {
  return t()
}
const g8 =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  y8 = !g8,
  b8 = y8 ? v8 : m8
'useSyncExternalStore' in Ma && (e => e.useSyncExternalStore)(Ma)
const b_ = y.createContext(null),
  jv = y.createContext(null),
  Mv = y.createContext(null),
  rd = y.createContext(null),
  Ni = y.createContext({ outlet: null, matches: [] }),
  S_ = y.createContext(null)
function Cp() {
  return (
    (Cp = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Cp.apply(this, arguments)
  )
}
function Ms() {
  return y.useContext(rd) != null
}
function x_() {
  return Ms() || Be(!1), y.useContext(rd).location
}
function S8() {
  Ms() || Be(!1)
  let { basename: e, navigator: t } = y.useContext(Mv),
    { matches: r } = y.useContext(Ni),
    { pathname: n } = x_(),
    o = JSON.stringify(n8(r).map(s => s.pathnameBase)),
    i = y.useRef(!1)
  return (
    y.useEffect(() => {
      i.current = !0
    }),
    y.useCallback(
      function (s, l) {
        if ((l === void 0 && (l = {}), !i.current)) return
        if (typeof s == 'number') {
          t.go(s)
          return
        }
        let u = o8(s, JSON.parse(o), n, l.relative === 'path')
        e !== '/' && (u.pathname = u.pathname === '/' ? e : ao([e, u.pathname])),
          (l.replace ? t.replace : t.push)(u, l.state, l)
      },
      [e, t, o, n]
    )
  )
}
const x8 = y.createContext(null)
function w8(e) {
  let t = y.useContext(Ni).outlet
  return t && y.createElement(x8.Provider, { value: e }, t)
}
function k8(e, t) {
  Ms() || Be(!1)
  let { navigator: r } = y.useContext(Mv),
    n = y.useContext(jv),
    { matches: o } = y.useContext(Ni),
    i = o[o.length - 1],
    a = i ? i.params : {}
  i && i.pathname
  let s = i ? i.pathnameBase : '/'
  i && i.route
  let l = x_(),
    u
  if (t) {
    var c
    let p = typeof t == 'string' ? Di(t) : t
    s === '/' || ((c = p.pathname) != null && c.startsWith(s)) || Be(!1), (u = p)
  } else u = l
  let d = u.pathname || '/',
    f = s === '/' ? d : d.slice(s.length) || '/',
    h = LV(e, { pathname: f }),
    m = E8(
      h &&
        h.map(p =>
          Object.assign({}, p, {
            params: Object.assign({}, a, p.params),
            pathname: ao([
              s,
              r.encodeLocation ? r.encodeLocation(p.pathname).pathname : p.pathname,
            ]),
            pathnameBase:
              p.pathnameBase === '/'
                ? s
                : ao([
                    s,
                    r.encodeLocation ? r.encodeLocation(p.pathnameBase).pathname : p.pathnameBase,
                  ]),
          })
        ),
      o,
      n || void 0
    )
  return t && m
    ? y.createElement(
        rd.Provider,
        {
          value: {
            location: Cp({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, u),
            navigationType: dn.Pop,
          },
        },
        m
      )
    : m
}
function C8() {
  let e = $8(),
    t = l8(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    i = null
  return y.createElement(
    y.Fragment,
    null,
    y.createElement('h2', null, 'Unexpected Application Error!'),
    y.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    r ? y.createElement('pre', { style: o }, r) : null,
    i
  )
}
class _8 extends y.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error })
  }
  static getDerivedStateFromError(t) {
    return { error: t }
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || r.error, location: r.location }
  }
  componentDidCatch(t, r) {
    console.error('React Router caught the following error during render', t, r)
  }
  render() {
    return this.state.error
      ? y.createElement(
          Ni.Provider,
          { value: this.props.routeContext },
          y.createElement(S_.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children
  }
}
function P8(e) {
  let { routeContext: t, match: r, children: n } = e,
    o = y.useContext(b_)
  return (
    o &&
      o.static &&
      o.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    y.createElement(Ni.Provider, { value: t }, n)
  )
}
function E8(e, t, r) {
  if ((t === void 0 && (t = []), e == null))
    if (r != null && r.errors) e = r.matches
    else return null
  let n = e,
    o = r == null ? void 0 : r.errors
  if (o != null) {
    let i = n.findIndex(a => a.route.id && (o == null ? void 0 : o[a.route.id]))
    i >= 0 || Be(!1), (n = n.slice(0, Math.min(n.length, i + 1)))
  }
  return n.reduceRight((i, a, s) => {
    let l = a.route.id ? (o == null ? void 0 : o[a.route.id]) : null,
      u = null
    r &&
      (a.route.ErrorBoundary
        ? (u = y.createElement(a.route.ErrorBoundary, null))
        : a.route.errorElement
        ? (u = a.route.errorElement)
        : (u = y.createElement(C8, null)))
    let c = t.concat(n.slice(0, s + 1)),
      d = () => {
        let f = i
        return (
          l
            ? (f = u)
            : a.route.Component
            ? (f = y.createElement(a.route.Component, null))
            : a.route.element && (f = a.route.element),
          y.createElement(P8, { match: a, routeContext: { outlet: i, matches: c }, children: f })
        )
      }
    return r && (a.route.ErrorBoundary || a.route.errorElement || s === 0)
      ? y.createElement(_8, {
          location: r.location,
          component: u,
          error: l,
          children: d(),
          routeContext: { outlet: null, matches: c },
        })
      : d()
  }, null)
}
var X1
;(function (e) {
  ;(e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator')
})(X1 || (X1 = {}))
var Ku
;(function (e) {
  ;(e.UseBlocker = 'useBlocker'),
    (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator')
})(Ku || (Ku = {}))
function T8(e) {
  let t = y.useContext(jv)
  return t || Be(!1), t
}
function A8(e) {
  let t = y.useContext(Ni)
  return t || Be(!1), t
}
function R8(e) {
  let t = A8(),
    r = t.matches[t.matches.length - 1]
  return r.route.id || Be(!1), r.route.id
}
function $8() {
  var e
  let t = y.useContext(S_),
    r = T8(Ku.UseRouteError),
    n = R8(Ku.UseRouteError)
  return t || ((e = r.errors) == null ? void 0 : e[n])
}
function w_(e) {
  let { to: t, replace: r, state: n, relative: o } = e
  Ms() || Be(!1)
  let i = y.useContext(jv),
    a = S8()
  return (
    y.useEffect(() => {
      ;(i && i.navigation.state !== 'idle') || a(t, { replace: r, state: n, relative: o })
    }),
    null
  )
}
function k_(e) {
  return w8(e.context)
}
function Oo(e) {
  Be(!1)
}
function j8(e) {
  let {
    basename: t = '/',
    children: r = null,
    location: n,
    navigationType: o = dn.Pop,
    navigator: i,
    static: a = !1,
  } = e
  Ms() && Be(!1)
  let s = t.replace(/^\/*/, '/'),
    l = y.useMemo(() => ({ basename: s, navigator: i, static: a }), [s, i, a])
  typeof n == 'string' && (n = Di(n))
  let { pathname: u = '/', search: c = '', hash: d = '', state: f = null, key: h = 'default' } = n,
    m = y.useMemo(() => {
      let p = y_(u, s)
      return p == null
        ? null
        : { location: { pathname: p, search: c, hash: d, state: f, key: h }, navigationType: o }
    }, [s, u, c, d, f, h, o])
  return m == null
    ? null
    : y.createElement(
        Mv.Provider,
        { value: l },
        y.createElement(rd.Provider, { children: r, value: m })
      )
}
function M8(e) {
  let { children: t, location: r } = e,
    n = y.useContext(b_),
    o = n && !t ? n.router.routes : _p(t)
  return k8(o, r)
}
var Q1
;(function (e) {
  ;(e[(e.pending = 0)] = 'pending'), (e[(e.success = 1)] = 'success'), (e[(e.error = 2)] = 'error')
})(Q1 || (Q1 = {}))
new Promise(() => {})
function _p(e, t) {
  t === void 0 && (t = [])
  let r = []
  return (
    y.Children.forEach(e, (n, o) => {
      if (!y.isValidElement(n)) return
      if (n.type === y.Fragment) {
        r.push.apply(r, _p(n.props.children, t))
        return
      }
      n.type !== Oo && Be(!1), !n.props.index || !n.props.children || Be(!1)
      let i = [...t, o],
        a = {
          id: n.props.id || i.join('-'),
          caseSensitive: n.props.caseSensitive,
          element: n.props.element,
          Component: n.props.Component,
          index: n.props.index,
          path: n.props.path,
          loader: n.props.loader,
          action: n.props.action,
          errorElement: n.props.errorElement,
          ErrorBoundary: n.props.ErrorBoundary,
          hasErrorBoundary: n.props.ErrorBoundary != null || n.props.errorElement != null,
          shouldRevalidate: n.props.shouldRevalidate,
          handle: n.props.handle,
          lazy: n.props.lazy,
        }
      n.props.children && (a.children = _p(n.props.children, i)), r.push(a)
    }),
    r
  )
}
/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function O8(e) {
  let { basename: t, children: r, window: n } = e,
    o = y.useRef()
  o.current == null && (o.current = DV({ window: n, v5Compat: !0 }))
  let i = o.current,
    [a, s] = y.useState({ action: i.action, location: i.location })
  return (
    y.useLayoutEffect(() => i.listen(s), [i]),
    y.createElement(j8, {
      basename: t,
      children: r,
      location: a.location,
      navigationType: a.action,
      navigator: i,
    })
  )
}
var Z1
;(function (e) {
  ;(e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmitImpl = 'useSubmitImpl'),
    (e.UseFetcher = 'useFetcher')
})(Z1 || (Z1 = {}))
var J1
;(function (e) {
  ;(e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration')
})(J1 || (J1 = {}))
const I8 =
    'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAGNbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAsaWxvYwAAAABEAAACAAEAAAABAAAFfAAAAM8AAgAAAAEAAAG1AAADxwAAAEJpaW5mAAAAAAACAAAAGmluZmUCAAAAAAEAAGF2MDFDb2xvcgAAAAAaaW5mZQIAAAAAAgAAYXYwMUFscGhhAAAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAAw2lwcnAAAACdaXBjbwAAABRpc3BlAAAAAAAAAJEAAAAeAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQBBYYHAAAEnm1kYXQSAAoGGB0kOsKgMroHFCAWWKDxOYA97HApg+5pe2e8Um+4GZY4sekd9fV5Mf+wTBnV1dFmSR9oshdEOvAESyE1uJy0lkKFOSmqoDH5+Wbi5KS+7l+SFeuQDK4RLHmEJYwffk0A7e1Ykt1siR39fB/rWA60qcz3GzzER8R4HSPTlcEAODvrK9VqyeJjvhSotjnpWkk/ZNy+Cg0Iv/ptYr2be0ArnveE/C4HMUny74z05rZXjPVt+k+oJuRI2iByI+2E6pEi3UlHp94czcj1yY57sYsTDpkoLlbuPkQ0EGqxZC30NuqzAZ+bfTfJ/t10/cg2tcGNCd34GQw9HRPa73sZaNHRA3mK6WM/zQU41rJ3EJ82ZPg8Cf5NDqZMxY4j2q+Qbnq4JDSQHNbz0OtpqozjSbUYrX4ZwnO0yWcrUoCRoIhZrlACi4C+Ww+5+xWNtngYwL7D67VGR07XQqIhDSzMI/e2rtQrbXv+/Dwv3vLup76sFNOMUPHF9/Hl/2uptglpHZBgJs1oB3Z6+srgxNhwWTAlZXcGYlbIEpic5O0iCaaERdt0F3NJjSjtXOj7F0ZASfaSFMJadbDgYf5m8Pj90q8lAAAZwfDWsfDVjQmmhVx0X/kMXq8yoi26JC36MUP3449WT/6TJFapQWwgf7yEXxMe/TIsA3aOgqiKJICHX47AkUQKLChVo7nX5HZ1ftIGmsyg7MB+ySAnX8A2sAoS4HPvvF/lo1Ojkp3v+aQBCOMvZVGR6YUvEiCd260Dlw5n+MonWadTo7Xj4KPptAgXRcwY87rCWTqTdXeOD1JItg8CiUI0dMKeGOd4n/GeEwPQQT6ZGRNq+UK6OuZPslZitfC8ZIkW9HWf2Ze/+ZW75i8q7wf+jH/r2TxeegFciCo2ALslJQoCcC2NTkhWBflQVpi5BbSntVgeMUphBkdGPO6pGj3U6iCZ2jVKUmcD+RFL5waM1Psjh5F7qsBEUyj0x27vmA4ZvOjuD037rkj6FgKI1qPNAWTv4QUsR9ludNLRgm7YfWtb85VieumkorAg03SV74tljo7UA3GLXYktSZaGCmfzggdOt3q1vfByrJ0sN3yLjmH3oiFd+dRdNCjtWRkHsTxM0uRTEvcTT1tKiGt04SASD2yT0GibvINJ/6oIlAyDSqxUjzSMgWuWuUxEaVWbi50tKpaUHhtdX13/KeDkE81tg40IxxwzqnY6PWr869l7nMVE9FC0HPgakxGsr+K79E+y8BW7PP3JOl2KoX5Rpj8NBxUP5zoKoIUXCavjrJ+adjzgEgAKCRgdJDrBAgIGhDK/ARQgBZZZYoDwitHYL0X3fV1Smsbzk6bi0tJJTagVsAaCwNGmi8w3Mq+0H+IaFG95s/RY9WfkARda1pOJNCaKmuffqAkRa4w7vzCug6He3PVEIFHuM6ndx1TSw0gq3qQzRJjriX5lYYs7TZGnnH7MSfCRktBQEK+6Gt0lWWPUdU1/28W6TvgA6XuNUMtYrBZ8niIw0YlU42ZqMku/5Fy13YHMlZjj1AQ7IZyvz/QV+7aB1h+OYDpsiJZyGWplVzk0',
  F8 = () => x.jsx(pv, { src: I8, alt: 'logo', objectFit: 'cover', my: 'auto' })
function nr(e) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n]
  throw Error(
    '[Immer] minified error nr: ' +
      e +
      (r.length
        ? ' ' +
          r
            .map(function (o) {
              return "'" + o + "'"
            })
            .join(',')
        : '') +
      '. Find the full error at: https://bit.ly/3cXEKWf'
  )
}
function Rn(e) {
  return !!e && !!e[xe]
}
function Kr(e) {
  var t
  return (
    !!e &&
    ((function (r) {
      if (!r || typeof r != 'object') return !1
      var n = Object.getPrototypeOf(r)
      if (n === null) return !0
      var o = Object.hasOwnProperty.call(n, 'constructor') && n.constructor
      return o === Object || (typeof o == 'function' && Function.toString.call(o) === H8)
    })(e) ||
      Array.isArray(e) ||
      !!e[ab] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[ab]) ||
      Ov(e) ||
      Iv(e))
  )
}
function bo(e, t, r) {
  r === void 0 && (r = !1),
    zi(e) === 0
      ? (r ? Object.keys : mi)(e).forEach(function (n) {
          ;(r && typeof n == 'symbol') || t(n, e[n], e)
        })
      : e.forEach(function (n, o) {
          return t(o, n, e)
        })
}
function zi(e) {
  var t = e[xe]
  return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : Ov(e) ? 2 : Iv(e) ? 3 : 0
}
function pi(e, t) {
  return zi(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}
function D8(e, t) {
  return zi(e) === 2 ? e.get(t) : e[t]
}
function C_(e, t, r) {
  var n = zi(e)
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : (e[t] = r)
}
function __(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t
}
function Ov(e) {
  return W8 && e instanceof Map
}
function Iv(e) {
  return U8 && e instanceof Set
}
function Hn(e) {
  return e.o || e.t
}
function Fv(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e)
  var t = E_(e)
  delete t[xe]
  for (var r = mi(t), n = 0; n < r.length; n++) {
    var o = r[n],
      i = t[o]
    i.writable === !1 && ((i.writable = !0), (i.configurable = !0)),
      (i.get || i.set) &&
        (t[o] = { configurable: !0, writable: !0, enumerable: i.enumerable, value: e[o] })
  }
  return Object.create(Object.getPrototypeOf(e), t)
}
function Dv(e, t) {
  return (
    t === void 0 && (t = !1),
    Nv(e) ||
      Rn(e) ||
      !Kr(e) ||
      (zi(e) > 1 && (e.set = e.add = e.clear = e.delete = N8),
      Object.freeze(e),
      t &&
        bo(
          e,
          function (r, n) {
            return Dv(n, !0)
          },
          !0
        )),
    e
  )
}
function N8() {
  nr(2)
}
function Nv(e) {
  return e == null || typeof e != 'object' || Object.isFrozen(e)
}
function Pr(e) {
  var t = Ap[e]
  return t || nr(18, e), t
}
function z8(e, t) {
  Ap[e] || (Ap[e] = t)
}
function Pp() {
  return ps
}
function Tf(e, t) {
  t && (Pr('Patches'), (e.u = []), (e.s = []), (e.v = t))
}
function qu(e) {
  Ep(e), e.p.forEach(L8), (e.p = null)
}
function Ep(e) {
  e === ps && (ps = e.l)
}
function eb(e) {
  return (ps = { p: [], l: ps, h: e, m: !0, _: 0 })
}
function L8(e) {
  var t = e[xe]
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0)
}
function Af(e, t) {
  t._ = t.p.length
  var r = t.p[0],
    n = e !== void 0 && e !== r
  return (
    t.h.O || Pr('ES5').S(t, e, n),
    n
      ? (r[xe].P && (qu(t), nr(4)),
        Kr(e) && ((e = Yu(t, e)), t.l || Xu(t, e)),
        t.u && Pr('Patches').M(r[xe].t, e, t.u, t.s))
      : (e = Yu(t, r, [])),
    qu(t),
    t.u && t.v(t.u, t.s),
    e !== P_ ? e : void 0
  )
}
function Yu(e, t, r) {
  if (Nv(t)) return t
  var n = t[xe]
  if (!n)
    return (
      bo(
        t,
        function (s, l) {
          return tb(e, n, t, s, l, r)
        },
        !0
      ),
      t
    )
  if (n.A !== e) return t
  if (!n.P) return Xu(e, n.t, !0), n.t
  if (!n.I) {
    ;(n.I = !0), n.A._--
    var o = n.i === 4 || n.i === 5 ? (n.o = Fv(n.k)) : n.o,
      i = o,
      a = !1
    n.i === 3 && ((i = new Set(o)), o.clear(), (a = !0)),
      bo(i, function (s, l) {
        return tb(e, n, o, s, l, r, a)
      }),
      Xu(e, o, !1),
      r && e.u && Pr('Patches').N(n, r, e.u, e.s)
  }
  return n.o
}
function tb(e, t, r, n, o, i, a) {
  if (Rn(o)) {
    var s = Yu(e, o, i && t && t.i !== 3 && !pi(t.R, n) ? i.concat(n) : void 0)
    if ((C_(r, n, s), !Rn(s))) return
    e.m = !1
  } else a && r.add(o)
  if (Kr(o) && !Nv(o)) {
    if (!e.h.D && e._ < 1) return
    Yu(e, o), (t && t.A.l) || Xu(e, o)
  }
}
function Xu(e, t, r) {
  r === void 0 && (r = !1), !e.l && e.h.D && e.m && Dv(t, r)
}
function Rf(e, t) {
  var r = e[xe]
  return (r ? Hn(r) : e)[t]
}
function rb(e, t) {
  if (t in e)
    for (var r = Object.getPrototypeOf(e); r; ) {
      var n = Object.getOwnPropertyDescriptor(r, t)
      if (n) return n
      r = Object.getPrototypeOf(r)
    }
}
function sn(e) {
  e.P || ((e.P = !0), e.l && sn(e.l))
}
function $f(e) {
  e.o || (e.o = Fv(e.t))
}
function Tp(e, t, r) {
  var n = Ov(t)
    ? Pr('MapSet').F(t, r)
    : Iv(t)
    ? Pr('MapSet').T(t, r)
    : e.O
    ? (function (o, i) {
        var a = Array.isArray(o),
          s = {
            i: a ? 1 : 0,
            A: i ? i.A : Pp(),
            P: !1,
            I: !1,
            R: {},
            l: i,
            t: o,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          l = s,
          u = ms
        a && ((l = [s]), (u = da))
        var c = Proxy.revocable(l, u),
          d = c.revoke,
          f = c.proxy
        return (s.k = f), (s.j = d), f
      })(t, r)
    : Pr('ES5').J(t, r)
  return (r ? r.A : Pp()).p.push(n), n
}
function B8(e) {
  return (
    Rn(e) || nr(22, e),
    (function t(r) {
      if (!Kr(r)) return r
      var n,
        o = r[xe],
        i = zi(r)
      if (o) {
        if (!o.P && (o.i < 4 || !Pr('ES5').K(o))) return o.t
        ;(o.I = !0), (n = nb(r, i)), (o.I = !1)
      } else n = nb(r, i)
      return (
        bo(n, function (a, s) {
          ;(o && D8(o.t, a) === s) || C_(n, a, t(s))
        }),
        i === 3 ? new Set(n) : n
      )
    })(e)
  )
}
function nb(e, t) {
  switch (t) {
    case 2:
      return new Map(e)
    case 3:
      return Array.from(e)
  }
  return Fv(e)
}
function V8() {
  function e(i, a) {
    var s = o[i]
    return (
      s
        ? (s.enumerable = a)
        : (o[i] = s =
            {
              configurable: !0,
              enumerable: a,
              get: function () {
                var l = this[xe]
                return ms.get(l, i)
              },
              set: function (l) {
                var u = this[xe]
                ms.set(u, i, l)
              },
            }),
      s
    )
  }
  function t(i) {
    for (var a = i.length - 1; a >= 0; a--) {
      var s = i[a][xe]
      if (!s.P)
        switch (s.i) {
          case 5:
            n(s) && sn(s)
            break
          case 4:
            r(s) && sn(s)
        }
    }
  }
  function r(i) {
    for (var a = i.t, s = i.k, l = mi(s), u = l.length - 1; u >= 0; u--) {
      var c = l[u]
      if (c !== xe) {
        var d = a[c]
        if (d === void 0 && !pi(a, c)) return !0
        var f = s[c],
          h = f && f[xe]
        if (h ? h.t !== d : !__(f, d)) return !0
      }
    }
    var m = !!a[xe]
    return l.length !== mi(a).length + (m ? 0 : 1)
  }
  function n(i) {
    var a = i.k
    if (a.length !== i.t.length) return !0
    var s = Object.getOwnPropertyDescriptor(a, a.length - 1)
    if (s && !s.get) return !0
    for (var l = 0; l < a.length; l++) if (!a.hasOwnProperty(l)) return !0
    return !1
  }
  var o = {}
  z8('ES5', {
    J: function (i, a) {
      var s = Array.isArray(i),
        l = (function (c, d) {
          if (c) {
            for (var f = Array(d.length), h = 0; h < d.length; h++)
              Object.defineProperty(f, '' + h, e(h, !0))
            return f
          }
          var m = E_(d)
          delete m[xe]
          for (var p = mi(m), S = 0; S < p.length; S++) {
            var g = p[S]
            m[g] = e(g, c || !!m[g].enumerable)
          }
          return Object.create(Object.getPrototypeOf(d), m)
        })(s, i),
        u = {
          i: s ? 5 : 4,
          A: a ? a.A : Pp(),
          P: !1,
          I: !1,
          R: {},
          l: a,
          t: i,
          k: l,
          o: null,
          g: !1,
          C: !1,
        }
      return Object.defineProperty(l, xe, { value: u, writable: !0 }), l
    },
    S: function (i, a, s) {
      s
        ? Rn(a) && a[xe].A === i && t(i.p)
        : (i.u &&
            (function l(u) {
              if (u && typeof u == 'object') {
                var c = u[xe]
                if (c) {
                  var d = c.t,
                    f = c.k,
                    h = c.R,
                    m = c.i
                  if (m === 4)
                    bo(f, function (b) {
                      b !== xe &&
                        (d[b] !== void 0 || pi(d, b) ? h[b] || l(f[b]) : ((h[b] = !0), sn(c)))
                    }),
                      bo(d, function (b) {
                        f[b] !== void 0 || pi(f, b) || ((h[b] = !1), sn(c))
                      })
                  else if (m === 5) {
                    if ((n(c) && (sn(c), (h.length = !0)), f.length < d.length))
                      for (var p = f.length; p < d.length; p++) h[p] = !1
                    else for (var S = d.length; S < f.length; S++) h[S] = !0
                    for (var g = Math.min(f.length, d.length), v = 0; v < g; v++)
                      f.hasOwnProperty(v) || (h[v] = !0), h[v] === void 0 && l(f[v])
                  }
                }
              }
            })(i.p[0]),
          t(i.p))
    },
    K: function (i) {
      return i.i === 4 ? r(i) : n(i)
    },
  })
}
var ob,
  ps,
  zv = typeof Symbol < 'u' && typeof Symbol('x') == 'symbol',
  W8 = typeof Map < 'u',
  U8 = typeof Set < 'u',
  ib = typeof Proxy < 'u' && Proxy.revocable !== void 0 && typeof Reflect < 'u',
  P_ = zv ? Symbol.for('immer-nothing') : (((ob = {})['immer-nothing'] = !0), ob),
  ab = zv ? Symbol.for('immer-draftable') : '__$immer_draftable',
  xe = zv ? Symbol.for('immer-state') : '__$immer_state',
  H8 = '' + Object.prototype.constructor,
  mi =
    typeof Reflect < 'u' && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        }
      : Object.getOwnPropertyNames,
  E_ =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {}
      return (
        mi(e).forEach(function (r) {
          t[r] = Object.getOwnPropertyDescriptor(e, r)
        }),
        t
      )
    },
  Ap = {},
  ms = {
    get: function (e, t) {
      if (t === xe) return e
      var r = Hn(e)
      if (!pi(r, t))
        return (function (o, i, a) {
          var s,
            l = rb(i, a)
          return l
            ? 'value' in l
              ? l.value
              : (s = l.get) === null || s === void 0
              ? void 0
              : s.call(o.k)
            : void 0
        })(e, r, t)
      var n = r[t]
      return e.I || !Kr(n) ? n : n === Rf(e.t, t) ? ($f(e), (e.o[t] = Tp(e.A.h, n, e))) : n
    },
    has: function (e, t) {
      return t in Hn(e)
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(Hn(e))
    },
    set: function (e, t, r) {
      var n = rb(Hn(e), t)
      if (n != null && n.set) return n.set.call(e.k, r), !0
      if (!e.P) {
        var o = Rf(Hn(e), t),
          i = o == null ? void 0 : o[xe]
        if (i && i.t === r) return (e.o[t] = r), (e.R[t] = !1), !0
        if (__(r, o) && (r !== void 0 || pi(e.t, t))) return !0
        $f(e), sn(e)
      }
      return (
        (e.o[t] === r && (r !== void 0 || t in e.o)) ||
          (Number.isNaN(r) && Number.isNaN(e.o[t])) ||
          ((e.o[t] = r), (e.R[t] = !0)),
        !0
      )
    },
    deleteProperty: function (e, t) {
      return (
        Rf(e.t, t) !== void 0 || t in e.t ? ((e.R[t] = !1), $f(e), sn(e)) : delete e.R[t],
        e.o && delete e.o[t],
        !0
      )
    },
    getOwnPropertyDescriptor: function (e, t) {
      var r = Hn(e),
        n = Reflect.getOwnPropertyDescriptor(r, t)
      return (
        n && {
          writable: !0,
          configurable: e.i !== 1 || t !== 'length',
          enumerable: n.enumerable,
          value: r[t],
        }
      )
    },
    defineProperty: function () {
      nr(11)
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t)
    },
    setPrototypeOf: function () {
      nr(12)
    },
  },
  da = {}
bo(ms, function (e, t) {
  da[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments)
  }
}),
  (da.deleteProperty = function (e, t) {
    return da.set.call(this, e, t, void 0)
  }),
  (da.set = function (e, t, r) {
    return ms.set.call(this, e[0], t, r, e[0])
  })
var G8 = (function () {
    function e(r) {
      var n = this
      ;(this.O = ib),
        (this.D = !0),
        (this.produce = function (o, i, a) {
          if (typeof o == 'function' && typeof i != 'function') {
            var s = i
            i = o
            var l = n
            return function (p) {
              var S = this
              p === void 0 && (p = s)
              for (var g = arguments.length, v = Array(g > 1 ? g - 1 : 0), b = 1; b < g; b++)
                v[b - 1] = arguments[b]
              return l.produce(p, function (k) {
                var C
                return (C = i).call.apply(C, [S, k].concat(v))
              })
            }
          }
          var u
          if (
            (typeof i != 'function' && nr(6),
            a !== void 0 && typeof a != 'function' && nr(7),
            Kr(o))
          ) {
            var c = eb(n),
              d = Tp(n, o, void 0),
              f = !0
            try {
              ;(u = i(d)), (f = !1)
            } finally {
              f ? qu(c) : Ep(c)
            }
            return typeof Promise < 'u' && u instanceof Promise
              ? u.then(
                  function (p) {
                    return Tf(c, a), Af(p, c)
                  },
                  function (p) {
                    throw (qu(c), p)
                  }
                )
              : (Tf(c, a), Af(u, c))
          }
          if (!o || typeof o != 'object') {
            if (((u = i(o)) === void 0 && (u = o), u === P_ && (u = void 0), n.D && Dv(u, !0), a)) {
              var h = [],
                m = []
              Pr('Patches').M(o, u, h, m), a(h, m)
            }
            return u
          }
          nr(21, o)
        }),
        (this.produceWithPatches = function (o, i) {
          if (typeof o == 'function')
            return function (u) {
              for (var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++)
                d[f - 1] = arguments[f]
              return n.produceWithPatches(u, function (h) {
                return o.apply(void 0, [h].concat(d))
              })
            }
          var a,
            s,
            l = n.produce(o, i, function (u, c) {
              ;(a = u), (s = c)
            })
          return typeof Promise < 'u' && l instanceof Promise
            ? l.then(function (u) {
                return [u, a, s]
              })
            : [l, a, s]
        }),
        typeof (r == null ? void 0 : r.useProxies) == 'boolean' && this.setUseProxies(r.useProxies),
        typeof (r == null ? void 0 : r.autoFreeze) == 'boolean' && this.setAutoFreeze(r.autoFreeze)
    }
    var t = e.prototype
    return (
      (t.createDraft = function (r) {
        Kr(r) || nr(8), Rn(r) && (r = B8(r))
        var n = eb(this),
          o = Tp(this, r, void 0)
        return (o[xe].C = !0), Ep(n), o
      }),
      (t.finishDraft = function (r, n) {
        var o = r && r[xe],
          i = o.A
        return Tf(i, n), Af(void 0, i)
      }),
      (t.setAutoFreeze = function (r) {
        this.D = r
      }),
      (t.setUseProxies = function (r) {
        r && !ib && nr(20), (this.O = r)
      }),
      (t.applyPatches = function (r, n) {
        var o
        for (o = n.length - 1; o >= 0; o--) {
          var i = n[o]
          if (i.path.length === 0 && i.op === 'replace') {
            r = i.value
            break
          }
        }
        o > -1 && (n = n.slice(o + 1))
        var a = Pr('Patches').$
        return Rn(r)
          ? a(r, n)
          : this.produce(r, function (s) {
              return a(s, n)
            })
      }),
      e
    )
  })(),
  Ot = new G8(),
  T_ = Ot.produce
Ot.produceWithPatches.bind(Ot)
Ot.setAutoFreeze.bind(Ot)
Ot.setUseProxies.bind(Ot)
Ot.applyPatches.bind(Ot)
Ot.createDraft.bind(Ot)
Ot.finishDraft.bind(Ot)
function sb(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function lb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? sb(Object(r), !0).forEach(function (n) {
          pC(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : sb(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
  }
  return e
}
function ot(e) {
  return (
    'Minified Redux error #' +
    e +
    '; visit https://redux.js.org/Errors?code=' +
    e +
    ' for the full message or use the non-minified dev environment for full errors. '
  )
}
var ub = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable'
  })(),
  jf = function () {
    return Math.random().toString(36).substring(7).split('').join('.')
  },
  Qu = {
    INIT: '@@redux/INIT' + jf(),
    REPLACE: '@@redux/REPLACE' + jf(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + jf()
    },
  }
function K8(e) {
  if (typeof e != 'object' || e === null) return !1
  for (var t = e; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t)
  return Object.getPrototypeOf(e) === t
}
function A_(e, t, r) {
  var n
  if (
    (typeof t == 'function' && typeof r == 'function') ||
    (typeof r == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(ot(0))
  if ((typeof t == 'function' && typeof r > 'u' && ((r = t), (t = void 0)), typeof r < 'u')) {
    if (typeof r != 'function') throw new Error(ot(1))
    return r(A_)(e, t)
  }
  if (typeof e != 'function') throw new Error(ot(2))
  var o = e,
    i = t,
    a = [],
    s = a,
    l = !1
  function u() {
    s === a && (s = a.slice())
  }
  function c() {
    if (l) throw new Error(ot(3))
    return i
  }
  function d(p) {
    if (typeof p != 'function') throw new Error(ot(4))
    if (l) throw new Error(ot(5))
    var S = !0
    return (
      u(),
      s.push(p),
      function () {
        if (S) {
          if (l) throw new Error(ot(6))
          ;(S = !1), u()
          var v = s.indexOf(p)
          s.splice(v, 1), (a = null)
        }
      }
    )
  }
  function f(p) {
    if (!K8(p)) throw new Error(ot(7))
    if (typeof p.type > 'u') throw new Error(ot(8))
    if (l) throw new Error(ot(9))
    try {
      ;(l = !0), (i = o(i, p))
    } finally {
      l = !1
    }
    for (var S = (a = s), g = 0; g < S.length; g++) {
      var v = S[g]
      v()
    }
    return p
  }
  function h(p) {
    if (typeof p != 'function') throw new Error(ot(10))
    ;(o = p), f({ type: Qu.REPLACE })
  }
  function m() {
    var p,
      S = d
    return (
      (p = {
        subscribe: function (v) {
          if (typeof v != 'object' || v === null) throw new Error(ot(11))
          function b() {
            v.next && v.next(c())
          }
          b()
          var k = S(b)
          return { unsubscribe: k }
        },
      }),
      (p[ub] = function () {
        return this
      }),
      p
    )
  }
  return (
    f({ type: Qu.INIT }),
    (n = { dispatch: f, subscribe: d, getState: c, replaceReducer: h }),
    (n[ub] = m),
    n
  )
}
function q8(e) {
  Object.keys(e).forEach(function (t) {
    var r = e[t],
      n = r(void 0, { type: Qu.INIT })
    if (typeof n > 'u') throw new Error(ot(12))
    if (typeof r(void 0, { type: Qu.PROBE_UNKNOWN_ACTION() }) > 'u') throw new Error(ot(13))
  })
}
function R_(e) {
  for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
    var o = t[n]
    typeof e[o] == 'function' && (r[o] = e[o])
  }
  var i = Object.keys(r),
    a
  try {
    q8(r)
  } catch (s) {
    a = s
  }
  return function (l, u) {
    if ((l === void 0 && (l = {}), a)) throw a
    for (var c = !1, d = {}, f = 0; f < i.length; f++) {
      var h = i[f],
        m = r[h],
        p = l[h],
        S = m(p, u)
      if (typeof S > 'u') throw (u && u.type, new Error(ot(14)))
      ;(d[h] = S), (c = c || S !== p)
    }
    return (c = c || i.length !== Object.keys(l).length), c ? d : l
  }
}
function Zu() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]
  return t.length === 0
    ? function (n) {
        return n
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (n, o) {
        return function () {
          return n(o.apply(void 0, arguments))
        }
      })
}
function Y8() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]
  return function (n) {
    return function () {
      var o = n.apply(void 0, arguments),
        i = function () {
          throw new Error(ot(15))
        },
        a = {
          getState: o.getState,
          dispatch: function () {
            return i.apply(void 0, arguments)
          },
        },
        s = t.map(function (l) {
          return l(a)
        })
      return (i = Zu.apply(void 0, s)(o.dispatch)), lb(lb({}, o), {}, { dispatch: i })
    }
  }
}
function $_(e) {
  var t = function (n) {
    var o = n.dispatch,
      i = n.getState
    return function (a) {
      return function (s) {
        return typeof s == 'function' ? s(o, i, e) : a(s)
      }
    }
  }
  return t
}
var j_ = $_()
j_.withExtraArgument = $_
const cb = j_
var X8 =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, r) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, o) {
                n.__proto__ = o
              }) ||
            function (n, o) {
              for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
            }),
          e(t, r)
        )
      }
      return function (t, r) {
        if (typeof r != 'function' && r !== null)
          throw new TypeError('Class extends value ' + String(r) + ' is not a constructor or null')
        e(t, r)
        function n() {
          this.constructor = t
        }
        t.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n())
      }
    })(),
  Q8 =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var r = {
          label: 0,
          sent: function () {
            if (i[0] & 1) throw i[1]
            return i[1]
          },
          trys: [],
          ops: [],
        },
        n,
        o,
        i,
        a
      return (
        (a = { next: s(0), throw: s(1), return: s(2) }),
        typeof Symbol == 'function' &&
          (a[Symbol.iterator] = function () {
            return this
          }),
        a
      )
      function s(u) {
        return function (c) {
          return l([u, c])
        }
      }
      function l(u) {
        if (n) throw new TypeError('Generator is already executing.')
        for (; r; )
          try {
            if (
              ((n = 1),
              o &&
                (i =
                  u[0] & 2
                    ? o.return
                    : u[0]
                    ? o.throw || ((i = o.return) && i.call(o), 0)
                    : o.next) &&
                !(i = i.call(o, u[1])).done)
            )
              return i
            switch (((o = 0), i && (u = [u[0] & 2, i.value]), u[0])) {
              case 0:
              case 1:
                i = u
                break
              case 4:
                return r.label++, { value: u[1], done: !1 }
              case 5:
                r.label++, (o = u[1]), (u = [0])
                continue
              case 7:
                ;(u = r.ops.pop()), r.trys.pop()
                continue
              default:
                if (
                  ((i = r.trys),
                  !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2))
                ) {
                  r = 0
                  continue
                }
                if (u[0] === 3 && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                  r.label = u[1]
                  break
                }
                if (u[0] === 6 && r.label < i[1]) {
                  ;(r.label = i[1]), (i = u)
                  break
                }
                if (i && r.label < i[2]) {
                  ;(r.label = i[2]), r.ops.push(u)
                  break
                }
                i[2] && r.ops.pop(), r.trys.pop()
                continue
            }
            u = t.call(e, r)
          } catch (c) {
            ;(u = [6, c]), (o = 0)
          } finally {
            n = i = 0
          }
        if (u[0] & 5) throw u[1]
        return { value: u[0] ? u[1] : void 0, done: !0 }
      }
    },
  Ju =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var r = 0, n = t.length, o = e.length; r < n; r++, o++) e[o] = t[r]
      return e
    },
  Z8 = Object.defineProperty,
  J8 = Object.defineProperties,
  e9 = Object.getOwnPropertyDescriptors,
  db = Object.getOwnPropertySymbols,
  t9 = Object.prototype.hasOwnProperty,
  r9 = Object.prototype.propertyIsEnumerable,
  fb = function (e, t, r) {
    return t in e
      ? Z8(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r)
  },
  wn = function (e, t) {
    for (var r in t || (t = {})) t9.call(t, r) && fb(e, r, t[r])
    if (db)
      for (var n = 0, o = db(t); n < o.length; n++) {
        var r = o[n]
        r9.call(t, r) && fb(e, r, t[r])
      }
    return e
  },
  Mf = function (e, t) {
    return J8(e, e9(t))
  },
  n9 = function (e, t, r) {
    return new Promise(function (n, o) {
      var i = function (l) {
          try {
            s(r.next(l))
          } catch (u) {
            o(u)
          }
        },
        a = function (l) {
          try {
            s(r.throw(l))
          } catch (u) {
            o(u)
          }
        },
        s = function (l) {
          return l.done ? n(l.value) : Promise.resolve(l.value).then(i, a)
        }
      s((r = r.apply(e, t)).next())
    })
  },
  o9 =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object' ? Zu : Zu.apply(null, arguments)
        }
function i9(e) {
  if (typeof e != 'object' || e === null) return !1
  var t = Object.getPrototypeOf(e)
  if (t === null) return !0
  for (var r = t; Object.getPrototypeOf(r) !== null; ) r = Object.getPrototypeOf(r)
  return t === r
}
var a9 = (function (e) {
  X8(t, e)
  function t() {
    for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]
    var o = e.apply(this, r) || this
    return Object.setPrototypeOf(o, t.prototype), o
  }
  return (
    Object.defineProperty(t, Symbol.species, {
      get: function () {
        return t
      },
      enumerable: !1,
      configurable: !0,
    }),
    (t.prototype.concat = function () {
      for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]
      return e.prototype.concat.apply(this, r)
    }),
    (t.prototype.prepend = function () {
      for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]
      return r.length === 1 && Array.isArray(r[0])
        ? new (t.bind.apply(t, Ju([void 0], r[0].concat(this))))()
        : new (t.bind.apply(t, Ju([void 0], r.concat(this))))()
    }),
    t
  )
})(Array)
function Rp(e) {
  return Kr(e) ? T_(e, function () {}) : e
}
function s9(e) {
  return typeof e == 'boolean'
}
function l9() {
  return function (t) {
    return u9(t)
  }
}
function u9(e) {
  e === void 0 && (e = {})
  var t = e.thunk,
    r = t === void 0 ? !0 : t
  e.immutableCheck, e.serializableCheck
  var n = new a9()
  return r && (s9(r) ? n.push(cb) : n.push(cb.withExtraArgument(r.extraArgument))), n
}
var c9 = !0
function d9(e) {
  var t = l9(),
    r = e || {},
    n = r.reducer,
    o = n === void 0 ? void 0 : n,
    i = r.middleware,
    a = i === void 0 ? t() : i,
    s = r.devTools,
    l = s === void 0 ? !0 : s,
    u = r.preloadedState,
    c = u === void 0 ? void 0 : u,
    d = r.enhancers,
    f = d === void 0 ? void 0 : d,
    h
  if (typeof o == 'function') h = o
  else if (i9(o)) h = R_(o)
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    )
  var m = a
  typeof m == 'function' && (m = m(t))
  var p = Y8.apply(void 0, m),
    S = Zu
  l && (S = o9(wn({ trace: !c9 }, typeof l == 'object' && l)))
  var g = [p]
  Array.isArray(f) ? (g = Ju([p], f)) : typeof f == 'function' && (g = f(g))
  var v = S.apply(void 0, g)
  return A_(h, c, v)
}
function kn(e, t) {
  function r() {
    for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o]
    if (t) {
      var i = t.apply(void 0, n)
      if (!i) throw new Error('prepareAction did not return an object')
      return wn(
        wn({ type: e, payload: i.payload }, 'meta' in i && { meta: i.meta }),
        'error' in i && { error: i.error }
      )
    }
    return { type: e, payload: n[0] }
  }
  return (
    (r.toString = function () {
      return '' + e
    }),
    (r.type = e),
    (r.match = function (n) {
      return n.type === e
    }),
    r
  )
}
function M_(e) {
  var t = {},
    r = [],
    n,
    o = {
      addCase: function (i, a) {
        var s = typeof i == 'string' ? i : i.type
        if (s in t)
          throw new Error('addCase cannot be called with two reducers for the same action type')
        return (t[s] = a), o
      },
      addMatcher: function (i, a) {
        return r.push({ matcher: i, reducer: a }), o
      },
      addDefaultCase: function (i) {
        return (n = i), o
      },
    }
  return e(o), [t, r, n]
}
function f9(e) {
  return typeof e == 'function'
}
function h9(e, t, r, n) {
  r === void 0 && (r = [])
  var o = typeof t == 'function' ? M_(t) : [t, r, n],
    i = o[0],
    a = o[1],
    s = o[2],
    l
  if (f9(e))
    l = function () {
      return Rp(e())
    }
  else {
    var u = Rp(e)
    l = function () {
      return u
    }
  }
  function c(d, f) {
    d === void 0 && (d = l())
    var h = Ju(
      [i[f.type]],
      a
        .filter(function (m) {
          var p = m.matcher
          return p(f)
        })
        .map(function (m) {
          var p = m.reducer
          return p
        })
    )
    return (
      h.filter(function (m) {
        return !!m
      }).length === 0 && (h = [s]),
      h.reduce(function (m, p) {
        if (p)
          if (Rn(m)) {
            var S = m,
              g = p(S, f)
            return g === void 0 ? m : g
          } else {
            if (Kr(m))
              return T_(m, function (v) {
                return p(v, f)
              })
            var g = p(m, f)
            if (g === void 0) {
              if (m === null) return m
              throw Error('A case reducer on a non-draftable value must not return undefined')
            }
            return g
          }
        return m
      }, d)
    )
  }
  return (c.getInitialState = l), c
}
function p9(e, t) {
  return e + '/' + t
}
function O_(e) {
  var t = e.name
  if (!t) throw new Error('`name` is a required option for createSlice')
  typeof process < 'u'
  var r = typeof e.initialState == 'function' ? e.initialState : Rp(e.initialState),
    n = e.reducers || {},
    o = Object.keys(n),
    i = {},
    a = {},
    s = {}
  o.forEach(function (c) {
    var d = n[c],
      f = p9(t, c),
      h,
      m
    'reducer' in d ? ((h = d.reducer), (m = d.prepare)) : (h = d),
      (i[c] = h),
      (a[f] = h),
      (s[c] = m ? kn(f, m) : kn(f))
  })
  function l() {
    var c = typeof e.extraReducers == 'function' ? M_(e.extraReducers) : [e.extraReducers],
      d = c[0],
      f = d === void 0 ? {} : d,
      h = c[1],
      m = h === void 0 ? [] : h,
      p = c[2],
      S = p === void 0 ? void 0 : p,
      g = wn(wn({}, f), a)
    return h9(r, function (v) {
      for (var b in g) v.addCase(b, g[b])
      for (var k = 0, C = m; k < C.length; k++) {
        var R = C[k]
        v.addMatcher(R.matcher, R.reducer)
      }
      S && v.addDefaultCase(S)
    })
  }
  var u
  return {
    name: t,
    reducer: function (c, d) {
      return u || (u = l()), u(c, d)
    },
    actions: s,
    caseReducers: i,
    getInitialState: function () {
      return u || (u = l()), u.getInitialState()
    },
  }
}
var m9 = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  v9 = function (e) {
    e === void 0 && (e = 21)
    for (var t = '', r = e; r--; ) t += m9[(Math.random() * 64) | 0]
    return t
  },
  g9 = ['name', 'message', 'stack', 'code'],
  Of = (function () {
    function e(t, r) {
      ;(this.payload = t), (this.meta = r)
    }
    return e
  })(),
  hb = (function () {
    function e(t, r) {
      ;(this.payload = t), (this.meta = r)
    }
    return e
  })(),
  y9 = function (e) {
    if (typeof e == 'object' && e !== null) {
      for (var t = {}, r = 0, n = g9; r < n.length; r++) {
        var o = n[r]
        typeof e[o] == 'string' && (t[o] = e[o])
      }
      return t
    }
    return { message: String(e) }
  },
  Os = (function () {
    function e(t, r, n) {
      var o = kn(t + '/fulfilled', function (u, c, d, f) {
          return {
            payload: u,
            meta: Mf(wn({}, f || {}), { arg: d, requestId: c, requestStatus: 'fulfilled' }),
          }
        }),
        i = kn(t + '/pending', function (u, c, d) {
          return {
            payload: void 0,
            meta: Mf(wn({}, d || {}), { arg: c, requestId: u, requestStatus: 'pending' }),
          }
        }),
        a = kn(t + '/rejected', function (u, c, d, f, h) {
          return {
            payload: f,
            error: ((n && n.serializeError) || y9)(u || 'Rejected'),
            meta: Mf(wn({}, h || {}), {
              arg: d,
              requestId: c,
              rejectedWithValue: !!f,
              requestStatus: 'rejected',
              aborted: (u == null ? void 0 : u.name) === 'AbortError',
              condition: (u == null ? void 0 : u.name) === 'ConditionError',
            }),
          }
        }),
        s =
          typeof AbortController < 'u'
            ? AbortController
            : (function () {
                function u() {
                  this.signal = {
                    aborted: !1,
                    addEventListener: function () {},
                    dispatchEvent: function () {
                      return !1
                    },
                    onabort: function () {},
                    removeEventListener: function () {},
                    reason: void 0,
                    throwIfAborted: function () {},
                  }
                }
                return (u.prototype.abort = function () {}), u
              })()
      function l(u) {
        return function (c, d, f) {
          var h = n != null && n.idGenerator ? n.idGenerator(u) : v9(),
            m = new s(),
            p
          function S(v) {
            ;(p = v), m.abort()
          }
          var g = (function () {
            return n9(this, null, function () {
              var v, b, k, C, R, E, T
              return Q8(this, function (M) {
                switch (M.label) {
                  case 0:
                    return (
                      M.trys.push([0, 4, , 5]),
                      (C =
                        (v = n == null ? void 0 : n.condition) == null
                          ? void 0
                          : v.call(n, u, { getState: d, extra: f })),
                      S9(C) ? [4, C] : [3, 2]
                    )
                  case 1:
                    ;(C = M.sent()), (M.label = 2)
                  case 2:
                    if (C === !1 || m.signal.aborted)
                      throw {
                        name: 'ConditionError',
                        message: 'Aborted due to condition callback returning false.',
                      }
                    return (
                      (R = new Promise(function (j, W) {
                        return m.signal.addEventListener('abort', function () {
                          return W({ name: 'AbortError', message: p || 'Aborted' })
                        })
                      })),
                      c(
                        i(
                          h,
                          u,
                          (b = n == null ? void 0 : n.getPendingMeta) == null
                            ? void 0
                            : b.call(n, { requestId: h, arg: u }, { getState: d, extra: f })
                        )
                      ),
                      [
                        4,
                        Promise.race([
                          R,
                          Promise.resolve(
                            r(u, {
                              dispatch: c,
                              getState: d,
                              extra: f,
                              requestId: h,
                              signal: m.signal,
                              abort: S,
                              rejectWithValue: function (j, W) {
                                return new Of(j, W)
                              },
                              fulfillWithValue: function (j, W) {
                                return new hb(j, W)
                              },
                            })
                          ).then(function (j) {
                            if (j instanceof Of) throw j
                            return j instanceof hb ? o(j.payload, h, u, j.meta) : o(j, h, u)
                          }),
                        ]),
                      ]
                    )
                  case 3:
                    return (k = M.sent()), [3, 5]
                  case 4:
                    return (
                      (E = M.sent()),
                      (k = E instanceof Of ? a(null, h, u, E.payload, E.meta) : a(E, h, u)),
                      [3, 5]
                    )
                  case 5:
                    return (
                      (T = n && !n.dispatchConditionRejection && a.match(k) && k.meta.condition),
                      T || c(k),
                      [2, k]
                    )
                }
              })
            })
          })()
          return Object.assign(g, {
            abort: S,
            requestId: h,
            arg: u,
            unwrap: function () {
              return g.then(b9)
            },
          })
        }
      }
      return Object.assign(l, { pending: i, rejected: a, fulfilled: o, typePrefix: t })
    }
    return (
      (e.withTypes = function () {
        return e
      }),
      e
    )
  })()
function b9(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload
  if (e.error) throw e.error
  return e.payload
}
function S9(e) {
  return e !== null && typeof e == 'object' && typeof e.then == 'function'
}
var Lv = 'listenerMiddleware'
kn(Lv + '/add')
kn(Lv + '/removeAll')
kn(Lv + '/remove')
var pb
typeof queueMicrotask == 'function' &&
  queueMicrotask.bind(typeof window < 'u' ? window : typeof global < 'u' ? global : globalThis)
V8()
const I_ = { id: 1, email: 'correo@correo.com', name: 'John Doe' },
  x9 = 1,
  Is = ({ res: e, rej: t, ms: r = 300 }) => {
    const n = Math.ceil(Math.random() * 10) > x9
    return new Promise((o, i) => setTimeout(() => (!t || n ? o(e) : i(t)), r))
  }
var $n = (e => (
  (e[(e.OK = 200)] = 'OK'),
  (e[(e.CREATED = 201)] = 'CREATED'),
  (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
  (e[(e.UNAUTHORIZED = 401)] = 'UNAUTHORIZED'),
  (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
  (e[(e.INTERNAL_ERROR = 500)] = 'INTERNAL_ERROR'),
  e
))($n || {})
const w9 = { res: { statusCode: $n.OK, data: I_ }, rej: { statusCode: $n.UNAUTHORIZED } },
  k9 = () => Is(w9),
  Ql = Os('auth/fetch', k9),
  C9 = { status: 'authenticated', user: I_ },
  _9 = O_({
    name: 'auth',
    initialState: C9,
    reducers: {},
    extraReducers: e => {
      e.addCase(Ql.pending, t => {
        t.status = 'loading'
      })
        .addCase(Ql.fulfilled, (t, r) => {
          ;(t.status = 'authenticated'), (t.user = r.payload.data)
        })
        .addCase(Ql.rejected, t => {
          ;(t.status = 'failed'), (t.user = null)
        })
    },
  }),
  P9 = e => e.auth,
  E9 = _9.reducer,
  F_ = () => FV(),
  D_ = _V,
  nd = () => {
    const e = F_(),
      { user: t, status: r } = D_(P9)
    return { user: t, status: r, login: () => e(Ql()) }
  },
  N_ = ({ initialValues: e }) => {
    const [t, r] = y.useState(e)
    return { fields: t, onChange: (i, a) => r({ ...t, [i]: a }), resetForm: () => r(e) }
  },
  T9 = [
    { id: 1, title: 'Title', status: 'pending', priority: 'low', autor: 'user' },
    {
      id: 2,
      title: 'New title',
      status: 'in process',
      priority: 'medium',
      autor: 'user',
      desc: 'Sit laboris minim elit cupidatat magna exercitation fugiat amet in amet officia enim qui non.',
    },
    { id: 3, title: 'Task', status: 'completed', priority: 'high', autor: 'user2' },
    {
      id: 4,
      title: 'New task',
      status: 'pending',
      priority: 'low',
      autor: 'leader',
      desc: 'Aliqua ullamco sit ut irure in exercitation laboris laboris proident qui nulla sint. Nisi consequat pariatur occaecat nostrud nostrud id quis commodo. Culpa ex ullamco commodo nisi. Excepteur occaecat tempor dolor fugiat irure laboris sint veniam ad velit duis.',
    },
  ],
  z_ = { statusCode: $n.BAD_REQUEST, data: [] },
  A9 = { res: { statusCode: $n.OK, data: T9 }, rej: z_ },
  Bv = (e, t) => ({ res: { statusCode: e, data: t }, rej: z_ }),
  R9 = () => Is(A9),
  $9 = (e, t) => {
    const r = [e, ...t]
    return Is(Bv($n.CREATED, r))
  },
  j9 = (e, t, r) => {
    const n = r.map(o => (o.id === e ? { ...t } : o))
    return Is(Bv($n.OK, n))
  },
  M9 = (e, t) => {
    const r = t.filter(n => n.id !== e)
    return Is(Bv($n.OK, r))
  },
  Zl = Os('task/fetch', R9),
  Jl = Os('task/create', ({ task: e, list: t }) => $9(e, t)),
  eu = Os('task/update', ({ id: e, task: t, list: r }) => j9(e, t, r)),
  tu = Os('task/delete', ({ id: e, list: t }) => M9(e, t)),
  O9 = { status: 'idle', list: [], filtered: null },
  L_ = O_({
    name: 'task',
    initialState: O9,
    reducers: {
      updateFilteredTasks: (e, t) => {
        e.filtered = t.payload
      },
    },
    extraReducers: e => {
      e.addCase(Zl.pending, t => {
        t.status = 'loading'
      })
        .addCase(Zl.fulfilled, (t, r) => {
          ;(t.status = 'success'), (t.list = r.payload.data)
        })
        .addCase(Zl.rejected, t => {
          ;(t.status = 'failed'), (t.list = [])
        })
        .addCase(Jl.pending, t => {
          t.status = 'loading'
        })
        .addCase(Jl.fulfilled, (t, r) => {
          ;(t.status = 'success'), (t.list = r.payload.data)
        })
        .addCase(Jl.rejected, t => {
          t.status = 'failed'
        })
        .addCase(eu.pending, t => {
          t.status = 'loading'
        })
        .addCase(eu.fulfilled, (t, r) => {
          ;(t.status = 'success'), (t.list = r.payload.data)
        })
        .addCase(eu.rejected, t => {
          t.status = 'failed'
        })
        .addCase(tu.pending, t => {
          t.status = 'loading'
        })
        .addCase(tu.fulfilled, (t, r) => {
          ;(t.status = 'success'), (t.list = r.payload.data)
        })
        .addCase(tu.rejected, t => {
          t.status = 'failed'
        })
    },
  }),
  { updateFilteredTasks: If } = L_.actions,
  I9 = e => e.task,
  F9 = L_.reducer,
  Fs = () => {
    const e = F_(),
      { user: t } = nd(),
      { list: r, status: n, filtered: o } = D_(I9),
      { isOpen: i, onClose: a, onOpen: s } = VB(),
      l = n === 'loading'
    return (
      y.useEffect(() => {
        if (n === 'failed') return s()
      }, [n]),
      {
        list: r,
        filtered: o,
        status: n,
        isOpen: i,
        isLoading: l,
        onClose: a,
        fetchTask: () => e(Zl()),
        createTask: S => {
          const g = {
            id: Date.now(),
            ...S,
            status: S.status || 'pending',
            priority: S.priority || 'low',
            autor: (t == null ? void 0 : t.name) ?? '',
          }
          return e(Jl({ task: g, list: r }))
        },
        updateTask: (S, g) => e(eu({ id: S, task: g, list: r })),
        deleteTask: S => e(tu({ id: S, list: r })),
        filterBy: (S, g) => {
          const v = new RegExp(g, 'gi'),
            b = r.filter(k => {
              var C
              return (C = k[S]) == null ? void 0 : C.toString().match(v)
            })
          e(If(b))
        },
        searchMyTasks: () => {
          const S = r.filter(g => g.autor === (t == null ? void 0 : t.name))
          e(If(S))
        },
        clearFilterTasks: () => e(If(null)),
      }
    )
  },
  D9 = () => {
    const { user: e } = nd()
    return x.jsxs(Gr, {
      direction: 'row',
      alignItems: 'center',
      spacing: 4,
      children: [
        x.jsx(tC, { size: 'sm' }),
        x.jsx(_r, { fontWeight: 'bold', children: e == null ? void 0 : e.name }),
      ],
    })
  },
  N9 = () =>
    x.jsx(Ev, {
      as: 'header',
      px: '4',
      bg: 'whiteAlpha.300',
      area: 'header',
      boxShadow: 'md',
      children: x.jsxs(hi, {
        justifyContent: 'space-between',
        alignItems: 'center',
        h: 'full',
        children: [x.jsx(F8, {}), x.jsx(D9, {})],
      }),
    }),
  z9 = ({ children: e }) =>
    x.jsxs(Co, {
      templateAreas: '"header" "main"',
      gridTemplateRows: '60px 1fr',
      gridTemplateColumns: '1fr',
      h: 'calc(100vh)',
      color: 'blackAlpha.700',
      children: [
        x.jsx(N9, {}),
        x.jsx(Ev, {
          as: 'main',
          p: { base: '2', md: '6' },
          bg: 'whiteAlpha.300',
          area: 'main',
          children: e,
        }),
      ],
    }),
  L9 = ({ isAuth: e, redirectPath: t = '/login' }) =>
    e ? x.jsx(z9, { children: x.jsx(k_, {}) }) : x.jsx(w_, { to: t }),
  B9 = ({ isAuth: e, redirectPath: t = '/' }) => (e ? x.jsx(w_, { to: t }) : x.jsx(k_, {})),
  V9 = '/goscrum/assets/close-88594523.svg',
  W9 = { close: V9 },
  U9 = ({ name: e, alt: t, ...r }) =>
    x.jsx(pv, {
      src: W9[e],
      alt: t ?? e,
      maxW: '24px',
      m: '2',
      _hover: { cursor: `${r.onClick ? 'pointer' : 'default'}` },
      ...r,
    }),
  od = ({ children: e, ...t }) =>
    x.jsx(mv, {
      bgColor: 'brand.300',
      color: 'white',
      w: '40',
      _hover: { bgColor: 'brand.500' },
      _active: { transform: 'scale(.98)' },
      ...t,
      children: e,
    })
var Cn = (e => (
    (e.PENDING = 'pending'), (e.IN_PROCESS = 'in process'), (e.COMPLETED = 'completed'), e
  ))(Cn || {}),
  Vv = (e => ((e.LOW = 'low'), (e.MEDIUM = 'medium'), (e.HIGH = 'high'), e))(Vv || {})
const H9 = {
    password: /^(?=.*\d)(?=.*[a-zA-Z]).{5,20}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    firstLetter: /(^\w{1})|(\s+\w{1})/g,
  },
  ec = e => e.replace(H9.firstLetter, t => t.toUpperCase()),
  G9 = { title: '', status: '', priority: '', desc: '' },
  K9 = () => {
    const { createTask: e } = Fs(),
      { fields: t, onChange: r, resetForm: n } = N_({ initialValues: G9 }),
      o = Object.values(Cn),
      i = Object.values(Vv),
      a = async s => {
        if ((s.preventDefault(), !t.title)) return console.error('no title')
        await e({ ...t }), n()
      }
    return x.jsxs(Gr, {
      w: 'full',
      px: '4',
      children: [
        x.jsx(_r, { as: 'h2', fontWeight: 'bold', textAlign: 'center', children: 'Create task' }),
        x.jsxs(Gr, {
          as: 'form',
          onSubmit: a,
          gap: '2',
          children: [
            x.jsxs(Co, {
              gap: '4',
              children: [
                x.jsx(Ti, {
                  children: x.jsx(Ai, {
                    placeholder: 'Title',
                    value: t.title,
                    onChange: s => r('title', s.target.value),
                  }),
                }),
                x.jsx(Gu, {
                  placeholder: 'Select a status',
                  value: t.status,
                  onChange: s => r('status', s.target.value),
                  children: o.map(s => x.jsx('option', { value: s, children: ec(s) }, s)),
                }),
                x.jsx(Gu, {
                  value: t.priority,
                  placeholder: 'Select priority',
                  onChange: s => r('priority', s.target.value),
                  children: i.map(s => x.jsx('option', { value: s, children: ec(s) }, s)),
                }),
              ],
            }),
            x.jsx(Ti, {
              id: 'desc',
              children: x.jsx(s_, {
                placeholder: 'Description',
                value: t.desc,
                onChange: s => r('desc', s.target.value),
              }),
            }),
            x.jsx(od, { type: 'submit', children: 'Create' }),
          ],
        }),
      ],
    })
  },
  q9 = () => {
    const { filterBy: e, searchMyTasks: t, clearFilterTasks: r, status: n } = Fs(),
      [o, i] = y.useState('all'),
      [a, s] = y.useState(''),
      l = Object.values(Vv),
      u = ({ target: { value: c, id: d } }) => {
        d === 'title' && s(c), e(d, c), d === 'priority' && s(''), i('all')
      }
    return (
      y.useEffect(() => {
        if (o === 'me') return t()
        r()
      }, [o, n]),
      x.jsxs(hi, {
        px: '8',
        gap: '8',
        alignItems: 'center',
        justifyContent: { base: 'center', md: 'space-between' },
        wrap: 'wrap',
        children: [
          x.jsx(o_, {
            value: o,
            onChange: c => i(c),
            colorScheme: 'brand',
            children: x.jsxs(hi, {
              gap: '4',
              children: [
                x.jsx(yp, { value: 'all', children: 'Todas' }),
                x.jsx(yp, { value: 'me', children: 'Mis tareas' }),
              ],
            }),
          }),
          x.jsxs(hi, {
            gap: '4',
            children: [
              x.jsx(Ti, {
                id: 'title',
                children: x.jsx(Ai, { placeholder: 'Insert a title', value: a, onChange: u }),
              }),
              x.jsx(Gu, {
                id: 'priority',
                placeholder: 'Select priority',
                onChange: u,
                children: l.map(c => x.jsx('option', { value: c, children: ec(c) }, c)),
              }),
            ],
          }),
        ],
      })
    )
  },
  Y9 = { low: 'blue', medium: 'yellow', high: 'red' },
  X9 = { pending: Cn.IN_PROCESS, 'in process': Cn.COMPLETED, completed: Cn.PENDING },
  Q9 = 30,
  Z9 = ({ id: e, title: t, status: r, priority: n, desc: o, autor: i }) => {
    const { updateTask: a, deleteTask: s } = Fs(),
      [l, u] = y.useState(!1),
      c = !!o && o.length > Q9,
      d = X9[r],
      f = () => {
        a(e, { id: e, title: t, priority: n, desc: o, autor: i, status: d })
      }
    return x.jsxs(lL, {
      children: [
        x.jsx(U9, { name: 'close', pos: 'absolute', right: '0', onClick: () => void s(e) }),
        x.jsx(Tv, { size: 'sm', textAlign: 'center', pt: '2', children: t }),
        x.jsxs(sL, {
          children: [
            x.jsxs(Gr, {
              direction: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: '2',
              children: [
                x.jsxs(hi, {
                  gap: '2',
                  children: [
                    x.jsx(_r, { fontWeight: 'semibold', children: 'Autor:' }),
                    x.jsx(_r, { children: i }),
                  ],
                }),
                x.jsx(NC, { colorScheme: Y9[n], h: 'min-content', children: n }),
              ],
            }),
            x.jsxs(mv, { size: 'xs', onClick: f, children: ['Move to ', d] }),
            !!o &&
              x.jsxs(x.Fragment, {
                children: [
                  x.jsx(_r, { mt: '2', isTruncated: !l, children: o }),
                  c &&
                    x.jsxs(od, {
                      w: 'fit-content',
                      size: 'xs',
                      onClick: () => u(!l),
                      children: ['Show ', l ? 'less' : 'more'],
                    }),
                ],
              }),
          ],
        }),
      ],
    })
  },
  Ff = ({ title: e, list: t }) =>
    x.jsxs(LC, {
      backgroundColor: 'gray.100',
      borderRadius: 'md',
      h: 'full',
      p: '2',
      minW: '300px',
      children: [
        x.jsx(_r, { fontWeight: 'semibold', textAlign: 'center', children: ec(e) }),
        x.jsx(Gr, {
          mt: '2',
          children:
            t != null && t.length
              ? t == null
                ? void 0
                : t.map(r => x.jsx(Z9, { ...r }, r.id))
              : x.jsx(_r, { textAlign: 'center', children: 'No tasks' }),
        }),
      ],
    }),
  J9 = () => {
    const { isOpen: e, onClose: t } = Fs()
    return x.jsxs(Gr, {
      alignItems: 'center',
      children: [
        x.jsx(Tv, { size: 'md', children: 'No tasks to display' }),
        x.jsxs(UC, {
          isOpen: e,
          onClose: t,
          children: [
            x.jsx(e_, {}),
            x.jsxs(QC, {
              children: [
                x.jsx(JC, { children: 'Error! No tasks' }),
                x.jsx(r_, {}),
                x.jsx(t_, {
                  children: 'Sorry, there was an error obtaining the tasks. Please try again later',
                }),
                x.jsx(ZC, { children: x.jsx(od, { onClick: t, children: 'Close' }) }),
              ],
            }),
          ],
        }),
      ],
    })
  },
  eW = ({ list: e }) => {
    if (!e.length) return x.jsx(J9, {})
    const t = e.reduce((r, n) => {
      var o
      return r[(o = n.status)] ?? (r[o] = []), r[n.status].push(n), r
    }, {})
    return x.jsxs(Co, {
      templateColumns: { base: 'auto', xl: 'repeat(3, 1fr)' },
      gap: '4',
      h: 'full',
      children: [
        x.jsx(Ff, { title: Cn.PENDING, list: t.pending }),
        x.jsx(Ff, { title: Cn.IN_PROCESS, list: t['in process'] }),
        x.jsx(Ff, { title: Cn.COMPLETED, list: t.completed }),
      ],
    })
  },
  tW = () =>
    x.jsxs(Co, {
      templateColumns: { base: 'auto', xl: 'repeat(3, 1fr)' },
      gap: '4',
      h: 'full',
      children: [
        x.jsx(Xl, { minW: '300px', borderRadius: 'md' }),
        x.jsx(Xl, { minW: '300px', borderRadius: 'md' }),
        x.jsx(Xl, { minW: '300px', borderRadius: 'md' }),
      ],
    }),
  rW = () => {
    const { list: e, filtered: t, isLoading: r, fetchTask: n } = Fs(),
      o = t ?? e
    return (
      y.useEffect(() => {
        n()
      }, []),
      x.jsxs(Gr, {
        gap: '2',
        children: [x.jsx(q9, {}), r ? x.jsx(tW, {}) : x.jsx(eW, { list: o })],
      })
    )
  },
  nW = () =>
    x.jsxs(Co, {
      templateColumns: { base: 'auto', lg: 'minmax(350px, 600px) 1fr' },
      h: 'full',
      gap: { base: '8', lg: '0' },
      children: [x.jsx(K9, {}), x.jsx(rW, {})],
    }),
  oW = { email: '', password: '' },
  iW = 'Invalid email o password',
  aW = () => {
    const { login: e, status: t } = nd(),
      { onChange: r } = N_({ initialValues: oW }),
      n = o => {
        o.preventDefault(), e()
      }
    return x.jsx(Co, {
      placeContent: 'center',
      h: '100vh',
      backgroundColor: 'gray.100',
      children: x.jsx('form', {
        onSubmit: n,
        children: x.jsxs(Gr, {
          backgroundColor: 'white',
          px: '6',
          py: '12',
          borderRadius: 'md',
          spacing: '8',
          w: { base: '80', lg: '2xl' },
          children: [
            x.jsx(_r, {
              as: 'h1',
              fontSize: '2xl',
              fontWeight: 'bold',
              textAlign: 'center',
              children: 'Login',
            }),
            x.jsxs(Ti, {
              children: [
                x.jsx(lp, { px: '2', children: 'Email' }),
                x.jsx(Ai, {
                  type: 'email',
                  placeholder: 'correo@correo.com',
                  onChange: o => r('email', o.target.value),
                }),
              ],
            }),
            x.jsxs(Ti, {
              children: [
                x.jsx(lp, { px: '2', children: 'Password' }),
                x.jsx(Ai, { type: 'password', onChange: o => r('password', o.target.value) }),
              ],
            }),
            t === 'failed' && x.jsx(_r, { color: 'red', textAlign: 'center', children: iW }),
            x.jsx(zC, { children: x.jsx(od, { type: 'submit', children: 'Send' }) }),
          ],
        }),
      }),
    })
  },
  sW = () => {
    const { status: e } = nd(),
      t = e === 'authenticated'
    return x.jsx(O8, {
      basename: 'goscrum',
      children: x.jsxs(M8, {
        children: [
          x.jsx(Oo, {
            element: x.jsx(B9, { isAuth: t }),
            children: x.jsx(Oo, { path: '/login', element: x.jsx(aW, {}) }),
          }),
          x.jsxs(Oo, {
            element: x.jsx(L9, { isAuth: t }),
            children: [
              x.jsx(Oo, { path: '/', element: x.jsx(nW, {}) }),
              x.jsx(Oo, { path: '*', element: x.jsx('h1', { children: '404 - Not found' }) }),
            ],
          }),
        ],
      }),
    })
  },
  lW = R_({ task: F9, auth: E9 }),
  uW = d9({ reducer: lW }),
  cW = kI({ colors: { brand: { 300: '#FE5E46', 500: '#FE472C', 700: '#EE3D23' } } })
function dW() {
  return x.jsx(MV, { store: uW, children: x.jsx(Bz, { theme: cW, children: x.jsx(sW, {}) }) })
}
kx(document.getElementById('root')).render(x.jsx(y.StrictMode, { children: x.jsx(dW, {}) }))
