(self.webpackChunklite = self.webpackChunklite || []).push([
  [2428],
  {
    93337: (e, n, t) => {
      "use strict";
      t.d(n, { K: () => s });
      const r = t(67294);
      const o = t(7530);
      const i = t(28309);
      const a = t(73004);
      const l = t(25885);

      var s = e => {
        const n = e.children,
              t = e.isFetchingMore,
              s = e.onLoadMore,
              c = (0, i.Fg)().backgroundColor,
              u = (0, l.n2)(c),
              d = e => {
                return "rgba("
                  .concat(u[0], ", ")
                  .concat(u[1], ", ")
                  .concat(u[2], ", ")
                  .concat(e, ")");
              },
              m = d(0),
              f = d(0.6);
        return r.createElement(
          o.xu,
          { position: "relative", maxHeight: "250px", overflow: "hidden" },
          r.createElement(
            o.xu,
            {
              background: "linear-gradient(180deg, "
                .concat(m, " 0%, ")
                .concat(m, " 5%, ")
                .concat(f, " 5%, ")
                .concat(c, " 65%)"),
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              height: "100%",
              width: "100%",
              paddingBottom: "24px",
              position: "absolute",
              top: "0",
              zIndex: "5",
            },
            r.createElement(
              o.rU,
              { linkStyle: "OBVIOUS", onClick: s, disabled: t },
              t ? "Loading more..." : "Show more",
              t ? null : r.createElement(a.Z, null)
            )
          ),
          n
        );
      };
    },
    36698: (e, n, t) => {
      "use strict";
      t.d(n, { IX: () => B, Yz: () => L });
      const r = t(28655), o = t.n(r), i = t(67154), a = t.n(i), l = t(59713), s = t.n(l), c = t(63038), u = t.n(c), d = t(71439), m = t(67294), f = t(12291), p = t(2955), g = t(6742), h = t(50077), b = t(68387), v = t(93337), P = t(86280), x = t(22091), E = t(64504), w = t(62630), y = t(27572), _ = t(51512), O = t(28309), k = t(72955), S = t(27952);
      function C() {
        const e = o()([
          "\n  fragment PublisherHomepagePosts_publisher on Publisher {\n    __typename\n    id\n    homepagePostsConnection(\n      paging: {limit: $homepagePostsLimit, from: $homepagePostsFrom}\n      includeDistributedResponses: $includeDistributedResponses\n    ) {\n      posts {\n        ...PublisherHomepagePosts_post\n        creator {\n          ...EntityDrivenSubscriptionCallToAction_creator\n        }\n      }\n      pagingInfo {\n        next {\n          ...PublisherHomepagePosts_pagingInfo\n        }\n      }\n    }\n    ...CardByline_publisher\n    # TODO(chris): Requesting user-specific information is anti-pattern, resolve\n    # by moving newsletterV3 to publisher schema and requesting newsletter creator.\n    ...NewsletterV3Promo_publisher\n    ...PublisherHomepagePosts_user\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ]);
        return (C = () => {
          return e;
        }),
        e
      ;
      }
      function I() {
        const e = o()([
          "\n  fragment PublisherHomepagePosts_user on User {\n    id\n    showSubscribeToProfilePromo\n  }\n",
        ]);
        return (I = () => {
          return e;
        }),
        e
      ;
      }
      function T() {
        const e = o()([
          "\n  fragment PublisherHomepagePosts_pagingInfo on PageParams {\n    from\n    limit\n  }\n",
        ]);
        return (T = () => {
          return e;
        }),
        e
      ;
      }
      function j() {
        const e = o()([
          "\n  fragment PublisherHomepagePosts_post on Post {\n    id\n    collection {\n      id\n      name\n      ...collectionUrl_collection\n    }\n    ...PostPresentationTracker_post\n    ...TruncatedPostCard_post\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ]);
        return (j = () => {
          return e;
        }),
        e
      ;
      }
      function F(e, n) {
        const t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(n => {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function D(e) {
        for (let n = 1; n < arguments.length; n++) {
          const t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? F(Object(t), !0).forEach(n => {
                s()(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : F(Object(t)).forEach(n => {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }

      const H = e => {
          const n = e.viewerIsPublisher,
                t = e.authorName,
                r = (0, f.v9)(e => {
                  return e.config.authDomain;
                }),
                o = (0, O.Iq)();
          return n
            ? m.createElement(
                m.Fragment,
                null,
                "Have something to share?",
                " ",
                m.createElement(
                  x.rU,
                  {
                    href: (0, S.Zp)(r),
                    className: o({ textDecoration: "underline" }),
                  },
                  "Write your first story."
                )
              )
            : m.createElement(
                m.Fragment,
                null,
                t,
                " hasn't written any stories yet."
              );
        };

      var B = e => {
        const n = e.publisher,
              t = e.fetchMore,
              r = n.homepagePostsConnection,
              o = null == r ? void 0 : r.posts,
              i = "User" === n.__typename,
              l = (0, w.Av)(),
              s = (0, y.Lk)(),
              c = (0, P.YC)().value,
              d = m.useState(!1),
              f = u()(d, 2),
              h = f[0],
              O = f[1],
              k = m.useCallback(
                () => {
                  if (
                    (i ||
                      l.event("collection.loadMore", {
                        source: D(D({}, s), {}, { collectionId: n.id }),
                      }),
                    t)
                  )
                    return O(!0),
                    t().finally(() => {
                      O(!1);
                    })
                  ;
                },
                [t, O]
              );
        if (!o) return null;
        if (0 === o.length && i) {
          const S = (null == c ? void 0 : c.id) === n.id;
          return m.createElement(
            x.xu,
            {
              boxSizing: "content-box",
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: "80px",
              paddingBottom: "330px",
              textAlign: "center",
            },
            m.createElement(
              x.Pm,
              { size: "inset" },
              m.createElement(
                E.F,
                { scale: "L" },
                m.createElement(H, {
                  viewerIsPublisher: S,
                  authorName: n.name,
                })
              )
            )
          );
        }
        const C = e => {
          return (
            i &&
            n.showSubscribeToProfilePromo &&
            (1 === e || 1 === (null == o ? void 0 : o.length))
          );
        };
        return m.createElement(
          x.Pm,
          { size: "inset" },
          o.map((e, l) => {
            let s;
            let c;
            const u = 0 === l;
            const d = C(l);
            const f = !C(l - 1);

            const P = {
              post: e,
              hideAuthor: i,
              isFirst: u,
              publisher: n,
              index: l,
              includeTopDivider: f,
              maxWidthSize: "full",
              showInResponseToPostPreview: !0,
              mayShowPinned: !0,
            };

            return l === o.length - 1 &&
              t &&
              null != r &&
              null !== (s = r.pagingInfo) &&
              void 0 !== s &&
              s.next
              ? m.createElement(
                  v.K,
                  { key: e.id, isFetchingMore: h, onLoadMore: k },
                  m.createElement(p.Xc, P)
                )
              : u
              ? m.createElement(
                  x.xu,
                  {
                    key: e.id,
                    xs: { marginTop: "40px" },
                    sm: { marginTop: "40px" },
                    md: { marginTop: "64px" },
                    lg: { marginTop: "64px" },
                    xl: { marginTop: "64px" },
                  },
                  m.createElement(p.Xc, a()({ key: e.id }, P)),
                  d &&
                    m.createElement(
                      x.xu,
                      { marginTop: "50px" },
                      m.createElement(g.Xw, { publisher: n })
                    ),
                  m.createElement(
                    _.cW,
                    {
                      source: {
                        name: b.Qw,
                        userId:
                          null === (c = e.creator) || void 0 === c
                            ? void 0
                            : c.id,
                      },
                    },
                    m.createElement(b.Qj, { creator: e.creator })
                  )
                )
              : m.createElement(
                  m.Fragment,
                  { key: e.id },
                  m.createElement(p.Xc, a()({ key: e.id }, P)),
                  d && m.createElement(g.Xw, { publisher: n })
                );
          })
        );
      };

      const R = (0, d.Ps)(j(), k.h_, p.Dn, S.nf);
      const U = (0, d.Ps)(T());
      const X = (0, d.Ps)(I());
      var L = (0, d.Ps)(C(), h.Gk, g.Rf, U, R, X, b.w7);
    },
    7678: (e, n, t) => {
      "use strict";
      t.d(n, { w3: () => y, FX: () => O, Do: () => k, zH: () => S });
      const r = t(28655), o = t.n(r), i = t(50008), a = t.n(i), l = t(63038), s = t.n(l), c = t(71439), u = t(67294), d = t(28859), m = t(22669), f = t(51684), p = t(8558), g = t(7530), h = t(64504), b = t(67995), v = t(28309), P = t(90038);
      function x() {
        const e = o()([
          "\n  fragment PublisherSidebar_publisher on Publisher {\n    __typename\n    id\n    name\n    ... on Collection {\n      ...PublisherSidebar_collection\n    }\n    ... on User {\n      ...PublisherSidebar_user\n    }\n  }\n  ",
          "\n  ",
          "\n",
        ]);
        return (x = () => {
          return e;
        }),
        e
      ;
      }
      function E() {
        const e = o()([
          "\n  fragment PublisherSidebar_user on User {\n    id\n    username\n    bio\n    name\n    imageId\n  }\n",
        ]);
        return (E = () => {
          return e;
        }),
        e
      ;
      }
      function w() {
        const e = o()([
          "\n  fragment PublisherSidebar_collection on Collection {\n    id\n    name\n    tagline\n  }\n",
        ]);
        return (w = () => {
          return e;
        }),
        e
      ;
      }

      var y = u.forwardRef((e, n) => {
          const t = e.publisher,
                r = e.isClearOfBounds,
                o = u.useRef(null),
                i = u.useContext(d.u6).watchedBounds,
                l = u.useState(r || !1),
                c = s()(l, 2),
                x = c[0],
                E = c[1],
                w = u.useState({}),
                y = s()(w, 2),
                O = y[0],
                k = O.topOffset,
                S = O.fixedWidth,
                C = O.isFixed,
                I = y[1],
                T = u.useCallback(
                  () => {
                    !((e, n, t, r) => {
                      t((0, f.b2)(e, n, ["footer"], { threshold: 10 }));
                    })(o, i, E);
                  },
                  [i, n, E]
                ),
                j = u.useCallback(
                  () => {
                    _(i, I, n);
                  },
                  [i, n, I]
                ),
                F = "object" === a()(n) ? n : null,
                D = (null == F ? void 0 : F.current) || void 0;
          u.useEffect((0, f.hE)(T, D, !0), [T, null == F ? void 0 : F.current]),
            u.useEffect((0, f.hE)(j, D, !1), [
              j,
              null == F ? void 0 : F.current,
            ]),
            u.useEffect(
              () => {
                void 0 === C &&
                  setTimeout(() => {
                    _(i, I, n);
                  }, 50);
              },
              [i, I]
            ),
            u.useEffect(
              () => {
                j(), T();
              },
              [i]
            );
          const H = "User" === t.__typename ? t.bio : t.tagline, B = "User" === t.__typename ? void 0 : 6, R = (0, v.Iq)(), U = (0, b.n)({ name: "heading", scale: "XS" });
          return u.createElement(
            f.HX,
            {
              scrollableRef: n,
              sidebarRef: o,
              visible: x && void 0 !== C,
              isFixed: C,
              topOffset: k,
              fixedWidth: S,
              disableTransition: !0,
            },
            "User" === t.__typename &&
              t.imageId &&
              u.createElement(
                g.xu,
                {
                  marginBottom: "24px",
                  maxHeight: "131px",
                  maxWidth: "131px",
                  overflow: "hidden",
                },
                u.createElement(p.Ee, {
                  src: (0, P.W6)({
                    miroId: t.imageId,
                    width: 131,
                    height: 131,
                    strategy: P._S.Crop,
                  }),
                  width: 131,
                })
              ),
            u.createElement(
              g.xu,
              { marginBottom: "8px" },
              u.createElement(
                "h2",
                { className: R([U, { wordBreak: "break-word" }]) },
                t.name
              )
            ),
            u.createElement(
              g.xu,
              { marginBottom: "16px" },
              u.createElement(
                h.F,
                { scale: "M", clamp: B },
                u.createElement(m.Z, { wrapLinks: !0 }, H)
              )
            )
          );
        });

      const _ = (e, n, t) => {
        let r;
        let o;
        let i;
        let l;
        let s;
        let c;

        const u =
          null === (r = e.get("header")) ||
          void 0 === r ||
          null === (o = r.ref) ||
          void 0 === o
            ? void 0
            : o.current;

        const d =
          null === (i = e.get("ghost-track")) ||
          void 0 === i ||
          null === (l = i.ref) ||
          void 0 === l
            ? void 0
            : l.current;

        const m = "object" === a()(t) ? (null == t ? void 0 : t.current) : null;
        if ("undefined" != typeof window && u && d) {
          const f = m ? m.scrollTop : window.scrollY,
                p = null == m ? void 0 : m.getBoundingClientRect(),
                g =
                  null !== (s = null == p ? void 0 : p.top) && void 0 !== s
                    ? s
                    : 0,
                h =
                  null !== (c = null == p ? void 0 : p.width) && void 0 !== c
                    ? c
                    : 0,
                b = u.offsetTop + u.offsetHeight + 64,
                v = f + 150 > b;
          n({
            topOffset: v ? 150 + g : b,
            fixedWidth: v ? h : 0,
            isFixed: v,
          });
        } else n({ isFixed: void 0, topOffset: void 0 });
      };

      var O = (0, c.Ps)(w());
      var k = (0, c.Ps)(E());
      var S = (0, c.Ps)(x(), O, k);
    },
    73036: (e, n, t) => {
      "use strict";
      t.d(n, { M: () => l });
      const r = t(67294);
      const o = t(28859);
      const i = t(22091);
      const a = t(28309);

      var l = e => {
        const n = e.children, t = (0, a.Iq)();
        return r.createElement(
          i.xu,
          { position: "relative" },
          r.createElement(o.TA, {
            name: "posts-track",
            type: "ghost",
            className: t({
              position: "absolute",
              left: 0,
              top: "".concat(550, "px"),
              bottom: "100px",
              width: "10px",
              pointerEvents: "none",
            }),
          }),
          n
        );
      };
    },
  },
]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/2428.97159ff4.chunk.js.map
