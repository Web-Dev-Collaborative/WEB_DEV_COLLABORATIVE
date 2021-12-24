(self.webpackChunklite = self.webpackChunklite || []).push([
  [6230],
  {
    71254: (t, e, n) => {
      "use strict";
      n.d(e, { Z: () => i });
      const r = n(67294);
      function o() {
        return (o =
          Object.assign ||
          function (t) {
            for (let e = 1; e < arguments.length; e++) {
              const n = arguments[e];
              for (const r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      const a = r.createElement("path", {
        d:
          "M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13a.5.5 0 0 0 .71-.03.5.5 0 0 0 .12-.29H19V6zm-6.84 9.97L7 19.64V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v13.64l-5.16-3.67a.49.49 0 0 0-.68 0z",
        fillRule: "evenodd",
      });
      const i = t => {
        return r.createElement(
          "svg",
          o({ width: 25, height: 25, viewBox: "0 0 25 25" }, t),
          a
        );
      };
    },
    6106: (t, e, n) => {
      "use strict";
      n.d(e, { Z: () => i });
      const r = n(67294);
      function o() {
        return (o =
          Object.assign ||
          function (t) {
            for (let e = 1; e < arguments.length; e++) {
              const n = arguments[e];
              for (const r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      const a = r.createElement("path", {
        d:
          "M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13c.2.18.52.17.71-.03a.5.5 0 0 0 .12-.29H19V6z",
      });
      const i = t => {
        return r.createElement(
          "svg",
          o({ width: 25, height: 25, viewBox: "0 0 25 25" }, t),
          a
        );
      };
    },
    33241: (t, e, n) => {
      "use strict";
      n.d(e, { Z: () => p });
      const r = n(28655), o = n.n(r), a = n(71439), i = n(80439), s = n(67294), u = n(12291), l = n(85277);
      function c() {
        const t = o()([
          "\n  mutation UserReportStoryMutation(\n    $targetPostId: ID!\n    $targetAuthorId: ID!\n    $alsoBlockAuthor: Boolean!\n    $reason: String!\n  ) {\n    reportStoryAndMaybeBlockAuthor(\n      targetPostId: $targetPostId\n      targetAuthorId: $targetAuthorId\n      alsoBlockAuthor: $alsoBlockAuthor\n      reason: $reason\n    ) {\n      id\n      isBlocking\n    }\n  }\n",
        ]);
        return (c = () => {
          return t;
        }),
        t
      ;
      }
      const d = (0, a.Ps)(c());
      const p = (0, u.$j)()(t => {
        const e = t.targetAuthorId, n = t.targetPostId, r = t.dispatch, o = t.children, a = t.onOptimisticComplete, u = t.isBlocking;
        return s.createElement(
          i.mm,
          {
            mutation: d,
            onCompleted() {
              r((0, l.Dx)({ message: "Successfully reported post." }));
            },
          },
          t => {
            return o({
              mutate(r, o) {
                const i = t({
                  variables: {
                    targetAuthorId: e,
                    targetPostId: n,
                    alsoBlockAuthor: r,
                    reason: o,
                  },
                  optimisticResponse: {
                    __typename: "Mutation",
                    reportStoryAndMaybeBlockAuthor: {
                      __typename: "User",
                      id: e,
                      isBlocking: u || r,
                    },
                  },
                });
                return a && a(), i;
              },
            });
          }
        );
      });
    },
    86753: (t, e, n) => {
      "use strict";
      n.d(e, { z: () => k, Z: () => C });
      const r = n(63038), o = n.n(r), a = n(28655), i = n.n(a), s = n(71439), u = n(67294), l = n(12291), c = n(3021), d = n(86280), p = n(62181), f = n(267), m = n(7530), g = n(33914), E = n(62630), v = n(27572), I = n(28309), h = n(14391), _ = n(71254), y = n(6106);
      function b() {
        return (b =
          Object.assign ||
          function (t) {
            for (let e = 1; e < arguments.length; e++) {
              const n = arguments[e];
              for (const r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      const S = u.createElement("path", {
        d:
          "M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13c.2.18.52.17.71-.03a.5.5 0 0 0 .12-.29H19V6z",
      });
      const P = t => {
        return u.createElement(
          "svg",
          b({ width: 25, height: 25, viewBox: "0 0 25 25" }, t),
          S
        );
      };
      const R = n(27952);
      function A() {
        const t = i()([
          "\n  fragment BookmarkButton_post on Post {\n    ...SusiClickable_post\n    ...WithSetReadingList_post\n  }\n  ",
          "\n  ",
          "\n",
        ]);
        return (A = () => {
          return t;
        }),
        t
      ;
      }
      var k = (0, s.Ps)(A(), p.qU, c.jy);

      const x = t => {
        return { fill: t.baseColor.fill.light };
      };

      const N = t => {
        return { fill: t.baseColor.border.light, cursor: "default" };
      };

      const D = () => {
        const t = (0, I.Iq)();
        return u.createElement(P, { className: t(N) });
      };

      function C(t) {
        const e = t.post,
              n = t.withTooltip,
              r = void 0 === n || n,
              a = t.susiEntry,
              i = e.id,
              s = e.readingList,
              b = (0, I.Iq)(),
              S = (0, l.v9)(t => {
                return t.config.authDomain;
              }),
              P = (0, E.Av)(),
              A = (0, v.pK)(),
              k = (0, f.XC)(),
              N = null == k ? void 0 : k.READING_LIST_UPDATED,
              C = u.useState(r),
              L = o()(C, 2),
              O = L[0],
              T = L[1],
              w = u.useState(s || h.sx.READING_LIST_NONE),
              U = o()(w, 2),
              G = U[0],
              j = U[1];
        u.useEffect(
          () => {
            j(s || h.sx.READING_LIST_NONE);
          },
          [s]
        );
        const B = u.useCallback(
          () => {
            r && T(!0);
          },
          [r]
        );
        return u.createElement(d.Q_, null, t => {
          return t
            ? s
              ? u.createElement(
                  "div",
                  { className: b(x) },
                  u.createElement(c.sN, { post: e }, t => {
                    return u.createElement(
                      g._,
                      {
                        isVisible: O,
                        targetDistance: 10,
                        tooltipText:
                          ((n = s),
                          {
                            READING_LIST_NONE: "Save story",
                            READING_LIST_ARCHIVE: "Archived",
                            READING_LIST_QUEUE: "Unsave Story",
                          }[n]),
                        onMouseLeave: B,
                      },
                      u.createElement(m.rU, {
                        onClick() {
                          return (t => {
                            if (s) {
                              const n =
                                ((o = s),
                                {
                                  READING_LIST_NONE: h.sx.READING_LIST_QUEUE,
                                  READING_LIST_ARCHIVE: null,
                                  READING_LIST_QUEUE: h.sx.READING_LIST_NONE,
                                }[o]);
                              if (!n) return;
                              j(n),
                                P.event((t => {
                                  return {
                                    READING_LIST_NONE: "post.addedBookmark",
                                    READING_LIST_ARCHIVE:
                                      "post.addedArchive",
                                    READING_LIST_QUEUE:
                                      "post.removedBookmark",
                                  }[t];
                                })(s), { postId: i, source: A }),
                                t(n)().catch(() => {
                                  j(s);
                                }),
                                r && T(!1),
                                N && N(e, n);
                            }
                            var o;
                          })(t);
                        },
                        ariaLabel: "Bookmark Post",
                      }, (t => {
                        return {
                          READING_LIST_NONE: u.createElement(_.Z, null),
                          READING_LIST_ARCHIVE: u.createElement(D, null),
                          READING_LIST_QUEUE: u.createElement(y.Z, null),
                        }[t];
                      })(G))
                    );
                    var n;
                  })
                )
              : null
            : u.createElement(
                g._,
                {
                  isVisible: O,
                  placement: "top",
                  targetDistance: 10,
                  tooltipText: "Bookmark story",
                },
                u.createElement(
                  p.R9,
                  {
                    post: e,
                    operation: "register",
                    actionUrl: (0, R.XE)(S, i),
                    susiEntry: a,
                  },
                  u.createElement(_.Z, { className: b(x) })
                )
              );
        });
      }
    },
    3021: (t, e, n) => {
      "use strict";
      n.d(e, { jy: () => y, sN: () => b });
      const r = n(63038), o = n.n(r), a = n(28655), i = n.n(a), s = n(71439), u = n(46829), l = n(14391);
      function c() {
        const t = i()([
          "\n  fragment WithSetReadingList_post on Post {\n    ...ReadingList_post\n  }\n  ",
          "\n",
        ]);
        return (c = () => {
          return t;
        }),
        t
      ;
      }
      function d() {
        const t = i()([
          "\n  mutation UnarchivePostDefault($targetPostId: ID!) {\n    unarchivePost(targetPostId: $targetPostId) {\n      ...ReadingList_post\n    }\n  }\n  ",
          "\n",
        ]);
        return (d = () => {
          return t;
        }),
        t
      ;
      }
      function p() {
        const t = i()([
          "\n  mutation ArchivePostDefault($targetPostId: ID!) {\n    archivePost(targetPostId: $targetPostId) {\n      ...ReadingList_post\n    }\n  }\n  ",
          "\n",
        ]);
        return (p = () => {
          return t;
        }),
        t
      ;
      }
      function f() {
        const t = i()([
          "\n  mutation UnbookmarkPostDefault($targetPostId: ID!) {\n    unbookmarkPost(targetPostId: $targetPostId) {\n      ...ReadingList_post\n    }\n  }\n  ",
          "\n",
        ]);
        return (f = () => {
          return t;
        }),
        t
      ;
      }
      function m() {
        const t = i()([
          "\n  mutation BookmarkPostDefault($targetPostId: ID!) {\n    bookmarkPost(targetPostId: $targetPostId) {\n      ...ReadingList_post\n    }\n  }\n  ",
          "\n",
        ]);
        return (m = () => {
          return t;
        }),
        t
      ;
      }
      function g() {
        const t = i()([
          "\n  fragment ReadingList_post on Post {\n    __typename\n    id\n    readingList\n  }\n",
        ]);
        return (g = () => {
          return t;
        }),
        t
      ;
      }
      const E = (0, s.Ps)(g());
      const v = (0, s.Ps)(m(), E);
      const I = (0, s.Ps)(f(), E);
      const h = (0, s.Ps)(p(), E);
      const _ = (0, s.Ps)(d(), E);
      var y = (0, s.Ps)(c(), E);

      var b = t => {
        const e = t.children,
              n = t.post,
              r = n.id,
              a = (t => {
                const e = (0, u.useMutation)(v, {
                  variables: { targetPostId: t },
                  optimisticResponse: {
                    bookmarkPost: {
                      __typename: "Post",
                      id: t,
                      readingList: l.sx.READING_LIST_QUEUE,
                    },
                  },
                });
                return o()(e, 1)[0];
              })(r),
              i = (t => {
                const e = (0, u.useMutation)(I, {
                  variables: { targetPostId: t },
                  optimisticResponse: {
                    unbookmarkPost: {
                      __typename: "Post",
                      id: t,
                      readingList: l.sx.READING_LIST_NONE,
                    },
                  },
                });
                return o()(e, 1)[0];
              })(r),
              s = (t => {
                const e = (0, u.useMutation)(h, {
                  variables: { targetPostId: t },
                  optimisticResponse: {
                    archivePost: {
                      __typename: "Post",
                      id: t,
                      readingList: l.sx.READING_LIST_ARCHIVE,
                    },
                  },
                });
                return o()(e, 1)[0];
              })(r),
              c = (t => {
                const e = (0, u.useMutation)(_, {
                  variables: { targetPostId: t },
                  optimisticResponse: {
                    unarchivePost: {
                      __typename: "Post",
                      id: t,
                      readingList: l.sx.READING_LIST_QUEUE,
                    },
                  },
                });
                return o()(e, 1)[0];
              })(r);
        return r
          ? e(t => {
              return () => {
                switch (n.readingList) {
                  case l.sx.READING_LIST_NONE:
                    if ("READING_LIST_QUEUE" === t) return a();
                    break;
                  case l.sx.READING_LIST_QUEUE:
                    if ("READING_LIST_NONE" === t) return i();
                    if ("READING_LIST_ARCHIVE" === t) return s();
                    break;
                  case l.sx.READING_LIST_ARCHIVE:
                    if (!t) return r;
                    if ("READING_LIST_NONE" === t) return i();
                    if ("READING_LIST_QUEUE" === t) return c();
                }
                throw new Error(
                  'Invalid reading list change from "'
                    .concat(n.readingList || "unkown", '" to "')
                    .concat(t, '".')
                );
              };
            })
          : null;
      };
    },
    71245: (t, e, n) => {
      "use strict";
      n.d(e, { Lf: () => g, h3: () => E, yb: () => v });
      const r = n(63038), o = n.n(r), a = n(28655), i = n.n(a), s = n(71439), u = n(46829), l = n(67294), c = n(14391);
      function d() {
        const t = i()([
          "\n  mutation RejectPostFromPubMutation(\n    $postId: ID!\n    $collectionSlug: String!\n    $status: CollectionPostStatus!\n  ) {\n    manageCollectionPostStatus(postId: $postId, collectionSlug: $collectionSlug, status: $status) {\n      __typename\n      id\n      statusForCollection\n      collection {\n        id\n      }\n      pendingCollection {\n        id\n        slug\n      }\n    }\n  }\n",
        ]);
        return (d = () => {
          return t;
        }),
        t
      ;
      }
      function p() {
        const t = i()([
          "\n  mutation ManageCollectionPostStatusMutation(\n    $postId: ID!\n    $collectionSlug: String!\n    $status: CollectionPostStatus!\n  ) {\n    manageCollectionPostStatus(postId: $postId, collectionSlug: $collectionSlug, status: $status) {\n      __typename\n      id\n      statusForCollection\n      pendingCollection {\n        id\n        slug\n      }\n    }\n  }\n",
        ]);
        return (p = () => {
          return t;
        }),
        t
      ;
      }
      const f = (0, s.Ps)(p());
      const m = (0, s.Ps)(d());

      var g = t => {
        const e = (0, u.useMutation)(f), n = o()(e, 1)[0];
        return (0, l.useCallback)(
          e => {
            return n({
              variables: {
                collectionSlug: (null == e ? void 0 : e.slug) || "",
                postId: t.id,
                status: c.Zj.PENDING,
              },
              optimisticResponse: {
                manageCollectionPostStatus: {
                  __typename: "Post",
                  id: t.id,
                  statusForCollection: c.Zj.PENDING,
                  pendingCollection: e,
                },
              },
            });
          },
          [t]
        );
      };

      var E = t => {
        const e = (0, u.useMutation)(f), n = o()(e, 1)[0];
        return (0, l.useCallback)(
          e => {
            return n({
              variables: {
                collectionSlug: (null == e ? void 0 : e.slug) || "",
                postId: t.id,
                status: c.Zj.APPROVED,
              },
            });
          },
          [t]
        );
      };

      var v = t => {
        const e = (0, u.useMutation)(m), n = o()(e, 1)[0];
        return (0, l.useCallback)(
          e => {
            return n({
              variables: {
                collectionSlug: (null == e ? void 0 : e.slug) || "",
                postId: t.id,
                status: c.Zj.REMOVED,
              },
              optimisticResponse: {
                manageCollectionPostStatus: {
                  __typename: "Post",
                  id: t.id,
                  statusForCollection: null,
                  collection: null,
                  pendingCollection: null,
                },
              },
            }).then(t => {
              if (t.errors && t.errors[0]) throw t.errors[0];
              return t;
            });
          },
          [t]
        );
      };
    },
    73232: (t, e, n) => {
      "use strict";
      n.d(e, { Q: () => r, t: () => o });
      var r =
          "This story is also a response to another story. Are you sure you want to delete this story?",
        o =
          "This story is also a response to another story. Any edits are applied to both.";
    },
    90639: (t, e, n) => {
      "use strict";
      n.d(e, { Z: () => u });
      const r = n(63038), o = n.n(r), a = n(67294), i = n(7530), s = n(64504);
      const u = t => {
        const e = t.isVisible,
              n = t.hide,
              r = t.onSubmit,
              u = t.isResponse,
              l = a.useState(!1),
              c = o()(l, 2),
              d = c[0],
              p = c[1],
              f = a.useState("Spam"),
              m = o()(f, 2),
              g = m[0],
              E = m[1],
              v = a.useCallback((t, e) => {
                return E(e);
              }, []);
        return a.createElement(
          i.Vq,
          {
            isVisible: e,
            hide: n,
            noPortal: u,
            withCloseButton: !1,
            customBackgroundColor: u
              ? "rgba(255, 255, 255, 0.97)"
              : "rgba(255, 255, 255, 0.94)",
          },
          a.createElement(
            i.xu,
            {
              height: "550px",
              width: u ? "100%" : "900px",
              background: u ? "none" : "white",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: u ? "none" : "rgba(0, 0, 0, 0.15) 0px 2px 10px",
              padding: "18px",
              position: "relative",
              sm: { boxShadow: "none", background: "none" },
              xs: { boxShadow: "none", background: "none" },
            },
            a.createElement(
              i.xu,
              {
                display: "flex",
                margin: "auto",
                flexDirection: "column",
                alignItems: u ? "flex-start" : "center",
              },
              a.createElement(
                s.X6,
                { scale: "M" },
                "Report ",
                u ? "Response" : "Story"
              ),
              a.createElement(
                i.xu,
                {
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  paddingRight: "5px",
                  marginBottom: "30px",
                },
                a.createElement(
                  i.xu,
                  { marginTop: "25px", marginBottom: "30px", padding: "5px 0" },
                  a.createElement(i.Ee, {
                    onChange: v,
                    value: g,
                    radioStyle: "SUBTLE",
                    options: [
                      { name: "Spam", value: "Spam" },
                      { name: "Harassment", value: "Harassment" },
                      { name: "Rules Violation", value: "Other" },
                    ],
                  })
                ),
                a.createElement(
                  i.XZ,
                  {
                    checked: d,
                    onChange() {
                      p(!d);
                    },
                  },
                  a.createElement(
                    i.xu,
                    { paddingTop: u ? "16px" : "0" },
                    "Also block the author of this ",
                    u ? "response" : "story"
                  )
                )
              ),
              a.createElement(
                i.xu,
                {
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "10px",
                },
                a.createElement(
                  i.xu,
                  { marginRight: "8px" },
                  a.createElement(i.zx, { onClick: n }, "Cancel")
                ),
                a.createElement(
                  i.zx,
                  {
                    buttonStyle: "ERROR",
                    onClick() {
                      r(d, g), n();
                    },
                  },
                  "Report"
                )
              ),
              a.createElement(
                i.xu,
                { marginTop: "50px", textAlign: u ? "left" : "center" },
                a.createElement(
                  s.F,
                  { scale: "M", tag: "div" },
                  "Report",
                  " ",
                  a.createElement(
                    i.rU,
                    {
                      href:
                        "https://medium.com/policy/mediums-copyright-and-dmca-policy-d126f73695",
                      linkStyle: "OBVIOUS",
                      target: "_blank",
                      inline: !0,
                    },
                    "copyright infringement"
                  ),
                  " ",
                  "or",
                  " ",
                  a.createElement(
                    i.rU,
                    {
                      href:
                        "https://medium.com/policy/mediums-trademark-policy-e3bb53df59a7",
                      linkStyle: "OBVIOUS",
                      target: "_blank",
                      inline: !0,
                    },
                    "trademark infringement"
                  ),
                  ". ",
                  !u && a.createElement("br", null),
                  "Read",
                  " ",
                  a.createElement(
                    i.rU,
                    {
                      href:
                        "https://medium.com/policy/medium-rules-30e5502c4eb4",
                      linkStyle: "OBVIOUS",
                      target: "_blank",
                      inline: !0,
                    },
                    "our rules"
                  ),
                  "."
                )
              )
            ),
            !u &&
              a.createElement(i.PZ, {
                onClick: n,
                size: "LARGE",
                absoluteOffset: "18px",
              })
          )
        );
      };
    },
    267: (t, e, n) => {
      "use strict";
      n.d(e, { XC: () => l, EI: () => c });
      const r = n(59713), o = n.n(r), a = n(67294);
      function i(t, e) {
        const n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(e => {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(t) {
        for (let e = 1; e < arguments.length; e++) {
          const n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? i(Object(n), !0).forEach(e => {
                o()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(e => {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      const u = a.createContext({});

      var l = () => {
        return a.useContext(u);
      };

      var c = t => {
        let e = t.context;
        const n = t.extendContext;
        const r = void 0 !== n && n;
        const o = t.children;
        const i = l();
        return (
          r && i && (e = s(s({}, i), e)),
          a.createElement(u.Provider, { value: e }, o)
        );
      };
    },
    39171: (t, e, n) => {
      "use strict";
      function r(t, e) {
        let n;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = ((t, e) => {
              if (t) {
                if ("string" == typeof t) return o(t, e);
                let n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(t)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? o(t, e)
                    : void 0
                );
              }
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            let r = 0;
            const a = () => {};
            return {
              s: a,
              n() {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e(t) {
                throw t;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        let i, s = !0, u = !1;
        return {
          s() {
            n = t[Symbol.iterator]();
          },
          n() {
            const t = n.next();
            return (s = t.done), t;
          },
          e(t) {
            (u = !0), (i = t);
          },
          f() {
            try {
              s || null == n.return || n.return();
            } finally {
              if (u) throw i;
            }
          },
        };
      }
      function o(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      n.d(e, { B: () => a });
      var a = function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return () => {
          let t;
          const n = r(e);
          try {
            for (n.s(); !(t = n.n()).done; ) (0, t.value)();
          } catch (t) {
            n.e(t);
          } finally {
            n.f();
          }
        };
      };
    },
  },
]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/6230.9086a357.chunk.js.map
