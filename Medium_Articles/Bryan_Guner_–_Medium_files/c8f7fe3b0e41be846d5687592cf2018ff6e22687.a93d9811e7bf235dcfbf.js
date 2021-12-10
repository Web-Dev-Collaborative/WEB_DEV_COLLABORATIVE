(window.webpackJsonp = window.webpackJsonp || []).push([
  [31],
  {
    "1FcE": function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "CompletionContext", () => {
          return a;
        }),
        n.d(e, "acceptCompletion", () => {
          return $;
        }),
        n.d(e, "autocompletion", () => {
          return pt;
        }),
        n.d(e, "clearSnippet", () => {
          return st;
        }),
        n.d(e, "closeCompletion", () => {
          return V;
        }),
        n.d(e, "completeAnyWord", () => {
          return dt;
        }),
        n.d(e, "completeFromList", () => {
          return c;
        }),
        n.d(e, "completionKeymap", () => {
          return mt;
        }),
        n.d(e, "completionStatus", () => {
          return bt;
        }),
        n.d(e, "currentCompletions", () => {
          return xt;
        }),
        n.d(e, "ifNotIn", () => {
          return u;
        }),
        n.d(e, "moveCompletionSelection", () => {
          return z;
        }),
        n.d(e, "nextSnippetField", () => {
          return ot;
        }),
        n.d(e, "prevSnippetField", () => {
          return lt;
        }),
        n.d(e, "snippet", () => {
          return it;
        }),
        n.d(e, "snippetCompletion", () => {
          return ut;
        }),
        n.d(e, "snippetKeymap", () => {
          return ht;
        }),
        n.d(e, "startCompletion", () => {
          return q;
        });
      const i = n("fK0Z"), r = n("4eob"), s = n("uZp5"), o = n("AtEE"), l = n("yqQ+");
      class a {
        constructor(t, e, n) {
          (this.state = t),
            (this.pos = e),
            (this.explicit = n),
            (this.abortListeners = []);
        }
        tokenBefore(t) {
          let e = Object(l.syntaxTree)(this.state).resolve(this.pos, -1);
          for (; e && t.indexOf(e.name) < 0; ) e = e.parent;
          return e
            ? {
                from: e.from,
                to: this.pos,
                text: this.state.sliceDoc(e.from, this.pos),
                type: e.type,
              }
            : null;
        }
        matchBefore(t) {
          let e = this.state.doc.lineAt(this.pos),
            n = Math.max(e.from, this.pos - 250),
            i = e.text.slice(n - e.from, this.pos - e.from),
            r = i.search(p(t, !1));
          return r < 0 ? null : { from: n + r, to: this.pos, text: i.slice(r) };
        }
        get aborted() {
          return null == this.abortListeners;
        }
        addEventListener(t, e) {
          "abort" == t && this.abortListeners && this.abortListeners.push(e);
        }
      }
      function h(t) {
        let e = Object.keys(t).join(""),
          n = /\w/.test(e);
        return (
          n && (e = e.replace(/\w/g, "")),
          `[${n ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`
        );
      }
      function c(t) {
        let e = t.map((t) => ("string" == typeof t ? { label: t } : t)),
          [n, i] = e.every((t) => /^\w+$/.test(t.label)) ? [/\w*$/, /\w+$/] : (t => {
                let e = Object.create(null),
                  n = Object.create(null);
                for (let { label: r } of t) {
                  e[r[0]] = !0;
                  for (let t = 1; t < r.length; t++) n[r[t]] = !0;
                }
                let i = h(e) + h(n) + "*$";
                return [new RegExp("^" + i), new RegExp(i)];
              })(e);
        return (t) => {
          let r = t.matchBefore(i);
          return r || t.explicit
            ? { from: r ? r.from : t.pos, options: e, span: n }
            : null;
        };
      }
      function u(t, e) {
        return (n) => {
          for (
            let e = Object(l.syntaxTree)(n.state).resolve(n.pos, -1);
            e;
            e = e.parent
          )
            if (t.indexOf(e.name) > -1) return null;
          return e(n);
        };
      }
      class f {
        constructor(t, e, n) {
          (this.completion = t), (this.source = e), (this.match = n);
        }
      }
      function d(t) {
        return t.selection.main.head;
      }
      function p(t, e) {
        let n;
        let { source: i } = t,
          r = e && "^" != i[0],
          s = "$" != i[i.length - 1];
        return r || s
          ? new RegExp(
              `${r ? "^" : ""}(?:${i})${s ? "$" : ""}`,
              null !== (n = t.flags) && void 0 !== n
                ? n
                : t.ignoreCase
                ? "i"
                : ""
            )
          : t;
      }
      function m(t, e) {
        let n = e.completion.apply || e.completion.label,
          i = e.source;
        "string" == typeof n
          ? t.dispatch({
              changes: { from: i.from, to: i.to, insert: n },
              selection: { anchor: i.from + n.length },
            })
          : n(t, e.completion, i.from, i.to);
      }
      const g = new WeakMap();
      function b(t) {
        if (!Array.isArray(t)) return t;
        let e = g.get(t);
        return e || g.set(t, (e = c(t))), e;
      }
      class x {
        constructor(t) {
          (this.pattern = t),
            (this.chars = []),
            (this.folded = []),
            (this.any = []),
            (this.precise = []),
            (this.byWord = []);
          for (let e = 0; e < t.length; ) {
            let n = Object(s.b)(t, e),
              i = Object(s.c)(n);
            this.chars.push(n);
            let r = t.slice(e, e + i),
              o = r.toUpperCase();
            this.folded.push(Object(s.b)(o == r ? r.toLowerCase() : o, 0)),
              (e += i);
          }
          this.astral = t.length != this.chars.length;
        }
        match(t) {
          if (0 == this.pattern.length) return [0];
          if (t.length < this.pattern.length) return null;
          let { chars: e, folded: n, any: i, precise: r, byWord: o } = this;
          if (1 == e.length) {
            let i = Object(s.b)(t, 0);
            return i == e[0]
              ? [0, 0, Object(s.c)(i)]
              : i == n[0]
              ? [-200, 0, Object(s.c)(i)]
              : null;
          }
          let l = t.indexOf(this.pattern);
          if (0 == l) return [0, 0, this.pattern.length];
          let a = e.length,
            h = 0;
          if (l < 0) {
            for (let r = 0, o = Math.min(t.length, 200); r < o && h < a; ) {
              let o = Object(s.b)(t, r);
              (o != e[h] && o != n[h]) || (i[h++] = r), (r += Object(s.c)(o));
            }
            if (h < a) return null;
          }
          let c = 0,
            u = 0,
            f = !1,
            d = 0,
            p = -1,
            m = -1,
            g = /[a-z]/.test(t);
          for (
            let b = 0, x = Math.min(t.length, 200), k = 0;
            b < x && u < a;

          ) {
            let i = Object(s.b)(t, b);
            l < 0 &&
              (c < a && i == e[c] && (r[c++] = b),
              d < a &&
                (i == e[d] || i == n[d]
                  ? (0 == d && (p = b), (m = b), d++)
                  : (d = 0)));
            let h,
              x =
                i < 255
                  ? (i >= 48 && i <= 57) || (i >= 97 && i <= 122)
                    ? 2
                    : i >= 65 && i <= 90
                    ? 1
                    : 0
                  : (h = Object(s.g)(i)) != h.toLowerCase()
                  ? 1
                  : h != h.toUpperCase()
                  ? 2
                  : 0;
            ((1 == x && g) || (0 == k && 0 != x)) &&
              (e[u] == i || (n[u] == i && (f = !0))) &&
              (o[u++] = b),
              (k = x),
              (b += Object(s.c)(i));
          }
          return u == a && 0 == o[0]
            ? this.result((f ? -200 : 0) - 100, o, t)
            : d == a && 0 == p
            ? [-200, 0, m]
            : l > -1
            ? [-700, l, l + this.pattern.length]
            : d == a
            ? [-900, p, m]
            : u == a
            ? this.result((f ? -200 : 0) - 100 - 700, o, t)
            : 2 == e.length
            ? null
            : this.result((i[0] ? -700 : 0) - 200 - 1100, i, t);
        }
        result(t, e, n) {
          let i = [t],
            r = 1;
          for (let o of e) {
            let t = o + (this.astral ? Object(s.c)(Object(s.b)(n, o)) : 1);
            r > 1 && i[r - 1] == o
              ? (i[r - 1] = t)
              : ((i[r++] = o), (i[r++] = t));
          }
          return i;
        }
      }
      const k = r.Facet.define({
          combine: (t) =>
            Object(r.combineConfig)(
              t,
              {
                activateOnTyping: !0,
                override: null,
                maxRenderedOptions: 100,
                defaultKeymap: !0,
              },
              { defaultKeymap: (t, e) => t && e }
            ),
        }),
        w = 300,
        v = o.EditorView.baseTheme({
          ".cm-tooltip.cm-tooltip-autocomplete": {
            "& > ul": {
              fontFamily: "monospace",
              overflowY: "auto",
              whiteSpace: "nowrap",
              maxHeight: "10em",
              listStyle: "none",
              margin: 0,
              padding: 0,
              "& > li": {
                cursor: "pointer",
                padding: "1px 1em 1px 3px",
                lineHeight: 1.2,
              },
              "& > li[aria-selected]": {
                background_fallback: "#bdf",
                backgroundColor: "Highlight",
                color_fallback: "white",
                color: "HighlightText",
              },
            },
          },
          ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
            content: '"\xb7\xb7\xb7"',
            opacity: 0.5,
            display: "block",
            textAlign: "center",
          },
          ".cm-tooltip.cm-completionInfo": {
            position: "absolute",
            padding: "3px 9px",
            width: "max-content",
            maxWidth: w + "px",
          },
          ".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
          ".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
          "&light .cm-snippetField": { backgroundColor: "#00000022" },
          "&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
          ".cm-snippetFieldPosition": {
            verticalAlign: "text-top",
            width: 0,
            height: "1.15em",
            margin: "0 -0.7px -.7em",
            borderLeft: "1.4px dotted #888",
          },
          ".cm-completionMatchedText": { textDecoration: "underline" },
          ".cm-completionDetail": { marginLeft: "0.5em", fontStyle: "italic" },
          ".cm-completionIcon": {
            fontSize: "90%",
            width: ".8em",
            display: "inline-block",
            textAlign: "center",
            paddingRight: ".6em",
            opacity: "0.6",
          },
          ".cm-completionIcon-function, .cm-completionIcon-method": {
            "&:after": { content: "'\u0192'" },
          },
          ".cm-completionIcon-class": { "&:after": { content: "'\u25cb'" } },
          ".cm-completionIcon-interface": {
            "&:after": { content: "'\u25cc'" },
          },
          ".cm-completionIcon-variable": {
            "&:after": { content: "'\ud835\udc65'" },
          },
          ".cm-completionIcon-constant": {
            "&:after": { content: "'\ud835\udc36'" },
          },
          ".cm-completionIcon-type": {
            "&:after": { content: "'\ud835\udc61'" },
          },
          ".cm-completionIcon-enum": { "&:after": { content: "'\u222a'" } },
          ".cm-completionIcon-property": { "&:after": { content: "'\u25a1'" } },
          ".cm-completionIcon-keyword": {
            "&:after": { content: "'\ud83d\udd11\ufe0e'" },
          },
          ".cm-completionIcon-namespace": {
            "&:after": { content: "'\u25a2'" },
          },
          ".cm-completionIcon-text": {
            "&:after": {
              content: "'abc'",
              fontSize: "50%",
              verticalAlign: "middle",
            },
          },
        });
      function y(t, e, n) {
        const i = document.createElement("ul");
        (i.id = e),
          i.setAttribute("role", "listbox"),
          i.setAttribute("aria-expanded", "true");
        for (let r = n.from; r < n.to; r++) {
          let { completion: n, match: s } = t[r];
          const o = i.appendChild(document.createElement("li"));
          o.id = e + "-" + r;
          let l = o.appendChild(document.createElement("div"));
          l.classList.add("cm-completionIcon"),
            n.type && l.classList.add("cm-completionIcon-" + n.type),
            l.setAttribute("aria-hidden", "true");
          let a = o.appendChild(document.createElement("span"));
          a.className = "cm-completionLabel";
          let { label: h, detail: c } = n,
            u = 0;
          for (let t = 1; t < s.length; ) {
            let e = s[t++],
              n = s[t++];
            e > u && a.appendChild(document.createTextNode(h.slice(u, e)));
            let i = a.appendChild(document.createElement("span"));
            i.appendChild(document.createTextNode(h.slice(e, n))),
              (i.className = "cm-completionMatchedText"),
              (u = n);
          }
          if (
            (u < h.length && a.appendChild(document.createTextNode(h.slice(u))),
            c)
          ) {
            let t = o.appendChild(document.createElement("span"));
            (t.className = "cm-completionDetail"), (t.textContent = c);
          }
          o.setAttribute("role", "option");
        }
        return (
          n.from && i.classList.add("cm-completionListIncompleteTop"),
          n.to < t.length &&
            i.classList.add("cm-completionListIncompleteBottom"),
          i
        );
      }
      function S(t, e, n) {
        if (t <= n) return { from: 0, to: t };
        if (e <= t >> 1) {
          let t = Math.floor(e / n);
          return { from: t * n, to: (t + 1) * n };
        }
        let i = Math.floor((t - e) / n);
        return { from: t - (i + 1) * n, to: t - i * n };
      }
      class C {
        constructor(t, e) {
          (this.view = t),
            (this.stateField = e),
            (this.info = null),
            (this.placeInfo = {
              read: () => this.measureInfo(),
              write: (t) => this.positionInfo(t),
              key: this,
            });
          let n = t.state.field(e),
            { options: i, selected: r } = n.open,
            s = t.state.facet(k);
          (this.range = S(i.length, r, s.maxRenderedOptions)),
            (this.dom = document.createElement("div")),
            this.dom.addEventListener("mousedown", (e) => {
              for (let n, r = e.target; r && r != this.dom; r = r.parentNode)
                if (
                  "LI" == r.nodeName &&
                  (n = /-(\d+)$/.exec(r.id)) &&
                  +n[1] < i.length
                )
                  return m(t, i[+n[1]]), void e.preventDefault();
            }),
            (this.list = this.dom.appendChild(y(i, n.id, this.range))),
            this.list.addEventListener("scroll", () => {
              this.info && this.view.requestMeasure(this.placeInfo);
            });
        }
        mount() {
          this.updateSel();
        }
        update(t) {
          t.state.field(this.stateField) !=
            t.startState.field(this.stateField) && this.updateSel();
        }
        positioned() {
          this.info && this.view.requestMeasure(this.placeInfo);
        }
        updateSel() {
          let t = this.view.state.field(this.stateField),
            e = t.open;
          if (
            ((e.selected < this.range.from || e.selected >= this.range.to) &&
              ((this.range = S(
                e.options.length,
                e.selected,
                this.view.state.facet(k).maxRenderedOptions
              )),
              this.list.remove(),
              (this.list = this.dom.appendChild(
                y(e.options, t.id, this.range)
              )),
              this.list.addEventListener("scroll", () => {
                this.info && this.view.requestMeasure(this.placeInfo);
              })),
            this.updateSelectedOption(e.selected))
          ) {
            this.info && (this.info.remove(), (this.info = null));
            let t = e.options[e.selected];
            t.completion.info &&
              ((this.info = this.dom.appendChild((t => {
              let e = document.createElement("div");
              e.className = "cm-tooltip cm-completionInfo";
              let { info: n } = t.completion;
              return (
                "string" == typeof n
                  ? (e.textContent = n)
                  : e.appendChild(n(t.completion)),
                e
              );
            })(t))),
              this.view.requestMeasure(this.placeInfo));
          }
        }
        updateSelectedOption(t) {
          let e = null;
          for (
            let n = this.list.firstChild, i = this.range.from;
            n;
            n = n.nextSibling, i++
          )
            i == t
              ? n.hasAttribute("aria-selected") ||
                (n.setAttribute("aria-selected", "true"), (e = n))
              : n.hasAttribute("aria-selected") &&
                n.removeAttribute("aria-selected");
          return e && ((t, e) => {
            let n = t.getBoundingClientRect(),
              i = e.getBoundingClientRect();
            i.top < n.top
              ? (t.scrollTop -= n.top - i.top)
              : i.bottom > n.bottom && (t.scrollTop += i.bottom - n.bottom);
          })(this.list, e),
          e
        ;
        }
        measureInfo() {
          let t = this.dom.querySelector("[aria-selected]");
          if (!t) return null;
          let e = this.dom.getBoundingClientRect(),
            n = t.getBoundingClientRect().top - e.top;
          if (n < 0 || n > this.list.clientHeight - 10) return null;
          let i = this.view.textDirection == o.Direction.RTL,
            r = e.left,
            s = innerWidth - e.right;
          return (
            i && r < Math.min(w, s)
              ? (i = !1)
              : !i && s < Math.min(w, r) && (i = !0),
            { top: n, left: i }
          );
        }
        positionInfo(t) {
          this.info &&
            t &&
            ((this.info.style.top = t.top + "px"),
            this.info.classList.toggle("cm-completionInfo-left", t.left),
            this.info.classList.toggle("cm-completionInfo-right", !t.left));
        }
      }
      const A = 300;
      function L(t) {
        return (
          100 * (t.boost || 0) +
          (t.apply ? 10 : 0) +
          (t.info ? 5 : 0) +
          (t.type ? 1 : 0)
        );
      }
      class T {
        constructor(t, e, n, i, r) {
          (this.options = t),
            (this.attrs = e),
            (this.tooltip = n),
            (this.timestamp = i),
            (this.selected = r);
        }
        setSelected(t, e) {
          return t == this.selected || t >= this.options.length
            ? this
            : new T(this.options, I(e, t), this.tooltip, this.timestamp, t);
        }
        static build(t, e, n, i) {
          let r = ((t, e) => {
            let n = [];
            for (let s of t)
              if (s.hasResult()) {
                let t,
                  i = new x(e.sliceDoc(s.from, s.to));
                for (let e of s.result.options)
                  (t = i.match(e.label)) &&
                    (null != e.boost && (t[0] += e.boost),
                    n.push(new f(e, s, t)));
              }
            n.sort(B);
            let i = [],
              r = null;
            for (let s of n.sort(B)) {
              if (i.length == A) break;
              r &&
              r.label == s.completion.label &&
              r.detail == s.completion.detail
                ? L(s.completion) > L(r) && (i[i.length - 1] = s)
                : i.push(s),
                (r = s.completion);
            }
            return i;
          })(t, e);
          if (!r.length) return null;
          let s = 0;
          if (i && i.selected) {
            let t = i.options[i.selected].completion;
            for (let e = 0; e < r.length && !s; e++)
              r[e].completion == t && (s = e);
          }
          return new T(
            r,
            I(n, s),
            [
              {
                pos: t.reduce(
                  (t, e) => (e.hasResult() ? Math.min(t, e.from) : t),
                  1e8
                ),
                class: "cm-tooltip-autocomplete",
                create: ((o = _), (t) => new C(t, o)),
              },
            ],
            i ? i.timestamp : Date.now(),
            s
          );
          var o;
        }
        map(t) {
          return new T(
            this.options,
            this.attrs,
            [
              Object.assign(Object.assign({}, this.tooltip[0]), {
                pos: t.mapPos(this.tooltip[0].pos),
              }),
            ],
            this.timestamp,
            this.selected
          );
        }
      }
      class E {
        constructor(t, e, n) {
          (this.active = t), (this.id = e), (this.open = n);
        }
        static start() {
          return new E(
            P,
            "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36),
            null
          );
        }
        update(t) {
          let { state: e } = t,
            n = e.facet(k),
            i = (
              n.override || e.languageDataAt("autocomplete", d(e)).map(b)
            ).map((e) => {
              return (
                this.active.find((t) => t.source == e) || new N(e, 0, !1)
              ).update(t, n);
            });
          i.length == this.active.length &&
            i.every((t, e) => t == this.active[e]) &&
            (i = this.active);
          let r =
            t.selection ||
            i.some(
              (e) => e.hasResult() && t.changes.touchesRange(e.from, e.to)
            ) ||
            !((t, e) => {
              if (t == e) return !0;
              for (let n = 0, i = 0; ; ) {
                for (; n < t.length && !t[n].hasResult; ) n++;
                for (; i < e.length && !e[i].hasResult; ) i++;
                let r = n == t.length,
                  s = i == e.length;
                if (r || s) return r == s;
                if (t[n++].result != e[i++].result) return !1;
              }
            })(i, this.active)
              ? T.build(i, e, this.id, this.open)
              : this.open && t.docChanged
              ? this.open.map(t.changes)
              : this.open;
          for (let s of t.effects)
            s.is(R) && (r = r && r.setSelected(s.value, this.id));
          return i == this.active && r == this.open
            ? this
            : new E(i, this.id, r);
        }
        get tooltip() {
          return this.open ? this.open.tooltip : P;
        }
        get attrs() {
          return this.open ? this.open.attrs : M;
        }
      }
      function I(t, e) {
        return {
          "aria-autocomplete": "list",
          "aria-activedescendant": t + "-" + e,
          "aria-owns": t,
        };
      }
      const M = { "aria-autocomplete": "list" },
        P = [];
      function B(t, e) {
        let n = e.match[0] - t.match[0];
        if (n) return n;
        let i = t.completion.label,
          r = e.completion.label;
        return i < r ? -1 : i == r ? 0 : 1;
      }
      class N {
        constructor(t, e, n) {
          (this.source = t), (this.state = e), (this.explicit = n);
        }
        hasResult() {
          return !1;
        }
        update(t, e) {
          let n = t.annotation(r.Transaction.userEvent),
            i = this;
          "input" == n || "delete" == n
            ? (i = i.handleUserEvent(t, n, e))
            : t.docChanged
            ? (i = i.handleChange(t))
            : t.selection && 0 != i.state && (i = new N(i.source, 0, !1));
          for (let r of t.effects)
            if (r.is(H)) i = new N(i.source, 1, r.value);
            else if (r.is(D)) i = new N(i.source, 0, !1);
            else if (r.is(j))
              for (let t of r.value) t.source == i.source && (i = t);
          return i;
        }
        handleUserEvent(t, e, n) {
          return "delete" != e && n.activateOnTyping
            ? new N(this.source, 1, !1)
            : this;
        }
        handleChange(t) {
          return t.changes.touchesRange(d(t.startState))
            ? new N(this.source, 0, !1)
            : this;
        }
      }
      class O extends N {
        constructor(t, e, n, i, r, s) {
          super(t, 2, e),
            (this.result = n),
            (this.from = i),
            (this.to = r),
            (this.span = s);
        }
        hasResult() {
          return !0;
        }
        handleUserEvent(t, e, n) {
          let i = t.changes.mapPos(this.from),
            r = t.changes.mapPos(this.to, 1),
            s = d(t.state);
          return (this.explicit ? s < i : s <= i) || s > r
            ? new N(this.source, "input" == e && n.activateOnTyping ? 1 : 0, !1)
            : this.span && (i == r || this.span.test(t.state.sliceDoc(i, r)))
            ? new O(this.source, this.explicit, this.result, i, r, this.span)
            : new N(this.source, 1, this.explicit);
        }
        handleChange(t) {
          return t.changes.touchesRange(this.from, this.to)
            ? new N(this.source, 0, !1)
            : new O(
                this.source,
                this.explicit,
                this.result,
                t.changes.mapPos(this.from),
                t.changes.mapPos(this.to, 1),
                this.span
              );
        }
        map(t) {
          return new O(
            this.source,
            this.explicit,
            this.result,
            t.mapPos(this.from),
            t.mapPos(this.to, 1),
            this.span
          );
        }
      }
      const H = r.StateEffect.define(),
        D = r.StateEffect.define(),
        j = r.StateEffect.define({
          map: (t, e) =>
            t.map((t) => (t.hasResult() && !e.empty ? t.map(e) : t)),
        }),
        R = r.StateEffect.define(),
        _ = r.StateField.define({
          create: () => E.start(),
          update: (t, e) => t.update(e),
          provide: (t) => [
            i.b.computeN([t], (e) => e.field(t).tooltip),
            o.EditorView.contentAttributes.from(t, (t) => t.attrs),
          ],
        }),
        F = 75;
      function z(t, e = "option") {
        return (n) => {
          let i = n.state.field(_, !1);
          if (!i || !i.open || Date.now() - i.open.timestamp < F) return !1;
          let r,
            s = 1;
          "page" == e &&
            (r = n.dom.querySelector(".cm-tooltip-autocomplete")) &&
            (s = Math.max(
              2,
              Math.floor(r.offsetHeight / r.firstChild.offsetHeight)
            ));
          let o = i.open.selected + s * (t ? 1 : -1),
            { length: l } = i.open.options;
          return (
            o < 0
              ? (o = "page" == e ? 0 : l - 1)
              : o >= l && (o = "page" == e ? l - 1 : 0),
            n.dispatch({ effects: R.of(o) }),
            !0
          );
        };
      }
      const $ = (t) => {
          let e = t.state.field(_, !1);
          return (
            !(!e || !e.open || Date.now() - e.open.timestamp < F) &&
            (m(t, e.open.options[e.open.selected]), !0)
          );
        },
        q = (t) => {
          return (
            !!t.state.field(_, !1) && (t.dispatch({ effects: H.of(!0) }), !0)
          );
        },
        V = (t) => {
          let e = t.state.field(_, !1);
          return (
            !(!e || !e.active.some((t) => 0 != t.state)) &&
            (t.dispatch({ effects: D.of(null) }), !0)
          );
        };
      class W {
        constructor(t, e) {
          (this.source = t),
            (this.context = e),
            (this.time = Date.now()),
            (this.updates = []),
            (this.done = void 0);
        }
      }
      const U = o.ViewPlugin.fromClass(
        class {
          constructor(t) {
            (this.view = t),
              (this.debounceUpdate = -1),
              (this.running = []),
              (this.debounceAccept = -1),
              (this.composing = 0);
            for (let e of t.state.field(_).active)
              1 == e.state && this.startQuery(e);
          }
          update(t) {
            let e = t.state.field(_);
            if (!t.selectionSet && !t.docChanged && t.startState.field(_) == e)
              return;
            let n = t.transactions.some((t) => {
              let e = t.annotation(r.Transaction.userEvent);
              return (
                (t.selection || t.docChanged) && "input" != e && "delete" != e
              );
            });
            for (let r = 0; r < this.running.length; r++) {
              let e = this.running[r];
              if (
                n ||
                (e.updates.length + t.transactions.length > 50 &&
                  e.time - Date.now() > 1e3)
              ) {
                for (let t of e.context.abortListeners)
                  try {
                    t();
                  } catch (i) {
                    Object(o.logException)(this.view.state, i);
                  }
                (e.context.abortListeners = null), this.running.splice(r--, 1);
              } else e.updates.push(...t.transactions);
            }
            if (
              (this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate),
              (this.debounceUpdate = e.active.some(
                (t) =>
                  1 == t.state &&
                  !this.running.some((e) => e.source == t.source)
              )
                ? setTimeout(() => this.startUpdate(), 50)
                : -1),
              0 != this.composing)
            )
              for (let s of t.transactions)
                "input" == s.annotation(r.Transaction.userEvent)
                  ? (this.composing = 2)
                  : 2 == this.composing && s.selection && (this.composing = 3);
          }
          startUpdate() {
            this.debounceUpdate = -1;
            let { state: t } = this.view,
              e = t.field(_);
            for (let n of e.active)
              1 != n.state ||
                this.running.some((t) => t.source == n.source) ||
                this.startQuery(n);
          }
          startQuery(t) {
            let { state: e } = this.view,
              n = d(e),
              i = new a(e, n, t.explicit),
              r = new W(t.source, i);
            this.running.push(r),
              Promise.resolve(t.source(i)).then(
                (t) => {
                  r.context.aborted ||
                    ((r.done = t || null), this.scheduleAccept());
                },
                (t) => {
                  this.view.dispatch({ effects: D.of(null) }),
                    Object(o.logException)(this.view.state, t);
                }
              );
          }
          scheduleAccept() {
            this.running.every((t) => void 0 !== t.done)
              ? this.accept()
              : this.debounceAccept < 0 &&
                (this.debounceAccept = setTimeout(() => this.accept(), 50));
          }
          accept() {
            var t;
            this.debounceAccept > -1 && clearTimeout(this.debounceAccept),
              (this.debounceAccept = -1);
            let e = [],
              n = this.view.state.facet(k);
            for (let i = 0; i < this.running.length; i++) {
              let r = this.running[i];
              if (void 0 === r.done) continue;
              if ((this.running.splice(i--, 1), r.done)) {
                let i = new O(
                  r.source,
                  r.context.explicit,
                  r.done,
                  r.done.from,
                  null !== (t = r.done.to) && void 0 !== t
                    ? t
                    : d(
                        r.updates.length
                          ? r.updates[0].startState
                          : this.view.state
                      ),
                  r.done.span ? p(r.done.span, !0) : null
                );
                for (let t of r.updates) i = i.update(t, n);
                if (i.hasResult()) {
                  e.push(i);
                  continue;
                }
              }
              let s = this.view.state
                .field(_)
                .active.find((t) => t.source == r.source);
              if (s && 1 == s.state)
                if (null == r.done) {
                  let t = new N(r.source, 0, !1);
                  for (let e of r.updates) t = t.update(e, n);
                  1 != t.state && e.push(t);
                } else this.startQuery(s);
            }
            e.length && this.view.dispatch({ effects: j.of(e) });
          }
        },
        {
          eventHandlers: {
            compositionstart() {
              this.composing = 1;
            },
            compositionend() {
              3 == this.composing && this.view.dispatch({ effects: H.of(!1) }),
                (this.composing = 0);
            },
          },
        }
      );
      class X {
        constructor(t, e, n, i) {
          (this.field = t), (this.line = e), (this.from = n), (this.to = i);
        }
      }
      class Q {
        constructor(t, e, n) {
          (this.field = t), (this.from = e), (this.to = n);
        }
        map(t) {
          return new Q(
            this.field,
            t.mapPos(this.from, -1),
            t.mapPos(this.to, 1)
          );
        }
      }
      class K {
        constructor(t, e) {
          (this.lines = t), (this.fieldPositions = e);
        }
        instantiate(t, e) {
          let n = [],
            i = [e],
            r = t.doc.lineAt(e),
            s = /^\s*/.exec(r.text)[0];
          for (let o of this.lines) {
            if (n.length) {
              let n = s,
                r = /^\t*/.exec(o)[0].length;
              for (let e = 0; e < r; e++) n += t.facet(l.indentUnit);
              i.push(e + n.length - r), (o = n + o.slice(r));
            }
            n.push(o), (e += o.length + 1);
          }
          return {
            text: n,
            ranges: this.fieldPositions.map(
              (t) => new Q(t.field, i[t.line] + t.from, i[t.line] + t.to)
            ),
          };
        }
        static parse(t) {
          let e,
            n = [],
            i = [],
            r = [];
          for (let s of t.split(/\r\n?|\n/)) {
            for (; (e = /[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(s)); ) {
              let t = e[1] ? +e[1] : null,
                o = e[2] || e[3],
                l = -1;
              for (let e = 0; e < n.length; e++)
                (o ? n[e].name == o : null != t && n[e].seq == t) && (l = e);
              if (l < 0) {
                let e = 0;
                for (
                  ;
                  e < n.length &&
                  (null == t || (null != n[e].seq && n[e].seq < t));

                )
                  e++;
                n.splice(e, 0, { seq: t, name: o || null }), (l = e);
              }
              r.push(new X(l, i.length, e.index, e.index + o.length)),
                (s = s.slice(0, e.index) + o + s.slice(e.index + e[0].length));
            }
            i.push(s);
          }
          return new K(i, r);
        }
      }
      let Z = o.Decoration.widget({
          widget: new (class extends o.WidgetType {
            toDOM() {
              let t = document.createElement("span");
              return (t.className = "cm-snippetFieldPosition"), t;
            }
            ignoreEvent() {
              return !1;
            }
          })(),
        }),
        J = o.Decoration.mark({ class: "cm-snippetField" });
      class Y {
        constructor(t, e) {
          (this.ranges = t),
            (this.active = e),
            (this.deco = o.Decoration.set(
              t.map((t) => (t.from == t.to ? Z : J).range(t.from, t.to))
            ));
        }
        map(t) {
          return new Y(
            this.ranges.map((e) => e.map(t)),
            this.active
          );
        }
        selectionInsideField(t) {
          return t.ranges.every((t) =>
            this.ranges.some(
              (e) => e.field == this.active && e.from <= t.from && e.to >= t.to
            )
          );
        }
      }
      const G = r.StateEffect.define({ map: (t, e) => t && t.map(e) }),
        tt = r.StateEffect.define(),
        et = r.StateField.define({
          create: () => null,
          update(t, e) {
            for (let n of e.effects) {
              if (n.is(G)) return n.value;
              if (n.is(tt) && t) return new Y(t.ranges, n.value);
            }
            return (
              t && e.docChanged && (t = t.map(e.changes)),
              t &&
                e.selection &&
                !t.selectionInsideField(e.selection) &&
                (t = null),
              t
            );
          },
          provide: (t) =>
            o.EditorView.decorations.from(t, (t) =>
              t ? t.deco : o.Decoration.none
            ),
        });
      function nt(t, e) {
        return r.EditorSelection.create(
          t
            .filter((t) => t.field == e)
            .map((t) => r.EditorSelection.range(t.from, t.to))
        );
      }
      function it(t) {
        let e = K.parse(t);
        return (t, n, i, o) => {
          let { text: l, ranges: a } = e.instantiate(t.state, i),
            h = { changes: { from: i, to: o, insert: s.a.of(l) } };
          if ((a.length && (h.selection = nt(a, 0)), a.length > 1)) {
            let e = (h.effects = [G.of(new Y(a, 0))]);
            void 0 === t.state.field(et, !1) &&
              e.push(r.StateEffect.appendConfig.of([et, ct, ft, v]));
          }
          t.dispatch(t.state.update(h));
        };
      }
      function rt(t) {
        return ({ state: e, dispatch: n }) => {
          let i = e.field(et, !1);
          if (!i || (t < 0 && 0 == i.active)) return !1;
          let r = i.active + t,
            s = t > 0 && !i.ranges.some((e) => e.field == r + t);
          return (
            n(
              e.update({
                selection: nt(i.ranges, r),
                effects: G.of(s ? null : new Y(i.ranges, r)),
              })
            ),
            !0
          );
        };
      }
      const st = ({ state: t, dispatch: e }) => {
          return (
            !!t.field(et, !1) && (e(t.update({ effects: G.of(null) })), !0)
          );
        },
        ot = rt(1),
        lt = rt(-1),
        at = [
          { key: "Tab", run: ot, shift: lt },
          { key: "Escape", run: st },
        ],
        ht = r.Facet.define({ combine: (t) => (t.length ? t[0] : at) }),
        ct = r.Prec.override(o.keymap.compute([ht], (t) => t.facet(ht)));
      function ut(t, e) {
        return Object.assign(Object.assign({}, e), { apply: it(t) });
      }
      const ft = o.EditorView.domEventHandlers({
          mousedown(t, e) {
            let n,
              i = e.state.field(et, !1);
            if (
              !i ||
              null == (n = e.posAtCoords({ x: t.clientX, y: t.clientY }))
            )
              return !1;
            let r = i.ranges.find((t) => t.from <= n && t.to >= n);
            return (
              !(!r || r.field == i.active) &&
              (e.dispatch({
                selection: nt(i.ranges, r.field),
                effects: G.of(
                  i.ranges.some((t) => t.field > r.field)
                    ? new Y(i.ranges, r.field)
                    : null
                ),
              }),
              !0)
            );
          },
        }),
        dt = (t) => {
          let e = [],
            n = Object.create(null),
            i = t.state.charCategorizer(t.pos),
            s = Math.max(0, t.pos - 5e4),
            o = Math.min(t.state.doc.length, s + 1e5),
            l = t.pos;
          for (let a = t.state.doc.iterRange(s, o), h = s; !a.next().done; ) {
            let { value: s } = a,
              o = -1;
            for (let a = 0; ; a++) {
              if (a < s.length && i(s[a]) == r.CharCategory.Word)
                o < 0 && (o = a);
              else if (o > -1) {
                if (h + o <= t.pos && h + a >= t.pos) l = h + o;
                else {
                  let t = s.slice(o, a);
                  n[t] || (e.push({ type: "text", label: t }), (n[t] = !0));
                }
                o = -1;
              }
              if (a == s.length) break;
            }
            h += s.length;
          }
          return { from: l, options: e, span: /^\w*/ };
        };
      function pt(t = {}) {
        return [_, k.of(t), U, gt, v, Object(i.c)()];
      }
      const mt = [
          { key: "Ctrl-Space", run: q },
          { key: "Escape", run: V },
          { key: "ArrowDown", run: z(!0) },
          { key: "ArrowUp", run: z(!1) },
          { key: "PageDown", run: z(!0, "page") },
          { key: "PageUp", run: z(!1, "page") },
          { key: "Enter", run: $ },
        ],
        gt = r.Prec.override(
          o.keymap.computeN([k], (t) => (t.facet(k).defaultKeymap ? [mt] : []))
        );
      function bt(t) {
        let e = t.field(_, !1);
        return e && e.active.some((t) => 1 == t.state)
          ? "pending"
          : e && e.active.some((t) => 0 != t.state)
          ? "active"
          : null;
      }
      function xt(t) {
        let e;
        let n = null === (e = t.field(_, !1)) || void 0 === e ? void 0 : e.open;
        return n ? n.options.map((t) => t.completion) : [];
      }
    },
    "87dK": function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "conf", () => {
          return r;
        }),
        n.d(e, "language", () => {
          return s;
        });
      const i = "undefined" === typeof monaco ? self.monaco : monaco;

      var r = {
        wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
        comments: { lineComment: "//", blockComment: ["/*", "*/"] },
        brackets: [
          ["{", "}"],
          ["[", "]"],
          ["(", ")"],
        ],
        onEnterRules: [
          {
            beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
            afterText: /^\s*\*\/$/,
            action: {
              indentAction: i.languages.IndentAction.IndentOutdent,
              appendText: " * ",
            },
          },
          {
            beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
            action: {
              indentAction: i.languages.IndentAction.None,
              appendText: " * ",
            },
          },
          {
            beforeText: /^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,
            action: {
              indentAction: i.languages.IndentAction.None,
              appendText: "* ",
            },
          },
          {
            beforeText: /^(\t|(\ \ ))*\ \*\/\s*$/,
            action: {
              indentAction: i.languages.IndentAction.None,
              removeText: 1,
            },
          },
        ],
        autoClosingPairs: [
          { open: "{", close: "}" },
          { open: "[", close: "]" },
          { open: "(", close: ")" },
          { open: '"', close: '"', notIn: ["string"] },
          { open: "'", close: "'", notIn: ["string", "comment"] },
          { open: "`", close: "`", notIn: ["string", "comment"] },
          { open: "/**", close: " */", notIn: ["string"] },
        ],
        folding: {
          markers: {
            start: new RegExp("^\\s*//\\s*#?region\\b"),
            end: new RegExp("^\\s*//\\s*#?endregion\\b"),
          },
        },
      };

      var s = {
        defaultToken: "invalid",
        tokenPostfix: ".ts",
        keywords: [
          "abstract",
          "as",
          "break",
          "case",
          "catch",
          "class",
          "continue",
          "const",
          "constructor",
          "debugger",
          "declare",
          "default",
          "delete",
          "do",
          "else",
          "enum",
          "export",
          "extends",
          "false",
          "finally",
          "for",
          "from",
          "function",
          "get",
          "if",
          "implements",
          "import",
          "in",
          "infer",
          "instanceof",
          "interface",
          "is",
          "keyof",
          "let",
          "module",
          "namespace",
          "new",
          "null",
          "package",
          "private",
          "protected",
          "public",
          "readonly",
          "require",
          "global",
          "return",
          "set",
          "static",
          "super",
          "switch",
          "symbol",
          "this",
          "throw",
          "true",
          "try",
          "type",
          "typeof",
          "unique",
          "var",
          "void",
          "while",
          "with",
          "yield",
          "async",
          "await",
          "of",
        ],
        typeKeywords: [
          "any",
          "boolean",
          "number",
          "object",
          "string",
          "undefined",
          "bigint",
          "never",
          "unknown",
        ],
        operators: [
          "<=",
          ">=",
          "==",
          "!=",
          "===",
          "!==",
          "=>",
          "+",
          "-",
          "**",
          "*",
          "/",
          "%",
          "++",
          "--",
          "<<",
          "</",
          ">>",
          ">>>",
          "&",
          "|",
          "^",
          "!",
          "~",
          "&&",
          "||",
          "??",
          "?",
          ":",
          "=",
          "+=",
          "-=",
          "*=",
          "**=",
          "/=",
          "%=",
          "<<=",
          ">>=",
          ">>>=",
          "&=",
          "|=",
          "^=",
          "@",
          "#",
        ],
        symbols: /[=><!~?:&|+\-*\/\^%#]+/,
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        digits: /\d+(_+\d+)*/,
        octaldigits: /[0-7]+(_+[0-7]+)*/,
        binarydigits: /[0-1]+(_+[0-1]+)*/,
        hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
        regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
        regexpesc: /\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,
        tokenizer: {
          root: [[/[{}]/, "delimiter.bracket"], { include: "common" }],
          common: [
            [
              /[a-z_$][\w$]*/,
              {
                cases: {
                  "@typeKeywords": "keyword",
                  "@keywords": "keyword",
                  "@default": "identifier",
                },
              },
            ],
            [/[A-Z][\w\$]*/, "type.identifier"],
            { include: "@whitespace" },
            [
              /\/(?=([^\\\/]|\\.)+\/([gimsuy]*)(\s*)(\.|;|,|\)|\]|\}|$))/,
              { token: "regexp", bracket: "@open", next: "@regexp" },
            ],
            [/[()\[\]]/, "@brackets"],
            [/[<>](?!@symbols)/, "@brackets"],
            [/!(?=([^=]|$))/, "delimiter"],
            [
              /@symbols/,
              { cases: { "@operators": "delimiter", "@default": "" } },
            ],
            [/(@digits)[eE]([\-+]?(@digits))?/, "number.float"],
            [/(@digits)\.(@digits)([eE][\-+]?(@digits))?/, "number.float"],
            [/0[xX](@hexdigits)n?/, "number.hex"],
            [/0[oO]?(@octaldigits)n?/, "number.octal"],
            [/0[bB](@binarydigits)n?/, "number.binary"],
            [/(@digits)n?/, "number"],
            [/[;,.]/, "delimiter"],
            [/"([^"\\]|\\.)*$/, "string.invalid"],
            [/'([^'\\]|\\.)*$/, "string.invalid"],
            [/"/, "string", "@string_double"],
            [/'/, "string", "@string_single"],
            [/`/, "string", "@string_backtick"],
          ],
          whitespace: [
            [/[ \t\r\n]+/, ""],
            [/\/\*\*(?!\/)/, "comment.doc", "@jsdoc"],
            [/\/\*/, "comment", "@comment"],
            [/\/\/.*$/, "comment"],
          ],
          comment: [
            [/[^\/*]+/, "comment"],
            [/\*\//, "comment", "@pop"],
            [/[\/*]/, "comment"],
          ],
          jsdoc: [
            [/[^\/*]+/, "comment.doc"],
            [/\*\//, "comment.doc", "@pop"],
            [/[\/*]/, "comment.doc"],
          ],
          regexp: [
            [
              /(\{)(\d+(?:,\d*)?)(\})/,
              [
                "regexp.escape.control",
                "regexp.escape.control",
                "regexp.escape.control",
              ],
            ],
            [
              /(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/,
              [
                "regexp.escape.control",
                { token: "regexp.escape.control", next: "@regexrange" },
              ],
            ],
            [
              /(\()(\?:|\?=|\?!)/,
              ["regexp.escape.control", "regexp.escape.control"],
            ],
            [/[()]/, "regexp.escape.control"],
            [/@regexpctl/, "regexp.escape.control"],
            [/[^\\\/]/, "regexp"],
            [/@regexpesc/, "regexp.escape"],
            [/\\\./, "regexp.invalid"],
            [
              /(\/)([gimsuy]*)/,
              [
                { token: "regexp", bracket: "@close", next: "@pop" },
                "keyword.other",
              ],
            ],
          ],
          regexrange: [
            [/-/, "regexp.escape.control"],
            [/\^/, "regexp.invalid"],
            [/@regexpesc/, "regexp.escape"],
            [/[^\]]/, "regexp"],
            [
              /\]/,
              {
                token: "regexp.escape.control",
                next: "@pop",
                bracket: "@close",
              },
            ],
          ],
          string_double: [
            [/[^\\"]+/, "string"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/"/, "string", "@pop"],
          ],
          string_single: [
            [/[^\\']+/, "string"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/'/, "string", "@pop"],
          ],
          string_backtick: [
            [
              /\$\{/,
              { token: "delimiter.bracket", next: "@bracketCounting" },
            ],
            [/[^\\`$]+/, "string"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/`/, "string", "@pop"],
          ],
          bracketCounting: [
            [/\{/, "delimiter.bracket", "@bracketCounting"],
            [/\}/, "delimiter.bracket", "@pop"],
            { include: "common" },
          ],
        },
      };
    },
    S0tx(t, e, n) {
      "use strict";
      n.r(e);
      let i;
      const r = n("uZp5");
      const s = n("4eob");
      const o = n("AtEE");
      const l = n("yqQ+");
      const a = n("ubVE");
      const h = n("WQMp");
      class c {
        constructor(t, e, n, i, r, s, o) {
          (this.type = t),
            (this.value = e),
            (this.from = n),
            (this.hash = i),
            (this.end = r),
            (this.children = s),
            (this.positions = o);
        }
        static create(t, e, n, i, r) {
          return new c(t, e, n, (i + (i << 8) + t + (e << 4)) | 0, r, [], []);
        }
        toTree(t, e = this.end) {
          let n = this.children.length - 1;
          n >= 0 &&
            (e = Math.max(
              e,
              this.positions[n] + this.children[n].length + this.from
            ));
          let i = new h.e(
            t.types[this.type],
            this.children,
            this.positions,
            e - this.from
          ).balance(2048);
          return (
            (function t(e, n) {
              for (let i of e)
                ct.set(i, n),
                  i instanceof h.e && i.type.isAnonymous && t(i.children, n);
            })(i.children, this.hash),
            i
          );
        }
        copy() {
          return new c(
            this.type,
            this.value,
            this.from,
            this.hash,
            this.end,
            this.children.slice(),
            this.positions.slice()
          );
        }
      }
      !(t => {
        (t[(t.Document = 1)] = "Document"),
          (t[(t.CodeBlock = 2)] = "CodeBlock"),
          (t[(t.FencedCode = 3)] = "FencedCode"),
          (t[(t.Blockquote = 4)] = "Blockquote"),
          (t[(t.HorizontalRule = 5)] = "HorizontalRule"),
          (t[(t.BulletList = 6)] = "BulletList"),
          (t[(t.OrderedList = 7)] = "OrderedList"),
          (t[(t.ListItem = 8)] = "ListItem"),
          (t[(t.ATXHeading1 = 9)] = "ATXHeading1"),
          (t[(t.ATXHeading2 = 10)] = "ATXHeading2"),
          (t[(t.ATXHeading3 = 11)] = "ATXHeading3"),
          (t[(t.ATXHeading4 = 12)] = "ATXHeading4"),
          (t[(t.ATXHeading5 = 13)] = "ATXHeading5"),
          (t[(t.ATXHeading6 = 14)] = "ATXHeading6"),
          (t[(t.SetextHeading1 = 15)] = "SetextHeading1"),
          (t[(t.SetextHeading2 = 16)] = "SetextHeading2"),
          (t[(t.HTMLBlock = 17)] = "HTMLBlock"),
          (t[(t.LinkReference = 18)] = "LinkReference"),
          (t[(t.Paragraph = 19)] = "Paragraph"),
          (t[(t.CommentBlock = 20)] = "CommentBlock"),
          (t[(t.ProcessingInstructionBlock = 21)] =
            "ProcessingInstructionBlock"),
          (t[(t.Escape = 22)] = "Escape"),
          (t[(t.Entity = 23)] = "Entity"),
          (t[(t.HardBreak = 24)] = "HardBreak"),
          (t[(t.Emphasis = 25)] = "Emphasis"),
          (t[(t.StrongEmphasis = 26)] = "StrongEmphasis"),
          (t[(t.Link = 27)] = "Link"),
          (t[(t.Image = 28)] = "Image"),
          (t[(t.InlineCode = 29)] = "InlineCode"),
          (t[(t.HTMLTag = 30)] = "HTMLTag"),
          (t[(t.Comment = 31)] = "Comment"),
          (t[(t.ProcessingInstruction = 32)] = "ProcessingInstruction"),
          (t[(t.URL = 33)] = "URL"),
          (t[(t.HeaderMark = 34)] = "HeaderMark"),
          (t[(t.QuoteMark = 35)] = "QuoteMark"),
          (t[(t.ListMark = 36)] = "ListMark"),
          (t[(t.LinkMark = 37)] = "LinkMark"),
          (t[(t.EmphasisMark = 38)] = "EmphasisMark"),
          (t[(t.CodeMark = 39)] = "CodeMark"),
          (t[(t.CodeInfo = 40)] = "CodeInfo"),
          (t[(t.LinkTitle = 41)] = "LinkTitle"),
          (t[(t.LinkLabel = 42)] = "LinkLabel");
      })(i || (i = {}));
      class u {
        constructor(t, e) {
          (this.start = t),
            (this.content = e),
            (this.marks = []),
            (this.parsers = []);
        }
      }
      class f {
        constructor() {
          (this.text = ""),
            (this.baseIndent = 0),
            (this.basePos = 0),
            (this.depth = 0),
            (this.markers = []),
            (this.pos = 0),
            (this.indent = 0),
            (this.next = -1);
        }
        forward() {
          this.basePos > this.pos && this.forwardInner();
        }
        forwardInner() {
          let t = this.skipSpace(this.basePos);
          (this.indent = this.countIndent(t, this.pos, this.indent)),
            (this.pos = t),
            (this.next = t == this.text.length ? -1 : this.text.charCodeAt(t));
        }
        skipSpace(t) {
          return g(this.text, t);
        }
        reset(t) {
          for (
            this.text = t,
              this.baseIndent = this.basePos = this.pos = this.indent = 0,
              this.forwardInner(),
              this.depth = 1;
            this.markers.length;

          )
            this.markers.pop();
        }
        moveBase(t) {
          (this.basePos = t),
            (this.baseIndent = this.countIndent(t, this.pos, this.indent));
        }
        moveBaseColumn(t) {
          (this.baseIndent = t), (this.basePos = this.findColumn(t));
        }
        addMarker(t) {
          this.markers.push(t);
        }
        countIndent(t, e = 0, n = 0) {
          for (let i = e; i < t; i++)
            n += 9 == this.text.charCodeAt(i) ? 4 - (n % 4) : 1;
          return n;
        }
        findColumn(t) {
          let e = 0;
          for (let n = 0; e < this.text.length && n < t; e++)
            n += 9 == this.text.charCodeAt(e) ? 4 - (n % 4) : 1;
          return e;
        }
        scrub() {
          if (!this.baseIndent) return this.text;
          let t = "";
          for (let e = 0; e < this.baseIndent; e++) t += " ";
          return t + this.text.slice(this.basePos);
        }
      }
      function d(t, e, n) {
        if (
          n.pos == n.text.length ||
          (t != e.block &&
            n.indent >= e.stack[n.depth + 1].value + n.baseIndent)
        )
          return !0;
        if (n.indent >= n.baseIndent + 4) return !1;
        let r = (t.type == i.OrderedList ? S : y)(n, e, !1);
        return (
          r > 0 &&
          (t.type != i.BulletList || w(n, e, !1) < 0) &&
          n.text.charCodeAt(n.pos + r - 1) == t.value
        );
      }
      const p = {
        [i.Blockquote]: (t, e, n) =>
          62 == n.next &&
          (n.markers.push(
            K(i.QuoteMark, e.lineStart + n.pos, e.lineStart + n.pos + 1)
          ),
          n.moveBase(n.pos + 1),
          (t.end = e.lineStart + n.text.length),
          !0),
        [i.ListItem]: (t, e, n) =>
          !(n.indent < n.baseIndent + t.value && n.next > -1) &&
          (n.moveBaseColumn(n.baseIndent + t.value), !0),
        [i.OrderedList]: d,
        [i.BulletList]: d,
        [i.Document]: () => !0,
      };
      function m(t) {
        return 32 == t || 9 == t || 10 == t || 13 == t;
      }
      function g(t, e = 0) {
        for (; e < t.length && m(t.charCodeAt(e)); ) e++;
        return e;
      }
      function b(t, e, n) {
        for (; e > n && m(t.charCodeAt(e - 1)); ) e--;
        return e;
      }
      function x(t) {
        if (96 != t.next && 126 != t.next) return -1;
        let e = t.pos + 1;
        for (; e < t.text.length && t.text.charCodeAt(e) == t.next; ) e++;
        if (e < t.pos + 3) return -1;
        if (96 == t.next)
          for (let n = e; n < t.text.length; n++)
            if (96 == t.text.charCodeAt(n)) return -1;
        return e;
      }
      function k(t) {
        return 62 != t.next ? -1 : 32 == t.text.charCodeAt(t.pos + 1) ? 2 : 1;
      }
      function w(t, e, n) {
        if (42 != t.next && 45 != t.next && 95 != t.next) return -1;
        let i = 1;
        for (let r = t.pos + 1; r < t.text.length; r++) {
          let e = t.text.charCodeAt(r);
          if (e == t.next) i++;
          else if (!m(e)) return -1;
        }
        return n && 45 == t.next && A(t) > -1 && t.depth == e.stack.length
          ? -1
          : i < 3
          ? -1
          : 1;
      }
      function v(t, e) {
        return (
          t.block.type == e ||
          (t.stack.length > 1 && t.stack[t.stack.length - 2].type == e)
        );
      }
      function y(t, e, n) {
        return (45 != t.next && 43 != t.next && 42 != t.next) ||
          (t.pos != t.text.length - 1 && !m(t.text.charCodeAt(t.pos + 1))) ||
          !(!n || v(e, i.BulletList) || t.skipSpace(t.pos + 2) < t.text.length)
          ? -1
          : 1;
      }
      function S(t, e, n) {
        let r = t.pos,
          s = t.next;
        for (; s >= 48 && s <= 57; ) {
          if ((r++, r == t.text.length)) return -1;
          s = t.text.charCodeAt(r);
        }
        return r == t.pos ||
          r > t.pos + 9 ||
          (46 != s && 41 != s) ||
          (r < t.text.length - 1 && !m(t.text.charCodeAt(r + 1))) ||
          (n &&
            !v(e, i.OrderedList) &&
            (t.skipSpace(r + 1) == t.text.length ||
              r > t.pos + 1 ||
              49 != t.next))
          ? -1
          : r + 1 - t.pos;
      }
      function C(t) {
        if (35 != t.next) return -1;
        let e = t.pos + 1;
        for (; e < t.text.length && 35 == t.text.charCodeAt(e); ) e++;
        if (e < t.text.length && 32 != t.text.charCodeAt(e)) return -1;
        let n = e - t.pos;
        return n > 6 ? -1 : n;
      }
      function A(t) {
        if ((45 != t.next && 61 != t.next) || t.indent >= t.baseIndent + 4)
          return -1;
        let e = t.pos + 1;
        for (; e < t.text.length && t.text.charCodeAt(e) == t.next; ) e++;
        let n = e;
        for (; e < t.text.length && m(t.text.charCodeAt(e)); ) e++;
        return e == t.text.length ? n : -1;
      }
      const L = /^[ \t]*$/,
        T = /-->/,
        E = /\?>/,
        I = [
          [/^<(?:script|pre|style)(?:\s|>|$)/i, /<\/(?:script|pre|style)>/i],
          [/^\s*<!--/, T],
          [/^\s*<\?/, E],
          [/^\s*<![A-Z]/, />/],
          [/^\s*<!\[CDATA\[/, /\]\]>/],
          [
            /^\s*<\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|\/?>|$)/i,
            L,
          ],
          [
            /^\s*(?:<\/[a-z][\w-]*\s*>|<[a-z][\w-]*(\s+[a-z:_][\w-.]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*>)\s*$/i,
            L,
          ],
        ];
      function M(t, e, n) {
        if (60 != t.next) return -1;
        let i = t.text.slice(t.pos);
        for (let r = 0, s = I.length - (n ? 1 : 0); r < s; r++)
          if (I[r][0].test(i)) return r;
        return -1;
      }
      function P(t, e) {
        let n = t.countIndent(e, t.pos, t.indent),
          i = t.countIndent(t.skipSpace(e), e, n);
        return i >= n + 5 ? n + 1 : i;
      }
      const B = {
        LinkReference: void 0,
        IndentedCode(t, e) {
          let n = e.baseIndent + 4;
          if (e.indent < n) return !1;
          let r = e.findColumn(n),
            s = t.lineStart + r,
            o = t.lineStart + e.text.length,
            l = [],
            a = [];
          for (; t.nextLine() && !(e.depth < t.stack.length); )
            if (e.pos == e.text.length) for (let t of e.markers) a.push(t);
            else {
              if (e.indent < n) break;
              if (a.length) {
                for (let t of a) l.push(t);
                a = [];
              }
              for (let t of e.markers) l.push(t);
              o = t.lineStart + e.text.length;
            }
          a.length && (e.markers = a.concat(e.markers));
          let c = !l.length && t.parser.codeParser && t.parser.codeParser("");
          return (
            c
              ? t.startNested(
                  s,
                  c.startParse(t.input.clip(o), s, t.parseContext),
                  (e) =>
                    new h.e(
                      t.parser.nodeSet.types[i.CodeBlock],
                      [e],
                      [0],
                      o - s
                    )
                )
              : t.addNode(
                  t.buffer.writeElements(l, -s).finish(i.CodeBlock, o - s),
                  s
                ),
            !0
          );
        },
        FencedCode(t, e) {
          let n = x(e);
          if (n < 0) return !1;
          let r = t.lineStart + e.pos,
            s = e.next,
            o = n - e.pos,
            l = e.skipSpace(n),
            a = b(e.text, e.text.length, l),
            h = [K(i.CodeMark, r, r + o)],
            c = "";
          l < a &&
            (h.push(K(i.CodeInfo, t.lineStart + l, t.lineStart + a)),
            (c = e.text.slice(l, a)));
          let u = h.length,
            f = u,
            d = t.lineStart + e.text.length + 1,
            p = -1;
          for (; t.nextLine() && !(e.depth < t.stack.length); ) {
            for (let t of e.markers) h.push(t);
            let n = e.pos;
            if (e.indent - e.baseIndent < 4)
              for (; n < e.text.length && e.text.charCodeAt(n) == s; ) n++;
            if (n - e.pos >= o && e.skipSpace(n) == e.text.length) {
              h.push(K(i.CodeMark, t.lineStart + e.pos, t.lineStart + n)),
                u++,
                (p = t.lineStart - 1),
                t.nextLine();
              break;
            }
          }
          let m = t.prevLineEnd();
          p < 0 && (p = m);
          let g =
            h.length == u && t.parser.codeParser && t.parser.codeParser(c);
          return (
            g
              ? t.startNested(
                  r,
                  g.startParse(t.input.clip(p), d, t.parseContext),
                  (e) => (
                    h.splice(f, 0, new Q(e, d)),
                    K(i.FencedCode, r, m, h).toTree(t.parser.nodeSet)
                  )
                )
              : t.addNode(
                  t.buffer
                    .writeElements(h, -r)
                    .finish(i.FencedCode, t.prevLineEnd() - r),
                  r
                ),
            !0
          );
        },
        Blockquote(t, e) {
          let n = k(e);
          return (
            !(n < 0) &&
            (t.startContext(i.Blockquote, e.pos),
            t.addNode(
              i.QuoteMark,
              t.lineStart + e.pos,
              t.lineStart + e.pos + 1
            ),
            e.moveBase(e.pos + n),
            null)
          );
        },
        HorizontalRule(t, e) {
          if (w(e, t, !1) < 0) return !1;
          let n = t.lineStart + e.pos;
          return t.nextLine(), t.addNode(i.HorizontalRule, n), !0;
        },
        BulletList(t, e) {
          let n = y(e, t, !1);
          if (n < 0) return !1;
          t.block.type != i.BulletList &&
            t.startContext(i.BulletList, e.basePos, e.next);
          let r = P(e, e.pos + 1);
          return (
            t.startContext(i.ListItem, e.basePos, r - e.baseIndent),
            t.addNode(i.ListMark, t.lineStart + e.pos, t.lineStart + e.pos + n),
            e.moveBaseColumn(r),
            null
          );
        },
        OrderedList(t, e) {
          let n = S(e, t, !1);
          if (n < 0) return !1;
          t.block.type != i.OrderedList &&
            t.startContext(
              i.OrderedList,
              e.basePos,
              e.text.charCodeAt(e.pos + n - 1)
            );
          let r = P(e, e.pos + n);
          return (
            t.startContext(i.ListItem, e.basePos, r - e.baseIndent),
            t.addNode(i.ListMark, t.lineStart + e.pos, t.lineStart + e.pos + n),
            e.moveBaseColumn(r),
            null
          );
        },
        ATXHeading(t, e) {
          let n = C(e);
          if (n < 0) return !1;
          let r = e.pos,
            s = t.lineStart + r,
            o = b(e.text, e.text.length, r),
            l = o;
          for (; l > r && e.text.charCodeAt(l - 1) == e.next; ) l--;
          (l != o && l != r && m(e.text.charCodeAt(l - 1))) ||
            (l = e.text.length);
          let a = t.buffer
            .write(i.HeaderMark, 0, n)
            .writeElements(
              t.parser.parseInline(e.text.slice(r + n + 1, l), s + n + 1),
              -s
            );
          l < e.text.length && a.write(i.HeaderMark, l - r, o - r);
          let h = a.finish(i.ATXHeading1 - 1 + n, e.text.length - r);
          return t.nextLine(), t.addNode(h, s), !0;
        },
        HTMLBlock(t, e) {
          let n = M(e, 0, !1);
          if (n < 0) return !1;
          let r = t.lineStart + e.pos,
            s = I[n][1],
            o = [],
            l = s != L;
          for (; !s.test(e.text) && t.nextLine(); ) {
            if (e.depth < t.stack.length) {
              l = !1;
              break;
            }
            for (let t of e.markers) o.push(t);
          }
          l && t.nextLine();
          let a =
              s == T
                ? i.CommentBlock
                : s == E
                ? i.ProcessingInstructionBlock
                : i.HTMLBlock,
            c = t.prevLineEnd();
          return (
            !o.length && a == i.HTMLBlock && t.parser.htmlParser
              ? t.startNested(
                  r,
                  t.parser.htmlParser.startParse(
                    t.input.clip(c),
                    r,
                    t.parseContext
                  ),
                  (e) => new h.e(t.parser.nodeSet.types[a], [e], [0], c - r)
                )
              : t.addNode(t.buffer.writeElements(o, -r).finish(a, c - r), r),
            !0
          );
        },
        SetextHeading: void 0,
      };
      class N {
        constructor(t) {
          (this.stage = 0),
            (this.elts = []),
            (this.pos = 0),
            (this.start = t.start),
            this.advance(t.content);
        }
        nextLine(t, e, n) {
          if (-1 == this.stage) return !1;
          let i = n.content + "\n" + e.scrub(),
            r = this.advance(i);
          return r > -1 && r < i.length && this.complete(t, n, r);
        }
        finish(t, e) {
          return (
            (2 == this.stage || 3 == this.stage) &&
            g(e.content, this.pos) == e.content.length &&
            this.complete(t, e, e.content.length)
          );
        }
        complete(t, e, n) {
          return (
            t.addLeafElement(
              e,
              K(i.LinkReference, this.start, this.start + n, this.elts)
            ),
            !0
          );
        }
        nextStage(t) {
          return t
            ? ((this.pos = t.to - this.start),
              this.elts.push(t),
              this.stage++,
              !0)
            : (!1 === t && (this.stage = -1), !1);
        }
        advance(t) {
          for (;;) {
            if (-1 == this.stage) return -1;
            if (0 == this.stage) {
              if (!this.nextStage(lt(t, this.pos, this.start, !0))) return -1;
              if (58 != t.charCodeAt(this.pos)) return (this.stage = -1);
              this.elts.push(
                K(i.LinkMark, this.pos + this.start, this.pos + this.start + 1)
              ),
                this.pos++;
            } else {
              if (1 != this.stage) {
                if (2 == this.stage) {
                  let e = g(t, this.pos),
                    n = 0;
                  if (e > this.pos) {
                    let i = ot(t, e, this.start);
                    if (i) {
                      let e = O(t, i.to - this.start);
                      e > 0 && (this.nextStage(i), (n = e));
                    }
                  }
                  return (
                    n || (n = O(t, this.pos)), n > 0 && n < t.length ? n : -1
                  );
                }
                return O(t, this.pos);
              }
              if (!this.nextStage(st(t, g(t, this.pos), this.start))) return -1;
            }
          }
        }
      }
      function O(t, e) {
        for (; e < t.length; e++) {
          let n = t.charCodeAt(e);
          if (10 == n) break;
          if (!m(n)) return -1;
        }
        return e;
      }
      class H {
        nextLine(t, e, n) {
          let r = e.depth < t.stack.length ? -1 : A(e),
            s = e.next;
          if (r < 0) return !1;
          let o = K(i.HeaderMark, t.lineStart + e.pos, t.lineStart + r);
          return (
            t.nextLine(),
            t.addLeafElement(
              n,
              K(
                61 == s ? i.SetextHeading1 : i.SetextHeading2,
                n.start,
                t.prevLineEnd(),
                [...t.parser.parseInline(n.content, n.start), o]
              )
            ),
            !0
          );
        }
        finish() {
          return !1;
        }
      }
      const D = {
          LinkReference: (t, e) =>
            91 == e.content.charCodeAt(0) ? new N(e) : null,
          SetextHeading: () => new H(),
        },
        j = [
          (t, e) => C(e) >= 0,
          (t, e) => x(e) >= 0,
          (t, e) => k(e) >= 0,
          (t, e) => y(e, t, !0) >= 0,
          (t, e) => S(e, t, !0) >= 0,
          (t, e) => w(e, t, !0) >= 0,
          (t, e) => M(e, 0, !0) >= 0,
        ];
      class R {
        constructor(t, e, n) {
          (this.from = t), (this.parse = e), (this.finish = n);
        }
      }
      class _ {
        constructor(t, e, n, r) {
          (this.parser = t),
            (this.input = e),
            (this.parseContext = r),
            (this.line = new f()),
            (this.atEnd = !1),
            (this.nested = null),
            (this.lineStart = n),
            (this.block = c.create(i.Document, 0, this.lineStart, 0, 0)),
            (this.stack = [this.block]),
            (this.fragments = (
              null === r || void 0 === r ? void 0 : r.fragments
            )
              ? new ft(r.fragments, e)
              : null),
            this.updateLine(e.lineAfter(this.lineStart));
        }
        get pos() {
          return this.nested ? this.nested.parse.pos : this.lineStart;
        }
        advance() {
          if (this.nested) {
            let t = this.nested.parse.advance();
            if (t) {
              let e = this.nested.finish(t);
              e instanceof X && (e = e.toTree(this.parser.nodeSet)),
                this.addNode(e, this.nested.from),
                (this.nested = null);
            }
            return null;
          }
          let { line: t } = this;
          for (;;) {
            for (; t.depth < this.stack.length; ) this.finishContext();
            for (let e of t.markers) this.addNode(e.type, e.from, e.to);
            if (t.pos < t.text.length) break;
            if (!this.nextLine()) return this.finish();
          }
          if (this.fragments && this.reuseFragment(t.basePos)) return null;
          t: for (;;) {
            for (let e of this.parser.blockParsers)
              if (e) {
                let n = e(this, t);
                if (0 != n) {
                  if (1 == n) return null;
                  t.forward();
                  continue t;
                }
              }
            break;
          }
          let e = new u(this.lineStart + t.pos, t.text.slice(t.pos));
          for (let n of this.parser.leafBlockParsers)
            if (n) {
              let t = n(this, e);
              t && e.parsers.push(t);
            }
          t: for (; this.nextLine() && t.pos != t.text.length; ) {
            if (t.indent < t.baseIndent + 4)
              for (let e of dt.endLeafBlock) if (e(this, t)) break t;
            for (let n of e.parsers) if (n.nextLine(this, t, e)) return null;
            e.content += "\n" + t.scrub();
            for (let n of t.markers) e.marks.push(n);
          }
          return this.finishLeaf(e), null;
        }
        reuseFragment(t) {
          if (
            !this.fragments.moveTo(this.lineStart + t, this.lineStart) ||
            !this.fragments.matches(this.block.hash)
          )
            return !1;
          let e = this.fragments.takeNodes(this);
          return (
            !!e &&
            ((this.lineStart += e),
            this.lineStart < this.input.length
              ? (this.lineStart++,
                this.updateLine(this.input.lineAfter(this.lineStart)))
              : ((this.atEnd = !0), this.updateLine("")),
            !0)
          );
        }
        nextLine() {
          return (
            (this.lineStart += this.line.text.length),
            this.lineStart >= this.input.length
              ? ((this.atEnd = !0), this.updateLine(""), !1)
              : (this.lineStart++,
                this.updateLine(this.input.lineAfter(this.lineStart)),
                !0)
          );
        }
        updateLine(t) {
          let { line: e } = this;
          for (e.reset(t); e.depth < this.stack.length; e.depth++) {
            let t = this.stack[e.depth],
              n = this.parser.skipContextMarkup[t.type];
            if (!n) throw new Error("Unhandled block context " + i[t.type]);
            if (!n(t, this, e)) break;
            e.forward();
          }
        }
        prevLineEnd() {
          return this.atEnd ? this.lineStart : this.lineStart - 1;
        }
        startContext(t, e, n = 0) {
          (this.block = c.create(
            t,
            n,
            this.lineStart + e,
            this.block.hash,
            this.lineStart + this.line.text.length
          )),
            this.stack.push(this.block);
        }
        startComposite(t, e, n = 0) {
          this.startContext(this.parser.getNodeType(t), e, n);
        }
        addNode(t, e, n) {
          "number" == typeof t &&
            (t = new h.e(
              this.parser.nodeSet.types[t],
              W,
              W,
              (null !== n && void 0 !== n ? n : this.prevLineEnd()) - e
            )),
            this.block.children.push(t),
            this.block.positions.push(e - this.block.from);
        }
        addElement(t) {
          this.block.children.push(t.toTree(this.parser.nodeSet)),
            this.block.positions.push(t.from - this.block.from);
        }
        addLeafElement(t, e) {
          this.addNode(
            this.buffer
              .writeElements(ht(e.children, t.marks), -e.from)
              .finish(e.type, e.to - e.from),
            e.from
          );
        }
        startNested(t, e, n) {
          this.nested = new R(t, e, n);
        }
        finishContext() {
          this.block = V(this.stack, this.parser.nodeSet);
        }
        finish() {
          for (; this.stack.length > 1; ) this.finishContext();
          return this.block.toTree(this.parser.nodeSet, this.lineStart);
        }
        forceFinish() {
          let t = this.stack.map((t) => t.copy());
          if (this.nested) {
            let e = t[t.length - 1];
            e.children.push(this.nested.parse.forceFinish()),
              e.positions.push(this.nested.from - e.from);
          }
          for (; t.length > 1; ) V(t, this.parser.nodeSet);
          return t[0].toTree(this.parser.nodeSet, this.lineStart);
        }
        finishLeaf(t) {
          for (let n of t.parsers) if (n.finish(this, t)) return;
          let e = ht(this.parser.parseInline(t.content, t.start), t.marks);
          this.addNode(
            this.buffer
              .writeElements(e, -t.start)
              .finish(i.Paragraph, t.content.length),
            t.start
          );
        }
        elt(t, e, n, i) {
          return "string" == typeof t
            ? K(this.parser.getNodeType(t), e, n, i)
            : new Q(t, e);
        }
        get buffer() {
          return new U(this.parser.nodeSet);
        }
      }
      class F {
        constructor(t, e, n, i, r, s, o, l, a, h) {
          (this.nodeSet = t),
            (this.codeParser = e),
            (this.htmlParser = n),
            (this.blockParsers = i),
            (this.leafBlockParsers = r),
            (this.blockNames = s),
            (this.endLeafBlock = o),
            (this.skipContextMarkup = l),
            (this.inlineParsers = a),
            (this.inlineNames = h),
            (this.nodeTypes = Object.create(null));
          for (let c of t.types) this.nodeTypes[c.name] = c.id;
        }
        startParse(t, e = 0, n = {}) {
          return new _(this, t, e, n);
        }
        configure(t) {
          let e = (function t(e) {
            if (!Array.isArray(e)) return e;
            if (0 == e.length) return null;
            let n = t(e[0]);
            if (1 == e.length) return n;
            let i = t(e.slice(1));
            if (!i || !n) return n || i;
            let r = (t, e) => (t || W).concat(e || W);
            return {
              props: r(n.props, i.props),
              codeParser: i.codeParser || n.codeParser,
              htmlParser: i.htmlParser || n.htmlParser,
              defineNodes: r(n.defineNodes, i.defineNodes),
              parseBlock: r(n.parseBlock, i.parseBlock),
              parseInline: r(n.parseInline, i.parseInline),
              remove: r(n.remove, i.remove),
            };
          })(t);
          if (!e) return this;
          let { nodeSet: n, skipContextMarkup: r } = this,
            s = this.blockParsers.slice(),
            o = this.leafBlockParsers.slice(),
            l = this.blockNames.slice(),
            a = this.inlineParsers.slice(),
            c = this.inlineNames.slice(),
            u = this.endLeafBlock.slice();
          if (z(e.defineNodes)) {
            r = Object.assign({}, r);
            let t = n.types.slice();
            for (let n of e.defineNodes) {
              let { name: e, block: s, composite: o } =
                "string" == typeof n ? { name: n } : n;
              if (t.some((t) => t.name == e)) continue;
              o && (r[t.length] = (t, e, n) => o(e, n, t.value));
              let l = t.length,
                a = o
                  ? ["Block", "BlockContext"]
                  : s
                  ? l >= i.ATXHeading1 && l <= i.SetextHeading2
                    ? ["Block", "LeafBlock", "Heading"]
                    : ["Block", "LeafBlock"]
                  : void 0;
              t.push(
                h.d.define({ id: l, name: e, props: a && [[h.b.group, a]] })
              );
            }
            n = new h.c(t);
          }
          if ((z(e.props) && (n = n.extend(...e.props)), z(e.remove)))
            for (let i of e.remove) {
              let t = this.blockNames.indexOf(i),
                e = this.inlineNames.indexOf(i);
              t > -1 && (s[t] = o[t] = void 0), e > -1 && (a[e] = void 0);
            }
          if (z(e.parseBlock))
            for (let i of e.parseBlock) {
              let t = l.indexOf(i.name);
              if (t > -1) (s[t] = i.parse), (o[t] = i.leaf);
              else {
                let t = i.before
                  ? $(l, i.before)
                  : i.after
                  ? $(l, i.after) + 1
                  : l.length - 1;
                s.splice(t, 0, i.parse),
                  o.splice(t, 0, i.leaf),
                  l.splice(t, 0, i.name);
              }
              i.endLeaf && u.push(i.endLeaf);
            }
          if (z(e.parseInline))
            for (let i of e.parseInline) {
              let t = c.indexOf(i.name);
              if (t > -1) a[t] = i.parse;
              else {
                let t = i.before
                  ? $(c, i.before)
                  : i.after
                  ? $(c, i.after) + 1
                  : c.length - 1;
                a.splice(t, 0, i.parse), c.splice(t, 0, i.name);
              }
            }
          return new F(
            n,
            e.codeParser || this.codeParser,
            e.htmlParser || this.htmlParser,
            s,
            o,
            l,
            u,
            r,
            a,
            c
          );
        }
        getNodeType(t) {
          let e = this.nodeTypes[t];
          if (null == e) throw new RangeError(`Unknown node type '${t}'`);
          return e;
        }
        parseInline(t, e) {
          let n = new at(this, t, e);
          t: for (let i = e; i < n.end; ) {
            let t = n.char(i);
            for (let e of this.inlineParsers)
              if (e) {
                let r = e(n, t, i);
                if (r >= 0) {
                  i = r;
                  continue t;
                }
              }
            i++;
          }
          return n.resolveMarkers(0);
        }
      }
      function z(t) {
        return null != t && t.length > 0;
      }
      function $(t, e) {
        let n = t.indexOf(e);
        if (n < 0)
          throw new RangeError(
            `Position specified relative to unknown parser ${e}`
          );
        return n;
      }
      let q = [h.d.none];
      for (let Dt, jt = 1; (Dt = i[jt]); jt++)
        q[jt] = h.d.define({
          id: jt,
          name: Dt,
          props:
            jt >= i.Escape
              ? []
              : [
                  [
                    h.b.group,
                    jt in p
                      ? ["Block", "BlockContext"]
                      : ["Block", "LeafBlock"],
                  ],
                ],
        });
      function V(t, e) {
        let n = t.pop(),
          i = t[t.length - 1];
        return (
          i.children.push(n.toTree(e)), i.positions.push(n.from - i.from), i
        );
      }
      const W = [];
      class U {
        constructor(t) {
          (this.nodeSet = t), (this.content = []), (this.nodes = []);
        }
        write(t, e, n, i = 0) {
          return this.content.push(t, e, n, 4 + 4 * i), this;
        }
        writeElements(t, e = 0) {
          for (let n of t) n.writeTo(this, e);
          return this;
        }
        finish(t, e) {
          return h.e.build({
            buffer: this.content,
            nodeSet: this.nodeSet,
            reused: this.nodes,
            topID: t,
            length: e,
          });
        }
      }
      class X {
        constructor(t, e, n, i = W) {
          (this.type = t), (this.from = e), (this.to = n), (this.children = i);
        }
        writeTo(t, e) {
          let n = t.content.length;
          t.writeElements(this.children, e),
            t.content.push(
              this.type,
              this.from + e,
              this.to + e,
              t.content.length + 4 - n
            );
        }
        toTree(t) {
          return new U(t)
            .writeElements(this.children, -this.from)
            .finish(this.type, this.to - this.from);
        }
      }
      class Q {
        constructor(t, e) {
          (this.tree = t), (this.from = e);
        }
        get to() {
          return this.from + this.tree.length;
        }
        get type() {
          return this.tree.type.id;
        }
        get children() {
          return W;
        }
        writeTo(t, e) {
          t.nodes.push(this.tree),
            t.content.push(t.nodes.length - 1, this.from + e, this.to + e, -1);
        }
        toTree() {
          return this.tree;
        }
      }
      function K(t, e, n, i) {
        return new X(t, e, n, i);
      }
      const Z = { resolve: "Emphasis", mark: "EmphasisMark" },
        J = { resolve: "Emphasis", mark: "EmphasisMark" },
        Y = {},
        G = {};
      class tt {
        constructor(t, e, n, i) {
          (this.type = t), (this.from = e), (this.to = n), (this.side = i);
        }
      }
      const et = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
      let nt = /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\u2010-\u2027]/;
      try {
        nt = /[\p{Pc}|\p{Pd}|\p{Pe}|\p{Pf}|\p{Pi}|\p{Po}|\p{Ps}]/u;
      } catch (Ht) {}
      const it = {
        Escape(t, e, n) {
          if (92 != e || n == t.end - 1) return -1;
          let r = t.char(n + 1);
          for (let s = 0; s < et.length; s++)
            if (et.charCodeAt(s) == r) return t.append(K(i.Escape, n, n + 2));
          return -1;
        },
        Entity(t, e, n) {
          if (38 != e) return -1;
          let r = /^(?:#\d+|#x[a-f\d]+|\w+);/i.exec(t.slice(n + 1, n + 31));
          return r ? t.append(K(i.Entity, n, n + 1 + r[0].length)) : -1;
        },
        InlineCode(t, e, n) {
          if (96 != e || (n && 96 == t.char(n - 1))) return -1;
          let r = n + 1;
          for (; r < t.end && 96 == t.char(r); ) r++;
          let s = r - n,
            o = 0;
          for (; r < t.end; r++)
            if (96 == t.char(r)) {
              if ((o++, o == s && 96 != t.char(r + 1)))
                return t.append(
                  K(i.InlineCode, n, r + 1, [
                    K(i.CodeMark, n, n + s),
                    K(i.CodeMark, r + 1 - s, r + 1),
                  ])
                );
            } else o = 0;
          return -1;
        },
        HTMLTag(t, e, n) {
          if (60 != e || n == t.end - 1) return -1;
          let r = t.slice(n + 1, t.end),
            s = /^(?:[a-z][-\w+.]+:[^\s>]+|[a-z\d.!#$%&'*+/=?^_`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*)>/i.exec(
              r
            );
          if (s) return t.append(K(i.URL, n, n + 1 + s[0].length));
          let o = /^!--[^>](?:-[^-]|[^-])*?-->/i.exec(r);
          if (o) return t.append(K(i.Comment, n, n + 1 + o[0].length));
          let l = /^\?[^]*?\?>/.exec(r);
          if (l)
            return t.append(K(i.ProcessingInstruction, n, n + 1 + l[0].length));
          let a = /^(?:![A-Z][^]*?>|!\[CDATA\[[^]*?\]\]>|\/\s*[a-zA-Z][\w-]*\s*>|\s*[a-zA-Z][\w-]*(\s+[a-zA-Z:_][\w-.:]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*(\/\s*)?>)/.exec(
            r
          );
          if (!a) return -1;
          let c = [];
          if (t.parser.htmlParser) {
            let e,
              i = t.parser.htmlParser.startParse(
                Object(h.h)(t.slice(n, n + 1 + a[0].length)),
                0,
                {}
              );
            for (; !(e = i.advance()); );
            c = e.children.map((t, i) => new Q(t, n + e.positions[i]));
          }
          return t.append(K(i.HTMLTag, n, n + 1 + a[0].length, c));
        },
        Emphasis(t, e, n) {
          if (95 != e && 42 != e) return -1;
          let i = n + 1;
          for (; t.char(i) == e; ) i++;
          let r = t.slice(n - 1, n),
            s = t.slice(i, i + 1),
            o = nt.test(r),
            l = nt.test(s),
            a = /\s|^$/.test(r),
            h = /\s|^$/.test(s),
            c = !h && (!l || a || o),
            u = !a && (!o || h || l),
            f = c && (42 == e || !u || o),
            d = u && (42 == e || !c || l);
          return t.append(
            new tt(95 == e ? Z : J, n, i, (f ? 1 : 0) | (d ? 2 : 0))
          );
        },
        HardBreak(t, e, n) {
          if (92 == e && 10 == t.char(n + 1))
            return t.append(K(i.HardBreak, n, n + 2));
          if (32 == e) {
            let e = n + 1;
            for (; 32 == t.char(e); ) e++;
            if (10 == t.char(e) && e >= n + 2)
              return t.append(K(i.HardBreak, n, e + 1));
          }
          return -1;
        },
        Link: (t, e, n) => (91 == e ? t.append(new tt(Y, n, n + 1, 1)) : -1),
        Image: (t, e, n) =>
          33 == e && 91 == t.char(n + 1)
            ? t.append(new tt(G, n, n + 2, 1))
            : -1,
        LinkEnd(t, e, n) {
          if (93 != e) return -1;
          for (let r = t.parts.length - 1; r >= 0; r--) {
            let e = t.parts[r];
            if (e instanceof tt && (e.type == Y || e.type == G)) {
              if (
                !e.side ||
                (t.skipSpace(e.to) == n && !/[(\[]/.test(t.slice(n + 1, n + 2)))
              )
                return (t.parts[r] = null), -1;
              let s = t.takeContent(r),
                o = (t.parts[r] = rt(
                  t,
                  s,
                  e.type == Y ? i.Link : i.Image,
                  e.from,
                  n + 1
                ));
              if (e.type == Y)
                for (let e = 0; e < r; e++) {
                  let n = t.parts[e];
                  n instanceof tt && n.type == Y && (n.side = 0);
                }
              return o.to;
            }
          }
          return -1;
        },
      };
      function rt(t, e, n, r, s) {
        let { text: o } = t,
          l = t.char(s),
          a = s;
        if (
          (e.unshift(K(i.LinkMark, r, r + (n == i.Image ? 2 : 1))),
          e.push(K(i.LinkMark, s - 1, s)),
          40 == l)
        ) {
          let n,
            r = t.skipSpace(s + 1),
            l = st(o, r - t.offset, t.offset);
          l &&
            ((r = t.skipSpace(l.to)),
            (n = ot(o, r - t.offset, t.offset)),
            n && (r = t.skipSpace(n.to))),
            41 == t.char(r) &&
              (e.push(K(i.LinkMark, s, s + 1)),
              (a = r + 1),
              l && e.push(l),
              n && e.push(n),
              e.push(K(i.LinkMark, r, a)));
        } else if (91 == l) {
          let n = lt(o, s - t.offset, t.offset, !1);
          n && (e.push(n), (a = n.to));
        }
        return K(n, r, a, e);
      }
      function st(t, e, n) {
        if (60 == t.charCodeAt(e)) {
          for (let r = e + 1; r < t.length; r++) {
            let s = t.charCodeAt(r);
            if (62 == s) return K(i.URL, e + n, r + 1 + n);
            if (60 == s || 10 == s) return !1;
          }
          return null;
        }
        {
          let r = 0,
            s = e;
          for (let e = !1; s < t.length; s++) {
            let n = t.charCodeAt(s);
            if (m(n)) break;
            if (e) e = !1;
            else if (40 == n) r++;
            else if (41 == n) {
              if (!r) break;
              r--;
            } else 92 == n && (e = !0);
          }
          return s > e ? K(i.URL, e + n, s + n) : s == t.length && null;
        }
      }
      function ot(t, e, n) {
        let r = t.charCodeAt(e);
        if (39 != r && 34 != r && 40 != r) return !1;
        let s = 40 == r ? 41 : r;
        for (let o = e + 1, l = !1; o < t.length; o++) {
          let r = t.charCodeAt(o);
          if (l) l = !1;
          else {
            if (r == s) return K(i.LinkTitle, e + n, o + 1 + n);
            92 == r && (l = !0);
          }
        }
        return null;
      }
      function lt(t, e, n, r) {
        for (
          let s = !1, o = e + 1, l = Math.min(t.length, o + 999);
          o < l;
          o++
        ) {
          let l = t.charCodeAt(o);
          if (s) s = !1;
          else {
            if (93 == l) return !r && K(i.LinkLabel, e + n, o + 1 + n);
            if ((r && !m(l) && (r = !1), 91 == l)) return !1;
            92 == l && (s = !0);
          }
        }
        return null;
      }
      class at {
        constructor(t, e, n) {
          (this.parser = t),
            (this.text = e),
            (this.offset = n),
            (this.parts = []);
        }
        char(t) {
          return t >= this.end ? -1 : this.text.charCodeAt(t - this.offset);
        }
        get end() {
          return this.offset + this.text.length;
        }
        slice(t, e) {
          return this.text.slice(t - this.offset, e - this.offset);
        }
        append(t) {
          return this.parts.push(t), t.to;
        }
        addDelimiter(t, e, n, i, r) {
          return this.append(new tt(t, e, n, (i ? 1 : 0) | (r ? 2 : 0)));
        }
        addElement(t) {
          return this.append(t);
        }
        resolveMarkers(t) {
          for (let n = t; n < this.parts.length; n++) {
            let e = this.parts[n];
            if (!(e instanceof tt && e.type.resolve && 2 & e.side)) continue;
            let i,
              r = e.type == Z || e.type == J,
              s = e.to - e.from,
              o = n - 1;
            for (; o >= t; o--) {
              let t = this.parts[o];
              if (
                t instanceof tt &&
                1 & t.side &&
                t.type == e.type &&
                !(
                  r &&
                  (1 & e.side || 2 & t.side) &&
                  (t.to - t.from + s) % 3 == 0 &&
                  ((t.to - t.from) % 3 || s % 3)
                )
              ) {
                i = t;
                break;
              }
            }
            if (!i) continue;
            let l = e.type.resolve,
              a = [],
              h = i.from,
              c = e.to;
            if (r) {
              let t = Math.min(2, i.to - i.from, s);
              (h = i.to - t),
                (c = e.from + t),
                (l = 1 == t ? "Emphasis" : "StrongEmphasis");
            }
            i.type.mark && a.push(this.elt(i.type.mark, h, i.to));
            for (let t = o + 1; t < n; t++)
              this.parts[t] instanceof X && a.push(this.parts[t]),
                (this.parts[t] = null);
            e.type.mark && a.push(this.elt(e.type.mark, e.from, c));
            let u = this.elt(l, h, c, a);
            (this.parts[o] =
              r && i.from != h ? new tt(i.type, i.from, h, i.side) : null),
              (this.parts[n] =
                r && e.to != c ? new tt(e.type, c, e.to, e.side) : null)
                ? this.parts.splice(n, 0, u)
                : (this.parts[n] = u);
          }
          let e = [];
          for (let n = t; n < this.parts.length; n++) {
            let t = this.parts[n];
            t instanceof X && e.push(t);
          }
          return e;
        }
        findOpeningDelimiter(t) {
          for (let e = this.parts.length - 1; e >= 0; e--) {
            let n = this.parts[e];
            if (n instanceof tt && n.type == t) return e;
          }
          return null;
        }
        takeContent(t) {
          let e = this.resolveMarkers(t);
          return (this.parts.length = t), e;
        }
        skipSpace(t) {
          return g(this.text, t - this.offset) + this.offset;
        }
        elt(t, e, n, i) {
          return "string" == typeof t
            ? K(this.parser.getNodeType(t), e, n, i)
            : new Q(t, e);
        }
      }
      function ht(t, e) {
        if (!e.length) return t;
        if (!t.length) return e;
        let n = t.slice(),
          i = 0;
        for (let r of e) {
          for (; i < n.length && n[i].to < r.to; ) i++;
          if (i < n.length && n[i].from < r.from) {
            let t = n[i];
            t instanceof X &&
              (n[i] = new X(t.type, t.from, t.to, ht(t.children, [r])));
          } else n.splice(i++, 0, r);
        }
        return n;
      }
      const ct = new WeakMap();
      const ut = [i.CodeBlock, i.ListItem, i.OrderedList, i.BulletList];
      class ft {
        constructor(t, e) {
          (this.fragments = t),
            (this.input = e),
            (this.i = 0),
            (this.fragment = null),
            (this.fragmentEnd = -1),
            (this.cursor = null),
            t.length && (this.fragment = t[this.i++]);
        }
        nextFragment() {
          (this.fragment =
            this.i < this.fragments.length ? this.fragments[this.i++] : null),
            (this.cursor = null),
            (this.fragmentEnd = -1);
        }
        moveTo(t, e) {
          for (; this.fragment && this.fragment.to <= t; ) this.nextFragment();
          if (!this.fragment || this.fragment.from > (t ? t - 1 : 0)) return !1;
          if (this.fragmentEnd < 0) {
            let t = this.fragment.to;
            for (; t > 0 && 10 != this.input.get(t - 1); ) t--;
            this.fragmentEnd = t ? t - 1 : 0;
          }
          let n = this.cursor;
          n ||
            ((n = this.cursor = this.fragment.tree.cursor()), n.firstChild());
          let i = t + this.fragment.offset;
          for (; n.to <= i; ) if (!n.parent()) return !1;
          for (;;) {
            if (n.from >= i) return this.fragment.from <= e;
            if (!n.childAfter(i)) return !1;
          }
        }
        matches(t) {
          let e = this.cursor.tree;
          return e && ct.get(e) == t;
        }
        takeNodes(t) {
          let e = this.cursor,
            n = this.fragment.offset,
            i = t.lineStart,
            r = i,
            s = t.block.children.length,
            o = r,
            l = s;
          for (;;) {
            if (e.to - n >= this.fragmentEnd) {
              if (e.type.isAnonymous && e.firstChild()) continue;
              break;
            }
            if (
              (t.addNode(e.tree, e.from - n),
              e.type.is("Block") &&
                (ut.indexOf(e.type.id) < 0
                  ? ((r = e.to - n), (s = t.block.children.length))
                  : ((r = o),
                    (s = l),
                    (o = e.to - n),
                    (l = t.block.children.length))),
              !e.nextSibling())
            )
              break;
          }
          for (; t.block.children.length > s; )
            t.block.children.pop(), t.block.positions.pop();
          return r - i;
        }
      }
      const dt = new F(
          new h.c(q),
          null,
          null,
          Object.keys(B).map((t) => B[t]),
          Object.keys(B).map((t) => D[t]),
          Object.keys(B),
          j,
          p,
          Object.keys(it).map((t) => it[t]),
          Object.keys(it)
        ),
        pt = { resolve: "Strikethrough", mark: "StrikethroughMark" };
      function mt(t, e, n = 0, i, r = 0) {
        let s = 0,
          o = !0,
          l = -1,
          a = -1,
          h = !1,
          c = () => {
            i.push(
              t.elt(
                "TableCell",
                r + l,
                r + a,
                t.parser.parseInline(e.slice(l, a), r + l)
              )
            );
          };
        for (let u = n; u < e.length; u++) {
          let n = e.charCodeAt(u);
          124 != n || h
            ? (h || (32 != n && 9 != n)) && (l < 0 && (l = u), (a = u + 1))
            : ((!o || l > -1) && s++,
              (o = !1),
              i &&
                (l > -1 && c(),
                i.push(t.elt("TableDelimiter", u + r, u + r + 1))),
              (l = a = -1)),
            (h = !h && 92 == n);
        }
        return l > -1 && (s++, i && c()), s;
      }
      class gt {
        constructor() {
          this.rows = null;
        }
        nextLine(t, e, n) {
          if (null == this.rows) {
            let i;
            if (
              ((this.rows = !1),
              (45 == e.next || 58 == e.next || 124 == e.next) &&
                /^\|?(\s*:?-+:?\s*\|)+(\s*:?-+:?\s*)?$/.test(
                  (i = e.text.slice(e.pos))
                ))
            ) {
              let r = [];
              mt(t, n.content, 0, r, n.start) == mt(t, i, e.pos) &&
                (this.rows = [
                  t.elt("TableHeader", n.start, n.start + n.content.length, r),
                  t.elt(
                    "TableDelimiter",
                    t.lineStart + e.pos,
                    t.lineStart + e.text.length
                  ),
                ]);
            }
          } else if (this.rows) {
            let n = [];
            mt(t, e.text, e.pos, n, t.lineStart),
              this.rows.push(
                t.elt(
                  "TableRow",
                  t.lineStart + e.pos,
                  t.lineStart + e.text.length,
                  n
                )
              );
          }
          return !1;
        }
        finish(t, e) {
          return !!this.rows && (this.emit(t, e), !0);
        }
        emit(t, e) {
          t.addLeafElement(
            e,
            t.elt("Table", e.start, e.start + e.content.length, this.rows)
          );
        }
      }
      class bt {
        nextLine() {
          return !1;
        }
        finish(t, e) {
          return (
            t.addLeafElement(
              e,
              t.elt("Task", e.start, e.start + e.content.length, [
                t.elt("TaskMarker", e.start, e.start + 3),
                ...t.parser.parseInline(e.content.slice(3), e.start + 3),
              ])
            ),
            !0
          );
        }
      }
      const xt = [
        {
          defineNodes: [
            { name: "Table", block: !0 },
            "TableHeader",
            "TableRow",
            "TableCell",
            "TableDelimiter",
          ],
          parseBlock: [
            {
              name: "Table",
              leaf: (t, e) =>
                ((t, e) => {
                  for (let n = e; n < t.length; n++) {
                    let e = t.charCodeAt(n);
                    if (124 == e) return !0;
                    92 == e && n++;
                  }
                  return !1;
                })(e.content, 0) ? new gt() : null,
              before: "SetextHeading",
            },
          ],
        },
        {
          defineNodes: [{ name: "Task", block: !0 }, "TaskMarker"],
          parseBlock: [
            {
              name: "TaskList",
              leaf: (t, e) =>
                /^\[[ xX]\]/.test(e.content) &&
                "ListItem" == t.parser.nodeSet.types[t.block.type].name
                  ? new bt()
                  : null,
              after: "SetextHeading",
            },
          ],
        },
        {
          defineNodes: ["Strikethrough", "StrikethroughMark"],
          parseInline: [
            {
              name: "Strikethrough",
              parse: (t, e, n) =>
                126 != e || 126 != t.char(n + 1)
                  ? -1
                  : t.addDelimiter(pt, n, n + 2, !0, !0),
              after: "Emphasis",
            },
          ],
        },
      ];
      function kt(t, e, n) {
        return (i, r, s) => {
          if (r != t || i.char(s + 1) == t) return -1;
          let o = [i.elt(n, s, s + 1)];
          for (let l = s + 1; l < i.end; l++) {
            let r = i.char(l);
            if (r == t)
              return i.addElement(
                i.elt(e, s, l + 1, o.concat(i.elt(n, l, l + 1)))
              );
            if ((92 == r && o.push(i.elt("Escape", l, 2 + l++)), m(r))) break;
          }
          return -1;
        };
      }
      const wt = {
          defineNodes: ["Superscript", "SuperscriptMark"],
          parseInline: [
            {
              name: "Superscript",
              parse: kt(94, "Superscript", "SuperscriptMark"),
            },
          ],
        },
        vt = {
          defineNodes: ["Subscript", "SubscriptMark"],
          parseInline: [
            { name: "Subscript", parse: kt(126, "Subscript", "SubscriptMark") },
          ],
        },
        yt = {
          defineNodes: ["Emoji"],
          parseInline: [
            {
              name: "Emoji",
              parse(t, e, n) {
                let i;
                return 58 == e &&
                  (i = /^[a-zA-Z_0-9]+:/.exec(t.slice(n + 1, t.end)))
                  ? t.addElement(t.elt("Emoji", n, n + 1 + i[0].length))
                  : -1;
              },
            },
          ],
        };
      const St = n("PQU8");
      n.d(e, "commonmarkLanguage", () => {
        return Lt;
      }),
        n.d(e, "deleteMarkupBackward", () => {
          return Bt;
        }),
        n.d(e, "insertNewlineContinueMarkup", () => {
          return Pt;
        }),
        n.d(e, "markdown", () => {
          return Ot;
        }),
        n.d(e, "markdownKeymap", () => {
          return Nt;
        }),
        n.d(e, "markdownLanguage", () => {
          return Tt;
        });
      const Ct = Object(l.defineLanguageFacet)({
          block: { open: "\x3c!--", close: "--\x3e" },
        }),
        At = dt.configure({
          props: [
            Object(a.styleTags)({
              "Blockquote/...": a.tags.quote,
              HorizontalRule: a.tags.contentSeparator,
              "ATXHeading1/... SetextHeading1/...": a.tags.heading1,
              "ATXHeading2/... SetextHeading2/...": a.tags.heading2,
              "ATXHeading3/...": a.tags.heading3,
              "ATXHeading4/...": a.tags.heading4,
              "ATXHeading5/...": a.tags.heading5,
              "ATXHeading6/...": a.tags.heading6,
              "Comment CommentBlock": a.tags.comment,
              Escape: a.tags.escape,
              Entity: a.tags.character,
              "Emphasis/...": a.tags.emphasis,
              "StrongEmphasis/...": a.tags.strong,
              "Link/... Image/...": a.tags.link,
              "OrderedList/... BulletList/...": a.tags.list,
              "BlockQuote/...": a.tags.quote,
              InlineCode: a.tags.monospace,
              URL: a.tags.url,
              "HeaderMark HardBreak QuoteMark ListMark LinkMark EmphasisMark CodeMark":
                a.tags.processingInstruction,
              "CodeInfo LinkLabel": a.tags.labelName,
              LinkTitle: a.tags.string,
              Paragraph: a.tags.content,
            }),
            l.foldNodeProp.add((t) => {
              if (t.is("Block") && !t.is("Document"))
                return (t, e) => ({ from: e.doc.lineAt(t.from).to, to: t.to });
            }),
            l.indentNodeProp.add({ Document: () => null }),
            l.languageDataProp.add({ Document: Ct }),
          ],
          htmlParser: St.htmlLanguage.parser.configure({ dialect: "noMatch" }),
        }),
        Lt = Et(At),
        Tt = Et(
          At.configure([
            xt,
            vt,
            wt,
            yt,
            {
              props: [
                Object(a.styleTags)({
                  "TableDelimiter SubscriptMark SuperscriptMark StrikethroughMark":
                    a.tags.processingInstruction,
                  "TableHeader/...": a.tags.heading,
                  "Strikethrough/...": a.tags.deleted,
                  TaskMarker: a.tags.atom,
                  Task: a.tags.list,
                  Emoji: a.tags.character,
                  "Subscript Superscript": a.tags.special(a.tags.content),
                  TableCell: a.tags.content,
                }),
              ],
            },
          ])
        );
      function Et(t) {
        return new l.Language(
          Ct,
          t,
          t.nodeSet.types.find((t) => "Document" == t.name)
        );
      }
      function It(t, e) {
        return e.sliceString(t.from, t.from + 50);
      }
      function Mt(t, e, n) {
        let i = [];
        for (let o = t; o && "Document" != o.name; o = o.parent)
          ("ListItem" != o.name && "Blockquote" != o.name) || i.push(o);
        let r = [],
          s = 0;
        for (let o = i.length - 1; o >= 0; o--) {
          let t,
            l = i[o];
          if ("Blockquote" == l.name && (t = /^\s*> ?/.exec(e.slice(s))))
            r.push({ from: s, string: t[0], node: l }), (s += t[0].length);
          else if (
            "ListItem" == l.name &&
            "OrderedList" == l.parent.name &&
            (t = /^\s*\d+([.)])\s*/.exec(It(l, n)))
          ) {
            let n =
              t[1].length >= 4 ? t[0].length - t[1].length + 1 : t[0].length;
            r.push({
              from: s,
              string: e.slice(s, s + n).replace(/\S/g, " "),
              node: l,
            }),
              (s += n);
          } else if (
            "ListItem" == l.name &&
            "BulletList" == l.parent.name &&
            (t = /^\s*[-+*] (\s*)/.exec(It(l, n)))
          ) {
            let n = t[1].length >= 4 ? t[0].length - t[1].length : t[0].length;
            r.push({
              from: s,
              string: e.slice(s, s + n).replace(/\S/g, " "),
              node: l,
            }),
              (s += n);
          }
        }
        return r;
      }
      const Pt = ({ state: t, dispatch: e }) => {
          let n = Object(l.syntaxTree)(t),
            i = null,
            o = t.changeByRange((e) => {
              if (e.empty && Tt.isActiveAt(t, e.from)) {
                let i = t.doc.lineAt(e.from),
                  o = Mt(n.resolve(e.from, -1), i.text, t.doc),
                  l = e.from,
                  a = [];
                if (o.length) {
                  let n = o[o.length - 1],
                    r = n.from + n.string.length;
                  if (
                    e.from - i.from >= r &&
                    !/\S/.test(i.text.slice(r, e.from - i.from))
                  ) {
                    let t = /List/.test(n.node.name) ? n.from : r;
                    for (; t > 0 && /\s/.test(i.text[t - 1]); ) t--;
                    l = i.from + t;
                  }
                  "ListItem" == n.node.name &&
                    (l < e.from && n.node.parent.from == n.node.from
                      ? (n.string = "")
                      : ((n.string = i.text.slice(
                          n.from,
                          n.from + n.string.length
                        )),
                        "OrderedList" == n.node.parent.name &&
                          l == e.from &&
                          (n.string = n.string.replace(/\d+/, (t) => +t + 1), ((t, e, n) => {
                          for (let i = -1, r = t; ; ) {
                            if ("ListItem" == r.name) {
                              let t = /^(\s*)(\d+)(?=[.)])/.exec(
                                e.sliceString(r.from, r.from + 10)
                              );
                              if (!t) return;
                              let s = +t[2];
                              if (i >= 0) {
                                if (s != i + 1) return;
                                n.push({
                                  from: r.from + t[1].length,
                                  to: r.from + t[0].length,
                                  insert: String(i + 2),
                                });
                              }
                              i = s;
                            }
                            let t = r.nextSibling;
                            if (!t) break;
                            r = t;
                          }
                        })(n.node, t.doc, a))));
                }
                let h = o.map((t) => t.string).join("");
                return (
                  e.from - i.from < h.length && (h = ""),
                  a.push({ from: l, to: e.from, insert: r.a.of(["", h]) }),
                  {
                    range: s.EditorSelection.cursor(l + 1 + h.length),
                    changes: a,
                  }
                );
              }
              return (i = { range: e });
            });
          return !i && (e(t.update(o, { scrollIntoView: !0 })), !0);
        },
        Bt = ({ state: t, dispatch: e }) => {
          let n = Object(l.syntaxTree)(t),
            i = null,
            r = t.changeByRange((e) => {
              if (e.empty && Tt.isActiveAt(t, e.from)) {
                let i = t.doc.lineAt(e.from),
                  r = Mt(n.resolve(e.from, -1), i.text, t.doc);
                if (r.length) {
                  let t = r[r.length - 1],
                    n = t.from + t.string.length;
                  if (
                    e.from > n + i.from &&
                    !/\S/.test(i.text.slice(n, e.from - i.from))
                  )
                    return {
                      range: s.EditorSelection.cursor(n + i.from),
                      changes: { from: n + i.from, to: e.from },
                    };
                  if (e.from - i.from == n) {
                    let r = i.from + t.from;
                    return "ListItem" == t.node.name &&
                      t.node.parent.from < t.node.from &&
                      /\S/.test(i.text.slice(t.from, n))
                      ? {
                          range: e,
                          changes: {
                            from: r,
                            to: r + t.string.length,
                            insert: t.string,
                          },
                        }
                      : {
                          range: s.EditorSelection.cursor(r),
                          changes: { from: r, to: e.from },
                        };
                  }
                }
              }
              return (i = { range: e });
            });
          return !i && (e(t.update(r, { scrollIntoView: !0 })), !0);
        },
        Nt = [
          { key: "Enter", run: Pt },
          { key: "Backspace", run: Bt },
        ];
      function Ot(t = {}) {
        let {
            codeLanguages: e,
            defaultCodeLanguage: n,
            addKeymap: i = !0,
            base: { parser: r } = Lt,
          } = t,
          a = t.extensions ? [t.extensions] : [];
        if (!(r instanceof F))
          throw new RangeError(
            "Base parser provided to `markdown` should be a Markdown parser"
          );
        let h, c;
        return (
          (e || n) &&
            a.push(
              ((h = e || []),
              (c = n),
              {
                codeParser(t) {
                  let e =
                    t && l.LanguageDescription.matchLanguageName(h, t, !0);
                  return e
                    ? e.support
                      ? e.support.language.parser
                      : (e.load(), l.EditorParseContext.skippingParser)
                    : c
                    ? c.parser
                    : null;
                },
              })
            ),
          new l.LanguageSupport(
            Et(r.configure(a)),
            i ? s.Prec.extend(o.keymap.of(Nt)) : []
          )
        );
      }
    },
    WQMp(t, e, n) {
      "use strict";
      n.d(e, "a", () => {
        return i;
      }),
        n.d(e, "b", () => {
          return o;
        }),
        n.d(e, "c", () => {
          return h;
        }),
        n.d(e, "d", () => {
          return a;
        }),
        n.d(e, "e", () => {
          return c;
        }),
        n.d(e, "f", () => {
          return f;
        }),
        n.d(e, "g", () => {
          return S;
        }),
        n.d(e, "h", () => {
          return C;
        });
      const i = 1024;
      let r = 0;
      const s = new WeakMap();
      class o {
        constructor({ deserialize: t } = {}) {
          (this.id = r++),
            (this.deserialize =
              t ||
              (() => {
                throw new Error(
                  "This node type doesn't define a deserialize function"
                );
              }));
        }
        static string() {
          return new o({ deserialize: (t) => t });
        }
        static number() {
          return new o({ deserialize: Number });
        }
        static flag() {
          return new o({ deserialize: () => !0 });
        }
        set(t, e) {
          return (t[this.id] = e), t;
        }
        add(t) {
          return (
            "function" != typeof t && (t = a.match(t)),
            (e) => {
              let n = t(e);
              return void 0 === n ? null : [this, n];
            }
          );
        }
      }
      (o.closedBy = new o({ deserialize: (t) => t.split(" ") })),
        (o.openedBy = new o({ deserialize: (t) => t.split(" ") })),
        (o.group = new o({ deserialize: (t) => t.split(" ") }));
      const l = Object.create(null);
      class a {
        constructor(t, e, n, i = 0) {
          (this.name = t), (this.props = e), (this.id = n), (this.flags = i);
        }
        static define(t) {
          let e = t.props && t.props.length ? Object.create(null) : l,
            n =
              (t.top ? 1 : 0) |
              (t.skipped ? 2 : 0) |
              (t.error ? 4 : 0) |
              (null == t.name ? 8 : 0),
            i = new a(t.name || "", e, t.id, n);
          if (t.props)
            for (let r of t.props)
              Array.isArray(r) || (r = r(i)), r && r[0].set(e, r[1]);
          return i;
        }
        prop(t) {
          return this.props[t.id];
        }
        get isTop() {
          return (1 & this.flags) > 0;
        }
        get isSkipped() {
          return (2 & this.flags) > 0;
        }
        get isError() {
          return (4 & this.flags) > 0;
        }
        get isAnonymous() {
          return (8 & this.flags) > 0;
        }
        is(t) {
          if ("string" == typeof t) {
            if (this.name == t) return !0;
            let e = this.prop(o.group);
            return !!e && e.indexOf(t) > -1;
          }
          return this.id == t;
        }
        static match(t) {
          let e = Object.create(null);
          for (let n in t) for (let i of n.split(" ")) e[i] = t[n];
          return (t) => {
            for (let n = t.prop(o.group), i = -1; i < (n ? n.length : 0); i++) {
              let r = e[i < 0 ? t.name : n[i]];
              if (r) return r;
            }
          };
        }
      }
      a.none = new a("", Object.create(null), 0, 8);
      class h {
        constructor(t) {
          this.types = t;
          for (let e = 0; e < t.length; e++)
            if (t[e].id != e)
              throw new RangeError(
                "Node type ids should correspond to array positions when creating a node set"
              );
        }
        extend(...t) {
          let e = [];
          for (let n of this.types) {
            let i = null;
            for (let e of t) {
              let t = e(n);
              t && (i || (i = Object.assign({}, n.props)), t[0].set(i, t[1]));
            }
            e.push(i ? new a(n.name, i, n.id, n.flags) : n);
          }
          return new h(e);
        }
      }
      class c {
        constructor(t, e, n, i) {
          (this.type = t),
            (this.children = e),
            (this.positions = n),
            (this.length = i);
        }
        toString() {
          let t = this.children.map((t) => t.toString()).join();
          return this.type.name
            ? (/\W/.test(this.type.name) && !this.type.isError
                ? JSON.stringify(this.type.name)
                : this.type.name) + (t.length ? "(" + t + ")" : "")
            : t;
        }
        cursor(t, e = 0) {
          let n = (null != t && s.get(this)) || this.topNode,
            i = new b(n);
          return null != t && (i.moveTo(t, e), s.set(this, i._tree)), i;
        }
        fullCursor() {
          return new b(this.topNode, !0);
        }
        get topNode() {
          return new d(this, 0, 0, null);
        }
        resolve(t, e = 0) {
          return this.cursor(t, e).node;
        }
        iterate(t) {
          let { enter: e, leave: n, from: i = 0, to: r = this.length } = t;
          for (let s = this.cursor(); ; ) {
            let t = !1;
            if (
              s.from <= r &&
              s.to >= i &&
              (s.type.isAnonymous || !1 !== e(s.type, s.from, s.to))
            ) {
              if (s.firstChild()) continue;
              s.type.isAnonymous || (t = !0);
            }
            for (
              ;
              t && n && n(s.type, s.from, s.to),
                (t = s.type.isAnonymous),
                !s.nextSibling();

            ) {
              if (!s.parent()) return;
              t = !0;
            }
          }
        }
        balance(t = i) {
          return this.children.length <= w
            ? this
            : v(
                this.type,
                a.none,
                this.children,
                this.positions,
                0,
                this.children.length,
                0,
                t,
                this.length,
                0
              );
        }
        static build(t) {
          return (t => {
            let e;
            let {
                buffer: n,
                nodeSet: r,
                topID: s = 0,
                maxBufferLength: o = i,
                reused: l = [],
                minRepeatType: h = r.types.length,
              } = t,
              d = Array.isArray(n) ? new k(n, n.length) : n,
              p = r.types,
              m = 0;
            function g(t, e, n, i, s) {
              let { id: x, start: k, end: y, size: S } = d,
                C = k - t;
              if (S < 0)
                return (
                  -1 == S ? (n.push(l[x]), i.push(C)) : (m = x), void d.next()
                );
              let A,
                L,
                T = p[x];
              if (
                y - k <= o &&
                (L = ((t, e) => {
                  let n = d.fork(),
                    i = 0,
                    r = 0,
                    s = 0,
                    l = n.end - o,
                    a = { size: 0, start: 0, skip: 0 };
                  t: for (let o = n.pos - t; n.pos > o; ) {
                    if (n.id == e) {
                      (a.size = i),
                        (a.start = r),
                        (a.skip = s),
                        (s += 4),
                        (i += 4),
                        n.next();
                      continue;
                    }
                    let t = n.size,
                      c = n.pos - t;
                    if (t < 0 || c < o || n.start < l) break;
                    let u = n.id >= h ? 4 : 0,
                      f = n.start;
                    for (n.next(); n.pos > c; ) {
                      if (n.size < 0) break t;
                      n.id >= h && (u += 4), n.next();
                    }
                    (r = f), (i += t), (s += u);
                  }
                  (e < 0 || i == t) &&
                    ((a.size = i), (a.start = r), (a.skip = s));
                  return a.size > 4 ? a : void 0;
                })(d.pos - e, s))
              ) {
                let e = new Uint16Array(L.size - L.skip),
                  n = d.pos - L.size,
                  i = e.length;
                for (; d.pos > n; ) i = b(L.start, e, i, s);
                (A = new f(e, y - L.start, r, s < 0 ? a.none : p[s])),
                  (C = L.start - t);
              } else {
                let t = d.pos - S;
                d.next();
                let e = [],
                  n = [],
                  i = x >= h ? x : -1;
                for (; d.pos > t; ) d.id == i ? d.next() : g(k, t, e, n, i);
                e.reverse(),
                  n.reverse(),
                  (A =
                    i > -1 && e.length > w
                      ? v(T, T, e, n, 0, e.length, 0, o, y - k, m)
                      : u(new c(T, e, n, y - k), m));
              }
              n.push(A), i.push(C);
            }
            function b(t, e, n, i) {
              let { id: r, start: s, end: o, size: l } = d;
              if ((d.next(), r == i)) return n;
              let a = n;
              if (l > 4) {
                let r = d.pos - (l - 4);
                for (; d.pos > r; ) n = b(t, e, n, i);
              }
              return (
                r < h &&
                  ((e[--n] = a),
                  (e[--n] = o - t),
                  (e[--n] = s - t),
                  (e[--n] = r)),
                n
              );
            }
            let x = [],
              y = [];
            for (; d.pos > 0; ) g(t.start || 0, 0, x, y, -1);
            let S =
              null !== (e = t.length) && void 0 !== e
                ? e
                : x.length
                ? y[0] + x[0].length
                : 0;
            return new c(p[s], x.reverse(), y.reverse(), S);
          })(t);
        }
      }
      function u(t, e) {
        return e && (t.contextHash = e), t;
      }
      c.empty = new c(a.none, [], [], 0);
      class f {
        constructor(t, e, n, i = a.none) {
          (this.buffer = t), (this.length = e), (this.set = n), (this.type = i);
        }
        toString() {
          let t = [];
          for (let e = 0; e < this.buffer.length; )
            t.push(this.childString(e)), (e = this.buffer[e + 3]);
          return t.join(",");
        }
        childString(t) {
          let e = this.buffer[t],
            n = this.buffer[t + 3],
            i = this.set.types[e],
            r = i.name;
          if (
            (/\W/.test(r) && !i.isError && (r = JSON.stringify(r)),
            n == (t += 4))
          )
            return r;
          let s = [];
          for (; t < n; ) s.push(this.childString(t)), (t = this.buffer[t + 3]);
          return r + "(" + s.join(",") + ")";
        }
        findChild(t, e, n, i) {
          let { buffer: r } = this,
            s = -1;
          for (let o = t; o != e; o = r[o + 3])
            if (-1e8 != i) {
              let t = r[o + 1],
                e = r[o + 2];
              if (n > 0) {
                if ((e > i && (s = o), e > i)) break;
              } else if ((t < i && (s = o), e >= i)) break;
            } else if (((s = o), n > 0)) break;
          return s;
        }
      }
      class d {
        constructor(t, e, n, i) {
          (this.node = t),
            (this.from = e),
            (this.index = n),
            (this._parent = i);
        }
        get type() {
          return this.node.type;
        }
        get name() {
          return this.node.type.name;
        }
        get to() {
          return this.from + this.node.length;
        }
        nextChild(t, e, n, i = !1) {
          for (let r = this; ; ) {
            for (
              let { children: s, positions: o } = r.node,
                l = e > 0 ? s.length : -1;
              t != l;
              t += e
            ) {
              let l = s[t],
                a = o[t] + r.from;
              if (-1e8 == n || !(e < 0 ? a >= n : a + l.length <= n))
                if (l instanceof f) {
                  let i = l.findChild(
                    0,
                    l.buffer.length,
                    e,
                    -1e8 == n ? -1e8 : n - a
                  );
                  if (i > -1) return new g(new m(r, l, t, a), null, i);
                } else if (i || !l.type.isAnonymous || x(l)) {
                  let s = new d(l, a, t, r);
                  return i || !s.type.isAnonymous
                    ? s
                    : s.nextChild(e < 0 ? l.children.length - 1 : 0, e, n);
                }
            }
            if (i || !r.type.isAnonymous) return null;
            if (((t = r.index + e), (r = r._parent), !r)) return null;
          }
        }
        get firstChild() {
          return this.nextChild(0, 1, -1e8);
        }
        get lastChild() {
          return this.nextChild(this.node.children.length - 1, -1, -1e8);
        }
        childAfter(t) {
          return this.nextChild(0, 1, t);
        }
        childBefore(t) {
          return this.nextChild(this.node.children.length - 1, -1, t);
        }
        nextSignificantParent() {
          let t = this;
          for (; t.type.isAnonymous && t._parent; ) t = t._parent;
          return t;
        }
        get parent() {
          return this._parent ? this._parent.nextSignificantParent() : null;
        }
        get nextSibling() {
          return this._parent
            ? this._parent.nextChild(this.index + 1, 1, -1)
            : null;
        }
        get prevSibling() {
          return this._parent
            ? this._parent.nextChild(this.index - 1, -1, -1)
            : null;
        }
        get cursor() {
          return new b(this);
        }
        resolve(t, e = 0) {
          return this.cursor.moveTo(t, e).node;
        }
        getChild(t, e = null, n = null) {
          let i = p(this, t, e, n);
          return i.length ? i[0] : null;
        }
        getChildren(t, e = null, n = null) {
          return p(this, t, e, n);
        }
        toString() {
          return this.node.toString();
        }
      }
      function p(t, e, n, i) {
        let r = t.cursor,
          s = [];
        if (!r.firstChild()) return s;
        if (null != n) for (; !r.type.is(n); ) if (!r.nextSibling()) return s;
        for (;;) {
          if (null != i && r.type.is(i)) return s;
          if ((r.type.is(e) && s.push(r.node), !r.nextSibling()))
            return null == i ? s : [];
        }
      }
      class m {
        constructor(t, e, n, i) {
          (this.parent = t),
            (this.buffer = e),
            (this.index = n),
            (this.start = i);
        }
      }
      class g {
        constructor(t, e, n) {
          (this.context = t),
            (this._parent = e),
            (this.index = n),
            (this.type = t.buffer.set.types[t.buffer.buffer[n]]);
        }
        get name() {
          return this.type.name;
        }
        get from() {
          return (
            this.context.start + this.context.buffer.buffer[this.index + 1]
          );
        }
        get to() {
          return (
            this.context.start + this.context.buffer.buffer[this.index + 2]
          );
        }
        child(t, e) {
          let { buffer: n } = this.context,
            i = n.findChild(
              this.index + 4,
              n.buffer[this.index + 3],
              t,
              -1e8 == e ? -1e8 : e - this.context.start
            );
          return i < 0 ? null : new g(this.context, this, i);
        }
        get firstChild() {
          return this.child(1, -1e8);
        }
        get lastChild() {
          return this.child(-1, -1e8);
        }
        childAfter(t) {
          return this.child(1, t);
        }
        childBefore(t) {
          return this.child(-1, t);
        }
        get parent() {
          return this._parent || this.context.parent.nextSignificantParent();
        }
        externalSibling(t) {
          return this._parent
            ? null
            : this.context.parent.nextChild(this.context.index + t, t, -1);
        }
        get nextSibling() {
          let { buffer: t } = this.context,
            e = t.buffer[this.index + 3];
          return e <
            (this._parent ? t.buffer[this._parent.index + 3] : t.buffer.length)
            ? new g(this.context, this._parent, e)
            : this.externalSibling(1);
        }
        get prevSibling() {
          let { buffer: t } = this.context,
            e = this._parent ? this._parent.index + 4 : 0;
          return this.index == e
            ? this.externalSibling(-1)
            : new g(
                this.context,
                this._parent,
                t.findChild(e, this.index, -1, -1e8)
              );
        }
        get cursor() {
          return new b(this);
        }
        resolve(t, e = 0) {
          return this.cursor.moveTo(t, e).node;
        }
        toString() {
          return this.context.buffer.childString(this.index);
        }
        getChild(t, e = null, n = null) {
          let i = p(this, t, e, n);
          return i.length ? i[0] : null;
        }
        getChildren(t, e = null, n = null) {
          return p(this, t, e, n);
        }
      }
      class b {
        constructor(t, e = !1) {
          if (
            ((this.full = e),
            (this.buffer = null),
            (this.stack = []),
            (this.index = 0),
            (this.bufferNode = null),
            t instanceof d)
          )
            this.yieldNode(t);
          else {
            (this._tree = t.context.parent), (this.buffer = t.context);
            for (let e = t._parent; e; e = e._parent)
              this.stack.unshift(e.index);
            (this.bufferNode = t), this.yieldBuf(t.index);
          }
        }
        get name() {
          return this.type.name;
        }
        yieldNode(t) {
          return (
            !!t &&
            ((this._tree = t),
            (this.type = t.type),
            (this.from = t.from),
            (this.to = t.to),
            !0)
          );
        }
        yieldBuf(t, e) {
          this.index = t;
          let { start: n, buffer: i } = this.buffer;
          return (
            (this.type = e || i.set.types[i.buffer[t]]),
            (this.from = n + i.buffer[t + 1]),
            (this.to = n + i.buffer[t + 2]),
            !0
          );
        }
        yield(t) {
          return (
            !!t &&
            (t instanceof d
              ? ((this.buffer = null), this.yieldNode(t))
              : ((this.buffer = t.context), this.yieldBuf(t.index, t.type)))
          );
        }
        toString() {
          return this.buffer
            ? this.buffer.buffer.childString(this.index)
            : this._tree.toString();
        }
        enter(t, e) {
          if (!this.buffer)
            return this.yield(
              this._tree.nextChild(
                t < 0 ? this._tree.node.children.length - 1 : 0,
                t,
                e,
                this.full
              )
            );
          let { buffer: n } = this.buffer,
            i = n.findChild(
              this.index + 4,
              n.buffer[this.index + 3],
              t,
              -1e8 == e ? -1e8 : e - this.buffer.start
            );
          return !(i < 0) && (this.stack.push(this.index), this.yieldBuf(i));
        }
        firstChild() {
          return this.enter(1, -1e8);
        }
        lastChild() {
          return this.enter(-1, -1e8);
        }
        childAfter(t) {
          return this.enter(1, t);
        }
        childBefore(t) {
          return this.enter(-1, t);
        }
        parent() {
          if (!this.buffer)
            return this.yieldNode(
              this.full ? this._tree._parent : this._tree.parent
            );
          if (this.stack.length) return this.yieldBuf(this.stack.pop());
          let t = this.full
            ? this.buffer.parent
            : this.buffer.parent.nextSignificantParent();
          return (this.buffer = null), this.yieldNode(t);
        }
        sibling(t) {
          if (!this.buffer)
            return (
              !!this._tree._parent &&
              this.yield(
                this._tree._parent.nextChild(
                  this._tree.index + t,
                  t,
                  -1e8,
                  this.full
                )
              )
            );
          let { buffer: e } = this.buffer,
            n = this.stack.length - 1;
          if (t < 0) {
            let t = n < 0 ? 0 : this.stack[n] + 4;
            if (this.index != t)
              return this.yieldBuf(e.findChild(t, this.index, -1, -1e8));
          } else {
            let t = e.buffer[this.index + 3];
            if (t < (n < 0 ? e.buffer.length : e.buffer[this.stack[n] + 3]))
              return this.yieldBuf(t);
          }
          return (
            n < 0 &&
            this.yield(
              this.buffer.parent.nextChild(
                this.buffer.index + t,
                t,
                -1e8,
                this.full
              )
            )
          );
        }
        nextSibling() {
          return this.sibling(1);
        }
        prevSibling() {
          return this.sibling(-1);
        }
        atLastNode(t) {
          let e,
            n,
            { buffer: i } = this;
          if (i) {
            if (t > 0) {
              if (this.index < i.buffer.buffer.length) return !1;
            } else
              for (let t = 0; t < this.index; t++)
                if (i.buffer.buffer[t + 3] < this.index) return !1;
            ({ index: e, parent: n } = i);
          } else ({ index: e, _parent: n } = this._tree);
          for (; n; ({ index: e, _parent: n } = n))
            for (
              let i = e + t, r = t < 0 ? -1 : n.node.children.length;
              i != r;
              i += t
            ) {
              let t = n.node.children[i];
              if (this.full || !t.type.isAnonymous || t instanceof f || x(t))
                return !1;
            }
          return !0;
        }
        move(t) {
          if (this.enter(t, -1e8)) return !0;
          for (;;) {
            if (this.sibling(t)) return !0;
            if (this.atLastNode(t) || !this.parent()) return !1;
          }
        }
        next() {
          return this.move(1);
        }
        prev() {
          return this.move(-1);
        }
        moveTo(t, e = 0) {
          for (
            ;
            (this.from == this.to ||
              (e < 1 ? this.from >= t : this.from > t) ||
              (e > -1 ? this.to <= t : this.to < t)) &&
            this.parent();

          );
          for (; e < 0 ? this.childBefore(t) : this.childAfter(t); )
            if (
              this.from == this.to ||
              (e < 1 ? this.from >= t : this.from > t) ||
              (e > -1 ? this.to <= t : this.to < t)
            ) {
              this.parent();
              break;
            }
          return this;
        }
        get node() {
          if (!this.buffer) return this._tree;
          let t = this.bufferNode,
            e = null,
            n = 0;
          if (t && t.context == this.buffer)
            t: for (let i = this.index, r = this.stack.length; r >= 0; ) {
              for (let s = t; s; s = s._parent)
                if (s.index == i) {
                  if (i == this.index) return s;
                  (e = s), (n = r + 1);
                  break t;
                }
              i = this.stack[--r];
            }
          for (let i = n; i < this.stack.length; i++)
            e = new g(this.buffer, e, this.stack[i]);
          return (this.bufferNode = new g(this.buffer, e, this.index));
        }
        get tree() {
          return this.buffer ? null : this._tree.node;
        }
      }
      function x(t) {
        return t.children.some(
          (t) => !t.type.isAnonymous || t instanceof f || x(t)
        );
      }
      class k {
        constructor(t, e) {
          (this.buffer = t), (this.index = e);
        }
        get id() {
          return this.buffer[this.index - 4];
        }
        get start() {
          return this.buffer[this.index - 3];
        }
        get end() {
          return this.buffer[this.index - 2];
        }
        get size() {
          return this.buffer[this.index - 1];
        }
        get pos() {
          return this.index;
        }
        next() {
          this.index -= 4;
        }
        fork() {
          return new k(this.buffer, this.index);
        }
      }
      const w = 8;
      function v(t, e, n, i, r, s, o, l, h, f) {
        let d = [],
          p = [];
        if (h <= l) for (let a = r; a < s; a++) d.push(n[a]), p.push(i[a] - o);
        else {
          let t = Math.max(l, Math.ceil((1.5 * h) / w));
          for (let h = r; h < s; ) {
            let r = h,
              m = i[h];
            for (h++; h < s; h++) {
              if (i[h] + n[h].length - m > t) break;
            }
            if (h == r + 1) {
              let i = n[r];
              if (i instanceof c && i.type == e && i.length > t << 1) {
                for (let t = 0; t < i.children.length; t++)
                  d.push(i.children[t]), p.push(i.positions[t] + m - o);
                continue;
              }
              d.push(i);
            } else if (h == r + 1) d.push(n[r]);
            else {
              let t = v(
                e,
                e,
                n,
                i,
                r,
                h,
                m,
                l,
                i[h - 1] + n[h - 1].length - m,
                f
              );
              e == a.none ||
                y(t.children, e) ||
                (t = u(new c(a.none, t.children, t.positions, t.length), f)),
                d.push(t);
            }
            p.push(m - o);
          }
        }
        return u(new c(t, d, p, h), f);
      }
      function y(t, e) {
        for (let n of t) if (n.type == e) return !0;
        return !1;
      }
      class S {
        constructor(t, e, n, i, r) {
          (this.from = t),
            (this.to = e),
            (this.tree = n),
            (this.offset = i),
            (this.open = r);
        }
        get openStart() {
          return (1 & this.open) > 0;
        }
        get openEnd() {
          return (2 & this.open) > 0;
        }
        static applyChanges(t, e, n = 128) {
          if (!e.length) return t;
          let i = [],
            r = 1,
            s = t.length ? t[0] : null,
            o = 0,
            l = 0,
            a = 0;
          for (;;) {
            let h = o < e.length ? e[o++] : null,
              c = h ? h.fromA : 1e9;
            if (c - l >= n)
              for (; s && s.from < c; ) {
                let e = s;
                if (l >= e.from || c <= e.to || a) {
                  let t = Math.max(e.from, l) - a,
                    n = Math.min(e.to, c) - a;
                  e =
                    t >= n
                      ? null
                      : new S(
                          t,
                          n,
                          e.tree,
                          e.offset + a,
                          (o > 0 ? 1 : 0) | (h ? 2 : 0)
                        );
                }
                if ((e && i.push(e), s.to > c)) break;
                s = r < t.length ? t[r++] : null;
              }
            if (!h) break;
            (l = h.toA), (a = h.toA - h.toB);
          }
          return i;
        }
        static addTree(t, e = [], n = !1) {
          let i = [new S(0, t.length, t, 0, n ? 2 : 0)];
          for (let r of e) r.to > t.length && i.push(r);
          return i;
        }
      }
      function C(t) {
        return new A(t);
      }
      class A {
        constructor(t, e = t.length) {
          (this.string = t), (this.length = e);
        }
        get(t) {
          return t < 0 || t >= this.length ? -1 : this.string.charCodeAt(t);
        }
        lineAfter(t) {
          if (t < 0) return "";
          let e = this.string.indexOf("\n", t);
          return this.string.slice(
            t,
            e < 0 ? this.length : Math.min(e, this.length)
          );
        }
        read(t, e) {
          return this.string.slice(t, Math.min(this.length, e));
        }
        clip(t) {
          return new A(this.string, t);
        }
      }
    },
    fK0Z(t, e, n) {
      "use strict";
      n.d(e, "a", () => {
        return d;
      }),
        n.d(e, "b", () => {
          return h;
        }),
        n.d(e, "c", () => {
          return a;
        });
      const i = n("AtEE"), r = n("4eob");
      const s =
          "undefined" != typeof navigator &&
          !/Edge\/(\d+)/.exec(navigator.userAgent) &&
          /Apple Computer/.test(navigator.vendor) &&
          (/Mobile\/\w+/.test(navigator.userAgent) ||
            navigator.maxTouchPoints > 2),
        o = i.ViewPlugin.fromClass(
          class {
            constructor(t) {
              (this.view = t),
                (this.inView = !0),
                (this.measureReq = {
                  read: this.readMeasure.bind(this),
                  write: this.writeMeasure.bind(this),
                  key: this,
                }),
                (this.tooltips = t.state.facet(h)),
                (this.tooltipViews = this.tooltips.map((t) =>
                  this.createTooltip(t)
                ));
            }
            update(t) {
              let e = t.state.facet(h);
              if (e == this.tooltips)
                for (let n of this.tooltipViews) n.update && n.update(t);
              else {
                let n = [];
                for (let i = 0; i < e.length; i++) {
                  let r = e[i],
                    s = -1;
                  for (let t = 0; t < this.tooltips.length; t++)
                    this.tooltips[t].create == r.create && (s = t);
                  if (s < 0) n[i] = this.createTooltip(r);
                  else {
                    let e = (n[i] = this.tooltipViews[s]);
                    e.update && e.update(t);
                  }
                }
                for (let t of this.tooltipViews)
                  n.indexOf(t) < 0 && t.dom.remove();
                (this.tooltips = e),
                  (this.tooltipViews = n),
                  this.maybeMeasure();
              }
            }
            createTooltip(t) {
              let e = t.create(this.view);
              return (
                e.dom.classList.add("cm-tooltip"),
                t.class && e.dom.classList.add(t.class),
                this.view.dom.appendChild(e.dom),
                e.mount && e.mount(this.view),
                e
              );
            }
            destroy() {
              for (let { dom: t } of this.tooltipViews) t.remove();
            }
            readMeasure() {
              return {
                editor: this.view.dom.getBoundingClientRect(),
                pos: this.tooltips.map((t) => this.view.coordsAtPos(t.pos)),
                size: this.tooltipViews.map(({ dom: t }) =>
                  t.getBoundingClientRect()
                ),
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight,
              };
            }
            writeMeasure(t) {
              let { editor: e } = t;
              for (let n = 0; n < this.tooltipViews.length; n++) {
                let r = this.tooltips[n],
                  o = this.tooltipViews[n],
                  { dom: l } = o,
                  a = t.pos[n],
                  h = t.size[n];
                if (
                  !a ||
                  a.bottom <= e.top ||
                  a.top >= e.bottom ||
                  a.right <= e.left ||
                  a.left >= e.right
                ) {
                  l.style.top = "-10000px";
                  continue;
                }
                let c = h.right - h.left,
                  u = h.bottom - h.top,
                  f =
                    this.view.textDirection == i.Direction.LTR
                      ? Math.min(a.left, t.innerWidth - c)
                      : Math.max(0, a.left - c),
                  d = !!r.above;
                !r.strictSide &&
                  (d
                    ? a.top - (h.bottom - h.top) < 0
                    : a.bottom + (h.bottom - h.top) > t.innerHeight) &&
                  (d = !d),
                  s
                    ? ((l.style.top =
                        (d ? a.top - u : a.bottom) - e.top + "px"),
                      (l.style.left = f - e.left + "px"),
                      (l.style.position = "absolute"))
                    : ((l.style.top = (d ? a.top - u : a.bottom) + "px"),
                      (l.style.left = f + "px")),
                  l.classList.toggle("cm-tooltip-above", d),
                  l.classList.toggle("cm-tooltip-below", !d),
                  o.positioned && o.positioned();
              }
            }
            maybeMeasure() {
              this.tooltips.length &&
                ((this.view.inView || this.inView) &&
                  this.view.requestMeasure(this.measureReq),
                (this.inView = this.view.inView));
            }
          },
          {
            eventHandlers: {
              scroll() {
                this.maybeMeasure();
              },
            },
          }
        ),
        l = i.EditorView.baseTheme({
          ".cm-tooltip": {
            position: "fixed",
            border: "1px solid #ddd",
            backgroundColor: "#f5f5f5",
            zIndex: 100,
          },
        });
      function a() {
        return [o, l];
      }
      const h = r.Facet.define(),
        c = 750,
        u = 6;
      class f {
        constructor(t, e, n, i) {
          (this.view = t),
            (this.source = e),
            (this.field = n),
            (this.setHover = i),
            (this.lastMouseMove = null),
            (this.hoverTimeout = -1),
            (this.restartTimeout = -1),
            (this.pending = null),
            (this.checkHover = this.checkHover.bind(this)),
            t.dom.addEventListener(
              "mouseleave",
              (this.mouseleave = this.mouseleave.bind(this))
            ),
            t.dom.addEventListener(
              "mousemove",
              (this.mousemove = this.mousemove.bind(this))
            );
        }
        update() {
          this.pending &&
            ((this.pending = null),
            clearTimeout(this.restartTimeout),
            (this.restartTimeout = setTimeout(() => this.startHover(), 20)));
        }
        get active() {
          return this.view.state.field(this.field);
        }
        checkHover() {
          if (((this.hoverTimeout = -1), this.active)) return;
          let t = Date.now(),
            e = this.lastMouseMove;
          t - e.timeStamp < c
            ? (this.hoverTimeout = setTimeout(
                this.checkHover,
                c - (t - e.timeStamp)
              ))
            : this.startHover();
        }
        startHover() {
          var t;
          clearTimeout(this.restartTimeout);
          let e = this.lastMouseMove,
            n = { x: e.clientX, y: e.clientY },
            r = this.view.contentDOM.contains(e.target)
              ? this.view.posAtCoords(n)
              : null;
          if (null == r) return;
          let s = this.view.coordsAtPos(r);
          if (
            null == s ||
            n.y < s.top ||
            n.y > s.bottom ||
            n.x < s.left - this.view.defaultCharacterWidth ||
            n.x > s.right + this.view.defaultCharacterWidth
          )
            return;
          let o = this.view
              .bidiSpans(this.view.state.doc.lineAt(r))
              .find((t) => t.from <= r && t.to >= r),
            l = o && o.dir == i.Direction.RTL ? -1 : 1,
            a = this.source(this.view, r, n.x < s.left ? -l : l);
          if (null === (t = a) || void 0 === t ? void 0 : t.then) {
            let t = (this.pending = { pos: r });
            a.then((e) => {
              this.pending == t &&
                ((this.pending = null),
                e && this.view.dispatch({ effects: this.setHover.of(e) }));
            });
          } else a && this.view.dispatch({ effects: this.setHover.of(a) });
        }
        mousemove(t) {
          let e;
          (this.lastMouseMove = t),
            this.hoverTimeout < 0 &&
              (this.hoverTimeout = setTimeout(this.checkHover, c));
          let n = this.active;
          if (
            (n &&
              !(t => {
                for (let e = t; e; e = e.parentNode)
                  if (1 == e.nodeType && e.classList.contains("cm-tooltip"))
                    return !0;
                return !1;
              })(t.target)) ||
            this.pending
          ) {
            let { pos: i } = n || this.pending,
              r =
                null !== (e = null === n || void 0 === n ? void 0 : n.end) &&
                void 0 !== e
                  ? e
                  : i;
            (i == r ? this.view.posAtCoords({ x: t.clientX, y: t.clientY }) == i : ((t, e, n, i, r, s) => {
                  let o = document.createRange(),
                    l = t.domAtPos(e),
                    a = t.domAtPos(n);
                  o.setEnd(a.node, a.offset), o.setStart(l.node, l.offset);
                  let h = o.getClientRects();
                  o.detach();
                  for (let c = 0; c < h.length; c++) {
                    let t = h[c];
                    if (
                      Math.max(
                        t.top - r,
                        r - t.bottom,
                        t.left - i,
                        i - t.right
                      ) <= s
                    )
                      return !0;
                  }
                  return !1;
                })(this.view, i, r, t.clientX, t.clientY, u)) ||
              (this.view.dispatch({ effects: this.setHover.of(null) }),
              (this.pending = null));
          }
        }
        mouseleave() {
          clearTimeout(this.hoverTimeout),
            (this.hoverTimeout = -1),
            this.active &&
              this.view.dispatch({ effects: this.setHover.of(null) });
        }
        destroy() {
          clearTimeout(this.hoverTimeout),
            this.view.dom.removeEventListener("mouseleave", this.mouseleave),
            this.view.dom.removeEventListener("mousemove", this.mousemove);
        }
      }
      function d(t, e = {}) {
        const n = r.StateEffect.define(),
          s = r.StateField.define({
            create: () => null,
            update(t, i) {
              if (t && e.hideOnChange && (i.docChanged || i.selection))
                return null;
              for (let e of i.effects) if (e.is(n)) return e.value;
              if (t && i.docChanged) {
                let e = i.changes.mapPos(t.pos, -1, r.MapMode.TrackDel);
                if (null == e) return null;
                let n = Object.assign(Object.create(null), t);
                return (
                  (n.pos = e),
                  null != t.end && (n.end = i.changes.mapPos(t.end)),
                  n
                );
              }
              return t;
            },
            provide: (t) =>
              h.computeN([t], (e) => {
                let n = e.field(t);
                return n ? [n] : [];
              }),
          });
        return [s, i.ViewPlugin.define((e) => new f(e, t, s, n)), a()];
      }
    },
    ubVE(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "HighlightStyle", () => {
          return w;
        }),
        n.d(e, "Tag", () => {
          return c;
        }),
        n.d(e, "classHighlightStyle", () => {
          return $;
        }),
        n.d(e, "defaultHighlightStyle", () => {
          return z;
        }),
        n.d(e, "highlightTree", () => {
          return v;
        }),
        n.d(e, "styleTags", () => {
          return d;
        }),
        n.d(e, "tags", () => {
          return F;
        });
      const i = n("WQMp"), r = n("rknV"), s = n("AtEE"), o = n("4eob"), l = n("yqQ+"), a = n("wG49");
      let h = 0;
      class c {
        constructor(t, e, n) {
          (this.set = t), (this.base = e), (this.modified = n), (this.id = h++);
        }
        static define(t) {
          if (null === t || void 0 === t ? void 0 : t.base)
            throw new Error("Can not derive from a modified tag");
          let e = new c([], null, []);
          if ((e.set.push(e), t)) for (let n of t.set) e.set.push(n);
          return e;
        }
        static defineModifier() {
          let t = new f();
          return (e) =>
            e.modified.indexOf(t) > -1
              ? e
              : f.get(
                  e.base || e,
                  e.modified.concat(t).sort((t, e) => t.id - e.id)
                );
        }
      }
      let u = 0;
      class f {
        constructor() {
          (this.instances = []), (this.id = u++);
        }
        static get(t, e) {
          if (!e.length) return t;
          let n = e[0].instances.find(
            (n) =>
              n.base == t && ((t, e) => {
                return t.length == e.length && t.every((t, n) => t == e[n]);
              })(e, n.modified)
          );
          if (n) return n;
          let i = [],
            r = new c(i, t, e);
          for (let o of e) o.instances.push(r);
          let s = (function t(e) {
            let n = [e];
            for (let i = 0; i < e.length; i++)
              for (let r of t(e.slice(0, i).concat(e.slice(i + 1)))) n.push(r);
            return n;
          })(e);
          for (let o of t.set) for (let t of s) i.push(f.get(o, t));
          return r;
        }
      }
      function d(t) {
        let e = Object.create(null);
        for (let n in t) {
          let i = t[n];
          Array.isArray(i) || (i = [i]);
          for (let t of n.split(" "))
            if (t) {
              let n = [],
                r = 2,
                s = t;
              for (let e = 0; ; ) {
                if ("..." == s && e > 0 && e + 3 == t.length) {
                  r = 1;
                  break;
                }
                let i = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(s);
                if (!i) throw new RangeError("Invalid path: " + t);
                if (
                  (n.push(
                    "*" == i[0]
                      ? null
                      : '"' == i[0][0]
                      ? JSON.parse(i[0])
                      : i[0]
                  ),
                  (e += i[0].length),
                  e == t.length)
                )
                  break;
                let o = t[e++];
                if (e == t.length && "!" == o) {
                  r = 0;
                  break;
                }
                if ("/" != o) throw new RangeError("Invalid path: " + t);
                s = t.slice(e);
              }
              let o = n.length - 1,
                l = n[o];
              if (!l) throw new RangeError("Invalid path: " + t);
              let a = new k(i, r, o > 0 ? n.slice(0, o) : null);
              e[l] = a.sort(e[l]);
            }
        }
        return p.add(e);
      }
      const p = new i.b(),
        m = o.Facet.define({
          combine: (t) => (t.length ? w.combinedMatch(t) : null),
        }),
        g = o.Facet.define({ combine: (t) => (t.length ? t[0].match : null) });
      function b() {
        return null;
      }
      function x(t) {
        return t.facet(m) || t.facet(g) || b;
      }
      class k {
        constructor(t, e, n, i) {
          (this.tags = t), (this.mode = e), (this.context = n), (this.next = i);
        }
        sort(t) {
          return !t || t.depth < this.depth
            ? ((this.next = t), this)
            : ((t.next = this.sort(t.next)), t);
        }
        get depth() {
          return this.context ? this.context.length : 0;
        }
      }
      class w {
        constructor(t, e) {
          let n;
          function i(t) {
            let e = r.a.newName();
            return ((n || (n = Object.create(null)))["." + e] = t), e;
          }
          (this.map = Object.create(null)),
            (this.all =
              "string" == typeof e.all ? e.all : e.all ? i(e.all) : null);
          for (let r of t) {
            let t =
                (r.class || i(Object.assign({}, r, { tag: null }))) +
                (this.all ? " " + this.all : ""),
              e = r.tag;
            if (Array.isArray(e)) for (let n of e) this.map[n.id] = t;
            else this.map[e.id] = t;
          }
          (this.module = n ? new r.a(n) : null),
            (this.scope = e.scope || null),
            (this.match = this.match.bind(this));
          let o = [y];
          this.module && o.push(s.EditorView.styleModule.of(this.module)),
            (this.extension = o.concat(m.of(this))),
            (this.fallback = o.concat(g.of(this)));
        }
        match(t, e) {
          if (this.scope && e != this.scope) return null;
          for (let n of t.set) {
            let e = this.map[n.id];
            if (void 0 !== e) return n != t && (this.map[t.id] = e), e;
          }
          return (this.map[t.id] = this.all);
        }
        static combinedMatch(t) {
          if (1 == t.length) return t[0].match;
          let e = t.some((t) => t.scope) ? void 0 : Object.create(null);
          return (n, i) => {
            let r = e && e[n.id];
            if (void 0 !== r) return r;
            let s = null;
            for (let e of t) {
              let t = e.match(n, i);
              t && (s = s ? s + " " + t : t);
            }
            return e && (e[n.id] = s), s;
          };
        }
        static define(t, e) {
          return new w(t, e || {});
        }
        static get(t, e, n) {
          return x(t)(e, n || i.d.none);
        }
      }
      function v(t, e, n) {
        C(t, 0, t.length, e, n);
      }
      const y = o.Prec.fallback(
          s.ViewPlugin.fromClass(
            class {
              constructor(t) {
                (this.markCache = Object.create(null)),
                  (this.tree = Object(l.syntaxTree)(t.state)),
                  (this.decorations = this.buildDeco(t, x(t.state)));
              }
              update(t) {
                let e = Object(l.syntaxTree)(t.state),
                  n = x(t.state),
                  i = n != t.startState.facet(m);
                e.length < t.view.viewport.to && !i
                  ? (this.decorations = this.decorations.map(t.changes))
                  : (e != this.tree || t.viewportChanged || i) &&
                    ((this.tree = e),
                    (this.decorations = this.buildDeco(t.view, n)));
              }
              buildDeco(t, e) {
                if (e == b || !this.tree.length) return s.Decoration.none;
                let n = new a.c();
                for (let { from: i, to: r } of t.visibleRanges)
                  C(this.tree, i, r, e, (t, e, i) => {
                    n.add(
                      t,
                      e,
                      this.markCache[i] ||
                        (this.markCache[i] = s.Decoration.mark({ class: i }))
                    );
                  });
                return n.finish();
              }
            },
            { decorations: (t) => t.decorations }
          )
        ),
        S = [""];
      function C(t, e, n, i, r) {
        let s = e,
          o = "",
          l = t.topNode.cursor;
        !(function t(a, h, c) {
          let { type: u, from: f, to: d } = l;
          if (f >= n || d <= e) return;
          (S[h] = u.name), u.isTop && (c = u);
          let m = a,
            g = u.prop(p),
            b = !1;
          for (; g; ) {
            if (!g.context || A(g.context, S, h)) {
              for (let t of g.tags) {
                let e = i(t, c);
                e &&
                  (m && (m += " "),
                  (m += e),
                  1 == g.mode
                    ? (a += (a ? " " : "") + e)
                    : 0 == g.mode && (b = !0));
              }
              break;
            }
            g = g.next;
          }
          if (
            (m != o && (f > s && o && r(s, l.from, o), (s = f), (o = m)),
            !b && l.firstChild())
          ) {
            do {
              let e = l.to;
              if ((t(a, h + 1, c), o != m)) {
                let t = Math.min(n, e);
                t > s && o && r(s, t, o), (s = t), (o = m);
              }
            } while (l.nextSibling());
            l.parent();
          }
        })("", 0, t.type);
      }
      function A(t, e, n) {
        if (t.length > n - 1) return !1;
        for (let i = n - 1, r = t.length - 1; r >= 0; r--, i--) {
          let n = t[r];
          if (n && n != e[i]) return !1;
        }
        return !0;
      }
      const L = c.define,
        T = L(),
        E = L(),
        I = L(E),
        M = L(),
        P = L(M),
        B = L(M),
        N = L(),
        O = L(N),
        H = L(),
        D = L(),
        j = L(),
        R = L(j),
        _ = L(),
        F = {
          comment: T,
          lineComment: L(T),
          blockComment: L(T),
          docComment: L(T),
          name: E,
          variableName: L(E),
          typeName: I,
          tagName: L(I),
          propertyName: L(E),
          className: L(E),
          labelName: L(E),
          namespace: L(E),
          macroName: L(E),
          literal: M,
          string: P,
          docString: L(P),
          character: L(P),
          number: B,
          integer: L(B),
          float: L(B),
          bool: L(M),
          regexp: L(M),
          escape: L(M),
          color: L(M),
          url: L(M),
          keyword: H,
          self: L(H),
          null: L(H),
          atom: L(H),
          unit: L(H),
          modifier: L(H),
          operatorKeyword: L(H),
          controlKeyword: L(H),
          definitionKeyword: L(H),
          operator: D,
          derefOperator: L(D),
          arithmeticOperator: L(D),
          logicOperator: L(D),
          bitwiseOperator: L(D),
          compareOperator: L(D),
          updateOperator: L(D),
          definitionOperator: L(D),
          typeOperator: L(D),
          controlOperator: L(D),
          punctuation: j,
          separator: L(j),
          bracket: R,
          angleBracket: L(R),
          squareBracket: L(R),
          paren: L(R),
          brace: L(R),
          content: N,
          heading: O,
          heading1: L(O),
          heading2: L(O),
          heading3: L(O),
          heading4: L(O),
          heading5: L(O),
          heading6: L(O),
          contentSeparator: L(N),
          list: L(N),
          quote: L(N),
          emphasis: L(N),
          strong: L(N),
          link: L(N),
          monospace: L(N),
          inserted: L(),
          deleted: L(),
          changed: L(),
          invalid: L(),
          meta: _,
          documentMeta: L(_),
          annotation: L(_),
          processingInstruction: L(_),
          definition: c.defineModifier(),
          constant: c.defineModifier(),
          function: c.defineModifier(),
          standard: c.defineModifier(),
          local: c.defineModifier(),
          special: c.defineModifier(),
        },
        z = w.define([
          { tag: F.link, textDecoration: "underline" },
          { tag: F.heading, textDecoration: "underline", fontWeight: "bold" },
          { tag: F.emphasis, fontStyle: "italic" },
          { tag: F.strong, fontWeight: "bold" },
          { tag: F.keyword, color: "#708" },
          {
            tag: [F.atom, F.bool, F.url, F.contentSeparator, F.labelName],
            color: "#219",
          },
          { tag: [F.literal, F.inserted], color: "#164" },
          { tag: [F.string, F.deleted], color: "#a11" },
          { tag: [F.regexp, F.escape, F.special(F.string)], color: "#e40" },
          { tag: F.definition(F.variableName), color: "#00f" },
          { tag: F.local(F.variableName), color: "#30a" },
          { tag: [F.typeName, F.namespace], color: "#085" },
          { tag: F.className, color: "#167" },
          { tag: [F.special(F.variableName), F.macroName], color: "#256" },
          { tag: F.definition(F.propertyName), color: "#00c" },
          { tag: F.comment, color: "#940" },
          { tag: F.meta, color: "#7a757a" },
          { tag: F.invalid, color: "#f00" },
        ]),
        $ = w.define([
          { tag: F.link, class: "cmt-link" },
          { tag: F.heading, class: "cmt-heading" },
          { tag: F.emphasis, class: "cmt-emphasis" },
          { tag: F.strong, class: "cmt-strong" },
          { tag: F.keyword, class: "cmt-keyword" },
          { tag: F.atom, class: "cmt-atom" },
          { tag: F.bool, class: "cmt-bool" },
          { tag: F.url, class: "cmt-url" },
          { tag: F.labelName, class: "cmt-labelName" },
          { tag: F.inserted, class: "cmt-inserted" },
          { tag: F.deleted, class: "cmt-deleted" },
          { tag: F.literal, class: "cmt-literal" },
          { tag: F.string, class: "cmt-string" },
          { tag: F.number, class: "cmt-number" },
          {
            tag: [F.regexp, F.escape, F.special(F.string)],
            class: "cmt-string2",
          },
          { tag: F.variableName, class: "cmt-variableName" },
          { tag: F.local(F.variableName), class: "cmt-variableName cmt-local" },
          {
            tag: F.definition(F.variableName),
            class: "cmt-variableName cmt-definition",
          },
          { tag: F.special(F.variableName), class: "cmt-variableName2" },
          { tag: F.typeName, class: "cmt-typeName" },
          { tag: F.namespace, class: "cmt-namespace" },
          { tag: F.macroName, class: "cmt-macroName" },
          { tag: F.propertyName, class: "cmt-propertyName" },
          { tag: F.operator, class: "cmt-operator" },
          { tag: F.comment, class: "cmt-comment" },
          { tag: F.meta, class: "cmt-meta" },
          { tag: F.invalid, class: "cmt-invalid" },
          { tag: F.punctuation, class: "cmt-punctuation" },
        ]);
    },
    "yqQ+": function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "EditorParseContext", () => {
          return m;
        }),
        n.d(e, "IndentContext", () => {
          return I;
        }),
        n.d(e, "Language", () => {
          return h;
        }),
        n.d(e, "LanguageDescription", () => {
          return S;
        }),
        n.d(e, "LanguageSupport", () => {
          return y;
        }),
        n.d(e, "LezerLanguage", () => {
          return u;
        }),
        n.d(e, "TreeIndentContext", () => {
          return O;
        }),
        n.d(e, "continuedIndent", () => {
          return _;
        }),
        n.d(e, "defineLanguageFacet", () => {
          return a;
        }),
        n.d(e, "delimitedIndent", () => {
          return D;
        }),
        n.d(e, "ensureSyntaxTree", () => {
          return d;
        }),
        n.d(e, "flatIndent", () => {
          return R;
        }),
        n.d(e, "foldInside", () => {
          return V;
        }),
        n.d(e, "foldNodeProp", () => {
          return q;
        }),
        n.d(e, "foldService", () => {
          return $;
        }),
        n.d(e, "foldable", () => {
          return W;
        }),
        n.d(e, "getIndentUnit", () => {
          return L;
        }),
        n.d(e, "getIndentation", () => {
          return E;
        }),
        n.d(e, "indentNodeProp", () => {
          return M;
        }),
        n.d(e, "indentOnInput", () => {
          return z;
        }),
        n.d(e, "indentService", () => {
          return C;
        }),
        n.d(e, "indentString", () => {
          return T;
        }),
        n.d(e, "indentUnit", () => {
          return A;
        }),
        n.d(e, "language", () => {
          return v;
        }),
        n.d(e, "languageDataProp", () => {
          return l;
        }),
        n.d(e, "syntaxTree", () => {
          return f;
        });
      const i = n("WQMp"), r = n("uZp5"), s = n("4eob"), o = n("AtEE");
      const l = new i.b();
      function a(t) {
        return s.Facet.define({ combine: t ? (e) => e.concat(t) : void 0 });
      }
      class h {
        constructor(t, e, n, i = []) {
          (this.data = t),
            (this.topNode = n),
            s.EditorState.prototype.hasOwnProperty("tree") ||
              Object.defineProperty(s.EditorState.prototype, "tree", {
                get() {
                  return f(this);
                },
              }),
            (this.parser = e),
            (this.extension = [
              v.of(this),
              s.EditorState.languageData.of((t, e) => t.facet(c(t, e))),
            ].concat(i));
        }
        isActiveAt(t, e) {
          return c(t, e) == this.data;
        }
        findRegions(t) {
          let e = t.facet(v);
          if ((null === e || void 0 === e ? void 0 : e.data) == this.data)
            return [{ from: 0, to: t.doc.length }];
          if (!e || !e.allowsNesting) return [];
          let n = [];
          return (
            f(t).iterate({
              enter: (t, e, i) => {
                if (t.isTop && t.prop(l) == this.data)
                  return n.push({ from: e, to: i }), !1;
              },
            }),
            n
          );
        }
        get allowsNesting() {
          return !0;
        }
        parseString(t) {
          let e,
            n = r.a.of(t.split("\n")),
            o = this.parser.startParse(
              new p(n),
              0,
              new m(
                this.parser,
                s.EditorState.create({ doc: n }),
                [],
                i.e.empty,
                { from: 0, to: t.length },
                []
              )
            );
          for (; !(e = o.advance()); );
          return e;
        }
      }
      function c(t, e) {
        let n = t.facet(v);
        if (!n) return null;
        if (!n.allowsNesting) return n.data;
        let i = f(t).resolve(e, -1);
        for (; i; ) {
          let t = i.type.prop(l);
          if (t) return t;
          i = i.parent;
        }
        return n.data;
      }
      h.setState = s.StateEffect.define();
      class u extends h {
        constructor(t, e) {
          super(t, e, e.topNode), (this.parser = e);
        }
        static define(t) {
          let e = a(t.languageData);
          return new u(
            e,
            t.parser.configure({
              props: [l.add((t) => (t.isTop ? e : void 0))],
            })
          );
        }
        configure(t) {
          return new u(this.data, this.parser.configure(t));
        }
        get allowsNesting() {
          return this.parser.hasNested;
        }
      }
      function f(t) {
        let e = t.field(h.state, !1);
        return e ? e.tree : i.e.empty;
      }
      function d(t, e, n = 50) {
        let i;
        let r =
          null === (i = t.field(h.state, !1)) || void 0 === i
            ? void 0
            : i.context;
        return r && (r.tree.length >= e || r.work(n, e)) ? r.tree : null;
      }
      class p {
        constructor(t, e = t.length) {
          (this.doc = t),
            (this.length = e),
            (this.cursorPos = 0),
            (this.string = ""),
            (this.prevString = ""),
            (this.cursor = t.iter());
        }
        syncTo(t) {
          return (
            t < this.cursorPos &&
              ((this.cursor = this.doc.iter()), (this.cursorPos = 0)),
            (this.prevString = t == this.cursorPos ? this.string : ""),
            (this.string = this.cursor.next(t - this.cursorPos).value),
            (this.cursorPos = t + this.string.length),
            this.cursorPos - this.string.length
          );
        }
        get(t) {
          if (t >= this.length) return -1;
          let e = this.cursorPos - this.string.length;
          if (t < e || t >= this.cursorPos) {
            if (t < e && t >= e - this.prevString.length)
              return this.prevString.charCodeAt(
                t - (e - this.prevString.length)
              );
            e = this.syncTo(t);
          }
          return this.string.charCodeAt(t - e);
        }
        lineAfter(t) {
          if (t >= this.length || t < 0) return "";
          let e = this.cursorPos - this.string.length;
          return (
            (t < e || t >= this.cursorPos) && (e = this.syncTo(t)),
            this.cursor.lineBreak ? "" : this.string.slice(t - e)
          );
        }
        read(t, e) {
          let n = this.cursorPos - this.string.length;
          return t < n || e >= this.cursorPos
            ? this.doc.sliceString(t, e)
            : this.string.slice(t - n, e - n);
        }
        clip(t) {
          return new p(this.doc, t);
        }
      }
      class m {
        constructor(t, e, n = [], i, r, s) {
          (this.parser = t),
            (this.state = e),
            (this.fragments = n),
            (this.tree = i),
            (this.viewport = r),
            (this.skipped = s),
            (this.parse = null),
            (this.tempSkipped = []);
        }
        work(t, e) {
          if (
            this.tree != i.e.empty &&
            (null == e
              ? this.tree.length == this.state.doc.length
              : this.tree.length >= e)
          )
            return this.takeTree(), !0;
          this.parse ||
            (this.parse = this.parser.startParse(
              new p(this.state.doc),
              0,
              this
            ));
          let n = Date.now() + t;
          for (;;) {
            let t = this.parse.advance();
            if (t)
              return (
                (this.fragments = this.withoutTempSkipped(i.g.addTree(t))),
                (this.parse = null),
                (this.tree = t),
                !0
              );
            if (null != e && this.parse.pos >= e) return this.takeTree(), !0;
            if (Date.now() > n) return !1;
          }
        }
        takeTree() {
          this.parse &&
            this.parse.pos > this.tree.length &&
            ((this.tree = this.parse.forceFinish()),
            (this.fragments = this.withoutTempSkipped(
              i.g.addTree(this.tree, this.fragments, !0)
            )));
        }
        withoutTempSkipped(t) {
          for (let e; (e = this.tempSkipped.pop()); ) t = g(t, e.from, e.to);
          return t;
        }
        changes(t, e) {
          let { fragments: n, tree: r, viewport: s, skipped: o } = this;
          if ((this.takeTree(), !t.empty)) {
            let e = [];
            if (
              (t.iterChangedRanges((t, n, i, r) =>
                e.push({ fromA: t, toA: n, fromB: i, toB: r })
              ),
              (n = i.g.applyChanges(n, e)),
              (r = i.e.empty),
              (s = { from: t.mapPos(s.from, -1), to: t.mapPos(s.to, 1) }),
              this.skipped.length)
            ) {
              o = [];
              for (let e of this.skipped) {
                let n = t.mapPos(e.from, 1),
                  i = t.mapPos(e.to, -1);
                n < i && o.push({ from: n, to: i });
              }
            }
          }
          return new m(this.parser, e, n, r, s, o);
        }
        updateViewport(t) {
          this.viewport = t;
          let e = this.skipped.length;
          for (let n = 0; n < this.skipped.length; n++) {
            let { from: e, to: i } = this.skipped[n];
            e < t.to &&
              i > t.from &&
              ((this.fragments = g(this.fragments, e, i)),
              this.skipped.splice(n--, 1));
          }
          return this.skipped.length < e;
        }
        reset() {
          this.parse && (this.takeTree(), (this.parse = null));
        }
        skipUntilInView(t, e) {
          this.skipped.push({ from: t, to: e });
        }
        movedPast(t) {
          return this.tree.length < t && this.parse && this.parse.pos >= t;
        }
      }
      function g(t, e, n) {
        return i.g.applyChanges(t, [{ fromA: e, toA: n, fromB: e, toB: n }]);
      }
      m.skippingParser = {
        startParse: (t, e, n) => ({
          pos: e,
          advance() {
            return (
              n.tempSkipped.push({ from: e, to: t.length }),
              (this.pos = t.length),
              new i.e(i.d.none, [], [], t.length - e)
            );
          },
          forceFinish() {
            return this.advance();
          },
        }),
      };
      class b {
        constructor(t) {
          (this.context = t), (this.tree = t.tree);
        }
        apply(t) {
          if (!t.docChanged) return this;
          let e = this.context.changes(t.changes, t.state),
            n =
              this.context.tree.length == t.startState.doc.length
                ? void 0
                : Math.max(
                    t.changes.mapPos(this.context.tree.length),
                    e.viewport.to
                  );
          return e.work(25, n) || e.takeTree(), new b(e);
        }
        static init(t) {
          let e = new m(
            t.facet(v).parser,
            t,
            [],
            i.e.empty,
            { from: 0, to: t.doc.length },
            []
          );
          return e.work(25) || e.takeTree(), new b(e);
        }
      }
      h.state = s.StateField.define({
        create: b.init,
        update(t, e) {
          for (let n of e.effects) if (n.is(h.setState)) return n.value;
          return e.startState.facet(v) != e.state.facet(v)
            ? b.init(e.state)
            : t.apply(e);
        },
      });
      let x =
          ("undefined" != typeof window && window.requestIdleCallback) ||
          ((t, { timeout: e }) => setTimeout(t, e)),
        k =
          ("undefined" != typeof window && window.cancelIdleCallback) ||
          clearTimeout;
      const w = o.ViewPlugin.fromClass(
          class {
            constructor(t) {
              (this.view = t),
                (this.working = -1),
                (this.chunkEnd = -1),
                (this.chunkBudget = -1),
                (this.work = this.work.bind(this)),
                this.scheduleWork();
            }
            update(t) {
              if (t.viewportChanged) {
                let e = this.view.state.field(h.state).context;
                e.updateViewport(t.view.viewport) && e.reset(),
                  this.view.viewport.to > e.tree.length && this.scheduleWork();
              }
              t.docChanged &&
                (this.view.hasFocus && (this.chunkBudget += 50),
                this.scheduleWork());
            }
            scheduleWork() {
              if (this.working > -1) return;
              let { state: t } = this.view;
              t.field(h.state).tree.length >= t.doc.length ||
                (this.working = x(this.work, { timeout: 500 }));
            }
            work(t) {
              this.working = -1;
              let e = Date.now();
              if (
                (this.chunkEnd < e &&
                  (this.chunkEnd < 0 || this.view.hasFocus) &&
                  ((this.chunkEnd = e + 3e4), (this.chunkBudget = 3e3)),
                this.chunkBudget <= 0)
              )
                return;
              let {
                  state: n,
                  viewport: { to: i },
                } = this.view,
                r = n.field(h.state);
              if (r.tree.length >= i + 1e6) return;
              let s = Math.min(
                  this.chunkBudget,
                  t ? Math.max(25, t.timeRemaining()) : 100
                ),
                o = r.context.work(s, i + 1e6);
              (this.chunkBudget -= Date.now() - e),
                (o || this.chunkBudget <= 0 || r.context.movedPast(i)) &&
                  (r.context.takeTree(),
                  this.view.dispatch({
                    effects: h.setState.of(new b(r.context)),
                  })),
                !o && this.chunkBudget > 0 && this.scheduleWork();
            }
            destroy() {
              this.working >= 0 && k(this.working);
            }
          },
          {
            eventHandlers: {
              focus() {
                this.scheduleWork();
              },
            },
          }
        ),
        v = s.Facet.define({
          combine: (t) => (t.length ? t[0] : null),
          enables: [h.state, w],
        });
      class y {
        constructor(t, e = []) {
          (this.language = t), (this.support = e), (this.extension = [t, e]);
        }
      }
      class S {
        constructor(t, e, n, i, r) {
          (this.name = t),
            (this.alias = e),
            (this.extensions = n),
            (this.filename = i),
            (this.loadFunc = r),
            (this.support = void 0),
            (this.loading = null);
        }
        load() {
          return (
            this.loading ||
            (this.loading = this.loadFunc().then(
              (t) => (this.support = t),
              (t) => {
                throw ((this.loading = null), t);
              }
            ))
          );
        }
        static of(t) {
          return new S(
            t.name,
            (t.alias || []).concat(t.name).map((t) => t.toLowerCase()),
            t.extensions || [],
            t.filename,
            t.load
          );
        }
        static matchFilename(t, e) {
          for (let i of t) if (i.filename && i.filename.test(e)) return i;
          let n = /\.([^.]+)$/.exec(e);
          if (n) for (let i of t) if (i.extensions.indexOf(n[1]) > -1) return i;
          return null;
        }
        static matchLanguageName(t, e, n = !0) {
          e = e.toLowerCase();
          for (let i of t) if (i.alias.some((t) => t == e)) return i;
          if (n)
            for (let i of t)
              for (let t of i.alias) {
                let n = e.indexOf(t);
                if (
                  n > -1 &&
                  (t.length > 2 ||
                    (!/\w/.test(e[n - 1]) && !/\w/.test(e[n + t.length])))
                )
                  return i;
              }
          return null;
        }
      }
      const C = s.Facet.define(),
        A = s.Facet.define({
          combine: (t) => {
            if (!t.length) return "  ";
            if (!/^(?: +|\t+)$/.test(t[0]))
              throw new Error("Invalid indent unit: " + JSON.stringify(t[0]));
            return t[0];
          },
        });
      function L(t) {
        let e = t.facet(A);
        return 9 == e.charCodeAt(0) ? t.tabSize * e.length : e.length;
      }
      function T(t, e) {
        let n = "",
          i = t.tabSize;
        if (9 == t.facet(A).charCodeAt(0))
          for (; e >= i; ) (n += "\t"), (e -= i);
        for (let r = 0; r < e; r++) n += " ";
        return n;
      }
      function E(t, e) {
        t instanceof s.EditorState && (t = new I(t));
        for (let i of t.state.facet(C)) {
          let n = i(t, e);
          if (null != n) return n;
        }
        let n = f(t.state);
        return n ? ((t, e, n) => {
              let i = e.resolve(n);
              for (let r = i, s = n; ; ) {
                let t = r.childBefore(s);
                if (!t) break;
                t.type.isError && t.from == t.to
                  ? ((i = r), (s = t.from))
                  : ((r = t), (s = r.to + 1));
              }
              return B(i, n, t);
            })(t, n, e) : null;
      }
      class I {
        constructor(t, e = {}) {
          (this.state = t), (this.options = e), (this.unit = L(t));
        }
        textAfterPos(t) {
          let e, n;
          let i =
            null === (e = this.options) || void 0 === e
              ? void 0
              : e.simulateBreak;
          return t == i &&
            (null === (n = this.options) || void 0 === n
              ? void 0
              : n.simulateDoubleBreak)
            ? ""
            : this.state.sliceDoc(
                t,
                Math.min(
                  t + 100,
                  null != i && i > t ? i : 1e9,
                  this.state.doc.lineAt(t).to
                )
              );
        }
        column(t) {
          let e;
          let n = this.state.doc.lineAt(t),
            i = n.text.slice(0, t - n.from),
            r = this.countColumn(i, t - n.from),
            s = (
              null === (e = this.options) || void 0 === e
                ? void 0
                : e.overrideIndentation
            )
              ? this.options.overrideIndentation(n.from)
              : -1;
          return s > -1 && (r += s - this.countColumn(i, i.search(/\S/))), r;
        }
        countColumn(t, e) {
          return Object(r.d)(e < 0 ? t : t.slice(0, e), 0, this.state.tabSize);
        }
        lineIndent(t) {
          var e;
          let n =
            null === (e = this.options) || void 0 === e
              ? void 0
              : e.overrideIndentation;
          if (n) {
            let e = n(t.from);
            if (e > -1) return e;
          }
          return this.countColumn(t.text, t.text.search(/\S/));
        }
      }
      const M = new i.b();
      function P(t) {
        let e = t.type.prop(M);
        if (e) return e;
        let n,
          r = t.firstChild;
        if (r && (n = r.type.prop(i.b.closedBy))) {
          let e = t.lastChild,
            i = e && n.indexOf(e.name) > -1;
          return (t) =>
            j(
              t,
              !0,
              1,
              void 0,
              i &&
                !(t => {
                  let e, n;
                  return (
                    t.pos ==
                      (null === (e = t.options) || void 0 === e
                        ? void 0
                        : e.simulateBreak) &&
                    (null === (n = t.options) || void 0 === n
                      ? void 0
                      : n.simulateDoubleBreak)
                  );
                })(t)
                ? e.from
                : void 0
            );
        }
        return null == t.parent ? N : null;
      }
      function B(t, e, n) {
        for (; t; t = t.parent) {
          let i = P(t);
          if (i) return i(new O(n, e, t));
        }
        return null;
      }
      function N() {
        return 0;
      }
      class O extends I {
        constructor(t, e, n) {
          super(t.state, t.options),
            (this.base = t),
            (this.pos = e),
            (this.node = n);
        }
        get textAfter() {
          return this.textAfterPos(this.pos);
        }
        get baseIndent() {
          let t = this.state.doc.lineAt(this.node.from);
          for (;;) {
            let e = this.node.resolve(t.from);
            for (; e.parent && e.parent.from == e.from; ) e = e.parent;
            if (H(e, this.node)) break;
            t = this.state.doc.lineAt(e.from);
          }
          return this.lineIndent(t);
        }
        continue() {
          let t = this.node.parent;
          return t ? B(t, this.pos, this.base) : 0;
        }
      }
      function H(t, e) {
        for (let n = e; n; n = n.parent) if (t == n) return !0;
        return !1;
      }
      function D({ closing: t, align: e = !0, units: n = 1 }) {
        return (i) => j(i, e, n, t);
      }
      function j(t, e, n, i, r) {
        let s = t.textAfter,
          o = s.match(/^\s*/)[0].length,
          l = (i && s.slice(o, o + i.length) == i) || r == t.pos + o,
          a = e ? (t => {
                let e;
                let n = t.node,
                  i = n.childAfter(n.from),
                  r = n.lastChild;
                if (!i) return null;
                let s =
                    null === (e = t.options) || void 0 === e
                      ? void 0
                      : e.simulateBreak,
                  o = t.state.doc.lineAt(i.from),
                  l = null == s || s <= o.from ? o.to : Math.min(o.to, s);
                for (let a = i.to; ; ) {
                  let t = n.childAfter(a);
                  if (!t || t == r) return null;
                  if (!t.type.isSkipped) return t.from < l ? i : null;
                  a = t.to;
                }
              })(t) : null;
        return a
          ? l
            ? t.column(a.from)
            : t.column(a.to)
          : t.baseIndent + (l ? 0 : t.unit * n);
      }
      const R = (t) => t.baseIndent;
      function _({ except: t, units: e = 1 } = {}) {
        return (n) => {
          let i = t && t.test(n.textAfter);
          return n.baseIndent + (i ? 0 : e * n.unit);
        };
      }
      const F = 200;
      function z() {
        return s.EditorState.transactionFilter.of((t) => {
          if (!t.docChanged || "input" != t.annotation(s.Transaction.userEvent))
            return t;
          let e = t.startState.languageDataAt(
            "indentOnInput",
            t.startState.selection.main.head
          );
          if (!e.length) return t;
          let n = t.newDoc,
            { head: i } = t.newSelection.main,
            r = n.lineAt(i);
          if (i > r.from + F) return t;
          let o = n.sliceString(r.from, i);
          if (!e.some((t) => t.test(o))) return t;
          let { state: l } = t,
            a = -1,
            h = [];
          for (let { head: s } of l.selection.ranges) {
            let t = l.doc.lineAt(s);
            if (t.from == a) continue;
            a = t.from;
            let e = E(l, t.from);
            if (null == e) continue;
            let n = /^\s*/.exec(t.text)[0],
              i = T(l, e);
            n != i &&
              h.push({ from: t.from, to: t.from + n.length, insert: i });
          }
          return h.length ? [t, { changes: h }] : t;
        });
      }
      const $ = s.Facet.define(),
        q = new i.b();
      function V(t) {
        let e = t.firstChild,
          n = t.lastChild;
        return e && e.to < n.from
          ? { from: e.to, to: n.type.isError ? t.to : n.from }
          : null;
      }
      function W(t, e, n) {
        for (let i of t.facet($)) {
          let r = i(t, e, n);
          if (r) return r;
        }
        return ((t, e, n) => {
          let i = f(t);
          if (0 == i.length) return null;
          let r = null;
          for (let s = i.resolve(n); s; s = s.parent) {
            if (s.to <= n || s.from > n) continue;
            if (r && s.from < e) break;
            let i = s.type.prop(q);
            if (i) {
              let o = i(s, t);
              o && o.from <= n && o.from >= e && o.to > n && (r = o);
            }
          }
          return r;
        })(t, e, n);
      }
    },
  },
]);
//# sourceMappingURL=c8f7fe3b0e41be846d5687592cf2018ff6e22687.a93d9811e7bf235dcfbf.js.map
