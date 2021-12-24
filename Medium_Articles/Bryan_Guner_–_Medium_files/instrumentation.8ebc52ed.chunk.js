(self.webpackChunklite = self.webpackChunklite || []).push([
  [118],
  {
    8538: (n, e, r) => {
      "use strict";
      r.r(e), r.d(e, { default: () => P });
      const t = r(94725), o = r(67294), i = r(12291), s = r(86280), a = r(72351), u = r(52837), c = r(61250), l = r(31235), f = r(31117), d = r(27737), v = r(67616), p = r(29035), g = r(63038), m = r.n(g), h = r(59713), _ = r.n(h), b = r(44059), w = r(14034);
      function E() {
        for (
          var n = new w.y(), e = arguments.length, r = new Array(e), t = 0;
          t < e;
          t++
        )
          r[t] = arguments[t];
        if (0 === r.length) return n;
        const o = r.map(() => {
          return [];
        });
        return r.forEach((e, r) => {
          e.observe(e => {
            o[r].push(e),
              o.every(n => {
                return n.length > 0;
              }) &&
                n.set(
                  o.map(n => {
                    return n.shift();
                  })
                );
          });
        }),
        n
      ;
      }
      const T = n => {
        return e => {
          return _()({}, n, e);
        };
      };
      const P = () => {
        let n, e, r, g, h, _, w, P, A, M, S, y, C, k, L, O;
        return o.useEffect(() => {
          const n = E(v.sY, v.wZ, v.vY).map(n => {
                    const e = m()(n, 3), r = e[0], t = e[1], o = e[2];
                    return {
                      responseEndToLCP: new v.jb(r.response.end, t.end),
                      responseEndToFCP: new v.jb(r.response.end, o.end),
                    };
                  }),
                e = E(
                  v.sY,
                  v.qH.map(T("fid")),
                  v.vY.map(T("fcp")),
                  v.wZ.map(T("lcp")),
                  n
                );
          v.cA.observe(n => {
            n ||
              e.observe(n => {
                const e = n.reduce((n, e) => {
                          return Object.assign(n, e);
                        }, {}),
                      r = Object.keys(e).reduce((n, r) => {
                        const t = e[r].duration;
                        return (n[r] = t % 1 == 0 ? t : Number(t.toFixed(1))), n;
                      }, {}),
                      t = document.children[0],
                      o = {
                        html: null == t ? void 0 : t.innerHTML.length,
                        redux: JSON.stringify(window.__PRELOADED_STATE__).length,
                        apollo: JSON.stringify(window.__APOLLO_STATE__).length,
                      };
                b.t.log("client hydrated", { perf: r, sizes: o });
              });
          }),
            v.Df.observe(n => {
              return b.t.log("client resource sizes", { resources: n });
            });
        }, []),
        (n = (0, i.v9)(n => {
          return n.tracing.tracer;
        })),
        (e = (0, i.v9)(n => {
          return n.tracing.originalSpan;
        })),
        (r = (0, s.cD)()),
        (g = r.loading),
        (h = r.isBot),
        (_ = (0, i.v9)(n => {
          return n.client.routingEntity;
        })),
        (w = (0, i.v9)(n => {
          return n.auroraPage.isAuroraPageEnabled;
        })),
        (P = (0, s.rZ)()),
        (A = P.loading),
        (M = P.viewerId),
        (S = (0, i.v9)(n => {
          return n.config.performanceTags;
        })),
        (y = (0, l.xg)()),
        (C = (0, l.f$)()),
        (k = (0, i.I0)()),
        (L = (0, c.dh)()),
        (O = (0, a.Av)()),
        o.useEffect(
          () => {
            let r;
            if (n && O && !g && !h && !A && M) {
              const o = L(window.location.pathname),
                    i =
                      null !== (r = null == o ? void 0 : o.route.metricName) &&
                      void 0 !== r
                        ? r
                        : "unidentified",
                    s = (0, d.j)(M),
                    a = (0, p.ic)(navigator.userAgent),
                    c = [];
              y
                ? c.push("edge_cache_enabled")
                : C && c.push("edge_cache_control");
              const l = c.join(","),
                    m = {
                      "user.logged_in": s,
                      "user.experiment": l,
                      "device.mobile_or_tablet": a,
                      "req.route_name": i,
                      "req.route": i,
                      "req.router": (null == _ ? void 0 : _.type) || u.Cr.DEFAULT,
                    };
              S.forEach(n => {
                return (m["req.".concat(n)] = 1);
              });
              const b = {
                        auroraPage: w,
                        loggedIn: s,
                        mobileOrTablet: a,
                        experiment: l,
                        route: i,
                      },
                    E = n => {
                      return Math.round(1e3 * n);
                    },
                    T = (e, r, t, o) => {
                      const i = t.start,
                            s = t.end,
                            a = n
                              .startSpan("timing.".concat(r), { childOf: e, tags: m })
                              .setBeginMicros(E(i))
                              .setEndMicros(E(s));
                      return null != o && o(a), a.finish(), a;
                    };
              v.sY.observe(r => {
                let o, i, s, a;
                O.reportRender(b, r);
                const u = n
                  .startSpan("timing.navigation", {
                    references: e ? [(0, t.followsFrom)(e)] : void 0,
                    tags: m,
                  })
                  .setBeginMicros(E(r.load.start))
                  .setEndMicros(E(r.load.end))
                  .log({
                    redirect_count:
                      null !==
                        (o =
                          null === (i = window) ||
                          void 0 === i ||
                          null === (s = i.performance) ||
                          void 0 === s ||
                          null === (a = s.navigation) ||
                          void 0 === a
                            ? void 0
                            : a.redirectCount) && void 0 !== o
                        ? o
                        : 0,
                  });
                T(u, "beforeDomainLookup", r.before_domain_lookup),
                  T(u, "domainLookup", r.domain_lookup),
                  T(u, "connect", r.connect),
                  T(u, "request", r.request),
                  T(u, "response", r.response),
                  T(u, "processing", r.processing);
                const c = r.overall_fcp, l = r.client, d = r.render;
                null != c && T(u, "firstContentfulPaint", c),
                  null != l &&
                    T(u, "client", l, n => {
                      null != d && T(n, "render", d);
                    }),
                  u.finish(),
                  k((0, f.YU)(u.generateTraceURL()));
              }),
                v.vY.observe(r => {
                  O.reportFirstContentfulPaint(b, r),
                    n
                      .startSpan("timing.firstContentfulPaint.v2", {
                        references: e ? [(0, t.followsFrom)(e)] : void 0,
                        tags: m,
                      })
                      .setBeginMicros(E(r.start))
                      .setEndMicros(E(r.end))
                      .finish();
                }),
                v.wZ.observe(r => {
                  O.reportLargestContentfulPaint(b, r),
                    n
                      .startSpan("timing.largestContentfulPaint", {
                        references: e ? [(0, t.followsFrom)(e)] : void 0,
                        tags: m,
                      })
                      .setBeginMicros(E(r.start))
                      .setEndMicros(E(r.end))
                      .finish();
                }),
                v.yI.observe(n => {
                  O.reportCumulativeLayoutShift(b, n);
                }),
                v.cA.observe(n => {
                  n && O.reportUnsupportedPerfObserver(b);
                }),
                v.qH.observe(r => {
                  O.reportInput(b, r),
                    n
                      .startSpan("timing.input.first.delay", {
                        references: e ? [(0, t.followsFrom)(e)] : void 0,
                        tags: m,
                      })
                      .setBeginMicros(E(r.start))
                      .setEndMicros(E(r.end))
                      .finish();
                });
            }
          },
          [n, A, M, g, h]
        ),
        null;
      };
    },
    72864: (n, e, r) => {
      "use strict";
      r.r(e), r.d(e, { init: () => i, extractSpan: () => s });
      const t = r(45573);
      const o = r(94725);

      var i = n => {
        const e = n.name,
              r = n.host,
              i = n.token,
              s = n.appVersion,
              a = new t.Tracer({
                component_name: e,
                xhr_instrumentation: !1,
                access_token: i,
                collector_host: r,
                default_span_tags: { "component.version": s },
              });
        return (0, o.initGlobalTracer)(a), a;
      };

      var s = (n, e) => {
        if (e) return n.extract(o.FORMAT_HTTP_HEADERS, e);
      };
    },
  },
]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/instrumentation.8ebc52ed.chunk.js.map
