(self.webpackChunklite = self.webpackChunklite || []).push([
  [5064],
  {
    28859: (e, t, r) => {
      "use strict";
      r.d(t, { u6: () => c, Am: () => u, TA: () => l });
      const a = r(63038);
      const n = r.n(a);
      const i = r(67294);
      const o = { updateWatchedBounds() {}, watchedBounds: new Map() };
      var c = i.createContext(o);

      var u = (e) => {
        const t = new Map(),
              r = i.useState(t),
              a = n()(r, 2),
              o = a[0],
              u = a[1],
              l = { offset: { left: 0, right: 0, top: 0, bottom: 0 } },
              p = {
                watchedBounds: o,
                updateWatchedBounds(e, t) {
                  const r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : l;
                  u((a) => {
                    const n = new Map(a);
                    return n.set(e, { ref: t, opts: r }), n;
                  });
                },
              };
        return i.createElement(c.Provider, { value: p }, e.children);
      };

      var l = (e) => {
        const t = e.children, r = e.className, a = e.name, n = e.type, o = e.offset, u = i.useContext(c).updateWatchedBounds, l = i.useRef(null);
        return (
          i.useEffect(() => {
            u && u(a, l, { type: n, offset: o });
          }, []),
          i.createElement("div", { className: r, ref: l }, t)
        );
      };
    },
    50391: (e, t, r) => {
      "use strict";
      r.d(t, { Jj: () => qe, _V: () => Ce, ZP: () => ke });
      const a = r(28655),
            n = r.n(a),
            i = r(34575),
            o = r.n(i),
            c = r(93913),
            u = r.n(c),
            l = r(2205),
            p = r.n(l),
            h = r(78585),
            s = r.n(h),
            g = r(29754),
            f = r.n(g),
            d = r(71439),
            m = r(67294),
            v = r(28859),
            E = r(59713),
            x = r.n(E),
            y = r(63038),
            S = r.n(y),
            T = r(12291),
            b = r(79914),
            R = r(93340),
            P = r(25309),
            w = r(319),
            _ = r.n(w),
            I = r(67995),
            O = r(24438),
            W = r(28309),
            N = r(80637),
            k = (e) => {
              return (t) => {
                return x()(
                  {
                    marginTop: "10px",
                    textAlign: e,
                    maxWidth: "".concat((0, O.G)(t, 8, !0), "px"),
                    marginLeft: "left" === e ? "0" : "auto",
                    marginRight: "auto",
                  },
                  N.lg(t),
                  { marginLeft: "auto", textAlign: "center" }
                );
              };
            },
            q = (e) => {
              return () => {
                const t = e && 100 * e;
                return {
                  width: "".concat(t, "%"),
                  position: "relative",
                  left: "calc(".concat(100 - t / 2, "% - 8px)"),
                  transform: "translateX(-50%)",
                };
              };
            };
      const C = m.forwardRef((e, t) => {
        const r = e.children,
              a = e.richTextStyle,
              n = e.textAlign,
              i = void 0 === n ? "center" : n,
              o = e.extendLeftRatio,
              c = (0, W.Iq)(),
              u = (0, I.n)({
                name: "detail",
                scale: "CARD" === a || "SHORTFORM_CARD" === a ? "S" : "M",
                color: "LIGHTER",
              });
        return m.createElement(
          "figcaption",
          { className: c([k(i), u].concat(_()(o ? [q(o)] : []))), ref: t },
          r
        );
      });
      function L(e) {
        const t = e.children, r = e.figCaption, a = e.className, n = e.figureRef;
        return m.createElement("figure", { className: a, ref: n }, t, r);
      }
      const M = r(67154),
            B = r.n(M),
            A = r(72955),
            H = r(41331),
            F = r(53006),
            U = (e) => {
              return { backgroundColor: e.baseColor.background.normal };
            },
            j = () => {
              return { width: "1px", minWidth: "100%", "*width": "100%" };
            };
      const D = (0, T.$j)((e) => {
        return { isAmp: e.config.isAmp };
      })((e) => {
        let t;
        const r = e.src;
        const a = e.title;
        const n = e.height;
        const i = e.width;
        const o = e.allowFullScreen;
        const c = e.frameBorder;
        const u = e.thumbnailUrl;
        const l = e.rules;
        const p = e.placeholderRef;
        const h = e.iframeRef;
        const s = e.isAmp;
        const g = (0, W.Iq)();

        const f = {
          src: r,
          allowFullScreen: o,
          frameBorder: c,
          height: n,
          width: i,
        };

        const d = m.useState(!1);
        const v = S()(d, 2);
        const E = v[0];
        const x = v[1];
        const y = m.useState(!1);
        const T = S()(y, 2);
        const b = T[0];
        const R = T[1];
        if (
          (b ||
            A.V6.on("load", () => {
              return R(!0);
            }),
          null != h &&
            null !== (t = h.current) &&
            void 0 !== t &&
            t.parentElement &&
            h.current.parentElement.offsetWidth < h.current.offsetWidth &&
            !E &&
            x(!0),
          s)
        ) {
          let P;
          const w = { allowFullScreen: o };
          for (const _ in w) f[_] = f[_] ? "" : null;
          return (
            (P = u
              ? m.createElement("amp-img", {
                  placeholder: "",
                  src: u,
                  layout: "fill",
                })
              : m.createElement("div", {
                  placeholder: "",
                  className: g([F.m, U]),
                })),
            m.createElement(
              "amp-iframe",
              B()({}, f, {
                class: g(l),
                placeholder: "",
                resizable: "",
                layout: "responsive",
                sandbox:
                  "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",
              }),
              P,
              m.createElement(
                "div",
                { tabIndex: 0, role: "button", "aria-label": "Read more" },
                "Read more"
              )
            )
          );
        }
        return b
          ? m.createElement(
              H.v,
              { rootMargin: "200px 0px", target: p },
              (e) => {
                return e
                  ? m.createElement(
                      "iframe",
                      B()({}, f, {
                        ref: h,
                        title: a,
                        className: g(E ? [l, j] : l),
                        scrolling: E ? "no" : "auto",
                      })
                    )
                  : null;
              }
            )
          : null;
      });
      const z = r(69703), G = r(65441), X = r(27952);
      function Q() {
        const e = n()([
          "\n  fragment IframeParagraph_paragraph on Paragraph {\n    iframe {\n      mediaResource {\n        id\n        iframeSrc\n        iframeHeight\n        iframeWidth\n        title\n      }\n    }\n    layout\n    ...getEmbedlyCardUrlParams_paragraph\n    ...Markups_paragraph\n  }\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (Q = () => {
            return e;
          }),
          e
        );
      }
      const V = (e) => {
              const t = e.host;
              const r = e.isAmp;
              const a = e.paragraph;
              const n = e.paragraphStyle;
              const i = e.richTextStyle;
              const o = e.spaceTop;
              const c = e.updateWatchedBounds;
              const u = (0, W.Iq)();
              const l = m.useRef(null);
              const p = (a.iframe || {}).mediaResource;
              const h = p || {};
              const s = h.id;
              const g = h.iframeSrc;
              const f = h.iframeHeight;
              const d = h.iframeWidth;
              const v = h.title;
              let E = g;
              E || (E = s ? (0, X.jU)(t, s) : "");
              const y = ((e) => {
                        const t = e.src, r = e.initialHeight, a = e.initialWidth, n = m.useRef(null), i = m.useState(r), o = S()(i, 2), c = o[0], u = o[1], l = m.useState(a), p = S()(l, 2), h = p[0], s = p[1];
                        return m.useEffect(() => {
                          if ("" !== t) {
                            const e = (0, R.x)((e, r) => {
                              n.current &&
                                "MEASURE" === e.type &&
                                e.details.height > 0 &&
                                (s(n.current.offsetWidth),
                                n.current.contentWindow === r && u(e.details.height)),
                                "iframe.resize" === e.context &&
                                  e.src === t &&
                                  e.height > 0 &&
                                  (n.current && s(n.current.offsetWidth), u(e.height));
                            }).destructor;
                            return () => {
                              e();
                            };
                          }
                        }, [t, r]),
                        [c, h, n]
                      ;
                      })({ src: E, initialHeight: f || 0, initialWidth: d || 0 }),
                    T = S()(y, 3),
                    w = T[0],
                    _ = T[1],
                    I = T[2],
                    O = m.useRef(null);
              if (
                (m.useEffect(() => {
                  if (c && p && p.id && _ && w) {
                    let e = "";
                    l.current && (e = l.current.offsetTop.toString()),
                      c("".concat(p.id, "-").concat(e), l, { type: "image" });
                  }
                }, []),
                !E)
              )
                return null;
              const k = a.text
                        ? m.createElement(
                            C,
                            { richTextStyle: i },
                            m.createElement(b.T2, {
                              paragraph: a,
                              paragraphStyle: n,
                              richTextStyle: i,
                            })
                          )
                        : null,
                    q = [(0, z.qB)(o)];
              q.push(() => {
                return { clear: "both" };
              }),
                "OUTSET_LEFT" === (a.layout || void 0) &&
                  "STREAM" !== i &&
                  q.push((e) => {
                    let t;
                    return (
                      (t = {
                        background: e.backgroundColor,
                        borderWidth: e.borderWidthThick + "px",
                        borderStyle: e.borderStyle,
                        borderColor: e.backgroundColor,
                        float: "left",
                        marginLeft: "-150px",
                        marginRight: "30px",
                        width: "75%",
                        padding: "0",
                        paddingBottom: "10px",
                      }),
                      x()(t, N.md(e), {
                        float: "none",
                        marginLeft: "0",
                        marginRight: "0",
                        width: "100%",
                      }),
                      x()(t, "marginBottom", "16px"),
                      t
                    );
                  });
              const M = r ? (0, G.XC)(a) : null;
              return m.createElement(
                L,
                { className: u(q), figCaption: k, figureRef: l },
                M
                  ? m.createElement(
                      m.Fragment,
                      null,
                      m.createElement("amp-embedly-card", {
                        "data-url": M.url,
                        layout: "responsive",
                        width: _,
                        height: w,
                        "data-card-controls": "0",
                      })
                    )
                  : m.createElement(
                      P.G,
                      { height: w, width: _, backgroundColor: "NONE", ref: O },
                      m.createElement(D, {
                        placeholderRef: O,
                        iframeRef: I,
                        src: E,
                        title: v || "",
                        height: w,
                        width: _,
                        allowFullScreen: !0,
                        frameBorder: "0",
                        rules: F.m,
                      })
                    )
              );
            },
            Z = m.memo(V);
      const Y = (0, T.$j)((e) => {
        return { isAmp: e.config.isAmp, host: e.navigation.host };
      })(Z);
      const J = (0, d.Ps)(Q(), G.Zp, b.Zr);
      const K = Y;
      const $ = r(59854),
            ee = r.n($),
            te = r(7647),
            re = r(69677),
            ae = r(24219),
            ne = r(65922),
            ie = r(7530),
            oe = r(90038),
            ce = (e) => {
              return { backgroundColor: e.brandColor.sage.light };
            },
            ue = (e, t) => {
              const r = (0, oe.W6)({
                        freezeGifs: !1,
                        miroId: e,
                        strategy: oe._S.Resample,
                        width: t.breakpoints.sm,
                      }),
                    a = (0, oe.W6)({
                      freezeGifs: !1,
                      miroId: e,
                      strategy: oe._S.Resample,
                      width: t.breakpoints.md,
                    }),
                    n = (0, oe.W6)({
                      freezeGifs: !1,
                      miroId: e,
                      strategy: oe._S.Resample,
                      width: t.breakpoints.lg,
                    }),
                    i = (0, oe.W6)({
                      freezeGifs: !1,
                      miroId: e,
                      strategy: oe._S.Resample,
                      width: t.breakpoints.xl,
                    });
              return {
                xl: "url('".concat(i, "')"),
                lg: "url('".concat(i, "')"),
                md: "url('".concat(n, "')"),
                sm: "url('".concat(a, "')"),
                xs: "url('".concat(r, "')"),
              };
            };
      function le(e) {
        const t = e.metadata, r = (0, W.Iq)();
        return m.createElement(ie.Yi, null, (e) => {
          return m.createElement(
            "div",
            { className: r(ce) },
            m.createElement(ne.Z, {
              backgroundImage: ue(t.id, e),
              miroId: t.id,
              height: "60vh",
              width: "100%",
              minHeight: { xl: 500, lg: 400, md: 400, sm: 300, xs: 300 },
              imgHeight: 500,
              imgWidth: 2e3,
              focusPercent:
                null === t.focusPercentX ||
                void 0 === t.focusPercentX ||
                null === t.focusPercentY ||
                void 0 === t.focusPercentY
                  ? void 0
                  : [t.focusPercentX, t.focusPercentY],
            })
          );
        });
      }
      const pe = r(8558), he = r(62031), se = r(8667);
      function ge() {
        const e = n()([
          "\n  fragment ImageParagraph_privateNote on Note {\n    ...PostAnnotationsMarker_privateNote\n  }\n  ",
          "\n",
        ]);
        return (
          (ge = () => {
            return e;
          }),
          e
        );
      }
      function fe() {
        const e = n()([
          "\n  fragment ImageParagraph_highlight on Quote {\n    id\n    ...Markups_highlight\n  }\n  ",
          "\n",
        ]);
        return (
          (fe = () => {
            return e;
          }),
          e
        );
      }
      function de() {
        const e = n()([
          "\n  fragment ImageParagraph_paragraph on Paragraph {\n    href\n    layout\n    metadata {\n      id\n      originalHeight\n      originalWidth\n      focusPercentX\n      focusPercentY\n      alt\n    }\n    ...Markups_paragraph\n    ...ParagraphRefsMapContext_paragraph\n    ...PostAnnotationsMarker_paragraph\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (de = () => {
            return e;
          }),
          e
        );
      }
      const me = (e) => {
        const t = e.highlights, r = e.isSequenceCover, a = void 0 !== r && r, n = e.marginTopOverride, i = e.paragraph, o = e.paragraphStyle, c = e.privateNotes, u = e.richTextStyle, l = e.sequenceAspectRatio, p = e.spaceTop, h = e.updateWatchedBounds, s = (0, W.Iq)(), g = m.useRef(null), f = (0, re.CF)(i, o), d = m.useContext(te.U);
        return m.useEffect(() => {
          if (h) {
            const e = i.name, t = i.metadata && i.metadata.id;
            if (e && t) {
              let r = "";
              g.current && (r = g.current.offsetTop.toString()),
                h("".concat(e, "-").concat(t, "-").concat(r), g, {
                  type: "image",
                });
            }
          }
        }, []),
        m.useMemo(() => {
          const e = i.metadata, r = i.layout;
          if (!e) return null;
          let h;
          const v = e.id;
          const E = e.originalHeight;
          const y = e.originalWidth;
          const S = e.alt;
          const T = (0, oe.JI)(v);
          const R = "CARD" === u || "SHORTFORM_CARD" === u;

          const P = (0, se.jg)({
            layout: r,
            originalWidth: y || 0,
            originalHeight: E || 0,
            sequenceAspectRatio: l,
            richTextStyle: u,
          });

          const w = P.width;
          const _ = P.height;
          const I = P.strategy;
          const O = P.otherWidths;
          if ("OUTSET_ROW_CONTINUE" === r && y && E && l) {
            const W = y / E;
            h = ee()(l / W, 2);
          }
          let k;

          const q = i.text
            ? m.createElement(
                C,
                {
                  ref: f,
                  richTextStyle: u,
                  textAlign: a ? "left" : "center",
                  extendLeftRatio: h,
                },
                c &&
                  m.createElement(ae.A7, { paragraph: i, privateNotes: c }),
                m.createElement(b.T2, {
                  highlights: t,
                  paragraph: i,
                  paragraphStyle: o,
                  richTextStyle: u,
                })
              )
            : null;

          if (a)
            k = m.createElement(le, {
              metadata: {
                id: v,
                focusPercentX: e.focusPercentX,
                focusPercentY: e.focusPercentY,
              },
            });
          else {
            const M = d
                      ? [{ maxWidth: "100%", height: "auto" }]
                      : _
                      ? [F.m]
                      : [{ maxWidth: "100%" }],
                  A = {
                    isAmp: !1,
                    alt: S || "",
                    miroId: v,
                    height: _,
                    width: w,
                    rules: M,
                    maxWidth: _ ? void 0 : "100%",
                    strategy: I,
                    freezeGifs: "STREAM" === u || "RESAMPLE" !== I,
                    focusPercentX: e.focusPercentX,
                    focusPercentY: e.focusPercentY,
                    expectedWidth: w,
                    otherWidths: O,
                  };
            if ((0, G.jH)(u)) {
              const H = () => {
                const e = {};
                return (
                  w > 0 && (e.maxWidth = "".concat(w, "px")),
                  R &&
                    ("INSET_CENTER" === r || "OUTSET_LEFT" === r) &&
                    y &&
                    ((e.marginLeft = "auto"), (e.marginRight = "auto")),
                  m.createElement(
                    "div",
                    { className: s(e) },
                    m.createElement(pe.Fh, A)
                  )
                );
              };
              if (!w || !_)
                return m.createElement(
                  "div",
                  { className: s((0, z.qB)(p)) },
                  m.createElement(H, null)
                );
              k = m.createElement(H, null);
            } else if (
              "OUTSET_LEFT" === r ||
              "INSET_LEFT" === r ||
              ("INSET_CENTER" === r && y) ||
              ("OUTSET_CENTER" === r && y)
            ) {
              const U = y && (T ? y / 2 : y);
              k = m.createElement(
                he.X1,
                {
                  isLinked: !!i.href,
                  width: A.width,
                  height: A.height,
                  originalHeight: e.originalHeight,
                  originalWidth: e.originalWidth,
                  paragraphRef: g,
                },
                m.createElement(
                  "div",
                  {
                    className: s((e) => {
                      return {
                        marginLeft: "auto",
                        marginRight: "auto",
                        maxWidth:
                          "OUTSET_CENTER" === r && U && U < e.maxWidths.outset
                            ? "".concat(e.maxWidths.outset, "px")
                            : "".concat(U, "px"),
                      };
                    }),
                  },
                  m.createElement(
                    pe.Fh,
                    B()({}, A, {
                      height: e.originalHeight || A.height,
                      width: e.originalWidth || A.width,
                    })
                  )
                )
              );
            } else
              k =
                y && "INSET_CENTER" !== r
                  ? m.createElement(
                      he.X1,
                      {
                        isLinked: !!i.href,
                        width: A.width,
                        height: A.height,
                        originalHeight: e.originalHeight,
                        originalWidth: e.originalWidth,
                        paragraphRef: g,
                      },
                      m.createElement(
                        pe.Fh,
                        B()({}, A, {
                          height: e.originalHeight || A.height,
                          width: e.originalWidth || A.width,
                        })
                      )
                    )
                  : m.createElement(
                      ie.xu,
                      {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        sm: { display: "block" },
                      },
                      m.createElement(
                        he.X1,
                        {
                          isLinked: !!i.href,
                          width: A.width,
                          height: A.height,
                          originalHeight: e.originalHeight,
                          originalWidth: e.originalWidth,
                          paragraphRef: g,
                        },
                        m.createElement(
                          pe.Fh,
                          B()({}, A, {
                            width: null,
                            maxWidth: "100%",
                            strategy: null,
                          })
                        )
                      )
                    );
            i.href && (k = m.createElement("a", { href: i.href }, k));
          }
          const j =
            "SHORTFORM_CARD" === u ? [] : [n ? (0, z.qB)(n) : (0, z.qB)(p)];
          if ((j.push({ clear: "both" }), a))
            j.push((e) => {
              return x()({}, N.lg(e), {
                paddingLeft: "0px",
                paddingRight: "0px",
              });
            });
          else if (
            ("OUTSET_ROW" === r || "OUTSET_ROW_CONTINUE" === r) &&
            y &&
            E &&
            l
          ) {
            const D = y / E, X = ee()((D / l) * 100, 2);
            j.push({
              width: "".concat(X, "%"),
              marginRight: "10px",
              paddingTop: "5px",
              paddingBottom: "5px",
              ":last-of-type": { marginRight: 0 },
            });
          } else
            "OUTSET_CENTER" === r
              ? j.push({ paddingBottom: "5px", paddingTop: "5px" })
              : "OUTSET_LEFT" === r && R
              ? j.push({ marginLeft: "auto", marginRight: "auto" })
              : "OUTSET_LEFT" !== r || R
              ? "INSET_LEFT" === r
                ? j.push({
                    float: "left",
                    width: "50%",
                    paddingBottom: "10px",
                    paddingRight: "30px",
                    marginBottom: "16px",
                  })
                : "FULL_WIDTH" === r
                ? j.push({ width: "100%" })
                : "INSET_CENTER" === r &&
                  j.push({ marginLeft: "auto", marginRight: "auto" })
              : j.push((e) => {
                  let t;
                  return (
                    (t = {
                      background: e.backgroundColor,
                      borderWidth: e.borderWidthThick + "px",
                      borderStyle: e.borderStyle,
                      borderColor: e.backgroundColor,
                      float: "left",
                      marginLeft: "-150px",
                      marginRight: "30px",
                      width: "75%",
                      padding: "0",
                      paddingBottom: "10px",
                    }),
                    x()(t, N.lg(e), {
                      float: "none",
                      marginLeft: "0",
                      marginRight: "0",
                      width: "100%",
                    }),
                    x()(t, "marginBottom", "16px"),
                    t
                  );
                });
          return m.createElement(
            L,
            {
              className: "".concat(s(j), " paragraph-image"),
              figCaption: q,
              figureRef: g,
            },
            k
          );
        }, [JSON.stringify(i), JSON.stringify(c)])
      ;
      };
      const ve = m.memo(me);
      const Ee = (0, d.Ps)(de(), b.Zr, re.pK, ae.Mx), xe = (0, d.Ps)(fe(), b.DV), ye = (0, d.Ps)(ge(), ae.uR), Se = r(64504);
      function Te() {
        const e = n()([
          "\n  fragment MixtapeParagraph_paragraph on Paragraph {\n    text\n    type\n    mixtapeMetadata {\n      href\n      thumbnailImageId\n    }\n    markups {\n      start\n      end\n      type\n      href\n    }\n  }\n",
        ]);
        return (
          (Te = () => {
            return e;
          }),
          e
        );
      }
      const be = (e) => {
        return {
          boxShadow: "inset 0 0 0 1px ".concat(e.baseColor.border.lighter),
        };
      };
      const Re = (e) => {
        const t = e.paragraph, r = e.spaceTop, a = e.structuredMarkup, n = (0, W.Iq)(), i = t.mixtapeMetadata, o = t.type;
        if (!i || !i.href || !o) return null;
        const c = i.href,
              u =
                a ||
                ((e) => {
                  const t = e.text, r = e.markups;
                  if (!t) return null;
                  const a = r.find((e) => {
                    return "STRONG" === e.type;
                  });
                  if (!a) return null;
                  const n = r.find((e) => {
                            return "EM" === e.type;
                          }),
                        i = a.end,
                        o = n ? n.end : a.end;
                  return {
                    title: t.slice(a.start, i).trim(),
                    description: n ? t.slice(n.start, n.end).trim() : null,
                    domain: t.slice(o).trim() || null,
                  };
                })(t);
        if (!u) return null;
        const l = u.title, p = u.description, h = u.domain, s = [(0, z.qB)(r), be];
        return m.createElement(
          "div",
          { className: n(s) },
          m.createElement(
            ie.P3,
            { href: c || "", disableSourceParam: !0, target: "_blank" },
            m.createElement(
              ie.xu,
              { display: "flex", flexShrink: "0", padding: "0px" },
              m.createElement(
                ie.xu,
                {
                  padding: "16px 20px",
                  flexShrink: "1",
                  flexGrow: "1",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  sm: { padding: "10px 12px 10px" },
                },
                m.createElement(Se.Dx, { scale: "XS", clamp: 2 }, l),
                p &&
                  m.createElement(
                    ie.xu,
                    { marginTop: "8px" },
                    m.createElement(Se.QE, { scale: "S", clamp: 2 }, p)
                  ),
                h &&
                  m.createElement(
                    ie.xu,
                    { marginTop: "12px" },
                    m.createElement(Se.F, { scale: "S", clamp: 2 }, h)
                  )
              ),
              i &&
                i.thumbnailImageId &&
                m.createElement(
                  ie.xu,
                  { width: "160px" },
                  m.createElement(ne.Z, {
                    boxShadowRules: be,
                    miroId: i.thumbnailImageId,
                    width: 160,
                    height: 167,
                    strategy: oe._S.Resample,
                    focusPercent: [50, 50],
                    imgHeight: 167,
                    imgWidth: 160,
                  })
                )
            )
          )
        );
      };
      const Pe = (0, d.Ps)(Te()), we = r(19692), _e = r(11642);
      function Ie() {
        const e = n()([
          "\n      fragment PostBodyParagraph_paragraph on Paragraph {\n        name\n        type\n        ...ImageParagraph_paragraph\n        ...TextParagraph_paragraph\n        ...IframeParagraph_paragraph\n        ...MixtapeParagraph_paragraph\n      }\n      ",
          "\n      ",
          "\n      ",
          "\n      ",
          "\n    ",
        ]);
        return (
          (Ie = () => {
            return e;
          }),
          e
        );
      }
      function Oe() {
        const e = n()([
          "\n  fragment PostBodyParagraph_privateNote on Note {\n    ...TextParagraph_privateNote\n    ...ImageParagraph_privateNote\n  }\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (Oe = () => {
            return e;
          }),
          e
        );
      }
      function We() {
        const e = n()([
          "\n  fragment PostBodyParagraph_highlight on Quote {\n    ...TextParagraph_highlight\n    ...ImageParagraph_highlight\n  }\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (We = () => {
            return e;
          }),
          e
        );
      }
      const Ne = ((e) => {
        p()(n, e);
        let t;
        let r;

        const a =
          ((t = n),
          (r = (() => {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], () => {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            let e;
            const a = f()(t);
            if (r) {
              const n = f()(this).constructor;
              e = Reflect.construct(a, arguments, n);
            } else e = a.apply(this, arguments);
            return s()(this, e);
          });

        function n() {
          return o()(this, n), a.apply(this, arguments);
        }
        return u()(n, [
          {
            key: "render",
            value() {
              let e;
              const t = this.props;
              const r = t.highlights;
              const a = t.inserts;
              const n = t.marginTopOverride;
              const i = t.paragraph;
              const o = t.paragraphStyle;
              const c = t.privateNotes;
              const u = t.richTextStyle;
              const l = t.sequenceAspectRatio;
              const p = t.spaceTop;
              switch (o) {
                case G.qq.IMG:
                  e = m.createElement(v.u6.Consumer, null, (e) => {
                    const t = e.updateWatchedBounds;
                    return m.createElement(ve, {
                      highlights: r,
                      marginTopOverride: n,
                      paragraph: i,
                      paragraphStyle: o,
                      privateNotes: c,
                      richTextStyle: u,
                      sequenceAspectRatio: l,
                      spaceTop: p,
                      updateWatchedBounds: t,
                    });
                  });
                  break;
                case G.qq.P:
                case G.qq.BQ:
                case G.qq.PQ:
                case G.qq.H1:
                case G.qq.H2:
                case G.qq.H3:
                case G.qq.H4:
                case G.qq.ULI:
                case G.qq.OLI:
                case G.qq.PRE:
                case G.qq.Kicker:
                case G.qq.Subtitle:
                case G.qq.Title:
                  e = m.createElement(we.ZP, {
                    highlights: r,
                    marginTopOverride: n,
                    paragraph: i,
                    paragraphStyle: o,
                    privateNotes: c,
                    richTextStyle: u,
                    spaceTop: p,
                  });
                  break;
                case G.qq.IFRAME:
                  e = m.createElement(v.u6.Consumer, null, (e) => {
                    const t = e.updateWatchedBounds;
                    return m.createElement(K, {
                      paragraph: i,
                      paragraphStyle: o,
                      richTextStyle: u,
                      spaceTop: p,
                      updateWatchedBounds: t,
                    });
                  });
                  break;
                case G.qq.MIXTAPE_EMBED:
                  e = m.createElement(Re, {
                    paragraph: i,
                    paragraphStyle: o,
                    richTextStyle: u,
                    spaceTop: p,
                  });
                  break;
                case G.qq.COVER_TITLE:
                case G.qq.SECTION_CAPTION:
                case G.qq.HR:
                  e = null;
                  break;
                default:
                  (0, _e.v)(o), (e = null);
              }
              return a && a.length
                ? m.createElement(
                    m.Fragment,
                    null,
                    a.map((e) => {
                      return "before" === e.order && e.component;
                    }),
                    e,
                    a.map((e) => {
                      return "after" === e.order && e.component;
                    })
                  )
                : e;
            },
          },
        ]),
        n
      ;
      })(m.Component);
      Ne.fragments = { paragraph: (0, d.Ps)(Ie(), J, Ee, we.Rg, Pe) };
      const ke = Ne;
      var qe = (0, d.Ps)(We(), we.m8, xe),
        Ce = (0, d.Ps)(Oe(), we.hz, ye);
    },
    95064: (e, t, r) => {
      "use strict";
      r.d(t, {
        ZQ: () => w,
        PL: () => _,
        NR: () => I,
        lD: () => O,
        l: () => N,
      });
      const a = r(63038), n = r.n(a), i = r(28655), o = r.n(i), c = r(59713), u = r.n(c), l = r(67154), p = r.n(l), h = r(71439), s = r(67294), g = r(28859), f = r(10515), d = r(50391), m = r(19692), v = r(98701), E = r(28309), x = r(80637), y = r(65441);
      function S(e, t) {
        const r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter((t) => {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
        }
        return r;
      }
      function T(e) {
        for (let t = 1; t < arguments.length; t++) {
          const r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(r), !0).forEach((t) => {
                u()(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : S(Object(r)).forEach((t) => {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function b() {
        const e = o()([
          "\n  fragment ParagraphStyleGrouping_privateNote on Note {\n    ...PostBodyParagraph_privateNote\n  }\n  ",
          "\n",
        ]);
        return (
          (b = () => {
            return e;
          }),
          e
        );
      }
      function R() {
        const e = o()([
          "\n  fragment ParagraphStyleGrouping_highlight on Quote {\n    ...PostBodyParagraph_highlight\n  }\n  ",
          "\n",
        ]);
        return (
          (R = () => {
            return e;
          }),
          e
        );
      }
      function P(e) {
        const t = e.styleGroup,
              r = e.postBodyInserts,
              a = e.richTextStyle,
              n = (0, E.Iq)(),
              i = k(t),
              o = t.paragraphViewModels.map((e) => {
                const i = e.paragraph.name,
                      o = r && r[i],
                      c = s.createElement(
                        d.ZP,
                        p()({ key: e.paragraph.name, inserts: o }, e)
                      );
                return "Title" === e.paragraphStyle ||
                  "Subtitle" === e.paragraphStyle
                  ? s.createElement(
                      g.TA,
                      {
                        name: "title",
                        type: "byline",
                        offset: { left: -600 },
                        key: "".concat(e.paragraph.name, "-wb"),
                        className:
                          "SHORTFORM_CARD" === a
                            ? n((e) => {
                                return u()(
                                  {
                                    zIndex: 2,
                                    position: "absolute",
                                    bottom: "".concat(
                                      t.paragraphViewModels[0]
                                        .marginBottomOverride || 0,
                                      "px"
                                    ),
                                    margin: "48px 40px",
                                  },
                                  x.md(e),
                                  { margin: "32px 24px" }
                                );
                              })
                            : "",
                      },
                      c
                    )
                  : c;
              });
        return i
          ? s.createElement(f.M.Consumer, null, (e) => {
              return s.createElement(
                i,
                {
                  className: n([
                    N({
                      paragraphStyle: t.paragraphStyle,
                      topSpacing: t.topSpacing,
                      paragraphLayout: t.paragraphLayout,
                      richTextStyle: t.paragraphViewModels[0].richTextStyle,
                      isEmbedded: e,
                    }),
                  ]),
                },
                o
              );
            })
          : o;
      }
      var w = s.memo(P);
      var _ = (0, h.Ps)(R(), d.Jj);
      var I = (0, h.Ps)(b(), d._V);

      var O = (e) => {
        const t = [];
        return e.forEach((e) => {
          const r = e.paragraphStyle, a = e.paragraph.layout, n = t[t.length - 1];
          n && W(n, e)
            ? n.paragraphViewModels.push(e)
            : t.push({
                paragraphStyle: r,
                paragraphLayout: a,
                topSpacing: e.sequenceSpaceTop || 0,
                paragraphViewModels: [e],
              });
        }),
        t
      ;
      };

      const W = (e, t) => {
        if (e.paragraphStyle !== t.paragraphStyle) return !1;
        const r = t.paragraph.layout;
        return "OUTSET_ROW" === e.paragraphLayout
          ? "OUTSET_ROW_CONTINUE" === r
          : e.paragraphLayout === r;
      };

      var N = (e) => {
        const t = e.paragraphStyle, r = e.topSpacing, a = e.paragraphLayout, i = e.richTextStyle, o = e.isEmbedded;
        return (e) => {
          const c = {};
          switch (
            (r &&
              (c.marginTop = (0, v.mu)((e) => {
                const t = n()(e, 1)[0];
                return "".concat(t, "px");
              }, r)),
            t)
          ) {
            case "BQ":
              const u = e.baseColor.border.darker || "";
              return T(
                T({}, c),
                {},
                {
                  boxShadow: "inset ".concat(3, "px 0 0 0 ").concat(u),
                  paddingLeft: "".concat(23, "px"),
                  marginLeft: (0, y.jH)(i) ? "0px" : "-20px",
                }
              );
            case "PRE":
              return T(
                T({}, c),
                {},
                {
                  padding: "20px",
                  background: e.baseColor.background.normal,
                  overflowX: "auto",
                }
              );
            case "PQ":
              return T(
                T({}, c),
                {},
                { paddingLeft: "SERIES" === i ? "0px" : "30px" }
              );
            case "ULI":
              if (o) return m.Pq;
          }
          switch (a) {
            case "OUTSET_ROW":
              return T(
                T({}, c),
                {},
                { display: "flex", flexDirection: "row" }
              );
          }
          return c;
        };
      };

      var k = (e) => {
        const t = e.paragraphStyle, r = e.paragraphLayout;
        switch (t) {
          case "OLI":
            return "ol";
          case "ULI":
            return "ul";
          case "BQ":
          case "PQ":
            return "blockquote";
          case "PRE":
            return "pre";
        }
        switch (r) {
          case "OUTSET_ROW":
            return "div";
        }
        return null;
      };
    },
    93340: (e, t, r) => {
      "use strict";
      function a(e) {
        e &&
          e.iframe &&
          e.height &&
          e.iframe.getAttribute &&
          "number" == typeof e.height &&
          o({
            context: "iframe.resize",
            height: e.height,
            src: e.iframe.getAttribute("src") || "",
          });
      }
      function n(e) {
        if (e.data && "string" == typeof e.data) {
          let t;
          try {
            t = JSON.parse(e.data);
          } catch (e) {
            return;
          }
          o(t, e.source);
        }
      }
      r.d(t, { x: () => c });
      let i = [];
      function o(e, t) {
        i.forEach((r) => {
          return r(e, t);
        });
      }
      function c(e) {
        return (
          window._resizeIframe ||
            ((window._resizeIframe = a), window.addEventListener("message", n)),
          i.push(e),
          {
            destructor() {
              0 ===
                (i = i.filter((t) => {
                  return e !== t;
                })).length &&
                "undefined" != typeof window &&
                ((window._resizeIframe = null),
                window.removeEventListener("message", n));
            },
          }
        );
      }
    },
    65922: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => s });
      const a = r(63038),
            n = r.n(a),
            i = r(67294),
            o = r(98701),
            c = r(28309),
            u = r(90038),
            l = (e) => {
              const t = n()(e, 1)[0];
              return "number" == typeof t ? "".concat(t, "px") : t;
            },
            p = (e) => {
              const t = n()(e, 1)[0];
              return "".concat(t[0], "% ").concat(t[1], "%");
            },
            h = (e) => {
              return n()(e, 1)[0];
            };
      function s(e) {
        const t = e.backgroundImage;
        const r = e.boxShadowRules;
        const a = e.miroId;
        const n = e.height;
        const s = e.width;
        const g = e.minHeight;
        const f = e.minWidth;
        const d = e.imgHeight;
        const m = e.imgWidth;
        const v = e.focusPercent;
        const E = e.strategy;
        const x = void 0 === E ? u._S.Resample : E;
        const y = e.darken;
        const S = e.freezeGifs;
        const T = (0, c.Iq)();
        let b = t;
        if (!b) {
          const R = (0, u.W6)({
            miroId: a,
            height: d,
            width: m,
            strategy: x,
            darken: y,
            freezeGifs: S,
          });
          b = "url(".concat(R, ")");
        }
        const P = (0, o.mu)(l, n),
              w = (0, o.mu)(l, s),
              _ = g && (0, o.mu)(l, g),
              I = f && (0, o.mu)(l, f),
              O = (0, o.mu)(p, v),
              W = {
                backgroundImage: (0, o.mu)(h, b),
                display: "block",
                backgroundOrigin: "border-box",
                backgroundSize: "cover",
                height: P,
                width: w,
                minHeight: _,
                minWidth: I,
                backgroundPosition: O,
                maxWidth: "100%",
              };
        return i.createElement("div", { className: T([W, r]) });
      }
      s.defaultProps = { focusPercent: [50, 50] };
    },
    41331: (e, t, r) => {
      "use strict";
      r.d(t, { v: () => c });
      const a = r(63038);
      const n = r.n(a);
      const i = r(67294);
      const o = r(72955);

      var c = (e) => {
        const t = e.rootMargin,
              r = e.children,
              a = e.target,
              c = i.useState(!1),
              u = n()(c, 2),
              l = u[0],
              p = u[1],
              h = i.useCallback(
                (e) => {
                  !l && e.isIntersecting && p(!0);
                },
                [l]
              );
        return (
          (0, o.S1)(
            {
              onIntersect: h,
              target: a,
              disconnect() {
                return l;
              },
              rootMargin: t,
            },
            [l]
          ),
          "function" == typeof r
            ? i.createElement(i.Fragment, null, r(l))
            : l
            ? i.createElement(i.Fragment, null, r)
            : null
        );
      };
    },
  },
]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/5064.b935b655.chunk.js.map
