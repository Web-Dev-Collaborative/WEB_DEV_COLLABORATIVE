(window.webpackJsonp = window.webpackJsonp || []).push([
  [27],
  {
    "/+LJ": function (e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return r;
      });
      var r = e => {
        const t = e.ace, n = e.path;
        if (n.endsWith(".php")) return { path: "ace/mode/php", inline: !0 };
        const r = (e => {
          return e.endsWith(".litcoffee")
            ? "coffee"
            : /\.(ml|mli)/.test(e)
            ? "ocaml"
            : /\.(pod6|raku|rakumod|rakutest)/.test(e)
            ? "perl6"
            : /\.(psm1|psc1|psd1)/.test(e)
            ? "powershell"
            : e.endsWith(".cr")
            ? "crystal"
            : /\.(t|pod)/.test(e)
            ? "perl"
            : e.endsWith(".bas")
            ? "basic"
            : null;
        })(n);
        return r
          ? "ace/mode/".concat(r)
          : t.require("ace/ext/modelist").getModeForPath(n).mode;
      };
    },
    "0HhJ": function (e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return c;
      });
      const r = n("q1tI"), a = n.n(r), o = n("pDQI"), i = a.a.createElement;
      function c(e) {
        return i(
          o.a,
          e,
          i("path", {
            d:
              "M21 15.9999V7.9999C20.9996 7.64918 20.9071 7.30471 20.7315 7.00106C20.556 6.69742 20.3037 6.44526 20 6.2699L16.5 4.2699L13 2.2699C12.696 2.09437 12.3511 2.00195 12 2.00195C11.6489 2.00195 11.304 2.09437 11 2.2699L4 6.2699C3.69626 6.44526 3.44398 6.69742 3.26846 7.00106C3.09294 7.30471 3.00036 7.64918 3 7.9999V15.9999C3.00036 16.3506 3.09294 16.6951 3.26846 16.9987C3.44398 17.3024 3.69626 17.5545 4 17.7299L11 21.7299C11.304 21.9054 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9054 13 21.7299L20 17.7299C20.3037 17.5545 20.556 17.3024 20.7315 16.9987C20.9071 16.6951 20.9996 16.3506 21 15.9999Z",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
          i("path", {
            d: "M3.27002 6.95996L7.63502 9.48496L12 12.01L20.73 6.95996",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
          i("path", {
            d: "M12 22.08V12",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          })
        );
      }
    },
    "2mtm": function (e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return a;
      });
      const r = n("q1tI");
      var a = "undefined" !== typeof window ? r.useLayoutEffect : r.useEffect;
    },
    "7EIp": function (e, t, n) {
      "use strict";
      const r = n("kOwS"), a = n("eVuF"), o = n.n(a), i = n("doui"), c = n("qNsG"), u = n("MX0m"), l = n.n(u), s = n("q1tI"), d = n("TSYQ"), f = n.n(d), p = n("qJlv"), b = n("b0NY"), v = n("hfKm"), g = n.n(v), h = n("2Eek"), m = n.n(h), y = n("XoMD"), x = n.n(y), w = n("Jo+v"), k = n.n(w), j = n("4mXO"), O = n.n(j), E = n("pLtp"), C = n.n(E), S = n("ln6h"), T = n.n(S), D = n("dfwq"), A = n("vYYK"), I = n("zgDP"), N = n("JOwT"), R = n("8v8i"), L = n("up5I"), F = n("YuJD"), _ = n("kDUs"), U = n("8PE+"), P = n("kx/0"), M = n("nXXz"), H = n("VwSA"), q = n("UWUU"), V = n("0HhJ"), z = s.createElement;
      function G(e) {
        const t = e.depth, n = e.active, r = e.children, a = e.onClick, o = e.interactive, c = void 0 === o || o, u = e.className, d = e.actions, p = e.onAction, b = s.useRef(null), v = s.useState(!1), g = Object(i.a)(v, 2), h = g[0], m = g[1], y = s.useRef(null);
        return z(
          "div",
          {
            ref: b,
            onClick: a
              ? e => {
                  return a({ newTab: Object(F.b)(e) });
                }
              : void 0,
            onContextMenu(e) {
              y.current && (e.preventDefault(), y.current.open());
            },
            className:
              "jsx-2503987086 " +
              l.a.dynamic([["217255527", [t, n || h ? 1 : 0]]]) +
              " " +
              (f()(u, "node", { active: n, interactive: c }) || ""),
          },
          r,
          d && d.length && p
            ? z(
                "div",
                {
                  className:
                    "jsx-2503987086 " +
                    l.a.dynamic([["217255527", [t, n || h ? 1 : 0]]]) +
                    " actions",
                },
                z(_.b, {
                  ref: y,
                  onOpenChange: m,
                  actions: d,
                  onAction: p,
                  isActive: n,
                })
              )
            : null,
          z(l.a, { id: "217255527", dynamic: [t, n || h ? 1 : 0] }, [
            ".node.__jsx-style-dynamic-selector{padding-left:calc(".concat(
              t,
              " * var(--spacing-2));}"
            ),
            ".actions.__jsx-style-dynamic-selector{opacity:".concat(
              n || h ? 1 : 0,
              ";}"
            ),
          ]),
          z(l.a, { id: "2503987086" }, [
            ".node.jsx-2503987086{height:var(--spacing-4);cursor:pointer;color:var(--color-foreground-2);border-radius:var(--border-radius-1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:var(--font-size-desktop-text-small);}",
            ".node.interactive.jsx-2503987086:hover{background-color:var(--color-control-3);color:var(--color-foreground-1);}",
            ".node.interactive.jsx-2503987086:active{background-color:var(--color-control-2);}",
            ".node.interactive.active.jsx-2503987086{background-color:var(--color-primary-1);color:var(--color-white);}",
            ".node.interactive.active.jsx-2503987086 .content.jsx-2503987086{background-color:var(--color-primary-1);color:var(--color-white);font-weight:var(--font-weight-medium);}",
            ".node.jsx-2503987086:hover .actions.jsx-2503987086{opacity:1;}",
            ".actions.jsx-2503987086{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:auto;-webkit-transition:opacity;transition:opacity;height:100%;}",
          ])
        );
      }
      function X(e) {
        const t = e.expanded;
        const n = e.active;
        const r = e.type;
        const a = e.path;
        let o = null;
        if (r === R.d.Directory) o = z(U.a, { filled: n });
        else if (N.a.includes(a)) o = z(V.a, { filled: n });
        else {
          const i = a.split(".").pop();
          if (i && i in H.a) {
            const c = n ? "var(--color-white)" : H.a[i];
            o = z(q.LanguageIcon, { language: i, fill: c });
          } else o = z(P.a, { filled: n });
        }
        return z(
          "div",
          {
            className:
              "jsx-702476865 " +
              l.a.dynamic([["2323416086", [t ? 0 : -90]]]) +
              " node-icon",
          },
          z(
            "div",
            {
              className:
                "jsx-702476865 " +
                l.a.dynamic([["2323416086", [t ? 0 : -90]]]) +
                " gutter",
            },
            r === R.d.Directory
              ? z(
                  "div",
                  {
                    className:
                      "jsx-702476865 " +
                      l.a.dynamic([["2323416086", [t ? 0 : -90]]]) +
                      " chevron",
                  },
                  z(M.a, null)
                )
              : null
          ),
          z(
            "div",
            {
              className:
                "jsx-702476865 " +
                l.a.dynamic([["2323416086", [t ? 0 : -90]]]) +
                " icon",
            },
            o
          ),
          z(l.a, { id: "2323416086", dynamic: [t ? 0 : -90] }, [
            ".chevron.__jsx-style-dynamic-selector{-webkit-transform:rotate("
              .concat(t ? 0 : -90, "deg);-ms-transform:rotate(")
              .concat(t ? 0 : -90, "deg);transform:rotate(")
              .concat(t ? 0 : -90, "deg);}"),
          ]),
          z(l.a, { id: "702476865" }, [
            ".node-icon.jsx-702476865{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",
            ".icon.jsx-702476865{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:24px;height:24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",
            ".gutter.jsx-702476865{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:var(--spacing-2);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}",
            ".chevron.jsx-702476865{-webkit-transition:0.1s -webkit-transform;-webkit-transition:0.1s transform;transition:0.1s transform;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}",
          ])
        );
      }
      function B(e) {
        const t = e.children;
        return z(
          "div",
          { title: t, className: "jsx-2487264214" },
          z("span", { className: "jsx-2487264214" }, t),
          z(l.a, { id: "2487264214" }, [
            "div.jsx-2487264214{font-size:var(--font-size-desktop-text-small);-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding-left:var(--spacing-1);padding-right:var(--spacing-half);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}",
          ])
        );
      }
      const W = s.createElement;
      function K(e) {
        const t = e.onCreateClick, n = e.depth;
        return W(
          G,
          { interactive: !1, depth: n },
          W(
            "div",
            { className: "jsx-3022828519" },
            "Add a ",
            W(
              L.a,
              {
                size: "small",
                border: !1,
                onClick() {
                  return t(R.d.File);
                },
              },
              "file"
            ),
            "  or ",
            W(
              L.a,
              {
                size: "small",
                border: !1,
                onClick() {
                  return t(R.d.Directory);
                },
              },
              "folder"
            )
          ),
          W(l.a, { id: "3022828519" }, [
            "div.jsx-3022828519{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;overflow:hidden;white-space:nowrap;}",
          ])
        );
      }
      const Y = n("CLjb"), J = n("IjuC"), Q = n("8Vt8"), Z = n("QdtJ"), $ = n("VoYB"), ee = s.createElement;
      function te(e) {
        const t = e.path,
              n = e.readOnly,
              a = e.onRename,
              o = e.onDelete,
              u = e.overwriteNode,
              d = e.getNodeType,
              p = Object(c.a)(e, [
                "path",
                "readOnly",
                "onRename",
                "onDelete",
                "overwriteNode",
                "getNodeType",
              ]),
              b = t.split("/"),
              v = b[b.length - 1],
              g = b.length - 1,
              h = s.useState(null),
              m = Object(i.a)(h, 2),
              y = m[0],
              x = m[1],
              w = Object($.a)().showError,
              k = s.useState(null),
              j = Object(i.a)(k, 2),
              O = j[0],
              E = j[1];
        s.useEffect(
          () => {
            if (y) {
              let e = !1;
              return y.file.then(n => {
                if (!e) {
                  if (n.error) {
                    if (n.error === R.e.AlreadyExists) {
                      const r =
                        "." === y.path ? v : "".concat(y.path, "/").concat(v);
                      return d(r).then(e => {
                        r !== t && E({ path: r, type: e });
                      }),
                      void x(null)
                    ;
                    }
                    w("Something went wrong trying to remove ".concat(v));
                  }
                  x(null);
                }
              }),
              () => {
                e = !0;
              };
            }
          },
          [y, v, t, d, w]
        );
        const C = Object(Y.a)({
                  item: { type: R.d.File, path: t },
                  canDrag() {
                    return !n;
                  },
                  collect(e) {
                    return { isDragging: e.isDragging() };
                  },
                  end(e, t) {
                    if (t.didDrop()) {
                      const n = t.getDropResult();
                      n.file && x(n);
                    }
                  },
                }),
              S = Object(i.a)(C, 2),
              T = S[0].isDragging,
              D = S[1];
        return ee(
          "div",
          {
            ref: D,
            className:
              "jsx-1562813330 " +
              (f()({ "is-dragging": T, "is-removing": y }) || ""),
          },
          ee(
            G,
            Object(r.a)({ depth: g }, p, {
              actions: n
                ? void 0
                : [_.a.Rename, _.a.OpenTab, _.a.CopyLink, _.a.Delete],
              onAction(e) {
                switch (e) {
                  case _.a.Rename:
                    return void a();
                  case _.a.OpenTab:
                    return void p.onClick({ newTab: !0 });
                  case _.a.CopyLink:
                    const n = window.location.href, r = n.includes("#") ? n.indexOf("#") : n.length, i = "".concat(n.slice(0, r), "#").concat(t);
                    return void Object(J.a)(i);
                  case _.a.Delete:
                    o();
                }
              },
            }),
            ee(
              "div",
              { className: "jsx-1562813330 node-info" },
              ee(X, { type: R.d.File, path: t, active: p.active }),
              ee(B, null, v)
            )
          ),
          ee(
            Q.a,
            {
              isOpen: Boolean(O),
              onRequestClose() {
                return E(null);
              },
            },
            O
              ? ee(Z.a, {
                  paths: [O.path],
                  onCancel() {
                    return E(null);
                  },
                  onConfirm() {
                    u(O), E(null);
                  },
                })
              : null
          ),
          ee(l.a, { id: "1562813330" }, [
            "div.jsx-1562813330{max-width:100%;width:100%;}",
            ".node-info.jsx-1562813330{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;}",
            ".is-removing.jsx-1562813330{opacity:0.5;pointer-events:none;}",
            ".is-dragging.jsx-1562813330{opacity:0.7;}",
          ])
        );
      }
      const ne = n("yzOi"), re = n("dI/k"), ae = n("KRxe"), oe = n("5QjX"), ie = s.createElement;
      function ce(e) {
        const t = e.type,
              n = e.initialValue,
              r = e.onSubmit,
              a = e.onCancel,
              o = e.siblings,
              i = e.depth,
              c = s.useRef(null),
              u = Object(oe.a)("flag-repl-secrets"),
              d = Object(ne.a)(n || "", e => {
                const t = Object(re.h)({
                  files: o.map(e => {
                    return e.filename;
                  }),
                  fileName: e,
                  initialValue: n,
                  disallowDotEnv: u,
                });
                return t ? { message: t } : null;
              });
        return s.useEffect(
          () => {
            if (n) {
              let e = n.lastIndexOf(".");
              -1 === e && (e = n.length),
                c.current && c.current.setSelectionRange(0, e);
            }
          },
          [n]
        ),
        ie(
          "div",
          {
            className:
              "jsx-125275207 " +
              l.a.dynamic([["2358739874", [i, i]]]) +
              " input-wrap",
          },
          ie(ae.b, {
            ref: c,
            validationResults: d.error
              ? [{ state: "error", message: d.error.message }]
              : void 0,
            autoFocus: !0,
            value: d.value,
            onBlur() {
              d.value && d.value !== n ? (d.error ? a() : r(d.value)) : a();
            },
            onKeyUp: d.validate,
            onKeyDown(e) {
              if ("Enter" === e.key) {
                if (d.error) return;
                return d.value !== n && d.value ? void r(d.value) : void a();
              }
              "Escape" === e.key && a();
            },
            onChange(e) {
              d.setValue(e.target.value);
            },
          }),
          ie(
            "div",
            {
              className:
                "jsx-125275207 " +
                l.a.dynamic([["2358739874", [i, i]]]) +
                " icon",
            },
            ie(X, { type: t, path: d.value })
          ),
          ie(l.a, { id: "2358739874", dynamic: [i, i] }, [
            ".input-wrap.__jsx-style-dynamic-selector input{padding-left:calc(".concat(
              i,
              " * var(--spacing-2) + var(--spacing-6));}"
            ),
            ".icon.__jsx-style-dynamic-selector{padding-left:calc(".concat(
              i,
              " * var(--spacing-2));}"
            ),
          ]),
          ie(l.a, { id: "125275207" }, [
            ".input-wrap.jsx-125275207{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;font-size:var(--font-size-desktop-text-small);position:relative;}",
            ".input-wrap.jsx-125275207 input{font-size:inherit;padding-top:var(--spacing-half);padding-bottom:var(--spacing-half);}",
            ".icon.jsx-125275207{color:var(--color-foreground-2);pointer-events:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;top:0;left:0;height:100%;}",
          ])
        );
      }
      const ue = n("7njZ"), le = s.createElement;
      function se(e) {
        const t = e.type, n = e.create, r = e.onCreate, a = e.onError, o = e.onCancel, c = e.parentPath, u = e.depth, d = void 0 === u ? 0 : u, f = e.siblings, p = Object(ue.a)(), b = s.useState(null), v = Object(i.a)(b, 2), g = v[0], h = v[1];
        return g
          ? le(
              "div",
              { className: "jsx-4270797373 pending-node" },
              le(
                G,
                {
                  depth: d,
                  onClick() {
                    return null;
                  },
                },
                le(X, { path: g.filename, type: g.type }),
                le(B, null, g.filename)
              ),
              le(l.a, { id: "4270797373" }, [
                ".pending-node.jsx-4270797373{pointer-events:none;opacity:0.5;}",
              ])
            )
          : le(ce, {
              depth: d,
              siblings: f,
              type: t,
              onCancel: o,
              onSubmit(e) {
                if (!g) {
                  const o = { path: c ? c + "/" + e : e, type: t };
                  h({ filename: e, type: t }),
                    n(o)
                      .then(() => {
                        p.current && (h(null), r(o));
                      })
                      .catch(e => {
                        p.current && a(e);
                      });
                }
              },
            });
      }
      const de = n("gfZM"), fe = n("V6K1"), pe = n("xom/"), be = n("IdsG"), ve = s.createElement;
      function ge(e) {
        const t = e.filename, n = e.onCancel, r = e.onConfirm;
        return ve(
          "div",
          { className: "jsx-4280829187 content" },
          ve(
            pe.b,
            { spacing: 4 },
            ve(
              pe.b,
              { spacing: 1 },
              ve(fe.a, { level: 3 }, "Delete ", t, "?"),
              ve(
                be.a,
                { foreground: 2 },
                "Are you sure you want delete this file? This cannot be undone."
              )
            ),
            ve(
              pe.a,
              { spacing: 1 },
              ve(L.a, { autoFocus: !0, onClick: n }, "Cancel"),
              ve(
                L.a,
                { color: "negative", filled: !0, onClick: r },
                "Yes, delete this file"
              )
            )
          ),
          ve(l.a, { id: "4280829187" }, [
            ".content.jsx-4280829187{padding:var(--spacing-4);}",
          ])
        );
      }
      const he = n("GRpk"),
            me = s.createElement,
            ye = e => {
              return e % 2 !== 0 ? -10 * e : 10 * e;
            };
      function xe(e) {
        const t = e.rows, n = void 0 === t ? 3 : t, r = e.depth, a = void 0 === r ? 0 : r, o = "fileTreeLoader2-" + Math.random().toString();
        return me(
          "div",
          { className: l.a.dynamic([["772706436", [a]]]) + " loader" },
          me(
            he.a,
            {
              primaryColor: "var(--color-control-1)",
              secondaryColor: "var(--color-control-3)",
              height: 32 * n,
              width: 250,
              className: "content-loader",
              uniquekey: o,
            },
            Array(n)
              .fill(null)
              .map((e, t) => {
                return me(
                  s.Fragment,
                  { key: t },
                  me("circle", {
                    cx: "28",
                    cy: "".concat(16 + 32 * t),
                    r: "8",
                    className: l.a.dynamic([["772706436", [a]]]),
                  }),
                  me("rect", {
                    x: 48,
                    y: "".concat(7 + 32 * t),
                    rx: "3",
                    ry: "3",
                    width: "".concat(100 + ye(t)),
                    height: "16",
                    className: l.a.dynamic([["772706436", [a]]]),
                  })
                );
              })
          ),
          me(l.a, { id: "772706436", dynamic: [a] }, [
            ".loader.__jsx-style-dynamic-selector{width:100%;height:100%;overflow:hidden;padding-left:calc(".concat(
              a,
              " * var(--spacing-2));}"
            ),
            ".loader.__jsx-style-dynamic-selector>svg{width:250px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",
          ])
        );
      }
      const we = s.createElement;
      function ke(e, t) {
        const n = C()(e);
        if (O.a) {
          let r = O()(e);
          t &&
            (r = r.filter(t => {
              return k()(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function je(e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ke(Object(n), !0).forEach(t => {
                Object(A.a)(e, t, n[t]);
              })
            : x.a
            ? m()(e, x()(n))
            : ke(Object(n)).forEach(t => {
                g()(e, t, k()(n, t));
              });
        }
        return e;
      }
      function Oe(e) {
        const t = e.parentPath,
              n = e.nodes,
              a = e.loading,
              o = e.error,
              u = e.readOnly,
              l = Object(c.a)(e, [
                "parentPath",
                "nodes",
                "loading",
                "error",
                "readOnly",
              ]),
              d = Object($.a)().showError,
              f = t ? t.split("/") : [],
              p = l.fs,
              b = l.pendingFileType,
              v = l.setPendingFileType,
              g = l.onNodeClick,
              h = l.activePath,
              m = (e => {
                const t = s.useState(null), n = Object(i.a)(t, 2), r = n[0], a = n[1], o = s.useState(null), c = Object(i.a)(o, 2), u = c[0], l = c[1];
                return s.useEffect(
                  () => {
                    if (u) {
                      let t = !1;
                      if ("rename" === u.type)
                        (u.fileType === R.d.File
                          ? e.moveFile(u.path, u.to)
                          : e.moveDir(u.path, u.to)
                        ).then(e => {
                          t || (l(null), e.error && a(e.error));
                        });
                      else
                        (u.fileType === R.d.File
                          ? e.deleteFile(u.path)
                          : e.deleteDir(u.path)
                        ).then(e => {
                          t || (l(null), e.error && a(e.error));
                        });
                      return () => {
                        t = !0;
                      };
                    }
                    a(null);
                  },
                  [u, e]
                ),
                {
                  renameNode(e) {
                    return l(je({}, e, { type: "rename" }));
                  },
                  deleteNode(e) {
                    return l(je({}, e, { type: "delete" }));
                  },
                  currentOp: u,
                  error: r,
                };
              })(p),
              y = m.renameNode,
              x = m.deleteNode,
              w = m.currentOp,
              k = m.error,
              j = s.useState(null),
              O = Object(i.a)(j, 2),
              E = O[0],
              C = O[1],
              S = s.useState(null),
              A = Object(i.a)(S, 2),
              L = A[0],
              F = A[1];
        if (
          (s.useEffect(
            () => {
              k && d("Something went wrong trying to more or remove a file.");
            },
            [k, d]
          ),
          a)
        )
          return we(xe, { rows: t ? 1 : 5, depth: f.length });
        if (o) return we(G, { depth: f.length, interactive: !1 }, o);
        if (!n) return null;
        const _ = n.some(e => {
                  if (h)
                    return (
                      e.type === R.d.File &&
                      (t ? h.endsWith("/" + e.filename) : h === e.filename)
                    );
                }),
              U =
                !u &&
                b &&
                ((!t && !h) || h === t || _ || (!t && h && N.a.includes(h)));
        return we(
          s.Fragment,
          null,
          we(
            "div",
            { style: { position: "relative" } },
            we(
              "div",
              {
                style: {
                  position: "absolute",
                  top: 0,
                  display: "none",
                  left: 0,
                },
              },
              we(xe, { rows: f.length ? 3 : 6, depth: f.length })
            )
          ),
          n.map(e => {
            const t = e.filename,
                  a = e.type,
                  o = [].concat(Object(D.a)(f), [t]).join("/"),
                  i = n.filter(e => {
                    return e.filename !== t;
                  });
            if ((null === w || void 0 === w ? void 0 : w.path) === o)
              return "rename" === w.type
                ? we(
                    G,
                    {
                      key: t,
                      depth: f.length,
                      onClick() {
                        return null;
                      },
                    },
                    we(X, { type: R.d.File, path: o }),
                    we(B, null, w.path.split("/").pop() || "")
                  )
                : null;
            if ((null === E || void 0 === E ? void 0 : E.filename) === t)
              return we(
                G,
                {
                  key: t,
                  depth: 0,
                  onClick() {
                    return null;
                  },
                },
                we(ce, {
                  type: a,
                  depth: f.length,
                  siblings: i,
                  initialValue: t,
                  onSubmit(e) {
                    const t = [].concat(Object(D.a)(f), [e]).join("/");
                    y({ fileType: a, path: o, to: t });
                  },
                  onCancel() {
                    return C(null);
                  },
                })
              );
            const c = {
              siblings: i,
              readOnly: u,
              active: h === o,
              path: o,
              key: t,
              getNodeType(e) {
                let t;
                return T.a.async(n => {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), T.a.awrap(p.readFile(e));
                      case 2:
                        return (
                          (t = n.sent),
                          n.abrupt(
                            "return",
                            t.error === R.e.IsDirectory
                              ? R.d.Directory
                              : R.d.File
                          )
                        );
                      case 4:
                      case "end":
                        return n.stop();
                    }
                });
              },
              overwriteNode(e) {
                let t, n, r;
                return T.a.async(i => {
                  for (;;)
                    switch ((i.prev = i.next)) {
                      case 0:
                        return (
                          (t = e.path),
                          (n = e.type),
                          (r =
                            n === R.d.Directory ? p.deleteDir : p.deleteFile),
                          (i.next = 4),
                          T.a.awrap(r(t))
                        );
                      case 4:
                        if (!i.sent.error) {
                          i.next = 8;
                          break;
                        }
                        return (
                          d("Something went wrong trying to move: ".concat(o)),
                          i.abrupt("return")
                        );
                      case 8:
                        y({ path: o, fileType: a, to: t });
                      case 9:
                      case "end":
                        return i.stop();
                    }
                });
              },
              onClick() {
                const e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : { newTab: !1 },
                      t = e.newTab;
                return g({ path: o, type: a, newTab: t });
              },
              onRename() {
                return C({ filename: t, type: a });
              },
              onDelete() {
                return F({ filename: t, type: a });
              },
            };
            return a === R.d.File ? we(te, c) : we(Ae, Object(r.a)({}, c, l));
          }),
          l.pendingUploads
            ? l.pendingUploads.map(e => {
                const r = e.lastIndexOf("/");
                return (-1 !== r ? e.slice(0, r) : void 0) !== t
                  ? null
                  : we(te, {
                      onRename() {
                        return null;
                      },
                      onDelete() {
                        return null;
                      },
                      overwriteNode() {
                        return null;
                      },
                      getNodeType() {
                        return T.a.async(e => {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt("return", R.d.File);
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        });
                      },
                      siblings: n.filter(t => {
                        return t.filename !== e;
                      }),
                      key: e,
                      path: e,
                      readOnly: !0,
                      onClick() {
                        return null;
                      },
                    });
              })
            : null,
          u || n.length || U
            ? null
            : we(K, { depth: f.length, onCreateClick: v }),
          U && b
            ? we(se, {
                siblings: n || [],
                depth: f.length,
                parentPath: t,
                create(e) {
                  const t = e.path, n = e.type;
                  return (
                    n === R.d.File &&
                      "readme.md" === t.toLowerCase() &&
                      Object(I.track)(I.events.README_CREATED),
                    n === R.d.File
                      ? p.writeFile(t, de.a.from(""))
                      : p.createDir(t)
                  );
                },
                type: b,
                onError(e) {
                  return d("Something went wrong: ".concat(e));
                },
                onCancel() {
                  return v(null);
                },
                onCreate(e) {
                  v(null), g(e);
                },
              })
            : null,
          we(
            Q.a,
            {
              isOpen: Boolean(L),
              onRequestClose() {
                return F(null);
              },
            },
            L
              ? we(ge, {
                  filename: L.filename,
                  onCancel() {
                    return F(null);
                  },
                  onConfirm() {
                    F(null),
                      x({
                        fileType: L.type,
                        path: [].concat(Object(D.a)(f), [L.filename]).join("/"),
                      });
                  },
                })
              : null
          )
        );
      }
      const Ee = n("aMZS"), Ce = n("8/ze"), Se = n("NuhN"), Te = n("v0rv");
      n.d(t, "a", () => {
        return Ae;
      });
      const De = s.createElement;
      function Ae(e) {
        const t = e.path,
              n = e.active,
              a = e.onClick,
              u = e.onRename,
              d = e.onDelete,
              v = e.overwriteNode,
              g = Object(c.a)(e, [
                "path",
                "active",
                "onClick",
                "onRename",
                "onDelete",
                "overwriteNode",
              ]),
              h = g.fs,
              m = g.transformChildren,
              y = g.uploadFiles,
              x = g.readOnly,
              w = g.getNodeType,
              k = g.setPendingFileType,
              j = g.activePath ? g.activePath.split("/") : [],
              O = t.split("/"),
              E = O.length - 1,
              C = O[E],
              S = !n && j[E] === C,
              T = t === Ce.a,
              D = Object($.a)().showError,
              A = s.useState(null),
              I = Object(i.a)(A, 2),
              L = I[0],
              F = I[1],
              U = s.useState(null),
              P = Object(i.a)(U, 2),
              M = P[0],
              H = P[1],
              q = s.useState([]),
              V = Object(i.a)(q, 2),
              z = V[0],
              W = V[1];
        s.useEffect(
          () => {
            if (L) {
              let e = !1;
              return L.dir.then(t => {
                if (!e) {
                  if (t.error) {
                    if (t.error === R.e.AlreadyExists) {
                      const n =
                        "." === L.path ? C : "".concat(L.path, "/").concat(C);
                      return void w(n).then(e => {
                        H({ path: n, type: e }), F(null);
                      });
                    }
                    D("Something went wrong trying to remove ".concat(C));
                  }
                  F(null);
                }
              }),
              () => {
                e = !0;
              };
            }
          },
          [L, C, w, D]
        );
        const K = s.useState(null), J = Object(i.a)(K, 2), ee = J[0], te = J[1];
        s.useEffect(
          () => {
            if (ee) {
              let e = !1;
              return ("dir" in ee ? ee.dir : ee.file).then(() => {
                e || te(null);
              }),
              () => {
                e = !0;
              }
            ;
            }
          },
          [ee]
        );
        const ne = Object(b.a)({
                  path: t,
                  initialExpanded: T || S || n,
                  fs: g.fs,
                }),
              re = ne.collapse,
              ae = ne.expand,
              oe = ne.children,
              ie = ne.loading,
              ce = ne.error,
              ue = ne.expanded;
        s.useEffect(
          () => {
            !ue && S && ae();
          },
          [ae, ue, S]
        ),
          s.useEffect(
            () => {
              !ue && n && g.pendingFileType && ae();
            },
            [ae, ue, n, g.pendingFileType]
          );
        const le = Object(Y.a)({
                  item: { type: R.d.Directory, path: t },
                  canDrag() {
                    return !g.readOnly;
                  },
                  collect(e) {
                    return { isDragging: e.isDragging() };
                  },
                  end(e, t) {
                    t.didDrop() && F(t.getDropResult());
                  },
                }),
              se = Object(i.a)(le, 2),
              de = se[0].isDragging,
              fe = se[1],
              pe = Object(Ee.a)({
                accept: [R.d.File, R.d.Directory, p.b.FILE],
                canDrop(e) {
                  return (
                    "files" in e ||
                    (e.path !== t &&
                      !Object(Se.d)(e.path, t) &&
                      !(
                        Object(Se.b)(t, e.path) ||
                        (t === Ce.a && !e.path.includes("/"))
                      ))
                  );
                },
                drop(e, n) {
                  if (!n.didDrop()) {
                    if (!("dirContent" in e)) {
                      const r = e.path.split("/"), a = r[r.length - 1];
                      if (
                        null === oe || void 0 === oe
                          ? void 0
                          : oe.find(e => {
                              return e.filename === a;
                            })
                      )
                        return e.type === R.d.Directory
                          ? {
                              dir: o.a.resolve({ error: R.e.AlreadyExists }),
                              path: t,
                            }
                          : {
                              file: o.a.resolve({ error: R.e.AlreadyExists }),
                              path: t,
                            };
                      if (
                        null === oe || void 0 === oe
                          ? void 0
                          : oe.some(n => {
                              return (
                                "".concat(t, "/").concat(n.filename, "}") === e.path
                              );
                            })
                      ) {
                        const i = o.a.resolve({ error: null });
                        return e.type === R.d.Directory
                          ? { dir: i, path: t }
                          : { file: i, path: t };
                      }
                      const c = t + "/" + a;
                      if (e.type === R.d.Directory) {
                        const u = h.moveDir(e.path, c);
                        return te({ dir: u }), { dir: u, path: t };
                      }
                      const l = h.moveFile(e.path, c);
                      return te({ file: l }), { file: l, path: t };
                    }
                    e.dirContent.then(e => {
                      y({ parentPath: T ? void 0 : t, files: e });
                    });
                  }
                },
                collect(e) {
                  return { isOver: e.canDrop() && e.isOver({ shallow: !0 }) };
                },
              }),
              be = Object(i.a)(pe, 2),
              ve = be[0].isOver,
              ge = be[1];
        s.useEffect(
          () => {
            if (ve && !ue) {
              const e = setTimeout(ae, 500);
              return () => {
                clearTimeout(e);
              };
            }
          },
          [ve, ae, ue]
        ),
          s.useEffect(
            () => {
              oe &&
                t === Ce.a &&
                W(
                  oe.filter(e => {
                    return N.a.includes(e.filename);
                  })
                );
            },
            [t, oe]
          );
        let he = oe;
        return he && m && (he = m({ children: he, path: t })),
        De(
          "div",
          {
            ref(e) {
              ge(e), fe(e);
            },
            className:
              "jsx-3964962450 " +
              (f()("dir-node", {
                "is-dropping": ve,
                "is-dragging": de,
                "is-removing": L,
                "root-node": t === Ce.a,
              }) || ""),
          },
          T
            ? null
            : De(
                G,
                {
                  active: n || ve,
                  depth: E,
                  onClick(e) {
                    ue ? re() : ae(), a(e);
                  },
                  actions: x
                    ? void 0
                    : [_.a.Rename, _.a.AddFile, _.a.AddFolder, _.a.Delete],
                  onAction(e) {
                    switch ((n || a(), ue || ae(), e)) {
                      case _.a.Rename:
                        return void u();
                      case _.a.AddFile:
                        return void k(R.d.File);
                      case _.a.AddFolder:
                        return void k(R.d.Directory);
                      case _.a.Delete:
                        d();
                    }
                  },
                },
                De(
                  "div",
                  { className: "jsx-3964962450 node-info" },
                  De(X, {
                    type: R.d.Directory,
                    path: t,
                    expanded: ue,
                    active: n,
                  }),
                  De(B, null, C)
                )
              ),
          De(
            "div",
            { className: "jsx-3964962450 " + (f()({ hidden: !ue }) || "") },
            De(
              Oe,
              Object(r.a)(
                {
                  parentPath: T ? void 0 : t,
                  nodes: he,
                  loading: ie || (T && !m),
                  error: ce,
                },
                g
              )
            )
          ),
          z.length
            ? De(
                Ie,
                { socialView: Boolean(x) },
                De(
                  Oe,
                  Object(r.a)({}, g, {
                    uploadFiles() {},
                    pendingFileType: null,
                    setPendingFileType() {},
                    nodes: z,
                    parentPath: void 0,
                  })
                )
              )
            : null,
          De(
            Q.a,
            {
              isOpen: Boolean(M),
              onRequestClose() {
                return H(null);
              },
            },
            M
              ? De(Z.a, {
                  paths: [M.path],
                  onCancel() {
                    return H(null);
                  },
                  onConfirm() {
                    v(M), H(null);
                  },
                })
              : null
          ),
          De(l.a, { id: "3964962450" }, [
            ".dir-node.jsx-3964962450{border-radius:var(--border-radius-1);}",
            ".root-node.jsx-3964962450{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}",
            ".node-info.jsx-3964962450{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;}",
            ".hidden.jsx-3964962450{display:none;height:0;width:0;}",
            ".is-removing.jsx-3964962450{opacity:0.5;pointer-events:none;}",
            ".is-dropping.jsx-3964962450{background-color:var(--color-primary-transparent-2);}",
            ".is-dragging.jsx-3964962450{opacity:0.7;}",
          ])
        )
      ;
      }
      function Ie(e) {
        const t = e.socialView, n = e.children;
        return t
          ? De(
              s.Fragment,
              null,
              De(Te.a, { height: 1 }),
              De(
                pe.b,
                { align: "stretch", spacing: 1 },
                De(
                  "span",
                  { className: "jsx-156114122 eyebrow" },
                  "Package files"
                ),
                De(
                  "div",
                  { className: "jsx-156114122 packager-nodes-wrapper" },
                  n
                )
              ),
              De(l.a, { id: "156114122" }, [
                ".eyebrow.jsx-156114122{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;font-size:var(--font-size-desktop-text-xsmall);color:var(--color-foreground-2);font-weight:var(--font-weight-medium);text-transform:uppercase;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;text-align:center;}",
                ".packager-nodes-wrapper.jsx-156114122{position:relative;width:100%;}",
              ])
            )
          : De(
              pe.b,
              { spacing: 0 },
              De(
                "div",
                { className: "jsx-2856158915 heading-container" },
                De(fe.a, { level: 5 }, "Packager files")
              ),
              n,
              De(l.a, { id: "2856158915" }, [
                ".heading-container.jsx-2856158915{padding:var(--spacing-2) var(--spacing-1) var(--spacing-2) var(--spacing-2);white-space:nowrap;}",
              ])
            );
      }
    },
    "7lhO": function (e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return o;
      });
      const r = n("q1tI"), a = n("f47c");
      function o() {
        const e = r.useContext(a.a);
        if (!e) throw new Error("Expected repl id to be in context");
        return e;
      }
    },
    Acjn(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return i;
      });
      const r = n("F4vM"), a = n("OVOV"), o = n("HfYt");
      function i(e) {
        return Object(r.a)(e) || Object(a.a)(e) || Object(o.a)();
      }
    },
    CLjb(e, t, n) {
      "use strict";
      const r = n("q1tI"), a = n("aKzv"), o = n("RQA8"), i = n("2mtm"), c = n("wSlI"), u = n("K/u7"), l = n("bO3s"), s = n("bAlF");
      function d(e, t) {
        return (e => {
          if (Array.isArray(e)) return e;
        })(e) || ((e, t) => {
          if (
            "undefined" === typeof Symbol ||
            !(Symbol.iterator in Object(e))
          )
            return;
          const n = [];
          let r = !0;
          let a = !1;
          let o = void 0;
          try {
            for (
              var i, c = e[Symbol.iterator]();
              !(r = (i = c.next()).done) &&
              (n.push(i.value), !t || n.length !== t);
              r = !0
            );
          } catch (u) {
            (a = !0), (o = u);
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (a) throw o;
            }
          }
          return n;
        })(e, t) || ((e, t) => {
          if (!e) return;
          if ("string" === typeof e) return f(e, t);
          let n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return f(e, t);
        })(e, t) || (() => {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })();
      }
      function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function p(e) {
        return (p =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? e => {
                return typeof e;
              }
            : e => {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function b(e, t) {
        return (e => {
          if (Array.isArray(e)) return e;
        })(e) || ((e, t) => {
          if (
            "undefined" === typeof Symbol ||
            !(Symbol.iterator in Object(e))
          )
            return;
          const n = [];
          let r = !0;
          let a = !1;
          let o = void 0;
          try {
            for (
              var i, c = e[Symbol.iterator]();
              !(r = (i = c.next()).done) &&
              (n.push(i.value), !t || n.length !== t);
              r = !0
            );
          } catch (u) {
            (a = !0), (o = u);
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (a) throw o;
            }
          }
          return n;
        })(e, t) || ((e, t) => {
          if (!e) return;
          if ("string" === typeof e) return v(e, t);
          let n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return v(e, t);
        })(e, t) || (() => {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })();
      }
      function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function g(e) {
        const t = Object(r.useRef)(e);
        (t.current = e),
          Object(a.a)(null != e.item, "item must be defined"),
          Object(a.a)(null != e.item.type, "item type must be defined");
        const n = b((() => {
                const e = Object(u.a)();
                return [
                  Object(r.useMemo)(
                    () => {
                      return new l.a(e);
                    },
                    [e]
                  ),
                  Object(r.useMemo)(
                    () => {
                      return new s.a(e.getBackend());
                    },
                    [e]
                  ),
                ];
              })(), 2),
              f = n[0],
              v = n[1];
        !((e, t, n) => {
          const o = Object(u.a)(),
                l = Object(r.useMemo)(() => {
                  return {
                    beginDrag() {
                      const n = e.current, r = n.begin, o = n.item;
                      if (r) {
                        const i = r(t);
                        return (
                          Object(a.a)(
                            null == i || "object" === p(i),
                            "dragSpec.begin() must either return an object, undefined, or null"
                          ),
                          i || o || {}
                        );
                      }
                      return o || {};
                    },
                    canDrag() {
                      return "boolean" === typeof e.current.canDrag
                        ? e.current.canDrag
                        : "function" !== typeof e.current.canDrag ||
                            e.current.canDrag(t);
                    },
                    isDragging(n, r) {
                      const a = e.current.isDragging;
                      return a ? a(t) : r === n.getSourceId();
                    },
                    endDrag() {
                      const r = e.current.end;
                      r && r(t.getItem(), t), n.reconnect();
                    },
                  };
                }, []);
          Object(i.a)(() => {
            const r = d(Object(c.a)(e.current.item.type, l, o), 2), a = r[0], i = r[1];
            return t.receiveHandlerId(a), n.receiveHandlerId(a), i;
          }, []);
        })(t, f, v);
        const g = Object(o.a)(
                  f,
                  t.current.collect ||
                    (() => {
                      return {};
                    }),
                  () => {
                    return v.reconnect();
                  }
                ),
              h = Object(r.useMemo)(
                () => {
                  return v.hooks.dragSource();
                },
                [v]
              ),
              m = Object(r.useMemo)(
                () => {
                  return v.hooks.dragPreview();
                },
                [v]
              );
        return Object(i.a)(
          () => {
            (v.dragSourceOptions = t.current.options || null), v.reconnect();
          },
          [v]
        ),
        Object(i.a)(
          () => {
            (v.dragPreviewOptions = t.current.previewOptions || null),
              v.reconnect();
          },
          [v]
        ),
        [g, h, m]
      ;
      }
      n.d(t, "a", () => {
        return g;
      });
    },
    Dtuc(e, t, n) {
      "use strict";
      n.d(t, "b", () => {
        return d;
      });
      let r;
      const a = n("ln6h");
      const o = n.n(a);
      const i = n("eVuF");
      const c = n.n(i);
      const u = n("g7Gn");
      const l = n("G5Ub");
      const s = n("yz3v");

      var d = () => {
        if (!r) throw new Error("Expected ace to be loaded");
        return r;
      };

      t.a = () => {
        let e;
        return o.a.async(t => {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                if (!r) {
                  t.next = 2;
                  break;
                }
                return t.abrupt("return", c.a.resolve(r));
              case 2:
                return (
                  (t.next = 4),
                  o.a.awrap(
                    Object(l.c)("/public/ace/".concat(s.version, "/ace.js"))
                  )
                );
              case 4:
                if ((r = window.ace)) {
                  t.next = 9;
                  break;
                }
                throw ((e = new Error("Failed to load ace")), u.c(e), e);
              case 9:
                return (
                  (t.next = 11),
                  o.a.awrap(
                    c.a.all([
                      n.e(62).then(n.t.bind(null, "A8C4", 7)),
                      n.e(249).then(n.t.bind(null, "n2/T", 7)),
                    ])
                  )
                );
              case 11:
                return r.require("ace/language_tools"), t.abrupt("return", r);
              case 13:
              case "end":
                return t.stop();
            }
        });
      };
    },
    EP3k(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return u;
      });
      const r = n("ln6h"), a = n.n(r), o = n("0gYX"), i = n.n(o), c = n("gfZM");
      function u(e) {
        let t, n, r, o, u, l;
        return a.a.async(s => {
          for (;;)
            switch ((s.prev = s.next)) {
              case 0:
                return (
                  (t = e.fs),
                  (n = e.language),
                  (s.next = 3),
                  a.a.awrap(t.readDir("."))
                );
              case 3:
                if (!(r = s.sent).error) {
                  s.next = 6;
                  break;
                }
                throw new Error("Could not read files");
              case 6:
                return (
                  (o = r.children),
                  !(u = i.a.getMainFileName(n)) &&
                    o.length &&
                    (u = o[0].filename),
                  (s.next = 11),
                  a.a.awrap(t.readFile(u))
                );
              case 11:
                if (!(l = s.sent).error) {
                  s.next = 14;
                  break;
                }
                throw l.error;
              case 14:
                return s.abrupt("return", c.a.from(l.content).toString());
              case 15:
              case "end":
                return s.stop();
            }
        });
      }
    },
    H6tu(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return c;
      });
      const r = n("q1tI"), a = n.n(r), o = n("pDQI"), i = a.a.createElement;
      function c(e) {
        return i(
          o.a,
          e,
          i("path", {
            d:
              "M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
          i("path", {
            d:
              "M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
          i("path", {
            d:
              "M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          })
        );
      }
    },
    IjuC(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return o;
      });
      const r = n("ln6h"), a = n.n(r);
      function o(e) {
        return a.a.async(
          t => {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if (window.navigator.clipboard) {
                    t.next = 3;
                    break;
                  }
                  return i(e), t.abrupt("return");
                case 3:
                  return (
                    (t.prev = 3),
                    (t.next = 6),
                    a.a.awrap(window.navigator.clipboard.writeText(e))
                  );
                case 6:
                  t.next = 11;
                  break;
                case 8:
                  (t.prev = 8), (t.t0 = t.catch(3)), i(e);
                case 11:
                case "end":
                  return t.stop();
              }
          },
          null,
          null,
          [[3, 8]]
        );
      }
      function i(e) {
        const t = document.createElement("textarea");
        (t.value = e),
          (t.style.top = "0"),
          (t.style.left = "0"),
          (t.style.position = "fixed"),
          document.body.appendChild(t),
          t.focus(),
          t.select(),
          document.execCommand("copy"),
          document.body.removeChild(t);
      }
    },
    JOwT(e, t, n) {
      "use strict";
      t.a = [
        "package.json",
        "package-lock.json",
        "yarn.lock",
        "node_modules",
        "poetry.lock",
        "pyproject.toml",
        "requirements.txt",
        ".venv/",
        ".local",
        "go.mod",
        "go.sum",
        "Gemfile",
        "Gemfile.lock",
        "pom.xml",
        "target",
      ];
    },
    "K/u7": function (e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return i;
      });
      const r = n("q1tI"), a = n("aKzv"), o = n("Lmng");
      function i() {
        const e = Object(r.useContext)(o.a).dragDropManager;
        return Object(a.a)(null != e, "Expected drag drop context"), e;
      }
    },
    LTTG(e, t, n) {
      "use strict";
      let r;
      const a = n("ln6h");
      const o = n.n(a);
      const i = n("eVuF");
      const c = n.n(i);
      const u = n("RPwF");
      const l = n("zgDP");
      !(e => {
        (e.STATE_CHANGE = "STATE_CHANGE"),
          (e.OUTPUT = "OUTPUT"),
          (e.ERROR = "ERROR");
      })(r || (r = {}));
      const s = n("HADy"), d = n("Fz/E");
      function f(e) {
        let t;
        const a = e.beforeRun;
        const i = e.getMainFileContents;
        const f = Object(d.a)();
        let p = s.b.OFFLINE;
        function b(e) {
          (p = e), f.emit(r.STATE_CHANGE, p);
        }
        function v() {
          let e;
          if (!(null === (e = t) || void 0 === e ? void 0 : e.replbox))
            throw new Error("replbox not loaded. runState is; " + p);
          b(s.b.OFFLINE), t.replbox.destroy(), (t = null);
        }
        function g(e) {
          let n;
          return o.a.async(a => {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  if (t) {
                    a.next = 2;
                    break;
                  }
                  throw new Error("replbox not loaded. runState is; " + p);
                case 2:
                  return p !== s.b.RUNNING && b(s.b.RUNNING),
                  (a.next = 5),
                  o.a.awrap(
                    t.replbox.evaluate(e, {
                      stdout(e) {
                        return f.emit(r.OUTPUT, e);
                      },
                    })
                  )
                ;
                case 5:
                  if (((n = a.sent), p === s.b.RUNNING)) {
                    a.next = 8;
                    break;
                  }
                  return a.abrupt("return");
                case 8:
                  if (!n.error) {
                    a.next = 11;
                    break;
                  }
                  return f.emit(r.ERROR, n.error), a.abrupt("return");
                case 11:
                  f.emit(r.OUTPUT, n.data), b(s.b.IDLE);
                case 13:
                case "end":
                  return a.stop();
              }
          });
        }
        return {
          load: function e(a) {
            let i, d, p, g, h, m, y, x, w, k, j, O;
            return o.a.async(E => {
              for (;;)
                switch ((E.prev = E.next)) {
                  case 0:
                    return (i = a.replId),
                    (d = a.hostedUrl),
                    (p = a.language),
                    (g = a.iframeParent),
                    (h = a.timeout),
                    (m = void 0 === h ? 5e3 : h),
                    t && v(),
                    (E.next = 4),
                    o.a.awrap(
                      n
                        .e(61)
                        .then(n.t.bind(null, "i5jj", 7))
                        .then(e => {
                          return e.default;
                        })
                    )
                  ;
                  case 4:
                    if (((y = E.sent), g))
                      for (; g.firstChild; ) g.removeChild(g.firstChild);
                    if (
                      ((x = new y(p, {
                        useIframe: !0,
                        iframeParent: g,
                        track: l.track,
                      })).on("warn", e => {
                        f.emit(r.OUTPUT, e);
                      }),
                      (w = "https://replbox.repl.it/public/secure/"),
                      "html" !== p)
                    ) {
                      E.next = 13;
                      break;
                    }
                    if (d) {
                      E.next = 12;
                      break;
                    }
                    throw new Error("Expected hostedUrl for " + p);
                  case 12:
                    w = d + "/__debug_wrapper.html";
                  case 13:
                    return (k = "kaboom" === p ? "html" : p),
                    (j = ""
                      .concat(window.location.origin, "/public/replbox_lang/")
                      .concat(u.version, "/")
                      .concat(k, ".js")),
                    (O = !1),
                    (E.next = 18),
                    o.a.awrap(
                      new c.a((e, t) => {
                        const n = setTimeout(() => {
                                  (O = !0),
                                    Object(l.track)(
                                      l.events.LOAD_REPLBOX_ENGINE_TIMED_OUT,
                                      { language: p }
                                    ),
                                    e();
                                }, m),
                              r = window.performance.now();
                        x.load({ iframeOrigin: w, languageBundleSrc: j })
                          .then(() => {
                            clearTimeout(n),
                              Object(l.track)(
                                l.events.LOAD_REPLBOX_ENGINE_TIME,
                                { time: window.performance.now() - r }
                              ),
                              e();
                          })
                          .catch(e => {
                            clearTimeout(n), t(e);
                          });
                      })
                    );
                  case 18:
                    if (!O) {
                      E.next = 21;
                      break;
                    }
                    return (
                      x.destroy(),
                      E.abrupt(
                        "return",
                        e({
                          replId: i,
                          language: p,
                          hostedUrl: d,
                          iframeParent: g,
                        })
                      )
                    );
                  case 21:
                    (t = { replId: i, replbox: x, language: p, hostedUrl: d }),
                      b(s.b.IDLE);
                  case 23:
                  case "end":
                    return E.stop();
                }
            });
          },
          run() {
            let e;
            let n;
            let c;
            const u = arguments;
            return o.a.async(l => {
              for (;;)
                switch ((l.prev = l.next)) {
                  case 0:
                    if (
                      ((e = u.length > 0 && void 0 !== u[0] ? u[0] : {}),
                      (n = e.clean),
                      t)
                    ) {
                      l.next = 3;
                      break;
                    }
                    throw new Error("replbox not loaded. runState is; " + p);
                  case 3:
                    if ("web_project" !== t.language) {
                      l.next = 5;
                      break;
                    }
                    throw new Error("TODO?");
                  case 5:
                    return (
                      b(s.b.RUNNING), (l.next = 8), o.a.awrap(a(t.language))
                    );
                  case 8:
                    if (p === s.b.RUNNING) {
                      l.next = 10;
                      break;
                    }
                    return l.abrupt("return");
                  case 10:
                    if (t) {
                      l.next = 12;
                      break;
                    }
                    throw new Error("replbox not loaded. runState is; " + p);
                  case 12:
                    if ("html" !== t.language) {
                      l.next = 16;
                      break;
                    }
                    return (l.next = 15),
                    o.a.awrap(
                      t.replbox.runProject([], {
                        stdout(e) {
                          return f.emit(r.OUTPUT, e);
                        },
                        stderr(e) {
                          return f.emit(r.ERROR, e);
                        },
                        replId: t.replId,
                        url: t.hostedUrl,
                      })
                    )
                  ;
                  case 15:
                    return l.abrupt("return");
                  case 16:
                    if (!n) {
                      l.next = 21;
                      break;
                    }
                    return (l.next = 19), o.a.awrap(t.replbox.reset());
                  case 19:
                    if (p === s.b.RUNNING) {
                      l.next = 21;
                      break;
                    }
                    return l.abrupt("return");
                  case 21:
                    return (l.next = 23), o.a.awrap(i(t.language));
                  case 23:
                    if (((c = l.sent), p === s.b.RUNNING)) {
                      l.next = 26;
                      break;
                    }
                    return l.abrupt("return");
                  case 26:
                    return l.abrupt("return", g(c));
                  case 27:
                  case "end":
                    return l.stop();
                }
            });
          },
          evalCode: g,
          refreshWebview() {
            if (!t) throw new Error("replbox not loaded. runState is; " + p);
            t.replbox.refreshWebProject();
          },
          stopRun() {
            if (!t) throw new Error("replbox not loaded. runState is; " + p);
            try {
              t.replbox.stop();
            } catch (e) {
              if (e.message.match(/postmessage/i)) return;
              throw e;
            }
            b(s.b.IDLE);
          },
          destroy: v,
          onOutput(e) {
            return f.on(r.OUTPUT, e),
            () => {
              f.removeListener(r.OUTPUT, e);
            }
          ;
          },
          onStateChanged(e) {
            return f.on(r.STATE_CHANGE, e),
            () => {
              f.removeListener(r.STATE_CHANGE, e);
            }
          ;
          },
          getRunState() {
            return p;
          },
        };
      }
      n.d(t, "a", () => {
        return f;
      });
    },
    OQjE(e, t, n) {
      "use strict";
      n.d(t, "b", () => {
        return r;
      }),
        n.d(t, "a", () => {
          return a;
        });
      var r = "idle";
      function a() {
        const e =
                  arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
              t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case "EVAL_STARTED":
          case "EVAL_SETUP":
            return "running";
          case "STOP_EVAL":
            return "stopping";
          case "EVAL_ENDED":
            return "idle";
          case "SET_RUN_STATE":
            return t.runstate;
          default:
            return e;
        }
      }
    },
    Qbrf(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return x;
      });
      const r = n("hfKm"), a = n.n(r), o = n("2Eek"), i = n.n(o), c = n("XoMD"), u = n.n(c), l = n("Jo+v"), s = n.n(l), d = n("4mXO"), f = n.n(d), p = n("XXOK"), b = n.n(p), v = n("vYYK"), g = n("pLtp"), h = n.n(g);
      function m(e, t) {
        const n = h()(e);
        if (f.a) {
          let r = f()(e);
          t &&
            (r = r.filter(t => {
              return s()(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function y(e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(t => {
                Object(v.a)(e, t, n[t]);
              })
            : u.a
            ? i()(e, u()(n))
            : m(Object(n)).forEach(t => {
                a()(e, t, s()(n, t));
              });
        }
        return e;
      }
      function x(e) {
        "function" !== typeof e.primary &&
          (e.primary = function () {
            const e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return e;
          });
        const t = h()(e);
        return (n, r) => {
          let a = !1;
          const o = {};
          let i = !0;
          let c = !1;
          let u = void 0;
          try {
            for (var l, s = b()(t); !(i = (l = s.next()).done); i = !0) {
              const d = l.value;
              if ("primary" !== d) {
                const f = e[d], p = n ? n[d] : void 0, v = f(p, r);
                (o[d] = v), (a = a || v !== p);
              }
            }
          } catch (m) {
            (c = !0), (u = m);
          } finally {
            try {
              i || null == s.return || s.return();
            } finally {
              if (c) throw u;
            }
          }
          const g = n ? (a ? y({}, n, {}, o) : n) : void 0, h = e.primary(g, r);
          return (a = a || h !== g) ? y({}, o, {}, h) : n;
        };
      }
    },
    QdtJ(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return p;
      });
      const r = n("MX0m"),
            a = n.n(r),
            o = n("q1tI"),
            i = n("up5I"),
            c = n("V6K1"),
            u = n("xom/"),
            l = n("IdsG"),
            s = n("dI/k"),
            d = o.createElement,
            f = e => {
              return (e = e.map(s.c)).length < 2
                ? e[0]
                : "".concat(e.slice(0, -1).join(", "), " and ").concat(e.slice(-1));
            };
      function p(e) {
        const t = e.paths, n = e.onCancel, r = e.onConfirm;
        return d(
          "div",
          { className: "jsx-4280829187 content" },
          d(
            u.b,
            { spacing: 4 },
            d(
              u.b,
              { spacing: 1 },
              d(c.a, { level: 3 }, "Overwrite?"),
              d(
                l.a,
                { foreground: 2 },
                f(t),
                " already exist in destination, are you sure you want overwrite them?"
              ),
              d(l.a, { foreground: 2 }, "This action cannot be reversed.")
            ),
            d(
              u.a,
              { spacing: 1 },
              d(
                i.a,
                {
                  onClick() {
                    return n();
                  },
                },
                "Cancel"
              ),
              d(
                i.a,
                {
                  color: "negative",
                  filled: !0,
                  onClick() {
                    return r();
                  },
                },
                "Replace"
              )
            )
          ),
          d(a.a, { id: "4280829187" }, [
            ".content.jsx-4280829187{padding:var(--spacing-4);}",
          ])
        );
      }
    },
    RPwF(e) {
      e.exports = JSON.parse(
        '{"name":"@replit/replbox","version":"2.20.0","description":"A sandboxed browser REPL","main":"dist/index.js","files":["/dist"],"scripts":{"prepublishOnly":"yarn build && cp stuffjschild.html dist","clean":"rm -rf ./dist","build":"yarn clean && NODE_ENV=production webpack --config ./webpack.config.js --bail","test":"prettier --check  \\"src/**/*.js\\" && jest","prettier":"prettier --write \\"src/**/*.js\\"","dev":"NODE_ENV=development node dev_server.js"},"author":"amjad@repl.it","license":"UNLICENSED","devDependencies":{"@replit/alcor":"^0.1.0","@sentry/browser":"^5.7.1","apl":"git+https://github.com/ngn/apl.git#cc314fe3be5f2d018d556b7e91916711e46d265e","babel-core":"^6.25.0","babel-generator":"6.26.0","babel-loader":"7.1.2","babel-polyfill":"6.26.0","babel-preset-env":"1.6.1","babel-preset-stage-2":"6.24.1","babel-template":"6.26.0","babel-traverse":"6.26.0","babel-types":"^6.26.0","babylon":"6.18.0","biwascheme":"git+https://github.com/masad-frost/biwascheme.git#3c0d5a67cd1af696c69ab7fb085b2f42c8b0586c","codemirror":"^5.52.0","context-eval":"^0.1.0","empty-module":"^0.0.2","express":"^4.17.1","happypack":"^4.0.1","inspect-x":"1.7.0","jasmine-core":"^2.4.1","jasmine_dom_matchers":"^1.4.0","jest":"^24.9.0","prettier":"^1.18.2","puppeteer":"^1.11.0","script-loader":"0.7.0","serve-handler":"^6.1.2","stuff.js":"^0.4.1","underscore":"1.2.2","underscore.string":"2.0.0","webpack":"3.10","webpack-dev-middleware":"^2","whatwg-fetch":"^3.0.0"},"dependencies":{},"jest":{"globalSetup":"<rootDir>/jest_setup.js","globalTeardown":"<rootDir>/jest_teardown.js","verbose":true,"bail":1},"prettier":{"trailingComma":"all","tabWidth":2,"semi":true,"singleQuote":true}}'
      );
    },
    RQA8(e, t, n) {
      "use strict";
      const r = n("2mtm"), a = n("khz9"), o = n("q1tI");
      function i(e, t) {
        return (e => {
          if (Array.isArray(e)) return e;
        })(e) || ((e, t) => {
          if (
            "undefined" === typeof Symbol ||
            !(Symbol.iterator in Object(e))
          )
            return;
          const n = [];
          let r = !0;
          let a = !1;
          let o = void 0;
          try {
            for (
              var i, c = e[Symbol.iterator]();
              !(r = (i = c.next()).done) &&
              (n.push(i.value), !t || n.length !== t);
              r = !0
            );
          } catch (u) {
            (a = !0), (o = u);
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (a) throw o;
            }
          }
          return n;
        })(e, t) || ((e, t) => {
          if (!e) return;
          if ("string" === typeof e) return c(e, t);
          let n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return c(e, t);
        })(e, t) || (() => {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })();
      }
      function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function u(e, t) {
        return (e => {
          if (Array.isArray(e)) return e;
        })(e) || ((e, t) => {
          if (
            "undefined" === typeof Symbol ||
            !(Symbol.iterator in Object(e))
          )
            return;
          const n = [];
          let r = !0;
          let a = !1;
          let o = void 0;
          try {
            for (
              var i, c = e[Symbol.iterator]();
              !(r = (i = c.next()).done) &&
              (n.push(i.value), !t || n.length !== t);
              r = !0
            );
          } catch (u) {
            (a = !0), (o = u);
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (a) throw o;
            }
          }
          return n;
        })(e, t) || ((e, t) => {
          if (!e) return;
          if ("string" === typeof e) return l(e, t);
          let n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return l(e, t);
        })(e, t) || (() => {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })();
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function s(e, t, n) {
        const c = u(((e, t, n) => {
                const c = i(
                          Object(o.useState)(() => {
                            return t(e);
                          }),
                          2
                        ),
                      u = c[0],
                      l = c[1],
                      s = Object(o.useCallback)(
                        () => {
                          const r = t(e);
                          Object(a.a)(u, r) || (l(r), n && n());
                        },
                        [u, e, n]
                      );
                return Object(r.a)(s, []), [u, s];
              })(e, t, n), 2),
              l = c[0],
              s = c[1];
        return Object(r.a)(
          () => {
            const t = e.getHandlerId();
            if (null != t)
              return e.subscribeToStateChange(s, { handlerIds: [t] });
          },
          [e, s]
        ),
        l;
      }
      n.d(t, "a", () => {
        return s;
      });
    },
    S6NQ(e, t, n) {
      "use strict";
      n.d(t, "b", () => {
        return D;
      }),
        n.d(t, "a", () => {
          return A;
        });
      const r = n("hfKm"), a = n.n(r), o = n("2Eek"), i = n.n(o), c = n("XoMD"), u = n.n(c), l = n("Jo+v"), s = n.n(l), d = n("4mXO"), f = n.n(d), p = n("pLtp"), b = n.n(p), v = n("XXOK"), g = n.n(v), h = n("9Jkg"), m = n.n(h), y = n("doui"), x = n("vYYK"), w = n("g7Gn"), k = n("gfZM"), j = n("NuhN"), O = n("tSgl"), E = n.n(O), C = n("XE6U");
      function S(e, t) {
        const n = b()(e);
        if (f.a) {
          let r = f()(e);
          t &&
            (r = r.filter(t => {
              return s()(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function T(e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(n), !0).forEach(t => {
                Object(x.a)(e, t, n[t]);
              })
            : u.a
            ? i()(e, u()(n))
            : S(Object(n)).forEach(t => {
                a()(e, t, s()(n, t));
              });
        }
        return e;
      }
      var D = {};
      function A() {
        const e =
                  arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
              t = arguments.length > 1 ? arguments[1] : void 0;
        if ("string" === typeof t.path && E()(t.path)) return e;
        const n = (() => {
          switch (t.type) {
            case "FILE_UNLOAD":
              return T(
                {},
                e,
                Object(x.a)({}, t.path, { path: t.path, loaded: !1 })
              );
            case "FILE_LOADED":
            case "FILE_CACHE_HIT":
              return T(
                {},
                e,
                Object(x.a)({}, t.path, T({}, e[t.path], {}, t.file))
              );
            case "CREATE_FILE":
              return T(
                {},
                e,
                Object(x.a)({}, t.path, t.file || { path: t.path, loaded: !1 })
              );
            case "MOVE_FILE":
              const n = Object(j.g)(e, t.path, t.to);
              if (!n.length) return e;
              const r = T({}, e);
              return n.forEach(t => {
                const n = Object(y.a)(t, 2), a = n[0], o = n[1];
                delete r[a];
                const i = e[a];
                if (!i) throw new Error("No source file!");
                r[o] = T({}, i, { path: o });
              }),
              r;
            case "DELETE_FILE":
              const a = Object(j.e)(e, t.path);
              if (a.length && e[t.path])
                throw new C.a(
                  "matched children and node while deleting"
                ).setExtras({ path: t.path, fileState: e });
              const o = T({}, e);
              return a.length
                ? a.forEach(e => {
                    delete o[e];
                  })
                : delete o[t.path],
              o
            ;
            case "OT_FILE_OP":
              if (!t.changeSource)
                throw new Error(
                  "Expected changeSource on action OT_FILE_OP got " + m()(t)
                );
              const i = e[t.path];
              if (!i)
                throw new Error(
                  "tried to perform an OT op on " +
                    t.path +
                    " but we don't know about that file."
                );
              if (!i.loaded) return e;
              const c = ((e, t) => {
                let n = e, r = 0, a = !0, o = !1, i = void 0;
                try {
                  for (var c, u = g()(t); !(a = (c = u.next()).done); a = !0) {
                    const l = c.value;
                    if ("string" === typeof l)
                      (n = n.slice(0, r) + l + n.slice(r)), (r += l.length);
                    else if ("object" === typeof l && "number" === typeof l.d)
                      n = n.slice(0, r) + n.slice(r + l.d);
                    else {
                      if ("number" !== typeof l)
                        throw new Error("bad ot op: " + l);
                      r += l;
                    }
                  }
                } catch (s) {
                  (o = !0), (i = s);
                } finally {
                  try {
                    a || null == u.return || u.return();
                  } finally {
                    if (o) throw i;
                  }
                }
                return n;
              })(k.a.from(i.content).toString("utf8"), t.op);
              return T(
                {},
                e,
                Object(x.a)({}, t.path, T({}, i, { content: k.a.from(c) }))
              );
            default:
              return e;
          }
        })();
        return n !== e &&
          !e[t.path] &&
          n[t.path] &&
          "CREATE_FILE" !== t.type &&
          w.m(n => {
            n.setExtra("action", t),
              n.setExtra("prevstate", e),
              w.c(
                new Error(
                  "created file without using CREATE_FILE or FILE_CACHE_HIT"
                )
              );
          }),
        n
      ;
      }
    },
    TeFj(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return c;
      });
      const r = n("q1tI"), a = n.n(r), o = n("pDQI"), i = a.a.createElement;
      function c(e) {
        return i(
          o.a,
          e,
          i("path", {
            d: "M9 12L2 12",
            strokeWidth: "2",
            strokeLinecap: "round",
          }),
          i("path", {
            d:
              "M16 6L11 6C10.4477 6 10 6.44772 10 7L10 17C10 17.5523 10.4477 18 11 18L16 18",
            strokeWidth: "2",
          }),
          i("path", {
            d:
              "M16 18C16 19.6569 17.3431 21 19 21C20.6569 21 22 19.6569 22 18C22 16.3431 20.6569 15 19 15C17.3431 15 16 16.3431 16 18Z",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
          i("path", {
            d:
              "M16 6C16 4.34315 17.3431 3 19 3C20.6569 3 22 4.34315 22 6C22 7.65685 20.6569 9 19 9C17.3431 9 16 7.65685 16 6Z",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          })
        );
      }
    },
    VwSA(e, t, n) {
      "use strict";
      t.a = {
        py: "#78ABC0",
        rb: "#DD646A",
        js: "#C5B007",
        java: "#84BEE2",
        html: "#F98545",
        css: "#28AAE6",
        cpp: "#659AD1",
        c: "#A8B9CB",
      };
    },
    Yzr4(e, t, n) {
      const r = n("0T/a"),
            a = n("5foh"),
            o = n("14Ie"),
            i = n("cCpf"),
            c = "[" + i + "]",
            u = RegExp("^" + c + c + "*"),
            l = RegExp(c + c + "*$"),
            s = (e, t, n) => {
              const a = {},
                    c = o(() => {
                      return !!i[e]() || "\u200b\x85" != "\u200b\x85"[e]();
                    }),
                    u = (a[e] = c ? t(d) : i[e]);
              n && (a[n] = u), r(r.P + r.F * c, "String", a);
            },
            d = (s.trim = (e, t) => {
              return (
                (e = String(a(e))),
                1 & t && (e = e.replace(u, "")),
                2 & t && (e = e.replace(l, "")),
                e
              );
            });
      e.exports = s;
    },
    aMZS(e, t, n) {
      "use strict";
      const r = n("q1tI"), a = n("aKzv"), o = n("RQA8"), i = n("2mtm"), c = n("wSlI"), u = n("K/u7"), l = n("oQVV"), s = n("pdp2");
      function d(e, t) {
        return (e => {
          if (Array.isArray(e)) return e;
        })(e) || ((e, t) => {
          if (
            "undefined" === typeof Symbol ||
            !(Symbol.iterator in Object(e))
          )
            return;
          const n = [];
          let r = !0;
          let a = !1;
          let o = void 0;
          try {
            for (
              var i, c = e[Symbol.iterator]();
              !(r = (i = c.next()).done) &&
              (n.push(i.value), !t || n.length !== t);
              r = !0
            );
          } catch (u) {
            (a = !0), (o = u);
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (a) throw o;
            }
          }
          return n;
        })(e, t) || ((e, t) => {
          if (!e) return;
          if ("string" === typeof e) return f(e, t);
          let n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return f(e, t);
        })(e, t) || (() => {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })();
      }
      function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function p(e, t) {
        return (e => {
          if (Array.isArray(e)) return e;
        })(e) || ((e, t) => {
          if (
            "undefined" === typeof Symbol ||
            !(Symbol.iterator in Object(e))
          )
            return;
          const n = [];
          let r = !0;
          let a = !1;
          let o = void 0;
          try {
            for (
              var i, c = e[Symbol.iterator]();
              !(r = (i = c.next()).done) &&
              (n.push(i.value), !t || n.length !== t);
              r = !0
            );
          } catch (u) {
            (a = !0), (o = u);
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (a) throw o;
            }
          }
          return n;
        })(e, t) || ((e, t) => {
          if (!e) return;
          if ("string" === typeof e) return b(e, t);
          let n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return b(e, t);
        })(e, t) || (() => {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })();
      }
      function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function v(e) {
        const t = Object(r.useRef)(e);
        (t.current = e),
          Object(a.a)(null != e.accept, "accept must be defined");
        const n = p((() => {
                const e = Object(u.a)();
                return [
                  Object(r.useMemo)(
                    () => {
                      return new s.a(e);
                    },
                    [e]
                  ),
                  Object(r.useMemo)(
                    () => {
                      return new l.a(e.getBackend());
                    },
                    [e]
                  ),
                ];
              })(), 2),
              f = n[0],
              b = n[1];
        !((e, t, n) => {
          const a = Object(u.a)(),
                o = Object(r.useMemo)(
                  () => {
                    return {
                      canDrop() {
                        const n = e.current.canDrop;
                        return !n || n(t.getItem(), t);
                      },
                      hover() {
                        const n = e.current.hover;
                        n && n(t.getItem(), t);
                      },
                      drop() {
                        const n = e.current.drop;
                        if (n) return n(t.getItem(), t);
                      },
                    };
                  },
                  [t]
                );
          Object(i.a)(
            () => {
              const r = d(Object(c.b)(e.current.accept, o, a), 2), i = r[0], u = r[1];
              return t.receiveHandlerId(i), n.receiveHandlerId(i), u;
            },
            [t, n]
          );
        })(t, f, b);
        const v = Object(o.a)(
                  f,
                  t.current.collect ||
                    (() => {
                      return {};
                    }),
                  () => {
                    return b.reconnect();
                  }
                ),
              g = Object(r.useMemo)(
                () => {
                  return b.hooks.dropTarget();
                },
                [b]
              );
        return Object(i.a)(
          () => {
            (b.dropTargetOptions = e.options || null), b.reconnect();
          },
          [e.options]
        ),
        [v, g]
      ;
      }
      n.d(t, "a", () => {
        return v;
      });
    },
    b0NY(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return u;
      });
      const r = n("doui"), a = n("q1tI"), o = n("7njZ"), i = n("tSgl"), c = n.n(i);
      function u(e) {
        const t = e.path, n = e.initialExpanded, i = e.fs, u = a.useState(null), l = Object(r.a)(u, 2), s = l[0], d = l[1], f = a.useState(null), p = Object(r.a)(f, 2), b = p[0], v = p[1], g = a.useState(Boolean(n)), h = Object(r.a)(g, 2), m = h[0], y = h[1], x = Object(o.a)();
        a.useEffect(
          () => {
            if (m) {
              const e = i.watchDir(t, {
                onChange(e) {
                  d(
                    e.filter(e => {
                      return !c()(e.filename);
                    })
                  );
                },
                onError(e) {
                  v(e);
                },
              });
              return () => {
                x.current && d(null), e();
              };
            }
          },
          [i, t, m, d, v]
        );
        const w = a.useCallback(() => {
                  y(!0);
                }, []),
              k = a.useCallback(() => {
                y(!1);
              }, []);
        return m
          ? b
            ? {
                collapse: k,
                expand: w,
                children: null,
                expanded: m,
                loading: !1,
                error: b,
              }
            : s
            ? {
                collapse: k,
                expand: w,
                children: s,
                loading: !1,
                error: b,
                expanded: m,
              }
            : {
                collapse: k,
                expand: w,
                children: s,
                loading: !0,
                error: b,
                expanded: m,
              }
          : {
              collapse: k,
              expand: w,
              children: null,
              loading: !1,
              error: null,
              expanded: m,
            };
      }
    },
    cCpf(e, t) {
      e.exports =
        "\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";
    },
    ceSv(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return p;
      });
      const r = n("kOwS"), a = n("doui"), o = n("qNsG"), i = n("q1tI"), c = n("up5I"), u = n("tidx"), l = n("TeFj"), s = n("8Vt8"), d = n("sMwv"), f = i.createElement;
      function p(e) {
        const t = e.replId,
              n = e.onFork,
              p = e.isLoggedIn,
              b = e.onAuthCancel,
              v = e.trackingContext,
              g = Object(o.a)(e, [
                "replId",
                "onFork",
                "isLoggedIn",
                "onAuthCancel",
                "trackingContext",
              ]),
              h = i.useState(!1),
              m = Object(a.a)(h, 2),
              y = m[0],
              x = m[1];
        i.useEffect(
          () => {
            !y && b && b();
          },
          [y, b]
        );
        const w = Object(d.a)({ onFork: n }), k = Object(a.a)(w, 2), j = k[0], O = k[1].loading;
        return f(
          i.Fragment,
          null,
          f(
            c.a,
            Object(r.a)({}, g, {
              Icon: l.a,
              disabled: O,
              onClick(e) {
                g.onClick && g.onClick(e),
                  p ? O || j(t, { trackingData: { context: v } }) : x(!0);
              },
            }),
            O ? "Forking..." : "Fork"
          ),
          p
            ? null
            : f(
                s.a,
                {
                  isOpen: y,
                  onRequestClose() {
                    x(!1);
                  },
                },
                f(u.a, {
                  title: "Sign up or log in to fork this repl",
                  onSuccess(e) {
                    e &&
                      j(t, {
                        trackingData: {
                          context: v,
                          authType: p ? "login" : "signup",
                        },
                      });
                  },
                })
              )
        );
      }
    },
    f47c(e, t, n) {
      "use strict";
      const r = n("q1tI"), a = r.createContext(null);
      t.a = a;
    },
    gnTG(e, t, n) {
      "use strict";
      let r;
      const a = n("doui");
      const o = n("ln6h");
      const i = n.n(o);
      const c = n("eVuF");
      const u = n.n(c);
      const l = n("Fz/E");
      const s = n("g7Gn");
      const d = n("5/z4");
      const f = n("0gYX");
      const p = n.n(f);
      const b = n("XWHH");
      const v = n.n(b);
      !(e => {
        (e.OUTPUT = "OUTPUT"),
          (e.ERROR = "ERROR"),
          (e.STATE_CHANGED = "STATE_CHANGED"),
          (e.CHANNEL_OPENED = "CHANNEL_OPENED");
      })(r || (r = {}));
      const g = n("6bXu");
      function h(e) {
        const t = e.container;
        const n = Object(l.a)();
        let o = null;

        const c = e => {
          const t = e.repl;
          return (
            !(window["flag-packager-service"] || Object(g.a)()) ||
            !p.a.supportsPackager3(t.language)
          );
        };

        function f() {
          return i.a.async(e => {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!o || "open" !== o.status) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return", o);
                case 2:
                  return e.abrupt(
                    "return",
                    new u.a(e => {
                      n.once(r.CHANNEL_OPENED, t => {
                        e(t);
                      });
                    })
                  );
                case 3:
                case "end":
                  return e.stop();
              }
          });
        }
        function b() {
          return i.a.async(e => {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    new u.a((e, n) => {
                      let r = !1;

                      const a = t.openChannel(
                        { service: "packager3", skip: c },
                        t => {
                          const o = t.channel, i = t.error;
                          if (r)
                            throw new Error(
                              "getAnonymousChannel fullfilled but openChannelCb called again"
                            );
                          if (!i)
                            return e([o, a]),
                            e => {
                              e.willReconnect && a(),
                                r ||
                                  ((r = !0),
                                  n(
                                    new Error(
                                      "Expected getAnonymousChannel promise to be fulfilled when closing"
                                    )
                                  ));
                            }
                          ;
                          n(i);
                        }
                      );
                    })
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          });
        }
        return t.openChannel(
          { service: "packager3", name: "packager", skip: c },
          e => {
            const t = e.channel;
            if (!e.error) {
              if (!t) throw new Error("Expected channel");
              return t.onCommand(e => {
                switch (e.body) {
                  case "state":
                    const t = e.state === d.api.State.Running;
                    n.emit(r.STATE_CHANGED, t);
                    break;
                  case "output":
                    n.emit(r.OUTPUT, e.output);
                    break;
                  case "error":
                    n.emit(r.ERROR, e.error);
                }
              }),
              (o = t),
              n.emit(r.CHANNEL_OPENED, t),
              () => {
                o = null;
              };
            }
          }
        ),
        {
          addPackages(e) {
            let t, n, r;
            return i.a.async(a => {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (a.next = 2), i.a.awrap(f());
                  case 2:
                    return (t = a.sent),
                    (n = e.map(e => {
                      return { name: e };
                    })),
                    (a.next = 6),
                    i.a.awrap(t.request({ packageAdd: { pkgs: n } }))
                  ;
                  case 6:
                    if (!(r = a.sent).channelClosed) {
                      a.next = 9;
                      break;
                    }
                    return a.abrupt("return", !1);
                  case 9:
                    return a.abrupt("return", Boolean(r.ok));
                  case 10:
                  case "end":
                    return a.stop();
                }
            });
          },
          removePackages(e) {
            let t, n, r;
            return i.a.async(a => {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (a.next = 2), i.a.awrap(f());
                  case 2:
                    return (t = a.sent),
                    (n = e.map(e => {
                      return { name: e };
                    })),
                    (a.next = 6),
                    i.a.awrap(t.request({ packageRemove: { pkgs: n } }))
                  ;
                  case 6:
                    if (!(r = a.sent).channelClosed) {
                      a.next = 9;
                      break;
                    }
                    return a.abrupt("return", !1);
                  case 9:
                    return a.abrupt("return", Boolean(r.ok));
                  case 10:
                  case "end":
                    return a.stop();
                }
            });
          },
          searchPackages(e) {
            let n, r, o, c, u, l, d;
            return i.a.async(
              f => {
                for (;;)
                  switch ((f.prev = f.next)) {
                    case 0:
                      if (
                        (null ===
                          (r =
                            null === (n = t.getRepl()) || void 0 === n
                              ? void 0
                              : n.language) ||
                          void 0 === r ||
                          !r.includes("python")) &&
                        "pygame" !== r
                      ) {
                        f.next = 10;
                        break;
                      }
                      return (f.prev = 2),
                      f.abrupt(
                        "return",
                        v()(
                          "https://pipsearch.amasad.repl.co/search?name=" +
                            encodeURIComponent(e),
                          { mode: "cors" }
                        ).then(e => {
                          return e.json();
                        })
                      )
                    ;
                    case 6:
                      return (
                        (f.prev = 6),
                        (f.t0 = f.catch(2)),
                        s.c(f.t0),
                        f.abrupt("return", [])
                      );
                    case 10:
                      return (f.next = 12), i.a.awrap(b());
                    case 12:
                      return (
                        (o = f.sent),
                        (c = Object(a.a)(o, 2)),
                        (u = c[0]),
                        (l = c[1]),
                        (f.next = 18),
                        i.a.awrap(u.request({ packageSearch: { query: e } }))
                      );
                    case 18:
                      if (!(d = f.sent).channelClosed) {
                        f.next = 21;
                        break;
                      }
                      return f.abrupt("return", []);
                    case 21:
                      if (
                        (l(),
                        "packageSearchResp" !== d.body ||
                          !d.packageSearchResp)
                      ) {
                        f.next = 24;
                        break;
                      }
                      return f.abrupt(
                        "return",
                        d.packageSearchResp.results || []
                      );
                    case 24:
                      return (
                        s.c(
                          new Error(
                            "Unknown packager3 command ".concat(
                              d.body,
                              ". "
                            ) +
                              "Expected packageSearchResp. Received error: ".concat(
                                d.error
                              )
                          )
                        ),
                        f.abrupt("return", [])
                      );
                    case 26:
                    case "end":
                      return f.stop();
                  }
              },
              null,
              null,
              [[2, 6]]
            );
          },
          fetchPackageInfo(e) {
            let t, n, r, o, c;
            return i.a.async(u => {
              for (;;)
                switch ((u.prev = u.next)) {
                  case 0:
                    return (u.next = 2), i.a.awrap(b());
                  case 2:
                    return (
                      (t = u.sent),
                      (n = Object(a.a)(t, 2)),
                      (r = n[0]),
                      (o = n[1]),
                      (u.next = 8),
                      i.a.awrap(
                        r.request({ packageInfo: { pkg: { name: e } } })
                      )
                    );
                  case 8:
                    if (!(c = u.sent).channelClosed) {
                      u.next = 11;
                      break;
                    }
                    return u.abrupt("return", void 0);
                  case 11:
                    if (
                      (o(),
                      "packageInfoResp" !== c.body || !c.packageInfoResp)
                    ) {
                      u.next = 14;
                      break;
                    }
                    return u.abrupt(
                      "return",
                      c.packageInfoResp.pkg || void 0
                    );
                  case 14:
                    return (
                      s.c(
                        new Error(
                          "Unknown packager3 command ".concat(c.body, ". ") +
                            "Expected packageInfoResp. Received error: ".concat(
                              c.error
                            )
                        )
                      ),
                      u.abrupt("return", void 0)
                    );
                  case 16:
                  case "end":
                    return u.stop();
                }
            });
          },
          installPackages() {
            let e, t;
            return i.a.async(n => {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (n.next = 2), i.a.awrap(f());
                  case 2:
                    return (
                      (e = n.sent),
                      (n.next = 5),
                      i.a.awrap(e.request({ packageInstall: {} }))
                    );
                  case 5:
                    if (!(t = n.sent).channelClosed) {
                      n.next = 8;
                      break;
                    }
                    return n.abrupt("return", !1);
                  case 8:
                    return n.abrupt("return", Boolean(t.ok));
                  case 9:
                  case "end":
                    return n.stop();
                }
            });
          },
          listSpecfile() {
            let e, t, n, r, o, c, u, l;
            return i.a.async(d => {
              for (;;)
                switch ((d.prev = d.next)) {
                  case 0:
                    return (d.next = 2), i.a.awrap(b());
                  case 2:
                    return (
                      (e = d.sent),
                      (t = Object(a.a)(e, 2)),
                      (n = t[0]),
                      (r = t[1]),
                      (d.next = 8),
                      i.a.awrap(n.request({ packageListSpecfile: {} }))
                    );
                  case 8:
                    if (!(o = d.sent).channelClosed) {
                      d.next = 11;
                      break;
                    }
                    return d.abrupt("return", {
                      packages: null,
                      error: "channel closed",
                    });
                  case 11:
                    r(),
                      (d.t0 = o.body),
                      (d.next =
                        "error" === d.t0
                          ? 15
                          : "packageListSpecfileResp" === d.t0
                          ? 16
                          : 20);
                    break;
                  case 15:
                    return d.abrupt("return", {
                      packages: null,
                      error: "list specfile failed: ".concat(o.error),
                    });
                  case 16:
                    if (
                      (u =
                        null === (c = o.packageListSpecfileResp) ||
                        void 0 === c
                          ? void 0
                          : c.pkgs)
                    ) {
                      d.next = 19;
                      break;
                    }
                    return d.abrupt("return", {
                      packages: null,
                      error: "list specfile returned an empty response",
                    });
                  case 19:
                    return d.abrupt("return", { packages: u, error: null });
                  case 20:
                    return (
                      (l =
                        "Unknown packager3 listSpecFile command ".concat(
                          o.body,
                          ". "
                        ) + "Expected error or packageListSpecfileResp"),
                      s.c(new Error(l)),
                      d.abrupt("return", { packages: null, error: l })
                    );
                  case 23:
                  case "end":
                    return d.stop();
                }
            });
          },
          onOutput(e) {
            return n.on(r.OUTPUT, e),
            () => {
              n.removeListener(r.OUTPUT, e);
            }
          ;
          },
          onError(e) {
            return n.on(r.ERROR, e),
            () => {
              n.removeListener(r.ERROR, e);
            }
          ;
          },
          onStateChanged(e) {
            return n.on(r.STATE_CHANGED, e),
            () => {
              n.removeListener(r.STATE_CHANGED, e);
            }
          ;
          },
        };
      }
      n.d(t, "a", () => {
        return h;
      });
    },
    h7rM(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return a;
      }),
        n.d(t, "b", () => {
          return o;
        });
      const r = n("/MKj");
      function a(e, t, n, r) {
        const a = e.workspace[t].plugins[n];
        if (a.type !== r) throw new Error("expected type to be " + r);
        return a.state;
      }
      function o(e, t, n, o) {
        const i = Object(r.f)(r => {
                  return a(r, e, t, n);
                }, o),
              c = Object(r.e)();
        return [
          i,
          n => {
            c({ type: "SET_STATE", wid: e, pud: t, state: n });
          },
        ];
      }
    },
    icXl(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return u;
      });
      const r = n("0gYX"), a = n.n(r), o = n("8v8i"), i = n("8/ze"), c = n("JOwT");
      function u(e) {
        const t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return n => {
          const r = n.path,
                u = n.children,
                l =
                  r === i.a
                    ? u.filter(e => {
                        return !c.a.includes(e.filename);
                      })
                    : u,
                s = a.a.getMainFileName(e);
          return l
            .filter(n => {
              const o = n.filename;
              return (
                !a.a.isLangFileBinary(e, o) && (!t || r !== i.a || ".env" !== o)
              );
            })
            .sort((e, t) => {
              return r === i.a && e.filename === s
                ? -1
                : r === i.a && t.filename === s
                ? 1
                : t.type === o.d.Directory && e.type !== o.d.Directory
                ? 1
                : e.type === o.d.Directory && t.type !== o.d.Directory
                ? -1
                : e.filename.localeCompare(t.filename);
            });
        };
      }
    },
    kDUs(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return a;
      });
      let r;
      var a;
      const o = n("kOwS");
      const i = n("vYYK");
      const c = n("MX0m");
      const u = n.n(c);
      const l = n("q1tI");
      const s = n("TSYQ");
      const d = n.n(s);
      const f = n("IdsG");
      const p = n("H6tu");
      const b = n("M85P");
      const v = l.createElement;
      !(e => {
        (e.AddFile = "AddFile"),
          (e.AddFolder = "AddFolder"),
          (e.UploadFile = "UploadFile"),
          (e.UploadFolder = "UploadFolder"),
          (e.DownloadZip = "DownloadZip"),
          (e.OpenTab = "OpenTab"),
          (e.CopyLink = "CopyLink"),
          (e.Rename = "Rename"),
          (e.Delete = "Delete");
      })(a || (a = {}));
      const g =
        ((r = {}),
        Object(i.a)(r, a.AddFile, "Add file"),
        Object(i.a)(r, a.AddFolder, "Add folder"),
        Object(i.a)(r, a.UploadFile, "Upload file"),
        Object(i.a)(r, a.UploadFolder, "Upload folder"),
        Object(i.a)(r, a.DownloadZip, "Download as zip"),
        Object(i.a)(r, a.OpenTab, "Open tab"),
        Object(i.a)(r, a.CopyLink, "Copy link"),
        Object(i.a)(r, a.Rename, "Rename"),
        Object(i.a)(r, a.Delete, "Delete"),
        r);
      function h(e) {
        const t = e.isNegative, n = e.isHighlighted, r = e.children;
        return v(
          "div",
          {
            className:
              "jsx-3056961124 " +
              (d()({ "is-negative": t, "is-highlighted": n }) || ""),
          },
          v(f.a, { size: "small" }, r),
          v(u.a, { id: "3056961124" }, [
            "div.jsx-3056961124{color:var(--color-foreground-1);padding:var(--spacing-1);margin:var(--spacing-half);border-radius:var(--border-radius-1);font-weight:var(--font-weight-regular);cursor:pointer;white-space:nowrap;}",
            "div.jsx-3056961124:hover{cursor:pointer;}",
            ".is-highlighted.jsx-3056961124{background-color:var(--color-control-3);}",
            ".is-negative.jsx-3056961124 *{color:var(--color-negative-1) !important;}",
            ".is-negative.jsx-3056961124:hover{background-color:var(--color-negative-1);}",
            ".is-negative.jsx-3056961124:hover *{color:var(--color-white) !important;}",
          ])
        );
      }
      t.b = l.forwardRef((e, t) => {
        const n = e.isActive,
              r = e.actions,
              i = e.onAction,
              c = e.onOpenChange,
              s = Object(b.d)({
                items: r,
                onSelectedItemChange(e) {
                  const t = e.selectedItem;
                  t && (i(t), k());
                },
              }),
              d = s.isOpen,
              f = s.getToggleButtonProps,
              m = s.getMenuProps,
              y = s.highlightedIndex,
              x = s.getItemProps,
              w = s.openMenu,
              k = s.reset;
        l.useImperativeHandle(t, () => {
          return { open: w };
        }),
          l.useEffect(
            () => {
              c && c(d);
            },
            [d, c]
          );
        const j = f(), O = r.includes(a.UploadFile);
        return v(
          "div",
          {
            className:
              u.a.dynamic([
                [
                  "824934503",
                  [
                    n ? "var(--color-white)" : "var(--color-foreground-3)",
                    n ? "auto" : "var(--color-foreground-1)",
                  ],
                ],
              ]) + " node-actions-menu",
          },
          v(
            "button",
            Object(o.a)({}, j, {
              onClick(e) {
                e.stopPropagation(), j.onClick(e);
              },
              className:
                u.a.dynamic([
                  [
                    "824934503",
                    [
                      n ? "var(--color-white)" : "var(--color-foreground-3)",
                      n ? "auto" : "var(--color-foreground-1)",
                    ],
                  ],
                ]) +
                " " +
                ((j && null != j.className && j.className) || ""),
            }),
            v(p.a, { size: "large" })
          ),
          d
            ? v(
                "ul",
                Object(o.a)({}, m(), {
                  className: u.a.dynamic([
                    [
                      "824934503",
                      [
                        n ? "var(--color-white)" : "var(--color-foreground-3)",
                        n ? "auto" : "var(--color-foreground-1)",
                      ],
                    ],
                  ]),
                }),
                r.map((e, t) => {
                  return v(
                    "li",
                    Object(o.a)(
                      { key: e },
                      x({
                        item: e,
                        onClick(e) {
                          return e.stopPropagation();
                        },
                      }),
                      {
                        className: u.a.dynamic([
                          [
                            "824934503",
                            [
                              n
                                ? "var(--color-white)"
                                : "var(--color-foreground-3)",
                              n ? "auto" : "var(--color-foreground-1)",
                            ],
                          ],
                        ]),
                      }
                    ),
                    v(
                      h,
                      { isHighlighted: y === t, isNegative: e === a.Delete },
                      g[e]
                    )
                  );
                }),
                O
                  ? v(
                      "div",
                      {
                        className:
                          u.a.dynamic([
                            [
                              "824934503",
                              [
                                n
                                  ? "var(--color-white)"
                                  : "var(--color-foreground-3)",
                                n ? "auto" : "var(--color-foreground-1)",
                              ],
                            ],
                          ]) + " protip",
                      },
                      v(
                        "span",
                        {
                          className: u.a.dynamic([
                            [
                              "824934503",
                              [
                                n
                                  ? "var(--color-white)"
                                  : "var(--color-foreground-3)",
                                n ? "auto" : "var(--color-foreground-1)",
                              ],
                            ],
                          ]),
                        },
                        "PROTIP:"
                      ),
                      " drag and drop files or folders to upload!"
                    )
                  : null
              )
            : null,
          v(
            u.a,
            {
              id: "824934503",
              dynamic: [
                n ? "var(--color-white)" : "var(--color-foreground-3)",
                n ? "auto" : "var(--color-foreground-1)",
              ],
            },
            [
              ".node-actions-menu.__jsx-style-dynamic-selector{position:relative;width:20px;height:100%;}",
              ".is-touch-device .protip.__jsx-style-dynamic-selector{display:none;}",
              ".protip.__jsx-style-dynamic-selector{font-size:13px;padding:10px 5px;text-align:center;color:var(--color-foreground-1);border-top:1px solid var(--color-foreground-3);}",
              ".protip.__jsx-style-dynamic-selector>span.__jsx-style-dynamic-selector{color:var(--color-positive-1);font-weight:var(--font-weight-bold);font-size:12px;}",
              "button.__jsx-style-dynamic-selector{top:0;width:100%;height:100%;display:block;background-color:transparent;border:0 none;cursor:pointer;color:".concat(
                n ? "var(--color-white)" : "var(--color-foreground-3)",
                ";border-radius:var(--border-radius-1);}"
              ),
              "button.__jsx-style-dynamic-selector:hover{color:".concat(
                n ? "auto" : "var(--color-foreground-1)",
                ";}"
              ),
              "button.__jsx-style-dynamic-selector:focus{outline:none;}",
              "ul.__jsx-style-dynamic-selector{width:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:var(--color-background-1);border:1px solid var(--color-control-2);border-radius:var(--border-radius-1);list-style:none;position:absolute;right:var(--spacing-1);top:calc(100% - var(--spacing-1));z-index:1;}",
              "ul.__jsx-style-dynamic-selector:focus{outline:none;}",
            ]
          )
        );
      });
    },
    "kx/0": function (e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return c;
      });
      const r = n("q1tI"), a = n.n(r), o = n("pDQI"), i = a.a.createElement;
      function c(e) {
        return i(
          o.a,
          e,
          i("path", {
            d:
              "M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9M13 2L20 9M13 2V9H20",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          })
        );
      }
    },
    rg44(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return c;
      });
      const r = n("q1tI"), a = n.n(r), o = n("pDQI"), i = a.a.createElement;
      function c(e) {
        return i(
          o.a,
          e,
          i("path", {
            d:
              "M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
          i("path", {
            d: "M15 3H21V9",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
          i("path", {
            d: "M10 14L21 3",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          })
        );
      }
    },
    sMwv(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return s;
      });
      const r = n("doui"), a = n("q1tI"), o = n("nOHt"), i = n("VoYB"), c = n("tZOq"), u = n("Z+Ew"), l = n("zgDP");
      function s() {
        let e;
        let t;
        let n;

        const s = (arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : {}
        ).onFork;

        const d = Object(o.useRouter)();
        const f = Object(i.a)().showError;

        const p = Object(c.ic)({
          onCompleted(e) {
            const t =
              "Repl" ===
              (null === e || void 0 === e ? void 0 : e.createRepl.__typename)
                ? e.createRepl
                : null;
            t &&
              (s && s(),
              d.push(
                { pathname: Object(u.a)(), query: { replUrl: t.url } },
                { pathname: t.url }
              ));
          },
        });

        const b = Object(r.a)(p, 2);
        const v = b[0];
        const g = b[1];

        const h =
          "UserError" ===
          (null === (e = g.data) || void 0 === e
            ? void 0
            : e.createRepl.__typename)
            ? null === (t = g.data) || void 0 === t
              ? void 0
              : t.createRepl.message
            : null === (n = g.error) || void 0 === n
            ? void 0
            : n.message;

        return a.useEffect(
          () => {
            h && f(h);
          },
          [h, f]
        ),
        [
          a.useCallback(
            (e, t) => {
              const n = t.trackingData;
              v({ variables: { input: { originId: e } } }),
                Object(l.track)(l.events.REPL_FORKED, n);
            },
            [v]
          ),
          { loading: g.loading },
        ];
      }
    },
    yz3v(e) {
      e.exports = JSON.parse(
        '{"name":"ace-builds","main":"./src-noconflict/ace.js","typings":"ace.d.ts","version":"1.4.11","description":"Ace (Ajax.org Cloud9 Editor)","scripts":{"test":"echo \\"Error: no test specified\\" && exit 1"},"repository":{"type":"git","url":"https://github.com/ajaxorg/ace-builds.git"},"author":"","license":"BSD-3-Clause","bugs":{"url":"https://github.com/ajaxorg/ace-builds/issues"},"homepage":"https://github.com/ajaxorg/ace-builds"}'
      );
    },
  },
]);
//# sourceMappingURL=94d059c8193bc5a25ad9dd5787fbaf926d657344.7518f3c7a8089ecb8b01.js.map
