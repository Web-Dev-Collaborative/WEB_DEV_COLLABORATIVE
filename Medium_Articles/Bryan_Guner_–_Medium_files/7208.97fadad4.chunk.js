(self.webpackChunklite = self.webpackChunklite || []).push([
  [7208],
  {
    78773: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      const r = n(67294);
      function a() {
        return (a =
          Object.assign ||
          function (e) {
            for (let t = 1; t < arguments.length; t++) {
              const n = arguments[t];
              for (const r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      const o = r.createElement("path", {
        d:
          "M9.42 2.6c.04-.13.12-.13.16 0l1.64 4.86a.4.4 0 0 0 .35.26h5.3c.15 0 .17.06.05.15l-4.28 2.98a.37.37 0 0 0-.14.4l1.64 4.86c.04.14-.02.18-.14.1l-4.28-3a.41.41 0 0 0-.44 0L5 16.2c-.12.08-.18.04-.13-.1l1.64-4.85a.37.37 0 0 0-.14-.4l-4.28-3c-.12-.09-.1-.16.05-.16h5.3a.4.4 0 0 0 .35-.26L9.42 2.6z",
      });
      const i = e => {
        return r.createElement(
          "svg",
          a({ width: 19, height: 19, viewBox: "0 0 19 19" }, e),
          o
        );
      };
    },
    42440: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      const r = n(67294);
      function a() {
        return (a =
          Object.assign ||
          function (e) {
            for (let t = 1; t < arguments.length; t++) {
              const n = arguments[t];
              for (const r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      const o = r.createElement(
        "g",
        { fillRule: "evenodd" },
        r.createElement("path", {
          d:
            "M4.13 12.21a15.4 15.4 0 0 1-2.54-2.28 6.61 6.61 0 0 1-.16-.2l-.25-.3.25-.3a13.08 13.08 0 0 1 .63-.7 15.4 15.4 0 0 1 1.7-1.51C5.55 5.54 7.5 4.7 9.51 4.7c.62 0 1.28.13 1.98.37l-.8.78a4.54 4.54 0 0 0-1.18-.18c-1.76 0-3.52.76-5.18 2.02-.58.45-1.12.93-1.58 1.41-.28.3-.28.36 0 .65a14.43 14.43 0 0 0 2.08 1.77l-.71.7zm3.05 1.57a6.32 6.32 0 0 0 4.61-.11c1-.38 2.04-.98 3.1-1.72a25.27 25.27 0 0 0 2.68-2.17l.37-.35-.37-.36a23.05 23.05 0 0 0-.76-.68 25.26 25.26 0 0 0-2.28-1.73l-.72.7a24.05 24.05 0 0 1 2.37 1.77c.2.17.2.42 0 .59-.57.49-1.2.97-1.84 1.43-1.01.7-2 1.26-2.9 1.61a5.4 5.4 0 0 1-1.92.42A6.6 6.6 0 0 1 8 13l-.81.78z",
        }),
        r.createElement("path", {
          d:
            "M12.05 9.06a2.68 2.68 0 0 1-2.7 3A2.74 2.74 0 0 1 9 12l3.06-2.96zM9.72 6.79a2.83 2.83 0 0 0-.37-.02 2.68 2.68 0 0 0-2.7 3l3.07-2.98zM3.6 14.3l-.35.34.68.7.35-.34 10.4-10.08.36-.34-.68-.7-.35.34z",
        })
      );
      const i = e => {
        return r.createElement(
          "svg",
          a({ width: 19, height: 19, viewBox: "0 0 19 19" }, e),
          o
        );
      };
    },
    27781: (e, t, n) => {
      "use strict";
      n.d(t, { tz: () => b, HH: () => w, zW: () => _ });
      const r = n(28655), a = n.n(r), o = n(71439), i = n(80439), c = n(67294), u = n(12291), s = n(85277);
      function l() {
        const e = a()([
          "\n  mutation PostFeatureMutation($username: ID!, $targetPostId: ID!) {\n    featurePostOnProfile(username: $username, targetPostId: $targetPostId)\n  }\n",
        ]);
        return (l = () => {
          return e;
        }),
        e
      ;
      }
      const m = (0, o.Ps)(l());
      const f = (0, u.$j)()(e => {
        const t = e.username, n = e.targetPostId, r = e.children, a = e.dispatch;
        return c.createElement(
          i.mm,
          {
            mutation: m,
            onCompleted() {
              a((0, s.Dx)({ message: "Successfully featured post." }));
            },
            variables: { username: t, targetPostId: n },
          },
          e => {
            return r({ mutate: e });
          }
        );
      });
      function p() {
        const e = a()([
          "\n  mutation PostUnfeatureMutation($username: ID!) {\n    unfeaturePostOnProfile(username: $username)\n  }\n",
        ]);
        return (p = () => {
          return e;
        }),
        e
      ;
      }
      const d = (0, o.Ps)(p());
      const h = (0, u.$j)()(e => {
        const t = e.username, n = e.children, r = e.dispatch;
        return c.createElement(
          i.mm,
          {
            mutation: d,
            onCompleted() {
              r((0, s.Dx)({ message: "Successfully unfeatured post." }));
            },
            variables: { username: t },
          },
          e => {
            return n({ mutate: e });
          }
        );
      });
      const v = n(32262), g = n(7530), y = n(28309), E = n(73004), S = n(95614), P = n(27952);
      function I() {
        const e = a()([
          "\n  query PostActions {\n    viewer {\n      ...PostActions_viewer\n    }\n  }\n  ",
          "\n",
        ]);
        return (I = () => {
          return e;
        }),
        e
      ;
      }
      function x() {
        const e = a()([
          "\n  fragment PostActions_viewer on User {\n    id\n    username\n    userMeta {\n      featuredPostId\n    }\n  }\n",
        ]);
        return (x = () => {
          return e;
        }),
        e
      ;
      }
      function R() {
        const e = a()([
          "\n  fragment PostActions_post on Post {\n    id\n    creator {\n      id\n    }\n  }\n",
        ]);
        return (R = () => {
          return e;
        }),
        e
      ;
      }

      const C = e => {
          return { fill: e.baseColor.fill.lighter };
        };

      var b = e => {
        const t = e.post,
              n = e.reason,
              r = (0, y.Iq)(),
              a = (0, u.v9)(e => {
                return e.config.authDomain;
              }),
              o = !(0, S.T)(),
              s = "postActionsMenu";
        return c.createElement(i.AE, { query: k }, e => {
          let i = e.data;
          const u = (i = void 0 === i ? {} : i).viewer;
          if (e.loading || !t || !u) return null;
          const l = u.username;
          if (!l || !t.creator || u.id !== t.creator.id) return null;
          const m = u.userMeta && u.userMeta.featuredPostId === t.id, p = !m && "USER_PROFILE_FEATURED" === n;
          return p && !o
            ? null
            : c.createElement(g.Bn, null, e => {
                const n = e.isVisible, i = e.toggle, u = e.hide;
                return c.createElement(
                  g.xu,
                  {
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "8px",
                  },
                  c.createElement(
                    g.J2,
                    {
                      ariaId: s,
                      isVisible: n,
                      hide: u,
                      popoverRenderFn() {
                        return c.createElement(
                          v.mX,
                          null,
                          p
                            ? null
                            : c.createElement(
                                v.Sl,
                                null,
                                c.createElement(
                                  f,
                                  { username: l, targetPostId: t.id },
                                  e => {
                                    const t = e.mutate;
                                    return c.createElement(
                                      h,
                                      { username: l },
                                      e => {
                                        const n = e.mutate;
                                        return c.createElement(
                                          g.rU,
                                          {
                                            linkStyle: "SUBTLE",
                                            onClick() {
                                              m ? n() : t(), u();
                                            },
                                          },
                                          m
                                            ? "Stop featuring on your profile"
                                            : "Feature at the top of your profile"
                                        );
                                      }
                                    );
                                  }
                                )
                              ),
                          !p && o ? c.createElement(v.oK, null) : null,
                          o
                            ? c.createElement(
                                v.Sl,
                                null,
                                c.createElement(
                                  g.rU,
                                  {
                                    linkStyle: "SUBTLE",
                                    href: (0, P.d0)(a, t.id),
                                  },
                                  "Edit story"
                                )
                              )
                            : null
                        );
                      },
                    },
                    c.createElement(
                      g.rU,
                      {
                        ariaControls: s,
                        ariaExpanded: n ? "true" : "false",
                        onClick: i,
                      },
                      c.createElement(E.Z, { className: r(C) })
                    )
                  )
                );
              });
        });
      };

      var w = (0, o.Ps)(R());
      var _ = (0, o.Ps)(x());
      const k = (0, o.Ps)(I(), _);
    },
    47875: (e, t, n) => {
      "use strict";
      n.d(t, { H: () => U, Z: () => B });
      const r = n(28655), a = n.n(r), o = n(34575), i = n.n(o), c = n(93913), u = n.n(c), s = n(2205), l = n.n(s), m = n(78585), f = n.n(m), p = n(29754), d = n.n(p), h = n(59713), v = n.n(h), g = n(71439), y = n(67294), E = n(12291), S = n(95482), P = n(9292), I = n(98281), x = n(53380), R = n(7530), C = n(42933), b = n(98024), w = n(80637), _ = n(7650), k = n(42440), T = n(27390), L = n(27952);
      function D() {
        const e = a()([
          "\n  fragment PostByline_post on Post {\n    id\n    isPublished\n    mediumUrl\n    firstPublishedAt\n    readingTime\n    statusForCollection\n    isLocked\n    isShortform\n    visibility\n    collection {\n      name\n      id\n      slug\n      ...collectionUrl_collection\n    }\n    creator {\n      name\n      username\n      id\n      bio\n      isFollowing\n      ...UserAvatar_user\n      ...userUrl_user\n    }\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ]);
        return (D = () => {
          return e;
        }),
        e
      ;
      }

      const F = {
          XS: { showFollowButton: !1, avatarScale: "XS" },
          S: { showFollowButton: !1, avatarScale: "S" },
          M: { showFollowButton: !0, avatarScale: "M" },
        };

      const H = (e, t) => {
        return v()(
          {
            marginBottom: e ? "2px" : "0px",
            display: "flex",
            alignItems: "center",
          },
          w.xs(t),
          { marginBottom: "0px" }
        );
      };

      const M = (e => {
        l()(a, e);
        let t;
        let n;

        const r =
          ((t = a),
          (n = (() => {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Date.prototype.toString.call(
                Reflect.construct(Date, [], () => {})
              ),
              !0
            ;
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            let e;
            const r = d()(t);
            if (n) {
              const a = d()(this).constructor;
              e = Reflect.construct(r, arguments, a);
            } else e = r.apply(this, arguments);
            return f()(this, e);
          });

        function a() {
          return i()(this, a), r.apply(this, arguments);
        }
        return u()(a, [
          {
            key: "render",
            value() {
              const e = this.props, t = e.authDomain, n = e.currentLocation, r = e.post, a = e.showBio, o = e.scale, i = void 0 === o ? "M" : o, c = e.detailScale, u = void 0 === c ? "M" : c, s = e.showStar, l = void 0 === s ? r.isLocked : s, m = e.hideCollection, f = void 0 !== m && m, p = e.hideAvatar, d = void 0 !== p && p, h = e.hideDescription, v = void 0 !== h && h, g = e.noClamp, E = void 0 !== g && g, w = r.id, D = r.creator, M = r.collection, U = r.statusForCollection, B = r.visibility, Q = r.isPublished, q = F[i];
              if (!r || !w || !D) return null;
              const A = r.firstPublishedAt, Z = D.username, N = D.name;
              if (!N || !Z) return null;
              const z = y.createElement(I.ZP, {
                        user: D,
                        scale: q.avatarScale,
                        link: !0,
                      }),
                    O = a ? y.createElement("div", null, D.bio) : null,
                    V = "APPROVED" === U,
                    W = q.showFollowButton
                      ? y.createElement(
                          C.Z,
                          {
                            marginLeft: "8px",
                            xs: { display: "none" },
                            flexShrink: "0",
                          },
                          y.createElement(x.Bv, {
                            user: D,
                            buttonSize: "COMPACT",
                            susiEntry: "follow_byline",
                          })
                        )
                      : null,
                    j = y.createElement(R.hS, null, e => {
                      return y.createElement(R.Yi, null, r => {
                        return y.createElement(
                          "div",
                          { className: e(H(q.showFollowButton, r)) },
                          y.createElement(
                            b.F,
                            {
                              scale: u,
                              tag: "span",
                              color: "DARKER",
                              clamp: E ? void 0 : 1,
                            },
                            y.createElement(
                              R.rU,
                              { href: (0, L.AW)(D, t), inline: !0 },
                              N
                            ),
                            M && V && !f
                              ? y.createElement(
                                  "span",
                                  null,
                                  " ",
                                  "in",
                                  " ",
                                  y.createElement(
                                    R.rU,
                                    { href: (0, L.WG)(M, n, t), inline: !0 },
                                    M.name
                                  )
                                )
                              : null
                          ),
                          W
                        );
                      });
                    }),
                    G = y.createElement(
                      b.F,
                      { scale: u, tag: "span", clamp: 1 },
                      O,
                      y.createElement(
                        "div",
                        null,
                        Q
                          ? y.createElement(
                              R.rU,
                              { href: (0, L.jV)(r), inline: !0 },
                              A && y.createElement(S.Z, { timestamp: A })
                            )
                          : y.createElement("span", null, "Draft"),
                        " ",
                        "·",
                        " ",
                        "UNLISTED" === B
                          ? y.createElement(
                              b.F,
                              { scale: "S", tag: "span" },
                              y.createElement(k.Z, null),
                              " Unlisted"
                            )
                          : y.createElement(
                              y.Fragment,
                              null,
                              (0, T.Vd)(r.readingTime || 0),
                              " min read"
                            ),
                        l &&
                          y.createElement(
                            "span",
                            { style: { paddingLeft: "4px" } },
                            y.createElement(_.Z, {
                              style: { marginTop: "-2px" },
                            })
                          )
                      )
                    );
              return y.createElement(P.Y, {
                avatar: !d && z,
                title: j,
                description: !v && G,
              });
            },
          },
        ]),
        a;
      })(y.Component);

      var U = (0, g.Ps)(D(), I.WQ, L.nf, L.$m);
      const B = (0, E.$j)(e => {
        return {
          currentLocation: e.navigation.currentLocation,
          authDomain: e.config.authDomain,
        };
      })(M);
    },
    70133: (e, t, n) => {
      "use strict";
      n.d(t, { X: () => Ne, Z: () => Ze });
      const r = n(28655), a = n.n(r), o = n(71439), i = n(67294), c = n(34575), u = n.n(c), s = n(93913), l = n.n(s), m = n(2205), f = n.n(m), p = n(78585), d = n.n(p), h = n(29754), v = n.n(h), g = n(12291), y = n(7530), E = n(64504);
      function S() {
        const e = a()([
          "\n  fragment Heading_heading on Heading {\n    headingType {\n      __typename\n      ... on HeadingBasic {\n        title\n      }\n      ... on HeadingWithLink {\n        title\n        linkText\n        linkUrl\n      }\n    }\n  }\n",
        ]);
        return (S = () => {
          return e;
        }),
        e
      ;
      }
      const P = (e => {
        f()(a, e);
        let t;
        let n;

        const r =
          ((t = a),
          (n = (() => {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Date.prototype.toString.call(
                Reflect.construct(Date, [], () => {})
              ),
              !0
            ;
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            let e;
            const r = v()(t);
            if (n) {
              const a = v()(this).constructor;
              e = Reflect.construct(r, arguments, a);
            } else e = r.apply(this, arguments);
            return d()(this, e);
          });

        function a() {
          return u()(this, a), r.apply(this, arguments);
        }
        return l()(a, [
          {
            key: "render",
            value() {
              let e;
              let t;
              const n = this.props.heading;
              if (!n || !n.headingType) return null;
              switch (n.headingType.__typename) {
                case "HeadingBasic":
                  e = n.headingType.title;
                  break;
                case "HeadingWithLink":
                  e = n.headingType.title;
                  const r = n.headingType.linkText, a = n.headingType.linkUrl;
                  r &&
                    a &&
                    (t = i.createElement(
                      E.F,
                      { scale: "L", color: "DARKER" },
                      i.createElement(y.rU, { href: a }, r)
                    ));
                  break;
                default:
                  return null;
              }
              return i.createElement(
                y.xu,
                {
                  paddingTop: "40px",
                  paddingBottom: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                },
                i.createElement(E.X6, { scale: "S", tag: "h4" }, e),
                t
              );
            },
          },
        ]),
        a
      ;
      })(i.Component);
      const I = (0, o.Ps)(S()), x = n(48537), R = n(86244);
      function C() {
        const e = a()([
          "\n  fragment StreamItemQuoteList_streamItemQuoteList on StreamItemQuoteList {\n    heading {\n      ...Heading_heading\n    }\n    items {\n      quote {\n        ...Quote_quote\n      }\n    }\n  }\n  ",
          "\n  ",
          "\n",
        ]);
        return (C = () => {
          return e;
        }),
        e
      ;
      }
      const b = e => {
        return {
          borderTop: "1px solid ".concat(e.baseColor.border.lighter),
          paddingBottom: "24px",
          paddingTop: "23px",
          ":first-child": { borderTop: "none", paddingTop: "0" },
          ":last-child": { paddingBottom: "0" },
        };
      };
      const w = (e => {
        f()(a, e);
        let t;
        let n;

        const r =
          ((t = a),
          (n = (() => {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Date.prototype.toString.call(
                Reflect.construct(Date, [], () => {})
              ),
              !0
            ;
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            let e;
            const r = v()(t);
            if (n) {
              const a = v()(this).constructor;
              e = Reflect.construct(r, arguments, a);
            } else e = r.apply(this, arguments);
            return d()(this, e);
          });

        function a() {
          return u()(this, a), r.apply(this, arguments);
        }
        return l()(a, [
          {
            key: "render",
            value() {
              const e = this.props.streamItemQuoteList;
              return e && e.heading
                ? i.createElement(
                    "div",
                    null,
                    i.createElement(P, { heading: e.heading }),
                    i.createElement(
                      R.Z,
                      null,
                      i.createElement(y.hS, null, t => {
                        return e.items.map((e, n) => {
                          return i.createElement(
                            "div",
                            { className: t(b), key: n },
                            i.createElement(x.Z, { quote: e.quote })
                          );
                        });
                      })
                    )
                  )
                : null;
            },
          },
        ]),
        a;
      })(i.Component);
      const _ = (0, o.Ps)(C(), I, x.Q), k = n(27952);
      function T() {
        const e = a()([
          "\n  fragment StreamItemCompressedPostList_streamItemCompressedPostList on StreamItemCompressedPostList {\n    heading {\n      ...Heading_heading\n    }\n    items {\n      post {\n        id\n        title\n        mediumUrl\n        creator {\n          id\n          username\n          name\n          ...userUrl_user\n        }\n      }\n    }\n  }\n  ",
          "\n  ",
          "\n",
        ]);
        return (T = () => {
          return e;
        }),
        e
      ;
      }
      const L = (e => {
        f()(a, e);
        let t;
        let n;

        const r =
          ((t = a),
          (n = (() => {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Date.prototype.toString.call(
                Reflect.construct(Date, [], () => {})
              ),
              !0
            ;
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            let e;
            const r = v()(t);
            if (n) {
              const a = v()(this).constructor;
              e = Reflect.construct(r, arguments, a);
            } else e = r.apply(this, arguments);
            return d()(this, e);
          });

        function a() {
          return u()(this, a), r.apply(this, arguments);
        }
        return l()(a, [
          {
            key: "render",
            value() {
              const e = this.props, t = e.streamItemCompressedPostList, n = e.authDomain;
              return t && t.heading
                ? i.createElement(
                    "div",
                    null,
                    i.createElement(P, { heading: t.heading }),
                    i.createElement(
                      R.Z,
                      null,
                      i.createElement(y.hS, null, e => {
                        return t.items.map((t, r) => {
                          if (!t.post || !t.post.id || !t.post.creator)
                            return null;
                          const a = t.post.title, o = t.post.creator, c = o.name;
                          return o.username
                            ? i.createElement(
                                "div",
                                { className: e(b), key: r },
                                i.createElement(
                                  y.xu,
                                  {
                                    paddingLeft: "20px",
                                    paddingRight: "20px",
                                  },
                                  i.createElement(
                                    E.X6,
                                    { scale: "S", tag: "h4" },
                                    i.createElement(
                                      y.rU,
                                      { href: (0, k.jV)(t.post), inline: !0 },
                                      a
                                    )
                                  ),
                                  i.createElement(
                                    y.xu,
                                    {
                                      sm: {
                                        display: "block",
                                        marginTop: "10px",
                                      },
                                    },
                                    i.createElement(
                                      E.F,
                                      { scale: "M", tag: "span" },
                                      i.createElement(
                                        y.rU,
                                        {
                                          href: (0, k.AW)(t.post.creator, n),
                                          inline: !0,
                                        },
                                        c
                                      )
                                    )
                                  )
                                )
                              )
                            : null;
                        });
                      })
                    )
                  )
                : null;
            },
          },
        ]),
        a;
      })(i.Component);
      const D = (0, g.$j)(e => {
        return { authDomain: e.config.authDomain };
      })(L);
      const F = (0, o.Ps)(T(), I, k.$m);
      function H() {
        const e = a()([
          "\n  fragment StreamItemHeading_streamItemHeading on StreamItemHeading {\n    text\n    heading {\n      ...Heading_heading\n    }\n  }\n  ",
          "\n",
        ]);
        return (H = () => {
          return e;
        }),
        e
      ;
      }
      const M = (e => {
        f()(a, e);
        let t;
        let n;

        const r =
          ((t = a),
          (n = (() => {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Date.prototype.toString.call(
                Reflect.construct(Date, [], () => {})
              ),
              !0
            ;
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            let e;
            const r = v()(t);
            if (n) {
              const a = v()(this).constructor;
              e = Reflect.construct(r, arguments, a);
            } else e = r.apply(this, arguments);
            return d()(this, e);
          });

        function a() {
          return u()(this, a), r.apply(this, arguments);
        }
        return l()(a, [
          {
            key: "render",
            value() {
              const e = this.props.streamItemHeading;
              return e && e.heading
                ? i.createElement(P, { heading: e.heading })
                : null;
            },
          },
        ]),
        a
      ;
      })(i.Component);
      const U = (0, o.Ps)(H(), I),
            B = n(78415),
            Q = n(27781),
            q = n(47875),
            A = n(72846),
            Z = n(88065),
            N = n(99046),
            z = n(27572),
            O = n(72955),
            V = () => {
              return {
                paddingLeft: "".concat(24, "px"),
                paddingRight: "".concat(24, "px"),
              };
            },
            W = n(78773),
            j = n(27390),
            G = n(41609),
            $ = n.n(G),
            X = n(14391);
      function K() {
        const e = a()([
          "\n  fragment getFirstPostFeedReason_postSuggestionReason on PostSuggestionReason {\n    reason\n  }\n",
        ]);
        return (K = () => {
          return e;
        }),
        e
      ;
      }
      function Y(e) {
        return (e && !$()(e) && e[0].reason) || X.YV.POST_FEED_REASON_UNKNOWN;
      }
      const J = (0, o.Ps)(K());
      function ee() {
        const e = a()([
          "\n  fragment StreamItemPostPreview_streamItemPostPreview on StreamItemPostPreview {\n    post {\n      id\n      mediumUrl\n      previewContent {\n        bodyModel {\n          ...PostBody_bodyModel\n        }\n      }\n      inResponseToPostResult {\n        ...InResponseToPostPreview_postResult\n      }\n      isLocked\n      clapCount\n      responsesCount\n      ...PostActions_post\n      ...PostByline_post\n      ...PostPresentationTracker_post\n      ...BookmarkButton_post\n      ...MultiVote_post\n    }\n    postSuggestionReasons {\n      ...getFirstPostFeedReason_postSuggestionReason\n    }\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ]);
        return (ee = () => {
          return e;
        }),
        e
      ;
      }
      const te = e => {
                return { fill: e.baseColor.fill.lighter };
              },
            ne = { flexGrow: "1" },
            re = { flexGrow: "0" },
            ae = { display: "flex", flexDirection: "row", alignItems: "center" };
      const oe = (e => {
        f()(a, e);
        let t;
        let n;

        const r =
          ((t = a),
          (n = (() => {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Date.prototype.toString.call(
                Reflect.construct(Date, [], () => {})
              ),
              !0
            ;
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            let e;
            const r = v()(t);
            if (n) {
              const a = v()(this).constructor;
              e = Reflect.construct(r, arguments, a);
            } else e = r.apply(this, arguments);
            return d()(this, e);
          });

        function a() {
          return u()(this, a), r.apply(this, arguments);
        }
        return l()(a, [
          {
            key: "render",
            value() {
              const e = this.props.streamItemPostPreview, t = e.post, n = e.postSuggestionReasons;
              if (!t) return null;
              const r = t.id, a = t.previewContent;
              if (!r || !a || !a.bodyModel) return null;
              const o = a.bodyModel;
              let c = "";
              const u = t.responsesCount || 0;
              return u > 0 &&
                ((c += (0, j.pY)(u)),
                (c += 1 === u ? " response" : " responses")),
              i.createElement(y.hS, null, e => {
                return i.createElement(
                  R.Z,
                  null,
                  i.createElement(
                    O.ot,
                    { post: t, presentationContext: "POST_PREVIEW" },
                    i.createElement(
                      y.xu,
                      { display: "flex", paddingRight: "20px" },
                      i.createElement(
                        "div",
                        { className: e([ne, V]) },
                        i.createElement(q.Z, {
                          post: t,
                          showBio: !1,
                          scale: "S",
                        })
                      ),
                      i.createElement(
                        "div",
                        { className: e(re) },
                        t.isLocked
                          ? i.createElement(W.Z, { className: e(te) })
                          : null
                      )
                    ),
                    i.createElement(B.CV, {
                      inResponseToPostResult: t.inResponseToPostResult,
                      padding: "20px ".concat(24, "px 0"),
                    }),
                    i.createElement(
                      y.xu,
                      {
                        paddingLeft: "".concat(24, "px"),
                        paddingRight: "".concat(24, "px"),
                      },
                      i.createElement(
                        y.P3,
                        { href: (0, k.jV)(t) },
                        i.createElement(A.ZP, {
                          bodyModel: o,
                          richTextStyle: "STREAM",
                        })
                      )
                    ),
                    i.createElement(
                      y.xu,
                      {
                        display: "flex",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        paddingTop: "24px",
                      },
                      i.createElement(
                        "div",
                        { className: e([ne, ae]) },
                        i.createElement(N.S, {
                          post: t,
                          buttonStyle: "SUBTLE",
                          susiEntry: "clap_preview",
                        })
                      ),
                      i.createElement(
                        "div",
                        { className: e([re, ae]) },
                        i.createElement(E.F, { scale: "M" }, c)
                      ),
                      i.createElement(
                        "div",
                        { className: e([re, ae]) },
                        i.createElement(
                          y.xu,
                          { marginLeft: "8px" },
                          i.createElement(
                            z.cW,
                            { source: { name: "listing", postId: t.id } },
                            i.createElement(Z.e, {
                              post: t,
                              susiEntry: "bookmark_preview",
                            })
                          )
                        ),
                        i.createElement(Q.tz, { post: t, reason: Y(n) })
                      )
                    )
                  )
                );
              })
            ;
            },
          },
        ]),
        a;
      })(i.Component);
      const ie = (0, o.Ps)(ee(), B.zJ, Q.HH, A.Pk, q.H, O.h_, Z.z, N.x, J), ce = n(6741), ue = n(86280), se = n(32262), le = n(73004);
      function me() {
        const e = a()([
          "\n  fragment StreamItemQuotePreview_streamItemQuotePreview on StreamItemQuotePreview {\n    quote {\n      ...Quote_quote\n    }\n  }\n  ",
          "\n",
        ]);
        return (me = () => {
          return e;
        }),
        e
      ;
      }
      const fe = e => {
                return { fill: e.baseColor.fill.lighter };
              },
            pe = (e => {
              f()(a, e);
              let t;
              let n;

              const r =
                ((t = a),
                (n = (() => {
                  if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return Date.prototype.toString.call(
                      Reflect.construct(Date, [], () => {})
                    ),
                    !0
                  ;
                  } catch (e) {
                    return !1;
                  }
                })()),
                function () {
                  let e;
                  const r = v()(t);
                  if (n) {
                    const a = v()(this).constructor;
                    e = Reflect.construct(r, arguments, a);
                  } else e = r.apply(this, arguments);
                  return d()(this, e);
                });

              function a() {
                return u()(this, a), r.apply(this, arguments);
              }
              return l()(a, [
                {
                  key: "render",
                  value() {
                    const e = this, t = this.props.streamItemQuotePreview;
                    if (!t || !t.quote) return null;
                    const n = t.quote;
                    return i.createElement(
                      y.Bn,
                      { initialVisibility: !0 },
                      t => {
                        const r = t.isVisible, a = t.hide;
                        return (
                          r &&
                          i.createElement(
                            R.Z,
                            null,
                            i.createElement(x.Z, { quote: n }),
                            e._renderActions(a)
                          )
                        );
                      }
                    );
                  },
                },
                {
                  key: "_renderActions",
                  value(e) {
                    const t = this.props.streamItemQuotePreview;
                    if (!t || !t.quote) return null;
                    const n = t.quote, r = n.post ? n.post.id : "", a = n.quoteId, o = "StreamItemQuoteActionsMenu";
                    return i.createElement(ue.Q_, null, t => {
                      return t && n.userId === t.id
                        ? i.createElement(y.hS, null, t => {
                            return i.createElement(
                              y.xu,
                              {
                                display: "flex",
                                paddingLeft: "20px",
                                paddingRight: "20px",
                                paddingTop: "20px",
                                justifyContent: "flex-end",
                              },
                              i.createElement(y.Bn, null, n => {
                                const c = n.isVisible, u = n.hide, s = n.toggle;
                                return i.createElement(
                                  ce.Z,
                                  {
                                    targetPostId: r,
                                    targetQuoteId: a,
                                    onCompleted: e,
                                  },
                                  e => {
                                    const n = e.deleteQuote;
                                    return i.createElement(
                                      y.J2,
                                      {
                                        ariaId: o,
                                        isVisible: c,
                                        hide: u,
                                        popoverRenderFn() {
                                          return i.createElement(
                                            se.mX,
                                            null,
                                            i.createElement(
                                              se.Sl,
                                              null,
                                              i.createElement(
                                                y.rU,
                                                {
                                                  linkStyle: "SUBTLE",
                                                  onClick: n,
                                                },
                                                "Unhighlight"
                                              )
                                            )
                                          );
                                        },
                                      },
                                      i.createElement(
                                        y.rU,
                                        {
                                          ariaControls: o,
                                          ariaExpanded: c ? "true" : "false",
                                          onClick: s,
                                        },
                                        i.createElement(le.Z, {
                                          className: t(fe),
                                        })
                                      )
                                    );
                                  }
                                );
                              })
                            );
                          })
                        : null;
                    });
                  },
                },
              ]),
              a;
            })(i.Component),
            de = (0, o.Ps)(me(), x.Q);
      const he = pe;
      const ve = n(78221);
      function ge(e) {
        const t = e.eyebrow;
        return t
          ? i.createElement(
              y.xu,
              { paddingRight: "8px" },
              i.createElement(E.Lh, { scale: "M", tag: "span" }, t)
            )
          : null;
      }
      function ye() {
        const e = a()([
          "\n  fragment StreamItemSequence_streamItemSequence on StreamItemSequence {\n    sequence {\n      slug\n      eyebrow\n      title\n      subtitle\n      description\n      updatedAt\n      featuredUserTitle\n      featuredUserCustomBio\n      color\n      bgColor\n      hideIndex\n      postIds\n      ...SequenceCoverImage_sequence\n    }\n  }\n  ",
          "\n",
        ]);
        return (ye = () => {
          return e;
        }),
        e
      ;
      }
      const Ee = (e => {
        f()(a, e);
        let t;
        let n;

        const r =
          ((t = a),
          (n = (() => {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Date.prototype.toString.call(
                Reflect.construct(Date, [], () => {})
              ),
              !0
            ;
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            let e;
            const r = v()(t);
            if (n) {
              const a = v()(this).constructor;
              e = Reflect.construct(r, arguments, a);
            } else e = r.apply(this, arguments);
            return d()(this, e);
          });

        function a() {
          return u()(this, a), r.apply(this, arguments);
        }
        return l()(a, [
          {
            key: "renderNumStories",
            value(e) {
              if (!e || !e.postIds) return null;
              const t = e.postIds, n = 1 === t.length ? "Story" : "Stories";
              return i.createElement(
                E.F,
                { scale: "M", tag: "span" },
                "".concat(t.length, " ").concat(n)
              );
            },
          },
          {
            key: "render",
            value() {
              const e = this.props.streamItemSequence.sequence;
              if (!e || !e.slug) return null;
              const t = e.slug;
              return i.createElement(
                y.P3,
                { href: (0, k.Qd)(t) },
                i.createElement(
                  y.xu,
                  { minHeight: "18px", marginBottom: "10px" },
                  i.createElement(ge, { eyebrow: e.eyebrow })
                ),
                i.createElement(
                  y.xu,
                  { minHeight: "415px", minWidth: "325px" },
                  e.coverImage
                    ? i.createElement(ve.Z, {
                        sequence: e,
                        width: 325,
                        height: 415,
                      })
                    : null
                ),
                i.createElement(
                  y.xu,
                  { display: "flex", flexDirection: "column" },
                  i.createElement(
                    y.xu,
                    { marginTop: "26px" },
                    i.createElement(E.X6, { scale: "M", tag: "h3" }, e.title)
                  ),
                  i.createElement(
                    y.xu,
                    { marginTop: "7px" },
                    i.createElement(
                      E.F,
                      { scale: "L", color: "DARKER", tag: "h4" },
                      e.subtitle
                    )
                  ),
                  i.createElement(
                    y.xu,
                    { marginTop: "11px" },
                    this.renderNumStories(e)
                  )
                )
              );
            },
          },
        ]),
        a
      ;
      })(i.Component);
      const Se = (0, o.Ps)(ye(), ve.U), Pe = n(24438), Ie = n(90038), xe = n(534);
      function Re() {
        const e = a()([
          "\n  fragment SeriesTitleCard_post on Post {\n    id\n    title\n    previewContent {\n      bodyModel {\n        paragraphs {\n          metadata {\n            id\n          }\n        }\n      }\n    }\n  }\n",
        ]);
        return (Re = () => {
          return e;
        }),
        e
      ;
      }
      const Ce = e => {
                return {
                  position: "relative",
                  margin: "4px",
                  width: "calc(calc(100% / 3) - 8px)",
                  float: "left",
                  borderRadius: (0, Pe.a)(e.borderRadius.regular),
                };
              },
            be = { paddingTop: "177.77%", height: 0 },
            we = {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              overflow: "hidden",
            },
            _e = {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "16px",
            };
      const ke = (e => {
        f()(a, e);
        let t;
        let n;

        const r =
          ((t = a),
          (n = (() => {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Date.prototype.toString.call(
                Reflect.construct(Date, [], () => {})
              ),
              !0
            ;
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            let e;
            const r = v()(t);
            if (n) {
              const a = v()(this).constructor;
              e = Reflect.construct(r, arguments, a);
            } else e = r.apply(this, arguments);
            return d()(this, e);
          });

        function a() {
          return u()(this, a), r.apply(this, arguments);
        }
        return l()(a, [
          {
            key: "render",
            value() {
              const e = this.props.post;
              if (!e || !e.id) return null;
              const t = e.id,
                    n = e.title,
                    r = e.previewContent && e.previewContent.bodyModel,
                    a = r && r.paragraphs && r.paragraphs[0],
                    o = (a && a.metadata && a.metadata.id) || "",
                    c = (0, Ie.W6)({
                      miroId: o,
                      width: 220,
                      height: 390,
                      strategy: Ie._S.Crop,
                    });
              return i.createElement(y.Yi, null, e => {
                return i.createElement(y.hS, null, r => {
                  return i.createElement(
                    "div",
                    { className: r(Ce) },
                    i.createElement("div", {
                      className: r([
                        be,
                        ((a = c),
                        e => {
                          return {
                            backgroundColor: e.baseColor.fill.light,
                            backgroundImage: "url(".concat(a, ")"),
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            filter: "brightness(80%)",
                            width: "100%",
                            borderRadius: (0, Pe.a)(e.borderRadius.regular),
                            display: "block",
                          };
                        }),
                      ]),
                    }),
                    i.createElement(
                      y.f6,
                      { theme: (0, xe.GV)(e) },
                      i.createElement(
                        y.P3,
                        { className: r(we), href: (0, k.QJ)(t) },
                        i.createElement(
                          "div",
                          { className: r(_e) },
                          i.createElement(E.X6, { scale: "S", tag: "h4" }, n)
                        )
                      )
                    )
                  );
                  var a;
                });
              });
            },
          },
        ]),
        a;
      })(i.Component);
      const Te = (0, o.Ps)(Re());
      function Le() {
        const e = a()([
          "\n  fragment StreamItemSeriesGridCard_streamItemSeriesGridCard on StreamItemSeriesGridCard {\n    post {\n      ...SeriesTitleCard_post\n    }\n  }\n  ",
          "\n",
        ]);
        return (Le = () => {
          return e;
        }),
        e
      ;
      }
      const De = (e => {
        f()(a, e);
        let t;
        let n;

        const r =
          ((t = a),
          (n = (() => {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Date.prototype.toString.call(
                Reflect.construct(Date, [], () => {})
              ),
              !0
            ;
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            let e;
            const r = v()(t);
            if (n) {
              const a = v()(this).constructor;
              e = Reflect.construct(r, arguments, a);
            } else e = r.apply(this, arguments);
            return d()(this, e);
          });

        function a() {
          return u()(this, a), r.apply(this, arguments);
        }
        return l()(a, [
          {
            key: "render",
            value() {
              const e = this.props.streamItemSeriesGridCard;
              return e && e.post
                ? i.createElement(ke, { post: e.post })
                : null;
            },
          },
        ]),
        a
      ;
      })(i.Component);
      const Fe = (0, o.Ps)(Le(), Te);
      function He() {
        const e = a()([
          "\n  fragment SeriesCarouselHeroCard_seriesCarouselHeroCard on SeriesCarouselHeroCard {\n    post {\n      ...SeriesTitleCard_post\n    }\n  }\n  ",
          "\n",
        ]);
        return (He = () => {
          return e;
        }),
        e
      ;
      }
      const Me = (e => {
        f()(a, e);
        let t;
        let n;

        const r =
          ((t = a),
          (n = (() => {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Date.prototype.toString.call(
                Reflect.construct(Date, [], () => {})
              ),
              !0
            ;
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            let e;
            const r = v()(t);
            if (n) {
              const a = v()(this).constructor;
              e = Reflect.construct(r, arguments, a);
            } else e = r.apply(this, arguments);
            return d()(this, e);
          });

        function a() {
          return u()(this, a), r.apply(this, arguments);
        }
        return l()(a, [
          {
            key: "render",
            value() {
              const e = this.props.card;
              return e && e.post
                ? i.createElement(ke, { post: e.post })
                : null;
            },
          },
        ]),
        a
      ;
      })(i.Component);
      const Ue = (0, o.Ps)(He(), Te);
      function Be() {
        const e = a()([
          "\n  fragment StreamItemSeriesHeroCarousel_streamItemSeriesHeroCarousel on StreamItemSeriesHeroCarousel {\n    cards {\n      ...SeriesCarouselHeroCard_seriesCarouselHeroCard\n    }\n  }\n  ",
          "\n",
        ]);
        return (Be = () => {
          return e;
        }),
        e
      ;
      }
      const Qe = (e => {
        f()(a, e);
        let t;
        let n;

        const r =
          ((t = a),
          (n = (() => {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Date.prototype.toString.call(
                Reflect.construct(Date, [], () => {})
              ),
              !0
            ;
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            let e;
            const r = v()(t);
            if (n) {
              const a = v()(this).constructor;
              e = Reflect.construct(r, arguments, a);
            } else e = r.apply(this, arguments);
            return d()(this, e);
          });

        function a() {
          return u()(this, a), r.apply(this, arguments);
        }
        return l()(a, [
          {
            key: "render",
            value() {
              const e = this.props.streamItemSeriesHeroCarousel;
              return e && e.cards
                ? i.createElement(
                    y.xu,
                    { display: "flex", justifyContent: "flex-start" },
                    e.cards.map((e, t) => {
                      return i.createElement(Me, { key: t, card: e });
                    })
                  )
                : null;
            },
          },
        ]),
        a;
      })(i.Component);
      const qe = (0, o.Ps)(Be(), Ue);
      function Ae() {
        const e = a()([
          "\n  fragment StreamItem_streamItem on StreamItem {\n    itemType {\n      __typename\n      ... on StreamItemHeading {\n        ...StreamItemHeading_streamItemHeading\n      }\n      ... on StreamItemPostPreview {\n        ...StreamItemPostPreview_streamItemPostPreview\n      }\n      ... on StreamItemSeriesHeroCarousel {\n        ...StreamItemSeriesHeroCarousel_streamItemSeriesHeroCarousel\n      }\n      ... on StreamItemSeriesGridCard {\n        ...StreamItemSeriesGridCard_streamItemSeriesGridCard\n      }\n      ... on StreamItemQuotePreview {\n        ...StreamItemQuotePreview_streamItemQuotePreview\n      }\n      ... on StreamItemQuoteList {\n        ...StreamItemQuoteList_streamItemQuoteList\n      }\n      ... on StreamItemCompressedPostList {\n        ...StreamItemCompressedPostList_streamItemCompressedPostList\n      }\n      ... on StreamItemSequence {\n        ...StreamItemSequence_streamItemSequence\n      }\n    }\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ]);
        return (Ae = () => {
          return e;
        }),
        e
      ;
      }
      const Ze = e => {
        const t = e.streamItem;
        switch (t.itemType.__typename) {
          case "StreamItemCompressedPostList":
            return i.createElement(D, {
              streamItemCompressedPostList: t.itemType,
            });
          case "StreamItemHeading":
            return i.createElement(M, { streamItemHeading: t.itemType });
          case "StreamItemPostPreview":
            return i.createElement(oe, { streamItemPostPreview: t.itemType });
          case "StreamItemQuoteList":
            return i.createElement(w, { streamItemQuoteList: t.itemType });
          case "StreamItemQuotePreview":
            return i.createElement(he, { streamItemQuotePreview: t.itemType });
          case "StreamItemSeriesGridCard":
            return i.createElement(De, {
              streamItemSeriesGridCard: t.itemType,
            });
          case "StreamItemSeriesHeroCarousel":
            return i.createElement(Qe, {
              streamItemSeriesHeroCarousel: t.itemType,
            });
          case "StreamItemSequence":
            return i.createElement(Ee, { streamItemSequence: t.itemType });
          default:
            return null;
        }
      };
      var Ne = (0, o.Ps)(Ae(), U, ie, qe, Fe, de, _, F, Se);
    },
    7208: (e, t, n) => {
      "use strict";
      n.d(t, { ZP: () => S, sS: () => I, yf: () => x });
      const r = n(28655), a = n.n(r), o = n(63038), i = n.n(o), c = n(71439), u = n(67294), s = n(70133), l = n(67900), m = n(45076), f = n(7530), p = n(64504), d = n(27572);
      function h() {
        const e = a()([
          "\n  fragment commonStream_viewer on User {\n    id\n    userMeta {\n      featuredPostId\n    }\n  }\n",
        ]);
        return (h = () => {
          return e;
        }),
        e
      ;
      }
      function v() {
        const e = a()([
          "\n  fragment commonStreamConnection on StreamConnection {\n    stream {\n      ...StreamItemList_streamItem\n    }\n    pagingInfo {\n      next {\n        limit\n        page\n        source\n        to\n        ignoredIds\n      }\n    }\n  }\n  ",
          "\n",
        ]);
        return (v = () => {
          return e;
        }),
        e
      ;
      }
      function g() {
        const e = a()([
          "\n  fragment StreamItemList_streamItem on StreamItem {\n    ...StreamItem_streamItem\n  }\n  ",
          "\n",
        ]);
        return (g = () => {
          return e;
        }),
        e
      ;
      }
      const y = e => {
                const t = e.children;
                return u.createElement(f.xu, { marginBottom: "60px" }, t);
              },
            E = e => {
              return e.children;
            };
      const S = e => {
        const t = e.tab,
              n = e.streamItems,
              r = e.fetchMore,
              a = e.loading,
              o = e.emptyStateMessage,
              c = e.featuredPostId,
              h = e.StreamWrapper,
              v = void 0 === h ? y : h,
              g = e.ItemWrapper,
              S = void 0 === g ? E : g,
              P = t === m.m.Overview,
              I = u.useState(!1),
              x = i()(I, 2),
              R = x[0],
              C = x[1],
              b = u.useCallback(
                () => {
                  return R
                    ? r
                      ? r()
                      : Promise.resolve()
                    : (C(!0), Promise.resolve());
                },
                [r, R, C]
              );
        if (!a && !n.length && o)
          return u.createElement(
            f.xu,
            { paddingTop: "24px" },
            u.createElement(p.QE, { scale: "M" }, o)
          );
        const w = u.createElement(
          v,
          null,
          n.map((e, t) => {
            let n;
            return P &&
              "StreamItemPostPreview" === e.itemType.__typename &&
              t >= 10 &&
              (null === (n = e.itemType.post) || void 0 === n
                ? void 0
                : n.id) === c
              ? null
              : u.createElement(
                  d.cW,
                  { key: t, source: { index: t + 1 } },
                  u.createElement(
                    S,
                    { index: t },
                    u.createElement(s.Z, { streamItem: e })
                  )
                );
          })
        );
        return u.createElement(l.Z, { fetchMore: a ? null : b }, w);
      };
      const P = (0, c.Ps)(g(), s.X);
      var I = (0, c.Ps)(v(), P);
      var x = (0, c.Ps)(h());
    },
    25752: (e, t, n) => {
      "use strict";
      n.d(t, { z: () => r });
      var r = n(67294).createContext({ isFetching: !1 });
    },
    67900: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => g });
      const r = n(34575), a = n.n(r), o = n(93913), i = n.n(o), c = n(81506), u = n.n(c), s = n(2205), l = n.n(s), m = n(78585), f = n.n(m), p = n(29754), d = n.n(p), h = n(67294), v = n(25752);
      const g = (e => {
        l()(o, e);
        let t;
        let n;

        const r =
          ((t = o),
          (n = (() => {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Date.prototype.toString.call(
                Reflect.construct(Date, [], () => {})
              ),
              !0
            ;
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            let e;
            const r = d()(t);
            if (n) {
              const a = d()(this).constructor;
              e = Reflect.construct(r, arguments, a);
            } else e = r.apply(this, arguments);
            return f()(this, e);
          });

        function o(e) {
          let t;
          return (
            a()(this, o),
            ((t = r.call(this, e)).bottomEdgeEl = void 0),
            (t.maybeFetch = void 0),
            (t.state = { isFetching: !1 }),
            (t.maybeFetch = t._maybeFetch.bind(u()(t))),
            t
          );
        }
        return i()(o, [
          {
            key: "componentDidMount",
            value() {
              this.attachScrollListener(), this._maybeFetch();
            },
          },
          {
            key: "componentWillUnmount",
            value() {
              this.detachScrollListener();
            },
          },
          {
            key: "_maybeFetch",
            value() {
              const e = this;
              if (this.bottomEdgeEl && !this.state.isFetching) {
                const t = this.props.fetchMore;
                if (t) {
                  const n = this.bottomEdgeEl.getBoundingClientRect(), r = window.innerHeight;
                  n.top - r < 3 * r &&
                    (this.setState({ isFetching: !0 }),
                    t().then(() => {
                      e.setState({ isFetching: !1 }), e._maybeFetch();
                    }));
                }
              }
            },
          },
          {
            key: "attachScrollListener",
            value() {
              window.addEventListener("scroll", this.maybeFetch),
                window.addEventListener("resize", this.maybeFetch);
            },
          },
          {
            key: "detachScrollListener",
            value() {
              window.removeEventListener("scroll", this.maybeFetch),
                window.removeEventListener("resize", this.maybeFetch);
            },
          },
          {
            key: "render",
            value() {
              const e = this, t = this.props.children;
              return h.createElement(
                v.z.Provider,
                { value: { isFetching: this.state.isFetching } },
                h.createElement(
                  "div",
                  null,
                  t,
                  h.createElement("div", {
                    ref(t) {
                      e.bottomEdgeEl = t;
                    },
                  })
                )
              );
            },
          },
        ]),
        o;
      })(h.Component);
    },
  },
]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/7208.97fadad4.chunk.js.map
