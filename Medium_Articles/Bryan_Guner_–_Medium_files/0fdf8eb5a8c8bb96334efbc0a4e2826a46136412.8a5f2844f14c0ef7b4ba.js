(window.webpackJsonp = window.webpackJsonp || []).push([
  [30],
  {
    R84t(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return c;
      });
      const r = n("q1tI");
      const o = n.n(r);
      const a = n("pDQI");
      const i = o.a.createElement;
      function c(e) {
        return i(
          a.a,
          e,
          i("path", {
            d:
              "M20.25 11.567a.5.5 0 010 .866l-13.5 7.794a.5.5 0 01-.75-.433V4.206a.5.5 0 01.75-.433l13.5 7.794z",
          })
        );
      }
    },
    hzRC(e, t, n) {
      "use strict";
      const r = n("hfKm");
      const o = n.n(r);
      const a = n("2Eek");
      const i = n.n(a);
      const c = n("XoMD");
      const s = n.n(c);
      const u = n("Jo+v");
      const l = n.n(u);
      const d = n("4mXO");
      const f = n.n(d);
      const m = n("pLtp");
      const h = n.n(m);
      const p = n("kOwS");
      const g = n("vYYK");
      const x = n("doui");
      const v = n("qNsG");
      const y = n("MX0m");
      const b = n.n(y);
      const w = n("q1tI");
      const j = n("GRpk");
      const k = n("TSYQ");
      const O = n.n(k);
      const S = n("2wwy");
      const N = n.n(S);
      const E = n("XXOK");
      const C = n.n(E);
      const M = n("9/5/");
      const R = n.n(M);
      const T = n("Dtuc");
      const _ = n("/+LJ");
      const I = n("RB+8");
      const L = n("koLh");
      function P(e, t) {
        const n = h()(e);
        if (f.a) {
          let r = f()(e);
          t &&
            (r = r.filter(t => {
              return l()(e, t).enumerable;
            })),
            n.push(...r);
        }
        return n;
      }
      function z(e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? P(Object(n), !0).forEach(t => {
                Object(g.a)(e, t, n[t]);
              })
            : s.a
            ? i()(e, s()(n))
            : P(Object(n)).forEach(t => {
                o()(e, t, l()(n, t));
              });
        }
        return e;
      }
      function D(e) {
        return z({}, e, {
          theme: e.theme.includes("textmate") ? "replitLight" : "replitDark",
        });
      }
      function V({onChange, onCursorSelectionChange, onOptionsChange, initialOptions}) {
        const t = onChange;
        const n = onCursorSelectionChange;
        const r = onOptionsChange;
        const o = initialOptions;
        const a = void 0 === o ? {} : o;

        const i = (() => {
          const e = w.useState(null);
          const t = Object(x.a)(e, 2);
          const n = t[0];
          const r = t[1];
          return w.useEffect(() => {
            let e = !0;
            return Object(T.a)().then(t => {
              e && r(t);
            }),
            () => {
              e = !1;
            }
          ;
          }, []),
          n;
        })();

        const c = w.useState(0);
        const s = Object(x.a)(c, 2);
        const u = s[0];
        const l = s[1];
        const d = w.useState(null);
        const f = Object(x.a)(d, 2);
        const m = f[0];
        const h = f[1];
        const p = w.useState(null);
        const g = Object(x.a)(p, 2);
        const v = g[0];
        const y = g[1];
        const b = w.useRef(a);
        w.useEffect(
          () => {
            b.current = a;
          },
          [a]
        );
        const j = w.useRef(t);
        w.useEffect(
          () => {
            j.current = t;
          },
          [t]
        );
        const k = w.useRef(n);
        w.useEffect(
          () => {
            k.current = n;
          },
          [n]
        );
        const O = w.useRef(r);
        w.useEffect(
          () => {
            O.current = r;
          },
          [r]
        );

        const S = w.useCallback(e => {
                  null !== e && h(e);
                }, []);

        const E = Object(L.a)(
          ({width}) => {
            return l(width || 0);
          },
          { type: "throttle", wait: 100 }
        );

        return w.useEffect(
          () => {
            v && v.resize();
          },
          [u, v]
        ),
        w.useEffect(
          () => {
            m && E(m);
          },
          [m, E]
        ),
        w.useLayoutEffect(
          () => {
            if (i && m) {
              var e = i.edit(m);
              e.renderer.setHScrollBarAlwaysVisible(!1),
                e.setShowPrintMargin(!1),
                e.getSession().setUseWrapMode(!0);
              r(
                z(
                  {},
                  {
                    fontSize: "14px",
                    scrollPastEnd: 0.5,
                    enableBasicAutocompletion: !0,
                    newLineMode: "unix",
                    fontFamily:
                      "'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace",
                  },
                  {},
                  b.current,
                  { theme: b.current.theme || Object(I.d)() }
                ),
                { silent: !0 }
              );
              let t = !1;
              e.on("change", ({start, lines, action}) => {
                if (j.current && !t) {
                  const r = e
                            .getSession()
                            .getDocument()
                            .positionToIndex(start, 0);

                  const o = r > 0 ? [r] : [];
                  const a = lines.join("\n");
                  "insert" === action
                    ? (o.push(a), j.current({ value: e.getValue(), ops: o }))
                    : "remove" === action &&
                      (o.push({ d: a.length }),
                      j.current({ value: e.getValue(), ops: o }));
                }
              }),
                e.on(
                  "changeSelection",
                  R()(() => {
                    if (k.current && e.isFocused()) {
                      const t = e.getSession();
                      const n = e.getSelection();
                      const r = t.getDocument();
                      const o = n.getCursor();
                      const a = n.getRange();
                      k.current({
                        cursor: z({}, o, { index: r.positionToIndex(o) }),
                        range: {
                          start: z({}, a.start, {
                            index: r.positionToIndex(a.start),
                          }),
                          end: z({}, a.end, {
                            index: r.positionToIndex(a.end),
                          }),
                        },
                      });
                    }
                  }, 200)
                ),
                e.on("blur", () => {
                  k.current && k.current(null);
                });
              const n = t => {
                const n = e.getSession();
                const r = n.getDocument();
                const o = t.indexStart;
                const a = t.indexEnd;
                const c = t.color;
                const s = t.className || "";
                const u = void 0 !== t.opacity ? t.opacity : 0.2;

                const l = "position: absolute; background-color: "
                  .concat(c, "; opacity: ")
                  .concat(u, ";");

                const d = r.indexToPosition(o, 0);
                const f = r.indexToPosition(a, 0);

                const m = i.Range.fromPoints(
                  n.documentToScreenPosition(d),
                  n.documentToScreenPosition(f)
                );

                if (m.isEmpty())
                  return () => {
                    return null;
                  };
                const h = n.addDynamicMarker({
                  update(e, t) {
                    m.isMultiLine()
                      ? t.drawTextMarker(e, m, s, t.config, l)
                      : t.drawSingleLineMarker(e, m, s, t.config, 0, l);
                  },
                });
                return () => {
                  n.removeMarker(h.id);
                };
              };
              return y({
                writeOtOps(n) {
                  const r = e.getSession();
                  const o = r.getDocument();
                  t = !0;
                  let a = 0;
                  let c = !0;
                  let s = !1;
                  let u = void 0;
                  try {
                    for (
                      var l, d = C()(n);
                      !(c = (l = d.next()).done);
                      c = !0
                    ) {
                      const f = l.value;
                      if ("string" === typeof f)
                        r.insert(o.indexToPosition(a, 0), f),
                          (a += f.length);
                      else if (
                        "object" === typeof f &&
                        "number" === typeof f.d
                      ) {
                        const m = o.indexToPosition(a, 0);
                        const h = o.indexToPosition(a + f.d, 0);
                        const p = new i.Range(m.row, m.column, h.row, h.column);
                        r.remove(p);
                      } else "number" === typeof f && (a += f);
                    }
                  } catch (g) {
                    (s = !0), (u = g);
                  } finally {
                    try {
                      c || null == d.return || d.return();
                    } finally {
                      if (s) throw u;
                    }
                  }
                  t = !1;
                },
                focus() {
                  e.focus();
                },
                setValue(n) {
                  (t = !0), e.setValue(n, -1), (t = !1);
                },
                setPath(t) {
                  const n = Object(_.a)({ ace: i, path: t });
                  e.getSession().setMode(n);
                },
                setOptions: r,
                getOptions() {
                  return D(e.getOptions());
                },
                addCommand(t) {
                  return e.commands.addCommand(t),
                  () => {
                    e.commands.removeCommand(t);
                  }
                ;
                },
                removeCommand(t) {
                  e.commands.removeCommand(t);
                },
                setSelections(t) {
                  const r = e.getSession();
                  const o = r.getMarkers();
                  o &&
                    N()(o).forEach(({id}) => {
                      return r.removeMarker(id);
                    }),
                    t.forEach(n);
                },
                resize() {
                  e.resize();
                },
                getRenderer() {
                  return e.renderer;
                },
              }),
              () => {
                const t = i.require("ace/edit_session").EditSession;
                e.setSession(new t("")), e.destroy(), y(null);
              };
            }
            function r(t) {
              const n = (arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { silent: !1 }
              ).silent;
              e.setOptions((e => {
                return e.theme
                  ? z({}, e, { theme: Object(I.c)(e.theme) })
                  : e;
              })(t)),
                O.current && !n && O.current(D(e.getOptions()));
            }
          },
          [i, m]
        ),
        [v, S];
      }
      n.d(t, "b", () => {
        return B;
      }),
        n.d(t, "a", () => {
          return J;
        });
      const q = w.createElement;
      function X(e, t) {
        const n = h()(e);
        if (f.a) {
          let r = f()(e);
          t &&
            (r = r.filter(t => {
              return l()(e, t).enumerable;
            })),
            n.push(...r);
        }
        return n;
      }
      function B(e) {
        let t;
        const n = e.editorRef;
        const r = e.isLoading;
        const a = Object(v.a)(e, ["editorRef", "isLoading"]);

        const c = w.useState(
          Boolean(
            null === (t = a.initialOptions) || void 0 === t
              ? void 0
              : t.readOnly
          )
        );

        const u = Object(x.a)(c, 2);
        const d = u[0];
        const f = u[1];

        const m = V(
          (function (e) {
            for (let t = 1; t < arguments.length; t++) {
              const n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? X(Object(n), !0).forEach(t => {
                    Object(g.a)(e, t, n[t]);
                  })
                : s.a
                ? i()(e, s()(n))
                : X(Object(n)).forEach(t => {
                    o()(e, t, l()(n, t));
                  });
            }
            return e;
          })({}, a, {
            onOptionsChange(e) {
              f(e.readOnly), a.onOptionsChange && a.onOptionsChange(e);
            },
          })
        );

        const h = Object(x.a)(m, 2);
        const p = h[0];
        const y = h[1];
        return w.useEffect(
          () => {
            if (n)
              return n(p),
              () => {
                n(null);
              }
            ;
          },
          [n, p]
        ),
        q(
          "div",
          {
            className:
              `jsx-3040802251 ${O()("editor", { "is-read-only": d }) || ""}`,
          },
          q(K, { ref: y }),
          !p || r
            ? q("div", { className: "jsx-3040802251 loader" }, q(J, null))
            : null,
          q(b.a, { id: "3738224526" }, [
            ".editor.jsx-3040802251{position:relative;height:100%;width:100%;}",
            ".loader.jsx-3040802251{position:absolute;left:0;top:0;height:100%;width:100%;overflow:hidden;z-index:5;}",
            ".editor.is-read-only.jsx-3040802251 .ace_cursor{opacity:0 !important;}",
            ".editor.jsx-3040802251 .ace_content{line-height:1;}",
          ]),
          q(b.a, { id: "2666048492" }, [
            ".ace_editor{background-color:var(--color-background-1);border-radius:var(--border-radius-1);font-family:var(--font-family-monospace) !important;}",
            ".ace_content{background-color:var(--color-background-1) !important;}",
            ".ace_gutter{background-color:var(--color-background-1) !important;color:var(--color-foreground-3) !important;}",
            ".ace_gutter-cell{padding-right:var(--spacing-3) !important;padding-left:var(--spacing-1) !important;}",
            ".ace_placeholder{color:var(--color-foreground-1) !important;font-family:var(--font-family-monospace) !important;font-size:var(--font-size-desktop-text-small) !important;line-height:1 !important;-webkit-transform:none !important;-ms-transform:none !important;transform:none !important;}",
            ".ace-dracula .ace_marker-layer .ace_active-line{opacity:0.4;}",
            ".ace_gutter-active-line{background-color:transparent !important;}",
            ".ace_fold{background:var(--color-primary-transparent-1) !important;border:1px solid var(--color-primary-1) !important;border-radius:var(--border-radius-2) !important;-webkit-transition:-webkit-transform 0.1s;-webkit-transition:transform 0.1s;transition:transform 0.1s;}",
            ".ace_fold:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}",
          ])
        );
      }
      function J() {
        return q(
          "div",
          { className: "jsx-1258544441 loader" },
          q(
            j.a,
            {
              primaryColor: "var(--color-control-1)",
              secondaryColor: "var(--color-control-3)",
              uniquekey: "editorLoader",
            },
            q("rect", {
              x: "0",
              y: "0",
              rx: "3",
              ry: "3",
              width: "70",
              height: "10",
              className: "jsx-1258544441",
            }),
            q("rect", {
              x: "80",
              y: "0",
              rx: "3",
              ry: "3",
              width: "100",
              height: "10",
              className: "jsx-1258544441",
            }),
            q("rect", {
              x: "190",
              y: "0",
              rx: "3",
              ry: "3",
              width: "10",
              height: "10",
              className: "jsx-1258544441",
            }),
            q("rect", {
              x: "15",
              y: "20",
              rx: "3",
              ry: "3",
              width: "130",
              height: "10",
              className: "jsx-1258544441",
            }),
            q("rect", {
              x: "155",
              y: "20",
              rx: "3",
              ry: "3",
              width: "130",
              height: "10",
              className: "jsx-1258544441",
            }),
            q("rect", {
              x: "15",
              y: "40",
              rx: "3",
              ry: "3",
              width: "90",
              height: "10",
              className: "jsx-1258544441",
            }),
            q("rect", {
              x: "115",
              y: "40",
              rx: "3",
              ry: "3",
              width: "60",
              height: "10",
              className: "jsx-1258544441",
            }),
            q("rect", {
              x: "185",
              y: "40",
              rx: "3",
              ry: "3",
              width: "60",
              height: "10",
              className: "jsx-1258544441",
            }),
            q("rect", {
              x: "0",
              y: "60",
              rx: "3",
              ry: "3",
              width: "30",
              height: "10",
              className: "jsx-1258544441",
            }),
            q("rect", {
              x: "15",
              y: "80",
              rx: "3",
              ry: "3",
              width: "70",
              height: "10",
              className: "jsx-1258544441",
            }),
            q("rect", {
              x: "95",
              y: "80",
              rx: "3",
              ry: "3",
              width: "60",
              height: "10",
              className: "jsx-1258544441",
            }),
            q("rect", {
              x: "165",
              y: "80",
              rx: "3",
              ry: "3",
              width: "30",
              height: "10",
              className: "jsx-1258544441",
            }),
            q("rect", {
              x: "15",
              y: "100",
              rx: "3",
              ry: "3",
              width: "110",
              height: "10",
              className: "jsx-1258544441",
            }),
            q("rect", {
              x: "135",
              y: "100",
              rx: "3",
              ry: "3",
              width: "100",
              height: "10",
              className: "jsx-1258544441",
            }),
            q("rect", {
              x: "0",
              y: "120",
              rx: "3",
              ry: "3",
              width: "70",
              height: "10",
              className: "jsx-1258544441",
            })
          ),
          q(b.a, { id: "1258544441" }, [
            ".loader.jsx-1258544441{background-color:var(--color-background-1);padding:var(--spacing-2);overflow:hidden;height:100%;width:100%;opacity:0;-webkit-animation:fadeIn-jsx-1258544441 ease 0s forwards;animation:fadeIn-jsx-1258544441 ease 0s forwards;-webkit-animation-delay:200ms;animation-delay:200ms;}",
            ".loader.jsx-1258544441>svg{max-width:640px;min-width:500px;height:auto;}",
            "@media screen and (min-width:900px){.loader.jsx-1258544441{padding-left:var(--spacing-4);}}",
            "@-webkit-keyframes fadeIn-jsx-1258544441{0%{opacity:0;}100%{opacity:1;}}",
            "@keyframes fadeIn-jsx-1258544441{0%{opacity:0;}100%{opacity:1;}}",
          ])
        );
      }
      var K = w.forwardRef((e, t) => {
        return q(
          "div",
          Object(p.a)({ ref: t }, e, {
            className:
              `jsx-447081000 ${(e && null != e.className && e.className) || ""}`,
          }),
          q(b.a, { id: "447081000" }, [
            "div.jsx-447081000{position:relative;height:100%;}",
          ])
        );
      });
    },
  },
]);
//# sourceMappingURL=0fdf8eb5a8c8bb96334efbc0a4e2826a46136412.8a5f2844f14c0ef7b4ba.js.map
