(window.webpackJsonp = window.webpackJsonp || []).push([
  [71],
  {
    RNdq(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return _t;
      }),
        n.d(t, "b", () => {
          return ri;
        });
      const r = n("pLtp");
      const i = n.n(r);
      const o = n("LX0d");
      const a = n.n(o);
      const s = n("6BQ9");
      const l = n.n(s);
      const u = n("p0XB");
      const c = n.n(u);
      const f = n("2Eek");
      const p = n.n(f);
      const d = n("d04V");
      const h = n.n(d);
      const m = n("ttDY");
      const b = n.n(m);
      const g = n("Qetd");
      const v = n.n(g);

      let y = function () {
        return (y =
          v.a ||
          function (e) {
            for (
              let t, n = arguments, r = 1, i = arguments.length;
              r < i;
              r++
            )
              for (const o in (t = n[r]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };

      const x = function (e, t, n) {
        null == n && "string" === typeof e && (n = e.length),
          (this.string = e),
          (this.pos = this.start = t || 0),
          (this.end = n);
      };

      (x.prototype.eof = function () {
        return this.pos >= this.end;
      }),
        (x.prototype.limit = function (e, t) {
          return new this.constructor(this.string, e, t);
        }),
        (x.prototype.peek = function () {
          return this.string.charCodeAt(this.pos);
        }),
        (x.prototype.next = function () {
          if (this.pos < this.string.length)
            return this.string.charCodeAt(this.pos++);
        }),
        (x.prototype.eat = function (e) {
          const t = this.peek(), n = "function" === typeof e ? e(t) : t === e;
          return n && this.next(), n;
        }),
        (x.prototype.eatWhile = function (e) {
          for (var t = this.pos; !this.eof() && this.eat(e); );
          return this.pos !== t;
        }),
        (x.prototype.backUp = function (e) {
          this.pos -= e || 1;
        }),
        (x.prototype.current = function () {
          return this.substring(this.start, this.pos);
        }),
        (x.prototype.substring = function (e, t) {
          return this.string.slice(e, t);
        }),
        (x.prototype.error = function (e) {
          const t = new Error(e + " at char " + (this.pos + 1));
          return (
            (t.originalMessage = e),
            (t.pos = this.pos),
            (t.string = this.string),
            t
          );
        });
      const w = 39,
            $ = 34,
            k = { escape: 92, throws: !1 },
            C = (e, t) => {
              t = t ? v()({}, k, t) : k;
              const n = e.pos, r = e.peek();
              if (e.eat(A)) {
                for (; !e.eof(); )
                  switch (e.next()) {
                    case r:
                      return (e.start = n), !0;
                    case t.escape:
                      e.next();
                  }
                if (((e.pos = n), t.throws))
                  throw e.error("Unable to consume quoted string");
              }
              return !1;
            };
      function A(e) {
        return e === w || e === $;
      }
      function z(e) {
        return e > 47 && e < 58;
      }
      function S(e, t, n) {
        return (n = n || 90), (e &= -33) >= (t = t || 65) && e <= n;
      }
      function _(e) {
        return z(e) || S(e);
      }
      function q(e) {
        return 32 === e || 9 === e || 160 === e;
      }
      function j(e) {
        return q(e) || 10 === e || 13 === e;
      }
      const T = 36, O = 58, E = 92, R = 123, N = 125;
      function L(e) {
        for (var t, n, r = new x(e), i = [], o = "", a = 0, s = 0; !r.eof(); )
          (t = r.peek()),
            (s = r.pos),
            t === E
              ? (r.next(), r.next())
              : (n = F(r, o.length + s - a))
              ? (i.push(n),
                (o += r.string.slice(a, s) + n.placeholder),
                (a = r.pos))
              : r.next();
        return new M(o + r.string.slice(a), i);
      }
      function U(e, t) {
        return t ? "${" + e + ":" + t + "}" : "${" + e + "}";
      }
      function F(e, t) {
        const n = e.pos;
        if (e.eat(T)) {
          let r = B(e), i = "";
          if (null != r) return new W(r, i, t);
          if (
            e.eat(R) &&
            null != (r = B(e)) &&
            (e.eat(O) &&
              (i = (e => {
              let t;
              const n = [];
              e.start = e.pos;
              for (; !e.eof(); ) {
                if ((t = e.peek()) === R) n.push(e.pos);
                else if (t === N) {
                  if (!n.length) break;
                  n.pop();
                }
                e.next();
              }
              if (n.length)
                throw e.error(
                  'Unable to find matching "}" for curly brace at ' + n.pop()
                );
              return e.current();
            })(e)),
            e.eat(N))
          )
            return new W(r, i, t);
        }
        e.pos = n;
      }
      function B(e) {
        if (((e.start = e.pos), e.eatWhile(z))) return Number(e.current());
      }
      var W = function (e, t, n) {
          (this.index = e),
            (this.placeholder = t),
            (this.location = n),
            (this.length = this.placeholder.length);
        },
        M = function (e, t) {
          (this.string = e), (this.fields = t);
        };
      (M.prototype.mark = function (e) {
        return ((e, t, n) => {
          n = n || U;

          const r = t
              .map((e, t) => {
                return { order: t, field: e, end: e.location + e.length };
              })
              .sort((e, t) => {
                return e.end - t.end || e.order - t.order;
              });

          let i = 0;
          return r
            .map(t => {
              const r = e.substr(t.field.location, t.field.length), o = e.slice(i, t.field.location);
              return (i = t.end), o + n(t.field.index, r);
            })
            .join("") + e.slice(i);
        })(this.string, this.fields, e);
      }),
        (M.prototype.toString = function () {
          return this.string;
        });
      const I = e => {
                return e;
              },
            Y = function (e, t, n) {
              "object" === typeof t && ((n = t), (t = null)),
                (this.node = e),
                (this._fieldsRenderer = t || I),
                (this.open = null),
                (this.beforeOpen = ""),
                (this.afterOpen = ""),
                (this.close = null),
                (this.beforeClose = ""),
                (this.afterClose = ""),
                (this.text = null),
                (this.beforeText = ""),
                (this.afterText = ""),
                (this.indent = ""),
                (this.newline = ""),
                n && v()(this, n);
            };
      (Y.prototype.clone = function () {
        return new this.constructor(this.node, this);
      }),
        (Y.prototype.indentText = function (e) {
          const t = this,
                n = (e => {
                  return (e || "").split(/\r\n|\r|\n/g);
                })(e);
          if (1 === n.length) return e;
          const r = this.newline || this.indent ? this.newline : " ";
          return n
            .map((e, n) => {
              return n ? t.indent + e : e;
            })
            .join(r);
        }),
        (Y.prototype.renderFields = function (e) {
          return this._fieldsRenderer(e);
        }),
        (Y.prototype.toString = function (e) {
          const t = this._wrap(this.open, this.beforeOpen, this.afterOpen), n = this._wrap(this.close, this.beforeClose, this.afterClose);
          return (
            t +
            this._wrap(this.text, this.beforeText, this.afterText) +
            (null != e ? e : "") +
            n
          );
        }),
        (Y.prototype._wrap = function (e, t, n) {
          return (
            (t = null != t ? t : ""),
            (n = null != n ? n : ""),
            null != e
              ? ((e = t ? e.replace(/^\s+/, "") : e),
                (e = n ? e.replace(/\s+$/, "") : e),
                t + this.indentText(e) + n)
              : ""
          );
        });
      const D = (e, t) => {
        return t || "";
      };
      function G(e, t, n) {
        "undefined" === typeof n && ((n = t), (t = null)), (t = t || D);
        const r = { index: 1 };
        return (function e(t, n, r) {
          return t
            .map(t => {
              const i = n(new Y(t, r));
              return i ? i.toString(e(t.children, n, r)) : "";
            })
            .join("");
        })(e.children, n, e => {
          return null == e
            ? t(r.index++)
            : ((e, t) => {
            const n = "object" === typeof e ? e : L(e);
            let r = -1;
            n.fields.forEach(e => {
              (e.index += t.index), e.index > r && (r = e.index);
            }),
              -1 !== r && (t.index = r + 1);
            return n;
          })(e, r).mark(t);
        });
      }
      const P = { shortHex: !0, between: ": ", after: ";" };
      function X(e, t, n) {
        n = n || {};
        const r = v()({}, P, n && n.format);
        return G(e, n.field, n => {
          const i = n.node;
          let o = H(i, r);
          i.attributes.length &&
            (o = ((e, t) => {
              const n = L(e), r = n.fields.length;
              if (r)
                for (
                  (t = t.slice()).length > r &&
                  (t = t.slice(0, r - 1).concat(t.slice(r - 1).join(", ")));
                  t.length;

                ) {
                  const i = t.shift(), o = n.fields.shift(), a = i.length - o.length;
                  n.string =
                    n.string.slice(0, o.location) +
                    i +
                    n.string.slice(o.location + o.length);
                  for (let s = 0, l = n.fields.length; s < l; s++)
                    n.fields[s].location += a;
                }
              return n;
            })(o, i.attributes.map(e => {
            return H(e, r);
          })));
          return (
            (n.open = i.name && t.name(i.name)),
            (n.afterOpen = r.between),
            (n.text = n.renderFields(o || null)),
            !n.open ||
              (n.text && n.text.endsWith(";")) ||
              (n.afterText = r.after),
            t.get("format") &&
              ((n.newline = "\n"),
              e.lastChild !== i && (n.afterText += n.newline)),
            n
          );
        });
      }
      function H(e, t) {
        return e.value &&
          "object" === typeof e.value &&
          "css-value" === e.value.type
          ? e.value.value
              .map(e => {
                return e && "object" === typeof e
                  ? "color" === e.type
                    ? e.toString(t.shortHex)
                    : e.toString()
                  : String(e);
              })
              .join(" ")
          : null != e.value
          ? String(e.value)
          : "";
      }
      const V = {
        css: { between: ": ", after: ";" },
        scss: "css",
        less: "css",
        sass: { between: ": ", after: "" },
        stylus: { between: " ", after: "" },
      };
      function Z(e, t, n, r) {
        return "object" === typeof n && ((r = n), (n = null)),
        (e => {
          return !!e && e in V;
        })(n) || (n = "css"),
        X(e, t, (r = v()({}, r, { format: Q(n, r) })))
      ;
      }
      function Q(e, t) {
        let n = V[e];
        return "string" === typeof n && (n = V[n]), v()({}, n, t && t.format);
      }
      const J = 45;
      function K(e, t) {
        if ((e = e.toLowerCase()) === (t = t.toLowerCase())) return 1;
        if (!t || e.charCodeAt(0) !== t.charCodeAt(0)) return 0;
        for (
          var n, r, i, o, a, s = e.length, l = t.length, u = 1, c = 1, f = l;
          u < s;

        ) {
          for (n = e.charCodeAt(u), i = !1, o = !1; c < l; ) {
            if (n === (r = t.charCodeAt(c))) {
              (i = !0), (f += (l - c) * (o ? 2 : 1));
              break;
            }
            (o = r === J), c++;
          }
          if (!i) break;
          u++;
        }
        return f && (f * (u / s)) / (((a = l) * (a + 1)) / 2);
      }
      const ee = /^([a-z-]+)(?:\s*:\s*([^\n\r]+))?$/, te = 45;
      function ne(e) {
        return (e => {
          e = e.sort(oe);
          for (let t = [], n = 0, r = void 0, i = void 0; n < e.length; n++)
            if ((r = e[n]).property) {
              for (; t.length; ) {
                if (
                  ((i = t[t.length - 1]),
                  0 === r.property.indexOf(i.property) &&
                    r.property.charCodeAt(i.property.length) === te)
                ) {
                  i.addDependency(r), t.push(r);
                  break;
                }
                t.pop();
              }
              t.length || t.push(r);
            }
          return e;
        })(e.map(e => {
          return new re(e.key, e.value);
        }));
      }

      var re = function (e, t) {
          (this.key = e), (this.value = t), (this.property = null);
          const n = t && t.match(ee);
          n && ((this.property = n[1]), (this.value = n[2])),
            (this.dependencies = []);
        };

      const ie = { defaultValue: { configurable: !0 } };
      function oe(e, t) {
        return e.key === t.key ? 0 : e.key < t.key ? -1 : 1;
      }
      function ae(e) {
        return /^\s*[\w-]+/.test(e);
      }
      function se(e) {
        return String(e).split("|");
      }
      (re.prototype.addDependency = function (e) {
        this.dependencies.push(e);
      }),
        (ie.defaultValue.get = function () {
          return null != this.value ? se(this.value)[0] : null;
        }),
        (re.prototype.keywords = function () {
        let e;
        let t;
        const n = [];
        const r = new b.a();
        let i = 0;
        for (this.property && n.push(this); i < n.length; )
          if ((e = n[i++]).value) {
            t = se(e.value).filter(ae);
            for (let o = 0; o < t.length; o++) r.add(t[o].trim());
            for (let a = 0, s = e.dependencies; a < s.length; a++)
              -1 === n.indexOf(s[a]) && n.push(s[a]);
          }
        return h()(r);
      }),
        p()(re.prototype, ie);
      const le = ["auto", "inherit", "unset"],
            ue = [
              "z-index",
              "line-height",
              "opacity",
              "font-weight",
              "zoom",
              "flex",
              "flex-grow",
              "flex-shrink",
            ],
            ce = {
              intUnit: "px",
              floatUnit: "em",
              unitAliases: { e: "em", p: "%", x: "ex", r: "rem" },
              fuzzySearchMinScore: 0,
            };
      function fe(e, t, n) {
        (n = v()({}, ce, n)).unitAliases = v()(
          {},
          ce.unitAliases,
          n && n.unitAliases
        );
        const r = (e => {
          return ne(e.all({ type: "string" }));
        })(t);
        return e.walk(e => {
          return ((e, t, n) => {
            if (n.property)
              return ((e, t, n) => {
                let r = le.slice();
                t && (r = r.concat(t.keywords()));
                const i = [e.name]
                  .concat(e.value.value)
                  .filter(Boolean)
                  .map(e => {
                    return (
                      (("string" === typeof e || "keyword" === e.type) &&
                        de(
                          (e = String(e)),
                          r,
                          null,
                          n.fuzzySearchMinScore
                        )) ||
                      e
                    );
                  });
                return (e.name = null), (e.value.value = i), e;
              })(e, t.find(e => {
                return e.property === n.property;
              }), n);
            const r = de(e.name, t, "key", n.fuzzySearchMinScore);
            if (!r) return "!" === e.name ? pe(e, "!important") : e;
            return r.property ? ((e, t, n) => {
                  const r = e.name;
                  if (
                    ((e.name = t.property),
                    e.value && "object" === typeof e.value)
                  ) {
                    const i = t.keywords();
                    if (e.value.size)
                      for (
                        let o = 0, a = void 0;
                        o < e.value.value.length;
                        o++
                      )
                        "!" === (a = e.value.value[o])
                          ? (a = (o ? "" : "${1} ") + "!important")
                          : me(a)
                          ? (a = de(a.value, i) || de(a.value, le) || a)
                          : be(a) && (a = ve(e.name, a, n)),
                          (e.value.value[o] = a);
                    else {
                      let s = de(((e, t) => {
                        for (let n = 0, r = 0; n < e.length; n++) {
                          if (-1 === (r = t.indexOf(e[n], r)))
                            return e.slice(n);
                          r++;
                        }
                        return "";
                      })(r, t.key), i);
                      s ||
                        ((s = t.defaultValue) &&
                          -1 === s.indexOf("${") &&
                          (s = "${1:" + s + "}")),
                        s && e.value.add(s);
                    }
                  }
                  return e;
                })(e, r, n) : ((e, t) => {
                  return pe(e, t.value);
                })(e, r);
          })(e, r, n);
        }),
        e;
      }
      function pe(e, t) {
        return (e.name = null), (e.value = t), e;
      }
      function de(e, t, n, r) {
        if (!e) return null;
        let i = null, o = 0;
        r = r || 0;
        for (let a = 0, s = void 0; a < t.length; a++) {
          const l = K(e, he((s = t[a]), n));
          if (1 === l) return s;
          l && l >= o && ((o = l), (i = s));
        }
        return o >= r ? i : null;
      }
      function he(e, t) {
        const n = e && "object" === typeof e ? e[t] : e, r = (n || "").match(/^[\w-@]+/);
        return r ? r[0] : n;
      }
      function me(e) {
        return ge(e, "keyword");
      }
      function be(e) {
        return ge(e, "numeric");
      }
      function ge(e, t) {
        return e && "object" === typeof e && e.type === t;
      }
      function ve(e, t, n) {
        return (
          t.unit
            ? (t.unit = n.unitAliases[t.unit] || t.unit)
            : 0 !== t.value &&
              -1 === ue.indexOf(e) &&
              (t.unit = t.value === (0 | t.value) ? n.intUnit : n.floatUnit),
          t
        );
      }
      const ye = {
                "@f": "@font-face {\n\tfont-family: ${1};\n\tsrc: url(${1});\n}",
                "@ff":
                  "@font-face {\n\tfont-family: '${1:FontName}';\n\tsrc: url('${2:FileName}.eot');\n\tsrc: url('${2:FileName}.eot?#iefix') format('embedded-opentype'),\n\t\t url('${2:FileName}.woff') format('woff'),\n\t\t url('${2:FileName}.ttf') format('truetype'),\n\t\t url('${2:FileName}.svg#${1:FontName}') format('svg');\n\tfont-style: ${3:normal};\n\tfont-weight: ${4:normal};\n}",
                "@i|@import": "@import url(${0});",
                "@kf": "@keyframes ${1:identifier} {\n\t${2}\n}",
                "@m|@media": "@media ${1:screen} {\n\t${0}\n}",
                ac:
                  "align-content:start|end|flex-start|flex-end|center|space-between|space-around|stretch|space-evenly",
                ai:
                  "align-items:start|end|flex-start|flex-end|center|baseline|stretch",
                anim:
                  "animation:${1:name} ${2:duration} ${3:timing-function} ${4:delay} ${5:iteration-count} ${6:direction} ${7:fill-mode}",
                animdel: "animation-delay:${1:time}",
                animdir:
                  "animation-direction:normal|reverse|alternate|alternate-reverse",
                animdur: "animation-duration:${1:0}s",
                animfm: "animation-fill-mode:both|forwards|backwards",
                animic: "animation-iteration-count:1|infinite",
                animn: "animation-name",
                animps: "animation-play-state:running|paused",
                animtf:
                  "animation-timing-function:linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(${1:0.1}, ${2:0.7}, ${3:1.0}, ${3:0.1})",
                ap: "appearance:none",
                as:
                  "align-self:start|end|auto|flex-start|flex-end|center|baseline|stretch",
                b: "bottom",
                bd: "border:${1:1px} ${2:solid} ${3:#000}",
                bdb: "border-bottom:${1:1px} ${2:solid} ${3:#000}",
                bdbc: "border-bottom-color:${1:#000}",
                bdbi: "border-bottom-image:url(${0})",
                bdbk: "border-break:close",
                bdbli: "border-bottom-left-image:url(${0})|continue",
                bdblrs: "border-bottom-left-radius",
                bdbri: "border-bottom-right-image:url(${0})|continue",
                bdbrrs: "border-bottom-right-radius",
                bdbs: "border-bottom-style",
                bdbw: "border-bottom-width",
                bdc: "border-color:${1:#000}",
                bdci: "border-corner-image:url(${0})|continue",
                bdcl: "border-collapse:collapse|separate",
                bdf: "border-fit:repeat|clip|scale|stretch|overwrite|overflow|space",
                bdi: "border-image:url(${0})",
                bdl: "border-left:${1:1px} ${2:solid} ${3:#000}",
                bdlc: "border-left-color:${1:#000}",
                bdlen: "border-length",
                bdli: "border-left-image:url(${0})",
                bdls: "border-left-style",
                bdlw: "border-left-width",
                bdr: "border-right:${1:1px} ${2:solid} ${3:#000}",
                bdrc: "border-right-color:${1:#000}",
                bdri: "border-right-image:url(${0})",
                bdrs: "border-radius",
                bdrst: "border-right-style",
                bdrw: "border-right-width",
                bds:
                  "border-style:none|hidden|dotted|dashed|solid|double|dot-dash|dot-dot-dash|wave|groove|ridge|inset|outset",
                bdsp: "border-spacing",
                bdt: "border-top:${1:1px} ${2:solid} ${3:#000}",
                bdtc: "border-top-color:${1:#000}",
                bdti: "border-top-image:url(${0})",
                bdtli: "border-top-left-image:url(${0})|continue",
                bdtlrs: "border-top-left-radius",
                bdtri: "border-top-right-image:url(${0})|continue",
                bdtrrs: "border-top-right-radius",
                bdts: "border-top-style",
                bdtw: "border-top-width",
                bdw: "border-width",
                bfv: "backface-visibility:hidden|visible",
                bg: "background:${1:#000}",
                bga: "background-attachment:fixed|scroll",
                bgbk: "background-break:bounding-box|each-box|continuous",
                bgc: "background-color:#${1:fff}",
                bgcp: "background-clip:padding-box|border-box|content-box|no-clip",
                bgi: "background-image:url(${0})",
                bgo: "background-origin:padding-box|border-box|content-box",
                bgp: "background-position:${1:0} ${2:0}",
                bgpx: "background-position-x",
                bgpy: "background-position-y",
                bgr: "background-repeat:no-repeat|repeat-x|repeat-y|space|round",
                bgsz: "background-size:contain|cover",
                bxsh:
                  "box-shadow:${1:inset }${2:hoff} ${3:voff} ${4:blur} ${5:#000}|none",
                bxsz: "box-sizing:border-box|content-box|border-box",
                c: "color:${1:#000}",
                cl: "clear:both|left|right|none",
                cm: "/* ${0} */",
                cnt:
                  "content:'${0}'|normal|open-quote|no-open-quote|close-quote|no-close-quote|attr(${0})|counter(${0})|counters({$0})",
                coi: "counter-increment",
                colm: "columns",
                colmc: "column-count",
                colmf: "column-fill",
                colmg: "column-gap",
                colmr: "column-rule",
                colmrc: "column-rule-color",
                colmrs: "column-rule-style",
                colmrw: "column-rule-width",
                colms: "column-span",
                colmw: "column-width",
                cor: "counter-reset",
                cp: "clip:auto|rect(${1:top} ${2:right} ${3:bottom} ${4:left})",
                cps: "caption-side:top|bottom",
                cur:
                  "cursor:pointer|auto|default|crosshair|hand|help|move|pointer|text",
                d:
                  "display:grid|inline-grid|subgrid|block|none|flex|inline-flex|inline|inline-block|list-item|run-in|compact|table|inline-table|table-caption|table-column|table-column-group|table-header-group|table-footer-group|table-row|table-row-group|table-cell|ruby|ruby-base|ruby-base-group|ruby-text|ruby-text-group",
                ec: "empty-cells:show|hide",
                f: "font:${1:1em} ${2:sans-serif}",
                fd: "font-display:auto|block|swap|fallback|optional",
                fef: "font-effect:none|engrave|emboss|outline",
                fem: "font-emphasize",
                femp: "font-emphasize-position:before|after",
                fems: "font-emphasize-style:none|accent|dot|circle|disc",
                ff: "font-family:serif|sans-serif|cursive|fantasy|monospace",
                fft:
                  'font-family:"Times New Roman", Times, Baskerville, Georgia, serif',
                ffa: 'font-family:Arial, "Helvetica Neue", Helvetica, sans-serif',
                ffv: "font-family:Verdana, Geneva, sans-serif",
                fl: "float:left|right|none",
                fs: "font-style:italic|normal|oblique",
                fsm: "font-smoothing:antialiased|subpixel-antialiased|none",
                fst:
                  "font-stretch:normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded",
                fv: "font-variant:normal|small-caps",
                fvs: "font-variation-settings:normal|inherit|initial|unset",
                fw: "font-weight:normal|bold|bolder|lighter",
                fx: "flex",
                fxb: "flex-basis:fill|max-content|min-content|fit-content|content",
                fxd: "flex-direction:row|row-reverse|column|column-reverse",
                fxf: "flex-flow",
                fxg: "flex-grow",
                fxsh: "flex-shrink",
                fxw: "flex-wrap:nowrap|wrap|wrap-reverse",
                fz: "font-size",
                fza: "font-size-adjust",
                gtc: "grid-template-columns:repeat()|minmax()",
                gtr: "grid-template-rows:repeat()|minmax()",
                gta: "grid-template-areas",
                gt: "grid-template",
                gg: "grid-gap",
                gcg: "grid-column-gap",
                grg: "grid-row-gap",
                gac: "grid-auto-columns:auto|minmax()",
                gar: "grid-auto-rows:auto|minmax()",
                gaf: "grid-auto-flow:row|column|dense|inherit|initial|unset",
                gd: "grid",
                gc: "grid-column",
                gcs: "grid-column-start",
                gce: "grid-column-end",
                gr: "grid-row",
                grs: "grid-row-start",
                gre: "grid-row-end",
                ga: "grid-area",
                h: "height",
                jc:
                  "justify-content:start|end|stretch|flex-start|flex-end|center|space-between|space-around|space-evenly",
                ji: "justify-items:start|end|center|stretch",
                js: "justify-self:start|end|center|stretch",
                l: "left",
                lg: "background-image:linear-gradient(${1})",
                lh: "line-height",
                lis: "list-style",
                lisi: "list-style-image",
                lisp: "list-style-position:inside|outside",
                list:
                  "list-style-type:disc|circle|square|decimal|decimal-leading-zero|lower-roman|upper-roman",
                lts: "letter-spacing:normal",
                m: "margin",
                mah: "max-height",
                mar: "max-resolution",
                maw: "max-width",
                mb: "margin-bottom",
                mih: "min-height",
                mir: "min-resolution",
                miw: "min-width",
                ml: "margin-left",
                mr: "margin-right",
                mt: "margin-top",
                ol: "outline",
                olc: "outline-color:${1:#000}|invert",
                olo: "outline-offset",
                ols:
                  "outline-style:none|dotted|dashed|solid|double|groove|ridge|inset|outset",
                olw: "outline-width|thin|medium|thick",
                op: "opacity",
                ord: "order",
                ori: "orientation:landscape|portrait",
                orp: "orphans",
                ov: "overflow:hidden|visible|hidden|scroll|auto",
                ovs: "overflow-style:scrollbar|auto|scrollbar|panner|move|marquee",
                ovx: "overflow-x:hidden|visible|hidden|scroll|auto",
                ovy: "overflow-y:hidden|visible|hidden|scroll|auto",
                p: "padding",
                pb: "padding-bottom",
                pgba: "page-break-after:auto|always|left|right",
                pgbb: "page-break-before:auto|always|left|right",
                pgbi: "page-break-inside:auto|avoid",
                pl: "padding-left",
                pos: "position:relative|absolute|relative|fixed|static",
                pr: "padding-right",
                pt: "padding-top",
                q: "quotes",
                qen: "quotes:'\\201C' '\\201D' '\\2018' '\\2019'",
                qru: "quotes:'\\00AB' '\\00BB' '\\201E' '\\201C'",
                r: "right",
                rsz: "resize:none|both|horizontal|vertical",
                t: "top",
                ta: "text-align:left|center|right|justify",
                tal: "text-align-last:left|center|right",
                tbl: "table-layout:fixed",
                td: "text-decoration:none|underline|overline|line-through",
                te: "text-emphasis:none|accent|dot|circle|disc|before|after",
                th: "text-height:auto|font-size|text-size|max-size",
                ti: "text-indent",
                tj:
                  "text-justify:auto|inter-word|inter-ideograph|inter-cluster|distribute|kashida|tibetan",
                to: "text-outline:${1:0} ${2:0} ${3:#000}",
                tov: "text-overflow:ellipsis|clip",
                tr: "text-replace",
                trf:
                  "transform:${1}|skewX(${1:angle})|skewY(${1:angle})|scale(${1:x}, ${2:y})|scaleX(${1:x})|scaleY(${1:y})|scaleZ(${1:z})|scale3d(${1:x}, ${2:y}, ${3:z})|rotate(${1:angle})|rotateX(${1:angle})|rotateY(${1:angle})|rotateZ(${1:angle})|translate(${1:x}, ${2:y})|translateX(${1:x})|translateY(${1:y})|translateZ(${1:z})|translate3d(${1:tx}, ${2:ty}, ${3:tz})",
                trfo: "transform-origin",
                trfs: "transform-style:preserve-3d",
                trs: "transition:${1:prop} ${2:time}",
                trsde: "transition-delay:${1:time}",
                trsdu: "transition-duration:${1:time}",
                trsp: "transition-property:${1:prop}",
                trstf: "transition-timing-function:${1:fn}",
                tsh: "text-shadow:${1:hoff} ${2:voff} ${3:blur} ${4:#000}",
                tt: "text-transform:uppercase|lowercase|capitalize|none",
                tw: "text-wrap:none|normal|unrestricted|suppress",
                us: "user-select:none",
                v: "visibility:hidden|visible|collapse",
                va:
                  "vertical-align:top|super|text-top|middle|baseline|bottom|text-bottom|sub",
                w: "width",
                whs: "white-space:nowrap|pre|pre-wrap|pre-line|normal",
                whsc:
                  "white-space-collapse:normal|keep-all|loose|break-strict|break-all",
                wid: "widows",
                wm:
                  "writing-mode:lr-tb|lr-tb|lr-bt|rl-tb|rl-bt|tb-rl|tb-lr|bt-lr|bt-rl",
                wob: "word-break:normal|keep-all|break-all",
                wos: "word-spacing",
                wow: "word-wrap:none|unrestricted|suppress|break-word|normal",
                z: "z-index",
                zom: "zoom:1",
              },
            xe = function (e, t, n) {
              (this.name = e),
                (this.value = null != t ? t : null),
                (this.options = n || {});
            };
      (xe.prototype.clone = function () {
        return new xe(this.name, this.value, v()({}, this.options));
      }),
        (xe.prototype.valueOf = function () {
          return this.name + '="' + this.value + '"';
        });
      const we = function (e, t) {
                const n = this;
                (this.name = e || null),
                  (this.value = null),
                  (this.repeat = null),
                  (this.selfClosing = !1),
                  (this.children = []),
                  (this.parent = null),
                  (this.next = null),
                  (this.previous = null),
                  (this._attributes = []),
                  c()(t) &&
                    t.forEach(e => {
                      return n.setAttribute(e);
                    });
              },
            $e = {
              attributes: { configurable: !0 },
              attributesMap: { configurable: !0 },
              isGroup: { configurable: !0 },
              isTextOnly: { configurable: !0 },
              firstChild: { configurable: !0 },
              lastChild: { configurable: !0 },
              childIndex: { configurable: !0 },
              nextSibling: { configurable: !0 },
              previousSibling: { configurable: !0 },
              classList: { configurable: !0 },
            };
      function ke(e, t) {
        return e instanceof xe
          ? e
          : "string" === typeof e
          ? new xe(e, t)
          : e && "object" === typeof e
          ? new xe(e.name, e.value, e.options)
          : void 0;
      }
      function Ce(e) {
        return String(e).trim();
      }
      function Ae(e, t, n) {
        return e && n.indexOf(e) === t;
      }
      ($e.attributes.get = function () {
        return this._attributes;
      }),
        ($e.attributesMap.get = function () {
          return this.attributes.reduce((e, t) => {
            return (e[t.name] = t.options.boolean ? t.name : t.value), e;
          }, {});
        }),
        ($e.isGroup.get = function () {
          return !this.name && !this.value && !this._attributes.length;
        }),
        ($e.isTextOnly.get = function () {
          return !this.name && !!this.value && !this._attributes.length;
        }),
        ($e.firstChild.get = function () {
          return this.children[0];
        }),
        ($e.lastChild.get = function () {
          return this.children[this.children.length - 1];
        }),
        ($e.childIndex.get = function () {
          return this.parent ? this.parent.children.indexOf(this) : -1;
        }),
        ($e.nextSibling.get = function () {
          return this.next;
        }),
        ($e.previousSibling.get = function () {
          return this.previous;
        }),
        ($e.classList.get = function () {
          const e = this.getAttribute("class");
          return e && e.value ? e.value.split(/\s+/g).filter(Ae) : [];
        }),
        (we.prototype.create = (e, t) => {
          return new we(e, t);
        }),
        (we.prototype.setAttribute = function (e, t) {
          const n = ke(e, t), r = this.getAttribute(e);
          r ? this.replaceAttribute(r, n) : this._attributes.push(n);
        }),
        (we.prototype.hasAttribute = function (e) {
          return !!this.getAttribute(e);
        }),
        (we.prototype.getAttribute = function (e) {
          "object" === typeof e && (e = e.name);
          for (let t = 0; t < this._attributes.length; t++) {
            const n = this._attributes[t];
            if (n.name === e) return n;
          }
        }),
        (we.prototype.replaceAttribute = function (e, t, n) {
          "string" === typeof e && (e = this.getAttribute(e));
          const r = this._attributes.indexOf(e);
          -1 !== r && this._attributes.splice(r, 1, ke(t, n));
        }),
        (we.prototype.removeAttribute = function (e) {
          "string" === typeof e && (e = this.getAttribute(e));
          const t = this._attributes.indexOf(e);
          -1 !== t && this._attributes.splice(t, 1);
        }),
        (we.prototype.clearAttributes = function () {
          this._attributes.length = 0;
        }),
        (we.prototype.addClass = function (e) {
          (e = Ce(e)),
            this.hasAttribute("class")
              ? e &&
                !this.hasClass(e) &&
                this.setAttribute("class", this.classList.concat(e).join(" "))
              : this.setAttribute("class", e);
        }),
        (we.prototype.hasClass = function (e) {
          return -1 !== this.classList.indexOf(Ce(e));
        }),
        (we.prototype.removeClass = function (e) {
          (e = Ce(e)),
            this.hasClass(e) &&
              this.setAttribute(
                "class",
                this.classList
                  .filter(t => {
                    return t !== e;
                  })
                  .join(" ")
              );
        }),
        (we.prototype.appendChild = function (e) {
          this.insertAt(e, this.children.length);
        }),
        (we.prototype.insertBefore = function (e, t) {
          this.insertAt(e, this.children.indexOf(t));
        }),
        (we.prototype.insertAt = function (e, t) {
          if (t < 0 || t > this.children.length)
            throw new Error(
              "Unable to insert node: position is out of child list range"
            );
          const n = this.children[t - 1], r = this.children[t];
          e.remove(),
            (e.parent = this),
            this.children.splice(t, 0, e),
            n && ((e.previous = n), (n.next = e)),
            r && ((e.next = r), (r.previous = e));
        }),
        (we.prototype.removeChild = function (e) {
          const t = this.children.indexOf(e);
          -1 !== t &&
            (this.children.splice(t, 1),
            e.previous && (e.previous.next = e.next),
            e.next && (e.next.previous = e.previous),
            (e.parent = e.next = e.previous = null));
        }),
        (we.prototype.remove = function () {
          this.parent && this.parent.removeChild(this);
        }),
        (we.prototype.clone = function (e) {
          const t = new we(this.name);
          return (t.value = this.value),
          (t.selfClosing = this.selfClosing),
          this.repeat && (t.repeat = v()({}, this.repeat)),
          this._attributes.forEach(e => {
            return t.setAttribute(e.clone());
          }),
          e &&
            this.children.forEach(e => {
              return t.appendChild(e.clone(!0));
            }),
          t
        ;
        }),
        (we.prototype.walk = function (e, t) {
          t = t || 0;
          for (let n = this.firstChild; n; ) {
            const r = n.next;
            if (!1 === e(n, t) || !1 === n.walk(e, t + 1)) return !1;
            n = r;
          }
        }),
        (we.prototype.use = function (e) {
          for (var t = arguments, n = [this], r = 1; r < arguments.length; r++)
            n.push(t[r]);
          return e.apply(null, n), this;
        }),
        (we.prototype.toString = function () {
        const e = this;

        const t = this.attributes.map(t => {
          const n = (t = e.getAttribute(t.name)).options;
          let r = (n && n.implied ? "!" : "") + (t.name || "");
          return (
            n && n.boolean
              ? (r += ".")
              : null != t.value && (r += '="' + t.value + '"'),
            r
          );
        });

        let n = "" + (this.name || "");
        return (
          t.length && (n += "[" + t.join(" ") + "]"),
          null != this.value && (n += "{" + this.value + "}"),
          this.selfClosing && (n += "/"),
          this.repeat &&
            ((n += "*" + (this.repeat.count ? this.repeat.count : "")),
            null != this.repeat.value && (n += "@" + this.repeat.value)),
          n
        );
      }),
        p()(we.prototype, $e);
      const ze = function () {
                (this.type = "css-value"), (this.value = []);
              },
            Se = { size: { configurable: !0 } };
      (Se.size.get = function () {
        return this.value.length;
      }),
        (ze.prototype.add = function (e) {
          this.value.push(e);
        }),
        (ze.prototype.has = function (e) {
          return -1 !== this.value.indexOf(e);
        }),
        (ze.prototype.toString = function () {
          return this.value.join(" ");
        }),
        p()(ze.prototype, Se);
      const _e = 35, qe = 46;
      function je(e) {
        if (e.peek() === _e) {
          (e.start = e.pos), e.next(), e.eat(116) || e.eatWhile(Oe);
          const t = e.current();
          if (((e.start = e.pos), e.eat(qe) && !e.eatWhile(z)))
            throw e.error("Unexpected character for alpha value of color");
          return new Te(t, e.current());
        }
      }
      var Te = function (e, t) {
        (this.type = "color"),
          (this.raw = e),
          (this.alpha = Number(null != t && "" !== t ? t : 1));
        let n = 0, r = 0, i = 0;
        if ("t" === (e = e.slice(1))) this.alpha = 0;
        else
          switch (e.length) {
            case 0:
              break;
            case 1:
              n = r = i = e + e;
              break;
            case 2:
              n = r = i = e;
              break;
            case 3:
              (n = e[0] + e[0]), (r = e[1] + e[1]), (i = e[2] + e[2]);
              break;
            default:
              (n = (e += e).slice(0, 2)),
                (r = e.slice(2, 4)),
                (i = e.slice(4, 6));
          }
        (this.r = l()(n, 16)), (this.g = l()(r, 16)), (this.b = l()(i, 16));
      };
      function Oe(e) {
        return z(e) || S(e, 65, 70);
      }
      function Ee(e) {
        return !(e % 17);
      }
      function Re(e) {
        return (e >> 4).toString(16);
      }
      function Ne(e) {
        return ((e, t) => {
          for (; e.length < t; ) e = "0" + e;
          return e;
        })(e.toString(16), 2);
      }
      function Le(e) {
        return z(e) || Ue(e);
      }
      function Ue(e) {
        return 95 === e || S(e);
      }
      (Te.prototype.toHex = function (e) {
        const t = e && Ee(this.r) && Ee(this.g) && Ee(this.b) ? Re : Ne;
        return "#" + t(this.r) + t(this.g) + t(this.b);
      }),
        (Te.prototype.toRGB = function () {
          const e = [this.r, this.g, this.b];
          return (
            1 !== this.alpha &&
              e.push(this.alpha.toFixed(8).replace(/\.?0+$/, "")),
            (3 === e.length ? "rgb" : "rgba") + "(" + e.join(", ") + ")"
          );
        }),
        (Te.prototype.toString = function (e) {
          return this.r || this.g || this.b || this.alpha
            ? 1 === this.alpha
              ? this.toHex(e)
              : this.toRGB()
            : "transparent";
        });
      const Fe = 37, Be = 46, We = 45;
      function Me(e) {
        if (
          (e.start = e.pos, (e => {
          const t = e.pos, n = (e.eat(We), e.pos);
          e.eatWhile(z);
          const r = e.pos;
          e.eat(Be) && !e.eatWhile(z) && (e.pos = r);
          e.pos === n && (e.pos = t);
          return e.pos !== t;
        })(e))
        ) {
          const t = e.current();
          return (
            (e.start = e.pos),
            e.eat(Fe) || e.eatWhile(Ue),
            new Ie(t, e.current())
          );
        }
      }

      class Ie {
        constructor(e, t) {
          (this.type = "numeric"),
            (this.value = Number(e)),
            (this.unit = t || "");
        }

        toString() {
          return "" + this.value + this.unit;
        }
      }

      const Ye = 36, De = 45, Ge = 64;
      function Pe(e, t) {
        return (
          (e.start = e.pos),
          e.eat(Ye) || e.eat(Ge)
            ? e.eatWhile(Ve)
            : t
            ? e.eatWhile(Ue)
            : e.eatWhile(He),
          e.start !== e.pos ? new Xe(e.current()) : null
        );
      }

      class Xe {
        constructor(e) {
          (this.type = "keyword"), (this.value = e);
        }

        toString() {
          return this.value;
        }
      }

      function He(e) {
        return Le(e) || e === De;
      }
      function Ve(e) {
        return 45 === e || Le(e);
      }
      const Ze = { throws: !0 };
      function Qe(e) {
        if (C(e, Ze)) return new Je(e.current());
      }

      class Je {
        constructor(e) {
          (this.type = "string"), (this.value = e);
        }

        toString() {
          return this.value;
        }
      }

      const Ke = 40, et = 41, tt = 44;
      function nt(e) {
        if (!e.eat(Ke)) return null;
        for (var t, n = []; !e.eof(); )
          if ((t = rt(e))) n.push(t);
          else {
            if ((e.eatWhile(q), e.eat(et))) break;
            if (!e.eat(tt)) throw e.error("Expected , or )");
          }
        return n;
      }
      function rt(e) {
        for (
          var t, n = new ze();
          !e.eof() && (e.eatWhile(q), (t = Me(e) || je(e) || Qe(e) || it(e)));

        )
          n.add(t);
        return n.size ? n : null;
      }
      function it(e) {
        const t = Pe(e);
        if (t) {
          const n = nt(e);
          return n ? new ot(t.toString(), n) : t;
        }
      }

      class ot {
        constructor(e, t) {
          (this.type = "function"), (this.name = e), (this.args = t || []);
        }

        toString() {
          return this.name + "(" + this.args.join(", ") + ")";
        }
      }

      const at = 33, st = 36, lt = 43, ut = 45, ct = 58, ft = 64;
      function pt(e) {
        return (
          (e.start = e.pos),
          e.eatWhile(mt),
          e.eatWhile(ht),
          e.start !== e.pos ? e.current() : null
        );
      }
      function dt(e) {
        for (
          var t, n = new ze();
          !e.eof() &&
          (e.eat(ct),
          (t = Me(e) || je(e))
            ? t.unit || e.eat(ut)
            : (e.eat(ut), (t = Pe(e, !0))),
          t);

        )
          n.add(t);
        return n;
      }
      function ht(e) {
        return Ue(e);
      }
      function mt(e) {
        return e === ft || e === st || e === at;
      }
      const bt = function (e, t) {
                (this.key = e), (this.value = t);
              },
            gt = function (e) {
              (this._string = new a.a()),
                (this._regexp = new a.a()),
                (this._disabled = !1),
                this.load(e);
            },
            vt = { disabled: { configurable: !0 } };
      (vt.disabled.get = function () {
        return this._disabled;
      }),
        (gt.prototype.disable = function () {
          this._disabled = !0;
        }),
        (gt.prototype.enable = function () {
          this._disabled = !1;
        }),
        (gt.prototype.set = function (e, t) {
          const n = this;
          if ("string" === typeof e)
            e.split("|").forEach(e => {
              return n._string.set(e, new bt(e, t));
            });
          else {
            if (!(e instanceof RegExp))
              throw new Error("Unknow snippet key: " + e);
            this._regexp.set(e, new bt(e, t));
          }
          return this;
        }),
        (gt.prototype.get = function (e) {
          if (!this.disabled) {
            if (this._string.has(e)) return this._string.get(e);
            for (
              let t = h()(this._regexp.keys()), n = 0, r = t.length;
              n < r;
              n++
            )
              if (t[n].test(e)) return this._regexp.get(t[n]);
          }
        }),
        (gt.prototype.load = function (e) {
          const t = this;
          this.reset(),
            e instanceof a.a
              ? e.forEach((e, n) => {
                  return t.set(n, e);
                })
              : e &&
                "object" === typeof e &&
                i()(e).forEach(n => {
                  return t.set(n, e[n]);
                });
        }),
        (gt.prototype.reset = function () {
          this._string.clear(), this._regexp.clear();
        }),
        (gt.prototype.values = function () {
          if (this.disabled) return [];
          const e = h()(this._string.values()), t = h()(this._regexp.values());
          return e.concat(t);
        }),
        p()(gt.prototype, vt);
      const yt = function (e) {
        const t = this;
        (this._registry = []),
          c()(e)
            ? e.forEach((e, n) => {
                return t.add(n, e);
              })
            : "object" === typeof e && this.add(e);
      };
      (yt.prototype.get = function (e) {
        for (let t = 0; t < this._registry.length; t++) {
          const n = this._registry[t];
          if (n.level === e) return n.store;
        }
      }),
        (yt.prototype.add = function (e, t) {
          null != e && "object" === typeof e && ((t = e), (e = 0));
          const n = new gt(t);
          return this.remove(e),
          this._registry.push({ level: e, store: n }),
          this._registry.sort((e, t) => {
            return t.level - e.level;
          }),
          n
        ;
        }),
        (yt.prototype.remove = function (e) {
          this._registry = this._registry.filter(t => {
            return t.level !== e && t.store !== e;
          });
        }),
        (yt.prototype.resolve = function (e) {
          for (let t = 0; t < this._registry.length; t++) {
            const n = this._registry[t].store.get(e);
            if (n) return n;
          }
        }),
        (yt.prototype.all = function (e) {
          e = e || {};
          const t = new a.a(),
                n = n => {
                  const r = n.key instanceof RegExp ? "regexp" : "string";
                  (e.type && e.type !== r) || t.has(n.key) || t.set(n.key, n);
                };
          return this._registry.forEach(e => {
            e.store.values().forEach(n);
          }),
          h()(t.values())
        ;
        }),
        (yt.prototype.clear = function () {
          this._registry.length = 0;
        });
      const xt = {
                indent: "\t",
                tagCase: "",
                attributeCase: "",
                attributeQuotes: "double",
                format: !0,
                formatSkip: ["html"],
                formatForce: ["body"],
                inlineBreak: 3,
                compactBooleanAttributes: !1,
                booleanAttributes: [
                  "contenteditable",
                  "seamless",
                  "async",
                  "autofocus",
                  "autoplay",
                  "checked",
                  "controls",
                  "defer",
                  "disabled",
                  "formnovalidate",
                  "hidden",
                  "ismap",
                  "loop",
                  "multiple",
                  "muted",
                  "novalidate",
                  "readonly",
                  "required",
                  "reversed",
                  "selected",
                  "typemustmatch",
                ],
                selfClosingStyle: "html",
                inlineElements: [
                  "a",
                  "abbr",
                  "acronym",
                  "applet",
                  "b",
                  "basefont",
                  "bdo",
                  "big",
                  "br",
                  "button",
                  "cite",
                  "code",
                  "del",
                  "dfn",
                  "em",
                  "font",
                  "i",
                  "iframe",
                  "img",
                  "input",
                  "ins",
                  "kbd",
                  "label",
                  "map",
                  "object",
                  "q",
                  "s",
                  "samp",
                  "select",
                  "small",
                  "span",
                  "strike",
                  "strong",
                  "sub",
                  "sup",
                  "textarea",
                  "tt",
                  "u",
                  "var",
                ],
              },
            wt = function (e) {
              (this.options = v()({}, xt, e)),
                (this.quoteChar =
                  "single" === this.options.attributeQuotes ? "'" : '"');
            };
      function $t(e, t) {
        return t ? ("upper" === t ? e.toUpperCase() : e.toLowerCase()) : e;
      }
      (wt.prototype.get = function (e) {
        return this.options[e];
      }),
        (wt.prototype.quote = function (e) {
          return "" + this.quoteChar + (null != e ? e : "") + this.quoteChar;
        }),
        (wt.prototype.name = function (e) {
          return $t(e, this.options.tagCase);
        }),
        (wt.prototype.attribute = function (e) {
          return $t(e, this.options.attributeCase);
        }),
        (wt.prototype.isBooleanAttribute = function (e) {
          return (
            e.options.boolean ||
            -1 !==
              this.get("booleanAttributes").indexOf(
                (e.name || "").toLowerCase()
              )
          );
        }),
        (wt.prototype.selfClose = function () {
          switch (this.options.selfClosingStyle) {
            case "xhtml":
              return " /";
            case "xml":
              return "/";
            default:
              return "";
          }
        }),
        (wt.prototype.indent = function (e) {
          e = e || 0;
          for (var t = ""; e--; ) t += this.options.indent;
          return t;
        }),
        (wt.prototype.isInline = function (e) {
          return "string" === typeof e
            ? -1 !== this.get("inlineElements").indexOf(e.toLowerCase())
            : null != e.name
            ? this.isInline(e.name)
            : e.isTextOnly;
        }),
        (wt.prototype.field = function (e, t) {
          return this.options.field(e, t);
        });
      const kt = {
        field(e, t) {
          return "${" + e + (t ? ":" + t : "") + "}";
        },
      };
      function Ct(e) {
        return (
          e ||
            console.error(
              "emmet-monaco-es: 'monaco' should be either declared on window or passed as first parameter"
            ),
          !!e
        );
      }
      function At(e, t, n, r) {
        const i = "html" === t;
        "string" === typeof t && (t = [t]);
        const o = t.map(t => {
          return e.languages.registerCompletionItemProvider(t, {
            triggerCharacters: ">+-^*()#.[]$@{}=!:%".split(""),
            provideCompletionItems(t, o) {
              const a = o.column, s = o.lineNumber;
              if (!(1 === a || a <= t.getLineFirstNonWhitespaceColumn(s))) {
                for (
                  var l,
                    u =
                      t._tokens.tokenizationSupport ||
                      t._tokenization._tokenizationSupport,
                    c = u.getInitialState(),
                    f = 1;
                  f <= s;
                  f++
                )
                  c = (l = u.tokenize(t.getLineContent(f), c, 0)).endState;
                let p;
                const d = l.tokens;
                for (f = d.length - 1; f >= 0; f--)
                  if (a - 1 > d[f].offset) {
                    n(d, f) &&
                      (p = r(
                        t.getLineContent(s).substring(d[f].offset, a - 1)
                      ));
                    break;
                  }
                if (p)
                  return {
                    items: p.map(t => {
                      const n = t.emmetText,
                            r = t.expandText
                              .replace(/([^\\])\$\{\d+\}/g, "$1")
                              .replace(/\$\{\d+:([^\}]+)\}/g, "$1"),
                            o = i ? n : r;
                      return {
                        kind: e.languages.CompletionItemKind.Property,
                        label: o,
                        sortText: "0" + o,
                        insertText: r,
                        range: new e.Range(s, a - n.length, s, a),
                        detail: "Emmet Abbreviation",
                        documentation: r,
                      };
                    }),
                    isIncomplete: !0,
                  };
              }
            },
          });
        });
        return () => {
          o.forEach(e => {
            return e.dispose();
          });
        };
      }
      const zt = y(y({}, kt), { snippets: new yt(ye), profile: new wt() });
      function St(e) {
        return Z(
          (e => {
            for (var t = new we(), n = new x(e); !n.eof(); ) {
              const r = new we(pt(n));
              r.value = dt(n);
              const i = nt(n);
              if (i)
                for (let o = 0; o < i.length; o++)
                  r.setAttribute(String(o), i[o]);
              if ((n.eat(at) && r.value.add("!"), t.appendChild(r), !n.eat(lt)))
                break;
            }
            if (!n.eof()) throw n.error("Unexpected character");
            return t;
          })(e).use(fe, zt.snippets),
          zt.profile,
          zt
        );
      }
      function _t(e) {
        if ((void 0 === e && (e = window.monaco), Ct(e)))
          return At(
            e,
            ["css", "less", "scss"],
            (e, t) => {
              return "attribute.value" !== e[t].type.substring(0, 15);
            },
            e => {
              if (
                "" !== e &&
                !e.match(/\s$/) &&
                (e = e.trim().split(/{|}|;/).pop())
              )
                try {
                  return [{ emmetText: e, expandText: St(e) }];
                } catch (t) {
                  return;
                }
            }
          );
      }
      const qt = 42;
      function jt(e) {
        if (e.eat(qt))
          return (
            (e.start = e.pos), { count: e.eatWhile(z) ? +e.current() : null }
          );
      }
      const Tt = { throws: !0 };
      function Ot(e) {
        if (C(e, Tt)) return e.current().slice(1, -1);
      }
      const Et = 123, Rt = 125, Nt = 92;
      function Lt(e) {
        const t = e.pos;
        if (e.eat(Et)) {
          for (let n, r = 1, i = "", o = e.pos; !e.eof(); )
            if ((n = e.next()) === Et) r++;
            else if (n === Rt) {
              if (!--r) return (e.start = t), i + e.substring(o, e.pos - 1);
            } else
              n === Nt &&
                (((n = e.next()) !== Et && n !== Rt) ||
                  ((i += e.substring(o, e.pos - 2) + String.fromCharCode(n)),
                  (o = e.pos)));
          throw (
            ((e.pos = t),
            e.error(
              "Unable to find closing " +
                String.fromCharCode(Rt) +
                " for text start"
            ))
          );
        }
        return null;
      }
      const Ut = 33, Ft = 46, Bt = 61, Wt = 91, Mt = 93, It = /^\!?[\w\-:\$@]+\.?$|^\!?\[[\w\-:\$@]+\]\.?$/;
      function Yt(e) {
        if (!e.eat(Wt)) return null;
        for (let t, n, r = []; !e.eof(); ) {
          if ((e.eatWhile(q), e.eat(Mt))) return r;
          if (null != (t = Ot(e))) r.push({ name: null, value: t });
          else {
            if (!Gt(e)) throw e.error("Expected attribute name");
            "[" === (t = e.current())[0] &&
              e.peek() === Mt &&
              (e.next(), (t = e.current())),
              It.test(t)
                ? ((n = Dt(t)),
                  r.push(n),
                  e.eat(Bt) &&
                    (null != (t = Ot(e))
                      ? (n.value = t)
                      : null != (t = Lt(e))
                      ? ((n.value = t),
                        (n.options = { before: "{", after: "}" }))
                      : Gt(e) && (n.value = e.current())))
                : r.push({ name: null, value: t });
          }
        }
        throw e.error('Expected closing "]" brace');
      }
      function Dt(e) {
        const t = {};
        e.charCodeAt(0) === Ut && ((e = e.slice(1)), (t.implied = !0)),
          e.charCodeAt(e.length - 1) === Ft &&
            ((e = e.slice(0, e.length - 1)), (t.boolean = !0));
        const n = { name: e };
        return i()(t).length && (n.options = t), n;
      }
      function Gt(e) {
        const t = e.pos;
        if (e.eatWhile(Pt)) return (e.start = t), !0;
      }
      function Pt(e) {
        return !j(e) && !A(e) && e !== Mt && e !== Bt;
      }
      const Xt = 35, Ht = 46, Vt = 47;
      function Zt(e) {
        for (var t, n = e.pos, r = new we(Qt(e)); !e.eof(); )
          if (e.eat(Ht)) r.addClass(Qt(e));
          else if (e.eat(Xt)) r.setAttribute("id", Qt(e));
          else {
            if (e.eat(Vt)) {
              if (r.isGroup)
                throw (
                  (e.backUp(1), e.error("Unexpected self-closing indicator"))
                );
              (r.selfClosing = !0), (t = jt(e)) && (r.repeat = t);
              break;
            }
            if ((t = Yt(e)))
              for (let i = 0, o = t.length; i < o; i++) r.setAttribute(t[i]);
            else if (null !== (t = Lt(e))) r.value = t;
            else {
              if (!(t = jt(e))) break;
              r.repeat = t;
            }
          }
        if (n === e.pos)
          throw e.error(
            "Unable to consume abbreviation node, unexpected " + e.peek()
          );
        return r;
      }
      function Qt(e) {
        return (e.start = e.pos), e.eatWhile(Jt), e.current();
      }
      function Jt(e) {
        return (
          _(e) ||
          45 === e ||
          58 === e ||
          36 === e ||
          64 === e ||
          33 === e ||
          95 === e ||
          37 === e
        );
      }
      const Kt = 40, en = 41, tn = 43, nn = 62, rn = 94;
      function on(e) {
        const t = (e => {
          for (
            var t, n = new x(e.trim()), r = new we(), i = r, o = [];
            !n.eof();

          )
            if ((t = n.peek()) !== Kt)
              if (t !== en) {
                const a = Zt(n);
                if ((i.appendChild(a), n.eof())) break;
                switch (n.peek()) {
                  case tn:
                    n.next();
                    continue;
                  case nn:
                    n.next(), (i = a);
                    continue;
                  case rn:
                    for (; n.eat(rn); ) i = i.parent || i;
                    continue;
                }
              } else {
                const s = o.pop();
                if (!s) throw n.error('Unexpected ")" group end');
                const l = s[0];
                if (((i = s[1]), n.next(), (l.repeat = jt(n))))
                  i.appendChild(l);
                else for (; l.firstChild; ) i.appendChild(l.firstChild);
                n.eat(tn);
              }
            else {
              const u = new we();
              o.push([u, i, n.pos]), (i = u), n.next();
            }
          if (o.length)
            throw ((n.pos = o.pop()[2]), n.error("Expected group close"));
          return r;
        })(e);
        return t.walk(an), t;
      }
      function an(e) {
        if (e.repeat && e.repeat.count) {
          for (
            let t = e.parent, n = t.children.indexOf(e), r = 0;
            r < e.repeat.count;
            r++
          ) {
            const i = e.clone(!0);
            if (((i.repeat.value = r + 1), i.walk(an), i.isGroup))
              for (; i.children.length > 0; )
                (i.firstChild.repeat = i.repeat), t.insertAt(i.firstChild, n++);
            else t.insertAt(i, n++);
          }
          e.parent.removeChild(e);
        }
      }
      const sn = 42;
      function ln(e) {
        if (e.eat(sn))
          return (
            (e.start = e.pos), { count: e.eatWhile(z) ? +e.current() : null }
          );
      }
      const un = { throws: !0 };
      function cn(e) {
        if (C(e, un)) return e.current().slice(1, -1);
      }
      const fn = 123, pn = 125, dn = 92;
      function hn(e) {
        const t = e.pos;
        if (e.eat(fn)) {
          for (let n, r = 1, i = "", o = e.pos; !e.eof(); )
            if ((n = e.next()) === fn) r++;
            else if (n === pn) {
              if (!--r) return (e.start = t), i + e.substring(o, e.pos - 1);
            } else
              n === dn &&
                (((n = e.next()) !== fn && n !== pn) ||
                  ((i += e.substring(o, e.pos - 2) + String.fromCharCode(n)),
                  (o = e.pos)));
          throw (
            ((e.pos = t),
            e.error(
              "Unable to find closing " +
                String.fromCharCode(pn) +
                " for text start"
            ))
          );
        }
        return null;
      }
      const mn = 33, bn = 46, gn = 61, vn = 91, yn = 93, xn = /^\!?[\w\-:\$@]+\.?$/;
      function wn(e) {
        if (!e.eat(vn)) return null;
        for (let t, n, r = []; !e.eof(); ) {
          if ((e.eatWhile(q), e.eat(yn))) return r;
          if (null != (t = cn(e))) r.push({ name: null, value: t });
          else {
            if (!kn(e)) throw e.error("Expected attribute name");
            (t = e.current()),
              xn.test(t)
                ? ((n = $n(t)),
                  r.push(n),
                  e.eat(gn) &&
                    (null != (t = cn(e))
                      ? (n.value = t)
                      : null != (t = hn(e))
                      ? ((n.value = t),
                        (n.options = { before: "{", after: "}" }))
                      : kn(e) && (n.value = e.current())))
                : r.push({ name: null, value: t });
          }
        }
        throw e.error('Expected closing "]" brace');
      }
      function $n(e) {
        const t = {};
        e.charCodeAt(0) === mn && ((e = e.slice(1)), (t.implied = !0)),
          e.charCodeAt(e.length - 1) === bn &&
            ((e = e.slice(0, e.length - 1)), (t.boolean = !0));
        const n = { name: e };
        return i()(t).length && (n.options = t), n;
      }
      function kn(e) {
        const t = e.pos;
        if (e.eatWhile(Cn)) return (e.start = t), !0;
      }
      function Cn(e) {
        return !j(e) && !A(e) && e !== vn && e !== yn && e !== gn;
      }
      const An = 35, zn = 46, Sn = 47;
      function _n(e) {
        for (var t, n = e.pos, r = new we(qn(e)); !e.eof(); )
          if (e.eat(zn)) r.addClass(qn(e));
          else if (e.eat(An)) r.setAttribute("id", qn(e));
          else {
            if (e.eat(Sn)) {
              if (r.isGroup)
                throw (
                  (e.backUp(1), e.error("Unexpected self-closing indicator"))
                );
              (r.selfClosing = !0), (t = ln(e)) && (r.repeat = t);
              break;
            }
            if ((t = wn(e)))
              for (let i = 0, o = t.length; i < o; i++) r.setAttribute(t[i]);
            else if (null !== (t = hn(e))) r.value = t;
            else {
              if (!(t = ln(e))) break;
              r.repeat = t;
            }
          }
        if (n === e.pos)
          throw e.error(
            "Unable to consume abbreviation node, unexpected " + e.peek()
          );
        return r;
      }
      function qn(e) {
        return (e.start = e.pos), e.eatWhile(jn), e.current();
      }
      function jn(e) {
        return (
          _(e) ||
          45 === e ||
          58 === e ||
          36 === e ||
          64 === e ||
          33 === e ||
          95 === e ||
          37 === e
        );
      }
      const Tn = 40, On = 41, En = 43, Rn = 62, Nn = 94;
      function Ln(e) {
        const t = (e => {
          for (
            var t, n = new x(e.trim()), r = new we(), i = r, o = [];
            !n.eof();

          )
            if ((t = n.peek()) !== Tn)
              if (t !== On) {
                const a = _n(n);
                if ((i.appendChild(a), n.eof())) break;
                switch (n.peek()) {
                  case En:
                    n.next();
                    continue;
                  case Rn:
                    n.next(), (i = a);
                    continue;
                  case Nn:
                    for (; n.eat(Nn); ) i = i.parent || i;
                    continue;
                }
              } else {
                const s = o.pop();
                if (!s) throw n.error('Unexpected ")" group end');
                const l = s[0];
                if (((i = s[1]), n.next(), (l.repeat = ln(n))))
                  i.appendChild(l);
                else for (; l.firstChild; ) i.appendChild(l.firstChild);
                n.eat(En);
              }
            else {
              const u = new we();
              o.push([u, i, n.pos]), (i = u), n.next();
            }
          if (o.length)
            throw ((n.pos = o.pop()[2]), n.error("Expected group close"));
          return r;
        })(e);
        return t.walk(Un), t;
      }
      function Un(e) {
        if (e.repeat && e.repeat.count) {
          for (
            let t = e.parent, n = t.children.indexOf(e), r = 0;
            r < e.repeat.count;
            r++
          ) {
            const i = e.clone(!0);
            if (((i.repeat.value = r + 1), i.walk(Un), i.isGroup))
              for (; i.children.length > 0; )
                (i.firstChild.repeat = i.repeat), t.insertAt(i.firstChild, n++);
            else t.insertAt(i, n++);
          }
          e.parent.removeChild(e);
        }
      }
      const Fn = (e, t) => {
        return e.walk(e => {
          return ((e, t) => {
            const n = new b.a();
            !(function e(r) {
              const i = t.resolve(r.name);
              if (i && !n.has(i)) {
                if ("function" === typeof i.value) return i.value(r, t, e);
                const o = Ln(i.value);
                n.add(i), o.walk(e), n.delete(i);
                const s = (e => {
                  for (; e.children.length; )
                    e = e.children[e.children.length - 1];
                  return e;
                })(o);
                for (
                  !((e, t) => {
                    (t.name = e.name), e.selfClosing && (t.selfClosing = !0);
                    null != e.value && (t.value = e.value);
                    e.repeat && (t.repeat = v()({}, e.repeat));
                    ((e, t) => {
                      !((e, t) => {
                        for (let n = e.classList, r = 0; r < n.length; r++)
                          t.addClass(n[r]);
                      })(e, t);
                      for (
                        var n = new a.a(), r = e.attributes, i = 0;
                        i < r.length;
                        i++
                      )
                        n.set(r[i].name, r[i].clone());
                      r = t.attributes.slice();
                      for (
                        let o = 0, s = void 0, l = void 0;
                        o < r.length;
                        o++
                      )
                        (s = r[o]),
                          n.has(s.name)
                            ? (((l = n.get(s.name)).value = s.value),
                              l.options.implied && (l.options.implied = !1))
                            : n.set(s.name, s),
                          t.removeAttribute(s);
                      for (let u = h()(n.values()), c = 0; c < u.length; c++)
                        t.setAttribute(u[c]);
                    })(e, t);
                  })(s, r);
                  o.firstChild;

                )
                  r.parent.insertBefore(o.firstChild, r);
                s.parent.insertBefore(r, s), s.remove();
              }
            })(e);
          })(e, t);
        }),
        e;
      };
      const Bn = /^(.*?)([A-Z_]+)(.*?)$/, Wn = 91, Mn = 93;
      function In(e, t) {
        if (null == e) return e;
        for (
          var n,
            r,
            i = [],
            o = (e, n, r, i) => {
              return null != t[r] ? n + t[r] + i : "";
            },
            a = "",
            s = 0,
            l = 0;
          l < e.length;

        )
          (n = e.charCodeAt(l)) === Wn
            ? i.push(l)
            : n === Mn &&
              ((r = i.pop()),
              i.length ||
                ((a += e.slice(s, r) + e.slice(r + 1, l).replace(Bn, o)),
                (s = l + 1))),
            l++;
        return a + e.slice(s);
      }
      function Yn(e) {
        return (e || "").split(/\r\n|\r|\n/g);
      }
      function Dn(e) {
        return e.parent.firstChild === e;
      }
      function Gn(e) {
        return e && !e.parent;
      }
      function Pn(e) {
        return e.isTextOnly && !!e.children.length;
      }
      function Xn(e) {
        const t = e.node;
        if (Pn(t)) {
          const n = L(t.value),
                r = n.fields.reduce((e, t) => {
                  return !e || t.index < e.index ? t : e;
                }, null);
          if (r) {
            const i = ((e, t) => {
              const n = e.fields.indexOf(t),
                    r = new e.constructor(
                      e.string.slice(0, t.location),
                      e.fields.slice(0, n)
                    ),
                    i = new e.constructor(
                      e.string.slice(t.location + t.length),
                      e.fields.slice(n + 1)
                    );
              return [r, i];
            })(n, r);
            (e.open = e.renderFields(i[0])), (e.close = e.renderFields(i[1]));
          } else e.text = e.renderFields(n);
          return !0;
        }
        return !1;
      }
      const Hn = {
        enabled: !1,
        trigger: ["id", "class"],
        before: "",
        after: "\n\x3c!-- /[#ID][.CLASS] --\x3e",
      };
      function Vn(e, t) {
        return !!t.get("format") &&
        (!e.parent.isTextOnly ||
          1 !== e.parent.children.length ||
          !L(e.parent.value).fields.length) &&
        (!Zn(e, t) || ((e, t) => {
          if (!Zn(e, t)) return !1;
          if (Pn(e)) return !0;
          if (0 === e.childIndex) {
            for (let n = e; (n = n.nextSibling); ) if (!Zn(n, t)) return !0;
          } else if (!Zn(e.previousSibling, t)) return !0;
          if (t.get("inlineBreak")) {
            for (var r = 1, i = e, o = e; Qn((i = i.previousSibling), t); )
              r++;
            for (; Qn((o = o.nextSibling), t); ) r++;
            if (r >= t.get("inlineBreak")) return !0;
          }
          for (let a = 0, s = e.children.length; a < s; a++)
            if (Vn(e.children[a], t)) return !0;
          return !1;
        })(e, t));
      }
      function Zn(e, t) {
        return (e && e.isTextOnly) || Qn(e, t);
      }
      function Qn(e, t) {
        return e && t.isInline(e);
      }
      const Jn = /^id$/i,
            Kn = /^class$/i,
            er = {
              primary(e) {
                return e.join("");
              },
              secondary(e) {
                return e
                  .map(e => {
                    return e.isBoolean ? e.name : e.name + "=" + e.value;
                  })
                  .join(", ");
              },
            },
            tr = { open: null, close: null, omitName: /^div$/i, attributes: er };
      function nr(e, t, n) {
        n = v()({}, tr, n);
        const r = e.node;
        if (
          ((e.indent = t.indent((e => {
          let t = e.parent.isTextOnly ? -2 : -1, n = e;
          for (; (n = n.parent); ) t++;
          return t < 0 ? 0 : t;
        })(r))),
          (e.newline = "\n"),
          (Gn(r.parent) && Dn(r)) || (e.beforeOpen = e.newline + e.indent),
          r.name)
        ) {
          const i = v()({
            NAME: t.name(r.name),
            SELF_CLOSE: r.selfClosing ? n.selfClose : null,
          }, ((e, t, n) => {
            n = v()({}, er, n);
            const r = [], i = [];
            return e.node.attributes.forEach(n => {
              if (n.options.implied && null == n.value) return null;
              const o = t.attribute(n.name), a = e.renderFields(n.value);
              if (Jn.test(o)) a && r.push("#" + a);
              else if (Kn.test(o))
                a && r.push("." + a.replace(/\s+/g, "."));
              else {
                const s =
                  null == n.value &&
                  (n.options.boolean ||
                    -1 !==
                      t.get("booleanAttributes").indexOf(o.toLowerCase()));
                i.push({ name: o, value: a, isBoolean: s });
              }
            }),
            {
              PRIMARY_ATTRS: n.primary(r) || null,
              SECONDARY_ATTRS: n.secondary(i) || null,
            };
          })(e, t, n.attributes));
          n.omitName &&
            n.omitName.test(i.NAME) &&
            i.PRIMARY_ATTRS &&
            (i.NAME = null),
            null != n.open && (e.open = In(n.open, i)),
            null != n.close && (e.close = In(n.close, i));
        }
        return e;
      }
      const rr = /\n|\r/;
      const ir = /\n|\r/,
            or = {
              none: "[ SECONDARY_ATTRS]",
              round: "[(SECONDARY_ATTRS)]",
              curly: "[{SECONDARY_ATTRS}]",
              square: "[[SECONDARY_ATTRS]",
            };
      const ar = /\n|\r/;
      const sr = {
        html(e, t, n) {
          const r = (e => {
            const t = v()({}, e && e.format);
            return (t.comment = v()({}, Hn, t.comment)), t;
          })(n = v()({}, n));
          return G(e, n.field, e => {
            if (
              !Xn(
                (e = ((e, t) => {
                  const n = e.node;
                  if (Vn(n, t)) {
                    (e.indent = t.indent(((e, t) => {
                      const n = t.get("formatSkip") || [];
                      let r = e.parent.isTextOnly ? -2 : -1;
                      let i = e;
                      for (; (i = i.parent); )
                        -1 === n.indexOf((i.name || "").toLowerCase()) && r++;
                      return r < 0 ? 0 : r;
                    })(n, t))),
                      (e.newline = "\n");
                    const r = e.newline + e.indent;
                    (Gn(n.parent) && Dn(n)) ||
                      ((e.beforeOpen = r), n.isTextOnly && (e.beforeText = r)),
                      ((e, t) => {
                        const n = (e.name || "").toLowerCase();
                        if (-1 !== t.get("formatForce").indexOf(n)) return !0;
                        for (let r = 0; r < e.children.length; r++)
                          if (Vn(e.children[r], t)) return !0;
                        return !1;
                      })(n, t) && (n.isTextOnly || (e.beforeText = r + t.indent(1)), e.beforeClose = r);
                  }
                  return e;
                })(e, t))
              )
            ) {
              const n = e.node;
              if (n.name) {
                const i = t.name(n.name),
                      o = ((e, t) => {
                        return e.node.attributes
                          .map(n => {
                          if (n.options.implied && null == n.value) return null;
                          const r = t.attribute(n.name);
                          let i = null;
                          if (
                            n.options.boolean ||
                            -1 !==
                              t.get("booleanAttributes").indexOf(r.toLowerCase())
                          ) {
                            if (
                              t.get("compactBooleanAttributes") &&
                              null == n.value
                            )
                              return " " + r;
                            null == n.value && (i = r);
                          }
                          return (
                            null == i && (i = e.renderFields(n.value)),
                            n.options.before && n.options.after
                              ? " " +
                                r +
                                "=" +
                                (n.options.before + i + n.options.after)
                              : " " + r + "=" + t.quote(i)
                          );
                        })
                          .join("");
                      })(e, t);
                e.open =
                  "<" + i + o + (n.selfClosing ? t.selfClose() : "") + ">", n.selfClosing || (e.close = "</" + i + ">"), ((e, t) => {
                  const n = e.node;
                  if (!t.enabled || !t.trigger || !n.name) return;
                  for (
                    let r = e.node.attributes.reduce((e, t) => {
                            return (
                              t.name &&
                                null != t.value &&
                                (e[t.name.toUpperCase().replace(/-/g, "_")] =
                                  t.value),
                              e
                            );
                          }, {}),
                        i = 0,
                        o = t.trigger.length;
                    i < o;
                    i++
                  )
                    if (t.trigger[i].toUpperCase() in r) {
                      (e.open = In(t.before, r) + e.open),
                        e.close && (e.close += In(t.after, r));
                      break;
                    }
                })(e, r.comment);
              }
              (n.value || (!n.children.length && !n.selfClosing)) &&
                (e.text = e.renderFields(n.value));
            }
            return e;
          });
        },
        haml(e, t, n) {
          const r = {
            open: "[%NAME][PRIMARY_ATTRS][(SECONDARY_ATTRS)][SELF_CLOSE]",
            selfClose: "/",
            attributes: {
              secondary(e) {
                return e
                  .map(e => {
                    return e.isBoolean
                      ? e.name +
                          (t.get("compactBooleanAttributes") ? "" : "=true")
                      : e.name + "=" + t.quote(e.value);
                  })
                  .join(" ");
              },
            },
          };
          return G(e, (n = n || {}).field, e => {
            if (
              !Xn(
                (e = ((e, t) => {
                  const n = e.node;
                  !n.isTextOnly &&
                    n.value &&
                    (e.beforeText = rr.test(n.value)
                      ? e.newline + e.indent + t.indent(1)
                      : " ");
                  return e;
                })(e = nr(e, t, r), t))
              )
            ) {
              const n = e.node;
              (n.value || (!n.children.length && !n.selfClosing)) &&
                (e.text = e.renderFields(((e, t) => {
                if (null != e.value && rr.test(e.value)) {
                  const n = Yn(e.value),
                        r = t.indent(1),
                        i = n.reduce((e, t) => {
                          return Math.max(e, t.length);
                        }, 0);
                  return n
                    .map((e, t) => {
                      return "" +
                      (t ? r : "") + ((e, t) => {
                        for (; e.length < t; ) e += " ";
                        return e;
                      })(e, i) +
                      " |";
                    })
                    .join("\n");
                }
                return e.value;
              })(n, t)));
            }
            return e;
          });
        },
        slim(e, t, n) {
          const r =
                    ((n = n || {}).attributeWrap && or[n.attributeWrap]) || or.none,
                i =
                  r === or.none
                    ? e => {
                        return e.name + "=true";
                      }
                    : e => {
                        return e.name;
                      },
                o = {
                  open: "[NAME][PRIMARY_ATTRS]" + r + "[SELF_CLOSE]",
                  selfClose: "/",
                  attributes: {
                    secondary(e) {
                      return e
                        .map(e => {
                          return e.isBoolean
                            ? i(e)
                            : e.name + "=" + t.quote(e.value);
                        })
                        .join(" ");
                    },
                  },
                };
          return G(e, n.field, e => {
            if (
              !Xn(
                (e = ((e, t) => {
                  const n = e.node, r = n.parent;
                  0 === t.get("inlineBreak") && ((e, t) => {
                    return e && (e.isTextOnly || t.isInline(e));
                  })(n, t) &&
                    !Gn(r) &&
                    null == r.value &&
                    1 === r.children.length &&
                    (e.beforeOpen = ": ");
                  !n.isTextOnly &&
                    n.value &&
                    (e.beforeText = ir.test(n.value)
                      ? e.newline + e.indent + t.indent(1)
                      : " ");
                  return e;
                })(e = nr(e, t, o), t))
              )
            ) {
              const n = e.node;
              (n.value || (!n.children.length && !n.selfClosing)) &&
                (e.text = e.renderFields(((e, t) => {
                if (null != e.value && ir.test(e.value)) {
                  const n = t.indent(1);
                  return Yn(e.value)
                    .map((e, t) => {
                      return n + (t ? " " : "|") + " " + e;
                    })
                    .join("\n");
                }
                return e.value;
              })(n, t)));
            }
            return e;
          });
        },
        pug(e, t, n) {
          const r = {
            open: "[NAME][PRIMARY_ATTRS][(SECONDARY_ATTRS)]",
            attributes: {
              secondary(e) {
                return e
                  .map(e => {
                    return e.isBoolean
                      ? e.name
                      : e.name + "=" + t.quote(e.value);
                  })
                  .join(", ");
              },
            },
          };
          return G(e, (n = n || {}).field, e => {
            if (
              !Xn(
                (e = ((e, t) => {
                  const n = e.node;
                  !n.isTextOnly &&
                    n.value &&
                    (e.beforeText = ar.test(n.value)
                      ? e.newline + e.indent + t.indent(1)
                      : " ");
                  return e;
                })(e = nr(e, t, r), t))
              )
            ) {
              const n = e.node;
              (n.value || (!n.children.length && !n.selfClosing)) &&
                (e.text = e.renderFields(((e, t) => {
                if (null != e.value && ar.test(e.value)) {
                  const n = t.indent(1);
                  return Yn(e.value)
                    .map(e => {
                      return n + "| " + e;
                    })
                    .join("\n");
                }
                return e.value;
              })(n, t)));
            }
            return e;
          });
        },
      };
      function lr(e, t, n, r) {
        return "object" === typeof n && ((r = n), (n = null)),
        (e => {
          return !!e && e in sr;
        })(n) || (n = "html"),
        sr[n](e, t, r)
      ;
      }
      const ur = new b.a(
                "a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,select,small,span,strike,strong,sub,sup,textarea,tt,u,var".split(
                  ","
                )
              ),
            cr = {
              p: "span",
              ul: "li",
              ol: "li",
              table: "tr",
              tr: "td",
              tbody: "tr",
              thead: "tr",
              tfoot: "tr",
              colgroup: "col",
              select: "option",
              optgroup: "option",
              audio: "source",
              video: "source",
              object: "param",
              map: "area",
            };
      function fr(e) {
        return (
          (e = (e || "").toLowerCase()), cr[e] || (ur.has(e) ? "span" : "div")
        );
      }
      const pr = e => {
        return e.walk(e => {
          null == e.name &&
            e.attributes.length &&
            (e.name = fr(e.parent.name));
        }),
        e
      ;
      };
      function dr(e, t) {
        for (
          var n = new b.a(), r = t.length, i = 0;
          -1 !== (i = e.indexOf(t, i));

        )
          n.add(i), (i += r);
        if (n.size)
          for (let o = 0, a = e.length; o < a; )
            "\\" === e[o++] && n.delete(o++);
        return h()(n).map(e => {
          return [e, r];
        });
      }
      function hr(e, t, n) {
        for (let r = t.length - 1; r >= 0; r--) {
          const i = t[r];
          let o = 0;
          let a = 0;
          let s = !1;
          if ("@" === e.substr(i[0] + i[1], 1)) {
            "-" === e.substr(i[0] + i[1] + 1, 1) && (s = !0);
            const u = e.substr(i[0] + i[1] + 1 + Number(s)).match(/^(\d+)/);
            u
              ? ((a = u[1].length + 1 + Number(s)), (o = l()(u[1]) - 1))
              : (a = 2);
          }
          e =
            e.substring(0, i[0]) +
            ("function" === typeof n ? n(e.substr(i[0], i[1]), o, s) : n) +
            e.substring(i[0] + i[1] + a);
        }
        return e;
      }
      const mr = "$",
            br = e => {
              return e.walk(gr), e;
            };
      function gr(e) {
        const t = (e => {
          for (; e; ) {
            if (e.repeat) return e.repeat;
            e = e.parent;
          }
        })(e);
        if (t && null != t.value) {
          const n = t.value, r = t.count;
          (e.name = vr(e.name, n, r)),
            (e.value = vr(e.value, n, r)),
            e.attributes.forEach(t => {
              const i = e.getAttribute(t.name).clone();
              (i.name = vr(t.name, n, r)),
                (i.value = vr(t.value, n, r)),
                e.replaceAttribute(t.name, i);
            });
        }
        return e;
      }
      function vr(e, t, n) {
        return "string" === typeof e ? ((e, t, n, r) => {
              return (e => {
                let t = 0;
                let n = "";
                const r = e.length;
                for (; t < r; ) {
                  const i = e[t++];
                  n += "\\" === i ? e[t++] || "" : i;
                }
                return n;
              })(hr(e, t, (e, t, i) => {
                for (
                  var o = String(i ? t + r - n + 1 : n + t);
                  o.length < e.length;

                )
                  o = "0" + o;
                return o;
              }));
            })(e, (e => {
          return dr(e || "", mr).reduce((t, n) => {
            if (!/[#{]/.test(e[n[0] + 1] || "")) {
              const r = t[t.length - 1];
              r && r[0] + r[1] === n[0] ? (r[1] += n[1]) : t.push(n);
            }
            return t;
          }, []);
        })(e), t, n) : e;
      }
      const yr = "$#", xr = "|", wr = /^((?:https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/, $r = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, kr = /^([a-z]+:)?\/\//i;
      function Cr(e, t) {
        return (t = t || 1),
        e.walk(e => {
          if (e.repeat && null === e.repeat.count) {
            for (let n = 0; n < t; n++) {
              const r = e.clone(!0);
              (r.repeat.implicit = !0),
                (r.repeat.count = t),
                (r.repeat.value = n + 1),
                (r.repeat.index = n),
                e.parent.insertBefore(r, e);
            }
            e.remove();
          }
        }),
        e;
      }
      function Ar(e, t) {
        if (c()(t) && t.length) {
          let n = !1;
          e.walk(e => {
            e.repeat &&
              e.repeat.implicit &&
              (n = !0, ((e, t) => {
              let n = zr(e, t);
              e.walk(e => {
                return (n |= zr(e, t));
              }),
                n || qr(_r(e), t);
            })(e, t[e.repeat.index]));
          }),
            n || qr(_r(e), t.join("\n"));
        }
        return e;
      }
      function zr(e, t) {
        const n = { replaced: !1 };
        return (e.value = Sr(e.value, t, n)),
        e.attributes.forEach(r => {
          r.value && e.setAttribute(r.name, Sr(r.value, t, n));
        }),
        n.replaced
      ;
      }
      function Sr(e, t, n) {
        if ("string" === typeof e) {
          const r = dr(e, yr);
          r.length && (n && (n.replaced = !0), (e = hr(e, r, t)));
        }
        return e;
      }
      function _r(e) {
        for (; e.children.length; ) e = e.children[e.children.length - 1];
        return e;
      }
      function qr(e, t) {
        if (e.value) {
          const n = dr(e.value, xr);
          if (n.length) return void (e.value = hr(e.value, n, t));
        }
        ("a" === e.name.toLowerCase() || e.hasAttribute("href")) &&
          (wr.test(t)
            ? e.setAttribute("href", (kr.test(t) ? "" : "http://") + t)
            : $r.test(t) && e.setAttribute("href", "mailto:" + t)),
          (e.value = t);
      }
      const jr = { element: "__", modifier: "_" },
            Tr = /^(-+)([a-z0-9]+[a-z0-9-]*)/i,
            Or = /^(_+)([a-z0-9]+[a-z0-9-_]*)/i,
            Er = e => {
              return /^[a-z]\-/i.test(e);
            },
            Rr = e => {
              return /^[a-z]/i.test(e);
            };
      function Nr(e, t, n) {
        for (
          let r = n.length > 1 ? n.length : 0;
          e.parent && e.parent.parent && r--;

        )
          e = e.parent;
        return t.get(e) || "";
      }
      function Lr(e, t) {
        for (let n = 0; n < e.length && !Tr.test(e[n]) && !Or.test(e[n]); n++)
          if (t(e[n])) return e[n];
      }
      function Ur(e, t, n) {
        const r = e.getAttribute(t);
        r && (r.name = n);
      }
      const Fr = /^xsl:(variable|with\-param)$/i,
            Br = {
              bem(e, t) {
                (t = v()({}, jr, t)),
                  e.walk(e => {
                    return ((e, t) => {
                      const n = e.classList.reduce((e, t) => {
                        const n = t.indexOf("_");
                        return n > 0 && !t.startsWith("-")
                          ? (e.add(t.slice(0, n)), e.add(t.slice(n)), e)
                          : e.add(t);
                      }, new b.a());
                      n.size && e.setAttribute("class", h()(n).join(" "));
                    })(e);
                  });
                const n = (e => {
                  const t = new a.a();
                  return e.walk(e => {
                    const n = e.classList;
                    n.length &&
                      t.set(e, Lr(n, Er) || Lr(n, Rr) || t.get(e.parent));
                  }),
                  t;
                })(e);
                return e.walk(e => {
                  return ((e, t, n) => {
                    const r = e.classList.reduce((r, i) => {
                            let o;
                            let a;
                            const s = i;
                            return (
                              (a = i.match(Tr)) &&
                                ((o = Nr(e, t, a[1]) + n.element + a[2]),
                                r.add(o),
                                (i = i.slice(a[0].length))),
                              (a = i.match(Or)) &&
                                (o || ((o = Nr(e, t, a[1])), r.add(o)),
                                r.add("" + o + n.modifier + a[2]),
                                (i = i.slice(a[0].length))),
                              i === s && r.add(s),
                              r
                            );
                          }, new b.a()),
                          i = h()(r).filter(Boolean);
                    i.length && e.setAttribute("class", i.join(" "));
                  })(e, n, t);
                }),
                e;
              },
              jsx(e) {
                return e.walk(e => {
                  Ur(e, "class", "className"), Ur(e, "for", "htmlFor");
                }),
                e
              ;
              },
              xsl(e) {
                return e.walk(e => {
                  Fr.test(e.name || "") &&
                    (e.children.length || e.value) &&
                    e.removeAttribute("select");
                }),
                e
              ;
              },
            },
            Wr = (e, t) => {
              return i()(t || {}).forEach(n => {
                if (n in Br) {
                  const r = "object" === typeof t[n] ? t[n] : null;
                  e = e.use(Br[n], r);
                }
              }),
              e;
            },
            Mr = (e, t, n) => {
              return (
                "string" === typeof t
                  ? (t = [t])
                  : t && "object" === typeof t && !c()(t) && ((n = t), (t = null)),
                e
                  .use(pr)
                  .use(Cr, c()(t) ? t.length : null)
                  .use(br)
                  .use(Ar, t)
                  .use(Wr, n)
              );
            },
            Ir = {
              a: "a[href]",
              "a:blank":
                "a[href='http://${0}' target='_blank' rel='noopener noreferrer']",
              "a:link": "a[href='http://${0}']",
              "a:mail": "a[href='mailto:${0}']",
              "a:tel": "a[href='tel:+${0}']",
              abbr: "abbr[title]",
              "acr|acronym": "acronym[title]",
              base: "base[href]/",
              basefont: "basefont/",
              br: "br/",
              frame: "frame/",
              hr: "hr/",
              bdo: "bdo[dir]",
              "bdo:r": "bdo[dir=rtl]",
              "bdo:l": "bdo[dir=ltr]",
              col: "col/",
              link: "link[rel=stylesheet href]/",
              "link:css": "link[href='${1:style}.css']",
              "link:print": "link[href='${1:print}.css' media=print]",
              "link:favicon":
                "link[rel='shortcut icon' type=image/x-icon href='${1:favicon.ico}']",
              "link:mf|link:manifest":
                "link[rel='manifest' href='${1:manifest.json}']",
              "link:touch": "link[rel=apple-touch-icon href='${1:favicon.png}']",
              "link:rss":
                "link[rel=alternate type=application/rss+xml title=RSS href='${1:rss.xml}']",
              "link:atom":
                "link[rel=alternate type=application/atom+xml title=Atom href='${1:atom.xml}']",
              "link:im|link:import": "link[rel=import href='${1:component}.html']",
              meta: "meta/",
              "meta:utf":
                "meta[http-equiv=Content-Type content='text/html;charset=UTF-8']",
              "meta:vp":
                "meta[name=viewport content='width=${1:device-width}, initial-scale=${2:1.0}']",
              "meta:compat": "meta[http-equiv=X-UA-Compatible content='${1:IE=7}']",
              "meta:edge": "meta:compat[content='${1:ie=edge}']",
              "meta:redirect":
                "meta[http-equiv=refresh content='0; url=${1:http://example.com}']",
              style: "style",
              script: "script[!src]",
              "script:src": "script[src]",
              img: "img[src alt]/",
              "img:s|img:srcset": "img[srcset src alt]",
              "img:z|img:sizes": "img[sizes srcset src alt]",
              picture: "picture",
              "src|source": "source/",
              "src:sc|source:src": "source[src type]",
              "src:s|source:srcset": "source[srcset]",
              "src:t|source:type": "source[srcset type='${1:image/}']",
              "src:z|source:sizes": "source[sizes srcset]",
              "src:m|source:media": "source[media='(${1:min-width: })' srcset]",
              "src:mt|source:media:type": "source:media[type='${2:image/}']",
              "src:mz|source:media:sizes": "source:media[sizes srcset]",
              "src:zt|source:sizes:type": "source[sizes srcset type='${1:image/}']",
              iframe: "iframe[src frameborder=0]",
              embed: "embed[src type]/",
              object: "object[data type]",
              param: "param[name value]/",
              map: "map[name]",
              area: "area[shape coords href alt]/",
              "area:d": "area[shape=default]",
              "area:c": "area[shape=circle]",
              "area:r": "area[shape=rect]",
              "area:p": "area[shape=poly]",
              form: "form[action]",
              "form:get": "form[method=get]",
              "form:post": "form[method=post]",
              label: "label[for]",
              input: "input[type=${1:text}]/",
              inp: "input[name=${1} id=${1}]",
              "input:h|input:hidden": "input[type=hidden name]",
              "input:t|input:text": "inp[type=text]",
              "input:search": "inp[type=search]",
              "input:email": "inp[type=email]",
              "input:url": "inp[type=url]",
              "input:p|input:password": "inp[type=password]",
              "input:datetime": "inp[type=datetime]",
              "input:date": "inp[type=date]",
              "input:datetime-local": "inp[type=datetime-local]",
              "input:month": "inp[type=month]",
              "input:week": "inp[type=week]",
              "input:time": "inp[type=time]",
              "input:tel": "inp[type=tel]",
              "input:number": "inp[type=number]",
              "input:color": "inp[type=color]",
              "input:c|input:checkbox": "inp[type=checkbox]",
              "input:r|input:radio": "inp[type=radio]",
              "input:range": "inp[type=range]",
              "input:f|input:file": "inp[type=file]",
              "input:s|input:submit": "input[type=submit value]",
              "input:i|input:image": "input[type=image src alt]",
              "input:b|input:button": "input[type=button value]",
              "input:reset": "input:button[type=reset]",
              isindex: "isindex/",
              select: "select[name=${1} id=${1}]",
              "select:d|select:disabled": "select[disabled.]",
              "opt|option": "option[value]",
              textarea: "textarea[name=${1} id=${1} cols=${2:30} rows=${3:10}]",
              marquee: "marquee[behavior direction]",
              "menu:c|menu:context": "menu[type=context]",
              "menu:t|menu:toolbar": "menu[type=toolbar]",
              video: "video[src]",
              audio: "audio[src]",
              "html:xml": "html[xmlns=http://www.w3.org/1999/xhtml]",
              keygen: "keygen/",
              command: "command/",
              "btn:s|button:s|button:submit": "button[type=submit]",
              "btn:r|button:r|button:reset": "button[type=reset]",
              "btn:d|button:d|button:disabled": "button[disabled.]",
              "fst:d|fset:d|fieldset:d|fieldset:disabled": "fieldset[disabled.]",
              bq: "blockquote",
              fig: "figure",
              figc: "figcaption",
              pic: "picture",
              ifr: "iframe",
              emb: "embed",
              obj: "object",
              cap: "caption",
              colg: "colgroup",
              fst: "fieldset",
              btn: "button",
              optg: "optgroup",
              tarea: "textarea",
              leg: "legend",
              sect: "section",
              art: "article",
              hdr: "header",
              ftr: "footer",
              adr: "address",
              dlg: "dialog",
              str: "strong",
              prog: "progress",
              mn: "main",
              tem: "template",
              fset: "fieldset",
              datag: "datagrid",
              datal: "datalist",
              kg: "keygen",
              out: "output",
              det: "details",
              cmd: "command",
              "ri:d|ri:dpr": "img:s",
              "ri:v|ri:viewport": "img:z",
              "ri:a|ri:art": "pic>src:m+img",
              "ri:t|ri:type": "pic>src:t+img",
              "!!!": "{<!DOCTYPE html>}",
              doc:
                "html[lang=${lang}]>(head>meta[charset=${charset}]+meta:vp+title{${1:Document}})+body",
              "!|html:5": "!!!+doc",
              c: "{\x3c!-- ${0} --\x3e}",
              "cc:ie": "{\x3c!--[if IE]>${0}<![endif]--\x3e}",
              "cc:noie": "{\x3c!--[if !IE]>\x3c!--\x3e${0}\x3c!--<![endif]--\x3e}",
            },
            Yr = {
              latin: {
                common: [
                  "lorem",
                  "ipsum",
                  "dolor",
                  "sit",
                  "amet",
                  "consectetur",
                  "adipisicing",
                  "elit",
                ],
                words: [
                  "exercitationem",
                  "perferendis",
                  "perspiciatis",
                  "laborum",
                  "eveniet",
                  "sunt",
                  "iure",
                  "nam",
                  "nobis",
                  "eum",
                  "cum",
                  "officiis",
                  "excepturi",
                  "odio",
                  "consectetur",
                  "quasi",
                  "aut",
                  "quisquam",
                  "vel",
                  "eligendi",
                  "itaque",
                  "non",
                  "odit",
                  "tempore",
                  "quaerat",
                  "dignissimos",
                  "facilis",
                  "neque",
                  "nihil",
                  "expedita",
                  "vitae",
                  "vero",
                  "ipsum",
                  "nisi",
                  "animi",
                  "cumque",
                  "pariatur",
                  "velit",
                  "modi",
                  "natus",
                  "iusto",
                  "eaque",
                  "sequi",
                  "illo",
                  "sed",
                  "ex",
                  "et",
                  "voluptatibus",
                  "tempora",
                  "veritatis",
                  "ratione",
                  "assumenda",
                  "incidunt",
                  "nostrum",
                  "placeat",
                  "aliquid",
                  "fuga",
                  "provident",
                  "praesentium",
                  "rem",
                  "necessitatibus",
                  "suscipit",
                  "adipisci",
                  "quidem",
                  "possimus",
                  "voluptas",
                  "debitis",
                  "sint",
                  "accusantium",
                  "unde",
                  "sapiente",
                  "voluptate",
                  "qui",
                  "aspernatur",
                  "laudantium",
                  "soluta",
                  "amet",
                  "quo",
                  "aliquam",
                  "saepe",
                  "culpa",
                  "libero",
                  "ipsa",
                  "dicta",
                  "reiciendis",
                  "nesciunt",
                  "doloribus",
                  "autem",
                  "impedit",
                  "minima",
                  "maiores",
                  "repudiandae",
                  "ipsam",
                  "obcaecati",
                  "ullam",
                  "enim",
                  "totam",
                  "delectus",
                  "ducimus",
                  "quis",
                  "voluptates",
                  "dolores",
                  "molestiae",
                  "harum",
                  "dolorem",
                  "quia",
                  "voluptatem",
                  "molestias",
                  "magni",
                  "distinctio",
                  "omnis",
                  "illum",
                  "dolorum",
                  "voluptatum",
                  "ea",
                  "quas",
                  "quam",
                  "corporis",
                  "quae",
                  "blanditiis",
                  "atque",
                  "deserunt",
                  "laboriosam",
                  "earum",
                  "consequuntur",
                  "hic",
                  "cupiditate",
                  "quibusdam",
                  "accusamus",
                  "ut",
                  "rerum",
                  "error",
                  "minus",
                  "eius",
                  "ab",
                  "ad",
                  "nemo",
                  "fugit",
                  "officia",
                  "at",
                  "in",
                  "id",
                  "quos",
                  "reprehenderit",
                  "numquam",
                  "iste",
                  "fugiat",
                  "sit",
                  "inventore",
                  "beatae",
                  "repellendus",
                  "magnam",
                  "recusandae",
                  "quod",
                  "explicabo",
                  "doloremque",
                  "aperiam",
                  "consequatur",
                  "asperiores",
                  "commodi",
                  "optio",
                  "dolor",
                  "labore",
                  "temporibus",
                  "repellat",
                  "veniam",
                  "architecto",
                  "est",
                  "esse",
                  "mollitia",
                  "nulla",
                  "a",
                  "similique",
                  "eos",
                  "alias",
                  "dolore",
                  "tenetur",
                  "deleniti",
                  "porro",
                  "facere",
                  "maxime",
                  "corrupti",
                ],
              },
              ru: {
                common: [
                  "\u0434\u0430\u043b\u0435\u043a\u043e-\u0434\u0430\u043b\u0435\u043a\u043e",
                  "\u0437\u0430",
                  "\u0441\u043b\u043e\u0432\u0435\u0441\u043d\u044b\u043c\u0438",
                  "\u0433\u043e\u0440\u0430\u043c\u0438",
                  "\u0432 \u0441\u0442\u0440\u0430\u043d\u0435",
                  "\u0433\u043b\u0430\u0441\u043d\u044b\u0445",
                  "\u0438 \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u044b\u0445",
                  "\u0436\u0438\u0432\u0443\u0442",
                  "\u0440\u044b\u0431\u043d\u044b\u0435",
                  "\u0442\u0435\u043a\u0441\u0442\u044b",
                ],
                words: [
                  "\u0432\u0434\u0430\u043b\u0438",
                  "\u043e\u0442 \u0432\u0441\u0435\u0445",
                  "\u043e\u043d\u0438",
                  "\u0431\u0443\u043a\u0432\u0435\u043d\u043d\u044b\u0445",
                  "\u0434\u043e\u043c\u0430\u0445",
                  "\u043d\u0430 \u0431\u0435\u0440\u0435\u0433\u0443",
                  "\u0441\u0435\u043c\u0430\u043d\u0442\u0438\u043a\u0430",
                  "\u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e",
                  "\u044f\u0437\u044b\u043a\u043e\u0432\u043e\u0433\u043e",
                  "\u043e\u043a\u0435\u0430\u043d\u0430",
                  "\u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439",
                  "\u0440\u0443\u0447\u0435\u0435\u043a",
                  "\u0434\u0430\u043b\u044c",
                  "\u0436\u0443\u0440\u0447\u0438\u0442",
                  "\u043f\u043e \u0432\u0441\u0435\u0439",
                  "\u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442",
                  "\u0435\u0435",
                  "\u0432\u0441\u0435\u043c\u0438",
                  "\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u043c\u0438",
                  "\u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438",
                  "\u044d\u0442\u0430",
                  "\u043f\u0430\u0440\u0430\u0434\u0438\u0433\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f",
                  "\u0441\u0442\u0440\u0430\u043d\u0430",
                  "\u043a\u043e\u0442\u043e\u0440\u043e\u0439",
                  "\u0436\u0430\u0440\u0435\u043d\u043d\u044b\u0435",
                  "\u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f",
                  "\u0437\u0430\u043b\u0435\u0442\u0430\u044e\u0442",
                  "\u043f\u0440\u044f\u043c\u043e",
                  "\u0440\u043e\u0442",
                  "\u0434\u0430\u0436\u0435",
                  "\u0432\u0441\u0435\u043c\u043e\u0433\u0443\u0449\u0430\u044f",
                  "\u043f\u0443\u043d\u043a\u0442\u0443\u0430\u0446\u0438\u044f",
                  "\u043d\u0435",
                  "\u0438\u043c\u0435\u0435\u0442",
                  "\u0432\u043b\u0430\u0441\u0442\u0438",
                  "\u043d\u0430\u0434",
                  "\u0440\u044b\u0431\u043d\u044b\u043c\u0438",
                  "\u0442\u0435\u043a\u0441\u0442\u0430\u043c\u0438",
                  "\u0432\u0435\u0434\u0443\u0449\u0438\u043c\u0438",
                  "\u0431\u0435\u0437\u043e\u0440\u0444\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u043d\u044b\u0439",
                  "\u043e\u0431\u0440\u0430\u0437",
                  "\u0436\u0438\u0437\u043d\u0438",
                  "\u043e\u0434\u043d\u0430\u0436\u0434\u044b",
                  "\u043e\u0434\u043d\u0430",
                  "\u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f",
                  "\u0441\u0442\u0440\u043e\u0447\u043a\u0430",
                  "\u0440\u044b\u0431\u043d\u043e\u0433\u043e",
                  "\u0442\u0435\u043a\u0441\u0442\u0430",
                  "\u0438\u043c\u0435\u043d\u0438",
                  "lorem",
                  "ipsum",
                  "\u0440\u0435\u0448\u0438\u043b\u0430",
                  "\u0432\u044b\u0439\u0442\u0438",
                  "\u0431\u043e\u043b\u044c\u0448\u043e\u0439",
                  "\u043c\u0438\u0440",
                  "\u0433\u0440\u0430\u043c\u043c\u0430\u0442\u0438\u043a\u0438",
                  "\u0432\u0435\u043b\u0438\u043a\u0438\u0439",
                  "\u043e\u043a\u0441\u043c\u043e\u043a\u0441",
                  "\u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0430\u043b",
                  "\u043e",
                  "\u0437\u043b\u044b\u0445",
                  "\u0437\u0430\u043f\u044f\u0442\u044b\u0445",
                  "\u0434\u0438\u043a\u0438\u0445",
                  "\u0437\u043d\u0430\u043a\u0430\u0445",
                  "\u0432\u043e\u043f\u0440\u043e\u0441\u0430",
                  "\u043a\u043e\u0432\u0430\u0440\u043d\u044b\u0445",
                  "\u0442\u043e\u0447\u043a\u0430\u0445",
                  "\u0437\u0430\u043f\u044f\u0442\u043e\u0439",
                  "\u043d\u043e",
                  "\u0442\u0435\u043a\u0441\u0442",
                  "\u0434\u0430\u043b",
                  "\u0441\u0431\u0438\u0442\u044c",
                  "\u0441\u0435\u0431\u044f",
                  "\u0442\u043e\u043b\u043a\u0443",
                  "\u043e\u043d",
                  "\u0441\u043e\u0431\u0440\u0430\u043b",
                  "\u0441\u0435\u043c\u044c",
                  "\u0441\u0432\u043e\u0438\u0445",
                  "\u0437\u0430\u0433\u043b\u0430\u0432\u043d\u044b\u0445",
                  "\u0431\u0443\u043a\u0432",
                  "\u043f\u043e\u0434\u043f\u043e\u044f\u0441\u0430\u043b",
                  "\u0438\u043d\u0438\u0446\u0438\u0430\u043b",
                  "\u0437\u0430",
                  "\u043f\u043e\u044f\u0441",
                  "\u043f\u0443\u0441\u0442\u0438\u043b\u0441\u044f",
                  "\u0434\u043e\u0440\u043e\u0433\u0443",
                  "\u0432\u0437\u043e\u0431\u0440\u0430\u0432\u0448\u0438\u0441\u044c",
                  "\u043f\u0435\u0440\u0432\u0443\u044e",
                  "\u0432\u0435\u0440\u0448\u0438\u043d\u0443",
                  "\u043a\u0443\u0440\u0441\u0438\u0432\u043d\u044b\u0445",
                  "\u0433\u043e\u0440",
                  "\u0431\u0440\u043e\u0441\u0438\u043b",
                  "\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439",
                  "\u0432\u0437\u0433\u043b\u044f\u0434",
                  "\u043d\u0430\u0437\u0430\u0434",
                  "\u0441\u0438\u043b\u0443\u044d\u0442",
                  "\u0441\u0432\u043e\u0435\u0433\u043e",
                  "\u0440\u043e\u0434\u043d\u043e\u0433\u043e",
                  "\u0433\u043e\u0440\u043e\u0434\u0430",
                  "\u0431\u0443\u043a\u0432\u043e\u0433\u0440\u0430\u0434",
                  "\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",
                  "\u0434\u0435\u0440\u0435\u0432\u043d\u0438",
                  "\u0430\u043b\u0444\u0430\u0432\u0438\u0442",
                  "\u043f\u043e\u0434\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",
                  "\u0441\u0432\u043e\u0435\u0433\u043e",
                  "\u043f\u0435\u0440\u0435\u0443\u043b\u043a\u0430",
                  "\u0433\u0440\u0443\u0441\u0442\u043d\u044b\u0439",
                  "\u0440\u0435\u0442\u043e\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439",
                  "\u0432\u043e\u043f\u0440\u043e\u0441",
                  "\u0441\u043a\u0430\u0442\u0438\u043b\u0441\u044f",
                  "\u0435\u0433\u043e",
                  "\u0449\u0435\u043a\u0435",
                  "\u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u043b",
                  "\u0441\u0432\u043e\u0439",
                  "\u043f\u0443\u0442\u044c",
                  "\u0434\u043e\u0440\u043e\u0433\u0435",
                  "\u0432\u0441\u0442\u0440\u0435\u0442\u0438\u043b",
                  "\u0440\u0443\u043a\u043e\u043f\u0438\u0441\u044c",
                  "\u043e\u043d\u0430",
                  "\u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0434\u0438\u043b\u0430",
                  "\u043c\u043e\u0435\u0439",
                  "\u0432\u0441\u0435",
                  "\u043f\u0435\u0440\u0435\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f",
                  "\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e",
                  "\u0440\u0430\u0437",
                  "\u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435",
                  "\u0447\u0442\u043e",
                  "\u043c\u0435\u043d\u044f",
                  "\u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c",
                  "\u044d\u0442\u043e",
                  "\u043f\u0440\u0438\u0441\u0442\u0430\u0432\u043a\u0430",
                  "\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0439\u0441\u044f",
                  "\u0442\u044b",
                  "\u043b\u0443\u0447\u0448\u0435",
                  "\u0441\u0432\u043e\u044e",
                  "\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0443\u044e",
                  "\u0441\u0442\u0440\u0430\u043d\u0443",
                  "\u043f\u043e\u0441\u043b\u0443\u0448\u0430\u0432\u0448\u0438\u0441\u044c",
                  "\u0440\u0443\u043a\u043e\u043f\u0438\u0441\u0438",
                  "\u043d\u0430\u0448",
                  "\u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u043b",
                  "\u0441\u0432\u043e\u0439",
                  "\u043f\u0443\u0442\u044c",
                  "\u0432\u0441\u043a\u043e\u0440\u0435",
                  "\u0435\u043c\u0443",
                  "\u043f\u043e\u0432\u0441\u0442\u0440\u0435\u0447\u0430\u043b\u0441\u044f",
                  "\u043a\u043e\u0432\u0430\u0440\u043d\u044b\u0439",
                  "\u0441\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u044c",
                  "\u0440\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0445",
                  "\u0442\u0435\u043a\u0441\u0442\u043e\u0432",
                  "\u043d\u0430\u043f\u043e\u0438\u0432\u0448\u0438\u0439",
                  "\u044f\u0437\u044b\u043a\u043e\u043c",
                  "\u0440\u0435\u0447\u044c\u044e",
                  "\u0437\u0430\u043c\u0430\u043d\u0438\u0432\u0448\u0438\u0439",
                  "\u0441\u0432\u043e\u0435",
                  "\u0430\u0433\u0435\u043d\u0442\u0441\u0442\u0432\u043e",
                  "\u043a\u043e\u0442\u043e\u0440\u043e\u0435",
                  "\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u043e",
                  "\u0441\u043d\u043e\u0432\u0430",
                  "\u0441\u043d\u043e\u0432\u0430",
                  "\u0441\u0432\u043e\u0438\u0445",
                  "\u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445",
                  "\u0435\u0441\u043b\u0438",
                  "\u043f\u0435\u0440\u0435\u043f\u0438\u0441\u0430\u043b\u0438",
                  "\u0442\u043e",
                  "\u0436\u0438\u0432\u0435\u0442",
                  "\u0442\u0430\u043c",
                  "\u0434\u043e",
                  "\u0441\u0438\u0445",
                  "\u043f\u043e\u0440",
                ],
              },
              sp: {
                common: [
                  "mujer",
                  "uno",
                  "dolor",
                  "m\xe1s",
                  "de",
                  "poder",
                  "mismo",
                  "si",
                ],
                words: [
                  "ejercicio",
                  "preferencia",
                  "perspicacia",
                  "laboral",
                  "pa\xf1o",
                  "suntuoso",
                  "molde",
                  "namibia",
                  "planeador",
                  "mirar",
                  "dem\xe1s",
                  "oficinista",
                  "excepci\xf3n",
                  "odio",
                  "consecuencia",
                  "casi",
                  "auto",
                  "chicharra",
                  "velo",
                  "elixir",
                  "ataque",
                  "no",
                  "odio",
                  "temporal",
                  "cu\xf3rum",
                  "dign\xedsimo",
                  "facilismo",
                  "letra",
                  "nihilista",
                  "expedici\xf3n",
                  "alma",
                  "alveolar",
                  "aparte",
                  "le\xf3n",
                  "animal",
                  "como",
                  "paria",
                  "belleza",
                  "modo",
                  "natividad",
                  "justo",
                  "ataque",
                  "s\xe9quito",
                  "pillo",
                  "sed",
                  "ex",
                  "y",
                  "voluminoso",
                  "temporalidad",
                  "verdades",
                  "racional",
                  "asunci\xf3n",
                  "incidente",
                  "marejada",
                  "placenta",
                  "amanecer",
                  "fuga",
                  "previsor",
                  "presentaci\xf3n",
                  "lejos",
                  "necesariamente",
                  "sospechoso",
                  "adiposidad",
                  "quind\xedo",
                  "p\xf3cima",
                  "voluble",
                  "d\xe9bito",
                  "sinti\xf3",
                  "accesorio",
                  "falda",
                  "sapiencia",
                  "volutas",
                  "queso",
                  "permacultura",
                  "laudo",
                  "soluciones",
                  "entero",
                  "pan",
                  "litro",
                  "tonelada",
                  "culpa",
                  "libertario",
                  "mosca",
                  "dictado",
                  "reincidente",
                  "nascimiento",
                  "dolor",
                  "escolar",
                  "impedimento",
                  "m\xednima",
                  "mayores",
                  "repugnante",
                  "dulce",
                  "obcecado",
                  "monta\xf1a",
                  "enigma",
                  "total",
                  "delet\xe9reo",
                  "d\xe9cima",
                  "c\xe1bala",
                  "fotograf\xeda",
                  "dolores",
                  "molesto",
                  "olvido",
                  "paciencia",
                  "resiliencia",
                  "voluntad",
                  "molestias",
                  "magn\xedfico",
                  "distinci\xf3n",
                  "ovni",
                  "marejada",
                  "cerro",
                  "torre",
                  "y",
                  "abogada",
                  "manantial",
                  "corporal",
                  "agua",
                  "crep\xfasculo",
                  "ataque",
                  "desierto",
                  "laboriosamente",
                  "angustia",
                  "afortunado",
                  "alma",
                  "encefalograma",
                  "materialidad",
                  "cosas",
                  "o",
                  "renuncia",
                  "error",
                  "menos",
                  "conejo",
                  "abad\xeda",
                  "analfabeto",
                  "remo",
                  "fugacidad",
                  "oficio",
                  "en",
                  "alm\xe1cigo",
                  "vos",
                  "pan",
                  "represi\xf3n",
                  "n\xfameros",
                  "triste",
                  "refugiado",
                  "trote",
                  "inventor",
                  "corchea",
                  "repelente",
                  "magma",
                  "recusado",
                  "patr\xf3n",
                  "expl\xedcito",
                  "paloma",
                  "s\xedndrome",
                  "inmune",
                  "autoinmune",
                  "comodidad",
                  "ley",
                  "vietnamita",
                  "demonio",
                  "tasmania",
                  "repeler",
                  "ap\xe9ndice",
                  "arquitecto",
                  "columna",
                  "yugo",
                  "computador",
                  "mula",
                  "a",
                  "prop\xf3sito",
                  "fantas\xeda",
                  "alias",
                  "rayo",
                  "tenedor",
                  "deleznable",
                  "ventana",
                  "cara",
                  "anemia",
                  "corrupto",
                ],
              },
            },
            Dr = { wordCount: 30, skipCommon: !1, lang: "latin" };
      function Gr(e, t) {
        return Math.floor(Math.random() * (t - e) + e);
      }
      function Pr(e, t) {
        for (var n = e.length, r = Math.min(n, t), i = new b.a(); i.size < r; )
          i.add(e[Gr(0, n)]);
        return h()(i);
      }
      function Xr(e, t) {
        let n, r;
        return (
          e.length &&
            (e = [((n = e[0]), n[0].toUpperCase() + n.slice(1))].concat(
              e.slice(1)
            )),
          e.join(" ") + (t || (r = "?!...")[Gr(0, r.length - 1)])
        );
      }
      function Hr(e) {
        if (e.length < 2) return e;
        const t = (e = e.slice()).length;
        const n = /,$/;
        let r = 0;
        r = t > 3 && t <= 6 ? Gr(0, 1) : t > 6 && t <= 12 ? Gr(0, 2) : Gr(1, 4);
        for (let i = 0, o = void 0; i < r; i++)
          (o = Gr(0, t - 2)), n.test(e[o]) || (e[o] += ",");
        return e;
      }
      function Vr(e, t, n) {
        let r;
        const i = [];
        let o = 0;
        for (
          n &&
          e.common &&
          ((o += (r = e.common.slice(0, t)).length), i.push(Xr(Hr(r), ".")));
          o < t;

        )
          (o += (r = Pr(e.words, Math.min(Gr(2, 30), t - o))).length),
            i.push(Xr(Hr(r)));
        return i.join(" ");
      }
      function Zr(e, t) {
        return (t = t || {}),
        e.walk(e => {
          return ((e, t) => {
            for (let n = e.attributes, r = 0, i = n.length; r < i; r++) {
              const o = n[r];
              "string" === typeof o.value &&
                e.setAttribute(o.name, Qr(o.value, t));
            }
            null != e.value && (e.value = Qr(e.value, t));
            return e;
          })(e, t);
        }),
        e;
      }
      function Qr(e, t) {
        for (
          var n = (e => {
            let t;
            const n = /\$\{([a-z][\w\-]*)\}/gi;
            const r = [];
            const i = new a.a();
            for (; (t = n.exec(e)); ) i.set(t.index, t);
            if (i.size) {
              for (var o = 0, s = 0, l = e.length, u = ""; s < l; )
                if (92 === e.charCodeAt(s) && i.has(s + 1)) {
                  const c = i.get(s + 1);
                  (u += e.slice(o, s) + c[0]),
                    (o = s = c.index + c[0].length),
                    i.delete(s + 1);
                } else s++;
              e = u + e.slice(o);
              for (let f = h()(i.values()), p = 0, d = f.length; p < d; p++) {
                const m = f[p];
                r.push({
                  name: m[1],
                  location: m.index,
                  length: m[0].length,
                });
              }
            }
            return { string: e, variables: r };
          })(e),
            r = 0,
            i = "",
            o = 0,
            s = n.variables.length;
          o < s;
          o++
        ) {
          const l = n.variables[o];
          let u = l.name in t ? t[l.name] : l.name;
          "function" === typeof u && (u = u(n.string, l, r + l.location)),
            (i += n.string.slice(r, l.location) + u),
            (r = l.location + l.length);
        }
        return i + n.string.slice(r);
      }
      [
        "body",
        "head",
        "html",
        "address",
        "blockquote",
        "dd",
        "div",
        "section",
        "article",
        "aside",
        "header",
        "footer",
        "nav",
        "menu",
        "dl",
        "dt",
        "fieldset",
        "form",
        "frame",
        "frameset",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "iframe",
        "noframes",
        "object",
        "ol",
        "p",
        "ul",
        "applet",
        "center",
        "dir",
        "hr",
        "pre",
        "a",
        "abbr",
        "acronym",
        "area",
        "b",
        "base",
        "basefont",
        "bdo",
        "big",
        "br",
        "button",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "del",
        "dfn",
        "em",
        "font",
        "head",
        "html",
        "i",
        "img",
        "input",
        "ins",
        "isindex",
        "kbd",
        "label",
        "legend",
        "li",
        "link",
        "map",
        "meta",
        "noscript",
        "optgroup",
        "option",
        "param",
        "q",
        "s",
        "samp",
        "script",
        "select",
        "small",
        "span",
        "strike",
        "strong",
        "style",
        "sub",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "title",
        "tr",
        "tt",
        "u",
        "var",
        "canvas",
        "main",
        "figure",
        "plaintext",
      ].forEach(e => {
        return (Ir[e] = Ir[e] || e);
      });
      const Jr = new yt(Ir), Kr = /^lorem([a-z]*)(\d*)$/i;
      Jr.get(0).set(Kr, e => {
        const t = {}, n = e.name.match(Kr), r = n[1], i = n[2];
        return r && (t.lang = r), i && (t.wordCount = +i), ((e, t) => {
          t = v()({}, Dr, t);
          const n = Yr[t.lang] || Yr.latin,
                r =
                  !t.skipCommon &&
                  !(e => {
                    for (; e.parent; ) {
                      if (e.repeat && e.repeat.value && e.repeat.value > 1)
                        return !0;
                      e = e.parent;
                    }
                    return !1;
                  })(e);
          return e.repeat || (e => {
            return !e.parent;
          })(e.parent)
            ? ((e.value = Vr(n, t.wordCount, r)),
              (e.name = e.parent.name ? fr(e.parent.name) : null))
            : ((e.parent.value = Vr(n, t.wordCount, r)), e.remove()),
          e
        ;
        })(e, t);
      });
      const ei = Jr.all({ type: "string" }).map(e => {
        return e.key;
      });
      ei.push("lorem");
      const ti = y(y({}, kt), {
        snippets: Jr,
        profile: new wt(),
        variables: { lang: "en", locale: "en-US", charset: "UTF-8" },
      });
      function ni(e) {
        return lr(
          on(e).use(Fn, ti.snippets).use(Zr, ti.variables).use(Mr, null, null),
          ti.profile,
          ti
        );
      }
      function ri(e) {
        if ((void 0 === e && (e = window.monaco), Ct(e)))
          return At(
            e,
            "html",
            (e, t) => {
              return (
                ("" === e[t].type &&
                  (0 === t || "delimiter.html" === e[t - 1].type)) ||
                "text.html.basic" === e[0].type
              );
            },
            e => {
              if ("" !== e && !e.match(/\s$/)) {
                for (
                  let t = { "{": 1, "}": -1, "[": 1, "]": -1 }, n = 0, r = (e = e.trim()).length - 1;
                  r > 0;
                  r--
                )
                  if (((n += t[e[r]] || 0), e[r].match(/\s/) && n >= 0)) {
                    e = e.substr(r + 1);
                    break;
                  }
                if (e.match(/^[a-zA-Z[(.#!]/)) {
                  const i = e.length,
                        o = ei.filter(t => {
                          return t.length > i && t.slice(0, i) === e;
                        });
                  o.unshift(e);
                  try {
                    return o.map(e => {
                      return { emmetText: e, expandText: ni(e) };
                    });
                  } catch (a) {
                    return;
                  }
                }
              }
            }
          );
      }
    },
  },
]);
//# sourceMappingURL=ebfda2da.1535562636424ca8674b.js.map
