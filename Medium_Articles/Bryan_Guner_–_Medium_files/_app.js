(window.webpackJsonp = window.webpackJsonp || []).push([
  [72],
  {
    "4kjc": function (t, e, r) {
      "use strict";
      r.r(e);
      const n = r("UBq+");
      r.d(e, "GlobalHandlers", () => {
        return n.a;
      });
      const o = r("wytX");
      r.d(e, "TryCatch", () => {
        return o.a;
      });
      const i = r("/ZhC");
      r.d(e, "Breadcrumbs", () => {
        return i.a;
      });
      const a = r("ZAf6");
      r.d(e, "LinkedErrors", () => {
        return a.a;
      });
      const c = r("nmNn");
      r.d(e, "UserAgent", () => {
        return c.a;
      });
    },
    6: function (t, e, r) {
      r("j36g"), r("74v/"), (t.exports = r("nOHt"));
    },
    "74v/": function (t, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        () => {
          return r("cha2");
        },
      ]);
    },
    "8Bbg": function (t, e, r) {
      t.exports = r("B5Ud");
    },
    B5Ud(t, e, r) {
      "use strict";
      const n = r("Qetd");
      const o = r("/HRN");
      const i = r("WaGi");
      const a = r("ZDA2");
      const c = r("/+P4");
      const s = r("N9n2");
      const u = r("ln6h");
      const l = r("KI45");
      (e.__esModule = !0),
        (e.Container = ({children}) => {
          0;
          return children;
        }),
        (e.createUrl = v),
        (e.default = void 0);
      const f = l(r("q1tI"));
      const p = r("g/15");
      function d({Component, ctx}) {
        let e;
        let r;
        let n;
        return u.async(o => {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                return (e = Component),
                (r = ctx),
                (o.next = 3),
                u.awrap((0, p.loadGetInitialProps)(e, r))
              ;
              case 3:
                return (n = o.sent), o.abrupt("return", { pageProps: n });
              case 5:
              case "end":
                return o.stop();
            }
        });
      }
      e.AppInitialProps = p.AppInitialProps;
      const h = (t => {
        function e(...args) {
          return o(this, e), a(this, c(e).apply(this, args));
        }
        return s(e, t),
        i(e, [
          {
            key: "componentDidCatch",
            value(t, e) {
              throw t;
            },
          },
          {
            key: "render",
            value() {
              const t = this.props;
              const e = t.router;
              const r = t.Component;
              const o = t.pageProps;
              const i = v(e);
              return f.default.createElement(r, n({}, o, { url: i }));
            },
          },
        ]),
        e;
      })(f.default.Component);
      function v(t) {
        const e = t.pathname;
        const r = t.asPath;
        const n = t.query;
        return {
          get query() {
            return n;
          },
          get pathname() {
            return e;
          },
          get asPath() {
            return r;
          },
          back() {
            t.back();
          },
          push(e, r) {
            return t.push(e, r);
          },
          pushTo(e, r) {
            const n = r ? e : "";
            const o = r || e;
            return t.push(n, o);
          },
          replace(e, r) {
            return t.replace(e, r);
          },
          replaceTo(e, r) {
            const n = r ? e : "";
            const o = r || e;
            return t.replace(n, o);
          },
        };
      }
      (e.default = h), (h.origGetInitialProps = d), (h.getInitialProps = d);
    },
    ElcZ(t, e, r) {},
    EsCl(t, e, r) {
      const n = r("hfKm");
      const o = r("2Eek");
      const i = r("XoMD");
      const a = r("Jo+v");
      const c = r("4mXO");
      const s = r("pLtp");
      const u = r("xHqa");
      function l(t, e) {
        const r = s(t);
        if (c) {
          let n = c(t);
          e &&
            (n = n.filter(e => {
              return a(t, e).enumerable;
            })),
            r.push(...n);
        }
        return r;
      }
      function f(t) {
        for (let e = 1; e < arguments.length; e++) {
          const r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(r), !0).forEach(e => {
                u(t, e, r[e]);
              })
            : i
            ? o(t, i(r))
            : l(Object(r)).forEach(e => {
                n(t, e, a(r, e));
              });
        }
        return t;
      }
      let p;
      const d = r("WSEr");
      d.init({
        dsn: "https://7a292604db4d4a84a4e2a7f4ea2e403f@sentry.repl.it/2",
        release: "2aa1756",
        environment: "production",
        whitelistUrls: [/(?:[a-z]+\.)?repl\.it/],
        blacklistUrls: [/^file/],
        ignoreErrors: [
          /Error connecting to server/,
          /You are not authorized to perform this operation/,
          /is being indexed/,
          /asDocumentLinks/,
          /Language Client services has been overriden/,
          /Connection is disposed/,
          /Extension context invalidated/,
          /Blocked a frame with origin/,
          /Permission denied to access property "dispatchEvent" on cross-origin object/,
          /null is not an object \(evaluating 'this\.input\.value'\)/,
        ],
        beforeSend(t, e) {
          if (!t.exception) return null;
          if (
            (e &&
              e.originalException instanceof window.Event &&
              (t.extra || (t.extra = {}),
              (t.extra.isTrusted = e.originalException.isTrusted),
              (t.extra.detail = e.originalException.detail),
              (t.extra.type = e.originalException.type),
              (t.extra.reason = e.originalException.reason),
              (t.extra.message = e.originalException.message),
              e.originalException.constructor &&
                (t.extra.constructorname =
                  e.originalException.constructor.name),
              e.originalException.toString &&
                (t.extra.tostringed = e.originalException.toString())),
            window.mobileEditor &&
              (t.tags = f({}, t.tags, { mobileEditor: "true" })),
            e &&
              e.originalException &&
              "CustomSentryError" === e.originalException.name &&
              (e.originalException.extras &&
                (t.extra = f({}, t.extra, {}, e.originalException.extras)),
              e.originalException.tags &&
                (t.tags = f({}, t.tags, {}, e.originalException.tags))),
            t.exception.values &&
              t.exception.values[0] &&
              "ChunkLoadError" === t.exception.values[0].type &&
              (t.fingerprint = ["{{ type }}"]),
            t.exception.values &&
              t.exception.values[0] &&
              t.exception.values[0].stacktrace)
          )
            for (
              let r = t.exception.values[0].stacktrace.frames, n = 0;
              n < r.length;
              n++
            ) {
              const o = r[n].function;
              if (
                o.match(/t\._updateHistory/) ||
                o.match(/asMarkdownString/) ||
                o.match(/_updateTokensUntilLine/) ||
                o.match(/_assertNotDisposed/)
              )
                return null;
            }
          window.lastGovalTokenMeta &&
            (t.extra = f({}, t.extra, {
              lastGovalToken: window.lastGovalTokenMeta,
            }));
          const i = {
            mobile: window.mobileTaint || !1,
            anon: window.anonTaint || !1,
            multiplayer: window.multiplayerTaint || !1,
            disconnected: window.disconnectedTaint || !1,
            unexpecteddisconnect: window.unexpecteddisconnectTaint || !1,
            forked: window.forkedTaint || !1,
            inotified: window.inotifiedTaint || !1,
            navigated: window.navigatedTaint || !1,
          };
          return (t.tags = f({}, t.tags, {}, i)), t;
        },
      });
      const h = t => {
        let e;
        (e = t.reason
          ? t.reason
          : t.detail && t.detail.reason
          ? t.detail.reason
          : t) &&
          e !== p &&
          ((p = e), d.captureException(e));
      };
      (window.onunhandledrejection = h),
        window.addEventListener("unhandledrejection", h);
    },
    FkOY(t, e, r) {},
    "P+y9": function (t, e, r) {},
    UrZU(t, e, r) {},
    WSEr(t, e, r) {
      "use strict";
      r.r(e);
      const n = r("SDrh");
      const o = r("PKZu");
      const i = r("g802");
      const a = r("Ii+B");
      const c = r("g7Gn");
      const s = r("zoce");
      const u = r("kWuB");
      const l = r("3CEA");
      const f = r("omaz");
      const p = r("ADAj");
      const d = r("zNuj");
      const h = r("4kjc");
      const v = r("nXHh");
      r.d(e, "Integrations", () => {
        return m;
      }),
        r.d(e, "Severity", () => {
          return o.a;
        }),
        r.d(e, "Status", () => {
          return i.a;
        }),
        r.d(e, "addGlobalEventProcessor", () => {
          return a.b;
        }),
        r.d(e, "addBreadcrumb", () => {
          return c.a;
        }),
        r.d(e, "captureException", () => {
          return c.c;
        }),
        r.d(e, "captureEvent", () => {
          return c.b;
        }),
        r.d(e, "captureMessage", () => {
          return c.d;
        }),
        r.d(e, "configureScope", () => {
          return c.e;
        }),
        r.d(e, "getHubFromCarrier", () => {
          return s.c;
        }),
        r.d(e, "getCurrentHub", () => {
          return s.b;
        }),
        r.d(e, "Hub", () => {
          return s.a;
        }),
        r.d(e, "Scope", () => {
          return a.a;
        }),
        r.d(e, "startTransaction", () => {
          return c.l;
        }),
        r.d(e, "setContext", () => {
          return c.f;
        }),
        r.d(e, "setExtra", () => {
          return c.g;
        }),
        r.d(e, "setExtras", () => {
          return c.h;
        }),
        r.d(e, "setTag", () => {
          return c.i;
        }),
        r.d(e, "setTags", () => {
          return c.j;
        }),
        r.d(e, "setUser", () => {
          return c.k;
        }),
        r.d(e, "withScope", () => {
          return c.m;
        }),
        r.d(e, "BrowserClient", () => {
          return u.a;
        }),
        r.d(e, "defaultIntegrations", () => {
          return l.b;
        }),
        r.d(e, "forceLoad", () => {
          return l.d;
        }),
        r.d(e, "init", () => {
          return l.e;
        }),
        r.d(e, "lastEventId", () => {
          return l.f;
        }),
        r.d(e, "onLoad", () => {
          return l.g;
        }),
        r.d(e, "showReportDialog", () => {
          return l.h;
        }),
        r.d(e, "flush", () => {
          return l.c;
        }),
        r.d(e, "close", () => {
          return l.a;
        }),
        r.d(e, "wrap", () => {
          return l.i;
        }),
        r.d(e, "SDK_NAME", () => {
          return f.a;
        }),
        r.d(e, "SDK_VERSION", () => {
          return f.b;
        }),
        r.d(e, "Transports", () => {
          return v;
        });
      let g = {};
      const b = Object(d.f)();
      b.Sentry && b.Sentry.Integrations && (g = b.Sentry.Integrations);
      var m = n.a({}, g, p.a, h);
    },
    ZU0V(t, e) {
      function r(t) {
        return t && "object" === typeof t
          ? i(t) || a(t)
            ? t
            : o(t) ? ((t, e) => {
                if (t.map) return t.map(e);
                for (var r = [], n = 0; n < t.length; n++) r.push(e(t[n], n));
                return r;
              })(t, r) : ((t, e, r) => {
                if (t.reduce) return t.reduce(e, r);
                for (let n = 0; n < t.length; n++) r = e(r, t[n], n);
                return r;
              })(s(t), (e, o) => {
          return (e[n(o)] = r(t[o])), e;
        }, {})
          : t;
      }
      function n(t) {
        return t.replace(/[_.-](\w|$)/g, (t, e) => {
          return e.toUpperCase();
        });
      }
      t.exports = t => {
        return "string" === typeof t ? n(t) : r(t);
      };

      var o =
          Array.isArray ||
          (t => {
            return "[object Array]" === Object.prototype.toString.call(t);
          });

      var i = t => {
        return "[object Date]" === Object.prototype.toString.call(t);
      };

      var a = t => {
        return "[object RegExp]" === Object.prototype.toString.call(t);
      };

      const c = Object.prototype.hasOwnProperty;

      var s =
        Object.keys ||
        (t => {
          const e = [];
          for (const r in t) c.call(t, r) && e.push(r);
          return e;
        });
    },
    cha2(t, e, r) {
      "use strict";
      r.r(e);
      const n = r("kOwS");
      const o = r("ln6h");
      const i = r.n(o);
      const a = r("0iUn");
      const c = r("MI3g");
      const s = r("a7VT");
      const u = r("AT/M");
      const l = r("sLSF");
      const f = r("Tit0");
      const p = r("vYYK");

      const d =
        (r("q7KB"),
        r("FkOY"),
        r("heRm"),
        r("ElcZ"),
        r("UrZU"),
        r("P+y9"),
        r("q1tI"));

      const h = r("8Bbg");
      const v = r.n(h);
      const g = r("dwco");
      const b = r.n(g);
      r("EsCl");
      const m = r("/MKj");
      const y = r("VX74");
      const E = r("pLtp");
      const S = r.n(E);
      const w = r("g7Gn");
      function x(t) {
        return ({dispatch, getState}) => {
          const r = dispatch;
          const n = getState;
          return e => {
            return o => {
              return "function" === typeof o ? o(r, n, t) : e(o);
            };
          };
        };
      }
      const O = x();
      O.withExtraArgument = x;
      const _ = O;

      const T =
        "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
          ? t => {
              return typeof t;
            }
          : t => {
              return t &&
                "function" === typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            };

      function I(t) {
        return (
          null !== t &&
          "object" === ("undefined" === typeof t ? "undefined" : T(t)) &&
          t &&
          "function" === typeof t.then
        );
      }

      const C = (t, e) => {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t))
                  return ((t, e) => {
                    const r = [];
                    let n = !0;
                    let o = !1;
                    let i = void 0;
                    try {
                      for (
                        var a, c = t[Symbol.iterator]();
                        !(n = (a = c.next()).done) &&
                        (r.push(a.value), !e || r.length !== e);
                        n = !0
                      );
                    } catch (s) {
                      (o = !0), (i = s);
                    } finally {
                      try {
                        !n && c.return && c.return();
                      } finally {
                        if (o) throw i;
                      }
                    }
                    return r;
                  })(t, e);
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance"
                );
              };

      const j =
        Object.assign ||
        function (t) {
          for (let e = 1; e < arguments.length; e++) {
            const r = arguments[e];
            for (const n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        };

      const U = ["PENDING", "FULFILLED", "REJECTED"];
      const N = r("ANjH");
      const P = r("4y2c");
      const L = r("dfwq");

      const k = new ((() => {
        function t() {
          Object(a.a)(this, t),
            (this._middlewares = []),
            (this.middleware = this.middleware.bind(this)),
            (this.register = this.register.bind(this));
        }
        return Object(l.a)(t, [
          {
            key: "middleware",
            value(t) {
              const e = this;
              return r => {
                return n => {
                  const o = e._middlewares.map(e => {
                    return e(t);
                  });
                  N.d.apply(void 0, Object(L.a)(o))(r)(n);
                };
              };
            },
          },
          {
            key: "register",
            value(t) {
              this._middlewares = [].concat(
                Object(L.a)(this._middlewares),
                [t]
              );
            },
          },
        ]),
        t;
      })())();

      const R = r("hfKm");
      const A = r.n(R);
      const F = r("2Eek");
      const D = r.n(F);
      const H = r("XoMD");
      const B = r.n(H);
      const X = r("Jo+v");
      const M = r.n(X);
      const G = r("4mXO");
      const Y = r.n(G);
      const q = r("ZU0V");
      const V = r.n(q);
      const K = r("zgDP");
      function Z(t, e) {
        const r = S()(t);
        if (Y.a) {
          let n = Y()(t);
          e &&
            (n = n.filter(e => {
              return M()(t, e).enumerable;
            })),
            r.push(...n);
        }
        return r;
      }
      function J(t) {
        for (let e = 1; e < arguments.length; e++) {
          const r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Z(Object(r), !0).forEach(e => {
                Object(p.a)(t, e, r[e]);
              })
            : B.a
            ? D()(t, B()(r))
            : Z(Object(r)).forEach(e => {
                A()(t, e, M()(r, e));
              });
        }
        return t;
      }
      const W = Object(N.c)({
        userInfo(...args) {
          const t =
                    args.length > 0 && void 0 !== args[0]
                      ? args[0]
                      : { fetchState: "idle" };

          const e = args.length > 1 ? args[1] : void 0;
          switch (e.type) {
            case "FETCH_SIGNUP_REQUEST":
            case "FETCH_LOGIN_REQUEST":
            case "FETCH_USER_INFO_REQUEST":
              return J({}, t, {
                fetchState: "fetching",
                fetchingPromise: e.fetchingPromise,
                error: "",
              });
            case "FETCH_SIGNUP_SUCCESS":
            case "FETCH_LOGIN_SUCCESS":
            case "FETCH_USER_INFO_SUCCESS":
            case "UPDATE_USER_INFO_SUCCESS":
              const r = e.payload || e.user;

              const n = J(
                {},
                t,
                { fetchState: "done", fetchingPromise: null },
                V()(r),
                { error: "", isLoggedIn: !0 }
              );

              return (
                w.k(n),
                Object(K.identify)({
                  id: n.id,
                  email: n.email,
                  bio: n.bio,
                  firstName: n.firstName,
                  lastName: n.lastName,
                  username: n.username,
                  roles: Object(L.a)(n.roles),
                  gating: Object(L.a)(n.gating),
                  planID: n.subscription ? n.subscription.planId : null,
                }),
                n
              );
            case "FETCH_SIGNUP_FAILURE":
            case "FETCH_LOGIN_FAILURE":
            case "FETCH_USER_INFO_FAILURE":
              return J({}, t, {
                fetchState: "done",
                fetchingPromise: null,
                error: e.error,
                isLoggedIn: !1,
              });
            case "UPDATE_USER_INFO_FAILURE":
              return J({}, t, {
                fetchState: "done",
                fetchingPromise: null,
                isFetching: !1,
                error: e.error,
              });
            case "UPDATE_USER_SUBSCRIPTION":
              return J({}, t, { subscription: e.subscription });
            default:
              return t;
          }
        },
        billingInfo(...args) {
          const t =
                    args.length > 0 && void 0 !== args[0]
                      ? args[0]
                      : { isFetching: !1 };

          const e = args.length > 1 ? args[1] : void 0;
          switch (e.type) {
            case "FETCH_BILLING_INFO_REQUEST":
              return J({}, t, { isFetching: !0, error: "" });
            case "FETCH_BILLING_INFO_SUCCESS":
              return J({}, t, { isFetching: !1 }, V()(e.data), { error: "" });
            case "FETCH_BILLING_INFO_FAILURE":
              return J({}, t, { isFetching: !1, error: e.error });
            case "CANCEL_SUBSCRIPTION_SUCCESS":
              return { isFetching: !1 };
            case "CANCEL_SUBSCRIPTION_FAILURE":
              return J({}, t, { error: e.error });
            default:
              return t;
          }
        },
        authModal(...args) {
          const t =
            args.length > 0 && void 0 !== args[0]
              ? args[0]
              : { promptCount: 0, dismissed: !1, show: !1 };
          switch ((args.length > 1 ? args[1] : void 0).type) {
            case "AUTH_MODAL_INCREMENT_PROMPT_COUNT":
              return J({}, t, { promptCount: t.promptCount + 1 });
            case "AUTH_MODAL_SHOW":
              return J({}, t, { show: !0, dismissed: !1 });
            case "AUTH_MODAL_DISSMISS":
              return J({}, t, { dismissed: !0 });
            case "FETCH_SIGNUP_SUCCESS":
            case "FETCH_LOGIN_SUCCESS":
              return J({}, t, { dismissed: !0 });
            default:
              return t;
          }
        },
      });
      P.a.register("user", W);
      const z = r("/3ys");

      const Q = () => {
        return t => {
          return e => {
            try {
              return (
                w.a({
                  category: "redux",
                  message: "action",
                  data: { type: e ? e.type : null },
                }),
                t(e)
              );
            } catch (r) {
              throw (
                (w.m(t => {
                  t.setExtra("action", e), w.c(r);
                }),
                r)
              );
            }
          };
        };
      };

      function $(t) {
        let e;
        function r(e) {
          const r = S()(e);
          return t &&
            S()(t).forEach(t => {
              !r.includes(t) &&
                (e[t] = (...args) => {
                  const t =
                    args.length > 0 && void 0 !== args[0]
                      ? args[0]
                      : null;
                  return t;
                });
            }),
          Object(N.c)(e);
        }
        if (
          !(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
            .isServer &&
          (window.__REDUX_DEVTOOLS_EXTENSION__ &&
            (e = window.__REDUX_DEVTOOLS_EXTENSION__()),
          t && !t.user.userInfo.isLoggedIn)
        ) {
          const n = z.a.get("preferences");
          n && (t.preferences = n);
        }
        const o = r(P.a.getReducers());

        const i = Object(N.e)(
          o,
          t,
          Object(N.d)(
            Object(N.a)(Q, ((...args) => {
              const t =
                        args.length > 0 && void 0 !== args[0]
                          ? args[0]
                          : {};

              const e = t.promiseTypeSuffixes || U;
              const r = t.promiseTypeDelimiter || "_";
              return ({dispatch}) => {
                const n = dispatch;
                return t => {
                  return o => {
                    let i = void 0;
                    let a = void 0;
                    if (!o.payload) return t(o);
                    const c = o.payload;
                    if (I(c)) i = c;
                    else if (I(c.promise)) (i = c.promise), (a = c.data);
                    else {
                      if (
                        "function" !== typeof c &&
                        "function" !== typeof c.promise
                      )
                        return t(o);
                      if (
                        ((i = c.promise ? c.promise() : c()),
                        (a = c.promise ? c.data : void 0),
                        !I(i))
                      )
                        return t(j({}, o, { payload: i }));
                    }
                    const s = o.type;
                    const u = o.meta;
                    const l = C(e, 3);
                    const f = l[0];
                    const p = l[1];
                    const d = l[2];

                    const h = (t, e) => {
                      return j(
                        { type: [s, e ? d : p].join(r) },
                        null === t || "undefined" === typeof t
                          ? {}
                          : { payload: t },
                        void 0 !== u ? { meta: u } : {},
                        e ? { error: !0 } : {}
                      );
                    };

                    return t(
                      j(
                        { type: [s, f].join(r) },
                        void 0 !== a ? { payload: a } : {},
                        void 0 !== u ? { meta: u } : {}
                      )
                    ),
                    i.then(
                      (...args) => {
                        const t =
                                  args.length > 0 &&
                                  void 0 !== args[0]
                                    ? args[0]
                                    : null;

                        const e = h(t, !1);
                        return n(e), { value: t, action: e };
                      },
                      t => {
                        const e = h(t, !0);
                        throw (n(e), t);
                      }
                    );
                  };
                };
              };
            })({ promiseTypeSuffixes: ["REQUEST", "SUCCESS", "FAILURE"] }), _, k.middleware),
            e ||
              (t => {
                return t;
              })
          )
        );

        return P.a.setChangeListener(t => {
          i.replaceReducer(r(t));
        }),
        i
      ;
      }
      const tt = r("nmgF");
      const et = r("8Kt/");
      const rt = r.n(et);
      const nt = r("M85P");
      const ot = r("9PDL");
      const it = r("XXOK");
      const at = r.n(it);
      const ct = r("9Jkg");
      const st = r.n(ct);
      const ut = "reachability";

      const lt = [
        "https://repl.it/data/t/reachability",
        "https://replit.com/data/t/reachability",
        "https://reachability.util.repl.co/",
        "https://d0a4834b-dc04-495b-a2af-28d2b9646838.id.replitusercontent.com/",
      ];

      const ft = () => {
                return i.a.async(t => {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (localStorage) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt("return");
                      case 2:
                        setTimeout(() => {
                          let t;
                          let e;
                          let r;
                          let n;
                          let o;
                          let a;
                          let c;
                          let s;
                          let u;
                          return i.a.async(
                            l => {
                              for (;;)
                                switch ((l.prev = l.next)) {
                                  case 0:
                                    if (
                                      (864e5,
                                      !(
                                        (t = localStorage.getItem(ut)) &&
                                        new Date().getTime() - JSON.parse(t) < 864e5
                                      ))
                                    ) {
                                      l.next = 4;
                                      break;
                                    }
                                    return l.abrupt("return");
                                  case 4:
                                    (e = !0),
                                      (r = !1),
                                      (n = void 0),
                                      (l.prev = 7),
                                      (o = at()(lt));
                                  case 9:
                                    if ((e = (a = o.next()).done)) {
                                      l.next = 31;
                                      break;
                                    }
                                    return (
                                      (c = a.value),
                                      (l.prev = 11),
                                      (l.next = 14),
                                      i.a.awrap(
                                        window.fetch(c, {
                                          credentials: "omit",
                                          redirect: "error",
                                          referrerPolicy: "no-referrer",
                                          cache: "no-store",
                                        })
                                      )
                                    );
                                  case 14:
                                    if (200 === (s = l.sent).status) {
                                      l.next = 17;
                                      break;
                                    }
                                    throw new Error(
                                      "unexpected status: ".concat(s.status)
                                    );
                                  case 17:
                                    return (l.next = 19), i.a.awrap(s.text());
                                  case 19:
                                    if ("reachable" === (u = l.sent)) {
                                      l.next = 22;
                                      break;
                                    }
                                    throw new Error("unexpected body: ".concat(u));
                                  case 22:
                                    Object(K.track)(K.events.REACHABILITY, {
                                      status: "success",
                                      destination: c,
                                    }),
                                      (l.next = 28);
                                    break;
                                  case 25:
                                    (l.prev = 25),
                                      (l.t0 = l.catch(11)),
                                      Object(K.track)(K.events.REACHABILITY, {
                                        status: "fail",
                                        destination: c,
                                        error: l.t0.message,
                                      });
                                  case 28:
                                    (e = !0), (l.next = 9);
                                    break;
                                  case 31:
                                    l.next = 37;
                                    break;
                                  case 33:
                                    (l.prev = 33),
                                      (l.t1 = l.catch(7)),
                                      (r = !0),
                                      (n = l.t1);
                                  case 37:
                                    (l.prev = 37),
                                      (l.prev = 38),
                                      e || null == o.return || o.return();
                                  case 40:
                                    if (((l.prev = 40), !r)) {
                                      l.next = 43;
                                      break;
                                    }
                                    throw n;
                                  case 43:
                                    return l.finish(40);
                                  case 44:
                                    return l.finish(37);
                                  case 45:
                                    localStorage.setItem(
                                      ut,
                                      st()(new Date().getTime())
                                    );
                                  case 46:
                                  case "end":
                                    return l.stop();
                                }
                            },
                            null,
                            null,
                            [
                              [7, 33, 37, 45],
                              [11, 25],
                              [38, , 40, 44],
                            ]
                          );
                        }, 3e4);
                      case 3:
                      case "end":
                        return t.stop();
                    }
                });
              };

      const pt = d.createElement;
      const dt = !1;
      dt ||
        (b.a.polyfill(), (() => {
        let t;
        let e;
        let r;
        (t = window.Event.prototype),
          (e = document),
          (r = window),
          t.composedPath ||
            (t.composedPath = function () {
              if (this.path) return this.path;
              let t = this.target;
              for (this.path = []; null !== t.parentNode; )
                this.path.push(t), (t = t.parentNode);
              return this.path.push(e, r), this.path;
            });
      })());
      const ht = "__REPLIT_REDUX_STORE__";
      function vt(t) {
        return dt
          ? $(t, { isServer: dt })
          : (window[ht] || (window[ht] = $(t)), window[ht]);
      }
      const gt = "displayName" in v.a ? v.a.displayName : "App";

      const bt = (t => {
        function e(t) {
          let r;
          let n;
          let o;
          if (
            (Object(a.a)(this, e),
            (o = Object(c.a)(this, Object(s.a)(e).call(this, t))),
            Object(p.a)(Object(u.a)(o), "reduxStore", void 0),
            Object(p.a)(Object(u.a)(o), "apolloClient", void 0),
            dt)
          ) {
            if (!t.reduxStore)
              throw new Error(
                "Expected reduxStore from _app getInitialProps while server side rendering"
              );
            if (!t.apolloClient)
              throw new Error(
                "Expected apollo from _app getInitialProps while server side rendering"
              );
            Object(nt.b)();
          }
          o.reduxStore = t.reduxStore || vt(t.reduxState);
          let i = !1;
          let l = !1;
          let f = !1;

          const d =
            null === (r = t.reduxState) || void 0 === r
              ? void 0
              : null === (n = r.user) || void 0 === n
              ? void 0
              : n.userInfo;

          return (
            d &&
              ((i = Object(ot.a)(d, "flag-graphql-subscriptions")),
              (l = Object(ot.a)(d, "flag-graphql-subscriptions-reconnect")),
              (f = Object(ot.a)(d, "flag-reachability"))),
            (o.apolloClient =
              t.apolloClient ||
              Object(tt.b)(
                { req: void 0, enableSubscriptions: i, enableRetries: l },
                t.apolloState
              )),
            !dt && f && ft(),
            o
          );
        }
        return Object(f.a)(e, t),
        Object(l.a)(e, null, [
          {
            key: "getInitialProps",
            value(t) {
              let e;
              let n;
              let o;
              let a;
              let c;
              let s;
              let u;
              let l;
              let f;
              let p;
              let d;
              let h;
              let g;
              let b;
              return i.a.async(m => {
                for (;;)
                  switch ((m.prev = m.next)) {
                    case 0:
                      return (n = t.ctx.req),
                      (o = !1),
                      (a = !1),
                      (null === n || void 0 === n
                        ? void 0
                        : null === (e = n.user) || void 0 === e
                        ? void 0
                        : e.gating) &&
                        ((o = (c = t => {
                          const e = n.user.gating.find(({controlName}) => {
                            return controlName === t;
                          });
                          return Boolean(e) && e.value;
                        })("flag-graphql-subscriptions")),
                        (a = c("flag-graphql-subscriptions-reconnect"))),
                      (s = Object(tt.b)({
                        req: n,
                        enableSubscriptions: o,
                        enableRetries: a,
                      })),
                      (u = vt({})),
                      (t.ctx.store = u),
                      (t.ctx.apolloClient = s),
                      (m.next = 10),
                      i.a.awrap(v.a.origGetInitialProps(t));
                    case 10:
                      if (((l = m.sent), (f = l.pageProps), !dt)) {
                        m.next = 21;
                        break;
                      }
                      return (
                        (m.next = 15),
                        i.a.awrap(
                          Promise.all([r.e(1), r.e(154)]).then(
                            r.bind(null, "ShjV")
                          )
                        )
                      );
                    case 15:
                      return (
                        (p = m.sent),
                        (d = p.getDataFromTree),
                        (h = t.AppTree),
                        (m.next = 20),
                        i.a.awrap(
                          d(
                            pt(h, {
                              pageProps: f,
                              apolloClient: s,
                              reduxStore: u,
                            })
                          )
                        )
                      );
                    case 20:
                      rt.a.rewind();
                    case 21:
                      return (g = u.getState()),
                      (b = s.cache.extract()),
                      (s.toJSON = () => {
                        return null;
                      }),
                      (u.toJSON = () => {
                        return null;
                      }),
                      m.abrupt("return", {
                        pageProps: f,
                        reduxState: g,
                        reduxStore: u,
                        apolloState: b,
                        apolloClient: s,
                      })
                    ;
                    case 26:
                    case "end":
                      return m.stop();
                  }
              });
            },
          },
        ]),
        Object(l.a)(e, [
          {
            key: "render",
            value() {
              const t = this.props;
              const e = t.Component;
              const r = t.pageProps;
              return pt(
                m.a,
                { store: this.reduxStore },
                pt(
                  y.ApolloProvider,
                  { client: this.apolloClient },
                  pt(e, Object(n.a)({}, r, { router: this.props.router }))
                )
              );
            },
          },
        ]),
        e;
      })(v.a);

      Object(p.a)(bt, "displayName", "ReplitApp(".concat(gt, ")"));
      e.default = bt;
    },
    dwco(t, e, r) {
      !(() => {
        "use strict";
        t.exports = {
          polyfill() {
            const t = window;
            const e = document;
            if (
              !(
                "scrollBehavior" in e.documentElement.style &&
                !0 !== t.__forceSmoothScrollPolyfill__
              )
            ) {
              let r;
              const n = t.HTMLElement || t.Element;
              var o = 468;

              var i = {
                scroll: t.scroll || t.scrollTo,
                scrollBy: t.scrollBy,
                elementScroll: n.prototype.scroll || s,
                scrollIntoView: n.prototype.scrollIntoView,
              };

              var a =
                t.performance && t.performance.now
                  ? t.performance.now.bind(t.performance)
                  : Date.now;

              var c =
                ((r = t.navigator.userAgent),
                new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(r)
                  ? 1
                  : 0);

              (t.scroll = t.scrollTo = (...args) => {
                void 0 !== args[0] &&
                  (!0 !== u(args[0])
                    ? v.call(
                        t,
                        e.body,
                        void 0 !== args[0].left
                          ? ~~args[0].left
                          : t.scrollX || t.pageXOffset,
                        void 0 !== args[0].top
                          ? ~~args[0].top
                          : t.scrollY || t.pageYOffset
                      )
                    : i.scroll.call(
                        t,
                        void 0 !== args[0].left
                          ? args[0].left
                          : "object" !== typeof args[0]
                          ? args[0]
                          : t.scrollX || t.pageXOffset,
                        void 0 !== args[0].top
                          ? args[0].top
                          : void 0 !== args[1]
                          ? args[1]
                          : t.scrollY || t.pageYOffset
                      ));
              }),
                (t.scrollBy = (...args) => {
                  void 0 !== args[0] &&
                    (u(args[0])
                      ? i.scrollBy.call(
                          t,
                          void 0 !== args[0].left
                            ? args[0].left
                            : "object" !== typeof args[0]
                            ? args[0]
                            : 0,
                          void 0 !== args[0].top
                            ? args[0].top
                            : void 0 !== args[1]
                            ? args[1]
                            : 0
                        )
                      : v.call(
                          t,
                          e.body,
                          ~~args[0].left + (t.scrollX || t.pageXOffset),
                          ~~args[0].top + (t.scrollY || t.pageYOffset)
                        ));
                }),
                (n.prototype.scroll = n.prototype.scrollTo = function(...args) {
                  if (void 0 !== args[0])
                    if (!0 !== u(args[0])) {
                      const t = args[0].left;
                      const e = args[0].top;
                      v.call(
                        this,
                        this,
                        "undefined" === typeof t ? this.scrollLeft : ~~t,
                        "undefined" === typeof e ? this.scrollTop : ~~e
                      );
                    } else {
                      if (
                        "number" === typeof args[0] &&
                        void 0 === args[1]
                      )
                        throw new SyntaxError("Value could not be converted");
                      i.elementScroll.call(
                        this,
                        void 0 !== args[0].left
                          ? ~~args[0].left
                          : "object" !== typeof args[0]
                          ? ~~args[0]
                          : this.scrollLeft,
                        void 0 !== args[0].top
                          ? ~~args[0].top
                          : void 0 !== args[1]
                          ? ~~args[1]
                          : this.scrollTop
                      );
                    }
                }),
                (n.prototype.scrollBy = function(...args) {
                  void 0 !== args[0] &&
                    (!0 !== u(args[0])
                      ? this.scroll({
                          left: ~~args[0].left + this.scrollLeft,
                          top: ~~args[0].top + this.scrollTop,
                          behavior: args[0].behavior,
                        })
                      : i.elementScroll.call(
                          this,
                          void 0 !== args[0].left
                            ? ~~args[0].left + this.scrollLeft
                            : ~~args[0] + this.scrollLeft,
                          void 0 !== args[0].top
                            ? ~~args[0].top + this.scrollTop
                            : ~~args[1] + this.scrollTop
                        ));
                }),
                (n.prototype.scrollIntoView = function(...args) {
                  if (!0 !== u(args[0])) {
                    const r = d(this);
                    const n = r.getBoundingClientRect();
                    const o = this.getBoundingClientRect();
                    r !== e.body
                      ? (v.call(
                          this,
                          r,
                          r.scrollLeft + o.left - n.left,
                          r.scrollTop + o.top - n.top
                        ),
                        "fixed" !== t.getComputedStyle(r).position &&
                          t.scrollBy({
                            left: n.left,
                            top: n.top,
                            behavior: "smooth",
                          }))
                      : t.scrollBy({
                          left: o.left,
                          top: o.top,
                          behavior: "smooth",
                        });
                  } else
                    i.scrollIntoView.call(
                      this,
                      void 0 === args[0] || args[0]
                    );
                });
            }
            function s(t, e) {
              (this.scrollLeft = t), (this.scrollTop = e);
            }
            function u(t) {
              if (
                null === t ||
                "object" !== typeof t ||
                void 0 === t.behavior ||
                "auto" === t.behavior ||
                "instant" === t.behavior
              )
                return !0;
              if ("object" === typeof t && "smooth" === t.behavior) return !1;
              throw new TypeError(
                `behavior member of ScrollOptions ${t.behavior} is not a valid value for enumeration ScrollBehavior.`
              );
            }
            function l({clientHeight, scrollHeight, clientWidth, scrollWidth}, e) {
              return "Y" === e
                ? clientHeight + c < scrollHeight
                : "X" === e
                ? clientWidth + c < scrollWidth
                : void 0;
            }
            function f(e, r) {
              const n = t.getComputedStyle(e, null)[`overflow${r}`];
              return "auto" === n || "scroll" === n;
            }
            function p(t) {
              const e = l(t, "Y") && f(t, "Y");
              const r = l(t, "X") && f(t, "X");
              return e || r;
            }
            function d(t) {
              for (; t !== e.body && !1 === p(t); ) t = t.parentNode || t.host;
              return t;
            }
            function h(e) {
              let r;
              let n;
              let i;
              let c;
              let s = (a() - e.startTime) / o;
              (c = s = s > 1 ? 1 : s),
                (r = 0.5 * (1 - Math.cos(Math.PI * c))),
                (n = e.startX + (e.x - e.startX) * r),
                (i = e.startY + (e.y - e.startY) * r),
                e.method.call(e.scrollable, n, i),
                (n === e.x && i === e.y) ||
                  t.requestAnimationFrame(h.bind(t, e));
            }
            function v(r, n, o) {
              let c;
              let u;
              let l;
              let f;
              const p = a();
              r === e.body
                ? ((c = t),
                  (u = t.scrollX || t.pageXOffset),
                  (l = t.scrollY || t.pageYOffset),
                  (f = i.scroll))
                : ((c = r), (u = r.scrollLeft), (l = r.scrollTop), (f = s)),
                h({
                  scrollable: c,
                  method: f,
                  startTime: p,
                  startX: u,
                  startY: l,
                  x: n,
                  y: o,
                });
            }
          },
        };
      })();
    },
    heRm(t, e, r) {},
    nXHh(t, e, r) {
      "use strict";
      r.r(e);
      const n = r("DTjN");
      r.d(e, "BaseTransport", () => {
        return n.a;
      });
      const o = r("2O0U");
      r.d(e, "FetchTransport", () => {
        return o.a;
      });
      const i = r("MT+3");
      r.d(e, "XHRTransport", () => {
        return i.a;
      });
    },
    q7KB(t, e, r) {},
  },
  [[6, 2, 1, 0, 3, 25]],
]);
//# sourceMappingURL=_app.js.map
