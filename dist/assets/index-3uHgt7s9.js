import {
  c as l,
  A as w,
  a as b,
  s as z,
  d as K,
  b as D,
  e as F,
  f as M,
  g as _,
  h as L,
  i as P,
  j as $,
  k as q,
  l as B,
  m as V,
  G as H,
  n as j,
  o as N,
  p as J,
  q as Q,
  r as U,
  S as I,
  t as R,
} from "./loadSts-BXCd9ehu.js";
import {
  y as fe,
  C as ye,
  E as he,
  w as ge,
  I as Ie,
  x as Te,
  v as Re,
  M as pe,
  P as We,
  R as ke,
  u as ve,
} from "./loadSts-BXCd9ehu.js";
import "./index-E6ebdd6W.js";
import { C as m, g as u, a as S } from "./index-DyJM_6tD.js";
import { b as xe } from "./index-DyJM_6tD.js";
const X = (e, t) => {
  for (const s of Object.keys(e)) {
    const n = e[s],
      o = async function (i, r, d) {
        const c = new n(i);
        if (typeof r == "function") this.send(c, r);
        else if (typeof d == "function") {
          if (typeof r != "object")
            throw new Error(`Expected http options but got ${typeof r}`);
          this.send(c, r || {}, d);
        } else return this.send(c, r);
      },
      a = (s[0].toLowerCase() + s.slice(1)).replace(/Command$/, "");
    t.prototype[a] = o;
  }
};
class Y extends m
  .classBuilder()
  .ep(l)
  .m(function (t, s, n, o) {
    return [
      u(n, this.serialize, this.deserialize),
      S(n, t.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithSAML", {})
  .n("STSClient", "AssumeRoleWithSAMLCommand")
  .f(w, b)
  .ser(z)
  .de(K)
  .build() {}
class p extends m
  .classBuilder()
  .ep(l)
  .m(function (t, s, n, o) {
    return [
      u(n, this.serialize, this.deserialize),
      S(n, t.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {})
  .n("STSClient", "AssumeRoleWithWebIdentityCommand")
  .f(D, F)
  .ser(M)
  .de(_)
  .build() {}
class Z extends m
  .classBuilder()
  .ep(l)
  .m(function (t, s, n, o) {
    return [
      u(n, this.serialize, this.deserialize),
      S(n, t.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSecurityTokenServiceV20110615", "DecodeAuthorizationMessage", {})
  .n("STSClient", "DecodeAuthorizationMessageCommand")
  .f(void 0, void 0)
  .ser(L)
  .de(P)
  .build() {}
class O extends m
  .classBuilder()
  .ep(l)
  .m(function (t, s, n, o) {
    return [
      u(n, this.serialize, this.deserialize),
      S(n, t.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSecurityTokenServiceV20110615", "GetAccessKeyInfo", {})
  .n("STSClient", "GetAccessKeyInfoCommand")
  .f(void 0, void 0)
  .ser($)
  .de(q)
  .build() {}
class ee extends m
  .classBuilder()
  .ep(l)
  .m(function (t, s, n, o) {
    return [
      u(n, this.serialize, this.deserialize),
      S(n, t.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSecurityTokenServiceV20110615", "GetCallerIdentity", {})
  .n("STSClient", "GetCallerIdentityCommand")
  .f(void 0, void 0)
  .ser(B)
  .de(V)
  .build() {}
class te extends m
  .classBuilder()
  .ep(l)
  .m(function (t, s, n, o) {
    return [
      u(n, this.serialize, this.deserialize),
      S(n, t.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSecurityTokenServiceV20110615", "GetFederationToken", {})
  .n("STSClient", "GetFederationTokenCommand")
  .f(void 0, H)
  .ser(j)
  .de(N)
  .build() {}
class ne extends m
  .classBuilder()
  .ep(l)
  .m(function (t, s, n, o) {
    return [
      u(n, this.serialize, this.deserialize),
      S(n, t.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSecurityTokenServiceV20110615", "GetSessionToken", {})
  .n("STSClient", "GetSessionTokenCommand")
  .f(void 0, J)
  .ser(Q)
  .de(U)
  .build() {}
const se = {
  AssumeRoleCommand: R,
  AssumeRoleWithSAMLCommand: Y,
  AssumeRoleWithWebIdentityCommand: p,
  DecodeAuthorizationMessageCommand: Z,
  GetAccessKeyInfoCommand: O,
  GetCallerIdentityCommand: ee,
  GetFederationTokenCommand: te,
  GetSessionTokenCommand: ne,
};
class oe extends I {}
X(se, oe);
const T = "us-east-1",
  W = (e) => {
    if (typeof (e == null ? void 0 : e.Arn) == "string") {
      const t = e.Arn.split(":");
      if (t.length > 4 && t[4] !== "") return t[4];
    }
  },
  k = async (e, t, s) => {
    var a;
    const n = typeof e == "function" ? await e() : e,
      o = typeof t == "function" ? await t() : t;
    return (
      (a = s == null ? void 0 : s.debug) == null ||
        a.call(
          s,
          "@aws-sdk/client-sts::resolveRegion",
          "accepting first of:",
          `${n} (provider)`,
          `${o} (parent client)`,
          `${T} (STS default)`,
        ),
      n ?? o ?? T
    );
  },
  ie = (e, t) => {
    let s, n;
    return async (o, a) => {
      var c, C, A;
      if (((n = o), !s)) {
        const {
            logger: f = (c = e == null ? void 0 : e.parentClientConfig) == null
              ? void 0
              : c.logger,
            region: h,
            requestHandler: y = (C =
              e == null ? void 0 : e.parentClientConfig) == null
              ? void 0
              : C.requestHandler,
            credentialProviderLogger: g,
          } = e,
          x = await k(
            h,
            (A = e == null ? void 0 : e.parentClientConfig) == null
              ? void 0
              : A.region,
            g,
          ),
          G = !v(y);
        s = new t({
          credentialDefaultProvider: () => async () => n,
          region: x,
          requestHandler: G ? y : void 0,
          logger: f,
        });
      }
      const { Credentials: i, AssumedRoleUser: r } = await s.send(new R(a));
      if (!i || !i.AccessKeyId || !i.SecretAccessKey)
        throw new Error(
          `Invalid response from STS.assumeRole call with role ${a.RoleArn}`,
        );
      const d = W(r);
      return {
        accessKeyId: i.AccessKeyId,
        secretAccessKey: i.SecretAccessKey,
        sessionToken: i.SessionToken,
        expiration: i.Expiration,
        ...(i.CredentialScope && { credentialScope: i.CredentialScope }),
        ...(d && { accountId: d }),
      };
    };
  },
  re = (e, t) => {
    let s;
    return async (n) => {
      var r, d, c;
      if (!s) {
        const {
            logger: C = (r = e == null ? void 0 : e.parentClientConfig) == null
              ? void 0
              : r.logger,
            region: A,
            requestHandler: f = (d =
              e == null ? void 0 : e.parentClientConfig) == null
              ? void 0
              : d.requestHandler,
            credentialProviderLogger: h,
          } = e,
          y = await k(
            A,
            (c = e == null ? void 0 : e.parentClientConfig) == null
              ? void 0
              : c.region,
            h,
          ),
          g = !v(f);
        s = new t({ region: y, requestHandler: g ? f : void 0, logger: C });
      }
      const { Credentials: o, AssumedRoleUser: a } = await s.send(new p(n));
      if (!o || !o.AccessKeyId || !o.SecretAccessKey)
        throw new Error(
          `Invalid response from STS.assumeRoleWithWebIdentity call with role ${n.RoleArn}`,
        );
      const i = W(a);
      return {
        accessKeyId: o.AccessKeyId,
        secretAccessKey: o.SecretAccessKey,
        sessionToken: o.SessionToken,
        expiration: o.Expiration,
        ...(o.CredentialScope && { credentialScope: o.CredentialScope }),
        ...(i && { accountId: i }),
      };
    };
  },
  v = (e) => {
    var t;
    return (
      ((t = e == null ? void 0 : e.metadata) == null
        ? void 0
        : t.handlerProtocol) === "h2"
    );
  },
  E = (e, t) =>
    t
      ? class extends e {
          constructor(n) {
            super(n);
            for (const o of t) this.middlewareStack.use(o);
          }
        }
      : e,
  ae = (e = {}, t) => ie(e, E(I, t)),
  ce = (e = {}, t) => re(e, E(I, t)),
  Se = (e) => (t) =>
    e({ roleAssumer: ae(t), roleAssumerWithWebIdentity: ce(t), ...t });
export {
  m as $Command,
  R as AssumeRoleCommand,
  fe as AssumeRoleResponseFilterSensitiveLog,
  Y as AssumeRoleWithSAMLCommand,
  w as AssumeRoleWithSAMLRequestFilterSensitiveLog,
  b as AssumeRoleWithSAMLResponseFilterSensitiveLog,
  p as AssumeRoleWithWebIdentityCommand,
  D as AssumeRoleWithWebIdentityRequestFilterSensitiveLog,
  F as AssumeRoleWithWebIdentityResponseFilterSensitiveLog,
  ye as CredentialsFilterSensitiveLog,
  Z as DecodeAuthorizationMessageCommand,
  he as ExpiredTokenException,
  O as GetAccessKeyInfoCommand,
  ee as GetCallerIdentityCommand,
  te as GetFederationTokenCommand,
  H as GetFederationTokenResponseFilterSensitiveLog,
  ne as GetSessionTokenCommand,
  J as GetSessionTokenResponseFilterSensitiveLog,
  ge as IDPCommunicationErrorException,
  Ie as IDPRejectedClaimException,
  Te as InvalidAuthorizationMessageException,
  Re as InvalidIdentityTokenException,
  pe as MalformedPolicyDocumentException,
  We as PackedPolicyTooLargeException,
  ke as RegionDisabledException,
  oe as STS,
  I as STSClient,
  ve as STSServiceException,
  xe as __Client,
  Se as decorateDefaultCredentialProvider,
  ae as getDefaultRoleAssumer,
  ce as getDefaultRoleAssumerWithWebIdentity,
};
