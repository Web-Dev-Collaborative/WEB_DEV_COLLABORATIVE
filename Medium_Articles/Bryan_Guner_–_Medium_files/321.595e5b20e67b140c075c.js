(window.webpackJsonp = window.webpackJsonp || []).push([
  [321],
  {
    I8Nj(e, t, a) {
      "use strict";
      a.r(t);
      const n = a("XXOK"),
            i = a.n(n),
            o = a("d04V"),
            r = a.n(o),
            c = a("doui"),
            s = a("kOwS"),
            l = a("MX0m"),
            u = a.n(l),
            d = a("q1tI"),
            p = a("2lQ7"),
            b = a.n(p),
            m = a("+Jnw"),
            f = a("XmHG"),
            v = a("pP2D"),
            h = a("/MKj"),
            j = a("VcNk"),
            w = a("h7rM"),
            g = a("0iUn"),
            y = a("sLSF"),
            O = a("MI3g"),
            x = a("a7VT"),
            k = a("AT/M"),
            C = a("Tit0"),
            E = a("vYYK"),
            M = a("TSYQ"),
            N = a.n(M),
            I = a("UWUU"),
            _ = d.createElement,
            S = { replitDark: "replit-dark", replitLight: "replit-light" },
            T = { js: "javascript", nodejs: "javascript", py: "python" },
            P = (e => {
              function t() {
                let e, a;
                Object(g.a)(this, t);
                for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
                  i[o] = arguments[o];
                return (a = Object(O.a)(
                  this,
                  (e = Object(x.a)(t)).call.apply(e, [this].concat(i))
                )),
                Object(E.a)(Object(k.a)(a), "timeoutId", null),
                Object(E.a)(Object(k.a)(a), "textareaEl", void 0),
                Object(E.a)(Object(k.a)(a), "state", {
                  showCopy: !1,
                  showCopied: !1,
                }),
                Object(E.a)(Object(k.a)(a), "setTextAreaRef", e => {
                  return (a.textareaEl = e);
                }),
                Object(E.a)(Object(k.a)(a), "onCopy", () => {
                  a.textareaEl &&
                    (a.textareaEl.select(),
                    document.execCommand("copy"),
                    a.setState({ showCopied: !0 }),
                    (a.timeoutId = setTimeout(() => {
                      a.setState({ showCopied: !1 }),
                        a.timeoutId && clearTimeout(a.timeoutId);
                    }, 1e3)));
                }),
                a
              ;
              }
              return Object(C.a)(t, e),
              Object(y.a)(t, [
                {
                  key: "componentWillUnmount",
                  value() {
                    this.timeoutId && clearTimeout(this.timeoutId);
                  },
                },
                {
                  key: "render",
                  value() {
                    const e = this;
                    return _(
                      "pre",
                      {
                        onMouseEnter() {
                          return e.setState({ showCopy: !0 });
                        },
                        onMouseLeave() {
                          return e.setState({ showCopy: !1 });
                        },
                        className: "jsx-2301480220",
                      },
                      _(F, this.props),
                      (this.state.showCopy || this.state.showCopied) &&
                        _(
                          d.Fragment,
                          null,
                          _(
                            "div",
                            {
                              onClick: this.onCopy,
                              className: "jsx-2301480220 copy-button",
                            },
                            _(I.Copy, null)
                          ),
                          _(
                            "div",
                            {
                              className:
                                "jsx-2301480220 " +
                                (N()("copied-label", {
                                  show: this.state.showCopied,
                                }) || ""),
                            },
                            "copied!"
                          )
                        ),
                      _("textarea", {
                        ref: this.setTextAreaRef,
                        defaultValue: this.props.value,
                        className: "jsx-2301480220",
                      }),
                      _(u.a, { id: "2301480220" }, [
                        "pre.jsx-2301480220{position:relative;}",
                        ".copy-button.jsx-2301480220{position:absolute;top:3px;right:3px;cursor:pointer;z-index:5;height:14px;width:14px;}",
                        "textarea.jsx-2301480220{position:absolute;left:-9999px;}",
                        ".copied-label.jsx-2301480220{-webkit-transition:200ms all;transition:200ms all;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;opacity:0;position:absolute;top:0;right:0;z-index:4;font-size:12px;}",
                        ".copied-label.show.jsx-2301480220{opacity:1;top:-15px;}",
                      ])
                    );
                  },
                },
              ]),
              t;
            })(d.PureComponent);
      Object(E.a)(P, "defaultProps", { language: "", theme: "replitLight" });

      var F = (e => {
        class t {
          constructor() {
            let e, a;
            Object(g.a)(this, t);
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
              i[o] = arguments[o];
            return (a = Object(O.a)(
              this,
              (e = Object(x.a)(t)).call.apply(e, [this].concat(i))
            )),
            Object(E.a)(Object(k.a)(a), "codeEl", void 0),
            Object(E.a)(Object(k.a)(a), "setCodeRef", e => {
              return (a.codeEl = e);
            }),
            Object(E.a)(Object(k.a)(a), "highlightCode", () => {
              if (window.monaco && a.codeEl) {
                const e = a.props.theme;
                try {
                  window.monaco.editor.colorizeElement(a.codeEl, {
                    theme: S[e],
                  });
                } catch (t) {}
              }
            }),
            a;
          }

          static default(e) {
            const t = Object(X.a)("flag-markdown-preview-tab"), a = Object(j.a)();
            return t ? q(G, e) : q(H, Object(s.a)({}, e, { activeFile: a }));
          }
        }

        return Object(C.a)(t, e),
        Object(y.a)(t, [
          {
            key: "componentDidMount",
            value() {
              this.highlightCode();
            },
          },
          {
            key: "componentDidUpdate",
            value() {
              this.highlightCode();
            },
          },
          {
            key: "render",
            value() {
              let e = this.props.language;
              return (
                T[e] && (e = T[e]),
                _(
                  d.Fragment,
                  null,
                  _(
                    "code",
                    {
                      ref: this.setCodeRef,
                      "data-lang": e,
                      className: "jsx-4267435036",
                    },
                    this.props.value
                  ),
                  _(u.a, { id: "4267435036" }, [
                    "code.jsx-4267435036{overflow-x:visible !important;}",
                  ])
                )
              );
            },
          },
        ]),
        t;
      })(d.PureComponent);

      const R = a("gfZM");
      const L = a("SXYe");
      const U = a("0LUh");
      const A = a("IdsG");
      const V = a("RB+8");
      const X = a("5QjX");
      const z = a("mU7w");
      const D = a("oy+i");
      const K = a("I7/E");
      a("Wlt/");
      function W() {
        const e = Object(K.a)().session, t = d.useState(e.getCursorPosition()), a = Object(c.a)(t, 2), n = a[0], i = a[1];
        return d.useEffect(
          () => {
            return i(e.getCursorPosition()), e.onCursorPositionChanged(i);
          },
          [e]
        ),
        n
      ;
      }
      const Y = a("koLh");
      const J = a("hKI/");
      const Q = a.n(J);
      var q = d.createElement;

      var G = e => {
        const t = Object(w.b)(e.wid, e.pud, "markdownviewer"), a = !Object(c.a)(t, 1)[0].dirs[""].loaded, n = Object(D.a)();
        return a || !n
          ? q(z.a, null)
          : q(H, Object(s.a)({}, e, { activeFile: n }));
      };

      const B = Q()(e => {
        e.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);

      var H = e => {
        const t = Object(K.a)().fs,
              a = Object(V.f)(),
              n = W(),
              o = Object(j.a)(),
              l = Object(h.e)(),
              p = Object(f.f)({ fs: t }),
              g = Object(X.a)("flag-markdown-preview-tab"),
              y = Object(X.a)("flag-md-follow-cursor"),
              O = d.useState(!1),
              x = Object(c.a)(O, 2),
              k = x[0],
              C = x[1],
              E = Object(w.b)(e.wid, e.pud, "markdownviewer"),
              M = Object(c.a)(E, 1)[0].files,
              N = e.activeFile,
              I = d.useRef(null),
              _ = Object(Y.a)(
                () => {
                  y &&
                    (C(!0),
                    I.current && clearTimeout(I.current),
                    (I.current = setTimeout(() => {
                      C(!1);
                    }, 150)));
                },
                { type: "throttle", wait: 37.5 }
              );
        d.useLayoutEffect(
          () => {
            if (y && !k && o === N) {
              const e = document.querySelectorAll(
                        ".rendered-markdown [data-sourcepos]"
                      ),
                    t = r()(e);
              if (t) {
                const a = n.lineNumber;
                const s = n.column;
                let l = !0;
                let u = !1;
                let d = void 0;
                try {
                  for (
                    var p, b = i()(t);
                    !(l = (p = b.next()).done);
                    l = !0
                  ) {
                    const m = p.value, f = m.dataset.sourcepos;
                    if (!f)
                      throw new Error(
                        "Expected data source pos on selected element"
                      );
                    const v = f.split("-"), h = Object(c.a)(v, 2), j = h[0], w = h[1], g = j.split(":").map(Number), O = Object(c.a)(g, 2), x = O[0], C = O[1], E = w.split(":").map(Number), M = Object(c.a)(E, 2), I = M[0], _ = M[1];
                    if (a >= x && s >= C && (a < I || (a === I && s <= _)))
                      return void B(m);
                  }
                } catch (S) {
                  (u = !0), (d = S);
                } finally {
                  try {
                    l || null == b.return || b.return();
                  } finally {
                    if (u) throw d;
                  }
                }
              }
            }
          },
          [n, k, y, o, N]
        );
        var S = d.useCallback(
          e => {
            const t = e.src;
            return q(f.a, {
              previewFilePath: N,
              src: t,
              getImageContent: p,
              deeplink: !0,
            });
          },
          [p, N]
        );
        return d.useMemo(
          () => {
            if (!N) return q("div", { style: e.style }, "No current file");
            const t = M[N];
            let n = "Loading File...";
            return t && !0 === t.loaded && (n = R.a.from(t.content).toString()),
            q(
              "div",
              {
                ref: _,
                className:
                  u.a.dynamic([["2390089352", [L.a.tabletMin]]]) + " root",
              },
              g ? q(Z, { activeFile: N }) : null,
              q(
                "div",
                {
                  className:
                    u.a.dynamic([["2390089352", [L.a.tabletMin]]]) +
                    " content",
                },
                q(m.a, {
                  source: n,
                  renderers: {
                    code(e) {
                      return q(P, Object(s.a)({}, e, { theme: a }));
                    },
                    linkReference: f.c,
                    image: S,
                  },
                  plugins: [b.a],
                  sourcePos: !0,
                })
              ),
              g
                ? null
                : q(v.a, {
                    renderingMarkdown: !0,
                    onToggle(t) {
                      l({
                        type: "SET_PREVIEW_MARKDOWN",
                        wid: e.wid,
                        preview: t,
                      });
                    },
                  }),
              q(u.a, { id: "2390089352", dynamic: [L.a.tabletMin] }, [
                ".root.__jsx-style-dynamic-selector{height:100%;width:100%;overflow:auto;background:var(--color-background-1);}",
                ".content.__jsx-style-dynamic-selector{max-width:840px;margin:0 auto;padding:var(--spacing-4) var(--spacing-2);}",
                "@media only screen and (min-width:".concat(
                  L.a.tabletMin,
                  "px){.content.__jsx-style-dynamic-selector{padding:var(--spacing-6) var(--spacing-4);}}"
                ),
              ])
            )
          ;
          },
          [N, l, M, g, S, e, _, a]
        );
      };

      const Z = e => {
        const t = e.activeFile;
        return q(
          "div",
          {
            className:
              u.a.dynamic([["1392880327", [L.a.tabletMin]]]) +
              " preview-link-container",
          },
          q(U.a, null),
          q(
            A.a,
            { className: "preview-text", foreground: 2, size: "small" },
            "Preview of ",
            q(
              "a",
              {
                href: "#".concat(t),
                className: u.a.dynamic([["1392880327", [L.a.tabletMin]]]),
              },
              t
            )
          ),
          q(u.a, { id: "1392880327", dynamic: [L.a.tabletMin] }, [
            ".preview-link-container.__jsx-style-dynamic-selector{position:absolute;color:var(--color-foreground-2);background-color:var(--color-background-1);padding:var(--spacing-1) var(--spacing-2);display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:calc(100% - var(--spacing-2));-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
            ".preview-link-container.__jsx-style-dynamic-selector .preview-text{margin-left:var(--spacing-half);}",
            "@media only screen and (min-width:".concat(
              L.a.tabletMin,
              "px){.preview-link-container.__jsx-style-dynamic-selector{padding:var(--spacing-1) var(--spacing-4);}}"
            ),
          ])
        );
      };
    },
  },
]);
//# sourceMappingURL=321.595e5b20e67b140c075c.js.map
