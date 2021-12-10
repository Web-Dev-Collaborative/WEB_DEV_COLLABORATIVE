(self.webpackChunklite = self.webpackChunklite || []).push([
  [6532],
  {
    6742: (e, n, t) => {
      "use strict";
      t.d(n, { e0: () => T, Rf: () => C, Xw: () => R });
      const r = t(59713), o = t.n(r), l = t(28655), a = t.n(l), i = t(71439), u = t(67294), c = t(12291), s = t(31429), d = t(55346), m = t(86280), p = t(7530), f = t(64504), v = t(62630), E = t(27572), h = t(28309), w = t(72955), g = t(14391), x = t(80637), b = t(27952);
      function S() {
        const e = a()([
          "\n  fragment NewsletterV3Promo_publisher on Publisher {\n    __typename\n    ... on User {\n      id\n      username\n      name\n      viewerIsUser\n      newsletterV3 {\n        id\n        ...NewsletterV3Promo_newsletterV3\n      }\n    }\n    ... on Collection {\n      id\n      slug\n      domain\n      name\n      viewerIsEditor\n      newsletterV3 {\n        id\n        ...NewsletterV3Promo_newsletterV3\n      }\n    }\n  }\n  ",
          "\n",
        ]);
        return (S = () => {
          return e;
        }),
        e
      ;
      }
      function y() {
        const e = a()([
          "\n  fragment NewsletterV3Promo_newsletterV3 on NewsletterV3 {\n    slug\n    name\n    description\n    ...NewsletterV3SubscribeButton_newsletterV3\n    ...NewsletterV3SubscribeByEmail_newsletterV3\n  }\n  ",
          "\n  ",
          "\n",
        ]);
        return (y = () => {
          return e;
        }),
        e
      ;
      }
      var T = (0, i.Ps)(y(), s.B, d.Lh);
      var C = (0, i.Ps)(S(), T);

      const _ = e => {
        return o()(
          {
            borderTop: "3px solid ".concat(e.accentColor.border.normal),
            padding: "32px 32px 26px 32px",
            marginTop: "8px",
            marginBottom: "25px",
            backgroundColor: e.baseColor.background.light,
          },
          x.sm(e),
          { padding: "24px 24px 28px 24px" }
        );
      };

      var R = e => {
        let n;
        let t;
        let r;
        let o;
        let l;
        const a = e.postId;
        const i = e.publisher;
        const x = u.useRef(null);

        const S = (0, c.v9)(e => {
          return { authDomain: e.config.authDomain, isAmp: e.config.isAmp };
        });

        const y = S.authDomain;
        const T = S.isAmp;
        const C = (0, v.Av)();
        const R = (0, h.Iq)();
        const P = (0, m.YC)().value;
        const k = i.newsletterV3;
        const I = null == k ? void 0 : k.type;
        const N = i.username;
        const U = void 0 === N ? "" : N;

        const L = (0, b.iB)(
          null !== (n = null == k ? void 0 : k.slug) && void 0 !== n
            ? n
            : "",
          y,
          I === g.Rr.NEWSLETTER_TYPE_COLLECTION ? i : void 0,
          I === g.Rr.NEWSLETTER_TYPE_AUTHOR && U ? U : void 0
        );

        switch (I) {
          case g.Rr.NEWSLETTER_TYPE_COLLECTION:
            (t = "Sign up for ".concat(null == k ? void 0 : k.name)),
              (r = "0px"),
              (o = "You're an editor of ".concat(
                null == k ? void 0 : k.name
              )),
              (l = i.viewerIsEditor);
            break;
          case g.Rr.NEWSLETTER_TYPE_AUTHOR:
            (t = "Get ".concat(i.name, "'s stories in your inbox")),
              (r = "6px"),
              (o = "You cannot subscribe to yourself"),
              (l = i.viewerIsUser);
        }
        let O = !1;

        const B = () => {
          !O &&
            A() &&
            (C.event("newsletterV3.promoViewed", {
              newsletterV3Id: null == k ? void 0 : k.id,
              postId: a,
            }),
            (O = !0));
        };

        const A = () => {
          let e;
          if (!x.current) return !1;
          const n =
                    null === (e = x.current) || void 0 === e
                      ? void 0
                      : e.getBoundingClientRect(),
                t = n.top + n.height / 2;
          return t >= 0 && t <= window.innerHeight;
        };

        return u.useEffect(() => {
          return B(),
          window && w.V6.on("scroll", B),
          () => {
            w.V6.off("scroll", B);
          }
        ;
        }, []),
        u.createElement(
          E.cW,
          {
            source: {
              name: "newsletter_v3_promo",
              susiEntry: "newsletter_v3_promo",
            },
          },
          u.createElement(
            "div",
            { ref: x, className: R(_) },
            u.createElement(
              p.xu,
              { paddingBottom: r },
              u.createElement(
                f.X6,
                { scale: { xs: "S", sm: "S", md: "M", lg: "M", xl: "M" } },
                t
              )
            ),
            I === g.Rr.NEWSLETTER_TYPE_COLLECTION &&
              u.createElement(
                u.Fragment,
                null,
                u.createElement(
                  p.xu,
                  { paddingTop: "4px" },
                  u.createElement(
                    f.F,
                    { tag: "h3", scale: "S", color: "DARKER" },
                    "By ".concat(i.name)
                  )
                ),
                u.createElement(
                  p.xu,
                  { paddingTop: "8px", paddingBottom: "10px" },
                  u.createElement(
                    f.F,
                    {
                      scale: {
                        xs: "M",
                        sm: "M",
                        md: "L",
                        lg: "L",
                        xl: "L",
                      },
                      color: "DARKER",
                    },
                    null == k ? void 0 : k.description,
                    " ",
                    !T &&
                      u.createElement(
                        p.rU,
                        { inline: !0, linkStyle: "OBVIOUS", href: L },
                        "Take a look."
                      )
                  )
                )
              ),
            l
              ? u.createElement(
                  p.xu,
                  { paddingTop: "10px" },
                  u.createElement(f.F, { scale: "M", color: "DARKER" }, o)
                )
              : u.createElement(
                  p.xu,
                  { display: "flex", flexWrap: "wrap" },
                  k &&
                    (P || T
                      ? u.createElement(s.x, {
                          newsletterV3: k,
                          buttonLayout: "COMPACT",
                          helperTextColor: "DARKER",
                          redirectUrl: T ? L : void 0,
                        })
                      : u.createElement(d.QL, { newsletterV3: k }))
                )
          )
        )
      ;
      };
    },
    54415: (e, n, t) => {
      "use strict";
      t.d(n, { v: () => s, G: () => d });
      const r = t(28655), o = t.n(r), l = t(71439), a = t(67294), i = t(73882), u = t(98281);
      function c() {
        const e = o()([
          "\n  fragment PublisherAvatar_publisher on Publisher {\n    __typename\n    ... on Collection {\n      id\n      ...CollectionAvatar_collection\n    }\n    ... on User {\n      id\n      ...UserAvatar_user\n    }\n  }\n  ",
          "\n  ",
          "\n",
        ]);
        return (c = () => {
          return e;
        }),
        e
      ;
      }
      var s = (0, l.Ps)(c(), i.d, u.WQ),
        d = e => {
          const n = e.link, t = void 0 !== n && n, r = e.scale, o = void 0 === r ? "M" : r, l = e.publisher;
          switch (l.__typename) {
            case "User":
              return a.createElement(u.ZP, { link: t, scale: o, user: l });
            case "Collection":
              return a.createElement(i.v, {
                link: t,
                size: u.wC[o],
                collection: l,
              });
            default:
              return null;
          }
        };
    },
    78886: (e, n, t) => {
      "use strict";
      t.d(n, { eB: () => S, FB: () => y });
      const r = t(28655), o = t.n(r), l = t(63038), a = t.n(l), i = t(46829), u = t(71439), c = t(67294), s = t(12291), d = t(54415), m = t(44935), p = t(41832), f = t(22091), v = t(64504), E = t(67995), h = t(28309), w = t(27952);
      function g() {
        const e = o()([
          "\n  query PublisherSidebarFollowsQuery($userId: ID!, $limit: Int) {\n    userFollows(userId: $userId, limit: $limit) {\n      ... on User {\n        hasDomain\n        ...UserMentionTooltip_user\n        ...PublisherSidebarFollows_followedEntity\n      }\n      ... on Collection {\n        ...CollectionTooltip_collection\n        ...PublisherSidebarFollows_followedEntity\n      }\n    }\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ]);
        return (g = () => {
          return e;
        }),
        e
      ;
      }
      function x() {
        const e = o()([
          "\n  fragment PublisherSidebarFollows_followedEntity on Publisher {\n    __typename\n    id\n    name\n    ...PublisherAvatar_publisher\n  }\n  ",
          "\n",
        ]);
        return (x = () => {
          return e;
        }),
        e
      ;
      }
      function b() {
        const e = o()([
          "\n  fragment PublisherSidebarFollows_user on User {\n    id\n    name\n    socialStats {\n      followingCount\n      followerCount\n    }\n    username\n    ...userUrl_user\n  }\n  ",
          "\n",
        ]);
        return (b = () => {
          return e;
        }),
        e
      ;
      }

      var S = e => {
        let n;
        let t;
        let r;
        const o = e.publisher;
        const l = e.withBottomBorder;
        const u = void 0 !== l && l;
        const g = (0, h.Iq)();

        const x = (0, s.v9)(e => {
          return e;
        });

        const b = x.config;
        const S = b.authDomain;
        const y = b.isAmp;
        const T = x.navigation.currentLocation;
        const _ = (0, w.Mz)(null !== (n = o.username) && void 0 !== n ? n : "");

        const R = (0, E.n)({
          name: "detail",
          scale: "S",
          clamp: 1,
          leadingTrim: !1,
          color: "LIGHTER",
        });

        const P = g([R, { wordBreak: "break-all" }]);

        const k = (0, i.useLazyQuery)(C, {
          ssr: !1,
          variables: { userId: o.id, limit: 5 },
        });

        const I = a()(k, 2);
        const N = I[0];
        const U = I[1];
        const L = U.called;
        const O = U.loading;
        const B = U.error;
        let A = U.data;
        const D = (A = void 0 === A ? { userFollows: void 0 } : A).userFollows;
        return y
          ? null
          : L
          ? O || B || !D || !D.length
            ? null
            : c.createElement(
                f.xu,
                {
                  borderTop: "BASE_LIGHTER",
                  borderBottom: u ? "NONE" : void 0,
                },
                c.createElement(
                  f.xu,
                  { marginTop: "32px", marginBottom: "32px" },
                  c.createElement(
                    "span",
                    {
                      className: g({
                        textTransform: "uppercase",
                        marginBottom: "8px",
                      }),
                    },
                    c.createElement(
                      v.F,
                      { scale: "S", tag: "span" },
                      "".concat(o.name, " Follows")
                    )
                  ),
                  c.createElement(
                    "ul",
                    { className: g({ marginTop: "8px" }) },
                    D.map(e => {
                      const n =
                        "User" === e.__typename
                          ? (0, w.AW)(e, S)
                          : (0, w.WG)(e, T, S);
                      return c.createElement(
                        "li",
                        {
                          className: g({
                            display: "grid",
                            gridTemplateColumns: "auto 1fr auto",
                          }),
                          key: null == e ? void 0 : e.id,
                        },
                        c.createElement(
                          f.xu,
                          { paddingRight: "12px" },
                          c.createElement(d.G, {
                            link: !0,
                            publisher: e,
                            scale: "XXXS",
                          })
                        ),
                        c.createElement(
                          "section",
                          { className: g({ wordBreak: "break-word" }) },
                          c.createElement(
                            f.xu,
                            {
                              marginBottom: "8px",
                              paddingRight: "10px",
                              tag: "span",
                            },
                            c.createElement(
                              f.rU,
                              { href: n },
                              c.createElement(
                                f.$W,
                                {
                                  placement: "right",
                                  targetDistance: 15,
                                  mouseLeaveDelay: 200,
                                  role: "tooltip",
                                  popoverRenderFn() {
                                    return "User" === e.__typename
                                      ? c.createElement(p.Z, { user: e })
                                      : c.createElement(m.L, {
                                          collection: e,
                                          buttonSize: "COMPACT",
                                          buttonStyleFn(e) {
                                            return e ? "OBVIOUS" : "STRONG";
                                          },
                                        });
                                  },
                                },
                                c.createElement(
                                  "h4",
                                  { className: P },
                                  e.name
                                )
                              )
                            )
                          )
                        )
                      );
                    })
                  ),
                  (null === (t = o.socialStats) || void 0 === t
                    ? void 0
                    : t.followingCount) > 5
                    ? c.createElement(
                        v.F,
                        { scale: "S" },
                        c.createElement(
                          f.rU,
                          { linkStyle: "SUBTLE", href: _ },
                          "See all (",
                          null === (r = o.socialStats) || void 0 === r
                            ? void 0
                            : r.followingCount,
                          ")"
                        )
                      )
                    : null
                )
              )
          : (N(), null);
      };

      var y = (0, u.Ps)(b(), w.$m);
      const T = (0, u.Ps)(x(), d.v);
      const C = (0, u.Ps)(g(), p.O, m.g, T);
    },
    56365: (e, n, t) => {
      "use strict";
      t.d(n, { f: () => f, w: () => v });
      const r = t(28655), o = t.n(r), l = t(67154), a = t.n(l), i = t(6479), u = t.n(i), c = t(71439), s = t(67294), d = t(85489), m = t(42933);
      function p() {
        const e = o()([
          "\n  fragment CustomBackgroundWrapper_customStyleSheet on CustomStyleSheet {\n    id\n    global {\n      colorPalette {\n        background {\n          ...getHexFromColorValue_colorValue\n        }\n      }\n    }\n  }\n  ",
          "\n",
        ]);
        return (p = () => {
          return e;
        }),
        e
      ;
      }
      var f = e => {
          const n = e.children, t = e.customStyleSheet, r = u()(e, ["children", "customStyleSheet"]);
          return s.useMemo(
            () => {
              let e, n;
              return (0, d.eQ)(
                null == t ||
                  null === (e = t.global) ||
                  void 0 === e ||
                  null === (n = e.colorPalette) ||
                  void 0 === n
                  ? void 0
                  : n.background
              );
            },
            [t]
          )
            ? s.createElement(m.Z, a()({ backgroundColor: "BACKGROUND" }, r), n)
            : s.createElement(m.Z, r, n);
        },
        v = (0, c.Ps)(p(), d.xW);
    },
    44935: (e, n, t) => {
      "use strict";
      t.d(n, { L: () => m, g: () => p });
      const r = t(28655), o = t.n(r), l = t(71439), a = t(67294), i = t(73882), u = t(84783), c = t(7530), s = t(64504);
      function d() {
        const e = o()([
          "\n  fragment CollectionTooltip_collection on Collection {\n    id\n    name\n    description\n    subscriberCount\n    ...CollectionAvatar_collection\n    ...CollectionFollowButton_collection\n  }\n  ",
          "\n  ",
          "\n",
        ]);
        return (d = () => {
          return e;
        }),
        e
      ;
      }
      var m = e => {
          const n = e.collection, t = e.buttonSize, r = e.buttonStyleFn, o = n.name, l = n.description;
          return a.createElement(
            c.xu,
            {
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              width: "300px",
            },
            a.createElement(
              c.xu,
              {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                whiteSpace: "normal",
                borderBottom: "BASE_LIGHTER",
                paddingBottom: "10px",
                marginBottom: "10px",
              },
              a.createElement(
                c.xu,
                {
                  display: "flex",
                  flexDirection: "column",
                  paddingRight: "5px",
                },
                a.createElement(s.X6, { scale: "S" }, o),
                a.createElement(s.F, { scale: "S" }, l)
              ),
              a.createElement(
                c.xu,
                null,
                a.createElement(i.v, { collection: n, link: !0 })
              )
            ),
            a.createElement(
              c.xu,
              {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              },
              a.createElement(
                s.F,
                { scale: "M" },
                "Followed by ",
                n.subscriberCount,
                " people"
              ),
              a.createElement(u.Fp, {
                collection: n,
                simpleButton: !0,
                buttonSize: t,
                buttonStyleFn: r,
                susiEntry: "follow_card",
              })
            )
          );
        },
        p = (0, l.Ps)(d(), i.d, u.Iq);
    },
    78221: (e, n, t) => {
      "use strict";
      t.d(n, { Z: () => s, U: () => d });
      const r = t(28655), o = t.n(r), l = t(71439), a = t(67294), i = t(8558), u = t(90038);
      function c() {
        const e = o()([
          "\n  fragment SequenceCoverImage_sequence on Sequence {\n    title\n    coverImage {\n      id\n    }\n  }\n",
        ]);
        return (c = () => {
          return e;
        }),
        e
      ;
      }
      function s(e) {
        const n = e.sequence, t = e.width, r = e.height, o = n.title, l = n.coverImage;
        return l
          ? a.createElement(
              "div",
              null,
              a.createElement(i.UV, {
                miroId: l.id,
                alt: o || "Collection on Medium",
                width: t,
                height: r,
                strategy: u._S.Resample,
                freezeGifs: !1,
              })
            )
          : null;
      }
      var d = (0, l.Ps)(c());
    },
    93258: (e, n, t) => {
      "use strict";
      t.d(n, { d: () => p });
      const r = t(63038);
      const o = t.n(r);
      const l = t(67294);
      const a = t(885);
      const i = t(86280);
      const u = t(324);
      const c = t(7530);
      const s = t(28309);
      const d = t(51064);
      const m = t(534);

      var p = e => {
        const n = e.buttonSize, t = e.targetUserId, r = (0, d.O)(!1), p = o()(r, 3), f = p[0], v = p[1], E = p[2], h = (0, s.Fg)(), w = (0, u.Uo)().baseTheme, g = (0, m.q3)(h, w), x = (0, i.YC)().value;
        return x
          ? l.createElement(
              s.f6,
              { theme: g },
              l.createElement(
                a.Z,
                { targetUserId: t, viewerId: x && x.id },
                e => {
                  const t = e.mutate;
                  return l.createElement(
                    c.zx,
                    {
                      buttonStyle: f ? "SUBTLE" : "ERROR",
                      onClick: t,
                      size: n || "REGULAR",
                      onMouseEnter: v,
                      onMouseLeave: E,
                    },
                    f ? "Unblock" : "Blocked"
                  );
                }
              )
            )
          : null;
      };
    },
    79208: (e, n, t) => {
      "use strict";
      t.d(n, { Dm: () => r, JA: () => x });
      var r;
      const o = t(63038);
      const l = t.n(o);
      const a = t(87757);
      const i = t.n(a);
      const u = t(48926);
      const c = t.n(u);
      const s = t(94301);
      const d = t.n(s);
      const m = t(67294);
      const p = t(61250);
      !(e => {
        (e[(e.NONE = 0)] = "NONE"),
          (e[(e.STARTING = 1)] = "STARTING"),
          (e[(e.UPLOADING = 2)] = "UPLOADING"),
          (e[(e.UPLOADED = 3)] = "UPLOADED");
      })(r || (r = {}));
      const f = new Set(["jpg", "jpeg", "png", "gif"]);

      const v = e => {
        return new Promise(n => {
          return setTimeout(n, e);
        });
      };

      const E = (() => {
        const e = c()(
          i().mark(function e(n, t) {
            let r, o;
            return i().wrap(e => {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      d()(n, {
                        credentials: "same-origin",
                        method: "POST",
                        headers: {
                          accept: "application/json",
                          "Content-Type": "application/json",
                          "x-xsrf-token": "1",
                          "X-Obvious-CID": "web",
                        },
                        body: JSON.stringify({ url: t }),
                      })
                    );
                  case 2:
                    return (r = e.sent), (e.next = 5), r.text();
                  case 5:
                    return (
                      (o = e.sent),
                      e.abrupt(
                        "return",
                        JSON.parse(o.replace("])}while(1);</x>", ""))
                      )
                    );
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (n, t) {
          return e.apply(this, arguments);
        };
      })();

      const h = (() => {
        const e = c()(
          i().mark(function e(n, t) {
            let r, o, l;
            return i().wrap(e => {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = new FormData()).append("uploadedFile", t),
                      (e.next = 4),
                      d()(n, {
                        credentials: "same-origin",
                        method: "POST",
                        headers: {
                          "x-xsrf-token": "1",
                          "X-Obvious-CID": "web",
                        },
                        body: r,
                      })
                    );
                  case 4:
                    return (o = e.sent), (e.next = 7), o.text();
                  case 7:
                    return (
                      (l = e.sent),
                      e.abrupt(
                        "return",
                        JSON.parse(l.replace("])}while(1);</x>", ""))
                      )
                    );
                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (n, t) {
          return e.apply(this, arguments);
        };
      })();

      const w = "CreateUpload";

      const g = new Error(
        "Image upload failed. The URL you provided may be invalid."
      );

      var x = (e, n, t) => {
        const o = m.useState(r.NONE),
              a = l()(o, 2),
              u = a[0],
              s = a[1],
              d = m.useRef(null),
              x = m.useCallback(
                () => {
                  d.current && d.current.click();
                },
                [d.current]
              ),
              b = (0, p.BS)(w),
              S = (0, p.BS)("CreateUploadUrl");
        function y() {
          return T.apply(this, arguments);
        }
        function T() {
          return (T = c()(
            i().mark(function e() {
              return i().wrap(e => {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return s(r.STARTING), (e.next = 3), v(0);
                    case 3:
                      s(r.UPLOADING);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function C() {
          return (C = c()(
            i().mark(function t(o) {
              let l, a, u, c, d;
              return i().wrap(
                t => {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), y();
                      case 2:
                        if (((t.prev = 2), S)) {
                          t.next = 5;
                          break;
                        }
                        throw new Error(
                          "Expected ".concat(w, " route to exist")
                        );
                      case 5:
                        return (t.next = 7), E(S.pathPattern, o);
                      case 7:
                        (a = t.sent),
                          (u = a.success),
                          (c = a.payload),
                          u &&
                          null != c &&
                          null !== (l = c.value) &&
                          void 0 !== l &&
                          l.fileId
                            ? (((d = new Image()).onload = () => {
                                s(r.UPLOADED),
                                  e(
                                    c,
                                    {
                                      url: o,
                                      height: d.height,
                                      width: d.width,
                                    },
                                    () => {
                                      return s(r.NONE);
                                    }
                                  );
                              }),
                              (d.onerror = () => {
                                n(g);
                              }),
                              (d.src = o))
                            : n(g),
                          (t.next = 15);
                        break;
                      case 12:
                        (t.prev = 12), (t.t0 = t.catch(2)), n(t.t0);
                      case 15:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[2, 12]]
              );
            })
          )).apply(this, arguments);
        }
        function _(e) {
          return R.apply(this, arguments);
        }
        function R() {
          return (R = c()(
            i().mark(function o(l) {
              let a, u, c, d, m, p, v, E;
              return i().wrap(
                o => {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        if ((a = null == l ? void 0 : l[0])) {
                          o.next = 3;
                          break;
                        }
                        return o.abrupt("return");
                      case 3:
                        if (
                          ((u = a.name.split(".").pop()),
                          f.has((null == u ? void 0 : u.toLowerCase()) || ""))
                        ) {
                          o.next = 7;
                          break;
                        }
                        return t && t(), o.abrupt("return");
                      case 7:
                        return (o.next = 9), y();
                      case 9:
                        if (((o.prev = 9), b)) {
                          o.next = 12;
                          break;
                        }
                        throw new Error(
                          "Expected ".concat(w, " route to exist")
                        );
                      case 12:
                        return (o.next = 14), h(b.pathPattern, a);
                      case 14:
                        (d = o.sent),
                          (m = d.success),
                          (p = d.payload),
                          m &&
                            null != p &&
                            null !== (c = p.value) &&
                            void 0 !== c &&
                            c.md5 &&
                            ((v = URL.createObjectURL(a)),
                            ((E = new Image()).onload = () => {
                              s(r.UPLOADED),
                                e(
                                  p,
                                  {
                                    file: a,
                                    height: E.height,
                                    width: E.width,
                                  },
                                  () => {
                                    return s(r.NONE);
                                  }
                                );
                            }),
                            (E.src = v)),
                          (o.next = 22);
                        break;
                      case 19:
                        (o.prev = 19), (o.t0 = o.catch(9)), n(o.t0);
                      case 22:
                      case "end":
                        return o.stop();
                    }
                },
                o,
                null,
                [[9, 19]]
              );
            })
          )).apply(this, arguments);
        }
        function P() {
          _(this.files), (this.value = "");
        }
        return m.useEffect(
          () => {
            if (d.current)
              return d.current.addEventListener("change", P),
              () => {
                d.current && d.current.removeEventListener("change", P);
              }
            ;
          },
          [d.current]
        ),
        {
          inputRef: d,
          fireClick: x,
          status: u,
          handleDropEvent(e) {
            const n = e.dataTransfer;
            n && _(n.files);
          },
          uploadUrl(e) {
            return C.apply(this, arguments);
          },
        };
      };
    },
  },
]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/6532.0756aa4d.chunk.js.map
