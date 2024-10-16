import {
  f as jt,
  t as qt,
  a as Kt,
  b as Xt,
  F as Jt,
  s as Zt,
  m as he,
  e as g,
  c as Yt,
  n as Qt,
  H as Dt,
} from "./index-E6ebdd6W.js";
import {
  c as es,
  r as ts,
  d as ss,
  n as ns,
  e as rs,
  E as is,
  f as os,
  h as as,
  A as ls,
  N as cs,
  i as ds,
  p as us,
  j as fs,
  k as hs,
  D as ps,
  l as gs,
  m as ms,
  S as ys,
  o as bs,
  q as Es,
  s as As,
  t as Ns,
  u as Ps,
  w as ws,
  x as Ts,
  y as xs,
  z as Ss,
  v as Cs,
  b as Is,
  B as _s,
  F as vs,
  G as Rs,
  H as Os,
  I as ks,
  J as $s,
  K as Fs,
  L as Ls,
  M as Ms,
  O as Vs,
  P as Gs,
  R as Us,
  Q as zs,
  T as Ws,
  U as Bs,
  V as Xe,
  W,
  X as Hs,
  C as js,
  g as qs,
  a as Ks,
} from "./index-DyJM_6tD.js";
function lt(e) {
  return encodeURIComponent(e).replace(/[!'()*]/g, function (t) {
    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
const St = (e) => {
  const t = "#text";
  for (const s in e)
    e.hasOwnProperty(s) && e[s][t] !== void 0
      ? (e[s] = e[s][t])
      : typeof e[s] == "object" && e[s] !== null && (e[s] = St(e[s]));
  return e;
};
var Je = {},
  pe = {};
(function (e) {
  const t =
      ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
    s = t + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
    n = "[" + t + "][" + s + "]*",
    r = new RegExp("^" + n + "$"),
    i = function (a, o) {
      const c = [];
      let d = o.exec(a);
      for (; d; ) {
        const f = [];
        f.startIndex = o.lastIndex - d[0].length;
        const m = d.length;
        for (let N = 0; N < m; N++) f.push(d[N]);
        c.push(f), (d = o.exec(a));
      }
      return c;
    },
    l = function (a) {
      const o = r.exec(a);
      return !(o === null || typeof o > "u");
    };
  (e.isExist = function (a) {
    return typeof a < "u";
  }),
    (e.isEmptyObject = function (a) {
      return Object.keys(a).length === 0;
    }),
    (e.merge = function (a, o, c) {
      if (o) {
        const d = Object.keys(o),
          f = d.length;
        for (let m = 0; m < f; m++)
          c === "strict" ? (a[d[m]] = [o[d[m]]]) : (a[d[m]] = o[d[m]]);
      }
    }),
    (e.getValue = function (a) {
      return e.isExist(a) ? a : "";
    }),
    (e.isName = l),
    (e.getAllMatches = i),
    (e.nameRegexp = n);
})(pe);
const Ze = pe,
  Xs = { allowBooleanAttributes: !1, unpairedTags: [] };
Je.validate = function (e, t) {
  t = Object.assign({}, Xs, t);
  const s = [];
  let n = !1,
    r = !1;
  e[0] === "\uFEFF" && (e = e.substr(1));
  for (let i = 0; i < e.length; i++)
    if (e[i] === "<" && e[i + 1] === "?") {
      if (((i += 2), (i = dt(e, i)), i.err)) return i;
    } else if (e[i] === "<") {
      let l = i;
      if ((i++, e[i] === "!")) {
        i = ut(e, i);
        continue;
      } else {
        let a = !1;
        e[i] === "/" && ((a = !0), i++);
        let o = "";
        for (
          ;
          i < e.length &&
          e[i] !== ">" &&
          e[i] !== " " &&
          e[i] !== "	" &&
          e[i] !==
            `
` &&
          e[i] !== "\r";
          i++
        )
          o += e[i];
        if (
          ((o = o.trim()),
          o[o.length - 1] === "/" && ((o = o.substring(0, o.length - 1)), i--),
          !sn(o))
        ) {
          let f;
          return (
            o.trim().length === 0
              ? (f = "Invalid space after '<'.")
              : (f = "Tag '" + o + "' is an invalid name."),
            E("InvalidTag", f, S(e, i))
          );
        }
        const c = Ys(e, i);
        if (c === !1)
          return E(
            "InvalidAttr",
            "Attributes for '" + o + "' have open quote.",
            S(e, i),
          );
        let d = c.value;
        if (((i = c.index), d[d.length - 1] === "/")) {
          const f = i - d.length;
          d = d.substring(0, d.length - 1);
          const m = ft(d, t);
          if (m === !0) n = !0;
          else return E(m.err.code, m.err.msg, S(e, f + m.err.line));
        } else if (a)
          if (c.tagClosed) {
            if (d.trim().length > 0)
              return E(
                "InvalidTag",
                "Closing tag '" +
                  o +
                  "' can't have attributes or invalid starting.",
                S(e, l),
              );
            if (s.length === 0)
              return E(
                "InvalidTag",
                "Closing tag '" + o + "' has not been opened.",
                S(e, l),
              );
            {
              const f = s.pop();
              if (o !== f.tagName) {
                let m = S(e, f.tagStartPos);
                return E(
                  "InvalidTag",
                  "Expected closing tag '" +
                    f.tagName +
                    "' (opened in line " +
                    m.line +
                    ", col " +
                    m.col +
                    ") instead of closing tag '" +
                    o +
                    "'.",
                  S(e, l),
                );
              }
              s.length == 0 && (r = !0);
            }
          } else
            return E(
              "InvalidTag",
              "Closing tag '" + o + "' doesn't have proper closing.",
              S(e, i),
            );
        else {
          const f = ft(d, t);
          if (f !== !0)
            return E(f.err.code, f.err.msg, S(e, i - d.length + f.err.line));
          if (r === !0)
            return E(
              "InvalidXml",
              "Multiple possible root nodes found.",
              S(e, i),
            );
          t.unpairedTags.indexOf(o) !== -1 ||
            s.push({ tagName: o, tagStartPos: l }),
            (n = !0);
        }
        for (i++; i < e.length; i++)
          if (e[i] === "<")
            if (e[i + 1] === "!") {
              i++, (i = ut(e, i));
              continue;
            } else if (e[i + 1] === "?") {
              if (((i = dt(e, ++i)), i.err)) return i;
            } else break;
          else if (e[i] === "&") {
            const f = en(e, i);
            if (f == -1)
              return E("InvalidChar", "char '&' is not expected.", S(e, i));
            i = f;
          } else if (r === !0 && !ct(e[i]))
            return E("InvalidXml", "Extra text at the end", S(e, i));
        e[i] === "<" && i--;
      }
    } else {
      if (ct(e[i])) continue;
      return E("InvalidChar", "char '" + e[i] + "' is not expected.", S(e, i));
    }
  if (n) {
    if (s.length == 1)
      return E(
        "InvalidTag",
        "Unclosed tag '" + s[0].tagName + "'.",
        S(e, s[0].tagStartPos),
      );
    if (s.length > 0)
      return E(
        "InvalidXml",
        "Invalid '" +
          JSON.stringify(
            s.map((i) => i.tagName),
            null,
            4,
          ).replace(/\r?\n/g, "") +
          "' found.",
        { line: 1, col: 1 },
      );
  } else return E("InvalidXml", "Start tag expected.", 1);
  return !0;
};
function ct(e) {
  return (
    e === " " ||
    e === "	" ||
    e ===
      `
` ||
    e === "\r"
  );
}
function dt(e, t) {
  const s = t;
  for (; t < e.length; t++)
    if (e[t] == "?" || e[t] == " ") {
      const n = e.substr(s, t - s);
      if (t > 5 && n === "xml")
        return E(
          "InvalidXml",
          "XML declaration allowed only at the start of the document.",
          S(e, t),
        );
      if (e[t] == "?" && e[t + 1] == ">") {
        t++;
        break;
      } else continue;
    }
  return t;
}
function ut(e, t) {
  if (e.length > t + 5 && e[t + 1] === "-" && e[t + 2] === "-") {
    for (t += 3; t < e.length; t++)
      if (e[t] === "-" && e[t + 1] === "-" && e[t + 2] === ">") {
        t += 2;
        break;
      }
  } else if (
    e.length > t + 8 &&
    e[t + 1] === "D" &&
    e[t + 2] === "O" &&
    e[t + 3] === "C" &&
    e[t + 4] === "T" &&
    e[t + 5] === "Y" &&
    e[t + 6] === "P" &&
    e[t + 7] === "E"
  ) {
    let s = 1;
    for (t += 8; t < e.length; t++)
      if (e[t] === "<") s++;
      else if (e[t] === ">" && (s--, s === 0)) break;
  } else if (
    e.length > t + 9 &&
    e[t + 1] === "[" &&
    e[t + 2] === "C" &&
    e[t + 3] === "D" &&
    e[t + 4] === "A" &&
    e[t + 5] === "T" &&
    e[t + 6] === "A" &&
    e[t + 7] === "["
  ) {
    for (t += 8; t < e.length; t++)
      if (e[t] === "]" && e[t + 1] === "]" && e[t + 2] === ">") {
        t += 2;
        break;
      }
  }
  return t;
}
const Js = '"',
  Zs = "'";
function Ys(e, t) {
  let s = "",
    n = "",
    r = !1;
  for (; t < e.length; t++) {
    if (e[t] === Js || e[t] === Zs)
      n === "" ? (n = e[t]) : n !== e[t] || (n = "");
    else if (e[t] === ">" && n === "") {
      r = !0;
      break;
    }
    s += e[t];
  }
  return n !== "" ? !1 : { value: s, index: t, tagClosed: r };
}
const Qs = new RegExp(
  `(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`,
  "g",
);
function ft(e, t) {
  const s = Ze.getAllMatches(e, Qs),
    n = {};
  for (let r = 0; r < s.length; r++) {
    if (s[r][1].length === 0)
      return E(
        "InvalidAttr",
        "Attribute '" + s[r][2] + "' has no space in starting.",
        le(s[r]),
      );
    if (s[r][3] !== void 0 && s[r][4] === void 0)
      return E(
        "InvalidAttr",
        "Attribute '" + s[r][2] + "' is without value.",
        le(s[r]),
      );
    if (s[r][3] === void 0 && !t.allowBooleanAttributes)
      return E(
        "InvalidAttr",
        "boolean attribute '" + s[r][2] + "' is not allowed.",
        le(s[r]),
      );
    const i = s[r][2];
    if (!tn(i))
      return E(
        "InvalidAttr",
        "Attribute '" + i + "' is an invalid name.",
        le(s[r]),
      );
    if (!n.hasOwnProperty(i)) n[i] = 1;
    else
      return E("InvalidAttr", "Attribute '" + i + "' is repeated.", le(s[r]));
  }
  return !0;
}
function Ds(e, t) {
  let s = /\d/;
  for (e[t] === "x" && (t++, (s = /[\da-fA-F]/)); t < e.length; t++) {
    if (e[t] === ";") return t;
    if (!e[t].match(s)) break;
  }
  return -1;
}
function en(e, t) {
  if ((t++, e[t] === ";")) return -1;
  if (e[t] === "#") return t++, Ds(e, t);
  let s = 0;
  for (; t < e.length; t++, s++)
    if (!(e[t].match(/\w/) && s < 20)) {
      if (e[t] === ";") break;
      return -1;
    }
  return t;
}
function E(e, t, s) {
  return { err: { code: e, msg: t, line: s.line || s, col: s.col } };
}
function tn(e) {
  return Ze.isName(e);
}
function sn(e) {
  return Ze.isName(e);
}
function S(e, t) {
  const s = e.substring(0, t).split(/\r?\n/);
  return { line: s.length, col: s[s.length - 1].length + 1 };
}
function le(e) {
  return e.startIndex + e[1].length;
}
var Ye = {};
const Ct = {
    preserveOrder: !1,
    attributeNamePrefix: "@_",
    attributesGroupName: !1,
    textNodeName: "#text",
    ignoreAttributes: !0,
    removeNSPrefix: !1,
    allowBooleanAttributes: !1,
    parseTagValue: !0,
    parseAttributeValue: !1,
    trimValues: !0,
    cdataPropName: !1,
    numberParseOptions: { hex: !0, leadingZeros: !0, eNotation: !0 },
    tagValueProcessor: function (e, t) {
      return t;
    },
    attributeValueProcessor: function (e, t) {
      return t;
    },
    stopNodes: [],
    alwaysCreateTextNode: !1,
    isArray: () => !1,
    commentPropName: !1,
    unpairedTags: [],
    processEntities: !0,
    htmlEntities: !1,
    ignoreDeclaration: !1,
    ignorePiTags: !1,
    transformTagName: !1,
    transformAttributeName: !1,
    updateTag: function (e, t, s) {
      return e;
    },
  },
  nn = function (e) {
    return Object.assign({}, Ct, e);
  };
Ye.buildOptions = nn;
Ye.defaultOptions = Ct;
class rn {
  constructor(t) {
    (this.tagname = t), (this.child = []), (this[":@"] = {});
  }
  add(t, s) {
    t === "__proto__" && (t = "#__proto__"), this.child.push({ [t]: s });
  }
  addChild(t) {
    t.tagname === "__proto__" && (t.tagname = "#__proto__"),
      t[":@"] && Object.keys(t[":@"]).length > 0
        ? this.child.push({ [t.tagname]: t.child, ":@": t[":@"] })
        : this.child.push({ [t.tagname]: t.child });
  }
}
var on = rn;
const an = pe;
function ln(e, t) {
  const s = {};
  if (
    e[t + 3] === "O" &&
    e[t + 4] === "C" &&
    e[t + 5] === "T" &&
    e[t + 6] === "Y" &&
    e[t + 7] === "P" &&
    e[t + 8] === "E"
  ) {
    t = t + 9;
    let n = 1,
      r = !1,
      i = !1,
      l = "";
    for (; t < e.length; t++)
      if (e[t] === "<" && !i) {
        if (r && un(e, t))
          (t += 7),
            ([entityName, val, t] = cn(e, t + 1)),
            val.indexOf("&") === -1 &&
              (s[gn(entityName)] = {
                regx: RegExp(`&${entityName};`, "g"),
                val,
              });
        else if (r && fn(e, t)) t += 8;
        else if (r && hn(e, t)) t += 8;
        else if (r && pn(e, t)) t += 9;
        else if (dn) i = !0;
        else throw new Error("Invalid DOCTYPE");
        n++, (l = "");
      } else if (e[t] === ">") {
        if (
          (i ? e[t - 1] === "-" && e[t - 2] === "-" && ((i = !1), n--) : n--,
          n === 0)
        )
          break;
      } else e[t] === "[" ? (r = !0) : (l += e[t]);
    if (n !== 0) throw new Error("Unclosed DOCTYPE");
  } else throw new Error("Invalid Tag instead of DOCTYPE");
  return { entities: s, i: t };
}
function cn(e, t) {
  let s = "";
  for (; t < e.length && e[t] !== "'" && e[t] !== '"'; t++) s += e[t];
  if (((s = s.trim()), s.indexOf(" ") !== -1))
    throw new Error("External entites are not supported");
  const n = e[t++];
  let r = "";
  for (; t < e.length && e[t] !== n; t++) r += e[t];
  return [s, r, t];
}
function dn(e, t) {
  return e[t + 1] === "!" && e[t + 2] === "-" && e[t + 3] === "-";
}
function un(e, t) {
  return (
    e[t + 1] === "!" &&
    e[t + 2] === "E" &&
    e[t + 3] === "N" &&
    e[t + 4] === "T" &&
    e[t + 5] === "I" &&
    e[t + 6] === "T" &&
    e[t + 7] === "Y"
  );
}
function fn(e, t) {
  return (
    e[t + 1] === "!" &&
    e[t + 2] === "E" &&
    e[t + 3] === "L" &&
    e[t + 4] === "E" &&
    e[t + 5] === "M" &&
    e[t + 6] === "E" &&
    e[t + 7] === "N" &&
    e[t + 8] === "T"
  );
}
function hn(e, t) {
  return (
    e[t + 1] === "!" &&
    e[t + 2] === "A" &&
    e[t + 3] === "T" &&
    e[t + 4] === "T" &&
    e[t + 5] === "L" &&
    e[t + 6] === "I" &&
    e[t + 7] === "S" &&
    e[t + 8] === "T"
  );
}
function pn(e, t) {
  return (
    e[t + 1] === "!" &&
    e[t + 2] === "N" &&
    e[t + 3] === "O" &&
    e[t + 4] === "T" &&
    e[t + 5] === "A" &&
    e[t + 6] === "T" &&
    e[t + 7] === "I" &&
    e[t + 8] === "O" &&
    e[t + 9] === "N"
  );
}
function gn(e) {
  if (an.isName(e)) return e;
  throw new Error(`Invalid entity name ${e}`);
}
var mn = ln;
const yn = /^[-+]?0x[a-fA-F0-9]+$/,
  bn =
    /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
!Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt);
!Number.parseFloat &&
  window.parseFloat &&
  (Number.parseFloat = window.parseFloat);
const En = { hex: !0, leadingZeros: !0, decimalPoint: ".", eNotation: !0 };
function An(e, t = {}) {
  if (((t = Object.assign({}, En, t)), !e || typeof e != "string")) return e;
  let s = e.trim();
  if (t.skipLike !== void 0 && t.skipLike.test(s)) return e;
  if (t.hex && yn.test(s)) return Number.parseInt(s, 16);
  {
    const n = bn.exec(s);
    if (n) {
      const r = n[1],
        i = n[2];
      let l = Nn(n[3]);
      const a = n[4] || n[6];
      if (!t.leadingZeros && i.length > 0 && r && s[2] !== ".") return e;
      if (!t.leadingZeros && i.length > 0 && !r && s[1] !== ".") return e;
      {
        const o = Number(s),
          c = "" + o;
        return c.search(/[eE]/) !== -1 || a
          ? t.eNotation
            ? o
            : e
          : s.indexOf(".") !== -1
            ? (c === "0" && l === "") || c === l || (r && c === "-" + l)
              ? o
              : e
            : i
              ? l === c || r + l === c
                ? o
                : e
              : s === c || s === r + c
                ? o
                : e;
      }
    } else return e;
  }
}
function Nn(e) {
  return (
    e &&
      e.indexOf(".") !== -1 &&
      ((e = e.replace(/0+$/, "")),
      e === "."
        ? (e = "0")
        : e[0] === "."
          ? (e = "0" + e)
          : e[e.length - 1] === "." && (e = e.substr(0, e.length - 1))),
    e
  );
}
var Pn = An;
const It = pe,
  ce = on,
  wn = mn,
  Tn = Pn;
let xn = class {
  constructor(t) {
    (this.options = t),
      (this.currentNode = null),
      (this.tagsNodeStack = []),
      (this.docTypeEntities = {}),
      (this.lastEntities = {
        apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
        gt: { regex: /&(gt|#62|#x3E);/g, val: ">" },
        lt: { regex: /&(lt|#60|#x3C);/g, val: "<" },
        quot: { regex: /&(quot|#34|#x22);/g, val: '"' },
      }),
      (this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }),
      (this.htmlEntities = {
        space: { regex: /&(nbsp|#160);/g, val: " " },
        cent: { regex: /&(cent|#162);/g, val: "¢" },
        pound: { regex: /&(pound|#163);/g, val: "£" },
        yen: { regex: /&(yen|#165);/g, val: "¥" },
        euro: { regex: /&(euro|#8364);/g, val: "€" },
        copyright: { regex: /&(copy|#169);/g, val: "©" },
        reg: { regex: /&(reg|#174);/g, val: "®" },
        inr: { regex: /&(inr|#8377);/g, val: "₹" },
        num_dec: {
          regex: /&#([0-9]{1,7});/g,
          val: (s, n) => String.fromCharCode(Number.parseInt(n, 10)),
        },
        num_hex: {
          regex: /&#x([0-9a-fA-F]{1,6});/g,
          val: (s, n) => String.fromCharCode(Number.parseInt(n, 16)),
        },
      }),
      (this.addExternalEntities = Sn),
      (this.parseXml = Rn),
      (this.parseTextData = Cn),
      (this.resolveNameSpace = In),
      (this.buildAttributesMap = vn),
      (this.isItStopNode = Fn),
      (this.replaceEntitiesValue = kn),
      (this.readStopNodeData = Mn),
      (this.saveTextToParentTag = $n),
      (this.addChild = On);
  }
};
function Sn(e) {
  const t = Object.keys(e);
  for (let s = 0; s < t.length; s++) {
    const n = t[s];
    this.lastEntities[n] = { regex: new RegExp("&" + n + ";", "g"), val: e[n] };
  }
}
function Cn(e, t, s, n, r, i, l) {
  if (
    e !== void 0 &&
    (this.options.trimValues && !n && (e = e.trim()), e.length > 0)
  ) {
    l || (e = this.replaceEntitiesValue(e));
    const a = this.options.tagValueProcessor(t, e, s, r, i);
    return a == null
      ? e
      : typeof a != typeof e || a !== e
        ? a
        : this.options.trimValues
          ? Ke(e, this.options.parseTagValue, this.options.numberParseOptions)
          : e.trim() === e
            ? Ke(e, this.options.parseTagValue, this.options.numberParseOptions)
            : e;
  }
}
function In(e) {
  if (this.options.removeNSPrefix) {
    const t = e.split(":"),
      s = e.charAt(0) === "/" ? "/" : "";
    if (t[0] === "xmlns") return "";
    t.length === 2 && (e = s + t[1]);
  }
  return e;
}
const _n = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function vn(e, t, s) {
  if (!this.options.ignoreAttributes && typeof e == "string") {
    const n = It.getAllMatches(e, _n),
      r = n.length,
      i = {};
    for (let l = 0; l < r; l++) {
      const a = this.resolveNameSpace(n[l][1]);
      let o = n[l][4],
        c = this.options.attributeNamePrefix + a;
      if (a.length)
        if (
          (this.options.transformAttributeName &&
            (c = this.options.transformAttributeName(c)),
          c === "__proto__" && (c = "#__proto__"),
          o !== void 0)
        ) {
          this.options.trimValues && (o = o.trim()),
            (o = this.replaceEntitiesValue(o));
          const d = this.options.attributeValueProcessor(a, o, t);
          d == null
            ? (i[c] = o)
            : typeof d != typeof o || d !== o
              ? (i[c] = d)
              : (i[c] = Ke(
                  o,
                  this.options.parseAttributeValue,
                  this.options.numberParseOptions,
                ));
        } else this.options.allowBooleanAttributes && (i[c] = !0);
    }
    if (!Object.keys(i).length) return;
    if (this.options.attributesGroupName) {
      const l = {};
      return (l[this.options.attributesGroupName] = i), l;
    }
    return i;
  }
}
const Rn = function (e) {
  e = e.replace(
    /\r\n?/g,
    `
`,
  );
  const t = new ce("!xml");
  let s = t,
    n = "",
    r = "";
  for (let i = 0; i < e.length; i++)
    if (e[i] === "<")
      if (e[i + 1] === "/") {
        const a = Q(e, ">", i, "Closing Tag is not closed.");
        let o = e.substring(i + 2, a).trim();
        if (this.options.removeNSPrefix) {
          const f = o.indexOf(":");
          f !== -1 && (o = o.substr(f + 1));
        }
        this.options.transformTagName && (o = this.options.transformTagName(o)),
          s && (n = this.saveTextToParentTag(n, s, r));
        const c = r.substring(r.lastIndexOf(".") + 1);
        if (o && this.options.unpairedTags.indexOf(o) !== -1)
          throw new Error(
            `Unpaired tag can not be used as closing tag: </${o}>`,
          );
        let d = 0;
        c && this.options.unpairedTags.indexOf(c) !== -1
          ? ((d = r.lastIndexOf(".", r.lastIndexOf(".") - 1)),
            this.tagsNodeStack.pop())
          : (d = r.lastIndexOf(".")),
          (r = r.substring(0, d)),
          (s = this.tagsNodeStack.pop()),
          (n = ""),
          (i = a);
      } else if (e[i + 1] === "?") {
        let a = qe(e, i, !1, "?>");
        if (!a) throw new Error("Pi Tag is not closed.");
        if (
          ((n = this.saveTextToParentTag(n, s, r)),
          !(
            (this.options.ignoreDeclaration && a.tagName === "?xml") ||
            this.options.ignorePiTags
          ))
        ) {
          const o = new ce(a.tagName);
          o.add(this.options.textNodeName, ""),
            a.tagName !== a.tagExp &&
              a.attrExpPresent &&
              (o[":@"] = this.buildAttributesMap(a.tagExp, r, a.tagName)),
            this.addChild(s, o, r);
        }
        i = a.closeIndex + 1;
      } else if (e.substr(i + 1, 3) === "!--") {
        const a = Q(e, "-->", i + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const o = e.substring(i + 4, a - 2);
          (n = this.saveTextToParentTag(n, s, r)),
            s.add(this.options.commentPropName, [
              { [this.options.textNodeName]: o },
            ]);
        }
        i = a;
      } else if (e.substr(i + 1, 2) === "!D") {
        const a = wn(e, i);
        (this.docTypeEntities = a.entities), (i = a.i);
      } else if (e.substr(i + 1, 2) === "![") {
        const a = Q(e, "]]>", i, "CDATA is not closed.") - 2,
          o = e.substring(i + 9, a);
        n = this.saveTextToParentTag(n, s, r);
        let c = this.parseTextData(o, s.tagname, r, !0, !1, !0, !0);
        c == null && (c = ""),
          this.options.cdataPropName
            ? s.add(this.options.cdataPropName, [
                { [this.options.textNodeName]: o },
              ])
            : s.add(this.options.textNodeName, c),
          (i = a + 2);
      } else {
        let a = qe(e, i, this.options.removeNSPrefix),
          o = a.tagName;
        const c = a.rawTagName;
        let d = a.tagExp,
          f = a.attrExpPresent,
          m = a.closeIndex;
        this.options.transformTagName && (o = this.options.transformTagName(o)),
          s &&
            n &&
            s.tagname !== "!xml" &&
            (n = this.saveTextToParentTag(n, s, r, !1));
        const N = s;
        if (
          (N &&
            this.options.unpairedTags.indexOf(N.tagname) !== -1 &&
            ((s = this.tagsNodeStack.pop()),
            (r = r.substring(0, r.lastIndexOf(".")))),
          o !== t.tagname && (r += r ? "." + o : o),
          this.isItStopNode(this.options.stopNodes, r, o))
        ) {
          let A = "";
          if (d.length > 0 && d.lastIndexOf("/") === d.length - 1)
            o[o.length - 1] === "/"
              ? ((o = o.substr(0, o.length - 1)),
                (r = r.substr(0, r.length - 1)),
                (d = o))
              : (d = d.substr(0, d.length - 1)),
              (i = a.closeIndex);
          else if (this.options.unpairedTags.indexOf(o) !== -1)
            i = a.closeIndex;
          else {
            const U = this.readStopNodeData(e, c, m + 1);
            if (!U) throw new Error(`Unexpected end of ${c}`);
            (i = U.i), (A = U.tagContent);
          }
          const ae = new ce(o);
          o !== d && f && (ae[":@"] = this.buildAttributesMap(d, r, o)),
            A && (A = this.parseTextData(A, o, r, !0, f, !0, !0)),
            (r = r.substr(0, r.lastIndexOf("."))),
            ae.add(this.options.textNodeName, A),
            this.addChild(s, ae, r);
        } else {
          if (d.length > 0 && d.lastIndexOf("/") === d.length - 1) {
            o[o.length - 1] === "/"
              ? ((o = o.substr(0, o.length - 1)),
                (r = r.substr(0, r.length - 1)),
                (d = o))
              : (d = d.substr(0, d.length - 1)),
              this.options.transformTagName &&
                (o = this.options.transformTagName(o));
            const A = new ce(o);
            o !== d && f && (A[":@"] = this.buildAttributesMap(d, r, o)),
              this.addChild(s, A, r),
              (r = r.substr(0, r.lastIndexOf(".")));
          } else {
            const A = new ce(o);
            this.tagsNodeStack.push(s),
              o !== d && f && (A[":@"] = this.buildAttributesMap(d, r, o)),
              this.addChild(s, A, r),
              (s = A);
          }
          (n = ""), (i = m);
        }
      }
    else n += e[i];
  return t.child;
};
function On(e, t, s) {
  const n = this.options.updateTag(t.tagname, s, t[":@"]);
  n === !1 || (typeof n == "string" && (t.tagname = n), e.addChild(t));
}
const kn = function (e) {
  if (this.options.processEntities) {
    for (let t in this.docTypeEntities) {
      const s = this.docTypeEntities[t];
      e = e.replace(s.regx, s.val);
    }
    for (let t in this.lastEntities) {
      const s = this.lastEntities[t];
      e = e.replace(s.regex, s.val);
    }
    if (this.options.htmlEntities)
      for (let t in this.htmlEntities) {
        const s = this.htmlEntities[t];
        e = e.replace(s.regex, s.val);
      }
    e = e.replace(this.ampEntity.regex, this.ampEntity.val);
  }
  return e;
};
function $n(e, t, s, n) {
  return (
    e &&
      (n === void 0 && (n = Object.keys(t.child).length === 0),
      (e = this.parseTextData(
        e,
        t.tagname,
        s,
        !1,
        t[":@"] ? Object.keys(t[":@"]).length !== 0 : !1,
        n,
      )),
      e !== void 0 && e !== "" && t.add(this.options.textNodeName, e),
      (e = "")),
    e
  );
}
function Fn(e, t, s) {
  const n = "*." + s;
  for (const r in e) {
    const i = e[r];
    if (n === i || t === i) return !0;
  }
  return !1;
}
function Ln(e, t, s = ">") {
  let n,
    r = "";
  for (let i = t; i < e.length; i++) {
    let l = e[i];
    if (n) l === n && (n = "");
    else if (l === '"' || l === "'") n = l;
    else if (l === s[0])
      if (s[1]) {
        if (e[i + 1] === s[1]) return { data: r, index: i };
      } else return { data: r, index: i };
    else l === "	" && (l = " ");
    r += l;
  }
}
function Q(e, t, s, n) {
  const r = e.indexOf(t, s);
  if (r === -1) throw new Error(n);
  return r + t.length - 1;
}
function qe(e, t, s, n = ">") {
  const r = Ln(e, t + 1, n);
  if (!r) return;
  let i = r.data;
  const l = r.index,
    a = i.search(/\s/);
  let o = i,
    c = !0;
  a !== -1 && ((o = i.substring(0, a)), (i = i.substring(a + 1).trimStart()));
  const d = o;
  if (s) {
    const f = o.indexOf(":");
    f !== -1 && ((o = o.substr(f + 1)), (c = o !== r.data.substr(f + 1)));
  }
  return {
    tagName: o,
    tagExp: i,
    closeIndex: l,
    attrExpPresent: c,
    rawTagName: d,
  };
}
function Mn(e, t, s) {
  const n = s;
  let r = 1;
  for (; s < e.length; s++)
    if (e[s] === "<")
      if (e[s + 1] === "/") {
        const i = Q(e, ">", s, `${t} is not closed`);
        if (e.substring(s + 2, i).trim() === t && (r--, r === 0))
          return { tagContent: e.substring(n, s), i };
        s = i;
      } else if (e[s + 1] === "?")
        s = Q(e, "?>", s + 1, "StopNode is not closed.");
      else if (e.substr(s + 1, 3) === "!--")
        s = Q(e, "-->", s + 3, "StopNode is not closed.");
      else if (e.substr(s + 1, 2) === "![")
        s = Q(e, "]]>", s, "StopNode is not closed.") - 2;
      else {
        const i = qe(e, s, ">");
        i &&
          ((i && i.tagName) === t &&
            i.tagExp[i.tagExp.length - 1] !== "/" &&
            r++,
          (s = i.closeIndex));
      }
}
function Ke(e, t, s) {
  if (t && typeof e == "string") {
    const n = e.trim();
    return n === "true" ? !0 : n === "false" ? !1 : Tn(e, s);
  } else return It.isExist(e) ? e : "";
}
var Vn = xn,
  _t = {};
function Gn(e, t) {
  return vt(e, t);
}
function vt(e, t, s) {
  let n;
  const r = {};
  for (let i = 0; i < e.length; i++) {
    const l = e[i],
      a = Un(l);
    let o = "";
    if ((s === void 0 ? (o = a) : (o = s + "." + a), a === t.textNodeName))
      n === void 0 ? (n = l[a]) : (n += "" + l[a]);
    else {
      if (a === void 0) continue;
      if (l[a]) {
        let c = vt(l[a], t, o);
        const d = Wn(c, t);
        l[":@"]
          ? zn(c, l[":@"], o, t)
          : Object.keys(c).length === 1 &&
              c[t.textNodeName] !== void 0 &&
              !t.alwaysCreateTextNode
            ? (c = c[t.textNodeName])
            : Object.keys(c).length === 0 &&
              (t.alwaysCreateTextNode ? (c[t.textNodeName] = "") : (c = "")),
          r[a] !== void 0 && r.hasOwnProperty(a)
            ? (Array.isArray(r[a]) || (r[a] = [r[a]]), r[a].push(c))
            : t.isArray(a, o, d)
              ? (r[a] = [c])
              : (r[a] = c);
      }
    }
  }
  return (
    typeof n == "string"
      ? n.length > 0 && (r[t.textNodeName] = n)
      : n !== void 0 && (r[t.textNodeName] = n),
    r
  );
}
function Un(e) {
  const t = Object.keys(e);
  for (let s = 0; s < t.length; s++) {
    const n = t[s];
    if (n !== ":@") return n;
  }
}
function zn(e, t, s, n) {
  if (t) {
    const r = Object.keys(t),
      i = r.length;
    for (let l = 0; l < i; l++) {
      const a = r[l];
      n.isArray(a, s + "." + a, !0, !0) ? (e[a] = [t[a]]) : (e[a] = t[a]);
    }
  }
}
function Wn(e, t) {
  const { textNodeName: s } = t,
    n = Object.keys(e).length;
  return !!(
    n === 0 ||
    (n === 1 && (e[s] || typeof e[s] == "boolean" || e[s] === 0))
  );
}
_t.prettify = Gn;
const { buildOptions: Bn } = Ye,
  Hn = Vn,
  { prettify: jn } = _t,
  qn = Je;
let Kn = class {
  constructor(t) {
    (this.externalEntities = {}), (this.options = Bn(t));
  }
  parse(t, s) {
    if (typeof t != "string")
      if (t.toString) t = t.toString();
      else throw new Error("XML data is accepted in String or Bytes[] form.");
    if (s) {
      s === !0 && (s = {});
      const i = qn.validate(t, s);
      if (i !== !0) throw Error(`${i.err.msg}:${i.err.line}:${i.err.col}`);
    }
    const n = new Hn(this.options);
    n.addExternalEntities(this.externalEntities);
    const r = n.parseXml(t);
    return this.options.preserveOrder || r === void 0 ? r : jn(r, this.options);
  }
  addEntity(t, s) {
    if (s.indexOf("&") !== -1) throw new Error("Entity value can't have '&'");
    if (t.indexOf("&") !== -1 || t.indexOf(";") !== -1)
      throw new Error(
        "An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'",
      );
    if (s === "&") throw new Error("An entity with value '&' is not permitted");
    this.externalEntities[t] = s;
  }
};
var Xn = Kn;
const Jn = `
`;
function Zn(e, t) {
  let s = "";
  return t.format && t.indentBy.length > 0 && (s = Jn), Rt(e, t, "", s);
}
function Rt(e, t, s, n) {
  let r = "",
    i = !1;
  for (let l = 0; l < e.length; l++) {
    const a = e[l],
      o = Yn(a);
    if (o === void 0) continue;
    let c = "";
    if ((s.length === 0 ? (c = o) : (c = `${s}.${o}`), o === t.textNodeName)) {
      let A = a[o];
      Qn(c, t) || ((A = t.tagValueProcessor(o, A)), (A = Ot(A, t))),
        i && (r += n),
        (r += A),
        (i = !1);
      continue;
    } else if (o === t.cdataPropName) {
      i && (r += n), (r += `<![CDATA[${a[o][0][t.textNodeName]}]]>`), (i = !1);
      continue;
    } else if (o === t.commentPropName) {
      (r += n + `<!--${a[o][0][t.textNodeName]}-->`), (i = !0);
      continue;
    } else if (o[0] === "?") {
      const A = ht(a[":@"], t),
        ae = o === "?xml" ? "" : n;
      let U = a[o][0][t.textNodeName];
      (U = U.length !== 0 ? " " + U : ""),
        (r += ae + `<${o}${U}${A}?>`),
        (i = !0);
      continue;
    }
    let d = n;
    d !== "" && (d += t.indentBy);
    const f = ht(a[":@"], t),
      m = n + `<${o}${f}`,
      N = Rt(a[o], t, c, d);
    t.unpairedTags.indexOf(o) !== -1
      ? t.suppressUnpairedNode
        ? (r += m + ">")
        : (r += m + "/>")
      : (!N || N.length === 0) && t.suppressEmptyNode
        ? (r += m + "/>")
        : N && N.endsWith(">")
          ? (r += m + `>${N}${n}</${o}>`)
          : ((r += m + ">"),
            N && n !== "" && (N.includes("/>") || N.includes("</"))
              ? (r += n + t.indentBy + N + n)
              : (r += N),
            (r += `</${o}>`)),
      (i = !0);
  }
  return r;
}
function Yn(e) {
  const t = Object.keys(e);
  for (let s = 0; s < t.length; s++) {
    const n = t[s];
    if (e.hasOwnProperty(n) && n !== ":@") return n;
  }
}
function ht(e, t) {
  let s = "";
  if (e && !t.ignoreAttributes)
    for (let n in e) {
      if (!e.hasOwnProperty(n)) continue;
      let r = t.attributeValueProcessor(n, e[n]);
      (r = Ot(r, t)),
        r === !0 && t.suppressBooleanAttributes
          ? (s += ` ${n.substr(t.attributeNamePrefix.length)}`)
          : (s += ` ${n.substr(t.attributeNamePrefix.length)}="${r}"`);
    }
  return s;
}
function Qn(e, t) {
  e = e.substr(0, e.length - t.textNodeName.length - 1);
  let s = e.substr(e.lastIndexOf(".") + 1);
  for (let n in t.stopNodes)
    if (t.stopNodes[n] === e || t.stopNodes[n] === "*." + s) return !0;
  return !1;
}
function Ot(e, t) {
  if (e && e.length > 0 && t.processEntities)
    for (let s = 0; s < t.entities.length; s++) {
      const n = t.entities[s];
      e = e.replace(n.regex, n.val);
    }
  return e;
}
var Dn = Zn;
const er = Dn,
  tr = {
    attributeNamePrefix: "@_",
    attributesGroupName: !1,
    textNodeName: "#text",
    ignoreAttributes: !0,
    cdataPropName: !1,
    format: !1,
    indentBy: "  ",
    suppressEmptyNode: !1,
    suppressUnpairedNode: !0,
    suppressBooleanAttributes: !0,
    tagValueProcessor: function (e, t) {
      return t;
    },
    attributeValueProcessor: function (e, t) {
      return t;
    },
    preserveOrder: !1,
    commentPropName: !1,
    unpairedTags: [],
    entities: [
      { regex: new RegExp("&", "g"), val: "&amp;" },
      { regex: new RegExp(">", "g"), val: "&gt;" },
      { regex: new RegExp("<", "g"), val: "&lt;" },
      { regex: new RegExp("'", "g"), val: "&apos;" },
      { regex: new RegExp('"', "g"), val: "&quot;" },
    ],
    processEntities: !0,
    stopNodes: [],
    oneListGroup: !1,
  };
function B(e) {
  (this.options = Object.assign({}, tr, e)),
    this.options.ignoreAttributes || this.options.attributesGroupName
      ? (this.isAttribute = function () {
          return !1;
        })
      : ((this.attrPrefixLen = this.options.attributeNamePrefix.length),
        (this.isAttribute = rr)),
    (this.processTextOrObjNode = sr),
    this.options.format
      ? ((this.indentate = nr),
        (this.tagEndChar = `>
`),
        (this.newLine = `
`))
      : ((this.indentate = function () {
          return "";
        }),
        (this.tagEndChar = ">"),
        (this.newLine = ""));
}
B.prototype.build = function (e) {
  return this.options.preserveOrder
    ? er(e, this.options)
    : (Array.isArray(e) &&
        this.options.arrayNodeName &&
        this.options.arrayNodeName.length > 1 &&
        (e = { [this.options.arrayNodeName]: e }),
      this.j2x(e, 0).val);
};
B.prototype.j2x = function (e, t) {
  let s = "",
    n = "";
  for (let r in e)
    if (Object.prototype.hasOwnProperty.call(e, r))
      if (typeof e[r] > "u") this.isAttribute(r) && (n += "");
      else if (e[r] === null)
        this.isAttribute(r)
          ? (n += "")
          : r[0] === "?"
            ? (n += this.indentate(t) + "<" + r + "?" + this.tagEndChar)
            : (n += this.indentate(t) + "<" + r + "/" + this.tagEndChar);
      else if (e[r] instanceof Date) n += this.buildTextValNode(e[r], r, "", t);
      else if (typeof e[r] != "object") {
        const i = this.isAttribute(r);
        if (i) s += this.buildAttrPairStr(i, "" + e[r]);
        else if (r === this.options.textNodeName) {
          let l = this.options.tagValueProcessor(r, "" + e[r]);
          n += this.replaceEntitiesValue(l);
        } else n += this.buildTextValNode(e[r], r, "", t);
      } else if (Array.isArray(e[r])) {
        const i = e[r].length;
        let l = "",
          a = "";
        for (let o = 0; o < i; o++) {
          const c = e[r][o];
          if (!(typeof c > "u"))
            if (c === null)
              r[0] === "?"
                ? (n += this.indentate(t) + "<" + r + "?" + this.tagEndChar)
                : (n += this.indentate(t) + "<" + r + "/" + this.tagEndChar);
            else if (typeof c == "object")
              if (this.options.oneListGroup) {
                const d = this.j2x(c, t + 1);
                (l += d.val),
                  this.options.attributesGroupName &&
                    c.hasOwnProperty(this.options.attributesGroupName) &&
                    (a += d.attrStr);
              } else l += this.processTextOrObjNode(c, r, t);
            else if (this.options.oneListGroup) {
              let d = this.options.tagValueProcessor(r, c);
              (d = this.replaceEntitiesValue(d)), (l += d);
            } else l += this.buildTextValNode(c, r, "", t);
        }
        this.options.oneListGroup && (l = this.buildObjectNode(l, r, a, t)),
          (n += l);
      } else if (
        this.options.attributesGroupName &&
        r === this.options.attributesGroupName
      ) {
        const i = Object.keys(e[r]),
          l = i.length;
        for (let a = 0; a < l; a++)
          s += this.buildAttrPairStr(i[a], "" + e[r][i[a]]);
      } else n += this.processTextOrObjNode(e[r], r, t);
  return { attrStr: s, val: n };
};
B.prototype.buildAttrPairStr = function (e, t) {
  return (
    (t = this.options.attributeValueProcessor(e, "" + t)),
    (t = this.replaceEntitiesValue(t)),
    this.options.suppressBooleanAttributes && t === "true"
      ? " " + e
      : " " + e + '="' + t + '"'
  );
};
function sr(e, t, s) {
  const n = this.j2x(e, s + 1);
  return e[this.options.textNodeName] !== void 0 && Object.keys(e).length === 1
    ? this.buildTextValNode(e[this.options.textNodeName], t, n.attrStr, s)
    : this.buildObjectNode(n.val, t, n.attrStr, s);
}
B.prototype.buildObjectNode = function (e, t, s, n) {
  if (e === "")
    return t[0] === "?"
      ? this.indentate(n) + "<" + t + s + "?" + this.tagEndChar
      : this.indentate(n) + "<" + t + s + this.closeTag(t) + this.tagEndChar;
  {
    let r = "</" + t + this.tagEndChar,
      i = "";
    return (
      t[0] === "?" && ((i = "?"), (r = "")),
      (s || s === "") && e.indexOf("<") === -1
        ? this.indentate(n) + "<" + t + s + i + ">" + e + r
        : this.options.commentPropName !== !1 &&
            t === this.options.commentPropName &&
            i.length === 0
          ? this.indentate(n) + `<!--${e}-->` + this.newLine
          : this.indentate(n) +
            "<" +
            t +
            s +
            i +
            this.tagEndChar +
            e +
            this.indentate(n) +
            r
    );
  }
};
B.prototype.closeTag = function (e) {
  let t = "";
  return (
    this.options.unpairedTags.indexOf(e) !== -1
      ? this.options.suppressUnpairedNode || (t = "/")
      : this.options.suppressEmptyNode
        ? (t = "/")
        : (t = `></${e}`),
    t
  );
};
B.prototype.buildTextValNode = function (e, t, s, n) {
  if (this.options.cdataPropName !== !1 && t === this.options.cdataPropName)
    return this.indentate(n) + `<![CDATA[${e}]]>` + this.newLine;
  if (this.options.commentPropName !== !1 && t === this.options.commentPropName)
    return this.indentate(n) + `<!--${e}-->` + this.newLine;
  if (t[0] === "?")
    return this.indentate(n) + "<" + t + s + "?" + this.tagEndChar;
  {
    let r = this.options.tagValueProcessor(t, e);
    return (
      (r = this.replaceEntitiesValue(r)),
      r === ""
        ? this.indentate(n) + "<" + t + s + this.closeTag(t) + this.tagEndChar
        : this.indentate(n) + "<" + t + s + ">" + r + "</" + t + this.tagEndChar
    );
  }
};
B.prototype.replaceEntitiesValue = function (e) {
  if (e && e.length > 0 && this.options.processEntities)
    for (let t = 0; t < this.options.entities.length; t++) {
      const s = this.options.entities[t];
      e = e.replace(s.regex, s.val);
    }
  return e;
};
function nr(e) {
  return this.options.indentBy.repeat(e);
}
function rr(e) {
  return e.startsWith(this.options.attributeNamePrefix) &&
    e !== this.options.textNodeName
    ? e.substr(this.attrPrefixLen)
    : !1;
}
var ir = B;
const or = Je,
  ar = Xn,
  lr = ir;
var cr = { XMLParser: ar, XMLValidator: or, XMLBuilder: lr };
const G = (e, t) =>
    es(e, t).then((s) => {
      if (s.length) {
        const n = new cr.XMLParser({
          attributeNamePrefix: "",
          htmlEntities: !0,
          ignoreAttributes: !1,
          ignoreDeclaration: !0,
          parseTagValue: !1,
          trimValues: !1,
          tagValueProcessor: (o, c) =>
            c.trim() === "" &&
            c.includes(`
`)
              ? ""
              : void 0,
        });
        n.addEntity("#xD", "\r"),
          n.addEntity(
            "#10",
            `
`,
          );
        let r;
        try {
          r = n.parse(s, !0);
        } catch (o) {
          throw (
            (o &&
              typeof o == "object" &&
              Object.defineProperty(o, "$responseBodyText", { value: s }),
            o)
          );
        }
        const i = "#text",
          l = Object.keys(r)[0],
          a = r[l];
        return a[i] && ((a[l] = a[i]), delete a[i]), St(a);
      }
      return {};
    }),
  dr = async (e, t) => {
    const s = await G(e, t);
    return s.Error && (s.Error.message = s.Error.message ?? s.Error.Message), s;
  },
  ur = async (e, t, s) => ({
    operation: ss(t).operation,
    region:
      (await ns(e.region)()) ||
      (() => {
        throw new Error(
          "expected `region` to be configured for `aws.auth#sigv4`",
        );
      })(),
  });
function fr(e) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: { name: "sts", region: e.region },
    propertiesExtractor: (t, s) => ({
      signingProperties: { config: t, context: s },
    }),
  };
}
function pt(e) {
  return { schemeId: "smithy.api#noAuth" };
}
const hr = (e) => {
    const t = [];
    switch (e.operation) {
      case "AssumeRoleWithSAML": {
        t.push(pt());
        break;
      }
      case "AssumeRoleWithWebIdentity": {
        t.push(pt());
        break;
      }
      default:
        t.push(fr(e));
    }
    return t;
  },
  pr = (e) => ({ ...e, stsClientCtor: Bt }),
  gr = (e) => {
    const t = pr(e);
    return { ...ts(t) };
  },
  mr = (e) => ({
    ...e,
    useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
    useFipsEndpoint: e.useFipsEndpoint ?? !1,
    useGlobalEndpoint: e.useGlobalEndpoint ?? !1,
    defaultSigningName: "sts",
  }),
  yr = {
    UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
  },
  br = "@aws-sdk/client-sts",
  Er =
    "AWS SDK for JavaScript Sts Client for Node.js, Browser and React Native",
  Ar = "3.654.0",
  Nr = {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "node ../../scripts/compilation/inline client-sts",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps":
      "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types":
      "rimraf ./dist-types tsconfig.types.tsbuildinfo && tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client":
      "node ../../scripts/generate-clients/single-service --solo sts",
    test: "yarn test:unit",
    "test:unit": "jest",
  },
  Pr = "./dist-cjs/index.js",
  wr = "./dist-types/index.d.ts",
  Tr = "./dist-es/index.js",
  xr = !1,
  Sr = {
    "@aws-crypto/sha256-browser": "5.2.0",
    "@aws-crypto/sha256-js": "5.2.0",
    "@aws-sdk/client-sso-oidc": "3.654.0",
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
  Cr = {
    "@tsconfig/node16": "16.1.3",
    "@types/node": "^16.18.96",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "3.0.2",
    typescript: "~4.9.5",
  },
  Ir = { node: ">=16.0.0" },
  _r = { "<4.0": { "dist-types/*": ["dist-types/ts3.4/*"] } },
  vr = ["dist-*/**"],
  Rr = {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/",
  },
  Or = "Apache-2.0",
  kr = { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser" },
  $r = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sts",
  Fr = {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-sts",
  },
  Lr = {
    name: br,
    description: Er,
    version: Ar,
    scripts: Nr,
    main: Pr,
    types: wr,
    module: Tr,
    sideEffects: xr,
    dependencies: Sr,
    devDependencies: Cr,
    engines: Ir,
    typesVersions: _r,
    files: vr,
    author: Rr,
    license: Or,
    browser: kr,
    "react-native": {
      "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native",
    },
    homepage: $r,
    repository: Fr,
  },
  kt = "required",
  u = "type",
  h = "fn",
  p = "argv",
  H = "ref",
  gt = !1,
  me = !0,
  z = "booleanEquals",
  P = "stringEquals",
  $t = "sigv4",
  Ft = "sts",
  Lt = "us-east-1",
  y = "endpoint",
  mt = "https://sts.{Region}.{PartitionResult#dnsSuffix}",
  F = "tree",
  D = "error",
  Qe = "getAttr",
  yt = { [kt]: !1, [u]: "String" },
  ye = { [kt]: !0, default: !1, [u]: "Boolean" },
  Mt = { [H]: "Endpoint" },
  bt = { [h]: "isSet", [p]: [{ [H]: "Region" }] },
  w = { [H]: "Region" },
  Et = { [h]: "aws.partition", [p]: [w], assign: "PartitionResult" },
  Vt = { [H]: "UseFIPS" },
  Gt = { [H]: "UseDualStack" },
  T = {
    url: "https://sts.amazonaws.com",
    properties: {
      authSchemes: [{ name: $t, signingName: Ft, signingRegion: Lt }],
    },
    headers: {},
  },
  _ = {},
  At = { conditions: [{ [h]: P, [p]: [w, "aws-global"] }], [y]: T, [u]: y },
  Ut = { [h]: z, [p]: [Vt, !0] },
  zt = { [h]: z, [p]: [Gt, !0] },
  Nt = { [h]: Qe, [p]: [{ [H]: "PartitionResult" }, "supportsFIPS"] },
  Wt = { [H]: "PartitionResult" },
  Pt = { [h]: z, [p]: [!0, { [h]: Qe, [p]: [Wt, "supportsDualStack"] }] },
  wt = [{ [h]: "isSet", [p]: [Mt] }],
  Tt = [Ut],
  xt = [zt],
  Mr = {
    version: "1.0",
    parameters: {
      Region: yt,
      UseDualStack: ye,
      UseFIPS: ye,
      Endpoint: yt,
      UseGlobalEndpoint: ye,
    },
    rules: [
      {
        conditions: [
          { [h]: z, [p]: [{ [H]: "UseGlobalEndpoint" }, me] },
          { [h]: "not", [p]: wt },
          bt,
          Et,
          { [h]: z, [p]: [Vt, gt] },
          { [h]: z, [p]: [Gt, gt] },
        ],
        rules: [
          {
            conditions: [{ [h]: P, [p]: [w, "ap-northeast-1"] }],
            endpoint: T,
            [u]: y,
          },
          {
            conditions: [{ [h]: P, [p]: [w, "ap-south-1"] }],
            endpoint: T,
            [u]: y,
          },
          {
            conditions: [{ [h]: P, [p]: [w, "ap-southeast-1"] }],
            endpoint: T,
            [u]: y,
          },
          {
            conditions: [{ [h]: P, [p]: [w, "ap-southeast-2"] }],
            endpoint: T,
            [u]: y,
          },
          At,
          {
            conditions: [{ [h]: P, [p]: [w, "ca-central-1"] }],
            endpoint: T,
            [u]: y,
          },
          {
            conditions: [{ [h]: P, [p]: [w, "eu-central-1"] }],
            endpoint: T,
            [u]: y,
          },
          {
            conditions: [{ [h]: P, [p]: [w, "eu-north-1"] }],
            endpoint: T,
            [u]: y,
          },
          {
            conditions: [{ [h]: P, [p]: [w, "eu-west-1"] }],
            endpoint: T,
            [u]: y,
          },
          {
            conditions: [{ [h]: P, [p]: [w, "eu-west-2"] }],
            endpoint: T,
            [u]: y,
          },
          {
            conditions: [{ [h]: P, [p]: [w, "eu-west-3"] }],
            endpoint: T,
            [u]: y,
          },
          {
            conditions: [{ [h]: P, [p]: [w, "sa-east-1"] }],
            endpoint: T,
            [u]: y,
          },
          { conditions: [{ [h]: P, [p]: [w, Lt] }], endpoint: T, [u]: y },
          {
            conditions: [{ [h]: P, [p]: [w, "us-east-2"] }],
            endpoint: T,
            [u]: y,
          },
          {
            conditions: [{ [h]: P, [p]: [w, "us-west-1"] }],
            endpoint: T,
            [u]: y,
          },
          {
            conditions: [{ [h]: P, [p]: [w, "us-west-2"] }],
            endpoint: T,
            [u]: y,
          },
          {
            endpoint: {
              url: mt,
              properties: {
                authSchemes: [
                  { name: $t, signingName: Ft, signingRegion: "{Region}" },
                ],
              },
              headers: _,
            },
            [u]: y,
          },
        ],
        [u]: F,
      },
      {
        conditions: wt,
        rules: [
          {
            conditions: Tt,
            error:
              "Invalid Configuration: FIPS and custom endpoint are not supported",
            [u]: D,
          },
          {
            conditions: xt,
            error:
              "Invalid Configuration: Dualstack and custom endpoint are not supported",
            [u]: D,
          },
          { endpoint: { url: Mt, properties: _, headers: _ }, [u]: y },
        ],
        [u]: F,
      },
      {
        conditions: [bt],
        rules: [
          {
            conditions: [Et],
            rules: [
              {
                conditions: [Ut, zt],
                rules: [
                  {
                    conditions: [{ [h]: z, [p]: [me, Nt] }, Pt],
                    rules: [
                      {
                        endpoint: {
                          url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                          properties: _,
                          headers: _,
                        },
                        [u]: y,
                      },
                    ],
                    [u]: F,
                  },
                  {
                    error:
                      "FIPS and DualStack are enabled, but this partition does not support one or both",
                    [u]: D,
                  },
                ],
                [u]: F,
              },
              {
                conditions: Tt,
                rules: [
                  {
                    conditions: [{ [h]: z, [p]: [Nt, me] }],
                    rules: [
                      {
                        conditions: [
                          {
                            [h]: P,
                            [p]: [{ [h]: Qe, [p]: [Wt, "name"] }, "aws-us-gov"],
                          },
                        ],
                        endpoint: {
                          url: "https://sts.{Region}.amazonaws.com",
                          properties: _,
                          headers: _,
                        },
                        [u]: y,
                      },
                      {
                        endpoint: {
                          url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
                          properties: _,
                          headers: _,
                        },
                        [u]: y,
                      },
                    ],
                    [u]: F,
                  },
                  {
                    error:
                      "FIPS is enabled but this partition does not support FIPS",
                    [u]: D,
                  },
                ],
                [u]: F,
              },
              {
                conditions: xt,
                rules: [
                  {
                    conditions: [Pt],
                    rules: [
                      {
                        endpoint: {
                          url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
                          properties: _,
                          headers: _,
                        },
                        [u]: y,
                      },
                    ],
                    [u]: F,
                  },
                  {
                    error:
                      "DualStack is enabled but this partition does not support DualStack",
                    [u]: D,
                  },
                ],
                [u]: F,
              },
              At,
              { endpoint: { url: mt, properties: _, headers: _ }, [u]: y },
            ],
            [u]: F,
          },
        ],
        [u]: F,
      },
      { error: "Invalid Configuration: Missing Region", [u]: D },
    ],
  },
  Vr = Mr,
  Gr = new is({
    size: 50,
    params: [
      "Endpoint",
      "Region",
      "UseDualStack",
      "UseFIPS",
      "UseGlobalEndpoint",
    ],
  }),
  Ur = (e, t = {}) =>
    Gr.get(e, () => rs(Vr, { endpointParams: e, logger: t.logger }));
os.aws = as;
const zr = (e) => ({
    apiVersion: "2011-06-15",
    base64Decoder: (e == null ? void 0 : e.base64Decoder) ?? jt,
    base64Encoder: (e == null ? void 0 : e.base64Encoder) ?? qt,
    disableHostPrefix: (e == null ? void 0 : e.disableHostPrefix) ?? !1,
    endpointProvider: (e == null ? void 0 : e.endpointProvider) ?? Ur,
    extensions: (e == null ? void 0 : e.extensions) ?? [],
    httpAuthSchemeProvider:
      (e == null ? void 0 : e.httpAuthSchemeProvider) ?? hr,
    httpAuthSchemes: (e == null ? void 0 : e.httpAuthSchemes) ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: (t) => t.getIdentityProvider("aws.auth#sigv4"),
        signer: new ls(),
      },
      {
        schemeId: "smithy.api#noAuth",
        identityProvider: (t) =>
          t.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
        signer: new cs(),
      },
    ],
    logger: (e == null ? void 0 : e.logger) ?? new ds(),
    serviceId: (e == null ? void 0 : e.serviceId) ?? "STS",
    urlParser: (e == null ? void 0 : e.urlParser) ?? us,
    utf8Decoder: (e == null ? void 0 : e.utf8Decoder) ?? Kt,
    utf8Encoder: (e == null ? void 0 : e.utf8Encoder) ?? Xt,
  }),
  Wr = (e) => {
    const t = As(e),
      s = () => t().then(Ns),
      n = zr(e);
    return {
      ...n,
      ...e,
      runtime: "browser",
      defaultsMode: t,
      bodyLengthChecker: (e == null ? void 0 : e.bodyLengthChecker) ?? fs,
      credentialDefaultProvider:
        (e == null ? void 0 : e.credentialDefaultProvider) ??
        ((r) => () => Promise.reject(new Error("Credential is missing"))),
      defaultUserAgentProvider:
        (e == null ? void 0 : e.defaultUserAgentProvider) ??
        hs({ serviceId: n.serviceId, clientVersion: Lr.version }),
      maxAttempts: (e == null ? void 0 : e.maxAttempts) ?? ps,
      region: (e == null ? void 0 : e.region) ?? gs("Region is missing"),
      requestHandler: Jt.create((e == null ? void 0 : e.requestHandler) ?? s),
      retryMode:
        (e == null ? void 0 : e.retryMode) ??
        (async () => (await s()).retryMode || ms),
      sha256: (e == null ? void 0 : e.sha256) ?? ys,
      streamCollector: (e == null ? void 0 : e.streamCollector) ?? Zt,
      useDualstackEndpoint:
        (e == null ? void 0 : e.useDualstackEndpoint) ??
        (() => Promise.resolve(bs)),
      useFipsEndpoint:
        (e == null ? void 0 : e.useFipsEndpoint) ?? (() => Promise.resolve(Es)),
    };
  },
  Br = (e) => {
    const t = e.httpAuthSchemes;
    let s = e.httpAuthSchemeProvider,
      n = e.credentials;
    return {
      setHttpAuthScheme(r) {
        const i = t.findIndex((l) => l.schemeId === r.schemeId);
        i === -1 ? t.push(r) : t.splice(i, 1, r);
      },
      httpAuthSchemes() {
        return t;
      },
      setHttpAuthSchemeProvider(r) {
        s = r;
      },
      httpAuthSchemeProvider() {
        return s;
      },
      setCredentials(r) {
        n = r;
      },
      credentials() {
        return n;
      },
    };
  },
  Hr = (e) => ({
    httpAuthSchemes: e.httpAuthSchemes(),
    httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
    credentials: e.credentials(),
  }),
  fe = (e) => e,
  jr = (e, t) => {
    const s = { ...fe(Ss(e)), ...fe(Ps(e)), ...fe(Cs(e)), ...fe(Br(e)) };
    return (
      t.forEach((n) => n.configure(s)),
      { ...e, ...ws(s), ...Ts(s), ...xs(s), ...Hr(s) }
    );
  };
class Bt extends Is {
  constructor(...[t]) {
    const s = Wr(t || {}),
      n = mr(s),
      r = _s(n),
      i = vs(r),
      l = Rs(i),
      a = Ws(l),
      o = Os(a),
      c = gr(o),
      d = jr(c, (t == null ? void 0 : t.extensions) || []);
    super(d),
      (this.config = d),
      this.middlewareStack.use(ks(this.config)),
      this.middlewareStack.use($s(this.config)),
      this.middlewareStack.use(Fs(this.config)),
      this.middlewareStack.use(Ls(this.config)),
      this.middlewareStack.use(Ms(this.config)),
      this.middlewareStack.use(Vs(this.config)),
      this.middlewareStack.use(
        Gs(this.config, {
          httpAuthSchemeParametersProvider: ur,
          identityProviderConfigProvider: async (f) =>
            new zs({ "aws.auth#sigv4": f.credentials }),
        }),
      ),
      this.middlewareStack.use(Us(this.config));
  }
  destroy() {
    super.destroy();
  }
}
class $ extends Bs {
  constructor(t) {
    super(t), Object.setPrototypeOf(this, $.prototype);
  }
}
class De extends $ {
  constructor(t) {
    super({ name: "ExpiredTokenException", $fault: "client", ...t }),
      (this.name = "ExpiredTokenException"),
      (this.$fault = "client"),
      Object.setPrototypeOf(this, De.prototype);
  }
}
class et extends $ {
  constructor(t) {
    super({ name: "MalformedPolicyDocumentException", $fault: "client", ...t }),
      (this.name = "MalformedPolicyDocumentException"),
      (this.$fault = "client"),
      Object.setPrototypeOf(this, et.prototype);
  }
}
class tt extends $ {
  constructor(t) {
    super({ name: "PackedPolicyTooLargeException", $fault: "client", ...t }),
      (this.name = "PackedPolicyTooLargeException"),
      (this.$fault = "client"),
      Object.setPrototypeOf(this, tt.prototype);
  }
}
class st extends $ {
  constructor(t) {
    super({ name: "RegionDisabledException", $fault: "client", ...t }),
      (this.name = "RegionDisabledException"),
      (this.$fault = "client"),
      Object.setPrototypeOf(this, st.prototype);
  }
}
class nt extends $ {
  constructor(t) {
    super({ name: "IDPRejectedClaimException", $fault: "client", ...t }),
      (this.name = "IDPRejectedClaimException"),
      (this.$fault = "client"),
      Object.setPrototypeOf(this, nt.prototype);
  }
}
class rt extends $ {
  constructor(t) {
    super({ name: "InvalidIdentityTokenException", $fault: "client", ...t }),
      (this.name = "InvalidIdentityTokenException"),
      (this.$fault = "client"),
      Object.setPrototypeOf(this, rt.prototype);
  }
}
class it extends $ {
  constructor(t) {
    super({ name: "IDPCommunicationErrorException", $fault: "client", ...t }),
      (this.name = "IDPCommunicationErrorException"),
      (this.$fault = "client"),
      Object.setPrototypeOf(this, it.prototype);
  }
}
class ot extends $ {
  constructor(t) {
    super({
      name: "InvalidAuthorizationMessageException",
      $fault: "client",
      ...t,
    }),
      (this.name = "InvalidAuthorizationMessageException"),
      (this.$fault = "client"),
      Object.setPrototypeOf(this, ot.prototype);
  }
}
const de = (e) => ({ ...e, ...(e.SecretAccessKey && { SecretAccessKey: Xe }) }),
  qr = (e) => ({
    ...e,
    ...(e.Credentials && { Credentials: de(e.Credentials) }),
  }),
  Xi = (e) => ({ ...e, ...(e.SAMLAssertion && { SAMLAssertion: Xe }) }),
  Ji = (e) => ({
    ...e,
    ...(e.Credentials && { Credentials: de(e.Credentials) }),
  }),
  Zi = (e) => ({ ...e, ...(e.WebIdentityToken && { WebIdentityToken: Xe }) }),
  Yi = (e) => ({
    ...e,
    ...(e.Credentials && { Credentials: de(e.Credentials) }),
  }),
  Qi = (e) => ({
    ...e,
    ...(e.Credentials && { Credentials: de(e.Credentials) }),
  }),
  Di = (e) => ({
    ...e,
    ...(e.Credentials && { Credentials: de(e.Credentials) }),
  }),
  Kr = async (e, t) => {
    const s = K;
    let n;
    return (n = Y({ ...ni(e), [J]: $i, [Z]: X })), q(t, s, "/", void 0, n);
  },
  eo = async (e, t) => {
    const s = K;
    let n;
    return (n = Y({ ...ri(e), [J]: Fi, [Z]: X })), q(t, s, "/", void 0, n);
  },
  to = async (e, t) => {
    const s = K;
    let n;
    return (n = Y({ ...ii(e), [J]: Li, [Z]: X })), q(t, s, "/", void 0, n);
  },
  so = async (e, t) => {
    const s = K;
    let n;
    return (n = Y({ ...oi(e), [J]: Mi, [Z]: X })), q(t, s, "/", void 0, n);
  },
  no = async (e, t) => {
    const s = K;
    let n;
    return (n = Y({ ...ai(e), [J]: Vi, [Z]: X })), q(t, s, "/", void 0, n);
  },
  ro = async (e, t) => {
    const s = K;
    let n;
    return (n = Y({ ...li(), [J]: Gi, [Z]: X })), q(t, s, "/", void 0, n);
  },
  io = async (e, t) => {
    const s = K;
    let n;
    return (n = Y({ ...ci(e), [J]: Ui, [Z]: X })), q(t, s, "/", void 0, n);
  },
  oo = async (e, t) => {
    const s = K;
    let n;
    return (n = Y({ ...di(e), [J]: zi, [Z]: X })), q(t, s, "/", void 0, n);
  },
  Xr = async (e, t) => {
    if (e.statusCode >= 300) return j(e, t);
    const s = await G(e.body, t);
    let n = {};
    return (n = mi(s.AssumeRoleResult)), { $metadata: x(e), ...n };
  },
  ao = async (e, t) => {
    if (e.statusCode >= 300) return j(e, t);
    const s = await G(e.body, t);
    let n = {};
    return (n = yi(s.AssumeRoleWithSAMLResult)), { $metadata: x(e), ...n };
  },
  lo = async (e, t) => {
    if (e.statusCode >= 300) return j(e, t);
    const s = await G(e.body, t);
    let n = {};
    return (
      (n = bi(s.AssumeRoleWithWebIdentityResult)), { $metadata: x(e), ...n }
    );
  },
  co = async (e, t) => {
    if (e.statusCode >= 300) return j(e, t);
    const s = await G(e.body, t);
    let n = {};
    return (
      (n = Ei(s.DecodeAuthorizationMessageResult)), { $metadata: x(e), ...n }
    );
  },
  uo = async (e, t) => {
    if (e.statusCode >= 300) return j(e, t);
    const s = await G(e.body, t);
    let n = {};
    return (n = Pi(s.GetAccessKeyInfoResult)), { $metadata: x(e), ...n };
  },
  fo = async (e, t) => {
    if (e.statusCode >= 300) return j(e, t);
    const s = await G(e.body, t);
    let n = {};
    return (n = wi(s.GetCallerIdentityResult)), { $metadata: x(e), ...n };
  },
  ho = async (e, t) => {
    if (e.statusCode >= 300) return j(e, t);
    const s = await G(e.body, t);
    let n = {};
    return (n = Ti(s.GetFederationTokenResult)), { $metadata: x(e), ...n };
  },
  po = async (e, t) => {
    if (e.statusCode >= 300) return j(e, t);
    const s = await G(e.body, t);
    let n = {};
    return (n = xi(s.GetSessionTokenResult)), { $metadata: x(e), ...n };
  },
  j = async (e, t) => {
    const s = { ...e, body: await dr(e.body, t) },
      n = Wi(e, s.body);
    switch (n) {
      case "ExpiredTokenException":
      case "com.amazonaws.sts#ExpiredTokenException":
        throw await Jr(s);
      case "MalformedPolicyDocument":
      case "com.amazonaws.sts#MalformedPolicyDocumentException":
        throw await ei(s);
      case "PackedPolicyTooLarge":
      case "com.amazonaws.sts#PackedPolicyTooLargeException":
        throw await ti(s);
      case "RegionDisabledException":
      case "com.amazonaws.sts#RegionDisabledException":
        throw await si(s);
      case "IDPRejectedClaim":
      case "com.amazonaws.sts#IDPRejectedClaimException":
        throw await Yr(s);
      case "InvalidIdentityToken":
      case "com.amazonaws.sts#InvalidIdentityTokenException":
        throw await Dr(s);
      case "IDPCommunicationError":
      case "com.amazonaws.sts#IDPCommunicationErrorException":
        throw await Zr(s);
      case "InvalidAuthorizationMessageException":
      case "com.amazonaws.sts#InvalidAuthorizationMessageException":
        throw await Qr(s);
      default:
        const r = s.body;
        return ki({ output: e, parsedBody: r.Error, errorCode: n });
    }
  },
  Jr = async (e, t) => {
    const s = e.body,
      n = Ai(s.Error),
      r = new De({ $metadata: x(e), ...n });
    return W(r, s);
  },
  Zr = async (e, t) => {
    const s = e.body,
      n = Si(s.Error),
      r = new it({ $metadata: x(e), ...n });
    return W(r, s);
  },
  Yr = async (e, t) => {
    const s = e.body,
      n = Ci(s.Error),
      r = new nt({ $metadata: x(e), ...n });
    return W(r, s);
  },
  Qr = async (e, t) => {
    const s = e.body,
      n = Ii(s.Error),
      r = new ot({ $metadata: x(e), ...n });
    return W(r, s);
  },
  Dr = async (e, t) => {
    const s = e.body,
      n = _i(s.Error),
      r = new rt({ $metadata: x(e), ...n });
    return W(r, s);
  },
  ei = async (e, t) => {
    const s = e.body,
      n = vi(s.Error),
      r = new et({ $metadata: x(e), ...n });
    return W(r, s);
  },
  ti = async (e, t) => {
    const s = e.body,
      n = Ri(s.Error),
      r = new tt({ $metadata: x(e), ...n });
    return W(r, s);
  },
  si = async (e, t) => {
    const s = e.body,
      n = Oi(s.Error),
      r = new st({ $metadata: x(e), ...n });
    return W(r, s);
  },
  ni = (e, t) => {
    var n, r, i, l;
    const s = {};
    if (
      (e[V] != null && (s[V] = e[V]),
      e[ne] != null && (s[ne] = e[ne]),
      e[R] != null)
    ) {
      const a = ge(e[R]);
      ((n = e[R]) == null ? void 0 : n.length) === 0 && (s.PolicyArns = []),
        Object.entries(a).forEach(([o, c]) => {
          const d = `PolicyArns.${o}`;
          s[d] = c;
        });
    }
    if (
      (e[v] != null && (s[v] = e[v]),
      e[I] != null && (s[I] = e[I]),
      e[ie] != null)
    ) {
      const a = Ht(e[ie]);
      ((r = e[ie]) == null ? void 0 : r.length) === 0 && (s.Tags = []),
        Object.entries(a).forEach(([o, c]) => {
          const d = `Tags.${o}`;
          s[d] = c;
        });
    }
    if (e[ze] != null) {
      const a = gi(e[ze]);
      ((i = e[ze]) == null ? void 0 : i.length) === 0 &&
        (s.TransitiveTagKeys = []),
        Object.entries(a).forEach(([o, c]) => {
          const d = `TransitiveTagKeys.${o}`;
          s[d] = c;
        });
    }
    if (
      (e[Pe] != null && (s[Pe] = e[Pe]),
      e[re] != null && (s[re] = e[re]),
      e[oe] != null && (s[oe] = e[oe]),
      e[k] != null && (s[k] = e[k]),
      e[Oe] != null)
    ) {
      const a = hi(e[Oe]);
      ((l = e[Oe]) == null ? void 0 : l.length) === 0 &&
        (s.ProvidedContexts = []),
        Object.entries(a).forEach(([o, c]) => {
          const d = `ProvidedContexts.${o}`;
          s[d] = c;
        });
    }
    return s;
  },
  ri = (e, t) => {
    var n;
    const s = {};
    if (
      (e[V] != null && (s[V] = e[V]),
      e[ve] != null && (s[ve] = e[ve]),
      e[Me] != null && (s[Me] = e[Me]),
      e[R] != null)
    ) {
      const r = ge(e[R]);
      ((n = e[R]) == null ? void 0 : n.length) === 0 && (s.PolicyArns = []),
        Object.entries(r).forEach(([i, l]) => {
          const a = `PolicyArns.${i}`;
          s[a] = l;
        });
    }
    return e[v] != null && (s[v] = e[v]), e[I] != null && (s[I] = e[I]), s;
  },
  ii = (e, t) => {
    var n;
    const s = {};
    if (
      (e[V] != null && (s[V] = e[V]),
      e[ne] != null && (s[ne] = e[ne]),
      e[He] != null && (s[He] = e[He]),
      e[ke] != null && (s[ke] = e[ke]),
      e[R] != null)
    ) {
      const r = ge(e[R]);
      ((n = e[R]) == null ? void 0 : n.length) === 0 && (s.PolicyArns = []),
        Object.entries(r).forEach(([i, l]) => {
          const a = `PolicyArns.${i}`;
          s[a] = l;
        });
    }
    return e[v] != null && (s[v] = e[v]), e[I] != null && (s[I] = e[I]), s;
  },
  oi = (e, t) => {
    const s = {};
    return e[we] != null && (s[we] = e[we]), s;
  },
  ai = (e, t) => {
    const s = {};
    return e[ee] != null && (s[ee] = e[ee]), s;
  },
  li = (e, t) => ({}),
  ci = (e, t) => {
    var n, r;
    const s = {};
    if (
      (e[Ie] != null && (s[Ie] = e[Ie]),
      e[v] != null && (s[v] = e[v]),
      e[R] != null)
    ) {
      const i = ge(e[R]);
      ((n = e[R]) == null ? void 0 : n.length) === 0 && (s.PolicyArns = []),
        Object.entries(i).forEach(([l, a]) => {
          const o = `PolicyArns.${l}`;
          s[o] = a;
        });
    }
    if ((e[I] != null && (s[I] = e[I]), e[ie] != null)) {
      const i = Ht(e[ie]);
      ((r = e[ie]) == null ? void 0 : r.length) === 0 && (s.Tags = []),
        Object.entries(i).forEach(([l, a]) => {
          const o = `Tags.${l}`;
          s[o] = a;
        });
    }
    return s;
  },
  di = (e, t) => {
    const s = {};
    return (
      e[I] != null && (s[I] = e[I]),
      e[re] != null && (s[re] = e[re]),
      e[oe] != null && (s[oe] = e[oe]),
      s
    );
  },
  ge = (e, t) => {
    const s = {};
    let n = 1;
    for (const r of e) {
      if (r === null) continue;
      const i = ui(r);
      Object.entries(i).forEach(([l, a]) => {
        s[`member.${n}.${l}`] = a;
      }),
        n++;
    }
    return s;
  },
  ui = (e, t) => {
    const s = {};
    return e[je] != null && (s[je] = e[je]), s;
  },
  fi = (e, t) => {
    const s = {};
    return (
      e[Re] != null && (s[Re] = e[Re]), e[Ee] != null && (s[Ee] = e[Ee]), s
    );
  },
  hi = (e, t) => {
    const s = {};
    let n = 1;
    for (const r of e) {
      if (r === null) continue;
      const i = fi(r);
      Object.entries(i).forEach(([l, a]) => {
        s[`member.${n}.${l}`] = a;
      }),
        n++;
    }
    return s;
  },
  pi = (e, t) => {
    const s = {};
    return (
      e[Ce] != null && (s[Ce] = e[Ce]), e[Be] != null && (s[Be] = e[Be]), s
    );
  },
  gi = (e, t) => {
    const s = {};
    let n = 1;
    for (const r of e) r !== null && ((s[`member.${n}`] = r), n++);
    return s;
  },
  Ht = (e, t) => {
    const s = {};
    let n = 1;
    for (const r of e) {
      if (r === null) continue;
      const i = pi(r);
      Object.entries(i).forEach(([l, a]) => {
        s[`member.${n}.${l}`] = a;
      }),
        n++;
    }
    return s;
  },
  at = (e, t) => {
    const s = {};
    return (
      e[be] != null && (s[be] = g(e[be])), e[M] != null && (s[M] = g(e[M])), s
    );
  },
  mi = (e, t) => {
    const s = {};
    return (
      e[C] != null && (s[C] = ue(e[C])),
      e[L] != null && (s[L] = at(e[L])),
      e[O] != null && (s[O] = he(e[O])),
      e[k] != null && (s[k] = g(e[k])),
      s
    );
  },
  yi = (e, t) => {
    const s = {};
    return (
      e[C] != null && (s[C] = ue(e[C])),
      e[L] != null && (s[L] = at(e[L])),
      e[O] != null && (s[O] = he(e[O])),
      e[Fe] != null && (s[Fe] = g(e[Fe])),
      e[Ge] != null && (s[Ge] = g(e[Ge])),
      e[Se] != null && (s[Se] = g(e[Se])),
      e[se] != null && (s[se] = g(e[se])),
      e[_e] != null && (s[_e] = g(e[_e])),
      e[k] != null && (s[k] = g(e[k])),
      s
    );
  },
  bi = (e, t) => {
    const s = {};
    return (
      e[C] != null && (s[C] = ue(e[C])),
      e[Ve] != null && (s[Ve] = g(e[Ve])),
      e[L] != null && (s[L] = at(e[L])),
      e[O] != null && (s[O] = he(e[O])),
      e[$e] != null && (s[$e] = g(e[$e])),
      e[se] != null && (s[se] = g(e[se])),
      e[k] != null && (s[k] = g(e[k])),
      s
    );
  },
  ue = (e, t) => {
    const s = {};
    return (
      e[ee] != null && (s[ee] = g(e[ee])),
      e[Le] != null && (s[Le] = g(e[Le])),
      e[Ue] != null && (s[Ue] = g(e[Ue])),
      e[Ne] != null && (s[Ne] = Yt(Qt(e[Ne]))),
      s
    );
  },
  Ei = (e, t) => {
    const s = {};
    return e[Ae] != null && (s[Ae] = g(e[Ae])), s;
  },
  Ai = (e, t) => {
    const s = {};
    return e[b] != null && (s[b] = g(e[b])), s;
  },
  Ni = (e, t) => {
    const s = {};
    return (
      e[xe] != null && (s[xe] = g(e[xe])), e[M] != null && (s[M] = g(e[M])), s
    );
  },
  Pi = (e, t) => {
    const s = {};
    return e[te] != null && (s[te] = g(e[te])), s;
  },
  wi = (e, t) => {
    const s = {};
    return (
      e[We] != null && (s[We] = g(e[We])),
      e[te] != null && (s[te] = g(e[te])),
      e[M] != null && (s[M] = g(e[M])),
      s
    );
  },
  Ti = (e, t) => {
    const s = {};
    return (
      e[C] != null && (s[C] = ue(e[C])),
      e[Te] != null && (s[Te] = Ni(e[Te])),
      e[O] != null && (s[O] = he(e[O])),
      s
    );
  },
  xi = (e, t) => {
    const s = {};
    return e[C] != null && (s[C] = ue(e[C])), s;
  },
  Si = (e, t) => {
    const s = {};
    return e[b] != null && (s[b] = g(e[b])), s;
  },
  Ci = (e, t) => {
    const s = {};
    return e[b] != null && (s[b] = g(e[b])), s;
  },
  Ii = (e, t) => {
    const s = {};
    return e[b] != null && (s[b] = g(e[b])), s;
  },
  _i = (e, t) => {
    const s = {};
    return e[b] != null && (s[b] = g(e[b])), s;
  },
  vi = (e, t) => {
    const s = {};
    return e[b] != null && (s[b] = g(e[b])), s;
  },
  Ri = (e, t) => {
    const s = {};
    return e[b] != null && (s[b] = g(e[b])), s;
  },
  Oi = (e, t) => {
    const s = {};
    return e[b] != null && (s[b] = g(e[b])), s;
  },
  x = (e) => ({
    httpStatusCode: e.statusCode,
    requestId:
      e.headers["x-amzn-requestid"] ??
      e.headers["x-amzn-request-id"] ??
      e.headers["x-amz-request-id"],
    extendedRequestId: e.headers["x-amz-id-2"],
    cfId: e.headers["x-amz-cf-id"],
  }),
  ki = Hs($),
  q = async (e, t, s, n, r) => {
    const {
        hostname: i,
        protocol: l = "https",
        port: a,
        path: o,
      } = await e.endpoint(),
      c = {
        protocol: l,
        hostname: i,
        port: a,
        method: "POST",
        path: o.endsWith("/") ? o.slice(0, -1) + s : o + s,
        headers: t,
      };
    return r !== void 0 && (c.body = r), new Dt(c);
  },
  K = { "content-type": "application/x-www-form-urlencoded" },
  X = "2011-06-15",
  J = "Action",
  ee = "AccessKeyId",
  $i = "AssumeRole",
  be = "AssumedRoleId",
  L = "AssumedRoleUser",
  Fi = "AssumeRoleWithSAML",
  Li = "AssumeRoleWithWebIdentity",
  te = "Account",
  M = "Arn",
  se = "Audience",
  C = "Credentials",
  Ee = "ContextAssertion",
  Mi = "DecodeAuthorizationMessage",
  Ae = "DecodedMessage",
  I = "DurationSeconds",
  Ne = "Expiration",
  Pe = "ExternalId",
  we = "EncodedMessage",
  Te = "FederatedUser",
  xe = "FederatedUserId",
  Vi = "GetAccessKeyInfo",
  Gi = "GetCallerIdentity",
  Ui = "GetFederationToken",
  zi = "GetSessionToken",
  Se = "Issuer",
  Ce = "Key",
  Ie = "Name",
  _e = "NameQualifier",
  v = "Policy",
  R = "PolicyArns",
  ve = "PrincipalArn",
  Re = "ProviderArn",
  Oe = "ProvidedContexts",
  ke = "ProviderId",
  O = "PackedPolicySize",
  $e = "Provider",
  V = "RoleArn",
  ne = "RoleSessionName",
  Fe = "Subject",
  Le = "SecretAccessKey",
  Me = "SAMLAssertion",
  Ve = "SubjectFromWebIdentityToken",
  k = "SourceIdentity",
  re = "SerialNumber",
  Ge = "SubjectType",
  Ue = "SessionToken",
  ie = "Tags",
  oe = "TokenCode",
  ze = "TransitiveTagKeys",
  We = "UserId",
  Z = "Version",
  Be = "Value",
  He = "WebIdentityToken",
  je = "arn",
  b = "message",
  Y = (e) =>
    Object.entries(e)
      .map(([t, s]) => lt(t) + "=" + lt(s))
      .join("&"),
  Wi = (e, t) => {
    var s;
    if (((s = t.Error) == null ? void 0 : s.Code) !== void 0)
      return t.Error.Code;
    if (e.statusCode == 404) return "NotFound";
  };
class Bi extends js
  .classBuilder()
  .ep(yr)
  .m(function (t, s, n, r) {
    return [
      qs(n, this.serialize, this.deserialize),
      Ks(n, t.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSecurityTokenServiceV20110615", "AssumeRole", {})
  .n("STSClient", "AssumeRoleCommand")
  .f(void 0, qr)
  .ser(Kr)
  .de(Xr)
  .build() {}
const go = Object.freeze(
  Object.defineProperty(
    { __proto__: null, AssumeRoleCommand: Bi, STSClient: Bt },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
export {
  Xi as A,
  de as C,
  De as E,
  Qi as G,
  nt as I,
  et as M,
  tt as P,
  st as R,
  Bt as S,
  Ji as a,
  Zi as b,
  yr as c,
  ao as d,
  Yi as e,
  to as f,
  lo as g,
  so as h,
  co as i,
  no as j,
  uo as k,
  ro as l,
  fo as m,
  io as n,
  ho as o,
  Di as p,
  oo as q,
  po as r,
  eo as s,
  Bi as t,
  $ as u,
  rt as v,
  it as w,
  ot as x,
  qr as y,
  go as z,
};
