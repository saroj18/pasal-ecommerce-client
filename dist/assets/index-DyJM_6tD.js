import {
  a as G,
  t as Rt,
  b as Et,
  f as At,
  A as ye,
  H as C,
  E as ie,
  g as Ve,
  h as _,
  i as W,
  j as Tt,
  k as be,
  l as oe,
  S as Mt,
} from "./index-E6ebdd6W.js";
const Ct = (t, e, r) => {
    let s,
      n,
      i,
      o = !1;
    const a = async () => {
      n || (n = t());
      try {
        (s = await n), (i = !0), (o = !1);
      } finally {
        n = void 0;
      }
      return s;
    };
    return async (c) => (
      (!i || (c != null && c.forceRefresh)) && (s = await a()), s
    );
  },
  hn = (t) => {
    let e = t.httpHandler;
    return {
      setHttpHandler(r) {
        e = r;
      },
      httpHandler() {
        return e;
      },
      updateHttpClientConfig(r, s) {
        e.updateHttpClientConfig(r, s);
      },
      httpHandlerConfigs() {
        return e.httpHandlerConfigs();
      },
    };
  },
  gn = (t) => ({ httpHandler: t.httpHandler() }),
  ae = "__smithy_context",
  B = (t) =>
    typeof t == "string"
      ? G(t)
      : ArrayBuffer.isView(t)
        ? new Uint8Array(
            t.buffer,
            t.byteOffset,
            t.byteLength / Uint8Array.BYTES_PER_ELEMENT,
          )
        : new Uint8Array(t);
class kt {
  trace() {}
  debug() {}
  info() {}
  warn() {}
  error() {}
}
const I = (t, e) => {
    const r = [];
    if ((t && r.push(t), e)) for (const s of e) r.push(s);
    return r;
  },
  k = (t, e) =>
    `${t || "anonymous"}${e && e.length > 0 ? ` (a.k.a. ${e.join(",")})` : ""}`,
  K = () => {
    let t = [],
      e = [],
      r = !1;
    const s = new Set(),
      n = (d) =>
        d.sort(
          (g, f) =>
            Se[f.step] - Se[g.step] ||
            ve[f.priority || "normal"] - ve[g.priority || "normal"],
        ),
      i = (d) => {
        let g = !1;
        const f = (m) => {
          const w = I(m.name, m.aliases);
          if (w.includes(d)) {
            g = !0;
            for (const p of w) s.delete(p);
            return !1;
          }
          return !0;
        };
        return (t = t.filter(f)), (e = e.filter(f)), g;
      },
      o = (d) => {
        let g = !1;
        const f = (m) => {
          if (m.middleware === d) {
            g = !0;
            for (const w of I(m.name, m.aliases)) s.delete(w);
            return !1;
          }
          return !0;
        };
        return (t = t.filter(f)), (e = e.filter(f)), g;
      },
      a = (d) => {
        var g;
        return (
          t.forEach((f) => {
            d.add(f.middleware, { ...f });
          }),
          e.forEach((f) => {
            d.addRelativeTo(f.middleware, { ...f });
          }),
          (g = d.identifyOnResolve) == null || g.call(d, h.identifyOnResolve()),
          d
        );
      },
      c = (d) => {
        const g = [];
        return (
          d.before.forEach((f) => {
            f.before.length === 0 && f.after.length === 0
              ? g.push(f)
              : g.push(...c(f));
          }),
          g.push(d),
          d.after.reverse().forEach((f) => {
            f.before.length === 0 && f.after.length === 0
              ? g.push(f)
              : g.push(...c(f));
          }),
          g
        );
      },
      l = (d = !1) => {
        const g = [],
          f = [],
          m = {};
        return (
          t.forEach((p) => {
            const y = { ...p, before: [], after: [] };
            for (const S of I(y.name, y.aliases)) m[S] = y;
            g.push(y);
          }),
          e.forEach((p) => {
            const y = { ...p, before: [], after: [] };
            for (const S of I(y.name, y.aliases)) m[S] = y;
            f.push(y);
          }),
          f.forEach((p) => {
            if (p.toMiddleware) {
              const y = m[p.toMiddleware];
              if (y === void 0) {
                if (d) return;
                throw new Error(
                  `${p.toMiddleware} is not found when adding ${k(p.name, p.aliases)} middleware ${p.relation} ${p.toMiddleware}`,
                );
              }
              p.relation === "after" && y.after.push(p),
                p.relation === "before" && y.before.push(p);
            }
          }),
          n(g)
            .map(c)
            .reduce((p, y) => (p.push(...y), p), [])
        );
      },
      h = {
        add: (d, g = {}) => {
          const { name: f, override: m, aliases: w } = g,
            p = { step: "initialize", priority: "normal", middleware: d, ...g },
            y = I(f, w);
          if (y.length > 0) {
            if (y.some((S) => s.has(S))) {
              if (!m) throw new Error(`Duplicate middleware name '${k(f, w)}'`);
              for (const S of y) {
                const M = t.findIndex((F) => {
                  var $;
                  return (
                    F.name === S ||
                    (($ = F.aliases) == null ? void 0 : $.some((X) => X === S))
                  );
                });
                if (M === -1) continue;
                const A = t[M];
                if (A.step !== p.step || p.priority !== A.priority)
                  throw new Error(
                    `"${k(A.name, A.aliases)}" middleware with ${A.priority} priority in ${A.step} step cannot be overridden by "${k(f, w)}" middleware with ${p.priority} priority in ${p.step} step.`,
                  );
                t.splice(M, 1);
              }
            }
            for (const S of y) s.add(S);
          }
          t.push(p);
        },
        addRelativeTo: (d, g) => {
          const { name: f, override: m, aliases: w } = g,
            p = { middleware: d, ...g },
            y = I(f, w);
          if (y.length > 0) {
            if (y.some((S) => s.has(S))) {
              if (!m) throw new Error(`Duplicate middleware name '${k(f, w)}'`);
              for (const S of y) {
                const M = e.findIndex((F) => {
                  var $;
                  return (
                    F.name === S ||
                    (($ = F.aliases) == null ? void 0 : $.some((X) => X === S))
                  );
                });
                if (M === -1) continue;
                const A = e[M];
                if (
                  A.toMiddleware !== p.toMiddleware ||
                  A.relation !== p.relation
                )
                  throw new Error(
                    `"${k(A.name, A.aliases)}" middleware ${A.relation} "${A.toMiddleware}" middleware cannot be overridden by "${k(f, w)}" middleware ${p.relation} "${p.toMiddleware}" middleware.`,
                  );
                e.splice(M, 1);
              }
            }
            for (const S of y) s.add(S);
          }
          e.push(p);
        },
        clone: () => a(K()),
        use: (d) => {
          d.applyToStack(h);
        },
        remove: (d) => (typeof d == "string" ? i(d) : o(d)),
        removeByTag: (d) => {
          let g = !1;
          const f = (m) => {
            const { tags: w, name: p, aliases: y } = m;
            if (w && w.includes(d)) {
              const S = I(p, y);
              for (const M of S) s.delete(M);
              return (g = !0), !1;
            }
            return !0;
          };
          return (t = t.filter(f)), (e = e.filter(f)), g;
        },
        concat: (d) => {
          var f;
          const g = a(K());
          return (
            g.use(d),
            g.identifyOnResolve(
              r ||
                g.identifyOnResolve() ||
                (((f = d.identifyOnResolve) == null ? void 0 : f.call(d)) ??
                  !1),
            ),
            g
          );
        },
        applyToStack: a,
        identify: () =>
          l(!0).map((d) => {
            const g = d.step ?? d.relation + " " + d.toMiddleware;
            return k(d.name, d.aliases) + " - " + g;
          }),
        identifyOnResolve(d) {
          return typeof d == "boolean" && (r = d), r;
        },
        resolve: (d, g) => {
          for (const f of l()
            .map((m) => m.middleware)
            .reverse())
            d = f(d, g);
          return r && console.log(h.identify()), d;
        },
      };
    return h;
  },
  Se = {
    initialize: 5,
    serialize: 4,
    build: 3,
    finalizeRequest: 2,
    deserialize: 1,
  },
  ve = { high: 3, normal: 2, low: 1 };
class pn {
  constructor(e) {
    (this.config = e), (this.middlewareStack = K());
  }
  send(e, r, s) {
    const n = typeof r != "function" ? r : void 0,
      i = typeof r == "function" ? r : s,
      o = n === void 0 && this.config.cacheMiddleware === !0;
    let a;
    if (o) {
      this.handlers || (this.handlers = new WeakMap());
      const c = this.handlers;
      c.has(e.constructor)
        ? (a = c.get(e.constructor))
        : ((a = e.resolveMiddleware(this.middlewareStack, this.config, n)),
          c.set(e.constructor, a));
    } else
      delete this.handlers,
        (a = e.resolveMiddleware(this.middlewareStack, this.config, n));
    if (i)
      a(e)
        .then(
          (c) => i(null, c.output),
          (c) => i(c),
        )
        .catch(() => {});
    else return a(e).then((c) => c.output);
  }
  destroy() {
    var e, r, s;
    (s =
      (r = (e = this.config) == null ? void 0 : e.requestHandler) == null
        ? void 0
        : r.destroy) == null || s.call(r),
      delete this.handlers;
  }
}
function Ot(t, e = "utf-8") {
  return e === "base64" ? Rt(t) : Et(t);
}
function Nt(t, e) {
  return e === "base64" ? P.mutate(At(t)) : P.mutate(G(t));
}
class P extends Uint8Array {
  static fromString(e, r = "utf-8") {
    switch (typeof e) {
      case "string":
        return Nt(e, r);
      default:
        throw new Error(
          `Unsupported conversion from ${typeof e} to Uint8ArrayBlobAdapter.`,
        );
    }
  }
  static mutate(e) {
    return Object.setPrototypeOf(e, P.prototype), e;
  }
  transformToString(e = "utf-8") {
    return Ot(this, e);
  }
}
const It = async (t = new Uint8Array(), e) => {
  if (t instanceof Uint8Array) return P.mutate(t);
  if (!t) return P.mutate(new Uint8Array());
  const r = e.streamCollector(t);
  return P.mutate(await r);
};
class _t {
  constructor() {
    this.middlewareStack = K();
  }
  static classBuilder() {
    return new Pt();
  }
  resolveMiddlewareWithContext(
    e,
    r,
    s,
    {
      middlewareFn: n,
      clientName: i,
      commandName: o,
      inputFilterSensitiveLog: a,
      outputFilterSensitiveLog: c,
      smithyContext: l,
      additionalContext: h,
      CommandCtor: d,
    },
  ) {
    for (const p of n.bind(this)(d, e, r, s)) this.middlewareStack.use(p);
    const g = e.concat(this.middlewareStack),
      { logger: f } = r,
      m = {
        logger: f,
        clientName: i,
        commandName: o,
        inputFilterSensitiveLog: a,
        outputFilterSensitiveLog: c,
        [ae]: { commandInstance: this, ...l },
        ...h,
      },
      { requestHandler: w } = r;
    return g.resolve((p) => w.handle(p.request, s || {}), m);
  }
}
class Pt {
  constructor() {
    (this._init = () => {}),
      (this._ep = {}),
      (this._middlewareFn = () => []),
      (this._commandName = ""),
      (this._clientName = ""),
      (this._additionalContext = {}),
      (this._smithyContext = {}),
      (this._inputFilterSensitiveLog = (e) => e),
      (this._outputFilterSensitiveLog = (e) => e),
      (this._serializer = null),
      (this._deserializer = null);
  }
  init(e) {
    this._init = e;
  }
  ep(e) {
    return (this._ep = e), this;
  }
  m(e) {
    return (this._middlewareFn = e), this;
  }
  s(e, r, s = {}) {
    return (this._smithyContext = { service: e, operation: r, ...s }), this;
  }
  c(e = {}) {
    return (this._additionalContext = e), this;
  }
  n(e, r) {
    return (this._clientName = e), (this._commandName = r), this;
  }
  f(e = (s) => s, r = (s) => s) {
    return (
      (this._inputFilterSensitiveLog = e),
      (this._outputFilterSensitiveLog = r),
      this
    );
  }
  ser(e) {
    return (this._serializer = e), this;
  }
  de(e) {
    return (this._deserializer = e), this;
  }
  build() {
    const e = this;
    let r;
    return (r = class extends _t {
      static getEndpointParameterInstructions() {
        return e._ep;
      }
      constructor(...[s]) {
        super(),
          (this.serialize = e._serializer),
          (this.deserialize = e._deserializer),
          (this.input = s ?? {}),
          e._init(this);
      }
      resolveMiddleware(s, n, i) {
        return this.resolveMiddlewareWithContext(s, n, i, {
          CommandCtor: r,
          middlewareFn: e._middlewareFn,
          clientName: e._clientName,
          commandName: e._commandName,
          inputFilterSensitiveLog: e._inputFilterSensitiveLog,
          outputFilterSensitiveLog: e._outputFilterSensitiveLog,
          smithyContext: e._smithyContext,
          additionalContext: e._additionalContext,
        });
      }
    });
  }
}
const mn = "***SensitiveInformation***";
class Ge extends Error {
  constructor(e) {
    super(e.message),
      Object.setPrototypeOf(this, Ge.prototype),
      (this.name = e.name),
      (this.$fault = e.$fault),
      (this.$metadata = e.$metadata);
  }
}
const xt = (t, e = {}) => {
    Object.entries(e)
      .filter(([, s]) => s !== void 0)
      .forEach(([s, n]) => {
        (t[s] == null || t[s] === "") && (t[s] = n);
      });
    const r = t.message || t.Message || "UnknownError";
    return (t.message = r), delete t.Message, t;
  },
  Dt = ({ output: t, parsedBody: e, exceptionCtor: r, errorCode: s }) => {
    const n = Ft(t),
      i = n.httpStatusCode ? n.httpStatusCode + "" : void 0,
      o = new r({
        name:
          (e == null ? void 0 : e.code) ||
          (e == null ? void 0 : e.Code) ||
          s ||
          i ||
          "UnknownError",
        $fault: "client",
        $metadata: n,
      });
    throw xt(o, e);
  },
  wn =
    (t) =>
    ({ output: e, parsedBody: r, errorCode: s }) => {
      Dt({ output: e, parsedBody: r, exceptionCtor: t, errorCode: s });
    },
  Ft = (t) => ({
    httpStatusCode: t.statusCode,
    requestId:
      t.headers["x-amzn-requestid"] ??
      t.headers["x-amzn-request-id"] ??
      t.headers["x-amz-request-id"],
    extendedRequestId: t.headers["x-amz-id-2"],
    cfId: t.headers["x-amz-cf-id"],
  }),
  yn = (t) => {
    switch (t) {
      case "standard":
        return { retryMode: "standard", connectionTimeout: 3100 };
      case "in-region":
        return { retryMode: "standard", connectionTimeout: 1100 };
      case "cross-region":
        return { retryMode: "standard", connectionTimeout: 3100 };
      case "mobile":
        return { retryMode: "standard", connectionTimeout: 3e4 };
      default:
        return {};
    }
  },
  $t = (t) => {
    const e = [];
    for (const r in ye) {
      const s = ye[r];
      t[s] !== void 0 &&
        e.push({ algorithmId: () => s, checksumConstructor: () => t[s] });
    }
    return {
      _checksumAlgorithms: e,
      addChecksumAlgorithm(r) {
        this._checksumAlgorithms.push(r);
      },
      checksumAlgorithms() {
        return this._checksumAlgorithms;
      },
    };
  },
  Bt = (t) => {
    const e = {};
    return (
      t.checksumAlgorithms().forEach((r) => {
        e[r.algorithmId()] = r.checksumConstructor();
      }),
      e
    );
  },
  Lt = (t) => {
    let e = t.retryStrategy;
    return {
      setRetryStrategy(r) {
        e = r;
      },
      retryStrategy() {
        return e;
      },
    };
  },
  Ut = (t) => {
    const e = {};
    return (e.retryStrategy = t.retryStrategy()), e;
  },
  bn = (t) => ({ ...$t(t), ...Lt(t) }),
  Sn = (t) => ({ ...Bt(t), ...Ut(t) });
function vn(t) {
  return t;
}
const Ht = (t) => (e) => async (r) => {
    if (!C.isInstance(r.request)) return e(r);
    const { request: s } = r,
      { handlerProtocol: n = "" } = t.requestHandler.metadata || {};
    if (n.indexOf("h2") >= 0 && !s.headers[":authority"])
      delete s.headers.host,
        (s.headers[":authority"] = s.hostname + (s.port ? ":" + s.port : ""));
    else if (!s.headers.host) {
      let i = s.hostname;
      s.port != null && (i += `:${s.port}`), (s.headers.host = i);
    }
    return e(r);
  },
  zt = {
    name: "hostHeaderMiddleware",
    step: "build",
    priority: "low",
    tags: ["HOST"],
    override: !0,
  },
  Rn = (t) => ({
    applyToStack: (e) => {
      e.add(Ht(t), zt);
    },
  }),
  qt = () => (t, e) => async (r) => {
    var s, n;
    try {
      const i = await t(r),
        {
          clientName: o,
          commandName: a,
          logger: c,
          dynamoDbDocumentClientOptions: l = {},
        } = e,
        {
          overrideInputFilterSensitiveLog: h,
          overrideOutputFilterSensitiveLog: d,
        } = l,
        g = h ?? e.inputFilterSensitiveLog,
        f = d ?? e.outputFilterSensitiveLog,
        { $metadata: m, ...w } = i.output;
      return (
        (s = c == null ? void 0 : c.info) == null ||
          s.call(c, {
            clientName: o,
            commandName: a,
            input: g(r.input),
            output: f(w),
            metadata: m,
          }),
        i
      );
    } catch (i) {
      const {
          clientName: o,
          commandName: a,
          logger: c,
          dynamoDbDocumentClientOptions: l = {},
        } = e,
        { overrideInputFilterSensitiveLog: h } = l,
        d = h ?? e.inputFilterSensitiveLog;
      throw (
        ((n = c == null ? void 0 : c.error) == null ||
          n.call(c, {
            clientName: o,
            commandName: a,
            input: d(r.input),
            error: i,
            metadata: i.$metadata,
          }),
        i)
      );
    }
  },
  jt = {
    name: "loggerMiddleware",
    tags: ["LOGGER"],
    step: "initialize",
    override: !0,
  },
  En = (t) => ({
    applyToStack: (e) => {
      e.add(qt(), jt);
    },
  });
var Re = {};
const Ee = "X-Amzn-Trace-Id",
  Wt = "AWS_LAMBDA_FUNCTION_NAME",
  Vt = "_X_AMZN_TRACE_ID",
  Gt = (t) => (e) => async (r) => {
    const { request: s } = r;
    if (
      !C.isInstance(s) ||
      t.runtime !== "node" ||
      s.headers.hasOwnProperty(Ee)
    )
      return e(r);
    const n = Re[Wt],
      i = Re[Vt],
      o = (a) => typeof a == "string" && a.length > 0;
    return o(n) && o(i) && (s.headers[Ee] = i), e({ ...r, request: s });
  },
  Kt = {
    step: "build",
    tags: ["RECURSION_DETECTION"],
    name: "recursionDetectionMiddleware",
    override: !0,
    priority: "low",
  },
  An = (t) => ({
    applyToStack: (e) => {
      e.add(Gt(t), Kt);
    },
  });
function Tn(t) {
  return {
    ...t,
    customUserAgent:
      typeof t.customUserAgent == "string"
        ? [[t.customUserAgent]]
        : t.customUserAgent,
  };
}
class Mn {
  constructor({ size: e, params: r }) {
    (this.data = new Map()),
      (this.parameters = []),
      (this.capacity = e ?? 50),
      r && (this.parameters = r);
  }
  get(e, r) {
    const s = this.hash(e);
    if (s === !1) return r();
    if (!this.data.has(s)) {
      if (this.data.size > this.capacity + 10) {
        const n = this.data.keys();
        let i = 0;
        for (;;) {
          const { value: o, done: a } = n.next();
          if ((this.data.delete(o), a || ++i > 10)) break;
        }
      }
      this.data.set(s, r());
    }
    return this.data.get(s);
  }
  size() {
    return this.data.size;
  }
  hash(e) {
    let r = "";
    const { parameters: s } = this;
    if (s.length === 0) return !1;
    for (const n of s) {
      const i = String(e[n] ?? "");
      if (i.includes("|;")) return !1;
      r += i + "|;";
    }
    return r;
  }
}
const Qt = new RegExp(
    "^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$",
  ),
  Ke = (t) => Qt.test(t) || (t.startsWith("[") && t.endsWith("]")),
  Xt = new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"),
  he = (t, e = !1) => {
    if (!e) return Xt.test(t);
    const r = t.split(".");
    for (const s of r) if (!he(s)) return !1;
    return !0;
  },
  ce = {},
  U = "endpoints";
function N(t) {
  return typeof t != "object" || t == null
    ? t
    : "ref" in t
      ? `$${N(t.ref)}`
      : "fn" in t
        ? `${t.fn}(${(t.argv || []).map(N).join(", ")})`
        : JSON.stringify(t, null, 2);
}
class T extends Error {
  constructor(e) {
    super(e), (this.name = "EndpointError");
  }
}
const Zt = (t, e) => t === e,
  Yt = (t) => {
    const e = t.split("."),
      r = [];
    for (const s of e) {
      const n = s.indexOf("[");
      if (n !== -1) {
        if (s.indexOf("]") !== s.length - 1)
          throw new T(`Path: '${t}' does not end with ']'`);
        const i = s.slice(n + 1, -1);
        if (Number.isNaN(parseInt(i)))
          throw new T(`Invalid array index: '${i}' in path: '${t}'`);
        n !== 0 && r.push(s.slice(0, n)), r.push(i);
      } else r.push(s);
    }
    return r;
  },
  Qe = (t, e) =>
    Yt(e).reduce((r, s) => {
      if (typeof r != "object")
        throw new T(
          `Index '${s}' in '${e}' not found in '${JSON.stringify(t)}'`,
        );
      return Array.isArray(r) ? r[parseInt(s)] : r[s];
    }, t),
  Jt = (t) => t != null,
  er = (t) => !t,
  Z = { [ie.HTTP]: 80, [ie.HTTPS]: 443 },
  tr = (t) => {
    const e = (() => {
      try {
        if (t instanceof URL) return t;
        if (typeof t == "object" && "hostname" in t) {
          const {
              hostname: g,
              port: f,
              protocol: m = "",
              path: w = "",
              query: p = {},
            } = t,
            y = new URL(`${m}//${g}${f ? `:${f}` : ""}${w}`);
          return (
            (y.search = Object.entries(p)
              .map(([S, M]) => `${S}=${M}`)
              .join("&")),
            y
          );
        }
        return new URL(t);
      } catch {
        return null;
      }
    })();
    if (!e)
      return (
        console.error(`Unable to parse ${JSON.stringify(t)} as a whatwg URL.`),
        null
      );
    const r = e.href,
      { host: s, hostname: n, pathname: i, protocol: o, search: a } = e;
    if (a) return null;
    const c = o.slice(0, -1);
    if (!Object.values(ie).includes(c)) return null;
    const l = Ke(n),
      h =
        r.includes(`${s}:${Z[c]}`) ||
        (typeof t == "string" && t.includes(`${s}:${Z[c]}`)),
      d = `${s}${h ? `:${Z[c]}` : ""}`;
    return {
      scheme: c,
      authority: d,
      path: i,
      normalizedPath: i.endsWith("/") ? i : `${i}/`,
      isIp: l,
    };
  },
  rr = (t, e) => t === e,
  sr = (t, e, r, s) =>
    e >= r || t.length < r
      ? null
      : s
        ? t.substring(t.length - r, t.length - e)
        : t.substring(e, r),
  nr = (t) =>
    encodeURIComponent(t).replace(
      /[!*'()]/g,
      (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`,
    ),
  ir = {
    booleanEquals: Zt,
    getAttr: Qe,
    isSet: Jt,
    isValidHostLabel: he,
    not: er,
    parseURL: tr,
    stringEquals: rr,
    substring: sr,
    uriEncode: nr,
  },
  Xe = (t, e) => {
    const r = [],
      s = { ...e.endpointParams, ...e.referenceRecord };
    let n = 0;
    for (; n < t.length; ) {
      const i = t.indexOf("{", n);
      if (i === -1) {
        r.push(t.slice(n));
        break;
      }
      r.push(t.slice(n, i));
      const o = t.indexOf("}", i);
      if (o === -1) {
        r.push(t.slice(i));
        break;
      }
      t[i + 1] === "{" &&
        t[o + 1] === "}" &&
        (r.push(t.slice(i + 1, o)), (n = o + 2));
      const a = t.substring(i + 1, o);
      if (a.includes("#")) {
        const [c, l] = a.split("#");
        r.push(Qe(s[c], l));
      } else r.push(s[a]);
      n = o + 1;
    }
    return r.join("");
  },
  or = ({ ref: t }, e) => ({ ...e.endpointParams, ...e.referenceRecord })[t],
  Q = (t, e, r) => {
    if (typeof t == "string") return Xe(t, r);
    if (t.fn) return Ze(t, r);
    if (t.ref) return or(t, r);
    throw new T(`'${e}': ${String(t)} is not a string, function or reference.`);
  },
  Ze = ({ fn: t, argv: e }, r) => {
    const s = e.map((i) =>
        ["boolean", "number"].includes(typeof i) ? i : Q(i, "arg", r),
      ),
      n = t.split(".");
    return n[0] in ce && n[1] != null ? ce[n[0]][n[1]](...s) : ir[t](...s);
  },
  ar = ({ assign: t, ...e }, r) => {
    var n, i;
    if (t && t in r.referenceRecord)
      throw new T(`'${t}' is already defined in Reference Record.`);
    const s = Ze(e, r);
    return (
      (i = (n = r.logger) == null ? void 0 : n.debug) == null ||
        i.call(n, `${U} evaluateCondition: ${N(e)} = ${N(s)}`),
      {
        result: s === "" ? !0 : !!s,
        ...(t != null && { toAssign: { name: t, value: s } }),
      }
    );
  },
  ge = (t = [], e) => {
    var s, n;
    const r = {};
    for (const i of t) {
      const { result: o, toAssign: a } = ar(i, {
        ...e,
        referenceRecord: { ...e.referenceRecord, ...r },
      });
      if (!o) return { result: o };
      a &&
        ((r[a.name] = a.value),
        (n = (s = e.logger) == null ? void 0 : s.debug) == null ||
          n.call(s, `${U} assign: ${a.name} := ${N(a.value)}`));
    }
    return { result: !0, referenceRecord: r };
  },
  cr = (t, e) =>
    Object.entries(t).reduce(
      (r, [s, n]) => ({
        ...r,
        [s]: n.map((i) => {
          const o = Q(i, "Header value entry", e);
          if (typeof o != "string")
            throw new T(`Header '${s}' value '${o}' is not a string`);
          return o;
        }),
      }),
      {},
    ),
  Ye = (t, e) => {
    if (Array.isArray(t)) return t.map((r) => Ye(r, e));
    switch (typeof t) {
      case "string":
        return Xe(t, e);
      case "object":
        if (t === null) throw new T(`Unexpected endpoint property: ${t}`);
        return Je(t, e);
      case "boolean":
        return t;
      default:
        throw new T(`Unexpected endpoint property type: ${typeof t}`);
    }
  },
  Je = (t, e) =>
    Object.entries(t).reduce((r, [s, n]) => ({ ...r, [s]: Ye(n, e) }), {}),
  ur = (t, e) => {
    const r = Q(t, "Endpoint URL", e);
    if (typeof r == "string")
      try {
        return new URL(r);
      } catch (s) {
        throw (console.error(`Failed to construct URL with ${r}`, s), s);
      }
    throw new T(`Endpoint URL must be a string, got ${typeof r}`);
  },
  dr = (t, e) => {
    var h, d;
    const { conditions: r, endpoint: s } = t,
      { result: n, referenceRecord: i } = ge(r, e);
    if (!n) return;
    const o = { ...e, referenceRecord: { ...e.referenceRecord, ...i } },
      { url: a, properties: c, headers: l } = s;
    return (
      (d = (h = e.logger) == null ? void 0 : h.debug) == null ||
        d.call(h, `${U} Resolving endpoint from template: ${N(s)}`),
      {
        ...(l != null && { headers: cr(l, o) }),
        ...(c != null && { properties: Je(c, o) }),
        url: ur(a, o),
      }
    );
  },
  lr = (t, e) => {
    const { conditions: r, error: s } = t,
      { result: n, referenceRecord: i } = ge(r, e);
    if (n)
      throw new T(
        Q(s, "Error", {
          ...e,
          referenceRecord: { ...e.referenceRecord, ...i },
        }),
      );
  },
  fr = (t, e) => {
    const { conditions: r, rules: s } = t,
      { result: n, referenceRecord: i } = ge(r, e);
    if (n)
      return et(s, { ...e, referenceRecord: { ...e.referenceRecord, ...i } });
  },
  et = (t, e) => {
    for (const r of t)
      if (r.type === "endpoint") {
        const s = dr(r, e);
        if (s) return s;
      } else if (r.type === "error") lr(r, e);
      else if (r.type === "tree") {
        const s = fr(r, e);
        if (s) return s;
      } else throw new T(`Unknown endpoint rule: ${r}`);
    throw new T("Rules evaluation failed");
  },
  Cn = (t, e) => {
    var l, h, d, g;
    const { endpointParams: r, logger: s } = e,
      { parameters: n, rules: i } = t;
    (h = (l = e.logger) == null ? void 0 : l.debug) == null ||
      h.call(l, `${U} Initial EndpointParams: ${N(r)}`);
    const o = Object.entries(n)
      .filter(([, f]) => f.default != null)
      .map(([f, m]) => [f, m.default]);
    if (o.length > 0) for (const [f, m] of o) r[f] = r[f] ?? m;
    const a = Object.entries(n)
      .filter(([, f]) => f.required)
      .map(([f]) => f);
    for (const f of a)
      if (r[f] == null) throw new T(`Missing required parameter: '${f}'`);
    const c = et(i, { endpointParams: r, logger: s, referenceRecord: {} });
    return (
      (g = (d = e.logger) == null ? void 0 : d.debug) == null ||
        g.call(d, `${U} Resolved endpoint: ${N(c)}`),
      c
    );
  },
  tt = (t, e = !1) => {
    if (e) {
      for (const r of t.split(".")) if (!tt(r)) return !1;
      return !0;
    }
    return !(
      !he(t) ||
      t.length < 3 ||
      t.length > 63 ||
      t !== t.toLowerCase() ||
      Ke(t)
    );
  },
  Ae = ":",
  hr = "/",
  gr = (t) => {
    const e = t.split(Ae);
    if (e.length < 6) return null;
    const [r, s, n, i, o, ...a] = e;
    if (r !== "arn" || s === "" || n === "" || a.join(Ae) === "") return null;
    const c = a.map((l) => l.split(hr)).flat();
    return { partition: s, service: n, region: i, accountId: o, resourceId: c };
  },
  pr = [
    {
      id: "aws",
      outputs: {
        dnsSuffix: "amazonaws.com",
        dualStackDnsSuffix: "api.aws",
        implicitGlobalRegion: "us-east-1",
        name: "aws",
        supportsDualStack: !0,
        supportsFIPS: !0,
      },
      regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
      regions: {
        "af-south-1": { description: "Africa (Cape Town)" },
        "ap-east-1": { description: "Asia Pacific (Hong Kong)" },
        "ap-northeast-1": { description: "Asia Pacific (Tokyo)" },
        "ap-northeast-2": { description: "Asia Pacific (Seoul)" },
        "ap-northeast-3": { description: "Asia Pacific (Osaka)" },
        "ap-south-1": { description: "Asia Pacific (Mumbai)" },
        "ap-south-2": { description: "Asia Pacific (Hyderabad)" },
        "ap-southeast-1": { description: "Asia Pacific (Singapore)" },
        "ap-southeast-2": { description: "Asia Pacific (Sydney)" },
        "ap-southeast-3": { description: "Asia Pacific (Jakarta)" },
        "ap-southeast-4": { description: "Asia Pacific (Melbourne)" },
        "ap-southeast-5": { description: "Asia Pacific (Malaysia)" },
        "aws-global": { description: "AWS Standard global region" },
        "ca-central-1": { description: "Canada (Central)" },
        "ca-west-1": { description: "Canada West (Calgary)" },
        "eu-central-1": { description: "Europe (Frankfurt)" },
        "eu-central-2": { description: "Europe (Zurich)" },
        "eu-north-1": { description: "Europe (Stockholm)" },
        "eu-south-1": { description: "Europe (Milan)" },
        "eu-south-2": { description: "Europe (Spain)" },
        "eu-west-1": { description: "Europe (Ireland)" },
        "eu-west-2": { description: "Europe (London)" },
        "eu-west-3": { description: "Europe (Paris)" },
        "il-central-1": { description: "Israel (Tel Aviv)" },
        "me-central-1": { description: "Middle East (UAE)" },
        "me-south-1": { description: "Middle East (Bahrain)" },
        "sa-east-1": { description: "South America (Sao Paulo)" },
        "us-east-1": { description: "US East (N. Virginia)" },
        "us-east-2": { description: "US East (Ohio)" },
        "us-west-1": { description: "US West (N. California)" },
        "us-west-2": { description: "US West (Oregon)" },
      },
    },
    {
      id: "aws-cn",
      outputs: {
        dnsSuffix: "amazonaws.com.cn",
        dualStackDnsSuffix: "api.amazonwebservices.com.cn",
        implicitGlobalRegion: "cn-northwest-1",
        name: "aws-cn",
        supportsDualStack: !0,
        supportsFIPS: !0,
      },
      regionRegex: "^cn\\-\\w+\\-\\d+$",
      regions: {
        "aws-cn-global": { description: "AWS China global region" },
        "cn-north-1": { description: "China (Beijing)" },
        "cn-northwest-1": { description: "China (Ningxia)" },
      },
    },
    {
      id: "aws-us-gov",
      outputs: {
        dnsSuffix: "amazonaws.com",
        dualStackDnsSuffix: "api.aws",
        implicitGlobalRegion: "us-gov-west-1",
        name: "aws-us-gov",
        supportsDualStack: !0,
        supportsFIPS: !0,
      },
      regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
      regions: {
        "aws-us-gov-global": { description: "AWS GovCloud (US) global region" },
        "us-gov-east-1": { description: "AWS GovCloud (US-East)" },
        "us-gov-west-1": { description: "AWS GovCloud (US-West)" },
      },
    },
    {
      id: "aws-iso",
      outputs: {
        dnsSuffix: "c2s.ic.gov",
        dualStackDnsSuffix: "c2s.ic.gov",
        implicitGlobalRegion: "us-iso-east-1",
        name: "aws-iso",
        supportsDualStack: !1,
        supportsFIPS: !0,
      },
      regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
      regions: {
        "aws-iso-global": { description: "AWS ISO (US) global region" },
        "us-iso-east-1": { description: "US ISO East" },
        "us-iso-west-1": { description: "US ISO WEST" },
      },
    },
    {
      id: "aws-iso-b",
      outputs: {
        dnsSuffix: "sc2s.sgov.gov",
        dualStackDnsSuffix: "sc2s.sgov.gov",
        implicitGlobalRegion: "us-isob-east-1",
        name: "aws-iso-b",
        supportsDualStack: !1,
        supportsFIPS: !0,
      },
      regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
      regions: {
        "aws-iso-b-global": { description: "AWS ISOB (US) global region" },
        "us-isob-east-1": { description: "US ISOB East (Ohio)" },
      },
    },
    {
      id: "aws-iso-e",
      outputs: {
        dnsSuffix: "cloud.adc-e.uk",
        dualStackDnsSuffix: "cloud.adc-e.uk",
        implicitGlobalRegion: "eu-isoe-west-1",
        name: "aws-iso-e",
        supportsDualStack: !1,
        supportsFIPS: !0,
      },
      regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
      regions: { "eu-isoe-west-1": { description: "EU ISOE West" } },
    },
    {
      id: "aws-iso-f",
      outputs: {
        dnsSuffix: "csp.hci.ic.gov",
        dualStackDnsSuffix: "csp.hci.ic.gov",
        implicitGlobalRegion: "us-isof-south-1",
        name: "aws-iso-f",
        supportsDualStack: !1,
        supportsFIPS: !0,
      },
      regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
      regions: {},
    },
  ],
  mr = "1.1",
  wr = { partitions: pr, version: mr };
let yr = wr;
const br = (t) => {
    const { partitions: e } = yr;
    for (const s of e) {
      const { regions: n, outputs: i } = s;
      for (const [o, a] of Object.entries(n))
        if (o === t) return { ...i, ...a };
    }
    for (const s of e) {
      const { regionRegex: n, outputs: i } = s;
      if (new RegExp(n).test(t)) return { ...i };
    }
    const r = e.find((s) => s.id === "aws");
    if (!r)
      throw new Error(
        "Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.",
      );
    return { ...r.outputs };
  },
  Sr = { isVirtualHostableS3Bucket: tt, parseArn: gr, partition: br };
ce.aws = Sr;
const Te = "user-agent",
  Y = "x-amz-user-agent",
  Me = " ",
  J = "/",
  vr = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g,
  Rr = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g,
  Ce = "-",
  Er = (t) => (e, r) => async (s) => {
    var d, g;
    const { request: n } = s;
    if (!C.isInstance(n)) return e(s);
    const { headers: i } = n,
      o =
        ((d = r == null ? void 0 : r.userAgent) == null ? void 0 : d.map(ee)) ||
        [],
      a = (await t.defaultUserAgentProvider()).map(ee),
      c =
        ((g = t == null ? void 0 : t.customUserAgent) == null
          ? void 0
          : g.map(ee)) || [],
      l = [].concat([...a, ...o, ...c]).join(Me),
      h = [...a.filter((f) => f.startsWith("aws-sdk-")), ...c].join(Me);
    return (
      t.runtime !== "browser"
        ? (h && (i[Y] = i[Y] ? `${i[Te]} ${h}` : h), (i[Te] = l))
        : (i[Y] = l),
      e({ ...s, request: n })
    );
  },
  ee = (t) => {
    var o;
    const e = t[0]
        .split(J)
        .map((a) => a.replace(vr, Ce))
        .join(J),
      r = (o = t[1]) == null ? void 0 : o.replace(Rr, Ce),
      s = e.indexOf(J),
      n = e.substring(0, s);
    let i = e.substring(s + 1);
    return (
      n === "api" && (i = i.toLowerCase()),
      [n, i, r]
        .filter((a) => a && a.length > 0)
        .reduce((a, c, l) => {
          switch (l) {
            case 0:
              return c;
            case 1:
              return `${a}/${c}`;
            default:
              return `${a}#${c}`;
          }
        }, "")
    );
  },
  Ar = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: ["SET_USER_AGENT", "USER_AGENT"],
    override: !0,
  },
  kn = (t) => ({
    applyToStack: (e) => {
      e.add(Er(t), Ar);
    },
  });
var ke;
(function (t) {
  (t.ENV = "env"), (t.CONFIG = "shared config entry");
})(ke || (ke = {}));
const On = !1,
  Nn = !1,
  pe = (t) => t[ae] || (t[ae] = {}),
  x = (t) => {
    if (typeof t == "function") return t;
    const e = Promise.resolve(t);
    return () => e;
  },
  rt = (t) =>
    typeof t == "string" && (t.startsWith("fips-") || t.endsWith("-fips")),
  Oe = (t) =>
    rt(t)
      ? ["fips-aws-global", "aws-fips"].includes(t)
        ? "us-east-1"
        : t.replace(/fips-(dkr-|prod-)?|-fips/, "")
      : t,
  In = (t) => {
    const { region: e, useFipsEndpoint: r } = t;
    if (!e) throw new Error("Region is missing");
    return {
      ...t,
      region: async () => {
        if (typeof e == "string") return Oe(e);
        const s = await e();
        return Oe(s);
      },
      useFipsEndpoint: async () => {
        const s = typeof e == "string" ? e : await e();
        return rt(s) ? !0 : typeof r != "function" ? Promise.resolve(!!r) : r();
      },
    };
  };
function Tr(t) {
  const e = new Map();
  for (const r of t) e.set(r.schemeId, r);
  return e;
}
const Mr = (t, e) => (r, s) => async (n) => {
    var l;
    const i = t.httpAuthSchemeProvider(
        await e.httpAuthSchemeParametersProvider(t, s, n.input),
      ),
      o = Tr(t.httpAuthSchemes),
      a = pe(s),
      c = [];
    for (const h of i) {
      const d = o.get(h.schemeId);
      if (!d) {
        c.push(
          `HttpAuthScheme \`${h.schemeId}\` was not enabled for this service.`,
        );
        continue;
      }
      const g = d.identityProvider(await e.identityProviderConfigProvider(t));
      if (!g) {
        c.push(
          `HttpAuthScheme \`${h.schemeId}\` did not have an IdentityProvider configured.`,
        );
        continue;
      }
      const { identityProperties: f = {}, signingProperties: m = {} } =
        ((l = h.propertiesExtractor) == null ? void 0 : l.call(h, t, s)) || {};
      (h.identityProperties = Object.assign(h.identityProperties || {}, f)),
        (h.signingProperties = Object.assign(h.signingProperties || {}, m)),
        (a.selectedHttpAuthScheme = {
          httpAuthOption: h,
          identity: await g(h.identityProperties),
          signer: d.signer,
        });
      break;
    }
    if (!a.selectedHttpAuthScheme)
      throw new Error(
        c.join(`
`),
      );
    return r(n);
  },
  Cr = async (t) => {
    const e = (t == null ? void 0 : t.Bucket) || "";
    if (
      (typeof t.Bucket == "string" &&
        (t.Bucket = e
          .replace(/#/g, encodeURIComponent("#"))
          .replace(/\?/g, encodeURIComponent("?"))),
      _r(e))
    ) {
      if (t.ForcePathStyle === !0)
        throw new Error(
          "Path-style addressing cannot be used with ARN buckets",
        );
    } else
      (!Ir(e) ||
        (e.indexOf(".") !== -1 && !String(t.Endpoint).startsWith("http:")) ||
        e.toLowerCase() !== e ||
        e.length < 3) &&
        (t.ForcePathStyle = !0);
    return (
      t.DisableMultiRegionAccessPoints &&
        ((t.disableMultiRegionAccessPoints = !0), (t.DisableMRAP = !0)),
      t
    );
  },
  kr = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/,
  Or = /(\d+\.){3}\d+/,
  Nr = /\.\./,
  Ir = (t) => kr.test(t) && !Or.test(t) && !Nr.test(t),
  _r = (t) => {
    const [e, r, s, , , n] = t.split(":"),
      i = e === "arn" && t.split(":").length >= 6,
      o = !!(i && r && s && n);
    if (i && !o) throw new Error(`Invalid ARN: ${t} was an invalid ARN.`);
    return o;
  },
  Pr = (t, e, r) => {
    const s = async () => {
      const n = r[t] ?? r[e];
      return typeof n == "function" ? n() : n;
    };
    return t === "credentialScope" || e === "CredentialScope"
      ? async () => {
          const n =
            typeof r.credentials == "function"
              ? await r.credentials()
              : r.credentials;
          return (
            (n == null ? void 0 : n.credentialScope) ??
            (n == null ? void 0 : n.CredentialScope)
          );
        }
      : t === "accountId" || e === "AccountId"
        ? async () => {
            const n =
              typeof r.credentials == "function"
                ? await r.credentials()
                : r.credentials;
            return (
              (n == null ? void 0 : n.accountId) ??
              (n == null ? void 0 : n.AccountId)
            );
          }
        : t === "endpoint" || e === "endpoint"
          ? async () => {
              const n = await s();
              if (n && typeof n == "object") {
                if ("url" in n) return n.url.href;
                if ("hostname" in n) {
                  const { protocol: i, hostname: o, port: a, path: c } = n;
                  return `${i}//${o}${a ? ":" + a : ""}${c}`;
                }
              }
              return n;
            }
          : s;
  },
  st = async (t) => {};
function xr(t) {
  const e = {};
  if (((t = t.replace(/^\?/, "")), t))
    for (const r of t.split("&")) {
      let [s, n = null] = r.split("=");
      (s = decodeURIComponent(s)),
        n && (n = decodeURIComponent(n)),
        s in e
          ? Array.isArray(e[s])
            ? e[s].push(n)
            : (e[s] = [e[s], n])
          : (e[s] = n);
    }
  return e;
}
const ue = (t) => {
    if (typeof t == "string") return ue(new URL(t));
    const { hostname: e, pathname: r, port: s, protocol: n, search: i } = t;
    let o;
    return (
      i && (o = xr(i)),
      {
        hostname: e,
        port: s ? parseInt(s) : void 0,
        protocol: n,
        path: r,
        query: o,
      }
    );
  },
  nt = (t) => (typeof t == "object" ? ("url" in t ? ue(t.url) : t) : ue(t)),
  Dr = async (t, e, r, s) => {
    if (!r.endpoint) {
      let o;
      r.serviceConfiguredEndpoint
        ? (o = await r.serviceConfiguredEndpoint())
        : (o = await st(r.serviceId)),
        o && (r.endpoint = () => Promise.resolve(nt(o)));
    }
    const n = await Fr(t, e, r);
    if (typeof r.endpointProvider != "function")
      throw new Error("config.endpointProvider is not set.");
    return r.endpointProvider(n, s);
  },
  Fr = async (t, e, r) => {
    var i;
    const s = {},
      n =
        ((i = e == null ? void 0 : e.getEndpointParameterInstructions) == null
          ? void 0
          : i.call(e)) || {};
    for (const [o, a] of Object.entries(n))
      switch (a.type) {
        case "staticContextParams":
          s[o] = a.value;
          break;
        case "contextParams":
          s[o] = t[a.name];
          break;
        case "clientContextParams":
        case "builtInParams":
          s[o] = await Pr(a.name, o, r)();
          break;
        default:
          throw new Error(
            "Unrecognized endpoint parameter instruction: " + JSON.stringify(a),
          );
      }
    return (
      Object.keys(n).length === 0 && Object.assign(s, r),
      String(r.serviceId).toLowerCase() === "s3" && (await Cr(s)),
      s
    );
  },
  $r =
    ({ config: t, instructions: e }) =>
    (r, s) =>
    async (n) => {
      var a, c, l;
      const i = await Dr(
        n.input,
        {
          getEndpointParameterInstructions() {
            return e;
          },
        },
        { ...t },
        s,
      );
      (s.endpointV2 = i),
        (s.authSchemes = (a = i.properties) == null ? void 0 : a.authSchemes);
      const o = (c = s.authSchemes) == null ? void 0 : c[0];
      if (o) {
        (s.signing_region = o.signingRegion),
          (s.signing_service = o.signingName);
        const h = pe(s),
          d =
            (l = h == null ? void 0 : h.selectedHttpAuthScheme) == null
              ? void 0
              : l.httpAuthOption;
        d &&
          (d.signingProperties = Object.assign(
            d.signingProperties || {},
            {
              signing_region: o.signingRegion,
              signingRegion: o.signingRegion,
              signing_service: o.signingName,
              signingName: o.signingName,
              signingRegionSet: o.signingRegionSet,
            },
            o.properties,
          ));
      }
      return r({ ...n });
    },
  Br = (t, e) => (r) => async (s) => {
    const { response: n } = await r(s);
    try {
      const i = await e(n, t);
      return { response: n, output: i };
    } catch (i) {
      if (
        (Object.defineProperty(i, "$response", { value: n }),
        !("$metadata" in i))
      ) {
        const o =
          "Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.";
        (i.message +=
          `
  ` + o),
          typeof i.$responseBodyText < "u" &&
            i.$response &&
            (i.$response.body = i.$responseBodyText);
      }
      throw i;
    }
  },
  Lr = (t, e) => (r, s) => async (n) => {
    var a;
    const i =
      (a = s.endpointV2) != null && a.url && t.urlParser
        ? async () => t.urlParser(s.endpointV2.url)
        : t.endpoint;
    if (!i) throw new Error("No valid endpoint provider available.");
    const o = await e(n.input, { ...t, endpoint: i });
    return r({ ...n, request: o });
  },
  Ur = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: ["DESERIALIZER"],
    override: !0,
  },
  me = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: ["SERIALIZER"],
    override: !0,
  };
function _n(t, e, r) {
  return {
    applyToStack: (s) => {
      s.add(Br(t, r), Ur), s.add(Lr(t, e), me);
    },
  };
}
const it = {
    step: "serialize",
    tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
    name: "endpointV2Middleware",
    override: !0,
    relation: "before",
    toMiddleware: me.name,
  },
  Pn = (t, e) => ({
    applyToStack: (r) => {
      r.addRelativeTo($r({ config: t, instructions: e }), it);
    },
  }),
  xn = (t) => {
    const e = t.tls ?? !0,
      { endpoint: r } = t,
      s = r != null ? async () => nt(await x(r)()) : void 0,
      i = {
        ...t,
        endpoint: s,
        tls: e,
        isCustomEndpoint: !!r,
        useDualstackEndpoint: x(t.useDualstackEndpoint ?? !1),
        useFipsEndpoint: x(t.useFipsEndpoint ?? !1),
      };
    let o;
    return (
      (i.serviceConfiguredEndpoint = async () => (
        t.serviceId && !o && (o = st(t.serviceId)), o
      )),
      i
    );
  },
  Hr = {
    step: "serialize",
    tags: ["HTTP_AUTH_SCHEME"],
    name: "httpAuthSchemeMiddleware",
    override: !0,
    relation: "before",
    toMiddleware: it.name,
  },
  Dn = (
    t,
    { httpAuthSchemeParametersProvider: e, identityProviderConfigProvider: r },
  ) => ({
    applyToStack: (s) => {
      s.addRelativeTo(
        Mr(t, {
          httpAuthSchemeParametersProvider: e,
          identityProviderConfigProvider: r,
        }),
        Hr,
      );
    },
  });
me.name;
const zr = (t) => (e) => {
    throw e;
  },
  qr = (t, e) => {},
  jr = (t) => (e, r) => async (s) => {
    if (!C.isInstance(s.request)) return e(s);
    const i = pe(r).selectedHttpAuthScheme;
    if (!i)
      throw new Error("No HttpAuthScheme was selected: unable to sign request");
    const {
        httpAuthOption: { signingProperties: o = {} },
        identity: a,
        signer: c,
      } = i,
      l = await e({ ...s, request: await c.sign(s.request, a, o) }).catch(
        (c.errorHandler || zr)(o),
      );
    return (c.successHandler || qr)(l.response, o), l;
  };
var D;
(function (t) {
  (t.STANDARD = "standard"), (t.ADAPTIVE = "adaptive");
})(D || (D = {}));
const de = 3,
  Fn = D.STANDARD,
  Wr = [
    "BandwidthLimitExceeded",
    "EC2ThrottledException",
    "LimitExceededException",
    "PriorRequestNotComplete",
    "ProvisionedThroughputExceededException",
    "RequestLimitExceeded",
    "RequestThrottled",
    "RequestThrottledException",
    "SlowDown",
    "ThrottledException",
    "Throttling",
    "ThrottlingException",
    "TooManyRequestsException",
    "TransactionInProgressException",
  ],
  Vr = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"],
  Gr = [500, 502, 503, 504],
  Kr = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"],
  Qr = (t) => {
    var e;
    return (e = t.$metadata) == null ? void 0 : e.clockSkewCorrected;
  },
  ot = (t) => {
    var e, r;
    return (
      ((e = t.$metadata) == null ? void 0 : e.httpStatusCode) === 429 ||
      Wr.includes(t.name) ||
      ((r = t.$retryable) == null ? void 0 : r.throttling) == !0
    );
  },
  at = (t) => {
    var e;
    return (
      Qr(t) ||
      Vr.includes(t.name) ||
      Kr.includes((t == null ? void 0 : t.code) || "") ||
      Gr.includes(((e = t.$metadata) == null ? void 0 : e.httpStatusCode) || 0)
    );
  },
  Xr = (t) => {
    var e;
    if (((e = t.$metadata) == null ? void 0 : e.httpStatusCode) !== void 0) {
      const r = t.$metadata.httpStatusCode;
      return 500 <= r && r <= 599 && !at(t);
    }
    return !1;
  };
class Zr {
  constructor(e) {
    (this.currentCapacity = 0),
      (this.enabled = !1),
      (this.lastMaxRate = 0),
      (this.measuredTxRate = 0),
      (this.requestCount = 0),
      (this.lastTimestamp = 0),
      (this.timeWindow = 0),
      (this.beta = (e == null ? void 0 : e.beta) ?? 0.7),
      (this.minCapacity = (e == null ? void 0 : e.minCapacity) ?? 1),
      (this.minFillRate = (e == null ? void 0 : e.minFillRate) ?? 0.5),
      (this.scaleConstant = (e == null ? void 0 : e.scaleConstant) ?? 0.4),
      (this.smooth = (e == null ? void 0 : e.smooth) ?? 0.8);
    const r = this.getCurrentTimeInSeconds();
    (this.lastThrottleTime = r),
      (this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds())),
      (this.fillRate = this.minFillRate),
      (this.maxCapacity = this.minCapacity);
  }
  getCurrentTimeInSeconds() {
    return Date.now() / 1e3;
  }
  async getSendToken() {
    return this.acquireTokenBucket(1);
  }
  async acquireTokenBucket(e) {
    if (this.enabled) {
      if ((this.refillTokenBucket(), e > this.currentCapacity)) {
        const r = ((e - this.currentCapacity) / this.fillRate) * 1e3;
        await new Promise((s) => setTimeout(s, r));
      }
      this.currentCapacity = this.currentCapacity - e;
    }
  }
  refillTokenBucket() {
    const e = this.getCurrentTimeInSeconds();
    if (!this.lastTimestamp) {
      this.lastTimestamp = e;
      return;
    }
    const r = (e - this.lastTimestamp) * this.fillRate;
    (this.currentCapacity = Math.min(
      this.maxCapacity,
      this.currentCapacity + r,
    )),
      (this.lastTimestamp = e);
  }
  updateClientSendingRate(e) {
    let r;
    if ((this.updateMeasuredRate(), ot(e))) {
      const n = this.enabled
        ? Math.min(this.measuredTxRate, this.fillRate)
        : this.measuredTxRate;
      (this.lastMaxRate = n),
        this.calculateTimeWindow(),
        (this.lastThrottleTime = this.getCurrentTimeInSeconds()),
        (r = this.cubicThrottle(n)),
        this.enableTokenBucket();
    } else
      this.calculateTimeWindow(),
        (r = this.cubicSuccess(this.getCurrentTimeInSeconds()));
    const s = Math.min(r, 2 * this.measuredTxRate);
    this.updateTokenBucketRate(s);
  }
  calculateTimeWindow() {
    this.timeWindow = this.getPrecise(
      Math.pow(
        (this.lastMaxRate * (1 - this.beta)) / this.scaleConstant,
        1 / 3,
      ),
    );
  }
  cubicThrottle(e) {
    return this.getPrecise(e * this.beta);
  }
  cubicSuccess(e) {
    return this.getPrecise(
      this.scaleConstant *
        Math.pow(e - this.lastThrottleTime - this.timeWindow, 3) +
        this.lastMaxRate,
    );
  }
  enableTokenBucket() {
    this.enabled = !0;
  }
  updateTokenBucketRate(e) {
    this.refillTokenBucket(),
      (this.fillRate = Math.max(e, this.minFillRate)),
      (this.maxCapacity = Math.max(e, this.minCapacity)),
      (this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity));
  }
  updateMeasuredRate() {
    const e = this.getCurrentTimeInSeconds(),
      r = Math.floor(e * 2) / 2;
    if ((this.requestCount++, r > this.lastTxRateBucket)) {
      const s = this.requestCount / (r - this.lastTxRateBucket);
      (this.measuredTxRate = this.getPrecise(
        s * this.smooth + this.measuredTxRate * (1 - this.smooth),
      )),
        (this.requestCount = 0),
        (this.lastTxRateBucket = r);
    }
  }
  getPrecise(e) {
    return parseFloat(e.toFixed(8));
  }
}
const le = 100,
  ct = 20 * 1e3,
  Yr = 500,
  Ne = 500,
  Jr = 5,
  es = 10,
  ts = 1,
  rs = "amz-sdk-invocation-id",
  ss = "amz-sdk-request",
  ns = () => {
    let t = le;
    return {
      computeNextBackoffDelay: (s) =>
        Math.floor(Math.min(ct, Math.random() * 2 ** s * t)),
      setDelayBase: (s) => {
        t = s;
      },
    };
  },
  Ie = ({ retryDelay: t, retryCount: e, retryCost: r }) => ({
    getRetryCount: () => e,
    getRetryDelay: () => Math.min(ct, t),
    getRetryCost: () => r,
  });
class ut {
  constructor(e) {
    (this.maxAttempts = e),
      (this.mode = D.STANDARD),
      (this.capacity = Ne),
      (this.retryBackoffStrategy = ns()),
      (this.maxAttemptsProvider = typeof e == "function" ? e : async () => e);
  }
  async acquireInitialRetryToken(e) {
    return Ie({ retryDelay: le, retryCount: 0 });
  }
  async refreshRetryTokenForRetry(e, r) {
    const s = await this.getMaxAttempts();
    if (this.shouldRetry(e, r, s)) {
      const n = r.errorType;
      this.retryBackoffStrategy.setDelayBase(n === "THROTTLING" ? Yr : le);
      const i = this.retryBackoffStrategy.computeNextBackoffDelay(
          e.getRetryCount(),
        ),
        o = r.retryAfterHint
          ? Math.max(r.retryAfterHint.getTime() - Date.now() || 0, i)
          : i,
        a = this.getCapacityCost(n);
      return (
        (this.capacity -= a),
        Ie({ retryDelay: o, retryCount: e.getRetryCount() + 1, retryCost: a })
      );
    }
    throw new Error("No retry token available");
  }
  recordSuccess(e) {
    this.capacity = Math.max(Ne, this.capacity + (e.getRetryCost() ?? ts));
  }
  getCapacity() {
    return this.capacity;
  }
  async getMaxAttempts() {
    try {
      return await this.maxAttemptsProvider();
    } catch {
      return (
        console.warn(
          `Max attempts provider could not resolve. Using default of ${de}`,
        ),
        de
      );
    }
  }
  shouldRetry(e, r, s) {
    return (
      e.getRetryCount() + 1 < s &&
      this.capacity >= this.getCapacityCost(r.errorType) &&
      this.isRetryableError(r.errorType)
    );
  }
  getCapacityCost(e) {
    return e === "TRANSIENT" ? es : Jr;
  }
  isRetryableError(e) {
    return e === "THROTTLING" || e === "TRANSIENT";
  }
}
class is {
  constructor(e, r) {
    (this.maxAttemptsProvider = e), (this.mode = D.ADAPTIVE);
    const { rateLimiter: s } = r ?? {};
    (this.rateLimiter = s ?? new Zr()),
      (this.standardRetryStrategy = new ut(e));
  }
  async acquireInitialRetryToken(e) {
    return (
      await this.rateLimiter.getSendToken(),
      this.standardRetryStrategy.acquireInitialRetryToken(e)
    );
  }
  async refreshRetryTokenForRetry(e, r) {
    return (
      this.rateLimiter.updateClientSendingRate(r),
      this.standardRetryStrategy.refreshRetryTokenForRetry(e, r)
    );
  }
  recordSuccess(e) {
    this.rateLimiter.updateClientSendingRate({}),
      this.standardRetryStrategy.recordSuccess(e);
  }
}
let H;
const os = new Uint8Array(16);
function as() {
  if (
    !H &&
    ((H =
      typeof crypto < "u" &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !H)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
    );
  return H(os);
}
const R = [];
for (let t = 0; t < 256; ++t) R.push((t + 256).toString(16).slice(1));
function cs(t, e = 0) {
  return (
    R[t[e + 0]] +
    R[t[e + 1]] +
    R[t[e + 2]] +
    R[t[e + 3]] +
    "-" +
    R[t[e + 4]] +
    R[t[e + 5]] +
    "-" +
    R[t[e + 6]] +
    R[t[e + 7]] +
    "-" +
    R[t[e + 8]] +
    R[t[e + 9]] +
    "-" +
    R[t[e + 10]] +
    R[t[e + 11]] +
    R[t[e + 12]] +
    R[t[e + 13]] +
    R[t[e + 14]] +
    R[t[e + 15]]
  );
}
const us =
    typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  _e = { randomUUID: us };
function ds(t, e, r) {
  if (_e.randomUUID && !e && !t) return _e.randomUUID();
  t = t || {};
  const s = t.random || (t.rng || as)();
  return (s[6] = (s[6] & 15) | 64), (s[8] = (s[8] & 63) | 128), cs(s);
}
const ls = (t) =>
    t instanceof Error
      ? t
      : t instanceof Object
        ? Object.assign(new Error(), t)
        : typeof t == "string"
          ? new Error(t)
          : new Error(`AWS SDK error wrapper for ${t}`),
  $n = (t) => {
    const { retryStrategy: e } = t,
      r = x(t.maxAttempts ?? de);
    return {
      ...t,
      maxAttempts: r,
      retryStrategy: async () =>
        e || ((await x(t.retryMode)()) === D.ADAPTIVE ? new is(r) : new ut(r)),
    };
  },
  fs = (t) => (t == null ? void 0 : t.body) instanceof ReadableStream,
  hs = (t) => (e, r) => async (s) => {
    var o;
    let n = await t.retryStrategy();
    const i = await t.maxAttempts();
    if (gs(n)) {
      n = n;
      let a = await n.acquireInitialRetryToken(r.partition_id),
        c = new Error(),
        l = 0,
        h = 0;
      const { request: d } = s,
        g = C.isInstance(d);
      for (g && (d.headers[rs] = ds()); ; )
        try {
          g && (d.headers[ss] = `attempt=${l + 1}; max=${i}`);
          const { response: f, output: m } = await e(s);
          return (
            n.recordSuccess(a),
            (m.$metadata.attempts = l + 1),
            (m.$metadata.totalRetryDelay = h),
            { response: f, output: m }
          );
        } catch (f) {
          const m = ps(f);
          if (((c = ls(f)), g && fs(d)))
            throw (
              ((o = r.logger instanceof kt ? console : r.logger) == null ||
                o.warn(
                  "An error was encountered in a non-retryable streaming request.",
                ),
              c)
            );
          try {
            a = await n.refreshRetryTokenForRetry(a, m);
          } catch {
            throw (
              (c.$metadata || (c.$metadata = {}),
              (c.$metadata.attempts = l + 1),
              (c.$metadata.totalRetryDelay = h),
              c)
            );
          }
          l = a.getRetryCount();
          const w = a.getRetryDelay();
          (h += w), await new Promise((p) => setTimeout(p, w));
        }
    } else
      return (
        (n = n),
        n != null &&
          n.mode &&
          (r.userAgent = [...(r.userAgent || []), ["cfg/retry-mode", n.mode]]),
        n.retry(e, s)
      );
  },
  gs = (t) =>
    typeof t.acquireInitialRetryToken < "u" &&
    typeof t.refreshRetryTokenForRetry < "u" &&
    typeof t.recordSuccess < "u",
  ps = (t) => {
    const e = { error: t, errorType: ms(t) },
      r = ws(t.$response);
    return r && (e.retryAfterHint = r), e;
  },
  ms = (t) =>
    ot(t)
      ? "THROTTLING"
      : at(t)
        ? "TRANSIENT"
        : Xr(t)
          ? "SERVER_ERROR"
          : "CLIENT_ERROR",
  dt = {
    name: "retryMiddleware",
    tags: ["RETRY"],
    step: "finalizeRequest",
    priority: "high",
    override: !0,
  },
  Bn = (t) => ({
    applyToStack: (e) => {
      e.add(hs(t), dt);
    },
  }),
  ws = (t) => {
    if (!Ve.isInstance(t)) return;
    const e = Object.keys(t.headers).find(
      (i) => i.toLowerCase() === "retry-after",
    );
    if (!e) return;
    const r = t.headers[e],
      s = Number(r);
    return Number.isNaN(s) ? new Date(r) : new Date(s * 1e3);
  },
  ys = {
    step: "finalizeRequest",
    tags: ["HTTP_SIGNING"],
    name: "httpSigningMiddleware",
    aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
    override: !0,
    relation: "after",
    toMiddleware: dt.name,
  },
  Ln = (t) => ({
    applyToStack: (e) => {
      e.addRelativeTo(jr(), ys);
    },
  });
class Un {
  constructor(e) {
    this.authSchemes = new Map();
    for (const [r, s] of Object.entries(e))
      s !== void 0 && this.authSchemes.set(r, s);
  }
  getIdentityProvider(e) {
    return this.authSchemes.get(e);
  }
}
class Hn {
  async sign(e, r, s) {
    return e;
  }
}
const bs = (t) => (e) => lt(e) && e.expiration.getTime() - Date.now() < t,
  Ss = 3e5,
  vs = bs(Ss),
  lt = (t) => t.expiration !== void 0,
  Rs = (t, e, r) => {
    if (t === void 0) return;
    const s = typeof t != "function" ? async () => Promise.resolve(t) : t;
    let n,
      i,
      o,
      a = !1;
    const c = async (l) => {
      i || (i = s(l));
      try {
        (n = await i), (o = !0), (a = !1);
      } finally {
        i = void 0;
      }
      return n;
    };
    return e === void 0
      ? async (l) => (
          (!o || (l != null && l.forceRefresh)) && (n = await c(l)), n
        )
      : async (l) => (
          (!o || (l != null && l.forceRefresh)) && (n = await c(l)),
          a ? n : r(n) ? (e(n) && (await c(l)), n) : ((a = !0), n)
        );
  },
  z = (t) => {
    if (typeof t == "function") return t;
    const e = Promise.resolve(t);
    return () => e;
  },
  Pe = "content-length";
function Es(t) {
  return (e) => async (r) => {
    const s = r.request;
    if (C.isInstance(s)) {
      const { body: n, headers: i } = s;
      if (
        n &&
        Object.keys(i)
          .map((o) => o.toLowerCase())
          .indexOf(Pe) === -1
      )
        try {
          const o = t(n);
          s.headers = { ...s.headers, [Pe]: String(o) };
        } catch {}
    }
    return e({ ...r, request: s });
  };
}
const As = {
    step: "build",
    tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
    name: "contentLengthMiddleware",
    override: !0,
  },
  zn = (t) => ({
    applyToStack: (e) => {
      e.add(Es(t.bodyLengthChecker), As);
    },
  }),
  xe = (t) => {
    var e, r;
    return Ve.isInstance(t)
      ? (((e = t.headers) == null ? void 0 : e.date) ??
          ((r = t.headers) == null ? void 0 : r.Date))
      : void 0;
  },
  ft = (t) => new Date(Date.now() + t),
  Ts = (t, e) => Math.abs(ft(e).getTime() - t) >= 3e5,
  De = (t, e) => {
    const r = Date.parse(t);
    return Ts(r, e) ? r - Date.now() : e;
  },
  L = (t, e) => {
    if (!e)
      throw new Error(
        `Property \`${t}\` is not resolved for AWS SDK SigV4Auth`,
      );
    return e;
  },
  Ms = async (t) => {
    var l, h, d;
    const e = L("context", t.context),
      r = L("config", t.config),
      s =
        (d =
          (h = (l = e.endpointV2) == null ? void 0 : l.properties) == null
            ? void 0
            : h.authSchemes) == null
          ? void 0
          : d[0],
      i = await L("signer", r.signer)(s),
      o = t == null ? void 0 : t.signingRegion,
      a = t == null ? void 0 : t.signingRegionSet,
      c = t == null ? void 0 : t.signingName;
    return {
      config: r,
      signer: i,
      signingRegion: o,
      signingRegionSet: a,
      signingName: c,
    };
  };
class qn {
  async sign(e, r, s) {
    var d;
    if (!C.isInstance(e))
      throw new Error(
        "The request is not an instance of `HttpRequest` and cannot be signed",
      );
    const n = await Ms(s),
      { config: i, signer: o } = n;
    let { signingRegion: a, signingName: c } = n;
    const l = s.context;
    if (
      ((d = l == null ? void 0 : l.authSchemes) == null ? void 0 : d.length) ??
      !1
    ) {
      const [g, f] = l.authSchemes;
      (g == null ? void 0 : g.name) === "sigv4a" &&
        (f == null ? void 0 : f.name) === "sigv4" &&
        ((a = (f == null ? void 0 : f.signingRegion) ?? a),
        (c = (f == null ? void 0 : f.signingName) ?? c));
    }
    return await o.sign(e, {
      signingDate: ft(i.systemClockOffset),
      signingRegion: a,
      signingService: c,
    });
  }
  errorHandler(e) {
    return (r) => {
      const s = r.ServerTime ?? xe(r.$response);
      if (s) {
        const n = L("config", e.config),
          i = n.systemClockOffset;
        (n.systemClockOffset = De(s, n.systemClockOffset)),
          n.systemClockOffset !== i &&
            r.$metadata &&
            (r.$metadata.clockSkewCorrected = !0);
      }
      throw r;
    };
  }
  successHandler(e, r) {
    const s = xe(e);
    if (s) {
      const n = L("config", r.config);
      n.systemClockOffset = De(s, n.systemClockOffset);
    }
  }
}
const Cs = "X-Amz-Algorithm",
  ks = "X-Amz-Credential",
  ht = "X-Amz-Date",
  Os = "X-Amz-SignedHeaders",
  Ns = "X-Amz-Expires",
  gt = "X-Amz-Signature",
  pt = "X-Amz-Security-Token",
  mt = "authorization",
  wt = ht.toLowerCase(),
  Is = "date",
  _s = [mt, wt, Is],
  Ps = gt.toLowerCase(),
  fe = "x-amz-content-sha256",
  xs = pt.toLowerCase(),
  Ds = {
    authorization: !0,
    "cache-control": !0,
    connection: !0,
    expect: !0,
    from: !0,
    "keep-alive": !0,
    "max-forwards": !0,
    pragma: !0,
    referer: !0,
    te: !0,
    trailer: !0,
    "transfer-encoding": !0,
    upgrade: !0,
    "user-agent": !0,
    "x-amzn-trace-id": !0,
  },
  Fs = /^proxy-/,
  $s = /^sec-/,
  te = "AWS4-HMAC-SHA256",
  Bs = "AWS4-HMAC-SHA256-PAYLOAD",
  Ls = "UNSIGNED-PAYLOAD",
  Us = 50,
  yt = "aws4_request",
  Hs = 60 * 60 * 24 * 7,
  q = {},
  re = [],
  se = (t, e, r) => `${t}/${e}/${r}/${yt}`,
  zs = async (t, e, r, s, n) => {
    const i = await Fe(t, e.secretAccessKey, e.accessKeyId),
      o = `${r}:${s}:${n}:${_(i)}:${e.sessionToken}`;
    if (o in q) return q[o];
    for (re.push(o); re.length > Us; ) delete q[re.shift()];
    let a = `AWS4${e.secretAccessKey}`;
    for (const c of [r, s, n, yt]) a = await Fe(t, a, c);
    return (q[o] = a);
  },
  Fe = (t, e, r) => {
    const s = new t(e);
    return s.update(B(r)), s.digest();
  },
  $e = ({ headers: t }, e, r) => {
    const s = {};
    for (const n of Object.keys(t).sort()) {
      if (t[n] == null) continue;
      const i = n.toLowerCase();
      ((i in Ds || (e != null && e.has(i)) || Fs.test(i) || $s.test(i)) &&
        (!r || (r && !r.has(i)))) ||
        (s[i] = t[n].trim().replace(/\s+/g, " "));
    }
    return s;
  },
  qs = ({ query: t = {} }) => {
    const e = [],
      r = {};
    for (const s of Object.keys(t)) {
      if (s.toLowerCase() === Ps) continue;
      const n = W(s);
      e.push(n);
      const i = t[s];
      typeof i == "string"
        ? (r[n] = `${n}=${W(i)}`)
        : Array.isArray(i) &&
          (r[n] = i
            .slice(0)
            .reduce((o, a) => o.concat([`${n}=${W(a)}`]), [])
            .sort()
            .join("&"));
    }
    return e
      .sort()
      .map((s) => r[s])
      .filter((s) => s)
      .join("&");
  },
  js = (t) =>
    (typeof ArrayBuffer == "function" && t instanceof ArrayBuffer) ||
    Object.prototype.toString.call(t) === "[object ArrayBuffer]",
  ne = async ({ headers: t, body: e }, r) => {
    for (const s of Object.keys(t)) if (s.toLowerCase() === fe) return t[s];
    if (e == null)
      return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    if (typeof e == "string" || ArrayBuffer.isView(e) || js(e)) {
      const s = new r();
      return s.update(B(e)), _(await s.digest());
    }
    return Ls;
  };
class Ws {
  format(e) {
    const r = [];
    for (const i of Object.keys(e)) {
      const o = G(i);
      r.push(Uint8Array.from([o.byteLength]), o, this.formatHeaderValue(e[i]));
    }
    const s = new Uint8Array(r.reduce((i, o) => i + o.byteLength, 0));
    let n = 0;
    for (const i of r) s.set(i, n), (n += i.byteLength);
    return s;
  }
  formatHeaderValue(e) {
    switch (e.type) {
      case "boolean":
        return Uint8Array.from([e.value ? 0 : 1]);
      case "byte":
        return Uint8Array.from([2, e.value]);
      case "short":
        const r = new DataView(new ArrayBuffer(3));
        return (
          r.setUint8(0, 3), r.setInt16(1, e.value, !1), new Uint8Array(r.buffer)
        );
      case "integer":
        const s = new DataView(new ArrayBuffer(5));
        return (
          s.setUint8(0, 4), s.setInt32(1, e.value, !1), new Uint8Array(s.buffer)
        );
      case "long":
        const n = new Uint8Array(9);
        return (n[0] = 5), n.set(e.value.bytes, 1), n;
      case "binary":
        const i = new DataView(new ArrayBuffer(3 + e.value.byteLength));
        i.setUint8(0, 6), i.setUint16(1, e.value.byteLength, !1);
        const o = new Uint8Array(i.buffer);
        return o.set(e.value, 3), o;
      case "string":
        const a = G(e.value),
          c = new DataView(new ArrayBuffer(3 + a.byteLength));
        c.setUint8(0, 7), c.setUint16(1, a.byteLength, !1);
        const l = new Uint8Array(c.buffer);
        return l.set(a, 3), l;
      case "timestamp":
        const h = new Uint8Array(9);
        return (h[0] = 8), h.set(we.fromNumber(e.value.valueOf()).bytes, 1), h;
      case "uuid":
        if (!Vs.test(e.value))
          throw new Error(`Invalid UUID received: ${e.value}`);
        const d = new Uint8Array(17);
        return (d[0] = 9), d.set(Tt(e.value.replace(/\-/g, "")), 1), d;
    }
  }
}
var Be;
(function (t) {
  (t[(t.boolTrue = 0)] = "boolTrue"),
    (t[(t.boolFalse = 1)] = "boolFalse"),
    (t[(t.byte = 2)] = "byte"),
    (t[(t.short = 3)] = "short"),
    (t[(t.integer = 4)] = "integer"),
    (t[(t.long = 5)] = "long"),
    (t[(t.byteArray = 6)] = "byteArray"),
    (t[(t.string = 7)] = "string"),
    (t[(t.timestamp = 8)] = "timestamp"),
    (t[(t.uuid = 9)] = "uuid");
})(Be || (Be = {}));
const Vs = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
class we {
  constructor(e) {
    if (((this.bytes = e), e.byteLength !== 8))
      throw new Error("Int64 buffers must be exactly 8 bytes");
  }
  static fromNumber(e) {
    if (e > 9223372036854776e3 || e < -9223372036854776e3)
      throw new Error(
        `${e} is too large (or, if negative, too small) to represent as an Int64`,
      );
    const r = new Uint8Array(8);
    for (let s = 7, n = Math.abs(Math.round(e)); s > -1 && n > 0; s--, n /= 256)
      r[s] = n;
    return e < 0 && Le(r), new we(r);
  }
  valueOf() {
    const e = this.bytes.slice(0),
      r = e[0] & 128;
    return r && Le(e), parseInt(_(e), 16) * (r ? -1 : 1);
  }
  toString() {
    return String(this.valueOf());
  }
}
function Le(t) {
  for (let e = 0; e < 8; e++) t[e] ^= 255;
  for (let e = 7; e > -1 && (t[e]++, t[e] === 0); e--);
}
const Gs = (t, e) => {
    t = t.toLowerCase();
    for (const r of Object.keys(e)) if (t === r.toLowerCase()) return !0;
    return !1;
  },
  Ks = (t, e = {}) => {
    var n;
    const { headers: r, query: s = {} } = C.clone(t);
    for (const i of Object.keys(r)) {
      const o = i.toLowerCase();
      o.slice(0, 6) === "x-amz-" &&
        !((n = e.unhoistableHeaders) != null && n.has(o)) &&
        ((s[i] = r[i]), delete r[i]);
    }
    return { ...t, headers: r, query: s };
  },
  Ue = (t) => {
    t = C.clone(t);
    for (const e of Object.keys(t.headers))
      _s.indexOf(e.toLowerCase()) > -1 && delete t.headers[e];
    return t;
  },
  Qs = (t) =>
    Xs(t)
      .toISOString()
      .replace(/\.\d{3}Z$/, "Z"),
  Xs = (t) =>
    typeof t == "number"
      ? new Date(t * 1e3)
      : typeof t == "string"
        ? Number(t)
          ? new Date(Number(t) * 1e3)
          : new Date(t)
        : t;
class He {
  constructor({
    applyChecksum: e,
    credentials: r,
    region: s,
    service: n,
    sha256: i,
    uriEscapePath: o = !0,
  }) {
    (this.headerFormatter = new Ws()),
      (this.service = n),
      (this.sha256 = i),
      (this.uriEscapePath = o),
      (this.applyChecksum = typeof e == "boolean" ? e : !0),
      (this.regionProvider = x(s)),
      (this.credentialProvider = x(r));
  }
  async presign(e, r = {}) {
    const {
        signingDate: s = new Date(),
        expiresIn: n = 3600,
        unsignableHeaders: i,
        unhoistableHeaders: o,
        signableHeaders: a,
        signingRegion: c,
        signingService: l,
      } = r,
      h = await this.credentialProvider();
    this.validateResolvedCredentials(h);
    const d = c ?? (await this.regionProvider()),
      { longDate: g, shortDate: f } = j(s);
    if (n > Hs)
      return Promise.reject(
        "Signature version 4 presigned URLs must have an expiration date less than one week in the future",
      );
    const m = se(f, d, l ?? this.service),
      w = Ks(Ue(e), { unhoistableHeaders: o });
    h.sessionToken && (w.query[pt] = h.sessionToken),
      (w.query[Cs] = te),
      (w.query[ks] = `${h.accessKeyId}/${m}`),
      (w.query[ht] = g),
      (w.query[Ns] = n.toString(10));
    const p = $e(w, i, a);
    return (
      (w.query[Os] = ze(p)),
      (w.query[gt] = await this.getSignature(
        g,
        m,
        this.getSigningKey(h, d, f, l),
        this.createCanonicalRequest(w, p, await ne(e, this.sha256)),
      )),
      w
    );
  }
  async sign(e, r) {
    return typeof e == "string"
      ? this.signString(e, r)
      : e.headers && e.payload
        ? this.signEvent(e, r)
        : e.message
          ? this.signMessage(e, r)
          : this.signRequest(e, r);
  }
  async signEvent(
    { headers: e, payload: r },
    {
      signingDate: s = new Date(),
      priorSignature: n,
      signingRegion: i,
      signingService: o,
    },
  ) {
    const a = i ?? (await this.regionProvider()),
      { shortDate: c, longDate: l } = j(s),
      h = se(c, a, o ?? this.service),
      d = await ne({ headers: {}, body: r }, this.sha256),
      g = new this.sha256();
    g.update(e);
    const f = _(await g.digest()),
      m = [Bs, l, h, n, f, d].join(`
`);
    return this.signString(m, {
      signingDate: s,
      signingRegion: a,
      signingService: o,
    });
  }
  async signMessage(
    e,
    { signingDate: r = new Date(), signingRegion: s, signingService: n },
  ) {
    return this.signEvent(
      {
        headers: this.headerFormatter.format(e.message.headers),
        payload: e.message.body,
      },
      {
        signingDate: r,
        signingRegion: s,
        signingService: n,
        priorSignature: e.priorSignature,
      },
    ).then((o) => ({ message: e.message, signature: o }));
  }
  async signString(
    e,
    { signingDate: r = new Date(), signingRegion: s, signingService: n } = {},
  ) {
    const i = await this.credentialProvider();
    this.validateResolvedCredentials(i);
    const o = s ?? (await this.regionProvider()),
      { shortDate: a } = j(r),
      c = new this.sha256(await this.getSigningKey(i, o, a, n));
    return c.update(B(e)), _(await c.digest());
  }
  async signRequest(
    e,
    {
      signingDate: r = new Date(),
      signableHeaders: s,
      unsignableHeaders: n,
      signingRegion: i,
      signingService: o,
    } = {},
  ) {
    const a = await this.credentialProvider();
    this.validateResolvedCredentials(a);
    const c = i ?? (await this.regionProvider()),
      l = Ue(e),
      { longDate: h, shortDate: d } = j(r),
      g = se(d, c, o ?? this.service);
    (l.headers[wt] = h), a.sessionToken && (l.headers[xs] = a.sessionToken);
    const f = await ne(l, this.sha256);
    !Gs(fe, l.headers) && this.applyChecksum && (l.headers[fe] = f);
    const m = $e(l, n, s),
      w = await this.getSignature(
        h,
        g,
        this.getSigningKey(a, c, d, o),
        this.createCanonicalRequest(l, m, f),
      );
    return (
      (l.headers[mt] =
        `${te} Credential=${a.accessKeyId}/${g}, SignedHeaders=${ze(m)}, Signature=${w}`),
      l
    );
  }
  createCanonicalRequest(e, r, s) {
    const n = Object.keys(r).sort();
    return `${e.method}
${this.getCanonicalPath(e)}
${qs(e)}
${n.map((i) => `${i}:${r[i]}`).join(`
`)}

${n.join(";")}
${s}`;
  }
  async createStringToSign(e, r, s) {
    const n = new this.sha256();
    n.update(B(s));
    const i = await n.digest();
    return `${te}
${e}
${r}
${_(i)}`;
  }
  getCanonicalPath({ path: e }) {
    if (this.uriEscapePath) {
      const r = [];
      for (const i of e.split("/"))
        (i == null ? void 0 : i.length) !== 0 &&
          i !== "." &&
          (i === ".." ? r.pop() : r.push(i));
      const s = `${e != null && e.startsWith("/") ? "/" : ""}${r.join("/")}${r.length > 0 && e != null && e.endsWith("/") ? "/" : ""}`;
      return W(s).replace(/%2F/g, "/");
    }
    return e;
  }
  async getSignature(e, r, s, n) {
    const i = await this.createStringToSign(e, r, n),
      o = new this.sha256(await s);
    return o.update(B(i)), _(await o.digest());
  }
  getSigningKey(e, r, s, n) {
    return zs(this.sha256, e, s, r, n || this.service);
  }
  validateResolvedCredentials(e) {
    if (
      typeof e != "object" ||
      typeof e.accessKeyId != "string" ||
      typeof e.secretAccessKey != "string"
    )
      throw new Error("Resolved credential object is not valid");
  }
}
const j = (t) => {
    const e = Qs(t).replace(/[\-:]/g, "");
    return { longDate: e, shortDate: e.slice(0, 8) };
  },
  ze = (t) => Object.keys(t).sort().join(";"),
  jn = (t) => {
    let e;
    t.credentials && (e = Rs(t.credentials, vs, lt)),
      e ||
        (t.credentialDefaultProvider
          ? (e = z(
              t.credentialDefaultProvider(
                Object.assign({}, t, { parentClientConfig: t }),
              ),
            ))
          : (e = async () => {
              throw new Error("`credentials` is missing");
            }));
    const {
      signingEscapePath: r = !0,
      systemClockOffset: s = t.systemClockOffset || 0,
      sha256: n,
    } = t;
    let i;
    return (
      t.signer
        ? (i = z(t.signer))
        : t.regionInfoProvider
          ? (i = () =>
              z(t.region)()
                .then(async (o) => [
                  (await t.regionInfoProvider(o, {
                    useFipsEndpoint: await t.useFipsEndpoint(),
                    useDualstackEndpoint: await t.useDualstackEndpoint(),
                  })) || {},
                  o,
                ])
                .then(([o, a]) => {
                  const { signingRegion: c, signingService: l } = o;
                  (t.signingRegion = t.signingRegion || c || a),
                    (t.signingName = t.signingName || l || t.serviceId);
                  const h = {
                      ...t,
                      credentials: e,
                      region: t.signingRegion,
                      service: t.signingName,
                      sha256: n,
                      uriEscapePath: r,
                    },
                    d = t.signerConstructor || He;
                  return new d(h);
                }))
          : (i = async (o) => {
              o = Object.assign(
                {},
                {
                  name: "sigv4",
                  signingName: t.signingName || t.defaultSigningName,
                  signingRegion: await z(t.region)(),
                  properties: {},
                },
                o,
              );
              const a = o.signingRegion,
                c = o.signingName;
              (t.signingRegion = t.signingRegion || a),
                (t.signingName = t.signingName || c || t.serviceId);
              const l = {
                  ...t,
                  credentials: e,
                  region: t.signingRegion,
                  service: t.signingName,
                  sha256: n,
                  uriEscapePath: r,
                },
                h = t.signerConstructor || He;
              return new h(l);
            }),
      {
        ...t,
        systemClockOffset: s,
        signingEscapePath: r,
        credentials: e,
        signer: i,
      }
    );
  },
  Wn = (t, e) => It(t, e).then((r) => e.utf8Encoder(r));
var bt = { name: "SHA-256" },
  qe = { name: "HMAC", hash: bt },
  Zs = new Uint8Array([
    227, 176, 196, 66, 152, 252, 28, 20, 154, 251, 244, 200, 153, 111, 185, 36,
    39, 174, 65, 228, 100, 155, 147, 76, 164, 149, 153, 27, 120, 82, 184, 85,
  ]);
const Ys = {};
function V() {
  return typeof window < "u" ? window : typeof self < "u" ? self : Ys;
}
var Js = (function () {
    function t(e) {
      (this.toHash = new Uint8Array(0)), (this.secret = e), this.reset();
    }
    return (
      (t.prototype.update = function (e) {
        if (!be(e)) {
          var r = oe(e),
            s = new Uint8Array(this.toHash.byteLength + r.byteLength);
          s.set(this.toHash, 0),
            s.set(r, this.toHash.byteLength),
            (this.toHash = s);
        }
      }),
      (t.prototype.digest = function () {
        var e = this;
        return this.key
          ? this.key.then(function (r) {
              return V()
                .crypto.subtle.sign(qe, r, e.toHash)
                .then(function (s) {
                  return new Uint8Array(s);
                });
            })
          : be(this.toHash)
            ? Promise.resolve(Zs)
            : Promise.resolve()
                .then(function () {
                  return V().crypto.subtle.digest(bt, e.toHash);
                })
                .then(function (r) {
                  return Promise.resolve(new Uint8Array(r));
                });
      }),
      (t.prototype.reset = function () {
        var e = this;
        (this.toHash = new Uint8Array(0)),
          this.secret &&
            this.secret !== void 0 &&
            ((this.key = new Promise(function (r, s) {
              V()
                .crypto.subtle.importKey("raw", oe(e.secret), qe, !1, ["sign"])
                .then(r, s);
            })),
            this.key.catch(function () {}));
      }),
      t
    );
  })(),
  en = [
    "decrypt",
    "digest",
    "encrypt",
    "exportKey",
    "generateKey",
    "importKey",
    "sign",
    "verify",
  ];
function tn(t) {
  if (rn(t) && typeof t.crypto.subtle == "object") {
    var e = t.crypto.subtle;
    return sn(e);
  }
  return !1;
}
function rn(t) {
  if (typeof t == "object" && typeof t.crypto == "object") {
    var e = t.crypto.getRandomValues;
    return typeof e == "function";
  }
  return !1;
}
function sn(t) {
  return (
    t &&
    en.every(function (e) {
      return typeof t[e] == "function";
    })
  );
}
var Vn = (function () {
  function t(e) {
    tn(V()) ? (this.hash = new Js(e)) : (this.hash = new Mt(e));
  }
  return (
    (t.prototype.update = function (e, r) {
      this.hash.update(oe(e));
    }),
    (t.prototype.digest = function () {
      return this.hash.digest();
    }),
    (t.prototype.reset = function () {
      this.hash.reset();
    }),
    t
  );
})();
const nn = {
    "Amazon Silk": "amazon_silk",
    "Android Browser": "android",
    Bada: "bada",
    BlackBerry: "blackberry",
    Chrome: "chrome",
    Chromium: "chromium",
    Electron: "electron",
    Epiphany: "epiphany",
    Firefox: "firefox",
    Focus: "focus",
    Generic: "generic",
    "Google Search": "google_search",
    Googlebot: "googlebot",
    "Internet Explorer": "ie",
    "K-Meleon": "k_meleon",
    Maxthon: "maxthon",
    "Microsoft Edge": "edge",
    "MZ Browser": "mz",
    "NAVER Whale Browser": "naver",
    Opera: "opera",
    "Opera Coast": "opera_coast",
    PhantomJS: "phantomjs",
    Puffin: "puffin",
    QupZilla: "qupzilla",
    QQ: "qq",
    QQLite: "qqlite",
    Safari: "safari",
    Sailfish: "sailfish",
    "Samsung Internet for Android": "samsung_internet",
    SeaMonkey: "seamonkey",
    Sleipnir: "sleipnir",
    Swing: "swing",
    Tizen: "tizen",
    "UC Browser": "uc",
    Vivaldi: "vivaldi",
    "WebOS Browser": "webos",
    WeChat: "wechat",
    "Yandex Browser": "yandex",
    Roku: "roku",
  },
  St = {
    amazon_silk: "Amazon Silk",
    android: "Android Browser",
    bada: "Bada",
    blackberry: "BlackBerry",
    chrome: "Chrome",
    chromium: "Chromium",
    electron: "Electron",
    epiphany: "Epiphany",
    firefox: "Firefox",
    focus: "Focus",
    generic: "Generic",
    googlebot: "Googlebot",
    google_search: "Google Search",
    ie: "Internet Explorer",
    k_meleon: "K-Meleon",
    maxthon: "Maxthon",
    edge: "Microsoft Edge",
    mz: "MZ Browser",
    naver: "NAVER Whale Browser",
    opera: "Opera",
    opera_coast: "Opera Coast",
    phantomjs: "PhantomJS",
    puffin: "Puffin",
    qupzilla: "QupZilla",
    qq: "QQ Browser",
    qqlite: "QQ Browser Lite",
    safari: "Safari",
    sailfish: "Sailfish",
    samsung_internet: "Samsung Internet for Android",
    seamonkey: "SeaMonkey",
    sleipnir: "Sleipnir",
    swing: "Swing",
    tizen: "Tizen",
    uc: "UC Browser",
    vivaldi: "Vivaldi",
    webos: "WebOS Browser",
    wechat: "WeChat",
    yandex: "Yandex Browser",
  },
  v = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" },
  E = {
    WindowsPhone: "Windows Phone",
    Windows: "Windows",
    MacOS: "macOS",
    iOS: "iOS",
    Android: "Android",
    WebOS: "WebOS",
    BlackBerry: "BlackBerry",
    Bada: "Bada",
    Tizen: "Tizen",
    Linux: "Linux",
    ChromeOS: "Chrome OS",
    PlayStation4: "PlayStation 4",
    Roku: "Roku",
  },
  O = {
    EdgeHTML: "EdgeHTML",
    Blink: "Blink",
    Trident: "Trident",
    Presto: "Presto",
    Gecko: "Gecko",
    WebKit: "WebKit",
  };
class u {
  static getFirstMatch(e, r) {
    const s = r.match(e);
    return (s && s.length > 0 && s[1]) || "";
  }
  static getSecondMatch(e, r) {
    const s = r.match(e);
    return (s && s.length > 1 && s[2]) || "";
  }
  static matchAndReturnConst(e, r, s) {
    if (e.test(r)) return s;
  }
  static getWindowsVersionName(e) {
    switch (e) {
      case "NT":
        return "NT";
      case "XP":
        return "XP";
      case "NT 5.0":
        return "2000";
      case "NT 5.1":
        return "XP";
      case "NT 5.2":
        return "2003";
      case "NT 6.0":
        return "Vista";
      case "NT 6.1":
        return "7";
      case "NT 6.2":
        return "8";
      case "NT 6.3":
        return "8.1";
      case "NT 10.0":
        return "10";
      default:
        return;
    }
  }
  static getMacOSVersionName(e) {
    const r = e
      .split(".")
      .splice(0, 2)
      .map((s) => parseInt(s, 10) || 0);
    if ((r.push(0), r[0] === 10))
      switch (r[1]) {
        case 5:
          return "Leopard";
        case 6:
          return "Snow Leopard";
        case 7:
          return "Lion";
        case 8:
          return "Mountain Lion";
        case 9:
          return "Mavericks";
        case 10:
          return "Yosemite";
        case 11:
          return "El Capitan";
        case 12:
          return "Sierra";
        case 13:
          return "High Sierra";
        case 14:
          return "Mojave";
        case 15:
          return "Catalina";
        default:
          return;
      }
  }
  static getAndroidVersionName(e) {
    const r = e
      .split(".")
      .splice(0, 2)
      .map((s) => parseInt(s, 10) || 0);
    if ((r.push(0), !(r[0] === 1 && r[1] < 5))) {
      if (r[0] === 1 && r[1] < 6) return "Cupcake";
      if (r[0] === 1 && r[1] >= 6) return "Donut";
      if (r[0] === 2 && r[1] < 2) return "Eclair";
      if (r[0] === 2 && r[1] === 2) return "Froyo";
      if (r[0] === 2 && r[1] > 2) return "Gingerbread";
      if (r[0] === 3) return "Honeycomb";
      if (r[0] === 4 && r[1] < 1) return "Ice Cream Sandwich";
      if (r[0] === 4 && r[1] < 4) return "Jelly Bean";
      if (r[0] === 4 && r[1] >= 4) return "KitKat";
      if (r[0] === 5) return "Lollipop";
      if (r[0] === 6) return "Marshmallow";
      if (r[0] === 7) return "Nougat";
      if (r[0] === 8) return "Oreo";
      if (r[0] === 9) return "Pie";
    }
  }
  static getVersionPrecision(e) {
    return e.split(".").length;
  }
  static compareVersions(e, r, s = !1) {
    const n = u.getVersionPrecision(e),
      i = u.getVersionPrecision(r);
    let o = Math.max(n, i),
      a = 0;
    const c = u.map([e, r], (l) => {
      const h = o - u.getVersionPrecision(l),
        d = l + new Array(h + 1).join(".0");
      return u
        .map(d.split("."), (g) => new Array(20 - g.length).join("0") + g)
        .reverse();
    });
    for (s && (a = o - Math.min(n, i)), o -= 1; o >= a; ) {
      if (c[0][o] > c[1][o]) return 1;
      if (c[0][o] === c[1][o]) {
        if (o === a) return 0;
        o -= 1;
      } else if (c[0][o] < c[1][o]) return -1;
    }
  }
  static map(e, r) {
    const s = [];
    let n;
    if (Array.prototype.map) return Array.prototype.map.call(e, r);
    for (n = 0; n < e.length; n += 1) s.push(r(e[n]));
    return s;
  }
  static find(e, r) {
    let s, n;
    if (Array.prototype.find) return Array.prototype.find.call(e, r);
    for (s = 0, n = e.length; s < n; s += 1) {
      const i = e[s];
      if (r(i, s)) return i;
    }
  }
  static assign(e, ...r) {
    const s = e;
    let n, i;
    if (Object.assign) return Object.assign(e, ...r);
    for (n = 0, i = r.length; n < i; n += 1) {
      const o = r[n];
      typeof o == "object" &&
        o !== null &&
        Object.keys(o).forEach((c) => {
          s[c] = o[c];
        });
    }
    return e;
  }
  static getBrowserAlias(e) {
    return nn[e];
  }
  static getBrowserTypeByAlias(e) {
    return St[e] || "";
  }
}
const b = /version\/(\d+(\.?_?\d+)+)/i,
  on = [
    {
      test: [/googlebot/i],
      describe(t) {
        const e = { name: "Googlebot" },
          r =
            u.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, t) ||
            u.getFirstMatch(b, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/opera/i],
      describe(t) {
        const e = { name: "Opera" },
          r =
            u.getFirstMatch(b, t) ||
            u.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/opr\/|opios/i],
      describe(t) {
        const e = { name: "Opera" },
          r =
            u.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, t) ||
            u.getFirstMatch(b, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/SamsungBrowser/i],
      describe(t) {
        const e = { name: "Samsung Internet for Android" },
          r =
            u.getFirstMatch(b, t) ||
            u.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/Whale/i],
      describe(t) {
        const e = { name: "NAVER Whale Browser" },
          r =
            u.getFirstMatch(b, t) ||
            u.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/MZBrowser/i],
      describe(t) {
        const e = { name: "MZ Browser" },
          r =
            u.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, t) ||
            u.getFirstMatch(b, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/focus/i],
      describe(t) {
        const e = { name: "Focus" },
          r =
            u.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, t) ||
            u.getFirstMatch(b, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/swing/i],
      describe(t) {
        const e = { name: "Swing" },
          r =
            u.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, t) ||
            u.getFirstMatch(b, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/coast/i],
      describe(t) {
        const e = { name: "Opera Coast" },
          r =
            u.getFirstMatch(b, t) ||
            u.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/opt\/\d+(?:.?_?\d+)+/i],
      describe(t) {
        const e = { name: "Opera Touch" },
          r =
            u.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, t) ||
            u.getFirstMatch(b, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/yabrowser/i],
      describe(t) {
        const e = { name: "Yandex Browser" },
          r =
            u.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, t) ||
            u.getFirstMatch(b, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/ucbrowser/i],
      describe(t) {
        const e = { name: "UC Browser" },
          r =
            u.getFirstMatch(b, t) ||
            u.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/Maxthon|mxios/i],
      describe(t) {
        const e = { name: "Maxthon" },
          r =
            u.getFirstMatch(b, t) ||
            u.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/epiphany/i],
      describe(t) {
        const e = { name: "Epiphany" },
          r =
            u.getFirstMatch(b, t) ||
            u.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/puffin/i],
      describe(t) {
        const e = { name: "Puffin" },
          r =
            u.getFirstMatch(b, t) ||
            u.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/sleipnir/i],
      describe(t) {
        const e = { name: "Sleipnir" },
          r =
            u.getFirstMatch(b, t) ||
            u.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/k-meleon/i],
      describe(t) {
        const e = { name: "K-Meleon" },
          r =
            u.getFirstMatch(b, t) ||
            u.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/micromessenger/i],
      describe(t) {
        const e = { name: "WeChat" },
          r =
            u.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, t) ||
            u.getFirstMatch(b, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/qqbrowser/i],
      describe(t) {
        const e = {
            name: /qqbrowserlite/i.test(t) ? "QQ Browser Lite" : "QQ Browser",
          },
          r =
            u.getFirstMatch(
              /(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,
              t,
            ) || u.getFirstMatch(b, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/msie|trident/i],
      describe(t) {
        const e = { name: "Internet Explorer" },
          r = u.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/\sedg\//i],
      describe(t) {
        const e = { name: "Microsoft Edge" },
          r = u.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/edg([ea]|ios)/i],
      describe(t) {
        const e = { name: "Microsoft Edge" },
          r = u.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/vivaldi/i],
      describe(t) {
        const e = { name: "Vivaldi" },
          r = u.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/seamonkey/i],
      describe(t) {
        const e = { name: "SeaMonkey" },
          r = u.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/sailfish/i],
      describe(t) {
        const e = { name: "Sailfish" },
          r = u.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/silk/i],
      describe(t) {
        const e = { name: "Amazon Silk" },
          r = u.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/phantom/i],
      describe(t) {
        const e = { name: "PhantomJS" },
          r = u.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/slimerjs/i],
      describe(t) {
        const e = { name: "SlimerJS" },
          r = u.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
      describe(t) {
        const e = { name: "BlackBerry" },
          r =
            u.getFirstMatch(b, t) ||
            u.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/(web|hpw)[o0]s/i],
      describe(t) {
        const e = { name: "WebOS Browser" },
          r =
            u.getFirstMatch(b, t) ||
            u.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/bada/i],
      describe(t) {
        const e = { name: "Bada" },
          r = u.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/tizen/i],
      describe(t) {
        const e = { name: "Tizen" },
          r =
            u.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, t) ||
            u.getFirstMatch(b, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/qupzilla/i],
      describe(t) {
        const e = { name: "QupZilla" },
          r =
            u.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, t) ||
            u.getFirstMatch(b, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/firefox|iceweasel|fxios/i],
      describe(t) {
        const e = { name: "Firefox" },
          r = u.getFirstMatch(
            /(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,
            t,
          );
        return r && (e.version = r), e;
      },
    },
    {
      test: [/electron/i],
      describe(t) {
        const e = { name: "Electron" },
          r = u.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/MiuiBrowser/i],
      describe(t) {
        const e = { name: "Miui" },
          r = u.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/chromium/i],
      describe(t) {
        const e = { name: "Chromium" },
          r =
            u.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, t) ||
            u.getFirstMatch(b, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/chrome|crios|crmo/i],
      describe(t) {
        const e = { name: "Chrome" },
          r = u.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/GSA/i],
      describe(t) {
        const e = { name: "Google Search" },
          r = u.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test(t) {
        const e = !t.test(/like android/i),
          r = t.test(/android/i);
        return e && r;
      },
      describe(t) {
        const e = { name: "Android Browser" },
          r = u.getFirstMatch(b, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/playstation 4/i],
      describe(t) {
        const e = { name: "PlayStation 4" },
          r = u.getFirstMatch(b, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/safari|applewebkit/i],
      describe(t) {
        const e = { name: "Safari" },
          r = u.getFirstMatch(b, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/.*/i],
      describe(t) {
        const e = /^(.*)\/(.*) /,
          r = /^(.*)\/(.*)[ \t]\((.*)/,
          n = t.search("\\(") !== -1 ? r : e;
        return { name: u.getFirstMatch(n, t), version: u.getSecondMatch(n, t) };
      },
    },
  ],
  an = [
    {
      test: [/Roku\/DVP/],
      describe(t) {
        const e = u.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, t);
        return { name: E.Roku, version: e };
      },
    },
    {
      test: [/windows phone/i],
      describe(t) {
        const e = u.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, t);
        return { name: E.WindowsPhone, version: e };
      },
    },
    {
      test: [/windows /i],
      describe(t) {
        const e = u.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, t),
          r = u.getWindowsVersionName(e);
        return { name: E.Windows, version: e, versionName: r };
      },
    },
    {
      test: [/Macintosh(.*?) FxiOS(.*?)\//],
      describe(t) {
        const e = { name: E.iOS },
          r = u.getSecondMatch(/(Version\/)(\d[\d.]+)/, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/macintosh/i],
      describe(t) {
        const e = u
            .getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, t)
            .replace(/[_\s]/g, "."),
          r = u.getMacOSVersionName(e),
          s = { name: E.MacOS, version: e };
        return r && (s.versionName = r), s;
      },
    },
    {
      test: [/(ipod|iphone|ipad)/i],
      describe(t) {
        const e = u
          .getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, t)
          .replace(/[_\s]/g, ".");
        return { name: E.iOS, version: e };
      },
    },
    {
      test(t) {
        const e = !t.test(/like android/i),
          r = t.test(/android/i);
        return e && r;
      },
      describe(t) {
        const e = u.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, t),
          r = u.getAndroidVersionName(e),
          s = { name: E.Android, version: e };
        return r && (s.versionName = r), s;
      },
    },
    {
      test: [/(web|hpw)[o0]s/i],
      describe(t) {
        const e = u.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, t),
          r = { name: E.WebOS };
        return e && e.length && (r.version = e), r;
      },
    },
    {
      test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
      describe(t) {
        const e =
          u.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, t) ||
          u.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, t) ||
          u.getFirstMatch(/\bbb(\d+)/i, t);
        return { name: E.BlackBerry, version: e };
      },
    },
    {
      test: [/bada/i],
      describe(t) {
        const e = u.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, t);
        return { name: E.Bada, version: e };
      },
    },
    {
      test: [/tizen/i],
      describe(t) {
        const e = u.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, t);
        return { name: E.Tizen, version: e };
      },
    },
    {
      test: [/linux/i],
      describe() {
        return { name: E.Linux };
      },
    },
    {
      test: [/CrOS/],
      describe() {
        return { name: E.ChromeOS };
      },
    },
    {
      test: [/PlayStation 4/],
      describe(t) {
        const e = u.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, t);
        return { name: E.PlayStation4, version: e };
      },
    },
  ],
  cn = [
    {
      test: [/googlebot/i],
      describe() {
        return { type: "bot", vendor: "Google" };
      },
    },
    {
      test: [/huawei/i],
      describe(t) {
        const e = u.getFirstMatch(/(can-l01)/i, t) && "Nova",
          r = { type: v.mobile, vendor: "Huawei" };
        return e && (r.model = e), r;
      },
    },
    {
      test: [/nexus\s*(?:7|8|9|10).*/i],
      describe() {
        return { type: v.tablet, vendor: "Nexus" };
      },
    },
    {
      test: [/ipad/i],
      describe() {
        return { type: v.tablet, vendor: "Apple", model: "iPad" };
      },
    },
    {
      test: [/Macintosh(.*?) FxiOS(.*?)\//],
      describe() {
        return { type: v.tablet, vendor: "Apple", model: "iPad" };
      },
    },
    {
      test: [/kftt build/i],
      describe() {
        return { type: v.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" };
      },
    },
    {
      test: [/silk/i],
      describe() {
        return { type: v.tablet, vendor: "Amazon" };
      },
    },
    {
      test: [/tablet(?! pc)/i],
      describe() {
        return { type: v.tablet };
      },
    },
    {
      test(t) {
        const e = t.test(/ipod|iphone/i),
          r = t.test(/like (ipod|iphone)/i);
        return e && !r;
      },
      describe(t) {
        const e = u.getFirstMatch(/(ipod|iphone)/i, t);
        return { type: v.mobile, vendor: "Apple", model: e };
      },
    },
    {
      test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
      describe() {
        return { type: v.mobile, vendor: "Nexus" };
      },
    },
    {
      test: [/[^-]mobi/i],
      describe() {
        return { type: v.mobile };
      },
    },
    {
      test(t) {
        return t.getBrowserName(!0) === "blackberry";
      },
      describe() {
        return { type: v.mobile, vendor: "BlackBerry" };
      },
    },
    {
      test(t) {
        return t.getBrowserName(!0) === "bada";
      },
      describe() {
        return { type: v.mobile };
      },
    },
    {
      test(t) {
        return t.getBrowserName() === "windows phone";
      },
      describe() {
        return { type: v.mobile, vendor: "Microsoft" };
      },
    },
    {
      test(t) {
        const e = Number(String(t.getOSVersion()).split(".")[0]);
        return t.getOSName(!0) === "android" && e >= 3;
      },
      describe() {
        return { type: v.tablet };
      },
    },
    {
      test(t) {
        return t.getOSName(!0) === "android";
      },
      describe() {
        return { type: v.mobile };
      },
    },
    {
      test(t) {
        return t.getOSName(!0) === "macos";
      },
      describe() {
        return { type: v.desktop, vendor: "Apple" };
      },
    },
    {
      test(t) {
        return t.getOSName(!0) === "windows";
      },
      describe() {
        return { type: v.desktop };
      },
    },
    {
      test(t) {
        return t.getOSName(!0) === "linux";
      },
      describe() {
        return { type: v.desktop };
      },
    },
    {
      test(t) {
        return t.getOSName(!0) === "playstation 4";
      },
      describe() {
        return { type: v.tv };
      },
    },
    {
      test(t) {
        return t.getOSName(!0) === "roku";
      },
      describe() {
        return { type: v.tv };
      },
    },
  ],
  un = [
    {
      test(t) {
        return t.getBrowserName(!0) === "microsoft edge";
      },
      describe(t) {
        if (/\sedg\//i.test(t)) return { name: O.Blink };
        const r = u.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, t);
        return { name: O.EdgeHTML, version: r };
      },
    },
    {
      test: [/trident/i],
      describe(t) {
        const e = { name: O.Trident },
          r = u.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test(t) {
        return t.test(/presto/i);
      },
      describe(t) {
        const e = { name: O.Presto },
          r = u.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test(t) {
        const e = t.test(/gecko/i),
          r = t.test(/like gecko/i);
        return e && !r;
      },
      describe(t) {
        const e = { name: O.Gecko },
          r = u.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/(apple)?webkit\/537\.36/i],
      describe() {
        return { name: O.Blink };
      },
    },
    {
      test: [/(apple)?webkit/i],
      describe(t) {
        const e = { name: O.WebKit },
          r = u.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
  ];
class je {
  constructor(e, r = !1) {
    if (e == null || e === "")
      throw new Error("UserAgent parameter can't be empty");
    (this._ua = e), (this.parsedResult = {}), r !== !0 && this.parse();
  }
  getUA() {
    return this._ua;
  }
  test(e) {
    return e.test(this._ua);
  }
  parseBrowser() {
    this.parsedResult.browser = {};
    const e = u.find(on, (r) => {
      if (typeof r.test == "function") return r.test(this);
      if (r.test instanceof Array) return r.test.some((s) => this.test(s));
      throw new Error("Browser's test function is not valid");
    });
    return (
      e && (this.parsedResult.browser = e.describe(this.getUA())),
      this.parsedResult.browser
    );
  }
  getBrowser() {
    return this.parsedResult.browser
      ? this.parsedResult.browser
      : this.parseBrowser();
  }
  getBrowserName(e) {
    return e
      ? String(this.getBrowser().name).toLowerCase() || ""
      : this.getBrowser().name || "";
  }
  getBrowserVersion() {
    return this.getBrowser().version;
  }
  getOS() {
    return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
  }
  parseOS() {
    this.parsedResult.os = {};
    const e = u.find(an, (r) => {
      if (typeof r.test == "function") return r.test(this);
      if (r.test instanceof Array) return r.test.some((s) => this.test(s));
      throw new Error("Browser's test function is not valid");
    });
    return (
      e && (this.parsedResult.os = e.describe(this.getUA())),
      this.parsedResult.os
    );
  }
  getOSName(e) {
    const { name: r } = this.getOS();
    return e ? String(r).toLowerCase() || "" : r || "";
  }
  getOSVersion() {
    return this.getOS().version;
  }
  getPlatform() {
    return this.parsedResult.platform
      ? this.parsedResult.platform
      : this.parsePlatform();
  }
  getPlatformType(e = !1) {
    const { type: r } = this.getPlatform();
    return e ? String(r).toLowerCase() || "" : r || "";
  }
  parsePlatform() {
    this.parsedResult.platform = {};
    const e = u.find(cn, (r) => {
      if (typeof r.test == "function") return r.test(this);
      if (r.test instanceof Array) return r.test.some((s) => this.test(s));
      throw new Error("Browser's test function is not valid");
    });
    return (
      e && (this.parsedResult.platform = e.describe(this.getUA())),
      this.parsedResult.platform
    );
  }
  getEngine() {
    return this.parsedResult.engine
      ? this.parsedResult.engine
      : this.parseEngine();
  }
  getEngineName(e) {
    return e
      ? String(this.getEngine().name).toLowerCase() || ""
      : this.getEngine().name || "";
  }
  parseEngine() {
    this.parsedResult.engine = {};
    const e = u.find(un, (r) => {
      if (typeof r.test == "function") return r.test(this);
      if (r.test instanceof Array) return r.test.some((s) => this.test(s));
      throw new Error("Browser's test function is not valid");
    });
    return (
      e && (this.parsedResult.engine = e.describe(this.getUA())),
      this.parsedResult.engine
    );
  }
  parse() {
    return (
      this.parseBrowser(),
      this.parseOS(),
      this.parsePlatform(),
      this.parseEngine(),
      this
    );
  }
  getResult() {
    return u.assign({}, this.parsedResult);
  }
  satisfies(e) {
    const r = {};
    let s = 0;
    const n = {};
    let i = 0;
    if (
      (Object.keys(e).forEach((a) => {
        const c = e[a];
        typeof c == "string"
          ? ((n[a] = c), (i += 1))
          : typeof c == "object" && ((r[a] = c), (s += 1));
      }),
      s > 0)
    ) {
      const a = Object.keys(r),
        c = u.find(a, (h) => this.isOS(h));
      if (c) {
        const h = this.satisfies(r[c]);
        if (h !== void 0) return h;
      }
      const l = u.find(a, (h) => this.isPlatform(h));
      if (l) {
        const h = this.satisfies(r[l]);
        if (h !== void 0) return h;
      }
    }
    if (i > 0) {
      const a = Object.keys(n),
        c = u.find(a, (l) => this.isBrowser(l, !0));
      if (c !== void 0) return this.compareVersion(n[c]);
    }
  }
  isBrowser(e, r = !1) {
    const s = this.getBrowserName().toLowerCase();
    let n = e.toLowerCase();
    const i = u.getBrowserTypeByAlias(n);
    return r && i && (n = i.toLowerCase()), n === s;
  }
  compareVersion(e) {
    let r = [0],
      s = e,
      n = !1;
    const i = this.getBrowserVersion();
    if (typeof i == "string")
      return (
        e[0] === ">" || e[0] === "<"
          ? ((s = e.substr(1)),
            e[1] === "=" ? ((n = !0), (s = e.substr(2))) : (r = []),
            e[0] === ">" ? r.push(1) : r.push(-1))
          : e[0] === "="
            ? (s = e.substr(1))
            : e[0] === "~" && ((n = !0), (s = e.substr(1))),
        r.indexOf(u.compareVersions(i, s, n)) > -1
      );
  }
  isOS(e) {
    return this.getOSName(!0) === String(e).toLowerCase();
  }
  isPlatform(e) {
    return this.getPlatformType(!0) === String(e).toLowerCase();
  }
  isEngine(e) {
    return this.getEngineName(!0) === String(e).toLowerCase();
  }
  is(e, r = !1) {
    return this.isBrowser(e, r) || this.isOS(e) || this.isPlatform(e);
  }
  some(e = []) {
    return e.some((r) => this.is(r));
  }
}
/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */ class vt {
  static getParser(e, r = !1) {
    if (typeof e != "string") throw new Error("UserAgent should be a string");
    return new je(e, r);
  }
  static parse(e) {
    return new je(e).getResult();
  }
  static get BROWSER_MAP() {
    return St;
  }
  static get ENGINE_MAP() {
    return O;
  }
  static get OS_MAP() {
    return E;
  }
  static get PLATFORMS_MAP() {
    return v;
  }
}
const Gn =
    ({ serviceId: t, clientVersion: e }) =>
    async () => {
      var n, i, o, a, c;
      const r =
          typeof window < "u" &&
          (n = window == null ? void 0 : window.navigator) != null &&
          n.userAgent
            ? vt.parse(window.navigator.userAgent)
            : void 0,
        s = [
          ["aws-sdk-js", e],
          ["ua", "2.0"],
          [
            `os/${((i = r == null ? void 0 : r.os) == null ? void 0 : i.name) || "other"}`,
            (o = r == null ? void 0 : r.os) == null ? void 0 : o.version,
          ],
          ["lang/js"],
          [
            "md/browser",
            `${((a = r == null ? void 0 : r.browser) == null ? void 0 : a.name) ?? "unknown"}_${((c = r == null ? void 0 : r.browser) == null ? void 0 : c.version) ?? "unknown"}`,
          ],
        ];
      return t && s.push([`api/${t}`, e]), s;
    },
  Kn = (t) => () => Promise.reject(t),
  We = typeof TextEncoder == "function" ? new TextEncoder() : null,
  Qn = (t) => {
    if (typeof t == "string") {
      if (We) return We.encode(t).byteLength;
      let e = t.length;
      for (let r = e - 1; r >= 0; r--) {
        const s = t.charCodeAt(r);
        s > 127 && s <= 2047 ? e++ : s > 2047 && s <= 65535 && (e += 2),
          s >= 56320 && s <= 57343 && r--;
      }
      return e;
    } else {
      if (typeof t.byteLength == "number") return t.byteLength;
      if (typeof t.size == "number") return t.size;
    }
    throw new Error(`Body Length computation failed for ${t}`);
  },
  dn = ["in-region", "cross-region", "mobile", "standard", "legacy"],
  Xn = ({ defaultsMode: t } = {}) =>
    Ct(async () => {
      const e = typeof t == "function" ? await t() : t;
      switch (e == null ? void 0 : e.toLowerCase()) {
        case "auto":
          return Promise.resolve(ln() ? "mobile" : "standard");
        case "mobile":
        case "in-region":
        case "cross-region":
        case "standard":
        case "legacy":
          return Promise.resolve(e == null ? void 0 : e.toLocaleLowerCase());
        case void 0:
          return Promise.resolve("legacy");
        default:
          throw new Error(
            `Invalid parameter for "defaultsMode", expect ${dn.join(", ")}, got ${e}`,
          );
      }
    }),
  ln = () => {
    var r, s;
    const t =
        typeof window < "u" &&
        (r = window == null ? void 0 : window.navigator) != null &&
        r.userAgent
          ? vt.parse(window.navigator.userAgent)
          : void 0,
      e = (s = t == null ? void 0 : t.platform) == null ? void 0 : s.type;
    return e === "tablet" || e === "mobile";
  },
  Zn = (t) => {
    let e = async () => {
      if (t.region === void 0)
        throw new Error("Region is missing from runtimeConfig");
      const r = t.region;
      return typeof r == "string" ? r : r();
    };
    return {
      setRegion(r) {
        e = r;
      },
      region() {
        return e;
      },
    };
  },
  Yn = (t) => ({ region: t.region() });
export {
  qn as A,
  Tn as B,
  _t as C,
  de as D,
  Mn as E,
  $n as F,
  In as G,
  xn as H,
  kn as I,
  Bn as J,
  zn as K,
  Rn as L,
  En as M,
  Hn as N,
  An as O,
  Dn as P,
  Un as Q,
  Ln as R,
  Vn as S,
  vn as T,
  Ge as U,
  mn as V,
  xt as W,
  wn as X,
  Pn as a,
  pn as b,
  Wn as c,
  pe as d,
  Cn as e,
  ce as f,
  _n as g,
  Sr as h,
  kt as i,
  Qn as j,
  Gn as k,
  Kn as l,
  Fn as m,
  x as n,
  On as o,
  ue as p,
  Nn as q,
  jn as r,
  Xn as s,
  yn as t,
  bn as u,
  hn as v,
  Yn as w,
  Sn as x,
  gn as y,
  Zn as z,
};
