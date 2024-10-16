import {
  c as de,
  d as ce,
  n as le,
  r as ue,
  e as pe,
  E as ye,
  f as he,
  h as me,
  A as xe,
  N as Ee,
  i as we,
  p as fe,
  j as ve,
  k as Se,
  D as ge,
  l as Pe,
  m as Ce,
  S as Ie,
  o as be,
  q as Ae,
  s as Re,
  t as ke,
  u as _e,
  v as Fe,
  w as De,
  x as ze,
  y as $e,
  z as Oe,
  b as He,
  B as Ne,
  F as Ue,
  G as Le,
  H as Te,
  I as Me,
  J as je,
  K as Ge,
  L as qe,
  M as Be,
  O as Ve,
  P as Je,
  Q as We,
  R as Ke,
  T as Xe,
  U as Qe,
  V as I,
  W as u,
  X as Ye,
  C as X,
  g as Q,
  a as Y,
} from "./index-DyJM_6tD.js";
import {
  f as Ze,
  t as et,
  a as tt,
  b as st,
  F as nt,
  s as ot,
  H as it,
  e as C,
  c as rt,
  p as at,
  d as dt,
} from "./index-E6ebdd6W.js";
const Z = (e, t) => {
    const s = {};
    for (const n in t) ct(s, e, t, n);
    return s;
  },
  ct = (e, t, s, n) => {
    if (t !== null) {
      let i = s[n];
      typeof i == "function" && (i = [, i]);
      const [d = lt, m = ut, E = n] = i;
      ((typeof d == "function" && d(t[E])) || (typeof d != "function" && d)) &&
        (e[n] = m(t[E]));
      return;
    }
    let [o, r] = s[n];
    if (typeof r == "function") {
      let i;
      const d = o === void 0 && (i = r()) != null,
        m =
          (typeof o == "function" && !!o(void 0)) ||
          (typeof o != "function" && !!o);
      d ? (e[n] = i) : m && (e[n] = r());
    } else {
      const i = o === void 0 && r != null,
        d =
          (typeof o == "function" && !!o(r)) || (typeof o != "function" && !!o);
      (i || d) && (e[n] = r);
    }
  },
  lt = (e) => e != null,
  ut = (e) => e,
  a = (e) => {
    if (e == null) return {};
    if (Array.isArray(e)) return e.filter((t) => t != null).map(a);
    if (typeof e == "object") {
      const t = {};
      for (const s of Object.keys(e)) e[s] != null && (t[s] = a(e[s]));
      return t;
    }
    return e;
  },
  b = (e, t) =>
    de(e, t).then((s) => {
      if (s.length)
        try {
          return JSON.parse(s);
        } catch (n) {
          throw (
            ((n == null ? void 0 : n.name) === "SyntaxError" &&
              Object.defineProperty(n, "$responseBodyText", { value: s }),
            n)
          );
        }
      return {};
    }),
  pt = async (e, t) => {
    const s = await b(e, t);
    return (s.message = s.message ?? s.Message), s;
  },
  yt = (e, t) => {
    const s = (r, i) =>
        Object.keys(r).find((d) => d.toLowerCase() === i.toLowerCase()),
      n = (r) => {
        let i = r;
        return (
          typeof i == "number" && (i = i.toString()),
          i.indexOf(",") >= 0 && (i = i.split(",")[0]),
          i.indexOf(":") >= 0 && (i = i.split(":")[0]),
          i.indexOf("#") >= 0 && (i = i.split("#")[1]),
          i
        );
      },
      o = s(e.headers, "x-amzn-errortype");
    if (o !== void 0) return n(e.headers[o]);
    if (t.code !== void 0) return n(t.code);
    if (t.__type !== void 0) return n(t.__type);
  },
  ht = async (e, t, s) => ({
    operation: ce(t).operation,
    region:
      (await le(e.region)()) ||
      (() => {
        throw new Error(
          "expected `region` to be configured for `aws.auth#sigv4`",
        );
      })(),
  });
function mt(e) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: { name: "cognito-identity", region: e.region },
    propertiesExtractor: (t, s) => ({
      signingProperties: { config: t, context: s },
    }),
  };
}
function g(e) {
  return { schemeId: "smithy.api#noAuth" };
}
const xt = (e) => {
    const t = [];
    switch (e.operation) {
      case "GetCredentialsForIdentity": {
        t.push(g());
        break;
      }
      case "GetId": {
        t.push(g());
        break;
      }
      case "GetOpenIdToken": {
        t.push(g());
        break;
      }
      case "UnlinkIdentity": {
        t.push(g());
        break;
      }
      default:
        t.push(mt(e));
    }
    return t;
  },
  Et = (e) => ({ ...ue(e) }),
  wt = (e) => ({
    ...e,
    useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
    useFipsEndpoint: e.useFipsEndpoint ?? !1,
    defaultSigningName: "cognito-identity",
  }),
  ee = {
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
  },
  ft = "@aws-sdk/client-cognito-identity",
  vt =
    "AWS SDK for JavaScript Cognito Identity Client for Node.js, Browser and React Native",
  St = "3.654.0",
  gt = {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs":
      "node ../../scripts/compilation/inline client-cognito-identity",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps":
      "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client":
      "node ../../scripts/generate-clients/single-service --solo cognito-identity",
    "test:e2e": "ts-mocha test/**/*.ispec.ts && karma start karma.conf.js",
  },
  Pt = "./dist-cjs/index.js",
  Ct = "./dist-types/index.d.ts",
  It = "./dist-es/index.js",
  bt = !1,
  At = {
    "@aws-crypto/sha256-browser": "5.2.0",
    "@aws-crypto/sha256-js": "5.2.0",
    "@aws-sdk/client-sso-oidc": "3.654.0",
    "@aws-sdk/client-sts": "3.654.0",
    "@aws-sdk/core": "3.654.0",
    "@aws-sdk/credential-provider-node": "3.654.0",
    "@aws-sdk/middleware-host-header": "3.654.0",
    "@aws-sdk/middleware-logger": "3.654.0",
    "@aws-sdk/middleware-recursion-detection": "3.654.0",
    "@aws-sdk/middleware-user-agent": "3.654.0",
    "@aws-sdk/region-config-resolver": "3.654.0",
    "@aws-sdk/types": "3.654.0",
    "@aws-sdk/util-endpoints": "3.654.0",
    "@aws-sdk/util-user-agent-browser": "3.654.0",
    "@aws-sdk/util-user-agent-node": "3.654.0",
    "@smithy/config-resolver": "^3.0.8",
    "@smithy/core": "^2.4.3",
    "@smithy/fetch-http-handler": "^3.2.7",
    "@smithy/hash-node": "^3.0.6",
    "@smithy/invalid-dependency": "^3.0.6",
    "@smithy/middleware-content-length": "^3.0.8",
    "@smithy/middleware-endpoint": "^3.1.3",
    "@smithy/middleware-retry": "^3.0.18",
    "@smithy/middleware-serde": "^3.0.6",
    "@smithy/middleware-stack": "^3.0.6",
    "@smithy/node-config-provider": "^3.1.7",
    "@smithy/node-http-handler": "^3.2.2",
    "@smithy/protocol-http": "^4.1.3",
    "@smithy/smithy-client": "^3.3.2",
    "@smithy/types": "^3.4.2",
    "@smithy/url-parser": "^3.0.6",
    "@smithy/util-base64": "^3.0.0",
    "@smithy/util-body-length-browser": "^3.0.0",
    "@smithy/util-body-length-node": "^3.0.0",
    "@smithy/util-defaults-mode-browser": "^3.0.18",
    "@smithy/util-defaults-mode-node": "^3.0.18",
    "@smithy/util-endpoints": "^2.1.2",
    "@smithy/util-middleware": "^3.0.6",
    "@smithy/util-retry": "^3.0.6",
    "@smithy/util-utf8": "^3.0.0",
    tslib: "^2.6.2",
  },
  Rt = {
    "@aws-sdk/client-iam": "3.654.0",
    "@tsconfig/node16": "16.1.3",
    "@types/chai": "^4.2.11",
    "@types/mocha": "^8.0.4",
    "@types/node": "^16.18.96",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "3.0.2",
    typescript: "~4.9.5",
  },
  kt = { node: ">=16.0.0" },
  _t = { "<4.0": { "dist-types/*": ["dist-types/ts3.4/*"] } },
  Ft = ["dist-*/**"],
  Dt = {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/",
  },
  zt = "Apache-2.0",
  $t = { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser" },
  Ot =
    "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity",
  Ht = {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-cognito-identity",
  },
  Nt = {
    name: ft,
    description: vt,
    version: St,
    scripts: gt,
    main: Pt,
    types: Ct,
    module: It,
    sideEffects: bt,
    dependencies: At,
    devDependencies: Rt,
    engines: kt,
    typesVersions: _t,
    files: Ft,
    author: Dt,
    license: zt,
    browser: $t,
    "react-native": {
      "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native",
    },
    homepage: Ot,
    repository: Ht,
  },
  te = "required",
  y = "fn",
  h = "argv",
  f = "ref",
  T = !0,
  M = "isSet",
  S = "booleanEquals",
  w = "error",
  v = "endpoint",
  x = "tree",
  A = "PartitionResult",
  j = { [te]: !1, type: "String" },
  G = { [te]: !0, default: !1, type: "Boolean" },
  q = { [f]: "Endpoint" },
  se = { [y]: S, [h]: [{ [f]: "UseFIPS" }, !0] },
  ne = { [y]: S, [h]: [{ [f]: "UseDualStack" }, !0] },
  p = {},
  B = { [y]: "getAttr", [h]: [{ [f]: A }, "supportsFIPS"] },
  V = {
    [y]: S,
    [h]: [!0, { [y]: "getAttr", [h]: [{ [f]: A }, "supportsDualStack"] }],
  },
  J = [se],
  W = [ne],
  K = [{ [f]: "Region" }],
  Ut = {
    version: "1.0",
    parameters: { Region: j, UseDualStack: G, UseFIPS: G, Endpoint: j },
    rules: [
      {
        conditions: [{ [y]: M, [h]: [q] }],
        rules: [
          {
            conditions: J,
            error:
              "Invalid Configuration: FIPS and custom endpoint are not supported",
            type: w,
          },
          {
            conditions: W,
            error:
              "Invalid Configuration: Dualstack and custom endpoint are not supported",
            type: w,
          },
          { endpoint: { url: q, properties: p, headers: p }, type: v },
        ],
        type: x,
      },
      {
        conditions: [{ [y]: M, [h]: K }],
        rules: [
          {
            conditions: [{ [y]: "aws.partition", [h]: K, assign: A }],
            rules: [
              {
                conditions: [se, ne],
                rules: [
                  {
                    conditions: [{ [y]: S, [h]: [T, B] }, V],
                    rules: [
                      {
                        endpoint: {
                          url: "https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                          properties: p,
                          headers: p,
                        },
                        type: v,
                      },
                    ],
                    type: x,
                  },
                  {
                    error:
                      "FIPS and DualStack are enabled, but this partition does not support one or both",
                    type: w,
                  },
                ],
                type: x,
              },
              {
                conditions: J,
                rules: [
                  {
                    conditions: [{ [y]: S, [h]: [B, T] }],
                    rules: [
                      {
                        endpoint: {
                          url: "https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}",
                          properties: p,
                          headers: p,
                        },
                        type: v,
                      },
                    ],
                    type: x,
                  },
                  {
                    error:
                      "FIPS is enabled but this partition does not support FIPS",
                    type: w,
                  },
                ],
                type: x,
              },
              {
                conditions: W,
                rules: [
                  {
                    conditions: [V],
                    rules: [
                      {
                        endpoint: {
                          url: "https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}",
                          properties: p,
                          headers: p,
                        },
                        type: v,
                      },
                    ],
                    type: x,
                  },
                  {
                    error:
                      "DualStack is enabled but this partition does not support DualStack",
                    type: w,
                  },
                ],
                type: x,
              },
              {
                endpoint: {
                  url: "https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}",
                  properties: p,
                  headers: p,
                },
                type: v,
              },
            ],
            type: x,
          },
        ],
        type: x,
      },
      { error: "Invalid Configuration: Missing Region", type: w },
    ],
  },
  Lt = Ut,
  Tt = new ye({
    size: 50,
    params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"],
  }),
  Mt = (e, t = {}) =>
    Tt.get(e, () => pe(Lt, { endpointParams: e, logger: t.logger }));
he.aws = me;
const jt = (e) => ({
    apiVersion: "2014-06-30",
    base64Decoder: (e == null ? void 0 : e.base64Decoder) ?? Ze,
    base64Encoder: (e == null ? void 0 : e.base64Encoder) ?? et,
    disableHostPrefix: (e == null ? void 0 : e.disableHostPrefix) ?? !1,
    endpointProvider: (e == null ? void 0 : e.endpointProvider) ?? Mt,
    extensions: (e == null ? void 0 : e.extensions) ?? [],
    httpAuthSchemeProvider:
      (e == null ? void 0 : e.httpAuthSchemeProvider) ?? xt,
    httpAuthSchemes: (e == null ? void 0 : e.httpAuthSchemes) ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: (t) => t.getIdentityProvider("aws.auth#sigv4"),
        signer: new xe(),
      },
      {
        schemeId: "smithy.api#noAuth",
        identityProvider: (t) =>
          t.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
        signer: new Ee(),
      },
    ],
    logger: (e == null ? void 0 : e.logger) ?? new we(),
    serviceId: (e == null ? void 0 : e.serviceId) ?? "Cognito Identity",
    urlParser: (e == null ? void 0 : e.urlParser) ?? fe,
    utf8Decoder: (e == null ? void 0 : e.utf8Decoder) ?? tt,
    utf8Encoder: (e == null ? void 0 : e.utf8Encoder) ?? st,
  }),
  Gt = (e) => {
    const t = Re(e),
      s = () => t().then(ke),
      n = jt(e);
    return {
      ...n,
      ...e,
      runtime: "browser",
      defaultsMode: t,
      bodyLengthChecker: (e == null ? void 0 : e.bodyLengthChecker) ?? ve,
      credentialDefaultProvider:
        (e == null ? void 0 : e.credentialDefaultProvider) ??
        ((o) => () => Promise.reject(new Error("Credential is missing"))),
      defaultUserAgentProvider:
        (e == null ? void 0 : e.defaultUserAgentProvider) ??
        Se({ serviceId: n.serviceId, clientVersion: Nt.version }),
      maxAttempts: (e == null ? void 0 : e.maxAttempts) ?? ge,
      region: (e == null ? void 0 : e.region) ?? Pe("Region is missing"),
      requestHandler: nt.create((e == null ? void 0 : e.requestHandler) ?? s),
      retryMode:
        (e == null ? void 0 : e.retryMode) ??
        (async () => (await s()).retryMode || Ce),
      sha256: (e == null ? void 0 : e.sha256) ?? Ie,
      streamCollector: (e == null ? void 0 : e.streamCollector) ?? ot,
      useDualstackEndpoint:
        (e == null ? void 0 : e.useDualstackEndpoint) ??
        (() => Promise.resolve(be)),
      useFipsEndpoint:
        (e == null ? void 0 : e.useFipsEndpoint) ?? (() => Promise.resolve(Ae)),
    };
  },
  qt = (e) => {
    const t = e.httpAuthSchemes;
    let s = e.httpAuthSchemeProvider,
      n = e.credentials;
    return {
      setHttpAuthScheme(o) {
        const r = t.findIndex((i) => i.schemeId === o.schemeId);
        r === -1 ? t.push(o) : t.splice(r, 1, o);
      },
      httpAuthSchemes() {
        return t;
      },
      setHttpAuthSchemeProvider(o) {
        s = o;
      },
      httpAuthSchemeProvider() {
        return s;
      },
      setCredentials(o) {
        n = o;
      },
      credentials() {
        return n;
      },
    };
  },
  Bt = (e) => ({
    httpAuthSchemes: e.httpAuthSchemes(),
    httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
    credentials: e.credentials(),
  }),
  P = (e) => e,
  Vt = (e, t) => {
    const s = { ...P(Oe(e)), ...P(_e(e)), ...P(Fe(e)), ...P(qt(e)) };
    return (
      t.forEach((n) => n.configure(s)),
      { ...e, ...De(s), ...ze(s), ...$e(s), ...Bt(s) }
    );
  };
class Es extends He {
  constructor(...[t]) {
    const s = Gt(t || {}),
      n = wt(s),
      o = Ne(n),
      r = Ue(o),
      i = Le(r),
      d = Xe(i),
      m = Te(d),
      E = Et(m),
      L = Vt(E, (t == null ? void 0 : t.extensions) || []);
    super(L),
      (this.config = L),
      this.middlewareStack.use(Me(this.config)),
      this.middlewareStack.use(je(this.config)),
      this.middlewareStack.use(Ge(this.config)),
      this.middlewareStack.use(qe(this.config)),
      this.middlewareStack.use(Be(this.config)),
      this.middlewareStack.use(Ve(this.config)),
      this.middlewareStack.use(
        Je(this.config, {
          httpAuthSchemeParametersProvider: ht,
          identityProviderConfigProvider: async (ae) =>
            new We({ "aws.auth#sigv4": ae.credentials }),
        }),
      ),
      this.middlewareStack.use(Ke(this.config));
  }
  destroy() {
    super.destroy();
  }
}
class c extends Qe {
  constructor(t) {
    super(t), Object.setPrototypeOf(this, c.prototype);
  }
}
class R extends c {
  constructor(t) {
    super({ name: "InternalErrorException", $fault: "server", ...t }),
      (this.name = "InternalErrorException"),
      (this.$fault = "server"),
      Object.setPrototypeOf(this, R.prototype);
  }
}
class k extends c {
  constructor(t) {
    super({ name: "InvalidParameterException", $fault: "client", ...t }),
      (this.name = "InvalidParameterException"),
      (this.$fault = "client"),
      Object.setPrototypeOf(this, k.prototype);
  }
}
class _ extends c {
  constructor(t) {
    super({ name: "LimitExceededException", $fault: "client", ...t }),
      (this.name = "LimitExceededException"),
      (this.$fault = "client"),
      Object.setPrototypeOf(this, _.prototype);
  }
}
class F extends c {
  constructor(t) {
    super({ name: "NotAuthorizedException", $fault: "client", ...t }),
      (this.name = "NotAuthorizedException"),
      (this.$fault = "client"),
      Object.setPrototypeOf(this, F.prototype);
  }
}
class D extends c {
  constructor(t) {
    super({ name: "ResourceConflictException", $fault: "client", ...t }),
      (this.name = "ResourceConflictException"),
      (this.$fault = "client"),
      Object.setPrototypeOf(this, D.prototype);
  }
}
class z extends c {
  constructor(t) {
    super({ name: "TooManyRequestsException", $fault: "client", ...t }),
      (this.name = "TooManyRequestsException"),
      (this.$fault = "client"),
      Object.setPrototypeOf(this, z.prototype);
  }
}
class $ extends c {
  constructor(t) {
    super({ name: "ResourceNotFoundException", $fault: "client", ...t }),
      (this.name = "ResourceNotFoundException"),
      (this.$fault = "client"),
      Object.setPrototypeOf(this, $.prototype);
  }
}
class O extends c {
  constructor(t) {
    super({ name: "ExternalServiceException", $fault: "client", ...t }),
      (this.name = "ExternalServiceException"),
      (this.$fault = "client"),
      Object.setPrototypeOf(this, O.prototype);
  }
}
class H extends c {
  constructor(t) {
    super({
      name: "InvalidIdentityPoolConfigurationException",
      $fault: "client",
      ...t,
    }),
      (this.name = "InvalidIdentityPoolConfigurationException"),
      (this.$fault = "client"),
      Object.setPrototypeOf(this, H.prototype);
  }
}
class N extends c {
  constructor(t) {
    super({
      name: "DeveloperUserAlreadyRegisteredException",
      $fault: "client",
      ...t,
    }),
      (this.name = "DeveloperUserAlreadyRegisteredException"),
      (this.$fault = "client"),
      Object.setPrototypeOf(this, N.prototype);
  }
}
class U extends c {
  constructor(t) {
    super({ name: "ConcurrentModificationException", $fault: "client", ...t }),
      (this.name = "ConcurrentModificationException"),
      (this.$fault = "client"),
      Object.setPrototypeOf(this, U.prototype);
  }
}
const Jt = (e) => ({ ...e, ...(e.Logins && { Logins: I }) }),
  Wt = (e) => ({ ...e, ...(e.SecretKey && { SecretKey: I }) }),
  Kt = (e) => ({
    ...e,
    ...(e.Credentials && { Credentials: Wt(e.Credentials) }),
  }),
  Xt = (e) => ({ ...e, ...(e.Logins && { Logins: I }) }),
  Qt = async (e, t) => {
    const s = re("GetCredentialsForIdentity");
    let n;
    return (n = JSON.stringify(a(e))), ie(t, s, "/", void 0, n);
  },
  Yt = async (e, t) => {
    const s = re("GetId");
    let n;
    return (n = JSON.stringify(a(e))), ie(t, s, "/", void 0, n);
  },
  Zt = async (e, t) => {
    if (e.statusCode >= 300) return oe(e, t);
    const s = await b(e.body, t);
    let n = {};
    return (n = ys(s)), { $metadata: l(e), ...n };
  },
  es = async (e, t) => {
    if (e.statusCode >= 300) return oe(e, t);
    const s = await b(e.body, t);
    let n = {};
    return (n = a(s)), { $metadata: l(e), ...n };
  },
  oe = async (e, t) => {
    const s = { ...e, body: await pt(e.body, t) },
      n = yt(e, s.body);
    switch (n) {
      case "InternalErrorException":
      case "com.amazonaws.cognitoidentity#InternalErrorException":
        throw await os(s);
      case "InvalidParameterException":
      case "com.amazonaws.cognitoidentity#InvalidParameterException":
        throw await rs(s);
      case "LimitExceededException":
      case "com.amazonaws.cognitoidentity#LimitExceededException":
        throw await as(s);
      case "NotAuthorizedException":
      case "com.amazonaws.cognitoidentity#NotAuthorizedException":
        throw await ds(s);
      case "ResourceConflictException":
      case "com.amazonaws.cognitoidentity#ResourceConflictException":
        throw await cs(s);
      case "TooManyRequestsException":
      case "com.amazonaws.cognitoidentity#TooManyRequestsException":
        throw await us(s);
      case "ResourceNotFoundException":
      case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
        throw await ls(s);
      case "ExternalServiceException":
      case "com.amazonaws.cognitoidentity#ExternalServiceException":
        throw await ns(s);
      case "InvalidIdentityPoolConfigurationException":
      case "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":
        throw await is(s);
      case "DeveloperUserAlreadyRegisteredException":
      case "com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException":
        throw await ss(s);
      case "ConcurrentModificationException":
      case "com.amazonaws.cognitoidentity#ConcurrentModificationException":
        throw await ts(s);
      default:
        const o = s.body;
        return hs({ output: e, parsedBody: o, errorCode: n });
    }
  },
  ts = async (e, t) => {
    const s = e.body,
      n = a(s),
      o = new U({ $metadata: l(e), ...n });
    return u(o, s);
  },
  ss = async (e, t) => {
    const s = e.body,
      n = a(s),
      o = new N({ $metadata: l(e), ...n });
    return u(o, s);
  },
  ns = async (e, t) => {
    const s = e.body,
      n = a(s),
      o = new O({ $metadata: l(e), ...n });
    return u(o, s);
  },
  os = async (e, t) => {
    const s = e.body,
      n = a(s),
      o = new R({ $metadata: l(e), ...n });
    return u(o, s);
  },
  is = async (e, t) => {
    const s = e.body,
      n = a(s),
      o = new H({ $metadata: l(e), ...n });
    return u(o, s);
  },
  rs = async (e, t) => {
    const s = e.body,
      n = a(s),
      o = new k({ $metadata: l(e), ...n });
    return u(o, s);
  },
  as = async (e, t) => {
    const s = e.body,
      n = a(s),
      o = new _({ $metadata: l(e), ...n });
    return u(o, s);
  },
  ds = async (e, t) => {
    const s = e.body,
      n = a(s),
      o = new F({ $metadata: l(e), ...n });
    return u(o, s);
  },
  cs = async (e, t) => {
    const s = e.body,
      n = a(s),
      o = new D({ $metadata: l(e), ...n });
    return u(o, s);
  },
  ls = async (e, t) => {
    const s = e.body,
      n = a(s),
      o = new $({ $metadata: l(e), ...n });
    return u(o, s);
  },
  us = async (e, t) => {
    const s = e.body,
      n = a(s),
      o = new z({ $metadata: l(e), ...n });
    return u(o, s);
  },
  ps = (e, t) =>
    Z(e, {
      AccessKeyId: C,
      Expiration: (s) => rt(at(dt(s))),
      SecretKey: C,
      SessionToken: C,
    }),
  ys = (e, t) => Z(e, { Credentials: (s) => ps(s), IdentityId: C }),
  l = (e) => ({
    httpStatusCode: e.statusCode,
    requestId:
      e.headers["x-amzn-requestid"] ??
      e.headers["x-amzn-request-id"] ??
      e.headers["x-amz-request-id"],
    extendedRequestId: e.headers["x-amz-id-2"],
    cfId: e.headers["x-amz-cf-id"],
  }),
  hs = Ye(c),
  ie = async (e, t, s, n, o) => {
    const {
        hostname: r,
        protocol: i = "https",
        port: d,
        path: m,
      } = await e.endpoint(),
      E = {
        protocol: i,
        hostname: r,
        port: d,
        method: "POST",
        path: m.endsWith("/") ? m.slice(0, -1) + s : m + s,
        headers: t,
      };
    return o !== void 0 && (E.body = o), new it(E);
  };
function re(e) {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AWSCognitoIdentityService.${e}`,
  };
}
class ws extends X.classBuilder()
  .ep(ee)
  .m(function (t, s, n, o) {
    return [
      Q(n, this.serialize, this.deserialize),
      Y(n, t.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSCognitoIdentityService", "GetCredentialsForIdentity", {})
  .n("CognitoIdentityClient", "GetCredentialsForIdentityCommand")
  .f(Jt, Kt)
  .ser(Qt)
  .de(Zt)
  .build() {}
class fs extends X.classBuilder()
  .ep(ee)
  .m(function (t, s, n, o) {
    return [
      Q(n, this.serialize, this.deserialize),
      Y(n, t.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSCognitoIdentityService", "GetId", {})
  .n("CognitoIdentityClient", "GetIdCommand")
  .f(Xt, void 0)
  .ser(Yt)
  .de(es)
  .build() {}
export {
  Es as CognitoIdentityClient,
  ws as GetCredentialsForIdentityCommand,
  fs as GetIdCommand,
};
