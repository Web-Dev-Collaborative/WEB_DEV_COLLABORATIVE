(window.webpackJsonp = window.webpackJsonp || []).push([
  [23],
  {
    "8/ze": function (e, r, t) {
      "use strict";
      t.d(r, "a", () => {
        return n;
      });
      var n = ".";
    },
    "8v8i": function (e, r, t) {
      "use strict";
      let n, o, i, a, c, s;
      t.d(r, "a", () => {
        return n;
      }), t.d(r, "b", () => {
        return o;
      }), t.d(r, "d", () => {
        return i;
      }), t.d(r, "e", () => {
        return a;
      }), t.d(r, "c", () => {
        return s;
      }), (e => {
        (e.Create = "CREATE"),
          (e.Move = "MOVE"),
          (e.Delete = "DELETE"),
          (e.Modify = "MODIFY");
      })(n || (n = {})), (e => {
        (e.Local = "LOCAL"), (e.Container = "CONTAINER");
      })(o || (o = {})), (e => {
        (e.File = "FILE"), (e.Directory = "DIRECTORY");
      })(i || (i = {})), (e => {
        (e.NotFound = "NOT_FOUND"),
          (e.AlreadyExists = "ALREADY_EXIST"),
          (e.NotDirectory = "NOT_DIRECTORY"),
          (e.IsDirectory = "IS_DIRECTORY");
      })(a || (a = {})), (e => {
        (e.Offline = "OFFLINE"),
          (e.Loading = "LOADING"),
          (e.Syncing = "SYNCING"),
          (e.Clean = "CLEAN"),
          (e.Error = "ERROR");
      })(c || (c = {})), (e => {
        (e.Dirty = "DIRTY"), (e.Syncing = "SYNCING"), (e.Clean = "CLEAN");
      })(s || (s = {}));
    },
    HtvZ(e, r, t) {
      "use strict";
      const n = t("p0XB");
      t("hfKm")(r, "__esModule", { value: !0 });
      const o = t("Z5Wq"),
            i = e => {
              if (!n(e)) throw Error("Op must be an array of components");
              for (var r = null, t = 0; t < e.length; t++) {
                const o = e[t];
                switch (typeof o) {
                  case "object":
                    if (!("number" === typeof o.d && o.d > 0))
                      throw Error("Object components must be deletes of size > 0");
                    break;
                  case "string":
                    if (!(o.length > 0)) throw Error("Inserts cannot be empty");
                    break;
                  case "number":
                    if (!(o > 0)) throw Error("Skip components must be >0");
                    if ("number" === typeof r)
                      throw Error("Adjacent skip components should be combined");
                }
                r = o;
              }
              if ("number" === typeof r) throw Error("Op has a trailing skip");
            },
            a = e => {
              for (var r = [], t = c(r), n = 0; n < e.length; n++) t(e[n]);
              return l(r);
            },
            c = e => {
              return r => {
                r &&
                  0 !== r.d &&
                  (0 === e.length
                    ? e.push(r)
                    : typeof r === typeof e[e.length - 1]
                    ? "object" === typeof r
                      ? (e[e.length - 1].d += r.d)
                      : (e[e.length - 1] += r)
                    : e.push(r));
              };
            },
            s = e => {
              return "number" === typeof e
                ? e
                : "string" === typeof e
                ? o.strPosToUni(e)
                : e.d;
            },
            u = e => {
              let r = 0, t = 0;
              return {
                take(n, i) {
                  if (r === e.length) return -1 === n ? null : n;
                  let a;
                  const c = e[r];
                  if ("number" === typeof c)
                    return -1 === n || c - t <= n
                      ? ((a = c - t), ++r, (t = 0), a)
                      : ((t += n), n);
                  if ("string" === typeof c) {
                    if (-1 === n || "i" === i || o.strPosToUni(c.slice(t)) <= n)
                      return (a = c.slice(t)), ++r, (t = 0), a;
                    const s = t + o.uniToStrPos(c.slice(t), n);
                    return (a = c.slice(t, s)), (t = s), a;
                  }
                  return -1 === n || "d" === i || c.d - t <= n
                    ? ((a = { d: c.d - t }), ++r, (t = 0), a)
                    : ((t += n), { d: n });
                },
                peek() {
                  return e[r];
                },
              };
            },
            l = e => {
              return (
                e.length > 0 && "number" === typeof e[e.length - 1] && e.pop(), e
              );
            };
      function f(e, r, t) {
        if ("left" !== t && "right" !== t)
          throw Error("side (" + t + ") must be 'left' or 'right'");
        i(e), i(r);
        for (
          var n, a = [], f = c(a), p = u(e), d = p.take, h = p.peek, b = 0;
          b < r.length;
          b++
        ) {
          const v = r[b];
          let m = void 0;
          let g = void 0;
          switch (typeof v) {
            case "number":
              for (m = v; m > 0; )
                f((g = d(m, "i"))), "string" !== typeof g && (m -= s(g));
              break;
            case "string":
              "left" === t && "string" === typeof h() && f(d(-1)),
                f(o.strPosToUni(v));
              break;
            case "object":
              for (m = v.d; m > 0; )
                switch (typeof (g = d(m, "i"))) {
                  case "number":
                    m -= g;
                    break;
                  case "string":
                    f(g);
                    break;
                  case "object":
                    m -= g.d;
                }
          }
        }
        for (; (n = d(-1)); ) f(n);
        return l(a);
      }
      function p(e, r) {
        i(e), i(r);
        for (var t, n = [], a = c(n), f = u(e).take, p = 0; p < r.length; p++) {
          const d = r[p];
          let h = void 0;
          let b = void 0;
          switch (typeof d) {
            case "number":
              for (h = d; h > 0; )
                a((b = f(h, "d"))), "object" !== typeof b && (h -= s(b));
              break;
            case "string":
              a(d);
              break;
            case "object":
              for (h = d.d; h > 0; )
                switch (typeof (b = f(h, "d"))) {
                  case "number":
                    a({ d: b }), (h -= b);
                    break;
                  case "string":
                    h -= o.strPosToUni(b);
                    break;
                  case "object":
                    a(b);
                }
          }
        }
        for (; (t = f(-1)); ) a(t);
        return l(n);
      }
      const d = (e, r) => {
                for (let t = 0, n = 0; n < r.length && e > t; n++) {
                  const i = r[n];
                  switch (typeof i) {
                    case "number":
                      t += i;
                      break;
                    case "string":
                      const a = o.strPosToUni(i);
                      (t += a), (e += a);
                      break;
                    case "object":
                      e -= Math.min(i.d, e - t);
                  }
                }
                return e;
              },
            h = (e, r) => {
              return "number" === typeof e
                ? d(e, r)
                : e.map(e => {
                    return d(e, r);
                  });
            };
      r.default = e => {
        return {
          name: "text-unicode",
          uri: "http://sharejs.org/types/text-unicode",
          trim: l,
          normalize: a,
          checkOp: i,
          create() {
            const r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            if ("string" !== typeof r)
              throw Error("Initial data must be a string");
            return e.create(r);
          },
          apply(r, t) {
            i(t);
            for (var n = e.builder(r), o = 0; o < t.length; o++) {
              const a = t[o];
              switch (typeof a) {
                case "number":
                  n.skip(a);
                  break;
                case "string":
                  n.append(a);
                  break;
                case "object":
                  n.del(a.d);
              }
            }
            return n.build();
          },
          transform: f,
          compose: p,
          transformPosition: d,
          transformSelection: h,
        };
      };
    },
    "LI1+": function (e, r, t) {
      "use strict";
      const n = t("doui"), o = t("MX0m"), i = t.n(o), a = t("q1tI"), c = t("XXOK"), s = t.n(c), u = t("HADy"), l = t("4A0d");
      const f = t("YuJD"), p = t("up5I"), d = t("DgdK"), h = t("5zsw"), b = t("xom/");
      t.d(r, "c", () => {
        return m;
      }),
        t.d(r, "a", () => {
          return g;
        }),
        t.d(r, "b", () => {
          return y;
        });
      const v = a.createElement;
      r.d = a.forwardRef((e, r) => {
        const t = e.runner,
              o = e.packager,
              c = e.languageHeader,
              p = (e => {
                const r = e.runner, t = e.packager, o = e.languageHeader, i = Object(l.a)(), c = Object(n.a)(i, 2), f = c[0], p = c[1], d = a.useState(""), h = Object(n.a)(d, 2), b = h[0], v = h[1];
                return a.useEffect(
                  () => {
                    if (!f)
                      return r.onOutput(e => {
                        return v(r => {
                          return r + e;
                        });
                      });
                  },
                  [f, r, v]
                ),
                a.useEffect(
                  () => {
                    if (!f && t)
                      return t.onOutput(e => {
                        return v(r => {
                          return r + e.replace(/\n/g, "\n\r");
                        });
                      });
                  },
                  [f, t, v]
                ),
                a.useEffect(
                  () => {
                    if (f && t)
                      return t.onOutput(e => {
                        return f.write(e.replace(/\n/g, "\n\r"));
                      });
                  },
                  [f, t]
                ),
                a.useEffect(
                  () => {
                    b && f && (f.write(b), v(""));
                  },
                  [f, b]
                ),
                a.useEffect(
                  () => {
                    o &&
                      v(e => {
                        return e + "".concat(o.replace(/\n/g, "\n\r"), "\n\r");
                      });
                  },
                  [o, v]
                ),
                a.useEffect(
                  () => {
                    if (f) {
                      const e = () => {
                                r.getRunState() !== u.b.OFFLINE &&
                                  r.resizeTerminal(f.getSize());
                              },
                            t = [];
                      t.push(f.onResize(e).dispose);
                      let n = [];
                      t.push(
                        f.onData(e => {
                          r.getRunState() !== u.b.OFFLINE
                            ? r.sendInput(e)
                            : n.push(e);
                        }).dispose
                      ),
                        t.push(
                          r.onOutput(e => {
                            f.write(e);
                          })
                        );
                      let o = !1;
                      return t.push(
                        r.onStateChanged(t => {
                          if (t !== u.b.OFFLINE) {
                            if ((o || (e(), (o = !0)), n.length)) {
                              let i = !0, a = !1, c = void 0;
                              try {
                                for (
                                  var l, f = s()(n);
                                  !(i = (l = f.next()).done);
                                  i = !0
                                ) {
                                  const p = l.value;
                                  r.sendInput(p);
                                }
                              } catch (d) {
                                (a = !0), (c = d);
                              } finally {
                                try {
                                  i || null == f.return || f.return();
                                } finally {
                                  if (a) throw c;
                                }
                              }
                              n = [];
                            }
                          } else o = !1;
                        })
                      ),
                      r.getRunState() !== u.b.OFFLINE && (e(), (o = !0)),
                      () => {
                        t.forEach(e => {
                          return e();
                        });
                      };
                    }
                  },
                  [f, r]
                ),
                [f, p];
              })({ runner: t, packager: o, languageHeader: c }),
              d = Object(n.a)(p, 2),
              h = d[0],
              x = d[1],
              w = a.useState(!1),
              k = Object(n.a)(w, 2),
              E = k[0],
              O = k[1];
        return a.useImperativeHandle(r, () => {
          return {
            clear() {
              h && h.clear();
            },
          };
        }),
        v(
          "div",
          {
            onKeyDown(e) {
              "f" === e.key &&
                Object(f.b)(e) &&
                !e.shiftKey &&
                (O(!0), e.preventDefault());
            },
            className: "jsx-3520147872 replit-ui-theme-root dark terminal",
          },
          v(
            "div",
            { className: "jsx-3520147872 controls" },
            v(
              b.a,
              { align: "center", wrap: "nowrap" },
              E && h
                ? v(m, {
                    findPrevious: h.findPrevious,
                    findNext: h.findNext,
                    exit() {
                      return O(!1);
                    },
                  })
                : v(y, {
                    onClick() {
                      return O(!0);
                    },
                  }),
              v(g, {
                onClick() {
                  h &&
                    (h.clear(),
                    c && h.write("".concat(c.replace(/\n/g, "\n\r"), "\n\r")),
                    h.focus());
                },
              })
            )
          ),
          v("div", { ref: x, className: "jsx-3520147872 xterm-container" }),
          v(i.a, { id: "3520147872" }, [
            ".terminal.jsx-3520147872{height:100%;width:100%;position:relative;background-color:var(--color-brand-dark-blue);border-radius:var(--border-radius-1);}",
            ".controls.jsx-3520147872{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:absolute;top:var(--spacing-1);right:var(--spacing-1);z-index:100;min-height:30px;}",
            ".xterm-container.jsx-3520147872{height:100%;overflow:auto;}",
            ".xterm-container.jsx-3520147872 .xterm{height:100%;padding:var(--spacing-2) var(--spacing-2) var(--spacing-half);}",
            ".xterm-container.jsx-3520147872 .xterm-viewport{overflow-y:auto !important;border-radius:var(--border-radius-1);}",
          ])
        );
      });
      function m(e) {
        const r = e.findNext, t = e.findPrevious, o = e.exit, c = a.useRef(null), s = a.useState(""), u = Object(n.a)(s, 2), l = u[0], f = u[1];
        a.useEffect(() => {
          c.current && c.current.focus();
        }, []);
        return v(
          "div",
          { className: "jsx-2844282466 search" },
          v("input", {
            ref: c,
            placeholder: "Find",
            value: l,
            onChange(e) {
              return f(e.target.value);
            },
            onKeyDown(e) {
              return (e => {
                "Escape" !== e.key
                  ? "Enter" === e.key && (e.shiftKey ? t(l) : r(l))
                  : o();
              })(e);
            },
            className: "jsx-2844282466",
          }),
          v(
            p.a,
            {
              size: "small",
              onClick() {
                return r(l);
              },
            },
            "Next"
          ),
          v(
            p.a,
            {
              size: "small",
              onClick() {
                return t(l);
              },
            },
            "Previous"
          ),
          v(p.a, { size: "small", onClick: o }, "Exit"),
          v(i.a, { id: "2844282466" }, [
            ".search.jsx-2844282466{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:30px;}",
            "input.jsx-2844282466{padding:4px var(--spacing-1) var(--spacing-half);background-color:var(--color-background-1);color:var(--color-white);height:24px;width:85px;border:none;border-radius:var(--border-radius-1);box-shadow:none;}",
            "input.jsx-2844282466::-webkit-input-placeholder{color:var(--color-white);}",
            "input.jsx-2844282466::-moz-placeholder{color:var(--color-white);}",
            "input.jsx-2844282466:-ms-input-placeholder{color:var(--color-white);}",
            "input.jsx-2844282466::placeholder{color:var(--color-white);}",
            "input.jsx-2844282466:focus{outline:none;border:var(--color-primary-1);}",
            "input.jsx-2844282466,.search button{margin:0 var(--spacing-half);}",
          ])
        );
      }
      var g = e => {
          const r = e.onClick;
          return v(
            "button",
            {
              "aria-label": "Clear",
              "data-microtip-position": "bottom-left",
              role: "tooltip",
              onClick: r,
              className: "jsx-616918215",
            },
            v(h.a, { size: "medium" }),
            v(i.a, { id: "616918215" }, [
              "button.jsx-616918215{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:var(--border-radius-1);padding:var(--spacing-half);background-color:var(--color-brand-dark-blue);color:var(--color-foreground-1);-webkit-transition:background-color 0.2s;transition:background-color 0.2s;border:none;cursor:pointer;}",
              "button.jsx-616918215:hover{background-color:var(--color-control-2);}",
              "button.jsx-616918215:focus{outline:none;}",
            ])
          );
        },
        y = e => {
          const r = e.onClick;
          return v(
            "button",
            {
              "aria-label": "Search",
              "data-microtip-position": "bottom",
              role: "tooltip",
              onClick: r,
              className: "jsx-616918215",
            },
            v(d.a, { size: "medium" }),
            v(i.a, { id: "616918215" }, [
              "button.jsx-616918215{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:var(--border-radius-1);padding:var(--spacing-half);background-color:var(--color-brand-dark-blue);color:var(--color-foreground-1);-webkit-transition:background-color 0.2s;transition:background-color 0.2s;border:none;cursor:pointer;}",
              "button.jsx-616918215:hover{background-color:var(--color-control-2);}",
              "button.jsx-616918215:focus{outline:none;}",
            ])
          );
        };
    },
    NuhN(e, r, t) {
      "use strict";
      t.d(r, "a", () => {
        return a;
      }),
        t.d(r, "e", () => {
          return c;
        }),
        t.d(r, "d", () => {
          return s;
        }),
        t.d(r, "c", () => {
          return u;
        }),
        t.d(r, "b", () => {
          return l;
        }),
        t.d(r, "g", () => {
          return f;
        }),
        t.d(r, "f", () => {
          return p;
        });
      const n = t("pLtp"),
            o = t.n(n),
            i = e => {
              return "" === e;
            };
      function a(e) {
        return i(e) || e.endsWith("/") ? e : e + "/";
      }
      function c(e, r) {
        return o()(e).filter(e => {
          return s(r, e);
        });
      }
      function s(e, r) {
        return r !== e && r.startsWith(a(e));
      }
      function u(e, r) {
        return o()(e).filter(e => {
          return l(r, e);
        });
      }
      function l(e, r) {
        if (!s(e, r)) return !1;
        const t = a(e);
        let n = r.slice(t.length);
        return n.endsWith("/") && (n = n.slice(-1)), !n.includes("/");
      }
      function f(e, r, t) {
        const n = c(e, r).map(e => {
          return [e, p(r, t, e)];
        });
        return "undefined" !== typeof e[r] && n.unshift([r, t]), n;
      }
      function p(e, r, t) {
        const n = a(e);
        return a(r) + t.slice(n.length);
      }
    },
    VOEV(e, r, t) {
      "use strict";
      const n = t("hfKm"),
            o = t.n(n),
            i = t("2Eek"),
            a = t.n(i),
            c = t("XoMD"),
            s = t.n(c),
            u = t("Jo+v"),
            l = t.n(u),
            f = t("4mXO"),
            p = t.n(f),
            d = t("ln6h"),
            h = t.n(d),
            b = t("vYYK"),
            v = t("XXOK"),
            m = t.n(v),
            g = t("dfwq"),
            y = t("pLtp"),
            x = t.n(y),
            w = t("eVuF"),
            k = t.n(w),
            E = t("gfZM"),
            O = t("8v8i"),
            C = t("dI/k"),
            j = t("NuhN"),
            T = t("8/ze"),
            D = t("5/z4"),
            S = t("Cg2A"),
            N = t.n(S),
            R = t("9Jkg"),
            F = t.n(R),
            _ = t("0iUn"),
            I = t("sLSF"),
            L = t("MI3g"),
            U = t("a7VT"),
            A = t("AT/M"),
            P = t("Tit0"),
            M = t("+qE3"),
            B = t("cC09"),
            z = t("cHV+"),
            q = t("9/5/"),
            V = t.n(q),
            X = t("Z5Wq"),
            Y = t("zgDP"),
            H = t("p0XB"),
            K = t.n(H),
            G = e => {
              return (
                e.length > 0 && "number" === typeof e[e.length - 1] && e.pop(), e
              );
            },
            W = e => {
              if (!K()(e)) throw Error("Op must be an array of components");
              for (var r = null, t = 0; t < e.length; t++) {
                const n = e[t];
                switch (typeof n) {
                  case "object":
                    if (!("number" === typeof n.d && n.d > 0))
                      throw Error("Object components must be deletes of size > 0");
                    break;
                  case "string":
                    if (!(n.length > 0)) throw Error("Inserts cannot be empty");
                    break;
                  case "number":
                    if (!(n > 0)) throw Error("Skip components must be >0");
                    if ("number" === typeof r)
                      throw Error("Adjacent skip components should be combined");
                }
                r = n;
              }
              if ("number" === typeof r) throw Error("Op has a trailing skip");
            },
            Z = e => {
              return "number" === typeof e
                ? e
                : "string" === typeof e
                ? e.length
                : e.d;
            };
      function J(e, r) {
        W(e), W(r);
        for (
          var t,
            n,
            o = [],
            i =
              ((t = o),
              e => {
                e &&
                  0 !== e.d &&
                  (0 === t.length
                    ? t.push(e)
                    : typeof e === typeof t[t.length - 1]
                    ? "object" === typeof e
                      ? (t[t.length - 1].d += e.d)
                      : (t[t.length - 1] += e)
                    : t.push(e));
              }),
            a = (e => {
              let r = 0, t = 0;
              return [
                (n, o) => {
                  if (r === e.length) return -1 === n ? null : n;
                  let i;
                  const a = e[r];
                  return "number" === typeof a
                    ? -1 === n || a - t <= n
                      ? ((i = a - t), ++r, (t = 0), i)
                      : ((t += n), n)
                    : "string" === typeof a
                    ? -1 === n || "i" === o || a.length - t <= n
                      ? ((i = a.slice(t)), ++r, (t = 0), i)
                      : ((i = a.slice(t, t + n)), (t += n), i)
                    : -1 === n || "d" === o || a.d - t <= n
                    ? ((i = { d: a.d - t }), ++r, (t = 0), i)
                    : ((t += n), { d: n });
                },
                () => {
                  return e[r];
                },
              ];
            })(e)[0],
            c = 0;
          c < r.length;
          c++
        ) {
          const s = r[c];
          let u = void 0;
          let l = void 0;
          switch (typeof s) {
            case "number":
              for (u = s; u > 0; )
                (l = a(u, "d")) && i(l), "object" !== typeof l && (u -= Z(l));
              break;
            case "string":
              i(s);
              break;
            case "object":
              for (u = s.d; u > 0; )
                switch (typeof (l = a(u, "d"))) {
                  case "number":
                    i({ d: l }), (u -= l);
                    break;
                  case "string":
                    u -= l.length;
                    break;
                  case "object":
                    l && i(l);
                }
          }
        }
        for (; (n = a(-1)); ) i(n);
        return G(o);
      }
      function Q(e, r) {
        const t = x()(e);
        if (p.a) {
          let n = p()(e);
          r &&
            (n = n.filter(r => {
              return l()(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function $(e) {
        for (let r = 1; r < arguments.length; r++) {
          const t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? Q(Object(t), !0).forEach(r => {
                Object(b.a)(e, r, t[r]);
              })
            : s.a
            ? a()(e, s()(t))
            : Q(Object(t)).forEach(r => {
                o()(e, r, l()(t, r));
              });
        }
        return e;
      }
      function ee(e) {
        return e.map(e => {
          if ("delete" in e && e.delete) return { d: e.delete };
          if ("skip" in e && e.skip) return e.skip;
          if ("insert" in e && "string" === typeof e.insert) return e.insert;
          throw new Error("Unexpected op type");
        });
      }
      const re = (e => {
        function r(e, t) {
          let n;
          return Object(_.a)(this, r),
          (n = Object(L.a)(this, Object(U.a)(r).call(this))),
          Object(b.a)(Object(A.a)(n), "linkedFile", void 0),
          Object(b.a)(Object(A.a)(n), "channel", void 0),
          Object(b.a)(Object(A.a)(n), "destroy", void 0),
          Object(b.a)(Object(A.a)(n), "pending", void 0),
          Object(b.a)(Object(A.a)(n), "inflight", void 0),
          Object(b.a)(Object(A.a)(n), "inflightOpsPromise", void 0),
          Object(b.a)(Object(A.a)(n), "version", void 0),
          Object(b.a)(Object(A.a)(n), "otContents", void 0),
          Object(b.a)(Object(A.a)(n), "pendingCursors", void 0),
          Object(b.a)(Object(A.a)(n), "flushedCursorIds", void 0),
          Object(b.a)(Object(A.a)(n), "user", void 0),
          Object(b.a)(Object(A.a)(n), "debounceSend", void 0),
          Object(b.a)(Object(A.a)(n), "debounceCommit", void 0),
          Object(b.a)(Object(A.a)(n), "isCommitting", void 0),
          Object(b.a)(Object(A.a)(n), "resolveStatusOp", void 0),
          Object(b.a)(Object(A.a)(n), "isReconnecting", void 0),
          Object(b.a)(Object(A.a)(n), "uncommittedOps", void 0),
          Object(b.a)(Object(A.a)(n), "hasUncommittedMultiplayerOps", void 0),
          Object(b.a)(Object(A.a)(n), "committedVersion", void 0),
          Object(b.a)(Object(A.a)(n), "committedContent", void 0),
          Object(b.a)(Object(A.a)(n), "bufferedReconnectingOps", void 0),
          Object(b.a)(Object(A.a)(n), "didEditOffline", void 0),
          Object(b.a)(Object(A.a)(n), "reconnectTrackedData", void 0),
          Object(b.a)(Object(A.a)(n), "timeDisconnected", void 0),
          Object(b.a)(Object(A.a)(n), "writeOps", e => {
            if (!n.channel && !n.isReconnecting)
              throw new Error(
                "Trying to send changes before ever coming online"
              );
            n.isReconnecting && (n.didEditOffline = !0);
            let r = "";
            try {
              r = n.getLocalContent();
            } catch (h) {
              return void n.emit(
                "error",
                new Error("OT Error: unable to get local content"),
                { originalError: h }
              );
            }
            let t = [], o = 0, i = !0, a = !1, c = void 0;
            try {
              for (var s, u = m()(e); !(i = (s = u.next()).done); i = !0) {
                const l = s.value;
                switch (typeof l) {
                  case "number":
                    o += l;
                    break;
                  case "string":
                    const f = Object(X.strPosToUni)(r, o);
                    (t =
                      f > 0
                        ? z.type.compose(t, [f, l])
                        : z.type.compose(t, [l])),
                      (o += l.length);
                    break;
                  case "object":
                    const p = Object(X.strPosToUni)(r, o), d = Object(X.strPosToUni)(r, o + l.d) - p;
                    t =
                      p > 0
                        ? z.type.compose(t, [p, { d: d }])
                        : z.type.compose(t, [{ d: d }]);
                    break;
                  default:
                    return void n.emit(
                      "error",
                      new Error("OT Error: unknown op type")
                    );
                }
              }
            } catch (b) {
              (a = !0), (c = b);
            } finally {
              try {
                i || null == u.return || u.return();
              } finally {
                if (a) throw c;
              }
            }
            (n.pending = z.type.compose(n.pending, t)),
              0 !== n.pending.length
                ? n.emit("fileDirty")
                : n.isCommitting && n.emit("commitStart");
            try {
              n.getLocalContent();
            } catch (h) {
              n.emit(
                "error",
                new Error("OT Error: unable to get local content"),
                { originalError: h }
              );
            }
            n.debounceSend();
          }),
          Object(b.a)(Object(A.a)(n), "updateCursors", e => {
            (n.pendingCursors = e), n.debounceSend();
          }),
          Object(b.a)(Object(A.a)(n), "isClean", () => {
            return (
              n.committedVersion === n.version &&
              0 === n.inflight.length &&
              0 === n.pending.length
            );
          }),
          Object(b.a)(Object(A.a)(n), "sendOps", () => {
            if (
              n.channel &&
              "open" === n.channel.status &&
              !n.isReconnecting &&
              !(n.inflight.length > 0)
            ) {
              if (0 !== n.pending.length) {
                const e = n.pending.map(e => {
                  return "object" === typeof e
                    ? { delete: e.d }
                    : "number" === typeof e
                    ? { skip: e }
                    : { insert: e };
                });
                (n.inflight = n.pending),
                  (n.pending = []),
                  (n.inflightOpsPromise = n.channel.request({
                    ot: { spookyVersion: n.version, ops: e },
                  })),
                  n.inflightOpsPromise.then(r => {
                    r.error &&
                      n.emit(
                        "error",
                        new Error("OT Error: error accepting packet"),
                        { originalError: r.error, ops: e }
                      );
                  });
              }
              if (0 !== n.pendingCursors.length) {
                let r = !0, t = !1, o = void 0;
                try {
                  for (
                    var i, a = m()(n.flushedCursorIds);
                    !(r = (i = a.next()).done);
                    r = !0
                  ) {
                    const c = i.value;
                    n.channel.send({ otDeleteCursor: { id: c } });
                  }
                } catch (b) {
                  (t = !0), (o = b);
                } finally {
                  try {
                    r || null == a.return || a.return();
                  } finally {
                    if (t) throw o;
                  }
                }
                n.flushedCursorIds = [];
                let s = !0, u = !1, l = void 0;
                try {
                  for (
                    var f, p = m()(n.pendingCursors);
                    !(s = (f = p.next()).done);
                    s = !0
                  ) {
                    const d = f.value,
                          h = Number(
                            Math.random().toString().split(".")[1]
                          ).toString(36);
                    n.flushedCursorIds.push(h),
                      n.channel.send({
                        otNewCursor: $({ id: h, user: n.user }, d),
                      });
                  }
                } catch (b) {
                  (u = !0), (l = b);
                } finally {
                  try {
                    s || null == p.return || p.return();
                  } finally {
                    if (u) throw l;
                  }
                }
                n.pendingCursors = [];
              }
            }
          }),
          Object(b.a)(Object(A.a)(n), "handlePacket", (e, r) => {
            let t = e.ops;
            const o = e.version;
            const i = e.crc32;
            const a = r.overrideReconnectringBuffer;
            if (n.resolveStatusOp)
              return (
                n.resolveStatusOp({ ops: t, version: o }),
                void (n.resolveStatusOp = null)
              );
            if (!n.isReconnecting || a)
              if (-1 !== n.version)
                if ((n.version++, o === n.version)) {
                  let c = "";
                  try {
                    c = z.type.apply(n.otContents, t);
                  } catch (O) {
                    return void n.emit(
                      "error",
                      new Error("OT Error: unable to apply updated content"),
                      { originalError: O, incomingOps: t }
                    );
                  }
                  const s = B.str(c) >>> 0;
                  if (s === i) {
                    if (
                      (n.uncommittedOps.push({
                        version: o,
                        crc32: i,
                        ops: t,
                      }),
                      F()(t) === F()(n.inflight))
                    )
                      return (
                        n.debounceCommit(),
                        (n.inflight = []),
                        (n.inflightOpsPromise = null),
                        (n.otContents = c),
                        n.debounceSend(),
                        void n.debounceSend.flush()
                      );
                    n.isCommitting || n.emit("fileDirty"),
                      n.debounceCommit(),
                      (n.hasUncommittedMultiplayerOps = !0);
                    let u = "";
                    try {
                      u = n.getLocalContent();
                    } catch (O) {
                      return void n.emit(
                        "error",
                        new Error("OT Error: unable to get local content"),
                        { originalError: O }
                      );
                    }
                    if (n.inflight.length) {
                      const l = z.type.transform(n.inflight, t, "right");
                      (t = z.type.transform(t, n.inflight, "left")),
                        (n.inflight = l);
                    }
                    if (n.pending.length) {
                      const f = z.type.transform(n.pending, t, "right");
                      (t = z.type.transform(t, n.pending, "left")),
                        (n.pending = f);
                    }
                    let p = [], d = 0, h = !0, b = !1, v = void 0;
                    try {
                      for (
                        var g, y = m()(t);
                        !(h = (g = y.next()).done);
                        h = !0
                      ) {
                        const x = g.value;
                        switch (typeof x) {
                          case "number":
                            d += x;
                            break;
                          case "string":
                            const w = Object(X.uniToStrPos)(u, d);
                            (p = J(p, w > 0 ? [w, x] : [x])),
                              (d += Object(X.strPosToUni)(x));
                            break;
                          case "object":
                            const k = Object(X.uniToStrPos)(u, d), E = Object(X.uniToStrPos)(u, d + x.d) - k;
                            p = J(p, k > 0 ? [k, { d: E }] : [{ d: E }]);
                            break;
                          default:
                            return void n.emit(
                              "error",
                              new Error("OT Error: unknown op type")
                            );
                        }
                      }
                    } catch (C) {
                      (b = !0), (v = C);
                    } finally {
                      try {
                        h || null == y.return || y.return();
                      } finally {
                        if (b) throw v;
                      }
                    }
                    (n.otContents = c), n.emit("op", p);
                  } else
                    n.emit("error", new Error("OT Error: crc32 mismatch"), {
                      server: i,
                      client: s,
                      incomingOps: t,
                    });
                } else
                  n.emit(
                    "error",
                    new Error("OT Error: invalid server version"),
                    {
                      expectedVersion: n.version,
                      receievedVersion: o,
                      incomingOps: t,
                    }
                  );
              else
                n.emit(
                  "error",
                  new Error(
                    "Got packet while version is still -1, expected version to be set in handleStatus"
                  )
                );
            else
              n.bufferedReconnectingOps.push({
                crc32: i,
                ops: t,
                version: o,
              });
          }),
          Object(b.a)(Object(A.a)(n), "handleNewCursor", e => {
            n.emit("cursor", e);
          }),
          Object(b.a)(Object(A.a)(n), "handleDeleteCursor", e => {
            const r = e.id;
            n.emit("removeCursor", r);
          }),
          Object(b.a)(Object(A.a)(n), "handleStatus", e => {
            let r, t, o, i, a, c;
            return h.a.async(s => {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    if (n.channel) {
                      s.next = 2;
                      break;
                    }
                    return s.abrupt("return");
                  case 2:
                    if (!e.linkedFile) {
                      s.next = 23;
                      break;
                    }
                    if (null != e.contents) {
                      s.next = 6;
                      break;
                    }
                    return (
                      n.emit(
                        "error",
                        new Error(
                          "expected status contents,  got null or undefined"
                        )
                      ),
                      s.abrupt("return")
                    );
                  case 6:
                    if (null != e.cursors) {
                      s.next = 9;
                      break;
                    }
                    return (
                      n.emit(
                        "error",
                        new Error(
                          "expected status cursors, got null or undefined"
                        )
                      ),
                      s.abrupt("return")
                    );
                  case 9:
                    if (null != e.version) {
                      s.next = 12;
                      break;
                    }
                    return (
                      n.emit(
                        "error",
                        new Error(
                          "expected status version, got null or undefined"
                        )
                      ),
                      s.abrupt("return")
                    );
                  case 12:
                    if (!n.isReconnecting) {
                      s.next = 15;
                      break;
                    }
                    return (
                      n.handleReconnect(e.contents, e.version),
                      s.abrupt("return")
                    );
                  case 15:
                    return (
                      (n.otContents = e.contents),
                      (n.version = e.version),
                      n.emit("firstConnect"),
                      n.emit("op", [n.otContents]),
                      e.cursors.forEach(n.handleNewCursor),
                      n.emit("fileDirty"),
                      n.debounceCommit(),
                      s.abrupt("return")
                    );
                  case 23:
                    return (r = new k.a(e => {
                      return (n.resolveStatusOp = e);
                    })),
                    (s.next = 26),
                    h.a.awrap(
                      n.channel.request({
                        otLinkFile: {
                          file: { path: n.linkedFile },
                          highConsistency: Boolean(
                            window["flag-ot-high-consitency"]
                          ),
                        },
                      })
                    )
                  ;
                  case 26:
                    if (!(t = s.sent).channelClosed) {
                      s.next = 29;
                      break;
                    }
                    return s.abrupt("return");
                  case 29:
                    if (!t.error) {
                      s.next = 32;
                      break;
                    }
                    return (
                      n.emit(
                        "error",
                        new Error("link file error " + t.error)
                      ),
                      s.abrupt("return")
                    );
                  case 32:
                    return (s.next = 34), h.a.awrap(r);
                  case 34:
                    if (
                      ((o = s.sent),
                      (i = o.ops),
                      (a = o.version),
                      !(i.length > 1))
                    ) {
                      s.next = 40;
                      break;
                    }
                    return (
                      n.emit(
                        "error",
                        new Error("Expected a single status op")
                      ),
                      s.abrupt("return")
                    );
                  case 40:
                    if ("string" === typeof (c = i[0] || "")) {
                      s.next = 44;
                      break;
                    }
                    return (
                      n.emit(
                        "error",
                        new Error(
                          "Expected a status op to be an insert or empty"
                        )
                      ),
                      s.abrupt("return")
                    );
                  case 44:
                    if (!n.isReconnecting) {
                      s.next = 47;
                      break;
                    }
                    return n.handleReconnect(c, a), s.abrupt("return");
                  case 47:
                    (n.otContents = c),
                      (n.version = a),
                      (n.committedVersion = a),
                      (n.committedContent = n.otContents),
                      n.emit("firstConnect"),
                      n.emit("op", i);
                  case 53:
                  case "end":
                    return s.stop();
                }
            });
          }),
          Object(b.a)(Object(A.a)(n), "handleReconnect", (e, r) => {
            let t, o, i, a, c, s, u, l, f, p, d, b, v, g, y, x, w, k, E, O, C, j, T, D, S, R, F, _, I, L, U, A, P, M, B, q, V, X, H, K, G, W, Z, J, Q, ee, re, te, ne;
            return h.a.async(
              oe => {
                for (;;)
                  switch ((oe.prev = oe.next)) {
                    case 0:
                      if (n.timeDisconnected) {
                        oe.next = 2;
                        break;
                      }
                      throw new Error("wat");
                    case 2:
                      if (
                        ((t = N()() - n.timeDisconnected),
                        (o = o => {
                          n.reconnectTrackedData = $({}, o, {
                            serverVersion: r,
                            ourVersion: n.version,
                            ourCommittedVersion: n.committedVersion,
                            areContentsEqual: n.otContents === e,
                            areCommittedContentsEqual:
                              n.committedContent === e,
                            didReceiveOpsWhileReconnecting: Boolean(
                              n.bufferedReconnectingOps
                            ),
                            didEditOffline: n.didEditOffline,
                            hasPendingOps: Boolean(n.pending.length),
                            disconnectDuration: t,
                          });
                        }),
                        (i = () => {
                          (n.isReconnecting = !1),
                            (n.bufferedReconnectingOps = []),
                            (n.didEditOffline = !1),
                            (n.timeDisconnected = null),
                            n.debounceSend(),
                            n.debounceCommit(),
                            n.emit("reconnected");
                        }),
                        !n.inflight.length)
                      ) {
                        oe.next = 26;
                        break;
                      }
                      if (r !== n.version || n.otContents !== e) {
                        oe.next = 14;
                        break;
                      }
                      return (
                        o({
                          case: "has_inflight_happy_path_ops_unreached",
                          prompted: !1,
                        }),
                        Object(Y.track)(
                          Y.events.FILE_RECONNECTED_STATUS2,
                          n.reconnectTrackedData
                        ),
                        (n.pending = z.type.compose(n.inflight, n.pending)),
                        (n.inflight = []),
                        (n.inflightOpsPromise = null),
                        i(),
                        oe.abrupt("return")
                      );
                    case 14:
                      (a = !1), (c = n.otContents);
                      try {
                        c = z.type.apply(e, n.inflight);
                      } catch (ie) {
                        a = !0;
                      }
                      if (a || n.version + 1 !== r || c !== e) {
                        oe.next = 22;
                        break;
                      }
                      return (
                        o({
                          case: "has_inflight_happy_path_ops_reached",
                          prompted: !0,
                        }),
                        Object(Y.track)(
                          Y.events.FILE_RECONNECTED_STATUS2,
                          n.reconnectTrackedData
                        ),
                        n.emit("promptUserReconnect"),
                        oe.abrupt("return")
                      );
                    case 22:
                      return (
                        o({ case: "has_inflight", prompted: !0 }),
                        Object(Y.track)(
                          Y.events.FILE_RECONNECTED_STATUS2,
                          n.reconnectTrackedData
                        ),
                        n.emit("promptUserReconnect"),
                        oe.abrupt("return")
                      );
                    case 26:
                      if (!n.hasUncommittedMultiplayerOps) {
                        oe.next = 31;
                        break;
                      }
                      return (
                        o({ case: "multiplayer", prompted: !0 }),
                        Object(Y.track)(
                          Y.events.FILE_RECONNECTED_STATUS2,
                          n.reconnectTrackedData
                        ),
                        n.emit("promptUserReconnect"),
                        oe.abrupt("return")
                      );
                    case 31:
                      if (n.version !== r) {
                        oe.next = 41;
                        break;
                      }
                      if (e !== n.otContents) {
                        oe.next = 37;
                        break;
                      }
                      return (
                        o({ case: "happy_path", prompted: !1 }),
                        Object(Y.track)(
                          Y.events.FILE_RECONNECTED_STATUS2,
                          n.reconnectTrackedData
                        ),
                        i(),
                        oe.abrupt("return")
                      );
                    case 37:
                      return (
                        o({
                          case: "same_version_different_content",
                          prompted: !0,
                        }),
                        Object(Y.track)(
                          Y.events.FILE_RECONNECTED_STATUS2,
                          n.reconnectTrackedData
                        ),
                        n.emit("promptUserReconnect"),
                        oe.abrupt("return")
                      );
                    case 41:
                      if (n.committedVersion !== r) {
                        oe.next = 104;
                        break;
                      }
                      for (
                        s = e,
                          oe.prev = 43,
                          u = !0,
                          l = !1,
                          f = void 0,
                          oe.prev = 47,
                          p = m()(n.uncommittedOps);
                        !(u = (d = p.next()).done);
                        u = !0
                      )
                        (b = d.value.ops), (s = z.type.apply(s, b));
                      oe.next = 55;
                      break;
                    case 51:
                      (oe.prev = 51),
                        (oe.t0 = oe.catch(47)),
                        (l = !0),
                        (f = oe.t0);
                    case 55:
                      (oe.prev = 55),
                        (oe.prev = 56),
                        u || null == p.return || p.return();
                    case 58:
                      if (((oe.prev = 58), !l)) {
                        oe.next = 61;
                        break;
                      }
                      throw f;
                    case 61:
                      return oe.finish(58);
                    case 62:
                      return oe.finish(55);
                    case 63:
                      oe.next = 71;
                      break;
                    case 65:
                      return (
                        (oe.prev = 65),
                        (oe.t1 = oe.catch(43)),
                        o({
                          case: "same_committed_version_unable_to_apply_ops",
                          prompted: !0,
                        }),
                        Object(Y.track)(
                          Y.events.FILE_RECONNECTED_STATUS2,
                          n.reconnectTrackedData
                        ),
                        n.emit("promptUserReconnect"),
                        oe.abrupt("return")
                      );
                    case 71:
                      if (s !== n.otContents) {
                        oe.next = 100;
                        break;
                      }
                      for (
                        o({ case: "happy_path_uncommitted", prompted: !1 }),
                          Object(Y.track)(
                            Y.events.FILE_RECONNECTED_STATUS2,
                            n.reconnectTrackedData
                          ),
                          v = [],
                          g = !0,
                          y = !1,
                          x = void 0,
                          oe.prev = 78,
                          w = m()(n.uncommittedOps);
                        !(g = (k = w.next()).done);
                        g = !0
                      )
                        (E = k.value.ops), (v = z.type.compose(v, E));
                      oe.next = 86;
                      break;
                    case 82:
                      (oe.prev = 82),
                        (oe.t2 = oe.catch(78)),
                        (y = !0),
                        (x = oe.t2);
                    case 86:
                      (oe.prev = 86),
                        (oe.prev = 87),
                        g || null == w.return || w.return();
                    case 89:
                      if (((oe.prev = 89), !y)) {
                        oe.next = 92;
                        break;
                      }
                      throw x;
                    case 92:
                      return oe.finish(89);
                    case 93:
                      return oe.finish(86);
                    case 94:
                      return (
                        (n.pending = z.type.compose(v, n.pending)),
                        (n.uncommittedOps = []),
                        (n.version = r),
                        (n.otContents = e),
                        i(),
                        oe.abrupt("return")
                      );
                    case 100:
                      return (
                        o({
                          case:
                            "same_committed_version_different_content_fixed",
                          prompted: !0,
                        }),
                        Object(Y.track)(
                          Y.events.FILE_RECONNECTED_STATUS2,
                          n.reconnectTrackedData
                        ),
                        n.emit("promptUserReconnect"),
                        oe.abrupt("return")
                      );
                    case 104:
                      if (!(n.version < r)) {
                        oe.next = 211;
                        break;
                      }
                      return (
                        (oe.next = 107),
                        h.a.awrap(n.fetchOps(n.version + 1, r))
                      );
                    case 107:
                      for (
                        O = oe.sent,
                          C = !1,
                          j = n.otContents,
                          oe.prev = 110,
                          T = !0,
                          D = !1,
                          S = void 0,
                          oe.prev = 114,
                          R = m()(O);
                        !(T = (F = R.next()).done);
                        T = !0
                      )
                        (_ = F.value.ops), (j = z.type.apply(j, _));
                      oe.next = 122;
                      break;
                    case 118:
                      (oe.prev = 118),
                        (oe.t3 = oe.catch(114)),
                        (D = !0),
                        (S = oe.t3);
                    case 122:
                      (oe.prev = 122),
                        (oe.prev = 123),
                        T || null == R.return || R.return();
                    case 125:
                      if (((oe.prev = 125), !D)) {
                        oe.next = 128;
                        break;
                      }
                      throw S;
                    case 128:
                      return oe.finish(125);
                    case 129:
                      return oe.finish(122);
                    case 130:
                      oe.next = 135;
                      break;
                    case 132:
                      (oe.prev = 132), (oe.t4 = oe.catch(110)), (C = !0);
                    case 135:
                      if (C || j !== e) {
                        oe.next = 178;
                        break;
                      }
                      for (
                        o({ case: "happy_path_server_ahead", prompted: !1 }),
                          Object(Y.track)(
                            Y.events.FILE_RECONNECTED_STATUS2,
                            n.reconnectTrackedData
                          ),
                          I = !0,
                          L = !1,
                          U = void 0,
                          oe.prev = 141,
                          A = m()(O);
                        !(I = (P = A.next()).done);
                        I = !0
                      )
                        (M = P.value),
                          n.handlePacket(M, {
                            overrideReconnectringBuffer: !0,
                          });
                      oe.next = 149;
                      break;
                    case 145:
                      (oe.prev = 145),
                        (oe.t5 = oe.catch(141)),
                        (L = !0),
                        (U = oe.t5);
                    case 149:
                      (oe.prev = 149),
                        (oe.prev = 150),
                        I || null == A.return || A.return();
                    case 152:
                      if (((oe.prev = 152), !L)) {
                        oe.next = 155;
                        break;
                      }
                      throw U;
                    case 155:
                      return oe.finish(152);
                    case 156:
                      return oe.finish(149);
                    case 157:
                      for (
                        B = !0,
                          q = !1,
                          V = void 0,
                          oe.prev = 160,
                          X = m()(n.bufferedReconnectingOps);
                        !(B = (H = X.next()).done);
                        B = !0
                      )
                        (K = H.value),
                          n.handlePacket(K, {
                            overrideReconnectringBuffer: !0,
                          });
                      oe.next = 168;
                      break;
                    case 164:
                      (oe.prev = 164),
                        (oe.t6 = oe.catch(160)),
                        (q = !0),
                        (V = oe.t6);
                    case 168:
                      (oe.prev = 168),
                        (oe.prev = 169),
                        B || null == X.return || X.return();
                    case 171:
                      if (((oe.prev = 171), !q)) {
                        oe.next = 174;
                        break;
                      }
                      throw V;
                    case 174:
                      return oe.finish(171);
                    case 175:
                      return oe.finish(168);
                    case 176:
                      return i(), oe.abrupt("return");
                    case 178:
                      return (
                        (oe.next = 180),
                        h.a.awrap(n.fetchOps(n.committedVersion + 1, r))
                      );
                    case 180:
                      for (
                        G = oe.sent,
                          W = !1,
                          Z = n.committedContent,
                          oe.prev = 183,
                          J = !0,
                          Q = !1,
                          ee = void 0,
                          oe.prev = 187,
                          re = m()(G);
                        !(J = (te = re.next()).done);
                        J = !0
                      )
                        (ne = te.value.ops), (Z = z.type.apply(Z, ne));
                      oe.next = 195;
                      break;
                    case 191:
                      (oe.prev = 191),
                        (oe.t7 = oe.catch(187)),
                        (Q = !0),
                        (ee = oe.t7);
                    case 195:
                      (oe.prev = 195),
                        (oe.prev = 196),
                        J || null == re.return || re.return();
                    case 198:
                      if (((oe.prev = 198), !Q)) {
                        oe.next = 201;
                        break;
                      }
                      throw ee;
                    case 201:
                      return oe.finish(198);
                    case 202:
                      return oe.finish(195);
                    case 203:
                      oe.next = 208;
                      break;
                    case 205:
                      (oe.prev = 205), (oe.t8 = oe.catch(183)), (W = !0);
                    case 208:
                      return (
                        W ||
                          Z !== e ||
                          (o({
                            case: "happy_path_uncommitted_server_ahead",
                            prompted: !0,
                          }),
                          Object(Y.track)(
                            Y.events.FILE_RECONNECTED_STATUS2,
                            n.reconnectTrackedData
                          )),
                        n.emit("promptUserReconnect"),
                        oe.abrupt("return")
                      );
                    case 211:
                      o({ case: "other", prompted: !0 }),
                        Object(Y.track)(
                          Y.events.FILE_RECONNECTED_STATUS2,
                          n.reconnectTrackedData
                        ),
                        n.emit("promptUserReconnect");
                    case 214:
                    case "end":
                      return oe.stop();
                  }
              },
              null,
              null,
              [
                [43, 65],
                [47, 51, 55, 63],
                [56, , 58, 62],
                [78, 82, 86, 94],
                [87, , 89, 93],
                [110, 132],
                [114, 118, 122, 130],
                [123, , 125, 129],
                [141, 145, 149, 157],
                [150, , 152, 156],
                [160, 164, 168, 176],
                [169, , 171, 175],
                [183, 205],
                [187, 191, 195, 203],
                [196, , 198, 202],
              ]
            );
          }),
          Object(b.a)(Object(A.a)(n), "getLocalContent", () => {
            const e = Object(A.a)(n);
            const r = e.inflight;
            const t = e.otContents;
            const o = e.pending;
            let i = t;
            return (
              r.length && (i = z.type.apply(i, r)),
              o.length && (i = z.type.apply(i, o)),
              i
            );
          }),
          Object(b.a)(Object(A.a)(n), "fetchOps", (e, r) => {
            let t;
            return h.a.async(o => {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    if (n.channel) {
                      o.next = 2;
                      break;
                    }
                    throw new Error("No cahnnel, cannot fetch");
                  case 2:
                    return (
                      (o.next = 4),
                      h.a.awrap(
                        n.channel.request({
                          otFetchRequest: { versionFrom: e, versionTo: r },
                        })
                      )
                    );
                  case 4:
                    if (!(t = o.sent).channelClosed) {
                      o.next = 7;
                      break;
                    }
                    throw new Error("Channel closed while requesting");
                  case 7:
                    if (!t.error) {
                      o.next = 9;
                      break;
                    }
                    throw new Error("Fetch ops returned an error" + t.error);
                  case 9:
                    if (t.otFetchResponse) {
                      o.next = 11;
                      break;
                    }
                    throw new Error("Expected otFetchResponse");
                  case 11:
                    if (t.otFetchResponse.packets) {
                      o.next = 13;
                      break;
                    }
                    throw new Error("Expected otFetchResponse.packets");
                  case 13:
                    return o.abrupt(
                      "return",
                      t.otFetchResponse.packets.map(e => {
                        const r = e.crc32, t = e.ops, n = e.version;
                        if (null == r)
                          throw new Error("Expected crc32 in packet");
                        if (null == t)
                          throw new Error("Expected ops in packet");
                        if (null == n)
                          throw new Error("Expected version in packet");
                        return { crc32: r, version: n, ops: ee(t) };
                      })
                    );
                  case 14:
                  case "end":
                    return o.stop();
                }
            });
          }),
          (n.linkedFile = e),
          (n.channel = null),
          (n.inflight = []),
          (n.inflightOpsPromise = null),
          (n.uncommittedOps = []),
          (n.hasUncommittedMultiplayerOps = !1),
          (n.committedVersion = -1),
          (n.isReconnecting = !1),
          (n.bufferedReconnectingOps = []),
          (n.didEditOffline = !1),
          (n.pending = []),
          (n.version = -1),
          (n.otContents = ""),
          (n.committedContent = ""),
          (n.flushedCursorIds = []),
          (n.pendingCursors = []),
          (n.user = null),
          (n.debounceSend = V()(
            () => {
              return n.sendOps();
            },
            20,
            { maxWait: 60 }
          )),
          (n.debounceCommit = V()(
            () => {
              return n.commitToDisk();
            },
            1e3,
            { maxWait: 3e3 }
          )),
          (n.resolveStatusOp = null),
          (n.isCommitting = !1),
          (n.timeDisconnected = null),
          (n.destroy = t.openChannel(
            { service: "ot", name: "ot:".concat(e) },
            e => {
              if (!e.error) {
                const r = e.channel, t = e.context;
                return (n.user = t.currentUser
                  ? { name: t.currentUser.username, id: t.currentUser.id }
                  : null),
                (n.channel = r),
                r.onCommand(e => {
                  switch (e.body) {
                    case "ot":
                      if (
                        !e.ot ||
                        null == e.ot.ops ||
                        null == e.ot.spookyVersion ||
                        null == e.ot.crc32
                      )
                        return void n.emit(
                          "error",
                          new Error("OT Error: missing data in ot packet"),
                          e.ot || {}
                        );
                      const r = {
                        crc32: e.ot.crc32,
                        ops: ee(e.ot.ops),
                        version: e.ot.spookyVersion,
                      };
                      return n.handlePacket(r, {
                        overrideReconnectringBuffer: !1,
                      });
                    case "otstatus":
                      return n.handleStatus(e.otstatus);
                    case "error":
                      if (e.ref) return;
                      return n.emit(
                        "error",
                        new Error("Unkown protocol error OT channel"),
                        { originalError: e.error || "Server error" }
                      );
                    case "otNewCursor":
                      return n.handleNewCursor(e.otNewCursor);
                    case "otDeleteCursor":
                      return n.handleDeleteCursor(e.otDeleteCursor);
                  }
                }),
                () => {
                  (n.channel = null),
                    (n.isReconnecting = !0),
                    n.debounceSend.cancel(),
                    n.debounceCommit.cancel(),
                    n.timeDisconnected || (n.timeDisconnected = N()());
                };
              }
            }
          )),
          n;
        }
        return Object(P.a)(r, e),
        Object(I.a)(r, [
          {
            key: "commitToDisk",
            value() {
              let e, r, t;
              return h.a.async(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (this.channel) {
                          n.next = 2;
                          break;
                        }
                        throw new Error("Tryna commit while offline");
                      case 2:
                        if ("open" === this.channel.status) {
                          n.next = 4;
                          break;
                        }
                        return n.abrupt("return");
                      case 4:
                        if (!this.isReconnecting) {
                          n.next = 6;
                          break;
                        }
                        throw new Error("Committing while reconnecting");
                      case 6:
                        if (!this.isClean()) {
                          n.next = 8;
                          break;
                        }
                        return n.abrupt("return");
                      case 8:
                        if (!this.isCommitting) {
                          n.next = 11;
                          break;
                        }
                        return this.debounceCommit(), n.abrupt("return");
                      case 11:
                        if (
                          ((this.isCommitting = !0), !this.inflightOpsPromise)
                        ) {
                          n.next = 19;
                          break;
                        }
                        return (
                          (n.next = 15), h.a.awrap(this.inflightOpsPromise)
                        );
                      case 15:
                        if (!n.sent.channelClosed) {
                          n.next = 19;
                          break;
                        }
                        return (this.isCommitting = !1), n.abrupt("return");
                      case 19:
                        if (!(this.pending.length > 0)) {
                          n.next = 32;
                          break;
                        }
                        if (
                          (this.debounceSend(),
                          this.debounceSend.flush(),
                          this.inflightOpsPromise)
                        ) {
                          n.next = 26;
                          break;
                        }
                        return (
                          (this.isCommitting = !1),
                          this.emit(
                            "error",
                            new Error("expected inflight promise")
                          ),
                          n.abrupt("return")
                        );
                      case 26:
                        return (
                          (n.next = 28), h.a.awrap(this.inflightOpsPromise)
                        );
                      case 28:
                        if (!n.sent.channelClosed) {
                          n.next = 32;
                          break;
                        }
                        return (this.isCommitting = !1), n.abrupt("return");
                      case 32:
                        return (
                          this.emit("commitStart"),
                          (e = this.version),
                          (r = this.otContents),
                          (n.next = 37),
                          h.a.awrap(this.channel.request({ flush: {} }))
                        );
                      case 37:
                        if (!(t = n.sent).channelClosed) {
                          n.next = 41;
                          break;
                        }
                        return (this.isCommitting = !1), n.abrupt("return");
                      case 41:
                        if ("ok" === t.body) {
                          n.next = 45;
                          break;
                        }
                        return (
                          (this.isCommitting = !1),
                          this.emit(
                            "error",
                            new Error("OT Error: unable to flush"),
                            { originalError: t.error || t.toString() }
                          ),
                          n.abrupt("return")
                        );
                      case 45:
                        return (
                          (this.uncommittedOps = []),
                          (this.hasUncommittedMultiplayerOps = !1),
                          (this.committedVersion = e),
                          (this.committedContent = r),
                          this.isClean() && this.emit("commitClean"),
                          (this.isCommitting = !1),
                          n.abrupt("return", t)
                        );
                      case 52:
                      case "end":
                        return n.stop();
                    }
                },
                null,
                this
              );
            },
          },
        ]),
        r;
      })(M.EventEmitter);
      function te(e, r) {
        const t = x()(e);
        if (p.a) {
          let n = p()(e);
          r &&
            (n = n.filter(r => {
              return l()(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function ne(e) {
        for (let r = 1; r < arguments.length; r++) {
          const t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? te(Object(t), !0).forEach(r => {
                Object(b.a)(e, r, t[r]);
              })
            : s.a
            ? a()(e, s()(t))
            : te(Object(t)).forEach(r => {
                o()(e, r, l()(t, r));
              });
        }
        return e;
      }
      function oe(e) {
        return (
          !!e.includes("no such file") || !!e.includes("file does not exist")
        );
      }
      function ie(e) {
        return oe(e)
          ? O.e.NotFound
          : e.includes("file exist")
          ? O.e.AlreadyExists
          : e.includes("not a directory")
          ? O.e.NotDirectory
          : void 0;
      }
      function ae(e) {
        for (
          var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1;
          n < r;
          n++
        )
          t[n - 1] = arguments[n];
        return new k.a((r, n) => {
          setTimeout(() => {
            e.apply(void 0, t)
              .then(r)
              .catch(n);
          }, 0);
        });
      }
      function ce(e) {
        let r;
        const t = e.container;
        let n = null;
        const o = {};
        const i = {};
        t.openChannel({ service: "fsevents" }, e => {
          const r = e.error, t = e.channel;
          if (!r) {
            if (!t) throw new Error("Expected channel");
            (n = t),
              t.onCommand(e => {
                if ("fileEvent" === e.body) {
                  if (!e.fileEvent) throw new Error("Expected fileEvent");
                  const r = e.fileEvent, t = r.file, n = r.dest, i = r.op;
                  if (t) {
                    const a = t.path;
                    if (
                      null !== a &&
                      null !== i &&
                      void 0 !== a &&
                      void 0 !== i
                    ) {
                      let s;
                      if (o[a] || t.type === D.api.File.Type.DIRECTORY)
                        s = O.d.Directory;
                      else {
                        const u = x()(o).find(e => {
                                  return Object(j.b)(e, a);
                                }),
                              l =
                                u &&
                                o[u].children.find(e => {
                                  return e.filename === a.split("/").pop();
                                });
                        s = l ? l.type : O.d.File;
                      }
                      switch (i) {
                        case D.api.FileEvent.Op.Create:
                          c({
                            eventType: O.a.Create,
                            node: { path: a, type: s },
                          });
                          break;
                        case D.api.FileEvent.Op.Modify:
                          if (s === O.d.Directory) break;
                          break;
                        case D.api.FileEvent.Op.Remove:
                          c({
                            eventType: O.a.Delete,
                            node: { path: a, type: s },
                          });
                          break;
                        case D.api.FileEvent.Op.Move:
                          if (null == n || null == n.path)
                            throw new Error("Expected dest path");
                          const f = n.path;
                          c({
                            eventType: O.a.Create,
                            node: { path: f, type: s },
                          }),
                            c({
                              eventType: O.a.Delete,
                              node: { path: a, type: s },
                            });
                      }
                    }
                  }
                }
              });
            const a = [].concat(
              Object(g.a)(
                x()(o).map(e => {
                  return { path: e };
                })
              ),
              Object(g.a)(
                x()(i).map(e => {
                  return { path: e };
                })
              )
            );
            return a.length && t.send({ subscribeFile: { files: a } }),
            () => {
              n = null;
            }
          ;
          }
        });
        let a = new k.a(e => {
          return (r = e);
        });
        function c(e) {
          const r =
            e.node.type === O.d.Directory ? o[e.node.path] : i[e.node.path];
          if (r)
            switch (e.eventType) {
              case O.a.Create:
                break;
              case O.a.Move:
              case O.a.Delete:
                let t = !0, n = !1, a = void 0;
                try {
                  for (
                    var c, s = m()(r.listeners);
                    !(t = (c = s.next()).done);
                    t = !0
                  ) {
                    const u = c.value, l = u.onMoveOrDelete, f = u.dispose;
                    l && l(e), f();
                  }
                } catch (G) {
                  (n = !0), (a = G);
                } finally {
                  try {
                    t || null == s.return || s.return();
                  } finally {
                    if (n) throw a;
                  }
                }
                break;
              case O.a.Modify:
            }
          const p = e.node.path.includes("/") ? Object(C.e)(e.node.path) : T.a, d = o[p];
          if (d)
            switch (e.eventType) {
              case O.a.Create:
                const h = e.node.path.split("/").pop();
                if (!h) throw new Error("Expected filename");

                const b = [].concat(
                    Object(g.a)(
                      d.children.filter(e => {
                        return e.filename !== h;
                      })
                    ),
                    [{ type: e.node.type, filename: h }]
                  );

                let v = !0;
                let y = !1;
                let x = void 0;
                try {
                  for (
                    var w, k = m()(d.listeners);
                    !(v = (w = k.next()).done);
                    v = !0
                  ) {
                    (0, w.value.onChange)(b);
                  }
                } catch (G) {
                  (y = !0), (x = G);
                } finally {
                  try {
                    v || null == k.return || k.return();
                  } finally {
                    if (y) throw x;
                  }
                }
                d.children = b;
                break;
              case O.a.Move:
                const E = d.children.filter(r => {
                    return r.filename !== e.node.path;
                  });

                let j = !0;
                let D = !1;
                let S = void 0;
                try {
                  for (
                    var N, R = m()(d.listeners);
                    !(j = (N = R.next()).done);
                    j = !0
                  ) {
                    (0, N.value.onChange)(E);
                  }
                } catch (G) {
                  (D = !0), (S = G);
                } finally {
                  try {
                    j || null == R.return || R.return();
                  } finally {
                    if (D) throw S;
                  }
                }
                d.children = E;
                const F = e.to.split("/").slice(0, -1).join("/"), _ = o[F];
                if (!_) return;
                const I = { filename: e.node.path, type: e.node.type };
                const L = [].concat(Object(g.a)(_.children), [I]);
                let U = !0;
                let A = !1;
                let P = void 0;
                try {
                  for (
                    var M, B = m()(_.listeners);
                    !(U = (M = B.next()).done);
                    U = !0
                  ) {
                    (0, M.value.onChange)(L);
                  }
                } catch (G) {
                  (A = !0), (P = G);
                } finally {
                  try {
                    U || null == B.return || B.return();
                  } finally {
                    if (A) throw P;
                  }
                }
                _.children = L;
                break;
              case O.a.Delete:
                const z = e.node.path.split("/").pop();

                const q = d.children.filter(e => {
                  return e.filename !== z;
                });

                let V = !0;
                let X = !1;
                let Y = void 0;
                try {
                  for (
                    var H, K = m()(d.listeners);
                    !(V = (H = K.next()).done);
                    V = !0
                  ) {
                    (0, H.value.onChange)(q);
                  }
                } catch (G) {
                  (X = !0), (Y = G);
                } finally {
                  try {
                    V || null == K.return || K.return();
                  } finally {
                    if (X) throw Y;
                  }
                }
                d.children = q;
                break;
              default:
                throw new Error("unknown event");
            }
        }
        t.openChannel(
          {
            service(e) {
              return e.repl.currentUserPermissions.containerWrite
                ? "gcsfiles"
                : "files";
            },
          },
          e => {
            const t = e.error, n = e.channel;
            if (!t) {
              if (!n) throw new Error("Expected channel");
              return r(n),
              () => {
                a = new k.a(e => {
                  return (r = e);
                });
              }
            ;
            }
          }
        );
        const s = {
          watchDir(e, r) {
            let t = !1;

            const i = function r() {
              (t = !0),
                o[e] &&
                  ((o[e].listeners = o[e].listeners.filter(e => {
                    return e.dispose !== r;
                  })),
                  0 === o[e].listeners.length && delete o[e]);
            };

            return s
              .readDir(e)
              .then(a => {
                if (!t) {
                  if (a.error) {
                    const c = new Error(a.error);
                    return (c.code = a.error), r.onError(c), void i();
                  }
                  o[e] ||
                    ((o[e] = {
                      path: e,
                      type: O.d.Directory,
                      children: a.children,
                      listeners: [],
                    }),
                    n && n.send({ subscribeFile: { files: [{ path: e }] } })),
                    o[e].listeners.push(ne({}, r, { dispose: i })),
                    r.onChange(a.children);
                }
              })
              .catch(e => {
                i(), r.onError(e);
              }),
            i;
          },
          writeFile(e, r) {
            let t, n, o;
            return h.a.async(i => {
              for (;;)
                switch ((i.prev = i.next)) {
                  case 0:
                    return (i.next = 2), h.a.awrap(a);
                  case 2:
                    return (
                      (t = i.sent),
                      (i.next = 5),
                      h.a.awrap(
                        t.request({ write: { path: e, content: r.toBuffer() } })
                      )
                    );
                  case 5:
                    if (!(n = i.sent).channelClosed) {
                      i.next = 8;
                      break;
                    }
                    return i.abrupt("return", ae(s.writeFile, e, r));
                  case 8:
                    if (!n.error) {
                      i.next = 14;
                      break;
                    }
                    if (
                      ((o = null),
                      n.error.includes("not a directory")
                        ? (o = O.e.NotDirectory)
                        : n.error.includes("file exists") &&
                          (o = O.e.IsDirectory),
                      o)
                    ) {
                      i.next = 13;
                      break;
                    }
                    throw new Error(n.error);
                  case 13:
                    return i.abrupt("return", { error: o });
                  case 14:
                    return (
                      c({
                        eventType: O.a.Create,
                        node: { path: e, type: O.d.File },
                      }),
                      i.abrupt("return", { error: null })
                    );
                  case 16:
                  case "end":
                    return i.stop();
                }
            });
          },
          readFile(e) {
            let r, t, n;
            return h.a.async(o => {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    return (o.next = 2), h.a.awrap(a);
                  case 2:
                    return (
                      (r = o.sent),
                      (o.next = 5),
                      h.a.awrap(r.request({ read: { path: e } }))
                    );
                  case 5:
                    if (!(t = o.sent).channelClosed) {
                      o.next = 8;
                      break;
                    }
                    return o.abrupt("return", ae(s.readFile, e));
                  case 8:
                    if (!t.error) {
                      o.next = 14;
                      break;
                    }
                    if (
                      ((n = null),
                      oe(t.error)
                        ? (n = O.e.NotFound)
                        : t.error.includes("is a directory") &&
                          (n = O.e.IsDirectory),
                      n)
                    ) {
                      o.next = 13;
                      break;
                    }
                    throw new Error(t.error);
                  case 13:
                    return o.abrupt("return", { error: n });
                  case 14:
                    if (t.file && t.file.path && t.file.content) {
                      o.next = 16;
                      break;
                    }
                    throw new Error("Expected file");
                  case 16:
                    return o.abrupt("return", {
                      content: E.a.from(t.file.content),
                      error: null,
                    });
                  case 17:
                  case "end":
                    return o.stop();
                }
            });
          },
          createDir(e) {
            let r, t, n;
            return h.a.async(o => {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    return (o.next = 2), h.a.awrap(a);
                  case 2:
                    return (
                      (r = o.sent),
                      (o.next = 5),
                      h.a.awrap(r.request({ mkdir: { path: e } }))
                    );
                  case 5:
                    if (!(t = o.sent).channelClosed) {
                      o.next = 8;
                      break;
                    }
                    return o.abrupt("return", ae(s.createDir, e));
                  case 8:
                    if (!t.error) {
                      o.next = 14;
                      break;
                    }
                    if (
                      ((n = null),
                      t.error.includes("not a directory") &&
                        (n = O.e.NotDirectory),
                      n)
                    ) {
                      o.next = 13;
                      break;
                    }
                    throw new Error(t.error);
                  case 13:
                    return o.abrupt("return", { error: n });
                  case 14:
                    return (
                      c({
                        eventType: O.a.Create,
                        node: { path: e, type: O.d.Directory },
                      }),
                      o.abrupt("return", { error: null })
                    );
                  case 16:
                  case "end":
                    return o.stop();
                }
            });
          },
          moveDir(e, r) {
            let t, n, o;
            return h.a.async(i => {
              for (;;)
                switch ((i.prev = i.next)) {
                  case 0:
                    return (i.next = 2), h.a.awrap(a);
                  case 2:
                    return (
                      (t = i.sent),
                      (i.next = 5),
                      h.a.awrap(t.request({ move: { oldPath: e, newPath: r } }))
                    );
                  case 5:
                    if (!(n = i.sent).channelClosed) {
                      i.next = 8;
                      break;
                    }
                    return i.abrupt("return", ae(s.moveDir, e, r));
                  case 8:
                    if (!n.error) {
                      i.next = 13;
                      break;
                    }
                    if ((o = ie(n.error))) {
                      i.next = 12;
                      break;
                    }
                    throw new Error(n.error);
                  case 12:
                    return i.abrupt("return", { error: o });
                  case 13:
                    return (
                      c({
                        eventType: O.a.Create,
                        node: { path: r, type: O.d.Directory },
                      }),
                      c({
                        eventType: O.a.Delete,
                        node: { path: e, type: O.d.Directory },
                      }),
                      i.abrupt("return", { error: null })
                    );
                  case 16:
                  case "end":
                    return i.stop();
                }
            });
          },
          moveFile(e, r) {
            let t, n, o;
            return h.a.async(i => {
              for (;;)
                switch ((i.prev = i.next)) {
                  case 0:
                    return (i.next = 2), h.a.awrap(a);
                  case 2:
                    return (
                      (t = i.sent),
                      (i.next = 5),
                      h.a.awrap(t.request({ move: { oldPath: e, newPath: r } }))
                    );
                  case 5:
                    if (!(n = i.sent).channelClosed) {
                      i.next = 8;
                      break;
                    }
                    return i.abrupt("return", ae(s.moveFile, e, r));
                  case 8:
                    if (!n.error) {
                      i.next = 13;
                      break;
                    }
                    if ((o = ie(n.error))) {
                      i.next = 12;
                      break;
                    }
                    throw new Error(n.error);
                  case 12:
                    return i.abrupt("return", { error: o });
                  case 13:
                    return (
                      c({
                        eventType: O.a.Create,
                        node: { path: r, type: O.d.File },
                      }),
                      c({
                        eventType: O.a.Delete,
                        node: { path: e, type: O.d.File },
                      }),
                      i.abrupt("return", { error: null })
                    );
                  case 16:
                  case "end":
                    return i.stop();
                }
            });
          },
          deleteFile(e) {
            let r, t, n;
            return h.a.async(o => {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    return (o.next = 2), h.a.awrap(a);
                  case 2:
                    return (
                      (r = o.sent),
                      (o.next = 5),
                      h.a.awrap(r.request({ remove: { path: e } }))
                    );
                  case 5:
                    if (!(t = o.sent).channelClosed) {
                      o.next = 8;
                      break;
                    }
                    return o.abrupt("return", ae(s.deleteFile, e));
                  case 8:
                    if (!t.error) {
                      o.next = 14;
                      break;
                    }
                    if (((n = null), oe(t.error) && (n = O.e.NotFound), n)) {
                      o.next = 13;
                      break;
                    }
                    throw new Error(t.error);
                  case 13:
                    return o.abrupt("return", { error: n });
                  case 14:
                    return (
                      c({
                        eventType: O.a.Delete,
                        node: { path: e, type: O.d.File },
                      }),
                      o.abrupt("return", { error: null })
                    );
                  case 16:
                  case "end":
                    return o.stop();
                }
            });
          },
          deleteDir(e) {
            let r, t, n;
            return h.a.async(o => {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    return (o.next = 2), h.a.awrap(a);
                  case 2:
                    return (
                      (r = o.sent),
                      (o.next = 5),
                      h.a.awrap(r.request({ remove: { path: e } }))
                    );
                  case 5:
                    if (!(t = o.sent).channelClosed) {
                      o.next = 8;
                      break;
                    }
                    return o.abrupt("return", ae(s.deleteDir, e));
                  case 8:
                    if (!t.error) {
                      o.next = 14;
                      break;
                    }
                    if (((n = null), oe(t.error) && (n = O.e.NotFound), n)) {
                      o.next = 13;
                      break;
                    }
                    throw new Error(t.error);
                  case 13:
                    return o.abrupt("return", { error: n });
                  case 14:
                    return (
                      c({
                        eventType: O.a.Delete,
                        node: { path: e, type: O.d.Directory },
                      }),
                      o.abrupt("return", { error: null })
                    );
                  case 16:
                  case "end":
                    return o.stop();
                }
            });
          },
          readDir(e) {
            let r, t, n, o, i;
            return h.a.async(c => {
              for (;;)
                switch ((c.prev = c.next)) {
                  case 0:
                    return (c.next = 2), h.a.awrap(a);
                  case 2:
                    return (
                      (t = c.sent),
                      (c.next = 5),
                      h.a.awrap(t.request({ readdir: { path: e } }))
                    );
                  case 5:
                    if (!(n = c.sent).channelClosed) {
                      c.next = 8;
                      break;
                    }
                    return c.abrupt("return", ae(s.readDir, e));
                  case 8:
                    if (!n.error) {
                      c.next = 14;
                      break;
                    }
                    if (
                      ((o = null),
                      oe(n.error)
                        ? (o = O.e.NotFound)
                        : n.error.includes("not a directory") &&
                          (o = O.e.NotDirectory),
                      o)
                    ) {
                      c.next = 13;
                      break;
                    }
                    throw new Error(n.error);
                  case 13:
                    return c.abrupt("return", { error: o });
                  case 14:
                    if (
                      null === (r = n.files) || void 0 === r ? void 0 : r.files
                    ) {
                      c.next = 16;
                      break;
                    }
                    throw new Error("Expected filesChannel");
                  case 16:
                    return (i = n.files.files.map(e => {
                      if (!e.path) throw new Error("Expected path");
                      return {
                        filename: e.path,
                        type:
                          e.type === D.api.File.Type.DIRECTORY
                            ? O.d.Directory
                            : O.d.File,
                      };
                    })),
                    c.abrupt("return", { children: i, error: null })
                  ;
                  case 18:
                  case "end":
                    return c.stop();
                }
            });
          },
          stat(e) {
            let r, t;
            return h.a.async(n => {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (n.next = 2), h.a.awrap(a);
                  case 2:
                    return (
                      (r = n.sent),
                      (n.next = 5),
                      h.a.awrap(r.request({ stat: { path: e } }))
                    );
                  case 5:
                    if (!(t = n.sent).channelClosed) {
                      n.next = 8;
                      break;
                    }
                    return n.abrupt("return", ae(s.stat, e));
                  case 8:
                    if (!t.error) {
                      n.next = 10;
                      break;
                    }
                    throw new Error(t.error);
                  case 10:
                    if (t.statRes) {
                      n.next = 12;
                      break;
                    }
                    throw new Error("expected stat result");
                  case 12:
                    if (t.statRes.exists) {
                      n.next = 14;
                      break;
                    }
                    return n.abrupt("return", { exists: !1 });
                  case 14:
                    if (t.statRes.type !== D.api.File.Type.DIRECTORY) {
                      n.next = 16;
                      break;
                    }
                    return n.abrupt("return", {
                      exists: !0,
                      type: O.d.Directory,
                      lastModified: new Date(1e3 * t.statRes.modTime),
                    });
                  case 16:
                    return n.abrupt("return", {
                      exists: !0,
                      type: O.d.File,
                      lastModified: new Date(1e3 * t.statRes.modTime),
                      byteLength: Number(t.statRes.size),
                    });
                  case 17:
                  case "end":
                    return n.stop();
                }
            });
          },
          watchOtFile(e, r) {
            i[e] ||
              (i[e] = {
                path: e,
                type: O.d.File,
                listeners: [],
                otClient: new re(e, t),
              });
            const n = i[e].otClient,
                  o = () => {
                    let e;
                    return null === (e = r.onStatusChange) || void 0 === e
                      ? void 0
                      : e.call(r, O.c.Dirty);
                  };
            n.on("fileDirty", o);
            const a = () => {
              let e;
              return null === (e = r.onStatusChange) || void 0 === e
                ? void 0
                : e.call(r, O.c.Clean);
            };
            n.on("commitClean", a);
            const c = () => {
              let e;
              return null === (e = r.onStatusChange) || void 0 === e
                ? void 0
                : e.call(r, O.c.Syncing);
            };
            n.on("commitStart", c);
            const s = e => {
              r.onError && r.onError(e), p();
            };
            n.on("error", s);

            const u = t => {
                n.writeOps(t);
                let o = !0, a = !1, c = void 0;
                try {
                  for (
                    var s, u = m()(i[e].listeners);
                    !(o = (s = u.next()).done);
                    o = !0
                  ) {
                    const l = s.value.onChange;
                    l &&
                      l !== r.onChange &&
                      l({ ops: t, changeSource: O.b.Local });
                  }
                } catch (f) {
                  (a = !0), (c = f);
                } finally {
                  try {
                    o || null == u.return || u.return();
                  } finally {
                    if (a) throw c;
                  }
                }
              };

            let l = !1;
            -1 !== n.version &&
              setTimeout(() => {
                let e;
                l ||
                  null === (e = r.onReady) ||
                  void 0 === e ||
                  e.call(r, {
                    initialContent: E.a.from(n.getLocalContent()),
                    writeOps: u,
                    fetchOps: n.fetchOps,
                    version: n.version,
                  });
              });
            var f = e => {
              let t, o;
              if (!l)
                return (
                  (l = !0),
                  void (
                    null === (o = r.onReady) ||
                    void 0 === o ||
                    o.call(r, {
                      initialContent: E.a.from(n.getLocalContent()),
                      writeOps: u,
                      fetchOps: n.fetchOps,
                      version: n.version,
                    })
                  )
                );
              null === (t = r.onChange) ||
                void 0 === t ||
                t.call(r, { ops: e, changeSource: O.b.Container });
            };
            n.on("op", f);
            var p = function r() {
              i[e] &&
                ((l = !0),
                n.removeListener("fileDirty", o),
                n.removeListener("commitClean", a),
                n.removeListener("commitStart", c),
                n.removeListener("error", s),
                n.removeListener("op", f),
                (i[e].listeners = i[e].listeners.filter(e => {
                  return e.dispose !== r;
                })),
                0 === i[e].listeners.length &&
                  (i[e].otClient.destroy(), delete i[e]));
            };
            return i[e].listeners.push(ne({}, r, { dispose: p })), p;
          },
        };
        return s;
      }
      t.d(r, "a", () => {
        return ce;
      });
    },
    VZNv(e, r, t) {
      "use strict";
      t.d(r, "a", () => {
        return f;
      });
      const n = t("ln6h"), o = t.n(n), i = t("0gYX"), a = t.n(i), c = t("5/z4"), s = t("HADy"), u = t("Fz/E"), l = t("6bXu");
      function f(e) {
        const r = e.container;
        const t = e.beforeRun;
        const n = Object(u.a)();
        let i = null;
        let f = s.b.OFFLINE;
        let p = "none";
        let d = !1;
        let h = Math.random();
        function b() {
          const e = e => {
            f !== e && ((f = e), n.emit(s.a.STATE_CHANGE, f));
          };
          e(
            i
              ? d
                ? s.b.STOPPING
                : "none" === p
                ? s.b.IDLE
                : s.b.RUNNING
              : s.b.OFFLINE
          );
        }
        return r.openChannel(
          {
            name: "shellrunner",
            service: "shellrun2",
            skip(e) {
              let r;
              const t = e.repl;
              return (
                !Object(l.a)() ||
                ((r = t.language),
                !(
                  !0 === a.a.usesInterpreter(r) ||
                  !1 !== a.a.usesRunProject(r)
                ))
              );
            },
          },
          e => {
            const r = e.channel;
            if (!e.error) {
              if (!r) throw new Error("Expected error");
              return (i = r),
              b(),
              r.onCommand(e => {
                switch (e.body) {
                  case "state":
                    const r = e.state === c.api.State.Stopped;
                    d && r && (d = !1),
                      r ? "server" === p && (p = "none") : (p = "server"),
                      b();
                    break;
                  case "output":
                    n.emit(s.a.OUTPUT, e.output);
                }
              }),
              () => {
                (p = "none"), (d = !1), (i = null), b();
              };
            }
          }
        ),
        {
          run() {
            let e;
            return o.a.async(r => {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    if (f === s.b.IDLE) {
                      r.next = 2;
                      break;
                    }
                    throw new Error(
                      "Cannot run while state is not IDLE, got state: " + f
                    );
                  case 2:
                    return (
                      (e = Math.random()),
                      (h = e),
                      (p = "before-run"),
                      b(),
                      (r.next = 8),
                      o.a.awrap(t())
                    );
                  case 8:
                    if (h === e) {
                      r.next = 10;
                      break;
                    }
                    return r.abrupt("return");
                  case 10:
                    if ("none" !== p) {
                      r.next = 12;
                      break;
                    }
                    return r.abrupt("return");
                  case 12:
                    if ("server" !== p) {
                      r.next = 14;
                      break;
                    }
                    return r.abrupt("return");
                  case 14:
                    if (i) {
                      r.next = 16;
                      break;
                    }
                    throw new Error(
                      "State is RUNNING but shellrunner is null?"
                    );
                  case 16:
                    (p = "optimistic"), i.send({ runMain: {} });
                  case 18:
                  case "end":
                    return r.stop();
                }
            });
          },
          stopRun() {
            if (f !== s.b.RUNNING)
              throw new Error(
                "stopRun must be called when running but got ".concat(f)
              );
            if (!i)
              throw new Error("State is RUNNING but shellrunner is null?");
            if ("before-run" === p) return (p = "none"), void b();
            (p = "none"), (d = !0), b(), i.send({ clear: {} });
          },
          sendInput(e) {
            return o.a.async(r => {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    if (f === s.b.IDLE || f === s.b.RUNNING) {
                      r.next = 2;
                      break;
                    }
                    throw new Error(
                      "Can only send input when running or idle"
                    );
                  case 2:
                    if (i) {
                      r.next = 4;
                      break;
                    }
                    throw new Error(
                      "State is not OFFLINE but shellrunner is null?"
                    );
                  case 4:
                    i.send({ input: e });
                  case 5:
                  case "end":
                    return r.stop();
                }
            });
          },
          resizeTerminal(e) {
            if (!i)
              throw new Error("resizeTerminal must be called when online");
            i.send({ resizeTerm: e });
          },
          onOutput(e) {
            return n.on(s.a.OUTPUT, e),
            () => {
              n.removeListener(s.a.OUTPUT, e);
            }
          ;
          },
          onStateChanged(e) {
            return n.on(s.a.STATE_CHANGE, e),
            () => {
              n.removeListener(s.a.STATE_CHANGE, e);
            }
          ;
          },
          getRunState() {
            return f;
          },
        };
      }
    },
    Z5Wq(e, r, t) {
      "use strict";
      t("hfKm")(r, "__esModule", { value: !0 }),
        (r.strPosToUni = function (e) {
          for (
            var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : e.length,
              t = 0,
              n = 0;
            n < r;
            n++
          ) {
            const o = e.charCodeAt(n);
            o >= 55296 && o <= 57343 && (t++, n++);
          }
          if (n !== r) throw Error("Invalid offset - splits unicode bytes");
          return n - t;
        }),
        (r.uniToStrPos = (e, r) => {
          for (var t = 0; r > 0; r--) {
            const n = e.charCodeAt(t);
            t += n >= 55296 && n <= 57343 ? 2 : 1;
          }
          return t;
        });
    },
    cC09(e, r, t) {
      let n;
      (n = e => {
        e.version = "1.2.0";
        const r = (() => {
          for (var e = 0, r = new Array(256), t = 0; 256 != t; ++t)
            (e =
              1 &
              (e =
                1 &
                (e =
                  1 &
                  (e =
                    1 &
                    (e =
                      1 &
                      (e =
                        1 &
                        (e =
                          1 &
                          (e = 1 & (e = t) ? -306674912 ^ (e >>> 1) : e >>> 1)
                            ? -306674912 ^ (e >>> 1)
                            : e >>> 1)
                          ? -306674912 ^ (e >>> 1)
                          : e >>> 1)
                        ? -306674912 ^ (e >>> 1)
                        : e >>> 1)
                      ? -306674912 ^ (e >>> 1)
                      : e >>> 1)
                    ? -306674912 ^ (e >>> 1)
                    : e >>> 1)
                  ? -306674912 ^ (e >>> 1)
                  : e >>> 1)
                ? -306674912 ^ (e >>> 1)
                : e >>> 1),
              (r[t] = e);
          return "undefined" !== typeof Int32Array ? new Int32Array(r) : r;
        })();
        (e.table = r),
          (e.bstr = (e, t) => {
            for (var n = -1 ^ t, o = e.length - 1, i = 0; i < o; )
              n =
                ((n = (n >>> 8) ^ r[255 & (n ^ e.charCodeAt(i++))]) >>> 8) ^
                r[255 & (n ^ e.charCodeAt(i++))];
            return (
              i === o && (n = (n >>> 8) ^ r[255 & (n ^ e.charCodeAt(i))]),
              -1 ^ n
            );
          }),
          (e.buf = (e, t) => {
            if (e.length > 1e4)
              return ((e, t) => {
                for (var n = -1 ^ t, o = e.length - 7, i = 0; i < o; )
                  n =
                    ((n =
                      ((n =
                        ((n =
                          ((n =
                            ((n =
                              ((n =
                                ((n = (n >>> 8) ^ r[255 & (n ^ e[i++])]) >>>
                                  8) ^
                                r[255 & (n ^ e[i++])]) >>>
                                8) ^
                              r[255 & (n ^ e[i++])]) >>>
                              8) ^
                            r[255 & (n ^ e[i++])]) >>>
                            8) ^
                          r[255 & (n ^ e[i++])]) >>>
                          8) ^
                        r[255 & (n ^ e[i++])]) >>>
                        8) ^
                      r[255 & (n ^ e[i++])]) >>>
                      8) ^
                    r[255 & (n ^ e[i++])];
                for (; i < o + 7; ) n = (n >>> 8) ^ r[255 & (n ^ e[i++])];
                return -1 ^ n;
              })(e, t);
            for (var n = -1 ^ t, o = e.length - 3, i = 0; i < o; )
              n =
                ((n =
                  ((n =
                    ((n = (n >>> 8) ^ r[255 & (n ^ e[i++])]) >>> 8) ^
                    r[255 & (n ^ e[i++])]) >>>
                    8) ^
                  r[255 & (n ^ e[i++])]) >>>
                  8) ^
                r[255 & (n ^ e[i++])];
            for (; i < o + 3; ) n = (n >>> 8) ^ r[255 & (n ^ e[i++])];
            return -1 ^ n;
          }),
          (e.str = (e, t) => {
            for (var n, o, i = -1 ^ t, a = 0, c = e.length; a < c; )
              (n = e.charCodeAt(a++)) < 128
                ? (i = (i >>> 8) ^ r[255 & (i ^ n)])
                : n < 2048
                ? (i =
                    ((i =
                      (i >>> 8) ^ r[255 & (i ^ (192 | ((n >> 6) & 31)))]) >>>
                      8) ^
                    r[255 & (i ^ (128 | (63 & n)))])
                : n >= 55296 && n < 57344
                ? ((n = 64 + (1023 & n)),
                  (o = 1023 & e.charCodeAt(a++)),
                  (i =
                    ((i =
                      ((i =
                        ((i =
                          (i >>> 8) ^ r[255 & (i ^ (240 | ((n >> 8) & 7)))]) >>>
                          8) ^
                        r[255 & (i ^ (128 | ((n >> 2) & 63)))]) >>>
                        8) ^
                      r[
                        255 & (i ^ (128 | ((o >> 6) & 15) | ((3 & n) << 4)))
                      ]) >>>
                      8) ^
                    r[255 & (i ^ (128 | (63 & o)))]))
                : (i =
                    ((i =
                      ((i =
                        (i >>> 8) ^ r[255 & (i ^ (224 | ((n >> 12) & 15)))]) >>>
                        8) ^
                      r[255 & (i ^ (128 | ((n >> 6) & 63)))]) >>>
                      8) ^
                    r[255 & (i ^ (128 | (63 & n)))]);
            return -1 ^ i;
          });
      }),
        "undefined" === typeof DO_NOT_EXPORT_CRC ? n(r) : n({});
    },
    "cHV+": function (e, r, t) {
      "use strict";
      const n = t("Qetd"),
            o = t("hfKm"),
            i =
              (this && this.__importDefault) ||
              (e => {
                return e && e.__esModule ? e : { default: e };
              });
      o(r, "__esModule", { value: !0 });
      const a = t("Z5Wq"),
            c = i(t("HtvZ")),
            s = i(t("qpVQ")),
            u = {
              create(e) {
                return e;
              },
              toString(e) {
                return e;
              },
              builder(e) {
                if ("string" !== typeof e)
                  throw Error("Invalid document snapshot: " + e);
                const r = [];
                return {
                  skip(t) {
                    const n = a.uniToStrPos(e, t);
                    if (n > e.length)
                      throw Error("The op is too long for this document");
                    r.push(e.slice(0, n)), (e = e.slice(n));
                  },
                  append(e) {
                    r.push(e);
                  },
                  del(r) {
                    e = e.slice(a.uniToStrPos(e, r));
                  },
                  build() {
                    return r.join("") + e;
                  },
                };
              },
            },
            l = n({}, c.default(u), { api: s.default });
      r.type = l;
      const f = t("HtvZ");
      r.makeType = f.default;
    },
    gfZM(e, r, t) {
      "use strict";
      ((e => {
        const n = t("0iUn"),
              o = t("sLSF"),
              i = (() => {
                function r(t, o) {
                  if (
                    (Object(n.a)(this, r),
                    (this.asEncoding = {}),
                    (this.asBuffer = null),
                    o && "string" === typeof t)
                  )
                    this.asEncoding[o] = t;
                  else if (void 0 === t || null === t) this.asBuffer = e.alloc(0);
                  else if (t instanceof e) this.asBuffer = t;
                  else if ("string" === typeof t) this.asEncoding.utf8 = t;
                  else if (t instanceof ArrayBuffer) this.asBuffer = e.from(t);
                  else {
                    if (t instanceof r) return t;
                    t instanceof Uint8Array
                      ? (this.asBuffer = e.from(t))
                      : "object" === typeof t &&
                        "object" === typeof t.asEncoding &&
                        null !== t.asEncoding &&
                        (t.asBuffer instanceof e || null === t.asBuffer) &&
                        ((this.asBuffer = t.asBuffer || null),
                        "string" === typeof t.asEncoding.base64 &&
                          (this.asEncoding = { base64: t.asEncoding.base64 }),
                        "string" === typeof t.asEncoding.utf8 &&
                          (this.asEncoding = { utf8: t.asEncoding.utf8 }));
                  }
                }
                return Object(o.a)(r, null, [
                  {
                    key: "from",
                    value(e, t) {
                      return new r(e, t);
                    },
                  },
                  {
                    key: "isBuffer",
                    value(e) {
                      return e instanceof r;
                    },
                  },
                ]),
                Object(o.a)(r, [
                  {
                    key: "toString",
                    value() {
                      const e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "utf8";
                      if (void 0 !== this.asEncoding[e])
                        return this.asEncoding[e];
                      const r = this.toBuffer(), t = r.toString(e);
                      return (this.asEncoding[e] = t), t;
                    },
                  },
                  {
                    key: "toJSON",
                    value() {
                      return {
                        asEncoding: { base64: this.toString("base64") },
                        asBuffer: null,
                      };
                    },
                  },
                  {
                    key: "toBuffer",
                    value() {
                      if (this.asBuffer) return this.asBuffer;
                      for (const r in this.asEncoding) {
                        const t = this.asEncoding[r];
                        if ("string" === typeof t) {
                          const n = e.from(t, r);
                          return (this.asBuffer = n), n;
                        }
                      }
                      return (this.asBuffer = e.alloc(0)), this.asBuffer;
                    },
                  },
                  {
                    key: "length",
                    get() {
                      return void 0 !== this.asEncoding.utf8
                        ? this.asEncoding.utf8.length
                        : this.toBuffer().length;
                    },
                  },
                ]),
                r;
              })();
        r.a = i;
      }).call(this, t("HDXh").Buffer));
    },
    qpVQ(e, r, t) {
      "use strict";
      t("hfKm")(r, "__esModule", { value: !0 });
      const n = t("Z5Wq");
      function o(e, r) {
        return {
          get: e,
          getLength() {
            return e().length;
          },
          insert(t, o, i) {
            const a = n.strPosToUni(e(), t);
            return r([a, o], i);
          },
          remove(t, o, i) {
            const a = n.strPosToUni(e(), t);
            return r([a, { d: o }], i);
          },
          _onOp(e) {
            for (let r = 0, t = 0; t < e.length; t++) {
              const n = e[t];
              switch (typeof n) {
                case "number":
                  (r += n), n;
                  break;
                case "string":
                  this.onInsert && this.onInsert(r, n), (r += n.length);
                  break;
                case "object":
                  this.onRemove && this.onRemove(r, n.d), n.d;
              }
            }
          },
          onInsert: null,
          onRemove: null,
        };
      }
      (r.default = o), (o.provides = { text: !0 });
    },
    tidx(e, r, t) {
      "use strict";
      t.d(r, "a", () => {
        return D;
      });
      const n = t("hfKm"), o = t.n(n), i = t("2Eek"), a = t.n(i), c = t("XoMD"), s = t.n(c), u = t("Jo+v"), l = t.n(u), f = t("4mXO"), p = t.n(f), d = t("pLtp"), h = t.n(d), b = t("vYYK"), v = t("0iUn"), m = t("sLSF"), g = t("MI3g"), y = t("a7VT"), x = t("Tit0"), w = t("MX0m"), k = t.n(w), E = t("q1tI"), O = t("xom/"), C = t("2tbh"), j = E.createElement;
      function T(e, r) {
        const t = h()(e);
        if (p.a) {
          let n = p()(e);
          r &&
            (n = n.filter(r => {
              return l()(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      var D = (e => {
        function r() {
          let e, t;
          Object(v.a)(this, r);
          for (var n = arguments.length, i = new Array(n), c = 0; c < n; c++)
            i[c] = arguments[c];
          return ((t = Object(g.a)(
            this,
            (e = Object(y.a)(r)).call.apply(e, [this].concat(i))
          )).state = { isLogin: !!t.props.showLoginFirst }),
          (t.handleChangeAuth = () => {
            t.setState(e => {
              return { isLogin: !e.isLogin };
            });
          }),
          (t.handleSubmit = e => {
            e.error && t.props.onFailure(e),
              e.user &&
                t.props.onSuccess(
                  (function (e) {
                    for (let r = 1; r < arguments.length; r++) {
                      const t = null != arguments[r] ? arguments[r] : {};
                      r % 2
                        ? T(Object(t), !0).forEach(r => {
                            Object(b.a)(e, r, t[r]);
                          })
                        : s.a
                        ? a()(e, s()(t))
                        : T(Object(t)).forEach(r => {
                            o()(e, r, l()(t, r));
                          });
                    }
                    return e;
                  })({}, e, { isLogin: t.state.isLogin })
                );
          }),
          t;
        }
        return Object(x.a)(r, e),
        Object(m.a)(r, [
          {
            key: "render",
            value() {
              const e = this;
              return j(
                "div",
                { className: "jsx-101910848 auth-modal" },
                j(
                  O.b,
                  { align: "center", spacing: 2 },
                  j(
                    "div",
                    { className: "jsx-101910848 auth-modal-title" },
                    this.props.title || "Sign up"
                  ),
                  j(
                    "div",
                    { className: "jsx-101910848 auth-modal-description" },
                    this.props.description ||
                      "Code, create, and learn together on Replit"
                  ),
                  j(C.a, {
                    onChangeAuth: this.handleChangeAuth,
                    isTeacher: this.props.isTeacher,
                    isLogin: this.state.isLogin,
                    onSubmit: this.handleSubmit,
                  }),
                  this.props.allowAnon &&
                    j(
                      "div",
                      { className: "jsx-101910848 auth-modal-anon" },
                      j(
                        "a",
                        {
                          onClick() {
                            return e.props.onSuccess();
                          },
                          className: "jsx-101910848",
                        },
                        "continue as Anonymous"
                      )
                    )
                ),
                j(k.a, { id: "101910848" }, [
                  ".auth-modal.jsx-101910848{max-width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:var(--spacing-4) var(--spacing-2);}",
                  ".title-container.jsx-101910848{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:var(--spacing-2);}",
                  ".auth-modal-title.jsx-101910848{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;color:var(--color-foreground-1);font-size:var(--font-size-desktop-heading-2);font-weight:var(--font-weight-medium);}",
                  ".auth-modal-description.jsx-101910848{text-align:center;color:var(--color-foreground-2);font-size:var(--font-size-deskptop-text-medium);}",
                  ".auth-modal-anon.jsx-101910848{margin-top:14px;font-size:14px;}",
                  ".auth-modal-anon.jsx-101910848 a.jsx-101910848{color:var(--color-primary-1);-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}",
                ])
              );
            },
          },
        ]),
        r;
      })(E.Component);
      D.defaultProps = {
        showLoginFirst: !1,
        isTeacher: !1,
        allowAnon: !1,
        onSuccess() {},
        onFailure() {},
      };
    },
  },
]);
//# sourceMappingURL=58e4bba5ccbfe7dd395274b9450459b1fc3befd4.dd56df190c581a2bb0c0.js.map
