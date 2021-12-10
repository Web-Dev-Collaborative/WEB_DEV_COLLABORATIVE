(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  {
    "+tR8": function (t, e, n) {
      "use strict";
      n.d(e, "a", () => {
        return s;
      });
      const r = n("q1tI"), o = n.n(r), i = n("pDQI"), a = o.a.createElement;
      function s(t) {
        return a(
          i.a,
          t,
          a("path", {
            d: "M3 6H5H21",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
          a("path", {
            d:
              "M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
          a("path", {
            d: "M10 11V17",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
          a("path", {
            d: "M14 11V17",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          })
        );
      }
    },
    "2URR": function (t, e, n) {
      "use strict";
      const r = n("hfKm"), o = n.n(r), i = n("2Eek"), a = n.n(i), s = n("XoMD"), u = n.n(s), c = n("Jo+v"), l = n.n(c), d = n("4mXO"), p = n.n(d), f = n("pLtp"), h = n.n(f), v = n("vYYK"), b = n("q1tI"), g = b.createElement;
      function m(t, e) {
        const n = h()(t);
        if (p.a) {
          let r = p()(t);
          e &&
            (r = r.filter(e => {
              return l()(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function E(t) {
        for (let e = 1; e < arguments.length; e++) {
          const n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? m(Object(n), !0).forEach(e => {
                Object(v.a)(t, e, n[e]);
              })
            : u.a
            ? a()(t, u()(n))
            : m(Object(n)).forEach(e => {
                o()(t, e, l()(n, e));
              });
        }
        return t;
      }
      const w = {
        progress: {
          base: {
            position: "absolute",
            left: "25%",
            right: "25%",
            top: "47%",
            height: "7px",
            backgroundColor: "transparent",
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "10px",
            borderColor: "#fff",
            transition: "opacity 0.5s",
            zIndex: 1,
          },
          progressFiller: {
            width: "100%",
            height: "5px",
            backgroundColor: "#fff",
          },
          progressFill: {
            animation: "x 3s ease 0s infinite",
            animationName: "loader-fill-animation",
          },
        },
      };
      e.a = t => {
        const e = t.loading, n = w.progress;
        return g(
          "div",
          { style: E({}, n.base, {}, e ? {} : { opacity: 0 }) },
          g("div", {
            style: E({}, n.progressFiller, {}, e ? n.progressFill : {}),
          })
        );
      };
    },
    "3TIX": function (t, e, n) {
      "use strict";
      n.d(e, "K", () => {
        return V;
      }),
        n.d(e, "I", () => {
          return Y;
        }),
        n.d(e, "R", () => {
          return B;
        }),
        n.d(e, "Q", () => {
          return $;
        }),
        n.d(e, "P", () => {
          return F;
        }),
        n.d(e, "L", () => {
          return q;
        }),
        n.d(e, "J", () => {
          return X;
        }),
        n.d(e, "M", () => {
          return U;
        }),
        n.d(e, "S", () => {
          return G;
        }),
        n.d(e, "U", () => {
          return K;
        }),
        n.d(e, "O", () => {
          return z;
        }),
        n.d(e, "T", () => {
          return H;
        }),
        n.d(e, "B", () => {
          return x;
        }),
        n.d(e, "N", () => {
          return Z;
        }),
        n.d(e, "o", () => {
          return i;
        }),
        n.d(e, "d", () => {
          return a;
        }),
        n.d(e, "l", () => {
          return s;
        }),
        n.d(e, "m", () => {
          return u;
        }),
        n.d(e, "z", () => {
          return p;
        }),
        n.d(e, "A", () => {
          return f;
        }),
        n.d(e, "C", () => {
          return h;
        }),
        n.d(e, "g", () => {
          return P;
        }),
        n.d(e, "b", () => {
          return c;
        }),
        n.d(e, "a", () => {
          return d;
        }),
        n.d(e, "k", () => {
          return b;
        }),
        n.d(e, "j", () => {
          return g;
        }),
        n.d(e, "D", () => {
          return m;
        }),
        n.d(e, "G", () => {
          return k;
        }),
        n.d(e, "H", () => {
          return y;
        }),
        n.d(e, "y", () => {
          return w;
        }),
        n.d(e, "c", () => {
          return O;
        }),
        n.d(e, "n", () => {
          return C;
        }),
        n.d(e, "f", () => {
          return j;
        }),
        n.d(e, "F", () => {
          return L;
        }),
        n.d(e, "r", () => {
          return S;
        }),
        n.d(e, "E", () => {
          return _;
        }),
        n.d(e, "x", () => {
          return I;
        }),
        n.d(e, "q", () => {
          return N;
        }),
        n.d(e, "i", () => {
          return T;
        }),
        n.d(e, "t", () => {
          return M;
        }),
        n.d(e, "p", () => {
          return o;
        }),
        n.d(e, "u", () => {
          return l;
        }),
        n.d(e, "h", () => {
          return D;
        }),
        n.d(e, "e", () => {
          return r;
        }),
        n.d(e, "w", () => {
          return A;
        }),
        n.d(e, "s", () => {
          return R;
        }),
        n.d(e, "v", () => {
          return W;
        });
      var r = "FLUSH_FILE_WRITES";
      var o = "OPEN_SIDEPANE_BY_TYPE";
      var i = "NEW_CONSOLE_MESSAGE";
      var a = "EVAL_CODE";
      var s = "LOADING_ENGINE_COMPLETE";
      var u = "LOADING_EXECUTION_ENGINE_STARTED";
      var c = "CONSOLE_INPUT";
      var l = "RESIZE_TERMINAL";
      var d = "CLEAR_CONSOLE";
      var p = "SET_EDITOR_SESSION";
      var f = "SET_SPLIT_POSITION";
      var h = "STOP_EVAL";
      const v = "LINT_CODE";
      var b = "LINT_STARTED";
      var g = "LINT_ENDED";
      var m = "UPDATE_LAYOUT";
      const E = "TRACK_WS_EVENT";
      var w = "SET_ACTIVE_LINE";
      var x = "SHOW_EXAMPLES";
      var k = "WORKSPACE_MOUNTED";
      var y = "WORKSPACE_WILL_UNMOUNT";
      var O = "ENGINE_FORMAT_FILE";
      var C = "MONACO_FORMAT_FILE";
      var j = "FORMAT_FILE";
      var L = "WEBVIEW_LOADED";
      var S = "REFRESH_WEBVIEW";
      var _ = "UPDATE_WORKSPACE_PREFERENCES";
      var I = "SEND_LSP_MESSAGE";
      var N = "RECEIVED_LSP_MESSAGE";
      var T = "LANGUAGE_SERVER_DIED";
      var M = "REGISTER_MONACO_EDITOR_HANDLE";
      var R = "REGISTER_ACE_EDITOR_HANDLE";
      var A = "SELECT_EDITOR_RANGE";
      var D = "INSTALL_PACKAGES";
      var P = "@@INIT";
      var W = "RUN_REPL";

      var V = function (t) {
        const e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
              n = arguments.length > 2 ? arguments[2] : void 0;
        return { data: t, type: e, kind: e, raw: !!n };
      };

      function F(t) {
        const e = t.wid, n = t.message, r = t.type, o = void 0 === r ? "" : r, a = t.raw;
        return { wid: e, type: i, message: V(n, o, !!a) };
      }
      function U(t) {
        const e = t.wid;
        return { type: W, wid: e };
      }
      function G(t) {
        const e = t.wid;
        return { type: h, wid: e };
      }
      function q(t) {
        const e = t.wid, n = t.code, r = t.clean;
        return { type: a, wid: e, code: n, clean: r };
      }
      function X(t) {
        const e = t.wid, n = t.input, r = t.kind;
        return { type: c, wid: e, input: n, kind: r || "output" };
      }
      function z(t) {
        const e = t.wid, n = t.filePath, r = t.code;
        return { type: v, wid: e, filePath: n, code: r };
      }
      function K(t) {
        const e = t.wid, n = t.path, r = t.to, o = t.property;
        return { type: m, wid: e, path: n, to: r, property: o };
      }
      function H(t) {
        const e = t.wid, n = t.eventKey, r = t.properties, o = t.trackOnce;
        return { type: E, wid: e, eventKey: n, properties: r, trackOnce: o };
      }
      function Y(t) {
        const e = t.wid, n = t.pud;
        return { type: d, wid: e, pud: n };
      }
      function B(t) {
        const e = t.wid, n = t.cols, r = t.rows, o = t.kind;
        return { type: l, wid: e, cols: n, rows: r, kind: o };
      }
      function $(t) {
        return {
          type: "OPEN_FILE",
          wid: t.wid,
          path: t.path,
          newTab: t.newTab,
        };
      }
      function J(t) {
        const e = t.wid, n = t.line;
        return { type: w, wid: e, line: n };
      }
      function Z(t) {
        const e = t.wid, n = t.line;
        return t => {
          t(J({ wid: e, line: n })),
            setTimeout(() => {
              t(J({ wid: e, line: null }));
            }, 2e3);
        };
      }
    },
    "5sjI": function (t, e, n) {
      "use strict";
      const r = n("q1tI"), o = n.n(r), i = n("2URR"), a = o.a.createElement;
      e.a = t => {
        const e = t.messages;
        return a(
          "div",
          {
            style: {
              height: "100%",
              position: "relative",
              fontSize: "14px",
              padding: "15px",
              boxSizing: "border-box",
            },
          },
          e.map((t, e) => {
            return a(
              "span",
              {
                key: e,
                style: {
                  whiteSpace: "pre-wrap",
                  fontSize: "14px",
                  lineHeight: "1em",
                  wordWrap: "break-word",
                  fontFamily: "monospace",
                  color: "error" === t.type ? "#f06" : "#fff",
                  position: "relative",
                  left: "error" === t.type ? "-8px" : "0px",
                },
              },
              t.data
            );
          }),
          a("div", {
            style: {
              marginLeft: "-8px",
              background:
                "url(/public/images/sprite.png) -13px -583px no-repeat",
              width: "24px",
              height: "16px",
            },
          }),
          a(i.a, { loading: !0 })
        );
      };
    },
    "8axe": function (t, e, n) {
      "use strict";
      n.r(e);
      const r = n("hfKm"),
            o = n.n(r),
            i = n("2Eek"),
            a = n.n(i),
            s = n("XoMD"),
            u = n.n(s),
            c = n("Jo+v"),
            l = n.n(c),
            d = n("4mXO"),
            p = n.n(d),
            f = n("pLtp"),
            h = n.n(f),
            v = n("vYYK"),
            b = n("dfwq"),
            g = n("doui"),
            m = n("q1tI"),
            E = n("/MKj"),
            w = n("3TIX"),
            x = n("0gYX"),
            k = n.n(x),
            y = t => {
              const e = t.split("\n");
              if (0 === e.length) return 0;
              let n;
              const r = e[e.length - 1].replace(/\s+$/, "");
              const o = r.match(/^\s*/);
              return (
                (n = o ? o[0] : ""),
                ":" === r[r.length - 1]
                  ? 1
                  : !(!n.length || 0 === r[r.length - 1].length) && 0
              );
            },
            O = t => {
              return !t.includes(":}") && !!t.includes(":{") && 0;
            },
            C = n("XXOK"),
            j = n.n(C),
            L = /"(?:[^"]|\\.)*"|'(?:[^']|\\.)*'|\/(?:[^/]|\\.)*\/|[{}()[\]]/gi,
            S = t => {
              const e = t.match(L) || [];
              let n = 0;
              let r = 0;
              let o = 0;
              let i = !0;
              let a = !1;
              let s = void 0;
              try {
                for (var u, c = j()(e); !(i = (u = c.next()).done); i = !0) {
                  switch (u.value) {
                    case "(":
                      r++;
                      break;
                    case ")":
                      r--;
                      break;
                    case "[":
                      o++;
                      break;
                    case "]":
                      o--;
                      break;
                    case "{":
                      n++;
                      break;
                    case "}":
                      n--;
                  }
                }
              } catch (l) {
                (a = !0), (s = l);
              } finally {
                try {
                  i || null == c.return || c.return();
                } finally {
                  if (a) throw s;
                }
              }
              return (r > 0 || n > 0 || o > 0) && 1;
            },
            _ = n("5sjI"),
            I = n("Qbrf"),
            N = n("OQjE"),
            T = n("h7rM"),
            M = n("7lhO"),
            R = n("tZOq");
      n.d(e, "checkLineEnd", () => {
        return W;
      }),
        n.d(e, "Component", () => {
          return V;
        }),
        n.d(e, "reducer", () => {
          return F;
        });
      const A = m.createElement;
      function D(t, e) {
        const n = h()(t);
        if (p.a) {
          let r = p()(t);
          e &&
            (r = r.filter(e => {
              return l()(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function P(t) {
        for (let e = 1; e < arguments.length; e++) {
          const n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? D(Object(n), !0).forEach(e => {
                Object(v.a)(t, e, n[e]);
              })
            : u.a
            ? a()(t, u()(n))
            : D(Object(n)).forEach(e => {
                o()(t, e, l()(n, e));
              });
        }
        return t;
      }
      function W(t, e, n) {
        if (/\n\s*$/.test(e)) n(!1);
        else
          switch (k.a.get(t).key.toLowerCase()) {
            case "html":
              n(S(e));
              break;
            case "haskell":
              n(O(e));
              break;
            case "python_turtle":
              n(y(e));
              break;
            default:
              n(!1);
          }
      }
      function V(t) {
        const e = t.wid,
              r = t.pud,
              o = t.style,
              i = Object(M.a)(),
              a = Object(E.e)(),
              s = m.useRef(null),
              u = (() => {
                const t = m.useState({}), e = Object(g.a)(t, 2)[1];
                return m.useCallback(() => {
                  e({});
                }, []);
              })();
        m.useEffect(() => {
          Promise.all([n.e(41), n.e(43)])
            .then(n.bind(null, "yR2o"))
            .then(t => {
              (s.current = t.default), u();
            });
        }, []);
        const c = Object(T.b)(e, r, "console"),
              l = Object(g.a)(c, 1)[0],
              d = l.loadingEngine,
              p = l.consoleMessages,
              f = l.runstate,
              h = l.promptValue,
              v = Object(R.Fb)({ variables: { replId: i } }).data,
              x =
                "Repl" === (null === v || void 0 === v ? void 0 : v.repl.__typename)
                  ? v.repl
                  : void 0,
              k = (null === x || void 0 === x ? void 0 : x.language) || "",
              y = null === x || void 0 === x ? void 0 : x.lang.header,
              O = m.useCallback(
                t => {
                  "stopping" !== f &&
                    a(
                      "running" !== f
                        ? Object(w.L)({ wid: e, clean: !1, code: t })
                        : Object(w.J)({ wid: e, input: t, kind: "console" })
                    );
                },
                [a, f, e]
              ),
              C = m.useCallback(
                () => {
                  a(Object(w.I)({ wid: e, pud: r }));
                },
                [a, e, r]
              ),
              j = m.useCallback(
                t => {
                  a({ type: "SET_PROMPT_VALUE", wid: e, pud: r, promptValue: t });
                },
                [a, e, r]
              ),
              L = m.useCallback(
                (t, e) => {
                  W(k, t, e);
                },
                [k]
              ),
              S = { data: "".concat(y, "\n"), type: "" },
              I = y ? [S].concat(Object(b.a)(p)) : p;
        if (!s.current) return A(_.a, { messages: I });
        const N = s.current;
        return A(
          "div",
          {
            style: P({}, o, {
              backgroundColor: "var(--color-brand-dark-blue)",
              borderRadius: "var(--border-radius-1)",
            }),
          },
          A(
            "div",
            { style: { height: "100%" } },
            A(N, {
              messages: I,
              showModal() {},
              clearConsole: C,
              setPromptValue: j,
              onEval: O,
              promptState: "idle" !== f ? "input" : "prompt",
              checkLineEnd: L,
              promptValue: h,
              loading: d,
            })
          )
        );
      }
      var F = Object(I.a)({
        primary() {
          const t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {
                          consoleMessages: [],
                          loadingEngine: !1,
                          runstate: "idle",
                          presetStdin: "",
                          promptValue: "",
                        },
                e = arguments.length > 1 ? arguments[1] : void 0;
          switch (e.type) {
            case w.g:
              return P({}, t, {}, e.initialState);
            case w.m:
              return P({}, t, { loadingEngine: !0 });
            case w.l:
              return P({}, t, { loadingEngine: !1 });
            case w.o:
              return "shell" === e.message.type
                ? t
                : P({}, t, {
                    consoleMessages: t.consoleMessages.concat(e.message),
                  });
            case w.C:
              const n = Object(w.K)(
                "\nRepl.it: Stopping... please wait\n",
                "error"
              );
              return P({}, t, { consoleMessages: t.consoleMessages.concat(n) });
            case "SET_PROMPT_VALUE":
              return P({}, t, { promptValue: e.promptValue });
            case w.a:
              return P({}, t, { consoleMessages: [] });
            default:
              return t;
          }
        },
        runstate: N.a,
      });
    },
    A3V5(t, e, n) {
      "use strict";
      const r = n("q1tI"), o = n("17x9"), i = Math.sqrt(2);
      function a(t) {
        const e = "top" === t.direction || "bottom" === t.direction,
              n = "left" === t.direction || "top" === t.direction,
              o = t.borderWidth * i,
              a = o / 2,
              s = 2 * t.size + 2 * o,
              u = t.size + o,
              c = n ? u : 0,
              l = n ? a : u - a,
              d = s / 2,
              p = s - a,
              f = e
                ? ["M", a, c, "L", d, l, "L", p, c]
                : ["M", c, a, "L", l, d, "L", c, p];
        return r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/svg/2000",
            width: e ? s : u,
            height: e ? u : s,
            style: t.style,
            className: t.className,
          },
          r.createElement("path", {
            d: f.join(" "),
            fill: t.color,
            stroke: t.borderColor,
            strokeWidth: t.borderWidth,
            strokeLinecap: "square",
          })
        );
      }
      (a.propTypes = {
        color: o.string.isRequired,
        size: o.number.isRequired,
        direction: o.oneOf(["top", "right", "bottom", "left"]).isRequired,
        borderWidth: o.number,
        borderColor: o.string,
        style: o.object,
        className: o.string,
      }),
        (a.defaultProps = { borderWidth: 0, borderColor: "transparent" }),
        (t.exports = a);
    },
    Hxkj(t, e, n) {
      "use strict";
      n.d(e, "a", () => {
        return i;
      });
      const r = n("0gYX"), o = n.n(r);
      function i(t, e) {
        const n = t.find(t => {
          return t.toLowerCase().includes("readme");
        });
        if (n) return n;
        const r = o.a.getMainFileName(e);
        if (o.a.usesInterpreter(e) && t.includes(r)) return r;
        if (t.includes("Makefile")) return "Makefile";
        if (t.includes(r)) return r;
        if (t.includes(".replit")) return ".replit";
        const i = t.find(t => {
          return t.endsWith(".md");
        });
        return i || t[0];
      }
    },
    PG9f(t, e, n) {
      "use strict";
      n.d(e, "a", () => {
        return i;
      });
      const r = n("XXOK"), o = n.n(r);
      function i(t) {
        const e = {};
        const n = t.split(/\n|\r|\r\n/);
        let r = !0;
        let i = !1;
        let s = void 0;
        try {
          for (var l, d = o()(n); !(r = (l = d.next()).done); r = !0) {
            let p = l.value;
            if (!a(p)) {
              const f = (p = u(p)).indexOf("="), h = p.indexOf(":");
              if (-1 !== h || -1 !== f) {
                let v = f;
                -1 !== h && (h < f || -1 === f) && (v = h);
                const b = p
                          .slice(0, v)
                          .replace(/^\s*(?:export\s+)?(.*?)\s*$/, "$1"),
                      g = c(p.slice(v + 1), e);
                e[b] = g;
              }
            }
          }
        } catch (m) {
          (i = !0), (s = m);
        } finally {
          try {
            r || null == d.return || d.return();
          } finally {
            if (i) throw s;
          }
        }
        return e;
      }
      function a(t) {
        const e = t.trim();
        return 0 === e.length || e.startsWith("#");
      }
      function s(t, e) {
        return t.split(e).length - 1;
      }
      function u(t) {
        if (!t.includes("#")) return t;
        const e = t.split("#");
        let n = !1;
        const r = [];
        let i = !0;
        let a = !1;
        let u = void 0;
        try {
          for (var c, l = o()(e); !(i = (c = l.next()).done); i = !0) {
            const d = c.value;
            (1 === s(d, '"') || s(d, "'")) &&
              (n ? ((n = !1), r.push(d)) : (n = !0)),
              (0 === r.length || n) && r.push(d);
          }
        } catch (p) {
          (a = !0), (u = p);
        } finally {
          try {
            i || null == l.return || l.return();
          } finally {
            if (a) throw u;
          }
        }
        return r.join("#");
      }
      function c(t, e) {
        let n = t.trim();
        if (0 === n.length) return n;
        const r = n.length - 1, o = '"' === n[0] && '"' === n[r], i = "'" === n[0] && "'" === n[r];
        return (i || o) && (n = n.slice(1, -1)),
        o &&
          (n = (n = n.replace(/\\./g, t => {
            return "\\n" === t ? "\n" : "\\r" === t ? "\r" : t;
          })).replace(/\\([^$])/g, "$1")),
        i ||
          (n = n.replace(/(\\)?(\$)(\()?\{?([A-Z0-9_]+)?\}?/g, t => {
            const n = t.match(/(\\)?(\$)(\()?\{?([A-Z0-9_]+)?\}?/);
            if (null === n) return t;
            if ("\\" === n[1] || "(" === n[2]) return n[0].slice(1);
            const r = n[4];
            return "" !== r ? e[r] || "" : t;
          })),
        n;
      }
    },
    Zma6(t, e, n) {
      "use strict";
      n.d(e, "a", () => {
        return g;
      });
      let r;
      const o = n("ln6h");
      const i = n.n(o);
      const a = n("doui");
      const s = n("MX0m");
      const u = n.n(s);
      const c = n("q1tI");
      const l = n("g7Gn");
      const d = n("XLFt");
      const p = n("koLh");
      const f = n("PG9f");
      const h = n("fA4Q");
      const v = c.createElement;
      !(t => {
        (t.Connecting = "Connecting"),
          (t.Connected = "Connected"),
          (t.Disconnected = "Disconnected");
      })(r || (r = {}));
      const b = "VNC_PASSWORD";
      function g(t) {
        const e = t.fs, o = t.container, s = c.useState(null), g = Object(a.a)(s, 2), m = g[0], E = g[1], w = c.useState(void 0), x = Object(a.a)(w, 2), k = x[0], y = x[1], O = c.useState(r.Connecting), C = Object(a.a)(O, 2), j = C[0], L = C[1], S = c.useState(null), _ = Object(a.a)(S, 2), I = _[0], N = _[1], T = c.useState(null), M = Object(a.a)(T, 2), R = M[0], A = M[1];
        c.useEffect(
          () => {
            if (o.getConnectionState() !== h.a.CONNECTED)
              return o.onConnectionStateChanged(t => {
                t === h.a.CONNECTED && A(o.getVncUrl());
              });
            A(o.getVncUrl());
          },
          [o]
        );
        const D = c.useState(null),
              P = Object(a.a)(D, 2),
              W = P[0],
              V = P[1],
              F = c.useRef(() => {
                return null;
              });
        c.useEffect(
          () => {
            F.current();
          },
          [W]
        );
        const U = Object(p.a)(
          t => {
            return V(
              t.width && t.height ? { width: t.width, height: t.height } : null
            );
          },
          { type: "throttle", wait: 100 }
        );
        return c.useEffect(
          () => {
            if (!m) {
              let t = !1;
              return n
                .e(145)
                .then(n.t.bind(null, "xWqp", 7))
                .then(e => {
                  t || E(e);
                }),
              () => {
                t = !0;
              }
            ;
            }
          },
          [m]
        ),
        c.useEffect(
          () => {
            if (R && I && m) {
              let t = !1;
              const n = m.default;
              const a = o.getConnectionMetadata();

              const s = {
                credentials: {
                  username: null === a || void 0 === a ? void 0 : a.token,
                  password: k || "",
                },
              };

              const u = new n(I, R, s);
              (u.scaleViewport = !0), (u.resizeSession = !0);
              const c = () => {
                        t || L(r.Connected);
                      },
                    d = () => {
                      t || L(r.Disconnected);
                    },
                    p = () => {
                      if (!t) {
                        const n = () => {
                          const t = window.prompt(
                            "The output is password protected, please input it:"
                          );
                          t && y(t);
                        };
                        (() => {
                          let r, o, a;
                          return i.a.async(s => {
                            for (;;)
                              switch ((s.prev = s.next)) {
                                case 0:
                                  return (
                                    (s.next = 2), i.a.awrap(e.readFile(".env"))
                                  );
                                case 2:
                                  if (((r = s.sent), !t)) {
                                    s.next = 5;
                                    break;
                                  }
                                  return s.abrupt("return");
                                case 5:
                                  if (!r.error) {
                                    s.next = 8;
                                    break;
                                  }
                                  return n(), s.abrupt("return");
                                case 8:
                                  if (
                                    ((o = r.content.toString("utf8")),
                                    (a = Object(f.a)(o)),
                                    b in a)
                                  ) {
                                    s.next = 13;
                                    break;
                                  }
                                  return n(), s.abrupt("return");
                                case 13:
                                  y(a[b]);
                                case 14:
                                case "end":
                                  return s.stop();
                              }
                          });
                        })().catch(t => {
                          return l.c(t);
                        });
                      }
                    };
              return u.addEventListener("connect", c),
              u.addEventListener("disconnect", d),
              u.addEventListener("securityfailure", p),
              (F.current = () => {
                return u._windowResize();
              }),
              () => {
                (t = !0),
                  (F.current = () => {
                    return null;
                  }),
                  u.disconnect(),
                  u.removeEventListener("securityfailure", p),
                  u.removeEventListener("connect", c),
                  u.removeEventListener("disconnect", d);
              }
            ;
            }
          },
          [m, I, o, R, e, k]
        ),
        v(
          "div",
          { className: "jsx-940907048 vnc" },
          v("div", {
            ref(t) {
              U(t), N(t);
            },
            className: "jsx-940907048 vnc-target",
          }),
          j !== r.Connected &&
            v(
              "div",
              { className: "jsx-940907048 vnc-overlay" },
              v(d.a, null)
            ),
          v(u.a, { id: "940907048" }, [
            ".vnc.jsx-940907048{position:relative;}",
            ".vnc.jsx-940907048,.vnc-target.jsx-940907048{height:100%;width:100%;}",
            ".vnc-overlay.jsx-940907048{top:0;position:absolute;height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:rgba(0,0,0,0.85);color:white;}",
          ])
        );
      }
    },
    imBe(t, e, n) {
      "use strict";
      n.d(e, "a", () => {
        return v;
      });
      const r = n("Acjn");
      const o = n("0iUn");
      const i = n("sLSF");
      const a = n("MI3g");
      const s = n("a7VT");
      const u = n("Tit0");
      const c = n("MX0m");
      const l = n.n(c);
      const d = n("q1tI");
      const p = n("A3V5");
      const f = n.n(p);
      const h = d.createElement;

      var v = (t => {
        class e {
          constructor() {
            let t, n;
            Object(o.a)(this, e);
            for (var r = arguments.length, i = new Array(r), u = 0; u < r; u++)
              i[u] = arguments[u];
            return ((n = Object(a.a)(
              this,
              (t = Object(s.a)(e)).call.apply(t, [this].concat(i))
            )).state = { hover: !1 }),
            (n.onMouseEnter = t => {
              n.props.onMouseEnter && n.props.onMouseEnter(t),
                n.setState({ hover: !0 });
            }),
            (n.onMouseLeave = t => {
              n.props.onMouseLeave && n.props.onMouseLeave(t),
                n.setState({ hover: !1 });
            }),
            (n.onClick = t => {
              n.props.onClick && n.props.onClick(t),
                n.props.hideOnClick && n.setState({ hover: !1 });
            }),
            n
          ;
          }

          static a(t) {
            const e = t.sentryEventId, n = t.user;
            t.devHide;
            return f(
              p.a,
              {
                width: "medium",
                isOpen: !0,
                preventClose: !0,
                onRequestClose() {},
              },
              f(
                "div",
                { className: "jsx-2822044346 modal-content" },
                f(
                  d.b,
                  { spacing: 2, align: "center" },
                  f(u.a, { level: 2 }, " The IDE is having a bit of trouble."),
                  f("div", { className: "jsx-2822044346 spacer" }),
                  f(
                    c.a,
                    { size: "large" },
                    "Parts of the IDE are not working correctly. Try reloading the page to get back to coding."
                  ),
                  f("div", { className: "jsx-2822044346 spacer" }),
                  f(
                    l.a,
                    {
                      onClick() {
                        return window.location.reload();
                      },
                      color: "primary",
                      filled: !0,
                      fullWidth: !0,
                    },
                    "reload"
                  ),
                  e &&
                    f(
                      l.a,
                      {
                        onClick() {
                          s.h({
                            eventId: e,
                            title: "We are deeply sorry about what happened!",
                            subtitle: "Help us figure out what went wrong",
                            subtitle2: "",
                            labelComments:
                              "What were you doing before you saw this crash?",
                            user: n,
                            labelName: "Username",
                          });
                        },
                      },
                      "\ud83d\udcdd report this error"
                    ),
                  !1
                ),
                f(o.a, { id: "2822044346" }, [
                  ".modal-content.jsx-2822044346{padding:var(--spacing-4);}",
                  ".sentry-error-embed-wrapper{z-index:300000 !important;}",
                ])
              )
            );
          }
        }

        return Object(u.a)(e, t),
        Object(i.a)(e, [
          {
            key: "render",
            value() {
              const t = this.props.position || "right",
                    e =
                      !this.props.hideTooltip &&
                      (this.props.showTooltip || this.state.hover),
                    n = d.Children.toArray(this.props.children),
                    o = Object(r.a)(n),
                    i = o[0],
                    a = o.slice(1),
                    s = d.cloneElement(i, {
                      key: "tooltip",
                      className: "tooltip-wrap-tooltip tooltip-wrap-".concat(t),
                      style: i.props.style,
                    });
              return h(
                "div",
                {
                  style: this.props.style,
                  onClick: this.onClick,
                  className: "jsx-4267586957 tooltip-base",
                },
                e && [
                  h(
                    "div",
                    {
                      key: "handle",
                      className:
                        "jsx-4267586957 " +
                        "tooltip-handle tooltip-handle-".concat(t),
                    },
                    h(f.a, {
                      size: 10,
                      direction: b[t],
                      borderWidth: this.props.arrowBorderWidth,
                      color: "var(--color-background-1)",
                      borderColor: "var(--color-foreground-3)",
                    })
                  ),
                  s,
                ],
                h(
                  "div",
                  {
                    style: this.props.wrapperStyle,
                    onMouseEnter: this.onMouseEnter,
                    onMouseLeave: this.onMouseLeave,
                    className: "jsx-4267586957",
                  },
                  a
                ),
                h(l.a, { id: "3051118086" }, [
                  ".tooltip-base.jsx-4267586957 .tooltip-wrap-tooltip{border:1px solid var(--color-foreground-3);background-color:var(--color-background-1);color:var(--color-foreground-1);}",
                ]),
                h(l.a, { id: "1093755106" }, [
                  ".tooltip-base.jsx-4267586957{position:relative;}",
                  ".tooltip-handle.jsx-4267586957{position:absolute;height:10px;width:16px;z-index:1011;}",
                  ".tooltip-base.jsx-4267586957 .tooltip-wrap-tooltip{padding:12px;border-radius:1px;box-sizing:border-box;position:absolute;z-index:1010;font-size:14px;line-height:18px;white-space:nowrap;}",
                  ".tooltip-base.jsx-4267586957 .tooltip-wrap-top{left:-100%;bottom:calc(100% + 23px);-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}",
                  ".tooltip-base.jsx-4267586957 .tooltip-wrap-right{top:50%;left:calc(100% + 14px);-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);}",
                  ".tooltip-base.jsx-4267586957 .tooltip-wrap-topRight{right:calc(20% - 4px);bottom:calc(100% + 23px);}",
                  ".tooltip-base.jsx-4267586957 .tooltip-wrap-bottom{left:calc(50% + 2px);top:calc(100% + 13px);-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);}",
                  ".tooltip-base.jsx-4267586957 .tooltip-wrap-left{top:50%;right:calc(100% + 14px);-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);}",
                  ".tooltip-handle-top.jsx-4267586957{bottom:100%;left:50%;-webkit-transform:translate(-50%,-19px);-ms-transform:translate(-50%,-19px);transform:translate(-50%,-19px);}",
                  ".tooltip-handle-right.jsx-4267586957{top:50%;left:100%;-webkit-transform:translate(4px,-108%);-ms-transform:translate(4px,-108%);transform:translate(4px,-108%);}",
                  ".tooltip-handle-topRight.jsx-4267586957{bottom:100%;left:50%;-webkit-transform:translate(calc(-50% - 4px),-17px);-ms-transform:translate(calc(-50% - 4px),-17px);transform:translate(calc(-50% - 4px),-17px);}",
                  ".tooltip-handle-bottom.jsx-4267586957{top:100%;left:50%;-webkit-transform:translate(-50%,-2px);-ms-transform:translate(-50%,-2px);transform:translate(-50%,-2px);}",
                  ".tooltip-handle-left.jsx-4267586957{top:50%;right:100%;-webkit-transform:translate(1px,-108%);-ms-transform:translate(1px,-108%);transform:translate(1px,-108%);}",
                ])
              );
            },
          },
        ]),
        e
      ;
      })(d.Component);

      v.defaultProps = {
        position: "right",
        onMouseEnter() {},
        onMouseLeave() {},
        arrowBorderColor: "#ecedec",
        arrowBorderWidth: 1,
      };
      var b = {
        top: "bottom",
        bottom: "top",
        right: "left",
        topRight: "bottom",
        left: "right",
      };
    },
    uMio(t, e, n) {
      "use strict";
      const r = n("MX0m"), o = n.n(r), i = n("q1tI"), a = n.n(i), s = n("3CEA"), u = n("V6K1"), c = n("IdsG"), l = n("up5I"), d = n("xom/"), p = n("8Vt8"), f = a.a.createElement;
    },
  },
]);
//# sourceMappingURL=e81abf92d26a6168873a945c4f5b72069d03a64e.ae7ac1c93bb405b0c82b.js.map
