(self.webpackChunklite = self.webpackChunklite || []).push([
  [9972],
  {
    48793: (e, t, n) => {
      "use strict";
      n.d(t, { VC: () => f, GT: () => v });
      const o = n(28655), r = n.n(o), l = n(71439), i = n(67294), a = n(49925), c = n(8558), u = n(7530), m = n(67995), s = n(28309), h = n(14391), d = n(90038);
      function g() {
        const e = r()([
          "\n  fragment CollectionLogo_image on ImageMetadata {\n    id\n    originalHeight\n    originalWidth\n  }\n",
        ]);
        return (g = () => {
          return e;
        }),
        e
      ;
      }
      function p() {
        const e = r()([
          "\n  fragment CollectionLogo_collection on Collection {\n    ...auroraHooks_publisher\n    name\n    isAuroraVisible\n    logo {\n      id\n      originalWidth\n      originalHeight\n    }\n  }\n  ",
          "\n",
        ]);
        return (p = () => {
          return e;
        }),
        e
      ;
      }
      function f(e) {
        const t = e.clamp,
              n = void 0 === t ? 1 : t,
              o = e.collection,
              r = e.maxWidth,
              l = e.maxHeight,
              g = e.textScale,
              p = void 0 === g ? "S" : g,
              f = e.withTextColorSubtle,
              v = void 0 !== f && f,
              b = e.customNameColor,
              E = e.customLogoImage,
              x = e.nameTreatment,
              C = (0, s.Iq)(),
              w = (0, m.n)({ name: "heading", scale: p, clamp: n }),
              I = ((e, t) => {
                return n => {
                  return { color: t || n.baseColor.text[e] };
                };
              })(v ? "normal" : "dark", b),
              k = (0, a.Iq)(o) && void 0 !== E ? E : o.logo;
        if (!k || !k.id || x === h.m3.NAME_TREATMENT_TEXT)
          return i.createElement(
            "span",
            { className: C([w, I]) },
            o.name || ""
          );
        const S = k.id;
        let L = k.originalWidth || 100;
        let T = k.originalHeight || 100;
        if (r && L > r) {
          const y = L / r;
          (L = Math.floor(L / y)), (T = Math.floor(T / y));
        }
        if (l && T > l) {
          const N = T / l;
          (L = Math.floor(L / N)), (T = Math.floor(T / N));
        }
        return i.createElement(
          u.xu,
          { width: "".concat(L, "px"), height: "".concat(T, "px") },
          i.createElement(c.UV, {
            miroId: S,
            alt: o.name || "Publication logo",
            width: L,
            height: T,
            strategy: d._S.Resample,
          })
        );
      }
      var v = (0, l.Ps)(p(), a.C5);
      (0, l.Ps)(g());
    },
    9972: (e, t, n) => {
      "use strict";
      n.d(t, { NL: () => te, XL: () => ee, JE: () => ne });
      const o = n(28655),
            r = n.n(o),
            l = n(59713),
            i = n.n(l),
            a = n(63038),
            c = n.n(a),
            u = n(71439),
            m = n(67294),
            s = n(12291),
            h = n(67154),
            d = n.n(h),
            g = n(48793),
            p = n(7530),
            f = n(77714),
            v = n(15849),
            b = n(83249),
            E = n(98701),
            x = n(28309),
            C = e => {
              const t = e.fontConfig,
                    n = e.scale,
                    o = e.tag,
                    r = e.children,
                    l = e.additionalRules,
                    i = e.clamp,
                    a = e.leadingTrim,
                    u = (0, x.Iq)(),
                    s = o,
                    h = { fontFamily: t.family, fontWeight: t.weight },
                    d = (0, E.mu)(e => {
                      const n = c()(e, 1)[0];
                      return t.lineHeight[n];
                    }, n),
                    g = (0, b.M)({ fontConfig: t, scale: n }),
                    p = i ? (0, f.V)({ clamp: i, lineHeight: d }) : void 0,
                    C = a ? (0, v.KR)({ fontConfig: t, scale: n }) : void 0;
              return m.createElement(s, { className: u([h, g, p, C, l]) }, r);
            },
            w = n(80637);
      function I() {
        const e = r()([
          "\n  fragment CollectionNavItems_collection on Collection {\n    navItems {\n      title\n      url\n      type\n    }\n  }\n",
        ]);
        return (I = () => {
          return e;
        }),
        e
      ;
      }
      const k = e => {
                let t;
                return (
                  (t = {
                    listStyleType: "none",
                    margin: 0,
                    lineHeight: "40px",
                    whiteSpace: "nowrap",
                    overflowX: "auto",
                    display: "flex",
                    alignItems: "flex-start",
                  }),
                  i()(t, w.sm(e), { display: "none" }),
                  i()(t, "marginTop", "".concat(20, "px")),
                  i()(t, "paddingTop", "".concat(20, "px")),
                  i()(t, "height", "".concat(80, "px")),
                  t
                );
              },
            S = {
              display: "flex",
              alignItems: "center",
              height: "".concat(20, "px"),
              marginRight: "15px",
              marginLeft: "15px",
              ":first-child": { marginLeft: 0 },
            },
            L = e => {
              return {
                height: "".concat(20, "px"),
                minWidth: "1px",
                backgroundColor: e.baseColor.border.normal,
              };
            };
      function T(e) {
        const t = e.navItems, n = e.withTextColorSubtle, o = (0, x.Iq)(), r = (0, x.Fg)();
        return t
          ? m.createElement(
              "ul",
              { className: o(k) },
              t.map((e, t) => {
                return e.url &&
                m.createElement(
                  m.Fragment,
                  { key: t },
                  "EXTERNAL_LINK_NAV_ITEM" === e.type &&
                    m.createElement("span", { className: o(L) }),
                  m.createElement(
                    "li",
                    { className: o(S) },
                    m.createElement(
                      C,
                      {
                        fontConfig: r.newFonts.detail,
                        scale: "S",
                        tag: "span",
                        additionalRules:
                          ((l = n ? "lighter" : "normal"),
                          e => {
                            return {
                              color: e.baseColor.text[l],
                              textTransform: "uppercase",
                              letterSpacing: "1px",
                            };
                          }),
                      },
                      m.createElement(p.rU, { href: e.url }, e.title)
                    )
                  )
                );
                var l;
              })
            )
          : null;
      }
      const y = (0, u.Ps)(I()), N = n(56862), O = n(41996), _ = n(27952), M = n(534);
      function A() {
        const e = r()([
          "\n  fragment CollectionMetabarBottom_collection on Collection {\n    slug\n    ...CollectionNavItems_collection\n    ...CollectionLogo_collection\n    ...collectionUrl_collection\n    ...ThemeUtilTintBackground_collection\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ]);
        return (A = () => {
          return e;
        }),
        e
      ;
      }
      const B = (0, u.Ps)(A(), y, g.GT, _.nf, M.Uv),
            j = (0, s.$j)(e => {
              return { currentLocation: e.navigation.currentLocation };
            })(e => {
              const t = e.collection, n = e.currentLocation, o = e.shouldShowCollectionLogo, r = void 0 === o || o, l = e.withBorderTop, a = void 0 !== l && l, c = e.withTextColorSubtle, u = void 0 !== c && c, s = e.breakpoint, h = void 0 === s ? O.j.sm : s, f = t.navItems.slice().length > 0;
              return m.createElement(
                p.xu,
                d()(
                  {
                    backgroundColor: "BACKGROUND",
                    display: f ? "block" : "none",
                    borderTop: a ? "BASE_LIGHTER" : "NONE",
                  },
                  i()({}, h, { display: "block" })
                ),
                m.createElement(
                  p.Pm,
                  null,
                  m.createElement(
                    p.xu,
                    {
                      display: "flex",
                      alignItems: "center",
                      height: "54px",
                      overflow: "hidden",
                    },
                    r
                      ? m.createElement(
                          p.xu,
                          { flexShrink: "0", marginRight: "40px" },
                          m.createElement(
                            N.Z,
                            { href: (0, _.WG)(t, n) },
                            m.createElement(g.VC, {
                              collection: t,
                              maxWidth: 300,
                              maxHeight: 36,
                              textScale: "S",
                              withTextColorSubtle: u,
                            })
                          )
                        )
                      : null,
                    m.createElement(
                      p.xu,
                      { flexShrink: "1", overflow: "auto" },
                      m.createElement(T, {
                        navItems: t.navItems,
                        withTextColorSubtle: u,
                      })
                    )
                  )
                )
              );
            }),
            R = n(60046),
            P = n(32078),
            D = n(41850),
            F = n(6401),
            G = n(43689),
            H = n(86280),
            W = n(74465);
      function U() {
        const e = r()([
          "\n  fragment CollectionMetabarTop_collection on Collection {\n    slug\n    ...CollectionLogo_collection\n    ...collectionUrl_collection\n    ...MetabarActions_publisher\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ]);
        return (U = () => {
          return e;
        }),
        e
      ;
      }
      const V = (0, u.Ps)(U(), g.GT, _.nf, P.$R),
            K = (0, s.$j)(e => {
              return {
                authDomain: e.config.authDomain,
                currentLocation: e.navigation.currentLocation,
              };
            })(e => {
              const t = e.authDomain, n = e.collection, o = e.currentLocation, r = e.isAmp, l = e.post, a = e.shouldShowCollectionLogo, c = e.withMonogramDark, u = e.setIsMetabarLocked, s = e.breakpoint, h = void 0 === s ? O.j.sm : s, f = e.hideOpenInAppLink, v = void 0 !== f && f;
              return m.createElement(
                p.xu,
                { backgroundColor: "BACKGROUND" },
                m.createElement(
                  p.Pm,
                  null,
                  m.createElement(
                    p.xu,
                    d()(
                      {
                        display: "flex",
                        alignItems: "center",
                        height: "".concat(G.Je, "px"),
                      },
                      i()({}, h, { display: "flex", height: "".concat(G.R2, "px") })
                    ),
                    m.createElement(
                      p.xu,
                      {
                        display: "flex",
                        alignItems: "center",
                        flexGrow: "1",
                        zIndex: W.ZP.metabar,
                      },
                      m.createElement(
                        N.Z,
                        {
                          href: "https://".concat(t, "/"),
                          "aria-label": "Homepage",
                        },
                        m.createElement(R.YR, { contrast: c ? "dark" : "normal" })
                      ),
                      a &&
                        m.createElement(
                          m.Fragment,
                          null,
                          m.createElement(
                            p.xu,
                            d()(
                              {
                                height: "24px",
                                width: "1px",
                                marginLeft: "15px",
                                marginRight: "14px",
                                borderLeft: "BASE_LIGHT",
                              },
                              i()({}, h, { display: "none" })
                            )
                          ),
                          m.createElement(
                            p.xu,
                            i()({}, h, { display: "none" }),
                            m.createElement(
                              N.Z,
                              { href: (0, _.WG)(n, o) },
                              m.createElement(g.VC, {
                                collection: n,
                                maxWidth: 240,
                                maxHeight: 36,
                                textScale: "M",
                              })
                            )
                          )
                        ),
                      m.createElement(H.Q_, null, e => {
                        return !v && e
                          ? m.createElement(F.a, {
                              postId: l && l.id,
                              collectionSlug: n.slug,
                            })
                          : m.createElement(m.Fragment, null);
                      })
                    ),
                    m.createElement(
                      p.xu,
                      { flexGrow: "0", zIndex: W.ZP.metabar },
                      r
                        ? m.createElement(D.p7, {
                            withoutConversionButton: !0,
                            post: l,
                            publisher: n,
                          })
                        : m.createElement(P.ZP, {
                            post: l,
                            publisher: n,
                            withoutConversionButton: !0,
                            setIsMetabarLocked: u,
                          })
                    )
                  )
                )
              );
            }),
            Z = n(62872),
            q = n(60054);
      function X() {
        const e = r()([
          "\n  fragment CollectionMetabar_collection on Collection {\n    id\n    colorBehavior\n    isAuroraVisible\n    favicon {\n      id\n    }\n    ...CollectionMetabarTop_collection\n    ...CollectionMetabarBottom_collection\n    ...collectionDefaultBackgroundTheme_collection\n    ...collectionTintBackgroundTheme_collection\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ]);
        return (X = () => {
          return e;
        }),
        e
      ;
      }
      function J(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(t => {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function $(e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? J(Object(n), !0).forEach(t => {
                i()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : J(Object(n)).forEach(t => {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function z(e) {
        return G.Je + (e ? G.ls : 0);
      }
      function Q(e) {
        return G.R2 + (e ? G.ls : 0);
      }
      function Y(e) {
        let t;
        const n = e.post;
        const o = e.collection;
        const r = e.isAmp;
        const l = e.isFixed;
        const i = e.behavior;
        const a = e.shouldShowBottomMetabar;
        const u = void 0 === a || a;
        const h = e.hideOpenInAppLink;
        const d = (0, x.Fg)();
        const g = m.useState(!1);
        const f = c()(g, 2);
        const v = f[0];
        const b = f[1];
        const E = m.useState(!1);
        const C = c()(E, 2);
        const w = C[0];
        const I = C[1];

        const k = (0, s.v9)(e => {
          return e.client.isNativeMedium;
        });

        const S = "ACCENT_COLOR" === o.colorBehavior;
        const L = o.navItems && o.navItems.length > 0;
        const T = u && L;
        const y = !(T || w);
        const N = S || T || w;
        if (
          (m.useEffect(() => {
            window.innerWidth < d.breakpoints.md && I(!0);
          }, []),
          k)
        )
          return null;
        const O =
          u &&
          m.createElement(
            p.f6,
            { theme: S ? (0, M.jN)(o, d) : (0, M.N9)(o, d) },
            m.createElement(j, {
              collection: o,
              withBorderTop: S,
              withTextColorSubtle: S,
            })
          );
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(
            Z.l,
            {
              height: z(L && u),
              heightSm: Q(!w && u),
              isFixed: w || l,
              isLocked: w || v,
              behavior: i,
              marginBottom: 0,
              marginBottomSm: 0,
            },
            m.createElement(q.s, {
              faviconImageId:
                null == o || null === (t = o.favicon) || void 0 === t
                  ? void 0
                  : t.id,
            }),
            m.createElement(
              p.f6,
              { theme: N ? (0, M.jN)(o, d) : (0, M.N9)(o, d) },
              m.createElement(K, {
                post: n,
                collection: o,
                isAmp: r,
                shouldShowCollectionLogo: y,
                withMonogramDark: N,
                setIsMetabarLocked: b,
                hideOpenInAppLink: h,
              })
            ),
            !w && O
          ),
          w && O
        );
      }
      function ee(e) {
        let t;
        const n = e.post;
        const o = e.collection;
        const r = e.isAmp;
        const l = e.isFixed;
        const i = e.behavior;
        const a = e.shouldShowCollectionLogo;
        const u = void 0 === a || a;
        const h = e.shouldShowBottomMetabar;
        const d = void 0 === h || h;
        const g = e.hideOpenInAppLink;
        const f = (0, x.Fg)();
        const v = "ACCENT_COLOR" === o.colorBehavior;
        const b = v ? (0, M.jN)(o, f) : (0, M.N9)(o, f);
        const E = m.useState(!1);
        const C = c()(E, 2);
        const w = C[0];
        const I = C[1];
        const k = v ? "#E5E5E5" : b.baseColor.border.light;
        const S = m.useState(!1);
        const L = c()(S, 2);
        const T = L[0];
        const y = L[1];
        const N = $($({}, o), {}, { navItems: [] });
        const _ = N.navItems && N.navItems.length > 0;
        const A = d && (u || _);

        const B = (0, s.v9)(e => {
          return e.client.isNativeMedium;
        });

        if (
          (m.useEffect(() => {
            window.innerWidth < f.breakpoints.md && I(!0);
          }, []),
          B)
        )
          return null;
        const R = e => {
                  return {
                    borderTop: "1px solid ".concat(e.baseColor.border.lighter),
                    opacity: 0.4,
                  };
                },
              P = m.createElement(j, {
                collection: N,
                shouldShowCollectionLogo: u,
                withBorderTop: v,
                withTextColorSubtle: v,
                breakpoint: O.j.xs,
              });
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(
            Z.l,
            {
              borderColor: k,
              height: z(_ && d),
              heightSm: Q(!w && u && d),
              isFixed: w || l,
              isLocked: w || T,
              behavior: i,
              marginBottom: 0,
              marginBottomSm: 0,
              breakpoint: O.j.xs,
            },
            m.createElement(q.s, {
              faviconImageId:
                null == o || null === (t = o.favicon) || void 0 === t
                  ? void 0
                  : t.id,
            }),
            m.createElement(
              p.f6,
              { theme: b },
              m.createElement(
                p.xu,
                { backgroundColor: "BACKGROUND" },
                m.createElement(K, {
                  post: n,
                  collection: N,
                  isAmp: r,
                  shouldShowCollectionLogo: u && (!_ || !d),
                  withMonogramDark: !v,
                  setIsMetabarLocked: y,
                  breakpoint: O.j.xs,
                  hideOpenInAppLink: g,
                }),
                A && !v
                  ? m.createElement(x.hS, null, e => {
                      return m.createElement("div", { className: e(R) });
                    })
                  : null,
                !w && A && P
              )
            )
          ),
          w &&
            A &&
            m.createElement(
              p.f6,
              { theme: b },
              m.createElement(p.xu, { backgroundColor: "BACKGROUND" }, P)
            )
        );
      }
      function te(e) {
        return e.collection.isAuroraVisible
          ? m.createElement(ee, e)
          : m.createElement(Y, e);
      }
      var ne = (0, u.Ps)(X(), V, B, M.Gi, M.VR);
    },
  },
]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/9972.6da1f7fd.chunk.js.map
