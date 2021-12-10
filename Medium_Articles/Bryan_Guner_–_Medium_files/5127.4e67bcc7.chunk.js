(self.webpackChunklite = self.webpackChunklite || []).push([
  [5127],
  {
    47578: (e, t, n) => {
      "use strict";
      n.d(t, {
        Vy: () => r,
        KQ: () => u,
        VT: () => s,
        uI: () => m,
        ne: () => f,
      });
      var r;
      const o = n(28655);
      const a = n.n(o);
      const i = n(71439);
      function l() {
        const e = a()([
          "\n  fragment optimizelyData_post on Post {\n    creator {\n      name\n    }\n    collection {\n      name\n    }\n    primaryTopic {\n      name\n    }\n  }\n",
        ]);
        return (l = () => {
          return e;
        }),
        e
      ;
      }
      !(e => {
        (e.TopicSelected = "TopicSelected"),
          (e.UserConvertedToTrialMember = "UserConvertedToTrialMember");
      })(r || (r = {}));

      const c = () => {
          return "undefined" != typeof window;
        };

      var u = (e, t, n) => {
        const r = e.post;
        if (c()) {
          c() && (window.optimizelyDataObject = {});
          const o = r || {}, a = o.creator, i = o.collection, l = o.primaryTopic;
          a && a.name && (window.optimizelyDataObject.author = a.name),
            i && i.name && (window.optimizelyDataObject.publication = i.name),
            l && l.name && (window.optimizelyDataObject.topic = l.name),
            t && (window.optimizelyDataObject.firstName = t),
            n && (window.optimizelyDataObject.trialRenewalDate = n);
        }
      };

      var s = e => {
        c() &&
          void 0 !== window.optimizely &&
          window.optimizely.push({ type: "event", eventName: e });
      };

      var m = (e, t) => {
        c() &&
          ((window.optimizelyDataObject = window.optimizelyDataObject || {}),
          (window.optimizelyDataObject.variants =
            window.optimizelyDataObject.variants || {}),
          (window.optimizelyDataObject.variants[e] = t));
      };

      var f = (0, i.Ps)(l());
    },
    55127: (e, t, n) => {
      "use strict";
      n.d(t, { z: () => X });
      const r = n(67154), o = n.n(r), a = n(63038), i = n.n(a), l = n(59713), c = n.n(l), u = n(67294), s = n(12291), m = n(60046), f = n(43689), d = n(56862), p = n(47578), b = n(28655), y = n.n(b), v = n(71439), g = n(51562), h = n(83484), w = n(55014), S = n(78820), E = n(86280), x = n(62181), _ = n(22091);
      function k() {
        const e = y()([
          "\n  fragment StickyMetaDesktopActions_customStyleSheet on CustomStyleSheet {\n    id\n    ...MetaHeaderEngagement_customStyleSheet\n    ...MetaHeaderLogo_customStyleSheet\n    header {\n      headerScale\n    }\n  }\n  ",
          "\n  ",
          "\n",
        ]);
        return (k = () => {
          return e;
        }),
        e
      ;
      }
      function D() {
        const e = y()([
          "\n  fragment StickyMetaDesktopActions_publisher on Publisher {\n    __typename\n    id\n    name\n    ...MetaHeaderLogo_publisher\n    ...MetaHeaderEngagement_publisher\n  }\n  ",
          "\n  ",
          "\n",
        ]);
        return (D = () => {
          return e;
        }),
        e
      ;
      }
      const C = e => {
                const t = e.publisher,
                      n = e.customStyleSheet,
                      r = (0, E.YC)().value,
                      o = (0, s.v9)(e => {
                        return e.config.authDomain;
                      }),
                      a = "".concat((0, S.Zu)(t), " Homepage"),
                      i = (0, S.PB)(t, o);
                return u.createElement(
                  _.xu,
                  {
                    display: "flex",
                    alignItems: "center",
                    flexGrow: "1",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    sm: { display: "none" },
                  },
                  !r &&
                    u.createElement(
                      u.Fragment,
                      null,
                      u.createElement(
                        _.xu,
                        {
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        },
                        u.createElement(
                          _.xu,
                          { paddingRight: "24px" },
                          u.createElement(
                            d.Z,
                            { href: i, ariaLabel: a },
                            u.createElement(w.fI, {
                              publisher: t,
                              customStyleSheet: n,
                              withAltNameTreatment: !0,
                              withTextColorSubtle: !1,
                              forceSmall: !0,
                            })
                          )
                        ),
                        u.createElement(h.i_, {
                          customStyleSheet: n,
                          followersLinkInFront: !1,
                          publisher: t,
                        })
                      ),
                      u.createElement(
                        _.xu,
                        {
                          display: "flex",
                          alignItems: "flex-end",
                          paddingRight: "24px",
                        },
                        u.createElement(
                          g.W,
                          {
                            featureString: "lo-sticky-header",
                            target: "sign-up-button",
                          },
                          u.createElement(
                            x.R9,
                            {
                              buttonSize: "REGULAR",
                              buttonStyle: "OBVIOUS",
                              isButton: !0,
                              operation: "register",
                              susiEntry: "nav_reg",
                            },
                            "Get started"
                          )
                        )
                      )
                    )
                );
              },
            M = ((0, v.Ps)(D(), h.QP, w.XN), (0, v.Ps)(k(), h.Al, w.Ig), n(6401));
      function A() {
        const e = y()([
          "\n  fragment StickyMetaMobileActions_publisher on Publisher {\n    __typename\n    ... on Collection {\n      slug\n      ...StickyMetaMobileActions_collection\n    }\n    ... on User {\n      username\n      id\n    }\n  }\n  ",
          "\n",
        ]);
        return (A = () => {
          return e;
        }),
        e
      ;
      }
      function O() {
        const e = y()([
          "\n  fragment StickyMetaMobileActions_post on Post {\n    id\n    collection {\n      ...StickyMetaMobileActions_collection\n    }\n    pendingCollection {\n      ...StickyMetaMobileActions_collection\n    }\n  }\n  ",
          "\n",
        ]);
        return (O = () => {
          return e;
        }),
        e
      ;
      }
      function z() {
        const e = y()([
          "\n  fragment StickyMetaMobileActions_collection on Collection {\n    id\n    viewerIsEditor\n    creator {\n      id\n    }\n  }\n",
        ]);
        return (z = () => {
          return e;
        }),
        e
      ;
      }
      const I = e => {
                const t = e.post,
                      n = e.publisher,
                      r = (0, E.YC)().value,
                      o =
                        "Collection" === (null == n ? void 0 : n.__typename)
                          ? n.slug
                          : void 0,
                      a =
                        "User" === (null == n ? void 0 : n.__typename)
                          ? n.username
                          : null;
                return u.createElement(
                  _.xu,
                  {
                    display: "none",
                    sm: { display: "flex", alignItems: "center", flexGrow: "1" },
                  },
                  !r &&
                    u.createElement(
                      g.W,
                      { featureString: "lo-sticky-header", target: "sign-up-button" },
                      u.createElement(
                        x.R9,
                        {
                          buttonSize: "REGULAR",
                          buttonStyle: "OBVIOUS",
                          isButton: !0,
                          operation: "register",
                          susiEntry: "nav_reg",
                        },
                        "Get started"
                      )
                    ),
                  u.createElement(M.a, {
                    collectionSlug: o,
                    postId: null == t ? void 0 : t.id,
                    removeSpacing: !!r,
                    username: a,
                  })
                );
              },
            j = (0, v.Ps)(z()),
            P = ((0, v.Ps)(O(), j), (0, v.Ps)(A(), j), n(65849)),
            T = n(85740),
            L = n(62630),
            R = n(28309),
            U = n(72955),
            N = n(14391),
            Y = n(80637),
            V = n(89349),
            B = n(74465),
            H = n(41996),
            G = n(82482);
      function Z(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      const K = Object.values(H.j);
      const J = n(27952);

      const F = (e, t, n, r, o) => {
        return a => {
          let i;
          return (
            (i = {}),
            c()(i, Y.sm(a), {
              borderTop: "1px solid ".concat(a.baseColor.border.lighter),
              borderBottom: "1px solid ".concat(a.baseColor.border.lighter),
            }),
            c()(
              i,
              "borderTop",
              o ? "1px solid ".concat(a.baseColor.border.lighter) : "none"
            ),
            c()(
              i,
              "borderBottom",
              o ? "1px solid ".concat(a.baseColor.border.lighter) : "none"
            ),
            c()(i, "backgroundColor", a.backgroundColor),
            c()(i, "left", "0"),
            c()(i, "opacity", e ? 1 : 0),
            c()(i, "position", "fixed"),
            c()(i, "right", "0"),
            c()(i, "top", "0"),
            c()(i, "visibility", t ? "hidden" : "visible"),
            c()(i, "zIndex", "".concat(B.ZP.metabar)),
            c()(i, (0, V.nk)("no-preference"), {
              animation: "".concat(e ? n : r, " .2s ease-in-out both"),
            }),
            i
          );
        };
      };

      const W = {
        "0%": { opacity: "0", transform: "translateY(-60px)" },
        "100%": { opacity: "1", transform: "translateY(0px)" },
      };

      const Q = {
        "0%": { opacity: "1", transform: "translateY(0px)" },
        "100%": { opacity: "0", transform: "translateY(-60px)" },
      };

      const q = e => {
        const t = e.enabledOnDesktop,
              n = e.headerScale,
              r = e.post,
              a = e.publisher,
              l = e.variantLoaded,
              c = (0, s.v9)(e => {
                return e.config.authDomain;
              }),
              b = (0, R.Iq)(),
              y = u.useState(!1),
              v = i()(y, 2),
              g = v[0],
              h = v[1],
              w = u.useState(!0),
              S = i()(w, 2),
              x = S[0],
              k = S[1],
              D = (0, R.om)({ slideDownKeyframesName: W }).slideDownKeyframesName,
              M = (0, R.om)({ slideUpKeyframesName: Q }).slideUpKeyframesName,
              A = (0, P.jb)(),
              O = (0, L.Av)(),
              z = (0, E.YC)().value,
              j = (() => {
                const e = (0, R.Fg)(),
                      t = u.useCallback(
                        () => {
                          if ("undefined" != typeof window && window.matchMedia) {
                            let t;

                            const n = ((e, t) => {
                              let n;
                              if (
                                "undefined" == typeof Symbol ||
                                null == e[Symbol.iterator]
                              ) {
                                if (
                                  Array.isArray(e) ||
                                  (n = ((e, t) => {
                                    if (e) {
                                      if ("string" == typeof e) return Z(e, t);
                                      let n = Object.prototype.toString
                                        .call(e)
                                        .slice(8, -1);
                                      return (
                                        "Object" === n &&
                                          e.constructor &&
                                          (n = e.constructor.name),
                                        "Map" === n || "Set" === n
                                          ? Array.from(e)
                                          : "Arguments" === n ||
                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                              n
                                            )
                                          ? Z(e, t)
                                          : void 0
                                      );
                                    }
                                  })(e)) ||
                                  (t && e && "number" == typeof e.length)
                                ) {
                                  n && (e = n);
                                  let r = 0;
                                  const o = () => {};
                                  return {
                                    s: o,
                                    n() {
                                      return r >= e.length
                                        ? { done: !0 }
                                        : { done: !1, value: e[r++] };
                                    },
                                    e(e) {
                                      throw e;
                                    },
                                    f: o,
                                  };
                                }
                                throw new TypeError(
                                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                );
                              }
                              let a, i = !0, l = !1;
                              return {
                                s() {
                                  n = e[Symbol.iterator]();
                                },
                                n() {
                                  const e = n.next();
                                  return (i = e.done), e;
                                },
                                e(e) {
                                  (l = !0), (a = e);
                                },
                                f() {
                                  try {
                                    i || null == n.return || n.return();
                                  } finally {
                                    if (l) throw a;
                                  }
                                },
                              };
                            })(K);

                            try {
                              for (n.s(); !(t = n.n()).done; ) {
                                const r = t.value;
                                if (
                                  window.matchMedia(
                                    G[r](e).replace("@media all and ", "")
                                  ).matches
                                )
                                  return r;
                              }
                            } catch (e) {
                              n.e(e);
                            } finally {
                              n.f();
                            }
                          }
                        },
                        [e]
                      ),
                      n = u.useState(() => {
                        return t();
                      }),
                      r = i()(n, 2),
                      o = r[0],
                      a = r[1];
                return u.useEffect(() => {
                  const e = () => {
                    a(t());
                  };
                  return U.V6.on("resize", e),
                  () => {
                    return U.V6.off("resize", e);
                  }
                ;
                }, []),
                o;
              })(),
              T = (n || A.headerScale) === N.w6.HEADER_SCALE_SMALL;
        return u.useEffect(
          () => {
            ["md", "lg", "xl"].includes(j || "") &&
              O.event("experiment.eligible", {
                experimentId: "ca24bb15e06f",
              });
          },
          [j]
        ),
        u.useEffect(
          () => {
            l && (0, p.uI)("enableDesktopAuroraStickyNav", t);
          },
          [t, l]
        ),
        u.useEffect(() => {
          let e;
          U.V6.on("scroll_down", () => {
            (e = T ? f.Je + 160 : f.Je + 230),
              window.pageYOffset > e && (h(!0), k(!1));
          }),
            U.V6.on("scroll_up", () => {
              (e = T ? f.Je + 160 : f.Je + 230),
                window.pageYOffset <= e && h(!1);
            });
        }),
        u.createElement(
          "div",
          { className: b(F(g, x, D, M, t && !z && g)) },
          u.createElement(
            _.Pm,
            { size: "outset" },
            u.createElement(
              _.xu,
              o()(
                {
                  sm: { display: "flex", alignItems: "center" },
                  height: "60px",
                  top: "0",
                  width: "100%",
                  zIndex: B.ZP.metabar,
                },
                t && !z
                  ? { display: "flex", alignItems: "center" }
                  : { display: "none" }
              ),
              u.createElement(I, { post: r, publisher: a }),
              t && u.createElement(C, { publisher: a }),
              u.createElement(
                d.Z,
                { href: (0, J.cW)(c), ariaLabel: "Homepage" },
                u.createElement(m.YR, null)
              )
            )
          )
        );
      };

      var X = e => {
        return u.createElement(
          T.bZ,
          {
            name: "enable_desktop_aurora_sticky_nav",
            placeholder() {
              return u.createElement(
                q,
                o()({}, e, { enabledOnDesktop: !1, variantLoaded: !1 })
              );
            },
          },
          t => {
            return u.createElement(
              q,
              o()({}, e, { enabledOnDesktop: !!t, variantLoaded: !0 })
            );
          }
        );
      };
    },
  },
]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/5127.4e67bcc7.chunk.js.map
